import { cn } from "@/lib/cn";
import { ScoreLetter } from "./ScoreLetter";

type MCQRowProps = {
  letter?: string;
  letterVariant?: "success" | "info" | "warning" | "error" | "neutral";
  label: string;
  score: string;
  className?: string;
};

export function MCQRow({
  letter = "A",
  letterVariant = "success",
  label,
  score,
  className,
}: MCQRowProps) {
  return (
    <div className={cn("flex items-center gap-3 py-1.5 border-b border-line-subtle last:border-0", className)}>
      <ScoreLetter letter={letter} variant={letterVariant} />
      <span className="flex-1 text-md text-muted">{label}</span>
      <span className="text-md font-bold text-ink tabular-nums">{score}</span>
    </div>
  );
}
