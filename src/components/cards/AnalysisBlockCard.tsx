/*
 * 1:1 from Figma V2 — node 1:5045 (Analysis Report stat tile)
 * Raw values, no semantic tokens:
 *   tile:  bg #ffffff · rounded-[5px] · shadow 0 0 5px rgba(0,0,0,0.1)
 *   icon:  46px box · bg <accent> at 10% · rounded-[10px]
 *   label: Inter Regular 14px #616161
 *   value: Inter Medium 24px #616161
 *   accents: Correct #00ba00 · Skipped #25b7d3 · Incorrect #f95959 · Neg. Mark #f59e0b
 */

export type AnalysisBlockCardProps = {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
  accent?: string;
  className?: string;
};

export function AnalysisBlockCard({
  icon,
  label,
  value,
  accent = "#00ba00",
  className,
}: AnalysisBlockCardProps) {
  return (
    <div
      className={`flex w-[150px] items-center gap-[12px] rounded-[5px] bg-white p-[12px] shadow-[0px_0px_5px_0px_rgba(0,0,0,0.1)] ${className ?? ""}`}
    >
      <span
        className="flex size-[46px] shrink-0 items-center justify-center rounded-[10px]"
        style={{ backgroundColor: `${accent}1a`, color: accent }}
        aria-hidden="true"
      >
        {icon}
      </span>
      <span className="min-w-0">
        <span className="block font-['Inter',sans-serif] text-[14px] text-[#616161]">{label}</span>
        <span className="block font-['Inter',sans-serif] text-[24px] font-medium text-[#616161]">{value}</span>
      </span>
    </div>
  );
}
