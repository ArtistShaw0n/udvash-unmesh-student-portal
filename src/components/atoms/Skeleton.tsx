import { cn } from "@/lib/cn";

export type SkeletonVariant = "text" | "circle" | "rect";

export type SkeletonProps = {
  variant?: SkeletonVariant;
  width?: number | string;
  height?: number | string;
  lines?: number;
  className?: string;
};

const variantClass: Record<SkeletonVariant, string> = {
  text: "h-3 rounded-xs",
  circle: "rounded-full",
  rect: "rounded-md",
};

/**
 * Skeleton — animated placeholder used while data loads. Inspired by the
 * Figma "Loading-Dim" overlay pattern. Defaults render a single text line.
 */
export function Skeleton({
  variant = "text",
  width,
  height,
  lines = 1,
  className,
}: SkeletonProps) {
  const baseStyle: React.CSSProperties = {
    width,
    height,
  };

  if (variant === "text" && lines > 1) {
    return (
      <div className={cn("flex w-full flex-col gap-2", className)} aria-hidden="true">
        {Array.from({ length: lines }).map((_, i) => (
          <span
            key={i}
            className={cn(
              "animate-pulse bg-surface-subtle",
              variantClass.text,
              i === lines - 1 ? "w-3/4" : "w-full",
            )}
          />
        ))}
      </div>
    );
  }

  return (
    <span
      role="presentation"
      aria-hidden="true"
      className={cn(
        "block animate-pulse bg-surface-subtle",
        variantClass[variant],
        variant === "text" && !width ? "w-full" : undefined,
        className,
      )}
      style={baseStyle}
    />
  );
}
