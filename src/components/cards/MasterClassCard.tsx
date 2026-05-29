"use client";

import { cn } from "@/lib/cn";

/*
 * 1:1 from Figma V2 — node 1:8518 ("Master Class" card)
 * Same shell, no status chip. Title is a lecture name (Bangla). Body is a
 * list of topic lines (14px semibold). Three buttons: Videos + Notes (row),
 * Quiz (below).
 */

export type MasterClassCardProps = {
  type: string;
  title: string;
  topics?: string[];
  videosLabel?: string;
  notesLabel?: string;
  quizLabel?: string;
  onVideos?: () => void;
  onNotes?: () => void;
  onQuiz?: () => void;
  className?: string;
};

export function MasterClassCard({
  type,
  title,
  topics = [],
  videosLabel = "Videos",
  notesLabel = "Notes",
  quizLabel = "Quiz",
  onVideos,
  onNotes,
  onQuiz,
  className,
}: MasterClassCardProps) {
  return (
    <article
      className={cn(
        "w-[328px] overflow-hidden rounded-[10px] bg-white shadow-[0px_0px_5px_0px_rgba(0,0,0,0.1)]",
        className,
      )}
    >
      <div className="bg-[#e4eaf4] px-[20px] pb-[10px] pt-[12px]">
        <span className="font-['Inter',sans-serif] text-[14px] text-[#616161]">{type}</span>
        <div className="mt-[8px]">
          <p className="font-['Inter',sans-serif] text-[16px] font-semibold leading-[22px] text-[#616161]">{title}</p>
        </div>
      </div>

      <div className="flex flex-col gap-[8px] px-[20px] py-[12px]">
        {topics.map((t, i) => (
          <p key={i} className="font-['Inter',sans-serif] text-[14px] font-semibold text-[#616161]">{t}</p>
        ))}
        <div className="mt-[8px] flex flex-col items-center gap-[8px] pb-[8px]">
          <div className="flex gap-[16px]">
            <button
              type="button"
              onClick={onVideos}
              className="flex h-[36px] w-[130px] items-center justify-center whitespace-nowrap rounded-[5px] bg-[#55347b] px-[34px] font-['Inter',sans-serif] text-[14px] leading-[12px] text-white"
            >
              {videosLabel}
            </button>
            <button
              type="button"
              onClick={onNotes}
              className="flex h-[36px] w-[130px] items-center justify-center whitespace-nowrap rounded-[5px] bg-[#55347b] px-[34px] font-['Inter',sans-serif] text-[14px] leading-[12px] text-white"
            >
              {notesLabel}
            </button>
          </div>
          <button
            type="button"
            onClick={onQuiz}
            className="flex h-[36px] w-[130px] items-center justify-center whitespace-nowrap rounded-[5px] bg-[#55347b] px-[34px] font-['Inter',sans-serif] text-[14px] leading-[12px] text-white"
          >
            {quizLabel}
          </button>
        </div>
      </div>
    </article>
  );
}
