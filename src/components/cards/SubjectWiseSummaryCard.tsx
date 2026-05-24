"use client";

import { ProgressBar } from "../atoms/ProgressBar";
import { Skeleton } from "../atoms/Skeleton";
import { Tag } from "../atoms/Tag";
import { Text } from "../atoms/Text";
import { cn } from "@/lib/cn";

export type SubjectRow = {
  subject: string;
  attempted: number;
  total: number;
  correct: number;
};

export type SubjectWiseSummaryCardProps = {
  title?: string;
  subjects: SubjectRow[];
  loading?: boolean;
  className?: string;
};

/**
 * SubjectWiseSummaryCard — Figma `Card/SubjectWise-Summary` (336×208).
 * Performance table summarising per-subject attempted vs correct.
 */
export function SubjectWiseSummaryCard({
  title = "Subject-wise summary",
  subjects,
  loading = false,
  className,
}: SubjectWiseSummaryCardProps) {
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
        <div className="space-y-3">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="space-y-1">
              <div className="flex justify-between">
                <Skeleton width={80} height={12} />
                <Skeleton width={50} height={12} />
              </div>
              <Skeleton variant="rect" height={6} />
            </div>
          ))}
        </div>
      </article>
    );
  }

  return (
    <article
      className={cn(
        "w-full max-w-[336px] rounded-md border border-line-subtle bg-surface p-4 shadow-sm",
        className,
      )}
    >
      <div className="mb-4 flex items-center justify-between">
        <Text size="md" weight="semibold">{title}</Text>
        <Tag variant="info" size="sm">{subjects.length} subjects</Tag>
      </div>

      <div className="space-y-3">
        {subjects.map((row) => {
          const acc = row.attempted ? (row.correct / row.attempted) * 100 : 0;
          const variant = acc >= 80 ? "success" : acc >= 60 ? "brand" : acc >= 40 ? "warning" : "error";
          return (
            <div key={row.subject}>
              <div className="mb-1 flex items-center justify-between text-sm">
                <span className="font-medium text-ink">{row.subject}</span>
                <span className="tabular-nums text-muted">
                  {row.correct}/{row.attempted}
                  <span className="ml-1 text-xs">({Math.round(acc)}%)</span>
                </span>
              </div>
              <ProgressBar value={row.correct} max={row.total} variant={variant} size="sm" />
            </div>
          );
        })}
      </div>
    </article>
  );
}
