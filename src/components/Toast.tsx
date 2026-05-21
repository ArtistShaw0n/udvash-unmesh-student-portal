import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type ToastProps = {
  variant?: "info" | "success" | "warning" | "error";
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
};

const variantClasses = {
  info:    "bg-info-subtle text-info border-info",
  success: "bg-success-subtle text-success border-success",
  warning: "bg-warning-subtle text-warning border-warning",
  error:   "bg-error-subtle text-error border-error",
};

export function Toast({ variant = "info", icon, children, className }: ToastProps) {
  return (
    <div
      role="status"
      className={cn(
        "inline-flex items-center gap-2 px-3 py-2 rounded-3xl border text-sm font-medium shadow-lg",
        variantClasses[variant],
        className
      )}
    >
      {icon && <span className="inline-flex shrink-0">{icon}</span>}
      <span>{children}</span>
    </div>
  );
}
