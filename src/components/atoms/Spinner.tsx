import { cn } from "@/lib/cn";

export type SpinnerSize = "xs" | "sm" | "md" | "lg" | "xl";

export type SpinnerProps = {
  size?: SpinnerSize;
  className?: string;
  label?: string;
};

const sizePx: Record<SpinnerSize, number> = {
  xs: 12,
  sm: 16,
  md: 20,
  lg: 24,
  xl: 32,
};

export function Spinner({ size = "md", className, label }: SpinnerProps) {
  const px = sizePx[size];
  return (
    <span role="status" aria-live="polite" className={cn("inline-flex", className)}>
      <svg
        className="animate-spin"
        width={px}
        height={px}
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" opacity="0.2" />
        <path
          d="M22 12a10 10 0 0 1-10 10"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
      <span className="sr-only">{label ?? "Loading"}</span>
    </span>
  );
}
