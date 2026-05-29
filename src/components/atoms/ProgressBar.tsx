import { cn } from "@/lib/cn";

/*
 * 1:1 from Figma V2 — node 1:32648 ("Progress Bar")
 * Raw values, no semantic tokens:
 *   track: bg #e1e3e4, rounded-[9999px], h-[8px]
 *   fill:  bg #55347b, rounded-[9999px], width = value%
 *   (Figma rendered size 264×8)
 */

export type ProgressBarProps = {
  value: number;
  max?: number;
  className?: string;
};

export function ProgressBar({ value, max = 100, className }: ProgressBarProps) {
  const percent = Math.max(0, Math.min(100, (value / max) * 100));
  return (
    <div
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={max}
      className={cn("h-[8px] w-full overflow-hidden rounded-[9999px] bg-[#e1e3e4]", className)}
    >
      <div
        className="h-full rounded-[9999px] bg-[#55347b]"
        style={{ width: `${percent}%` }}
      />
    </div>
  );
}
