"use client";

import { Button } from "../atoms/Button";
import { Icon } from "../atoms/Icon";
import { Skeleton } from "../atoms/Skeleton";
import { Tag } from "../atoms/Tag";
import { Text } from "../atoms/Text";
import { cn } from "@/lib/cn";

export type ProgramListCardProps = {
  programName: string;
  level: string;
  branch?: string;
  durationMonths: number;
  subjects: string[];
  priceTaka?: number;
  enrolled?: boolean;
  startsAt?: string;
  loading?: boolean;
  onEnroll?: () => void;
  onDetails?: () => void;
  className?: string;
};

/**
 * ProgramListCard — Figma `Card/ProgramList` (336×348). Marketing-style
 * tile shown on the Add Course / programs list screens. Highlights
 * subjects, duration, branch (Udvash / Unmesh) and price.
 */
export function ProgramListCard({
  programName,
  level,
  branch,
  durationMonths,
  subjects,
  priceTaka,
  enrolled = false,
  startsAt,
  loading = false,
  onEnroll,
  onDetails,
  className,
}: ProgramListCardProps) {
  if (loading) {
    return (
      <article
        className={cn(
          "w-full max-w-[336px] rounded-md border border-line-subtle bg-surface p-4 shadow-sm",
          className,
        )}
        aria-busy="true"
      >
        <div className="mb-3 flex items-center justify-between">
          <Skeleton variant="rect" width={80} height={20} />
          <Skeleton variant="rect" width={50} height={20} />
        </div>
        <Skeleton width="85%" height={18} className="mb-2" />
        <Skeleton width="60%" height={14} className="mb-4" />
        <Skeleton variant="rect" height={48} className="mb-4" />
        <Skeleton variant="rect" height={36} />
      </article>
    );
  }

  return (
    <article
      className={cn(
        "w-full max-w-[336px] rounded-md border border-line-subtle bg-surface p-4 shadow-sm",
        enrolled && "ring-1 ring-success/40",
        className,
      )}
    >
      <div className="mb-3 flex items-center justify-between gap-2">
        <Tag variant="brand">{level}</Tag>
        {branch && <Tag variant="info" size="sm">{branch}</Tag>}
        {enrolled && (
          <span className="inline-flex items-center gap-1 text-xs font-medium text-success">
            <Icon name="CircleCheck" size="xs" />
            Enrolled
          </span>
        )}
      </div>

      <Text size="lg" weight="semibold" className="mb-1 line-clamp-2">
        {programName}
      </Text>

      <div className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted">
        <span className="inline-flex items-center gap-1">
          <Icon name="Calendar" size="xs" />
          {durationMonths} month{durationMonths > 1 ? "s" : ""}
        </span>
        {startsAt && (
          <span className="inline-flex items-center gap-1">
            <Icon name="Clock" size="xs" />
            Starts {startsAt}
          </span>
        )}
      </div>

      {/* Subjects chip cluster */}
      <div className="mb-4 flex flex-wrap gap-1.5">
        {subjects.slice(0, 5).map((s) => (
          <Tag key={s} variant="neutral" size="sm">
            {s}
          </Tag>
        ))}
        {subjects.length > 5 && (
          <Tag variant="neutral" size="sm">
            +{subjects.length - 5}
          </Tag>
        )}
      </div>

      {/* Footer: price + CTAs */}
      <div className="flex items-end justify-between gap-3">
        {priceTaka != null && !enrolled && (
          <div>
            <Text size="xs" color="muted">Total</Text>
            <Text size="xl" weight="bold" className="text-brand">
              ৳{priceTaka.toLocaleString("en-IN")}
            </Text>
          </div>
        )}
        <div className="flex flex-1 justify-end gap-2">
          {onDetails && (
            <Button variant="ghost" size="sm" onClick={onDetails}>
              Details
            </Button>
          )}
          <Button
            variant={enrolled ? "secondary" : "primary"}
            size="sm"
            iconLeft={<Icon name={enrolled ? "BookOpen" : "Plus"} size="xs" />}
            onClick={onEnroll}
          >
            {enrolled ? "Continue" : "Enroll"}
          </Button>
        </div>
      </div>
    </article>
  );
}
