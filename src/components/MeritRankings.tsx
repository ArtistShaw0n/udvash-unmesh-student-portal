import { cn } from "@/lib/cn";

type Rank = { label: string; value: string | number };

type MeritRankingsProps = {
  ranks: Rank[];
  className?: string;
};

export function MeritRankings({ ranks, className }: MeritRankingsProps) {
  return (
    <dl
      className={cn(
        "grid auto-cols-fr grid-flow-col gap-4 px-3 py-2 rounded-sm bg-surface-subtle w-full max-w-[280px]",
        className
      )}
    >
      {ranks.map((r) => (
        <div key={r.label} className="text-center">
          <dt className="text-sm text-muted">{r.label}</dt>
          <dd className="text-lg font-bold text-ink mt-0.5">{r.value}</dd>
        </div>
      ))}
    </dl>
  );
}
