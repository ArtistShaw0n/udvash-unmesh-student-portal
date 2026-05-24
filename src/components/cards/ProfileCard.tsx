"use client";

import { Avatar } from "../atoms/Avatar";
import { Button } from "../atoms/Button";
import { Divider } from "../atoms/Divider";
import { Icon, type IconName } from "../atoms/Icon";
import { Skeleton } from "../atoms/Skeleton";
import { Text } from "../atoms/Text";
import { cn } from "@/lib/cn";

export type ProfileField = {
  label: string;
  value: React.ReactNode;
  icon?: IconName;
};

export type ProfileCardProps = {
  name: string;
  registrationNo: string | number;
  avatarSrc?: string;
  personalInfo?: ProfileField[];
  contactInfo?: ProfileField[];
  loading?: boolean;
  onEdit?: () => void;
  className?: string;
};

/**
 * ProfileCard — Figma `Card/ProfileDetail` + `Card/ViewProfile` (336×548
 * and 336×605). Used on the Profile screen as a single tall card with
 * avatar, name, reg-no, and two field groups.
 */
export function ProfileCard({
  name,
  registrationNo,
  avatarSrc,
  personalInfo = [],
  contactInfo = [],
  loading = false,
  onEdit,
  className,
}: ProfileCardProps) {
  if (loading) {
    return (
      <article
        className={cn(
          "w-full max-w-[360px] rounded-md border border-line-subtle bg-surface p-4 shadow-sm",
          className,
        )}
        aria-busy="true"
      >
        <div className="mb-3 flex flex-col items-center gap-3">
          <Skeleton variant="circle" width={96} height={96} />
          <Skeleton width="50%" height={18} />
          <Skeleton width="30%" height={14} />
        </div>
        <Skeleton variant="rect" height={1} className="my-4" />
        <div className="space-y-3">
          <Skeleton width="40%" height={12} />
          <Skeleton lines={4} />
        </div>
      </article>
    );
  }

  return (
    <article
      className={cn(
        "w-full max-w-[360px] rounded-md border border-line-subtle bg-surface p-4 shadow-sm",
        className,
      )}
    >
      {/* Header: avatar + name */}
      <div className="mb-4 flex flex-col items-center text-center">
        <Avatar src={avatarSrc} name={name} size="xl" className="size-24 text-xl" />
        <Text size="lg" weight="semibold" className="mt-3">
          {name}
        </Text>
        <Text size="sm" color="muted">
          Reg. No. {registrationNo}
        </Text>
        {onEdit && (
          <Button
            variant="ghost"
            size="sm"
            iconLeft={<Icon name="Pencil" size="xs" />}
            onClick={onEdit}
            className="mt-2"
          >
            Edit profile
          </Button>
        )}
      </div>

      <Divider className="my-4" />

      {/* Personal info */}
      {personalInfo.length > 0 && (
        <div className="mb-4">
          <Text size="sm" weight="semibold" className="mb-2">
            Personal Info
          </Text>
          <FieldList fields={personalInfo} />
        </div>
      )}

      {/* Contact info */}
      {contactInfo.length > 0 && (
        <div>
          <Text size="sm" weight="semibold" className="mb-2">
            Contact Info
          </Text>
          <FieldList fields={contactInfo} />
        </div>
      )}
    </article>
  );
}

function FieldList({ fields }: { fields: ProfileField[] }) {
  return (
    <dl className="space-y-2">
      {fields.map((f) => (
        <div key={f.label} className="flex items-baseline gap-2 text-sm">
          {f.icon && <Icon name={f.icon} size="xs" className="text-muted" />}
          <dt className="text-muted">{f.label}:</dt>
          <dd className="font-medium text-ink">{f.value ?? "—"}</dd>
        </div>
      ))}
    </dl>
  );
}
