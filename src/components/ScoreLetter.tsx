import { cn } from "@/lib/cn";

type ScoreLetterProps = {
  letter?: string;
  variant?: "success" | "info" | "warning" | "error" | "neutral";
  className?: string;
};

const variantClasses = {
  success: "bg-success-subtle text-success border-success",
  info:    "bg-info-subtle text-info border-info",
  warning: "bg-warning-subtle text-warning border-warning",
  error:   "bg-error-subtle text-error border-error",
  neutral: "bg-surface-subtle text-ink border-line",
};

export function ScoreLetter({ letter = "A", variant = "success", className }: ScoreLetterProps) {
  return (
    <span
      className={cn(
        "inline-flex size-5 items-center justify-center rounded-full border text-xs font-bold leading-none",
        variantClasses[variant],
        className
      )}
      role="img"
      aria-label={`Score ${letter}`}
    >
      {letter}
    </span>
  );
}
