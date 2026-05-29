import { cn } from "@/lib/cn";

/*
 * 1:1 from Figma V2 — node 1:10369 ("Circular Spinner")
 * Figma renders a 24px rotating ring (PNG asset). Reproduced as a pure-CSS
 * 24px spinner in the brand colour #55347b (asset not shippable).
 */

export type SpinnerProps = {
  className?: string;
};

export function Spinner({ className }: SpinnerProps) {
  return (
    <span
      role="status"
      aria-label="Loading"
      className={cn(
        "inline-block size-[24px] animate-spin rounded-full border-2 border-[#55347b] border-t-transparent",
        className,
      )}
    />
  );
}
