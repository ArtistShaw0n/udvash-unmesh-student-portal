import { cn } from "@/lib/cn";

/*
 * 1:1 from Figma V2 — node 1:5045 (Analysis Report stat tile)
 * Raw values, no semantic tokens:
 *   tile:  bg #ffffff · rounded-[5px] · shadow 0 0 5px rgba(0,0,0,0.1)
 *   icon:  46px box · bg <accent> at 10% · rounded-[10px] · 24px glyph (Figma asset)
 *   label: Inter Regular 14px #616161 · value: Inter Medium 24px #616161
 *   variants (Figma nodes 1:5051/5063/5075/5086):
 *     Correct #00ba00 · Skipped #25b7d3 · Incorrect #f95959 · Neg. Mark #f59e0b
 */

export type AnalysisBlockType = "correct" | "skipped" | "incorrect" | "negMark";

const VARIANT: Record<AnalysisBlockType, { box: string; icon: string }> = {
  correct: { box: "bg-[#00ba001a]", icon: "/components/icons/analysis-correct.svg" },
  skipped: { box: "bg-[#25b7d31a]", icon: "/components/icons/analysis-skipped.svg" },
  incorrect: { box: "bg-[#f959591a]", icon: "/components/icons/analysis-incorrect.svg" },
  negMark: { box: "bg-[#f59e0b1a]", icon: "/components/icons/analysis-negmark.svg" },
};

export type AnalysisBlockCardProps = {
  label: string;
  value: React.ReactNode;
  type?: AnalysisBlockType;
  className?: string;
};

export function AnalysisBlockCard({ label, value, type = "correct", className }: AnalysisBlockCardProps) {
  return (
    <div
      className={cn(
        "flex w-[150px] items-center gap-[12px] rounded-[5px] bg-white p-[12px] shadow-[0px_0px_5px_0px_rgba(0,0,0,0.1)]",
        className,
      )}
    >
      <span
        className={cn("flex size-[46px] shrink-0 items-center justify-center rounded-[10px]", VARIANT[type].box)}
        aria-hidden="true"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={VARIANT[type].icon} alt="" className="size-[24px]" />
      </span>
      <span className="min-w-0">
        <span className="block font-['Inter',sans-serif] text-[14px] text-[#616161]">{label}</span>
        <span className="block font-['Inter',sans-serif] text-[24px] font-medium text-[#616161]">{value}</span>
      </span>
    </div>
  );
}
