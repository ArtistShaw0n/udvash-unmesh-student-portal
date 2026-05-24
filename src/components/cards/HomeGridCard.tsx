"use client";

import { IconChip } from "../atoms/IconChip";
import { Skeleton } from "../atoms/Skeleton";
import { StatusDot } from "../atoms/StatusDot";
import { Text } from "../atoms/Text";
import { cn } from "@/lib/cn";
import type { IconName } from "../atoms/Icon";

export type HomeGridTone = "brand" | "success" | "warning" | "error" | "info" | "neutral";

export type HomeGridCardProps = {
  icon: IconName;
  title: string;
  meta?: string;
  tone?: HomeGridTone;
  notification?: number | boolean;
  loading?: boolean;
  onClick?: () => void;
  className?: string;
};

/**
 * HomeGridCard — Figma `Card/HomeGrid` (176×60) and the matching
 * `Card/HomeGrid-Notification` variant. 2-column tile used on the
 * Home dashboard grid. Compact: icon chip + title + meta line, with
 * optional notification dot/badge.
 */
export function HomeGridCard({
  icon,
  title,
  meta,
  tone = "brand",
  notification,
  loading = false,
  onClick,
  className,
}: HomeGridCardProps) {
  if (loading) {
    return (
      <div
        className={cn(
          "flex h-[60px] w-full max-w-[176px] items-center gap-3 rounded-md border border-line-subtle bg-surface p-3 shadow-sm",
          className,
        )}
        aria-busy="true"
      >
        <Skeleton variant="rect" width={36} height={36} />
        <div className="flex-1 space-y-1.5">
          <Skeleton width="80%" height={12} />
          <Skeleton width="50%" height={10} />
        </div>
      </div>
    );
  }

  const Tag = onClick ? "button" : "div";
  return (
    <Tag
      type={onClick ? "button" : undefined}
      onClick={onClick}
      className={cn(
        "relative flex h-[60px] w-full max-w-[176px] items-center gap-3 rounded-md border border-line-subtle bg-surface p-3 text-left shadow-sm",
        onClick && "cursor-pointer transition-colors hover:bg-surface-subtle",
        className,
      )}
    >
      <IconChip name={icon} tone={tone} size="md" />
      <div className="min-w-0 flex-1">
        <Text size="sm" weight="semibold" className="truncate">
          {title}
        </Text>
        {meta && (
          <Text size="xs" color="muted" className="truncate">
            {meta}
          </Text>
        )}
      </div>
      {notification ? (
        typeof notification === "number" ? (
          <span className="absolute right-2 top-2 inline-flex min-w-4 items-center justify-center rounded-full bg-error px-1 text-[10px] font-semibold leading-4 text-onbrand">
            {notification > 99 ? "99+" : notification}
          </span>
        ) : (
          <StatusDot variant="error" size="md" pulse className="absolute right-2 top-2" />
        )
      ) : null}
    </Tag>
  );
}
