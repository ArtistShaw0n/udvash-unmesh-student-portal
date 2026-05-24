"use client";

import { ProgressBar } from "../atoms/ProgressBar";
import { Skeleton } from "../atoms/Skeleton";
import { Stat } from "../atoms/Stat";
import { Tag } from "../atoms/Tag";
import { Text } from "../atoms/Text";
import { cn } from "@/lib/cn";

export type PerformanceTrend = "up" | "down" | "flat";

export type PerformanceCardProps = {
  title: string;
  scoreLabel?: string;
  score: number;
  maxScore?: number;
  rank?: { value: number; total: number };
  stats?: Array<{ label: string; value: React.ReactNode; tone?: "neutral" | "success" | "error" | "warning" | "brand" }>;
  trend?: PerformanceTrend;
  loading?: boolean;
  className?: string;
};

/**
 * PerformanceCard — Figma `Card/PerformanceContainer` (336×348/387).
 * Aggregate dashboard tile showing a primary score + percent progress,
 * optional rank, and up to 4 secondary stats. Used on Performance and
 * Profile screens.
 */
export function PerformanceCard({
  title,
  scoreLabel = "Score",
  score,
  maxScore = 100,
  rank,
  stats = [],
  trend,
  loading = false,
  className,
}: PerformanceCardProps) {
  if (loading) {
    return (
      <article
        className={cn(
          "w-full max-w-[336px] rounded-md border border-line-subtle bg-surface p-4 shadow-sm",
          className,
        )}
        aria-busy="true"
      >
        <Skeleton width="50%" height={16} className="mb-4" />
        <Skeleton variant="rect" height={64} className="mb-3" />
        <Skeleton variant="rect" height={8} className="mb-4" />
        <div className="grid grid-cols-3 gap-3">
          <Skeleton variant="rect" height={48} />
          <Skeleton variant="rect" height={48} />
          <Skeleton variant="rect" height={48} />
        </div>
      </article>
    );
  }

  const percent = Math.max(0, Math.min(100, (score / maxScore) * 100));
  const tone: "success" | "brand" | "warning" | "error" =
    percent >= 80 ? "success" : percent >= 60 ? "brand" : percent >= 40 ? "warning" : "error";
  const toneText: Record<typeof tone, string> = {
    success: "text-success",
    brand: "text-brand",
    warning: "text-warning",
    error: "text-error",
  };

  return (
    <article
      className={cn(
        "w-full max-w-[336px] rounded-md border border-line-subtle bg-surface p-4 shadow-sm",
        className,
      )}
    >
      <div className="mb-4 flex items-center justify-between">
        <Text size="md" weight="semibold">
          {title}
        </Text>
        {rank && (
          <Tag variant="brand" size="sm">
            Rank #{rank.value} of {rank.total}
          </Tag>
        )}
      </div>

      {/* Hero score */}
      <div className="mb-3 flex items-end gap-3">
        <div className="flex items-baseline gap-1">
          <span className={cn("text-4xl font-bold tabular-nums", toneText[tone])}>{score}</span>
          <span className="text-md text-muted">/ {maxScore}</span>
        </div>
        {trend && <TrendChip trend={trend} />}
      </div>
      <Text size="xs" color="muted" className="mb-4 uppercase tracking-widest">
        {scoreLabel}
      </Text>

      {/* Percent bar */}
      <ProgressBar value={score} max={maxScore} variant={tone} showLabel label="Progress" className="mb-4" />

      {/* Secondary stats */}
      {stats.length > 0 && (
        <div
          className={cn(
            "grid gap-3 rounded-sm bg-surface-subtle p-3",
            stats.length === 2 ? "grid-cols-2" : stats.length >= 4 ? "grid-cols-4" : "grid-cols-3",
          )}
        >
          {stats.map((s, i) => (
            <Stat key={i} label={s.label} value={s.value} tone={s.tone ?? "neutral"} size="sm" align="center" />
          ))}
        </div>
      )}
    </article>
  );
}

function TrendChip({ trend }: { trend: PerformanceTrend }) {
  const config = {
    up: { icon: "▲", color: "text-success", label: "Improving" },
    down: { icon: "▼", color: "text-error", label: "Declining" },
    flat: { icon: "▬", color: "text-muted", label: "Stable" },
  }[trend];
  return (
    <span className={cn("inline-flex items-center gap-1 text-xs font-medium", config.color)} aria-label={config.label}>
      <span aria-hidden="true">{config.icon}</span>
      {config.label}
    </span>
  );
}
