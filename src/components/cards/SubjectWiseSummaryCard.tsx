"use client";

import { CardButton } from "./parts";
import { cn } from "@/lib/cn";

/*
 * 1:1 from Figma V2 — Report screen card (node 1:6645 / shell 1:6664)
 * Raw values, no semantic tokens (verified against screenshot):
 *   card:  bg #ffffff · rounded-[10px] · shadow 0 0 5px rgba(0,0,0,0.1) · w-[328px]
 *   chip:  "In Branch" cyan #25b7d3 outline pill
 *   title: Inter SemiBold 14px #616161 · date #999
 *   2×2 stat grid: bordered #e5e7eb boxes · label 14px + value 16px bold #616161
 *   Merit Rankings box (bordered) · "View Result" #55347b w-[150px]
 * NOTE: the stat icons (MCQ/Written/Deduction/Total) + trophy + calendar are
 *       Figma SVG assets — skipped in Phase 1.
 */

export type SubjectWiseSummaryCardProps = {
  title: string;
  date: string;
  branchLabel?: string;
  mcq?: string;
  written?: string;
  deduction?: string;
  total?: string;
  highest?: string;
  branchMerit?: string;
  centralMerit?: string;
  onCta?: () => void;
  className?: string;
};

export function SubjectWiseSummaryCard({
  title,
  date,
  branchLabel = "In Branch",
  mcq = "A",
  written = "N/A",
  deduction = "0",
  total = "0/50",
  highest = "49",
  branchMerit = "15",
  centralMerit = "1234",
  onCta,
  className,
}: SubjectWiseSummaryCardProps) {
  return (
    <article
      className={cn(
        "w-[328px] rounded-[10px] bg-white p-[16px] shadow-[0px_0px_5px_0px_rgba(0,0,0,0.1)]",
        className,
      )}
    >
      <div className="mb-[8px] flex items-start justify-between gap-[8px]">
        <p className="font-['Inter',sans-serif] text-[14px] font-semibold text-[#616161]">{title}</p>
        <span className="shrink-0 rounded-[10px] border border-[#25b7d3] px-[10px] py-[2px] font-['Inter',sans-serif] text-[12px] font-medium text-[#25b7d3]">
          {branchLabel}
        </span>
      </div>

      <p className="mb-[12px] font-['Inter',sans-serif] text-[12px] text-[#999999]">{date}</p>

      <div className="mb-[12px] grid grid-cols-2 gap-[10px]">
        <StatBox label="MCQ" value={mcq} />
        <StatBox label="Written" value={written} />
        <StatBox label="Deduction" value={deduction} />
        <StatBox label="Total" value={total} />
      </div>

      <div className="mb-[16px] rounded-[8px] border border-[#e5e7eb] p-[12px]">
        <p className="mb-[8px] font-['Inter',sans-serif] text-[14px] font-semibold text-[#616161]">Merit Rankings</p>
        <div className="flex items-center justify-between font-['Inter',sans-serif] text-[14px] text-[#616161]">
          <span>Highest - {highest}</span>
          <span>Branch Merit - {branchMerit}</span>
        </div>
        <div className="my-[8px] h-px w-full bg-[#e5e7eb]" />
        <p className="text-center font-['Inter',sans-serif] text-[14px] text-[#616161]">Central Merit - {centralMerit}</p>
      </div>

      <div className="flex justify-center">
        <CardButton onClick={onCta} className="w-[150px]">View Result</CardButton>
      </div>
    </article>
  );
}

function StatBox({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between rounded-[8px] border border-[#e5e7eb] px-[12px] py-[10px]">
      <span className="font-['Inter',sans-serif] text-[14px] text-[#616161]">{label}</span>
      <span className="font-['Inter',sans-serif] text-[16px] font-bold text-[#616161]">{value}</span>
    </div>
  );
}
