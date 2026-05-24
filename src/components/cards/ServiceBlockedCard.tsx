"use client";

import { Button } from "../atoms/Button";
import { Icon, type IconName } from "../atoms/Icon";
import { IconChip } from "../atoms/IconChip";
import { Skeleton } from "../atoms/Skeleton";
import { Text } from "../atoms/Text";
import { cn } from "@/lib/cn";

export type ServiceBlockedReason = "payment" | "expired" | "blocked" | "no-connection";

export type ServiceBlockedCardProps = {
  reason?: ServiceBlockedReason;
  title?: string;
  message?: string;
  icon?: IconName;
  primaryAction?: { label: string; onClick: () => void };
  secondaryAction?: { label: string; onClick: () => void };
  loading?: boolean;
  className?: string;
};

const presets: Record<
  ServiceBlockedReason,
  { icon: IconName; title: string; message: string }
> = {
  payment: {
    icon: "CreditCard",
    title: "Payment required",
    message: "Your subscription has expired. Renew to continue access to live classes and exams.",
  },
  expired: {
    icon: "CalendarX",
    title: "Course expired",
    message: "This course is no longer available. Browse other programs to keep learning.",
  },
  blocked: {
    icon: "Ban",
    title: "Service unavailable",
    message: "This service is temporarily unavailable. Please contact support if the issue persists.",
  },
  "no-connection": {
    icon: "WifiOff",
    title: "No internet connection",
    message: "Check your network or browse offline content from Downloads.",
  },
};

/**
 * ServiceBlockedCard — Figma `Card/ServiceBlocked` (336×348). Full-card
 * empty/error state for paywall, network failure, expired courses.
 * Use the preset `reason` for common scenarios, or override icon/title/
 * message individually.
 */
export function ServiceBlockedCard({
  reason = "blocked",
  title,
  message,
  icon,
  primaryAction,
  secondaryAction,
  loading = false,
  className,
}: ServiceBlockedCardProps) {
  if (loading) {
    return (
      <article
        className={cn(
          "flex w-full max-w-[336px] flex-col items-center gap-3 rounded-md border border-line-subtle bg-surface p-6 text-center shadow-sm",
          className,
        )}
        aria-busy="true"
      >
        <Skeleton variant="circle" width={56} height={56} />
        <Skeleton width="70%" height={16} />
        <Skeleton lines={2} />
        <Skeleton variant="rect" width={140} height={36} />
      </article>
    );
  }

  const preset = presets[reason];
  const finalIcon = icon ?? preset.icon;
  const finalTitle = title ?? preset.title;
  const finalMessage = message ?? preset.message;

  return (
    <article
      role="alert"
      className={cn(
        "flex w-full max-w-[336px] flex-col items-center gap-3 rounded-md border border-line-subtle bg-surface p-6 text-center shadow-sm",
        className,
      )}
    >
      <IconChip
        name={finalIcon}
        tone={reason === "payment" ? "warning" : reason === "no-connection" ? "neutral" : "error"}
        size="lg"
      />
      <Text size="md" weight="semibold">
        {finalTitle}
      </Text>
      <Text size="sm" color="muted">
        {finalMessage}
      </Text>

      {(primaryAction || secondaryAction) && (
        <div className="mt-2 flex flex-col gap-2">
          {primaryAction && (
            <Button
              iconLeft={
                <Icon
                  name={reason === "no-connection" ? "RefreshCw" : "ArrowRight"}
                  size="sm"
                />
              }
              onClick={primaryAction.onClick}
            >
              {primaryAction.label}
            </Button>
          )}
          {secondaryAction && (
            <Button variant="ghost" size="sm" onClick={secondaryAction.onClick}>
              {secondaryAction.label}
            </Button>
          )}
        </div>
      )}
    </article>
  );
}
