"use client";

import { useState } from "react";
import { Icon } from "./Icon";
import { cn } from "@/lib/cn";

export type StepperSize = "sm" | "md" | "lg";

export type StepperProps = {
  value?: number;
  defaultValue?: number;
  min?: number;
  max?: number;
  step?: number;
  size?: StepperSize;
  disabled?: boolean;
  onChange?: (value: number) => void;
  className?: string;
  ariaLabel?: string;
};

const sizeClass: Record<StepperSize, { btn: string; value: string }> = {
  sm: { btn: "size-7 text-xs", value: "min-w-10 px-2 text-sm" },
  md: { btn: "size-9 text-sm", value: "min-w-12 px-3 text-md" },
  lg: { btn: "size-11 text-md", value: "min-w-14 px-4 text-lg" },
};

/**
 * Stepper — numeric increment/decrement input. Used in checkout flows
 * (AddCourse-Total quantity) and OTP resend cooldowns.
 */
export function Stepper({
  value: controlled,
  defaultValue = 0,
  min = 0,
  max = 99,
  step = 1,
  size = "md",
  disabled = false,
  onChange,
  className,
  ariaLabel = "Quantity",
}: StepperProps) {
  const [uncontrolled, setUncontrolled] = useState(defaultValue);
  const value = controlled ?? uncontrolled;
  const sz = sizeClass[size];

  function update(next: number) {
    const clamped = Math.max(min, Math.min(max, next));
    if (controlled === undefined) setUncontrolled(clamped);
    onChange?.(clamped);
  }

  const canDec = !disabled && value > min;
  const canInc = !disabled && value < max;

  return (
    <div
      className={cn(
        "inline-flex items-center overflow-hidden rounded-md border border-line-subtle bg-surface",
        disabled && "opacity-50",
        className,
      )}
      role="group"
      aria-label={ariaLabel}
    >
      <button
        type="button"
        onClick={() => update(value - step)}
        disabled={!canDec}
        aria-label="Decrease"
        className={cn(
          "flex items-center justify-center text-ink transition-colors",
          "hover:bg-surface-subtle disabled:cursor-not-allowed disabled:text-placeholder",
          sz.btn,
        )}
      >
        <Icon name="Minus" size={size === "sm" ? "xs" : "sm"} />
      </button>
      <span
        className={cn(
          "border-x border-line-subtle text-center font-medium tabular-nums",
          sz.value,
        )}
        aria-live="polite"
      >
        {value}
      </span>
      <button
        type="button"
        onClick={() => update(value + step)}
        disabled={!canInc}
        aria-label="Increase"
        className={cn(
          "flex items-center justify-center text-ink transition-colors",
          "hover:bg-surface-subtle disabled:cursor-not-allowed disabled:text-placeholder",
          sz.btn,
        )}
      >
        <Icon name="Plus" size={size === "sm" ? "xs" : "sm"} />
      </button>
    </div>
  );
}
