import { cn } from "@/lib/cn";

export type CardVariant = "elevated" | "outlined" | "filled";
export type CardPadding = "none" | "sm" | "md" | "lg";

export type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: CardVariant;
  padding?: CardPadding;
  interactive?: boolean;
};

/*
 * Figma source: V2 Card (node 1:9722)
 *   bg #FFFFFF (bg-surface)
 *   rounded-[10px] (rounded-lg)
 *   shadow 0 0 5px rgba(0,0,0,0.10) (shadow-card)
 *
 * Default width is determined by the parent; we don't lock it here so the
 * same Card works for all V2 card widths (176 / 304 / 328 / 336 / 360).
 *
 * Variants:
 *   elevated → shadow-card (Figma default)
 *   outlined → border-default, no shadow
 *   filled   → bg-subtle, no shadow
 */

const variantClass: Record<CardVariant, string> = {
  elevated: "bg-surface shadow-card",
  outlined: "bg-surface border border-border",
  filled:   "bg-subtle",
};

const paddingClass: Record<CardPadding, string> = {
  none: "",
  sm:   "p-2",   // 8px
  md:   "p-[10px]", // 10px — Figma card inner padding (37 hits)
  lg:   "p-4",   // 12px+
};

export function Card({
  variant = "elevated",
  padding = "md",
  interactive = false,
  className,
  children,
  ...rest
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-lg",
        variantClass[variant],
        paddingClass[padding],
        interactive && "cursor-pointer transition-shadow hover:shadow-card",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}

export function CardHeader({
  className,
  children,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("mb-2 flex items-start justify-between gap-2", className)} {...rest}>
      {children}
    </div>
  );
}

export function CardBody({
  className,
  children,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("", className)} {...rest}>
      {children}
    </div>
  );
}

export function CardFooter({
  className,
  children,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("mt-3 flex items-center justify-end gap-2", className)} {...rest}>
      {children}
    </div>
  );
}
