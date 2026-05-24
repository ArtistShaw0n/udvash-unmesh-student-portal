"use client";

import { Icon, type IconName } from "../atoms/Icon";
import { IconChip } from "../atoms/IconChip";
import { Skeleton } from "../atoms/Skeleton";
import { Tag } from "../atoms/Tag";
import { Text } from "../atoms/Text";
import { cn } from "@/lib/cn";

export type CourseContentStatus = "locked" | "available" | "in-progress" | "completed";

export type CourseContentCardProps = {
  index?: number;
  title: string;
  meta?: string;
  icon?: IconName;
  status?: CourseContentStatus;
  progress?: number;
  loading?: boolean;
  onClick?: () => void;
  className?: string;
};

/**
 * CourseContentCard — Figma `Card/CourseContent` (336×60). One row inside
 * the course chapter list. Compact single-line layout with leading icon
 * chip, title + meta, trailing status indicator.
 */
export function CourseContentCard({
  index,
  title,
  meta,
  icon = "BookOpen",
  status = "available",
  progress,
  loading = false,
  onClick,
  className,
}: CourseContentCardProps) {
  if (loading) {
    return (
      <div
        className={cn(
          "flex w-full max-w-[336px] items-center gap-3 rounded-md border border-line-subtle bg-surface p-3 shadow-sm",
          className,
        )}
        aria-busy="true"
      >
        <Skeleton variant="rect" width={36} height={36} />
        <div className="flex-1 space-y-2">
          <Skeleton width="70%" height={12} />
          <Skeleton width="40%" height={10} />
        </div>
        <Skeleton variant="circle" width={20} height={20} />
      </div>
    );
  }

  const isInteractive = !!onClick && status !== "locked";

  return (
    <div
      role={isInteractive ? "button" : undefined}
      tabIndex={isInteractive ? 0 : undefined}
      onClick={isInteractive ? onClick : undefined}
      onKeyDown={
        isInteractive
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onClick?.();
              }
            }
          : undefined
      }
      className={cn(
        "flex w-full max-w-[336px] items-center gap-3 rounded-md border border-line-subtle bg-surface p-3 shadow-sm",
        isInteractive && "cursor-pointer transition-colors hover:bg-surface-subtle",
        status === "locked" && "opacity-60",
        className,
      )}
    >
      <IconChip
        name={icon}
        tone={status === "completed" ? "success" : status === "in-progress" ? "brand" : "neutral"}
        size="md"
      />
      <div className="min-w-0 flex-1">
        <Text size="md" weight="medium" className="truncate">
          {index != null && <span className="mr-1 text-muted">#{index}</span>}
          {title}
        </Text>
        {meta && (
          <Text size="xs" color="muted" className="truncate">
            {meta}
            {progress != null && status === "in-progress" && ` · ${Math.round(progress)}% complete`}
          </Text>
        )}
      </div>
      <StatusIcon status={status} />
    </div>
  );
}

function StatusIcon({ status }: { status: CourseContentStatus }) {
  switch (status) {
    case "locked":
      return <Icon name="Lock" size="sm" className="text-placeholder" />;
    case "in-progress":
      return <Tag variant="brand" size="sm">In progress</Tag>;
    case "completed":
      return <Icon name="CircleCheck" size="md" className="text-success" />;
    default:
      return <Icon name="ChevronRight" size="sm" className="text-muted" />;
  }
}
