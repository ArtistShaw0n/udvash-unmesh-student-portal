"use client";

import { useEffect } from "react";
import { Icon, type IconName } from "../atoms/Icon";
import { cn } from "@/lib/cn";

export type ToastVariant = "info" | "success" | "warning" | "danger";

export type ToastProps = {
  variant?: ToastVariant;
  title?: React.ReactNode;
  /** Auto-close after `duration` ms. Set to 0 to disable auto-close. */
  duration?: number;
  onClose?: () => void;
  icon?: IconName;
  className?: string;
  children?: React.ReactNode;
};

/*
 * Toast — transient notification. No formalised Figma master in V2;
 * built on the same status palette as Alert but with tighter padding,
 * an auto-close timer, and a card shadow so it floats over content.
 *
 * Caller is responsible for positioning (e.g. fixed top-right or
 * bottom-center) and stacking multiple toasts.
 */

const variantConfig: Record<
  ToastVariant,
  { icon: IconName; text: string; bar: string }
> = {
  info:    { icon: "Info",          text: "text-info",    bar: "bg-info" },
  success: { icon: "CircleCheck",   text: "text-success", bar: "bg-success" },
  warning: { icon: "TriangleAlert", text: "text-warning", bar: "bg-warning" },
  danger:  { icon: "CircleAlert",   text: "text-danger",  bar: "bg-danger" },
};

export function Toast({
  variant = "info",
  title,
  duration = 4000,
  onClose,
  icon,
  className,
  children,
}: ToastProps) {
  useEffect(() => {
    if (!duration || !onClose) return;
    const t = setTimeout(onClose, duration);
    return () => clearTimeout(t);
  }, [duration, onClose]);

  const cfg = variantConfig[variant];

  return (
    <div
      role="status"
      aria-live="polite"
      className={cn(
        "flex w-full max-w-sm items-start gap-2 overflow-hidden rounded-md bg-surface p-3 shadow-card",
        "border border-border",
        className,
      )}
    >
      <span aria-hidden="true" className={cn("h-full w-1 self-stretch rounded-full", cfg.bar)} />
      <Icon name={icon ?? cfg.icon} size="sm" className={cn("mt-0.5 shrink-0", cfg.text)} />
      <div className="min-w-0 flex-1">
        {title && <p className="text-sm font-semibold text-primary">{title}</p>}
        {children && (
          <div className={cn("text-sm text-muted", title ? "mt-0.5" : undefined)}>{children}</div>
        )}
      </div>
      {onClose && (
        <button
          type="button"
          onClick={onClose}
          aria-label="Dismiss"
          className="-m-1 shrink-0 rounded-sm p-1 text-muted transition-colors hover:text-primary focus:outline-none focus-visible:text-primary"
        >
          <Icon name="X" size="xs" />
        </button>
      )}
    </div>
  );
}
