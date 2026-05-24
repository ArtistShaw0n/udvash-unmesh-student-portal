"use client";

import { Button } from "../atoms/Button";
import { Icon } from "../atoms/Icon";
import { ProgressBar } from "../atoms/ProgressBar";
import { Skeleton } from "../atoms/Skeleton";
import { Stat } from "../atoms/Stat";
import { Tag } from "../atoms/Tag";
import { Text } from "../atoms/Text";
import { cn } from "@/lib/cn";

export type PracticeExamCardProps = {
  subject: string;
  title: string;
  totalQuestions: number;
  attemptedQuestions?: number;
  durationMin: number;
  passingMarks?: number;
  attempts?: number;
  bestScore?: number;
  loading?: boolean;
  onStart?: () => void;
  onReview?: () => void;
  className?: string;
};

/**
 * PracticeExamCard — Figma `Card/PracticeExam` (336×455). Self-paced
 * practice quiz with progress tracking. Shows attempts/best-score history
 * after the first attempt.
 */
export function PracticeExamCard({
  subject,
  title,
  totalQuestions,
  attemptedQuestions,
  durationMin,
  passingMarks,
  attempts = 0,
  bestScore,
  loading = false,
  onStart,
  onReview,
  className,
}: PracticeExamCardProps) {
  if (loading) {
    return (
      <article
        className={cn(
          "w-full max-w-[336px] rounded-md border border-line-subtle bg-surface p-4 shadow-sm",
          className,
        )}
        aria-busy="true"
      >
        <Skeleton variant="rect" width={70} height={20} className="mb-3" />
        <Skeleton width="90%" height={16} className="mb-2" />
        <Skeleton width="60%" height={14} className="mb-4" />
        <Skeleton variant="rect" height={64} className="mb-4" />
        <Skeleton variant="rect" height={36} />
      </article>
    );
  }

  const inProgress =
    attemptedQuestions != null && attemptedQuestions > 0 && attemptedQuestions < totalQuestions;
  const completed = attempts > 0;
  const progressPct =
    attemptedQuestions != null ? (attemptedQuestions / totalQuestions) * 100 : 0;

  return (
    <article
      className={cn(
        "w-full max-w-[336px] rounded-md border border-line-subtle bg-surface p-4 shadow-sm",
        className,
      )}
    >
      <div className="mb-3 flex items-center justify-between gap-2">
        <Tag variant="brand">{subject}</Tag>
        <Tag variant={completed ? "success" : "info"} size="sm">
          {completed ? `${attempts} attempt${attempts > 1 ? "s" : ""}` : "Practice"}
        </Tag>
      </div>

      <Text size="lg" weight="semibold" className="mb-3 line-clamp-2">
        {title}
      </Text>

      {/* Stats panel */}
      <div className="mb-4 grid grid-cols-3 gap-3 rounded-sm bg-surface-subtle p-3">
        <Stat label="Questions" value={totalQuestions} size="sm" align="center" />
        <Stat label="Duration" value={`${durationMin}m`} size="sm" align="center" tone="brand" />
        <Stat
          label={passingMarks ? "Pass" : "Best"}
          value={passingMarks ?? bestScore ?? "—"}
          size="sm"
          align="center"
          tone={bestScore != null && passingMarks != null && bestScore >= passingMarks ? "success" : "neutral"}
        />
      </div>

      {/* Progress (if mid-attempt) */}
      {inProgress && (
        <div className="mb-4">
          <ProgressBar
            value={attemptedQuestions}
            max={totalQuestions}
            variant="warning"
            showLabel
            label={`${attemptedQuestions} / ${totalQuestions} answered`}
          />
        </div>
      )}

      {/* CTAs */}
      <div className="flex gap-2">
        <Button
          fullWidth
          iconLeft={<Icon name={inProgress ? "Play" : "Pencil"} size="sm" />}
          onClick={onStart}
        >
          {inProgress ? "Resume" : completed ? "Retake" : "Start"}
        </Button>
        {completed && onReview && (
          <Button
            variant="ghost"
            iconLeft={<Icon name="Eye" size="sm" />}
            onClick={onReview}
          >
            Review
          </Button>
        )}
      </div>

      {progressPct === 0 && bestScore == null && (
        <Text size="xs" color="muted" className="mt-2 text-center">
          Self-paced · You can pause anytime
        </Text>
      )}
    </article>
  );
}
