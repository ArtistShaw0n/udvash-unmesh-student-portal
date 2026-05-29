"use client";

import { cn } from "@/lib/cn";

/*
 * 1:1 from Figma V2 — Report screen card (node 1:6645 / shell 1:6664)
 * Raw values, no semantic tokens (verified against screenshot):
 *   card:  bg #ffffff · rounded-[10px] · shadow 0 0 5px rgba(0,0,0,0.1) · w-[328px]
 *   chip:  "In Branch" cyan #25b7d3 outline pill
 *   title: Inter SemiBold 14px #616161 · date #999
 *   2×2 stat grid: bordered #e5e7eb boxes · label 14px + value 16px bold #616161
 *   Merit Rankings box (bordered) · "View Result" #55347b w-[150px]
 *   stat icons + merit heading + header calendar = Figma SVGs
 *   → public/components/icons/subjectwise-*.svg
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

      <p className="mb-[12px] flex items-center gap-[6px] font-['Inter',sans-serif] text-[12px] text-[#999999]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/components/icons/subjectwise-calendar.svg" alt="" aria-hidden="true" className="h-[14px] w-[16px] shrink-0" />
        {date}
      </p>

      <div className="mb-[12px] grid grid-cols-2 gap-[10px]">
        <StatBox icon="/components/icons/subjectwise-mcq.svg" label="MCQ" value={mcq} />
        <StatBox icon="/components/icons/subjectwise-written.svg" label="Written" value={written} />
        <StatBox icon="/components/icons/subjectwise-deduction.svg" label="Deduction" value={deduction} />
        <StatBox icon="/components/icons/subjectwise-total.svg" label="Total" value={total} />
      </div>

      <div className="mb-[16px] rounded-[8px] border border-[#e5e7eb] p-[12px]">
        <p className="mb-[8px] flex items-center gap-[6px] font-['Inter',sans-serif] text-[14px] font-semibold text-[#616161]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/components/icons/subjectwise-merit.svg" alt="" aria-hidden="true" className="h-[14px] w-[16px] shrink-0" />
          Merit Rankings
        </p>
        <div className="flex items-center justify-between font-['Inter',sans-serif] text-[14px] text-[#616161]">
          <span>Highest - {highest}</span>
          <span>Branch Merit - {branchMerit}</span>
        </div>
        <div className="my-[8px] h-px w-full bg-[#e5e7eb]" />
        <p className="text-center font-['Inter',sans-serif] text-[14px] text-[#616161]">Central Merit - {centralMerit}</p>
      </div>

      <div className="flex justify-center">
        <button
          type="button"
          onClick={onCta}
          className="flex h-[36px] w-[150px] items-center justify-center whitespace-nowrap rounded-[5px] bg-[#55347b] px-[20px] font-['Inter',sans-serif] text-[14px] leading-[12px] text-white"
        >
          View Result
        </button>
      </div>
    </article>
  );
}

function StatBox({ icon, label, value }: { icon: string; label: string; value: string }) {
  return (
    <div className="flex items-center justify-between rounded-[8px] border border-[#e5e7eb] px-[12px] py-[10px]">
      <span className="flex items-center gap-[8px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={icon} alt="" aria-hidden="true" className="size-[16px] shrink-0" />
        <span className="font-['Inter',sans-serif] text-[14px] text-[#616161]">{label}</span>
      </span>
      <span className="font-['Inter',sans-serif] text-[16px] font-bold text-[#616161]">{value}</span>
    </div>
  );
}
