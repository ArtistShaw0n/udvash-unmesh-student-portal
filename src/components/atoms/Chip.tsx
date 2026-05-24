"use client";

import { Icon, type IconName } from "./Icon";
import { cn } from "@/lib/cn";

export type ChipVariant = "filter" | "tab" | "language";
export type ChipSize = "sm" | "md";

export type ChipProps = {
  variant?: ChipVariant;
  size?: ChipSize;
  selected?: boolean;
  disabled?: boolean;
  iconLeft?: IconName;
  iconRight?: IconName;
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
};

/**
 * Chip — interactive selectable pill. Distinct from Tag (display-only)
 * and IconChip (icon-only square). Matches the Figma Tag/Filter-Chip,
 * Tag/TabChip-Wide and Tag/TabChip-Narrow nodes (32px tall, rounded-md).
 */

const sizeClass: Record<ChipSize, string> = {
  sm: "h-7 px-3 text-xs gap-1.5",
  md: "h-8 px-3.5 text-sm gap-2",
};

function variantClass(variant: ChipVariant, selected: boolean): string {
  if (selected) {
    return "bg-brand text-onbrand border-brand";
  }
  switch (variant) {
    case "filter":
      return "bg-surface text-ink border-line-subtle hover:bg-surface-subtle";
    case "tab":
      return "bg-surface-subtle text-muted border-transparent hover:text-ink";
    case "language":
      return "bg-brand-subtle text-brand border-brand/20 hover:bg-brand-subtle/80";
    default:
      return "bg-surface text-ink border-line-subtle";
  }
}

export function Chip({
  variant = "filter",
  size = "md",
  selected = false,
  disabled = false,
  iconLeft,
  iconRight,
  onClick,
  className,
  children,
}: ChipProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-pressed={selected}
      className={cn(
        "inline-flex items-center justify-center rounded-md border font-medium transition-colors",
        "disabled:cursor-not-allowed disabled:opacity-50",
        sizeClass[size],
        variantClass(variant, selected),
        className,
      )}
    >
      {iconLeft && <Icon name={iconLeft} size={size === "sm" ? "xs" : "sm"} />}
      <span>{children}</span>
      {iconRight && <Icon name={iconRight} size={size === "sm" ? "xs" : "sm"} />}
    </button>
  );
}
