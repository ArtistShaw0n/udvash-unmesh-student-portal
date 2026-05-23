"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/cn";

export type SwitchSize = "sm" | "md" | "lg";

export type SwitchProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "type"> & {
  size?: SwitchSize;
  label?: React.ReactNode;
};

const trackSize: Record<SwitchSize, string> = {
  sm: "h-4 w-7",
  md: "h-5 w-9",
  lg: "h-6 w-11",
};

const thumbSize: Record<SwitchSize, string> = {
  sm: "size-3 peer-checked:translate-x-3",
  md: "size-4 peer-checked:translate-x-4",
  lg: "size-5 peer-checked:translate-x-5",
};

const labelSize: Record<SwitchSize, string> = {
  sm: "text-sm",
  md: "text-md",
  lg: "text-lg",
};

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(function Switch(
  { size = "md", label, disabled, className, ...rest },
  ref,
) {
  return (
    <label
      className={cn(
        "inline-flex cursor-pointer items-center gap-2",
        disabled && "cursor-not-allowed opacity-50",
        className,
      )}
    >
      <span className="relative inline-flex shrink-0 items-center">
        <input
          ref={ref}
          type="checkbox"
          role="switch"
          disabled={disabled}
          className={cn(
            "peer appearance-none rounded-full bg-line transition-colors",
            "checked:bg-brand",
            "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-link",
            "disabled:cursor-not-allowed",
            trackSize[size],
          )}
          {...rest}
        />
        <span
          className={cn(
            "pointer-events-none absolute left-0.5 rounded-full bg-surface shadow-xs transition-transform",
            thumbSize[size],
          )}
          aria-hidden="true"
        />
      </span>
      {label && <span className={labelSize[size]}>{label}</span>}
    </label>
  );
});
