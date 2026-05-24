"use client";

import { Icon, type IconName } from "../atoms/Icon";
import { cn } from "@/lib/cn";

export type SegmentedControlOption = {
  value: string;
  label: React.ReactNode;
  icon?: IconName;
  disabled?: boolean;
};

export type SegmentedControlSize = "sm" | "md";

export type SegmentedControlProps = {
  options: SegmentedControlOption[];
  value: string;
  onChange?: (value: string) => void;
  size?: SegmentedControlSize;
  fullWidth?: boolean;
  className?: string;
  ariaLabel?: string;
};

/*
 * SegmentedControl — connected button group. Single-selection picker
 * styled as an iOS-style pill. Used in V2 for tabular toggles (Live /
 * Past / Upcoming kind of switches inside cards).
 */

const sizeClass: Record<SegmentedControlSize, string> = {
  sm: "h-7 text-sm",
  md: "h-8 text-base",
};

export function SegmentedControl({
  options,
  value,
  onChange,
  size = "md",
  fullWidth = false,
  className,
  ariaLabel = "Toggle",
}: SegmentedControlProps) {
  return (
    <div
      role="radiogroup"
      aria-label={ariaLabel}
      className={cn(
        "inline-flex items-stretch rounded-pill bg-subtle p-1",
        sizeClass[size],
        fullWidth && "w-full",
        className,
      )}
    >
      {options.map((opt) => {
        const active = opt.value === value;
        return (
          <button
            key={opt.value}
            type="button"
            role="radio"
            aria-checked={active}
            disabled={opt.disabled}
            onClick={() => !opt.disabled && onChange?.(opt.value)}
            className={cn(
              "inline-flex flex-1 items-center justify-center gap-1 rounded-pill px-3 font-medium transition-colors",
              "focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-link",
              "disabled:cursor-not-allowed disabled:text-disabled",
              active
                ? "bg-surface text-primary shadow-card"
                : "text-muted hover:text-primary",
            )}
          >
            {opt.icon && <Icon name={opt.icon} size="xs" />}
            <span>{opt.label}</span>
          </button>
        );
      })}
    </div>
  );
}
