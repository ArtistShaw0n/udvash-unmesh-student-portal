"use client";

import { cn } from "@/lib/cn";

export type TagVariant = "neutral" | "brand" | "info" | "success" | "warning" | "error";
export type TagSize = "sm" | "md";

export type TagProps = {
  variant?: TagVariant;
  size?: TagSize;
  iconLeft?: React.ReactNode;
  onRemove?: () => void;
  className?: string;
  children: React.ReactNode;
};

const variantClass: Record<TagVariant, string> = {
  neutral: "bg-surface-subtle text-ink border border-line-subtle",
  brand: "bg-brand-subtle text-brand border border-brand/20",
  info: "bg-info-subtle text-info border border-info/20",
  success: "bg-success-subtle text-success border border-success/20",
  warning: "bg-warning-subtle text-warning border border-warning/20",
  error: "bg-error-subtle text-error border border-error/20",
};

const sizeClass: Record<TagSize, string> = {
  sm: "h-6 px-2 text-xs gap-1",
  md: "h-7 px-2.5 text-sm gap-1.5",
};

export function Tag({
  variant = "neutral",
  size = "sm",
  iconLeft,
  onRemove,
  className,
  children,
}: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-sm font-medium",
        variantClass[variant],
        sizeClass[size],
        className,
      )}
    >
      {iconLeft}
      <span>{children}</span>
      {onRemove && (
        <button
          type="button"
          onClick={onRemove}
          aria-label="Remove tag"
          className="ml-0.5 rounded-full opacity-60 transition-opacity hover:opacity-100"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
            <path
              d="M3 3 L9 9 M9 3 L3 9"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>
      )}
    </span>
  );
}
