import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost" | "destructive";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
};

const baseClasses = "inline-flex items-center justify-center rounded-sm font-normal transition-colors disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-line-brand";

const sizeClasses = {
  sm: "px-3 py-1.5 text-sm leading-3 min-w-[80px] md:min-w-[130px] lg:min-w-[180px]",
  md: "px-[30px] py-2 text-md leading-3 min-w-[130px] lg:min-w-[180px]",
  lg: "px-8 py-3 text-lg leading-4 min-w-[180px]",
};

const variantClasses = {
  primary: "bg-brand text-onbrand hover:bg-brand-accent disabled:bg-disabled disabled:text-disabled-text",
  secondary: "bg-transparent text-link border border-line-brand hover:bg-brand-subtle disabled:border-line-disabled disabled:text-disabled-text",
  ghost: "bg-transparent text-link border border-transparent hover:bg-brand-subtle hover:border-line-brand/40 disabled:text-disabled-text",
  destructive: "bg-error text-onbrand hover:opacity-90 disabled:bg-disabled disabled:text-disabled-text",
};

export function Button({
  variant = "primary",
  size = "md",
  loading = false,
  iconLeft,
  iconRight,
  children,
  className,
  disabled,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={cn(baseClasses, sizeClasses[size], variantClasses[variant], className)}
      disabled={disabled || loading}
      aria-busy={loading}
      {...rest}
    >
      {iconLeft && <span className="mr-2 inline-flex">{iconLeft}</span>}
      {loading ? <span className="inline-block size-4 animate-spin rounded-full border-2 border-onbrand border-t-transparent" /> : children}
      {iconRight && <span className="ml-2 inline-flex">{iconRight}</span>}
    </button>
  );
}
