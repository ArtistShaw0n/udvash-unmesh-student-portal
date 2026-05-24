"use client";

import { Icon, type IconName } from "../atoms/Icon";
import { cn } from "@/lib/cn";

export type AlertVariant = "info" | "success" | "warning" | "danger";

export type AlertProps = {
  variant?: AlertVariant;
  title?: React.ReactNode;
  /** Override the default icon for the variant. */
  icon?: IconName;
  /** Render a close (×) button — calls this handler. */
  onClose?: () => void;
  className?: string;
  children?: React.ReactNode;
};

/*
 * Alert — banner with leading icon + title + body. No formalised Figma
 * master in V2 (inline error/info text is used instead), but the pattern
 * is universal and our status tokens provide a clean mapping:
 *   variant=info    → status-info bg + text
 *   variant=success → success-bg
 *   variant=warning → warning-bg
 *   variant=danger  → danger-bg
 */

const variantConfig: Record<
  AlertVariant,
  { box: string; icon: IconName; text: string }
> = {
  info:    { box: "bg-success-bg border-info/30",    icon: "Info",          text: "text-info" },
  success: { box: "bg-success-bg border-success/30", icon: "CircleCheck",   text: "text-success" },
  warning: { box: "bg-warning-bg border-warning/40", icon: "TriangleAlert", text: "text-warning" },
  danger:  { box: "bg-danger-bg border-danger/40",   icon: "CircleAlert",   text: "text-onbrand" },
};

export function Alert({
  variant = "info",
  title,
  icon,
  onClose,
  className,
  children,
}: AlertProps) {
  const cfg = variantConfig[variant];
  return (
    <div
      role="alert"
      className={cn(
        "flex items-start gap-2 rounded-md border p-3",
        cfg.box,
        className,
      )}
    >
      <Icon name={icon ?? cfg.icon} size="sm" className={cn("mt-0.5 shrink-0", cfg.text)} />
      <div className="min-w-0 flex-1">
        {title && (
          <p className={cn("text-sm font-semibold", cfg.text)}>{title}</p>
        )}
        {children && (
          <div className={cn("text-sm", cfg.text, title ? "mt-0.5" : undefined)}>
            {children}
          </div>
        )}
      </div>
      {onClose && (
        <button
          type="button"
          onClick={onClose}
          aria-label="Dismiss"
          className={cn(
            "-m-1 shrink-0 rounded-sm p-1 transition-colors",
            cfg.text,
            "hover:bg-current/10 focus:outline-none focus-visible:bg-current/10",
          )}
        >
          <Icon name="X" size="xs" />
        </button>
      )}
    </div>
  );
}
