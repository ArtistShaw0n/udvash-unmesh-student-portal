"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/cn";

export type RadioSize = "sm" | "md" | "lg";

export type RadioProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "type"> & {
  size?: RadioSize;
  label?: React.ReactNode;
};

const boxSize: Record<RadioSize, string> = {
  sm: "size-4",
  md: "size-5",
  lg: "size-6",
};

const dotSize: Record<RadioSize, string> = {
  sm: "size-1.5",
  md: "size-2",
  lg: "size-2.5",
};

const labelSize: Record<RadioSize, string> = {
  sm: "text-sm",
  md: "text-md",
  lg: "text-lg",
};

export const Radio = forwardRef<HTMLInputElement, RadioProps>(function Radio(
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
      <span className="relative inline-flex items-center justify-center">
        <input
          ref={ref}
          type="radio"
          disabled={disabled}
          className={cn(
            "peer appearance-none rounded-full border border-line bg-surface",
            "checked:border-brand",
            "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-link",
            "disabled:cursor-not-allowed",
            boxSize[size],
          )}
          {...rest}
        />
        <span
          className={cn(
            "pointer-events-none absolute rounded-full bg-brand opacity-0 peer-checked:opacity-100",
            dotSize[size],
          )}
          aria-hidden="true"
        />
      </span>
      {label && <span className={labelSize[size]}>{label}</span>}
    </label>
  );
});
