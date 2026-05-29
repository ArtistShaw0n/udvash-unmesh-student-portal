"use client";

import {
  cardShellClass,
  CardBand,
  CardType,
  OutlineChip,
  CardTitle,
  FieldLabel,
  FieldValue,
  CardButton,
} from "./parts";
import { cn } from "@/lib/cn";

/*
 * 1:1 from Figma V2 — node 1:7599 ("Practic Exam" card)
 * Same shell. Green "Practice" outline chip (#24c182) · red status note
 * (#f95959) · disabled "Take Exam" button (#c6c6c6).
 */

export type PracticeExamCardProps = {
  type?: string;
  title: string;
  badge?: string;
  dateTime: string;
  duration: string;
  courseLines?: string[];
  statusNote?: string;
  ctaLabel?: string;
  ctaDisabled?: boolean;
  onCta?: () => void;
  className?: string;
};

export function PracticeExamCard({
  type = "Practice Exam",
  title,
  badge = "Practice",
  dateTime,
  duration,
  courseLines = [],
  statusNote,
  ctaLabel = "Take Exam",
  ctaDisabled = true,
  onCta,
  className,
}: PracticeExamCardProps) {
  return (
    <article className={cn(cardShellClass, className)}>
      <CardBand>
        <div className="mb-[8px] flex items-center justify-between">
          <CardType>{type}</CardType>
          {badge && <OutlineChip color="#24c182">{badge}</OutlineChip>}
        </div>
        <CardTitle>{title}</CardTitle>
      </CardBand>

      <div className="flex flex-col gap-[8px] px-[20px] py-[12px]">
        <div>
          <FieldLabel>Date &amp; Time</FieldLabel>
          <FieldValue>{dateTime}</FieldValue>
        </div>
        <div>
          <FieldLabel>Duration</FieldLabel>
          <FieldValue>{duration}</FieldValue>
        </div>
        {courseLines.length > 0 && (
          <div>
            <FieldLabel>Course</FieldLabel>
            {courseLines.map((line, i) => (
              <FieldValue key={i}>{line}</FieldValue>
            ))}
          </div>
        )}
        {statusNote && (
          <p className="mt-[4px] text-center font-['Inter',sans-serif] text-[14px] font-medium text-[#f95959]">
            {statusNote}
          </p>
        )}
        <div className="mt-[8px] flex justify-center pb-[8px]">
          <CardButton onClick={onCta} disabled={ctaDisabled} className="w-[130px]">{ctaLabel}</CardButton>
        </div>
      </div>
    </article>
  );
}
