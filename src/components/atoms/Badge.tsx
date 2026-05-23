import { cn } from "@/lib/cn";

export type BadgeVariant = "neutral" | "brand" | "error" | "success" | "warning" | "info";
export type BadgeSize = "sm" | "md" | "lg";

export type BadgeProps = {
  variant?: BadgeVariant;
  size?: BadgeSize;
  dot?: boolean;
  className?: string;
  children?: React.ReactNode;
};

const variantClass: Record<BadgeVariant, string> = {
  neutral: "bg-surface-subtle text-ink",
  brand: "bg-brand text-onbrand",
  error: "bg-error text-onbrand",
  success: "bg-success text-onbrand",
  warning: "bg-warning text-onbrand",
  info: "bg-info text-onbrand",
};

const sizeClass: Record<BadgeSize, string> = {
  sm: "h-4 px-1.5 text-xs",
  md: "h-5 px-2 text-xs",
  lg: "h-6 px-2.5 text-sm",
};

const dotClass: Record<BadgeSize, string> = {
  sm: "size-2",
  md: "size-2.5",
  lg: "size-3",
};

export function Badge({
  variant = "neutral",
  size = "md",
  dot = false,
  className,
  children,
}: BadgeProps) {
  if (dot) {
    return (
      <span
        className={cn(
          "inline-block rounded-full",
          variantClass[variant],
          dotClass[size],
          className,
        )}
        aria-hidden={!children}
      />
    );
  }
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-full font-medium leading-none",
        variantClass[variant],
        sizeClass[size],
        className,
      )}
    >
      {children}
    </span>
  );
}
