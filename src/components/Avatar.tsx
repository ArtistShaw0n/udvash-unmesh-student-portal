import type { ImgHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type AvatarProps = Omit<ImgHTMLAttributes<HTMLImageElement>, "src"> & {
  src?: string;
  initials?: string;
  size?: "sm" | "md" | "lg";
  alt?: string;
};

const sizeClasses = {
  sm: "size-[30px] text-[10px]",
  md: "size-[50px] text-md",
  lg: "size-[100px] text-xl",
};

export function Avatar({
  src,
  initials = "U",
  size = "md",
  alt = "Profile",
  className,
  ...rest
}: AvatarProps) {
  const cls = cn(
    "inline-flex items-center justify-center rounded-full bg-brand text-onbrand font-semibold overflow-hidden ring-2 ring-line-subtle",
    sizeClasses[size],
    className
  );

  if (src) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt={alt} className={cls} {...rest} />;
  }
  return <span className={cls} role="img" aria-label={alt}>{initials}</span>;
}
