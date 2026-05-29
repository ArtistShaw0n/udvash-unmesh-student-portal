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
 * 1:1 from Figma V2 — node 1:7466 ("Solve Sheet" card)
 * Same shell as class cards. Red "Live" outline chip · "View Solve Sheet" w-[150px].
 */

export type SolveSheetCardProps = {
  type?: string;
  title: string;
  badge?: string;
  courseLines?: string[];
  ctaLabel?: string;
  onCta?: () => void;
  className?: string;
};

export function SolveSheetCard({
  type = "Solve Sheet",
  title,
  badge = "Live",
  courseLines = [],
  ctaLabel = "View Solve Sheet",
  onCta,
  className,
}: SolveSheetCardProps) {
  return (
    <article className={cn(cardShellClass, className)}>
      <CardBand>
        <div className="mb-[8px] flex items-center justify-between">
          <CardType>{type}</CardType>
          {badge && <OutlineChip>{badge}</OutlineChip>}
        </div>
        <CardTitle>{title}</CardTitle>
      </CardBand>

      <div className="flex flex-col gap-[8px] px-[20px] py-[12px]">
        {courseLines.length > 0 && (
          <div>
            <FieldLabel>Course</FieldLabel>
            {courseLines.map((line, i) => (
              <FieldValue key={i}>{line}</FieldValue>
            ))}
          </div>
        )}
        <div className="mt-[8px] flex justify-center pb-[8px]">
          <CardButton onClick={onCta} className="w-[150px]">{ctaLabel}</CardButton>
        </div>
      </div>
    </article>
  );
}
