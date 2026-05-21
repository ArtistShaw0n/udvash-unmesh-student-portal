import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: "info" | "success" | "warning" | "error" | "brand" | "neutral";
};

const variantClasses = {
  info:     "bg-info-subtle text-info border-info",
  success:  "bg-success-subtle text-success border-success",
  warning:  "bg-warning-subtle text-warning border-warning",
  error:    "bg-error-subtle text-error border-error",
  brand:    "bg-brand-subtle text-brand border-brand",
  neutral:  "bg-disabled text-muted border-line",
};

export function Badge({ variant = "neutral", className, children, ...rest }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-1 rounded-lg border text-sm font-medium leading-3 whitespace-nowrap",
        variantClasses[variant],
        className
      )}
      {...rest}
    >
      {children}
    </span>
  );
}
