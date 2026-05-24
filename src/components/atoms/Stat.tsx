import { Icon, type IconName } from "./Icon";
import { cn } from "@/lib/cn";

export type StatTone = "neutral" | "brand" | "success" | "error" | "warning" | "info";
export type StatSize = "sm" | "md" | "lg";

export type StatProps = {
  label: string;
  value: React.ReactNode;
  hint?: string;
  icon?: IconName;
  tone?: StatTone;
  size?: StatSize;
  align?: "start" | "center";
  className?: string;
};

const toneClass: Record<StatTone, string> = {
  neutral: "text-ink",
  brand: "text-brand",
  success: "text-success",
  error: "text-error",
  warning: "text-warning",
  info: "text-info",
};

const sizeClass: Record<StatSize, { value: string; label: string }> = {
  sm: { value: "text-md font-semibold", label: "text-xs" },
  md: { value: "text-xl font-semibold", label: "text-sm" },
  lg: { value: "text-2xl font-bold", label: "text-md" },
};

/**
 * Stat — a single labeled metric. Used inside performance/score cards
 * (Figma: PerformanceContainer, ScoreGauge, MeritRankings rows).
 */
export function Stat({
  label,
  value,
  hint,
  icon,
  tone = "neutral",
  size = "md",
  align = "start",
  className,
}: StatProps) {
  const sz = sizeClass[size];
  return (
    <div
      className={cn(
        "flex flex-col gap-0.5",
        align === "center" ? "items-center text-center" : "items-start",
        className,
      )}
    >
      <div className="flex items-center gap-1.5 text-muted">
        {icon && <Icon name={icon} size={size === "lg" ? "md" : "sm"} />}
        <span className={sz.label}>{label}</span>
      </div>
      <div className={cn(sz.value, toneClass[tone])}>{value}</div>
      {hint && <span className="text-xs text-muted">{hint}</span>}
    </div>
  );
}
