import { cn } from "@/lib/cn";

export type AvatarSize = "xs" | "sm" | "md" | "lg" | "xl";
export type AvatarShape = "circle" | "rounded";

export type AvatarProps = {
  src?: string;
  alt?: string;
  name?: string;
  size?: AvatarSize;
  shape?: AvatarShape;
  className?: string;
};

const sizeClass: Record<AvatarSize, string> = {
  xs: "size-6 text-xs",
  sm: "size-8 text-sm",
  md: "size-9 text-sm",
  lg: "size-12 text-md",
  xl: "size-16 text-lg",
};

function initials(name?: string): string {
  if (!name) return "";
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export function Avatar({
  src,
  alt,
  name,
  size = "md",
  shape = "circle",
  className,
}: AvatarProps) {
  const radius = shape === "circle" ? "rounded-full" : "rounded-md";
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center overflow-hidden bg-brand-subtle font-medium text-brand",
        sizeClass[size],
        radius,
        className,
      )}
      aria-label={alt ?? name}
    >
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={alt ?? name ?? ""} className="size-full object-cover" />
      ) : (
        <span>{initials(name)}</span>
      )}
    </span>
  );
}
