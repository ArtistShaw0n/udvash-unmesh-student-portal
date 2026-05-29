import { cn } from "@/lib/cn";

/*
 * 1:1 from Figma V2 — node 1:17311 ("Language Tag")
 * Raw values, no semantic tokens:
 *   bg #4fa621 (green), rounded-[17px]   (Figma rendered size 53×26)
 *   text: Inter 14px #ffffff
 * `color` prop overrides the background hex for other tag colours seen in V2.
 */

export type TagProps = {
  children: React.ReactNode;
  /** Background hex — defaults to the Figma language-tag green. */
  color?: string;
  className?: string;
};

export function Tag({ children, color = "#4fa621", className }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex h-[26px] items-center justify-center rounded-[17px] px-[12px]",
        "font-['Inter',sans-serif] text-[14px] text-white",
        className,
      )}
      style={{ backgroundColor: color }}
    >
      {children}
    </span>
  );
}
