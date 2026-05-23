"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/cn";

export type CheckboxSize = "sm" | "md" | "lg";

export type CheckboxProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "type"> & {
  size?: CheckboxSize;
  label?: React.ReactNode;
  indeterminate?: boolean;
};

const boxSize: Record<CheckboxSize, string> = {
  sm: "size-4",
  md: "size-5",
  lg: "size-6",
};

const checkSize: Record<CheckboxSize, string> = {
  sm: "size-3",
  md: "size-3.5",
  lg: "size-4",
};

const labelSize: Record<CheckboxSize, string> = {
  sm: "text-sm",
  md: "text-md",
  lg: "text-lg",
};

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(
  { size = "md", label, indeterminate, disabled, className, ...rest },
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
      <span className="relative inline-flex">
        <input
          ref={(node) => {
            if (typeof ref === "function") ref(node);
            else if (ref) ref.current = node;
            if (node) node.indeterminate = !!indeterminate;
          }}
          type="checkbox"
          disabled={disabled}
          className={cn(
            "peer appearance-none rounded-xs border border-line bg-surface",
            "checked:border-brand checked:bg-brand",
            "indeterminate:border-brand indeterminate:bg-brand",
            "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-link",
            "disabled:cursor-not-allowed",
            boxSize[size],
          )}
          {...rest}
        />
        <svg
          className={cn(
            "pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-onbrand",
            "opacity-0 peer-checked:opacity-100",
            indeterminate && "!opacity-100",
            checkSize[size],
          )}
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
        >
          {indeterminate ? (
            <path d="M3 8 L13 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          ) : (
            <path
              d="M3.5 8.5 L6.5 11.5 L12.5 4.5"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          )}
        </svg>
      </span>
      {label && <span className={labelSize[size]}>{label}</span>}
    </label>
  );
});
