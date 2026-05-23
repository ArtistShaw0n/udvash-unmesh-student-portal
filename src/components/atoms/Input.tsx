"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/cn";

export type InputSize = "sm" | "md" | "lg" | "auto";

export type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> & {
  size?: InputSize;
  invalid?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
};

const sizeClass: Record<InputSize, string> = {
  // auto = sm @ mobile, md @ tablet (768+), lg @ desktop (1440+)
  auto: "h-9 text-sm px-2.5 rounded-sm md:h-10 md:text-md lg:h-12 lg:px-3 lg:rounded-md",
  sm: "h-8 text-sm px-2.5 rounded-sm",
  md: "h-10 text-md px-2.5 rounded-sm",
  lg: "h-12 text-md px-3 rounded-md",
};

const padLeftClass: Record<InputSize, string> = {
  auto: "pl-9 md:pl-9 lg:pl-11",
  sm: "pl-8",
  md: "pl-9",
  lg: "pl-11",
};

const padRightClass: Record<InputSize, string> = {
  auto: "pr-9 md:pr-9 lg:pr-11",
  sm: "pr-8",
  md: "pr-9",
  lg: "pr-11",
};

const iconLeftPosClass: Record<InputSize, string> = {
  auto: "left-2.5 md:left-2.5 lg:left-3",
  sm: "left-2",
  md: "left-2.5",
  lg: "left-3",
};

const iconRightPosClass: Record<InputSize, string> = {
  auto: "right-2.5 md:right-2.5 lg:right-3",
  sm: "right-2",
  md: "right-2.5",
  lg: "right-3",
};

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { size = "auto", invalid, iconLeft, iconRight, className, disabled, ...rest },
  ref,
) {
  if (iconLeft || iconRight) {
    return (
      <div className="relative inline-flex w-full">
        {iconLeft && (
          <span
            className={cn(
              "pointer-events-none absolute inset-y-0 flex items-center text-muted",
              iconLeftPosClass[size],
            )}
            aria-hidden="true"
          >
            {iconLeft}
          </span>
        )}
        <input
          ref={ref}
          disabled={disabled}
          aria-invalid={invalid || undefined}
          className={cn(
            "w-full bg-surface text-ink placeholder:text-placeholder",
            "border border-line",
            "focus:outline-none focus-visible:border-brand focus-visible:ring-2 focus-visible:ring-brand/20",
            "disabled:bg-surface-subtle disabled:cursor-not-allowed",
            "aria-[invalid=true]:border-error",
            sizeClass[size],
            iconLeft ? padLeftClass[size] : undefined,
            iconRight ? padRightClass[size] : undefined,
            className,
          )}
          {...rest}
        />
        {iconRight && (
          <span
            className={cn(
              "pointer-events-none absolute inset-y-0 flex items-center text-muted",
              iconRightPosClass[size],
            )}
            aria-hidden="true"
          >
            {iconRight}
          </span>
        )}
      </div>
    );
  }

  return (
    <input
      ref={ref}
      disabled={disabled}
      aria-invalid={invalid || undefined}
      className={cn(
        "w-full bg-surface text-ink placeholder:text-placeholder",
        "border border-line",
        "focus:outline-none focus-visible:border-brand focus-visible:ring-2 focus-visible:ring-brand/20",
        "disabled:bg-surface-subtle disabled:cursor-not-allowed",
        "aria-[invalid=true]:border-error",
        sizeClass[size],
        className,
      )}
      {...rest}
    />
  );
});
