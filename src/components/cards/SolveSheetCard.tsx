"use client";

import { Button } from "../atoms/Button";
import { Icon } from "../atoms/Icon";
import { IconChip } from "../atoms/IconChip";
import { Skeleton } from "../atoms/Skeleton";
import { Tag } from "../atoms/Tag";
import { Text } from "../atoms/Text";
import { cn } from "@/lib/cn";

export type SolveSheetCardProps = {
  subject: string;
  title: string;
  totalQuestions: number;
  pages?: number;
  uploadedAt: string;
  fileSizeKB?: number;
  loading?: boolean;
  onView?: () => void;
  onDownload?: () => void;
  className?: string;
};

/**
 * SolveSheetCard — Figma `Card/SolveSheet` (336×281). PDF answer sheet
 * for a past exam. Compact card with view + download actions.
 */
export function SolveSheetCard({
  subject,
  title,
  totalQuestions,
  pages,
  uploadedAt,
  fileSizeKB,
  loading = false,
  onView,
  onDownload,
  className,
}: SolveSheetCardProps) {
  if (loading) {
    return (
      <article
        className={cn(
          "flex w-full max-w-[336px] gap-3 rounded-md border border-line-subtle bg-surface p-3 shadow-sm",
          className,
        )}
        aria-busy="true"
      >
        <Skeleton variant="rect" width={64} height={80} />
        <div className="flex-1 space-y-2">
          <Skeleton width="50%" height={12} />
          <Skeleton width="90%" height={14} />
          <Skeleton width="70%" height={10} />
          <Skeleton variant="rect" height={28} />
        </div>
      </article>
    );
  }

  const sizeLabel =
    fileSizeKB != null
      ? fileSizeKB >= 1024
        ? `${(fileSizeKB / 1024).toFixed(1)} MB`
        : `${fileSizeKB} KB`
      : null;

  return (
    <article
      className={cn(
        "flex w-full max-w-[336px] gap-3 rounded-md border border-line-subtle bg-surface p-3 shadow-sm",
        className,
      )}
    >
      <IconChip name="FileText" tone="error" size="lg" className="self-start" />

      <div className="min-w-0 flex-1">
        <div className="mb-1 flex items-center gap-2">
          <Tag variant="neutral" size="sm">{subject}</Tag>
          <Tag variant="info" size="sm">Solve sheet</Tag>
        </div>
        <Text size="md" weight="semibold" className="mb-1 line-clamp-2">
          {title}
        </Text>
        <Text size="xs" color="muted" className="mb-3">
          {totalQuestions} questions
          {pages != null && ` · ${pages} pages`}
          {sizeLabel && ` · ${sizeLabel}`}
          {` · ${uploadedAt}`}
        </Text>

        <div className="flex gap-2">
          <Button size="sm" iconLeft={<Icon name="Eye" size="xs" />} onClick={onView}>
            View
          </Button>
          <Button
            variant="ghost"
            size="sm"
            iconLeft={<Icon name="Download" size="xs" />}
            onClick={onDownload}
          >
            PDF
          </Button>
        </div>
      </div>
    </article>
  );
}
