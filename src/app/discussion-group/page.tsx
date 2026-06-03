import { cn } from "@/lib/cn";
import { AppHeader } from "@/components/screens/AppHeader";
import { AppFooter } from "@/components/screens/AppFooter";

/*
 * Figma V2 — Discussion Group list. light 1:28832 · dark 1:28854. frame 376×812.
 *   header + "Discussion Group" title + underline + 4 group cards (title + "Unmesh Medical
 *   Admission" subtitle + Join #55347b / Visit #fc5a5a button) + footer (Home active).
 */
const TXT = "text-[#616161] dark:text-[#e8e8e8]";

function DiscussionCard({ top, height, title, visit }: { top: number; height: number; title: string; visit?: boolean }) {
  return (
    <div
      className="absolute left-1/2 flex w-[336px] -translate-x-1/2 items-center rounded-[10px] bg-white px-[12px] shadow-[0px_0px_5px_0px_rgba(0,0,0,0.1)] dark:bg-[#1a1a1a] dark:shadow-[0px_0px_20px_0px_#000000]"
      style={{ top, height }}
    >
      <div className="flex w-full items-center justify-between">
        <div className={`flex w-[224px] flex-col gap-[4px] font-['Inter',sans-serif] font-medium leading-[normal] ${TXT}`}>
          <p className="text-[16px]">{title}</p>
          <p className="text-[14px]">Unmesh Medical Admission</p>
        </div>
        <div className={cn("flex h-[33px] w-[76px] items-center justify-center rounded-[5px]", visit ? "bg-[#fc5a5a]" : "bg-[#55347b] dark:bg-[#9061c8]")}>
          <span className="font-['Inter',sans-serif] text-[14px] leading-[12px] text-white">{visit ? "Visit" : "Join"}</span>
        </div>
      </div>
    </div>
  );
}

export default function DiscussionGroupPage() {
  return (
    <main className="relative mx-auto h-[812px] w-[376px] overflow-hidden bg-white dark:bg-[#111111]">
      <div className="pointer-events-none absolute inset-0 opacity-40 dark:hidden" style={{ backgroundImage: "linear-gradient(66.076deg, #e2eefd 13.822%, #e6f3f1 52.905%, #e9dfee 93.259%)" }} />

      <AppHeader />

      <p className={`absolute left-1/2 top-[74px] -translate-x-1/2 whitespace-nowrap font-['Inter',sans-serif] text-[20px] font-semibold leading-[normal] ${TXT}`}>Discussion Group</p>
      <div className="absolute left-1/2 top-[100px] h-px w-[180px] -translate-x-1/2 bg-[linear-gradient(90deg,transparent,#000000,transparent)] opacity-[0.32] dark:bg-[linear-gradient(90deg,transparent,#ffffff,transparent)]" />

      <DiscussionCard top={131} height={91} title="Unmesh Medical Admission Batch-2023" />
      <DiscussionCard top={238} height={72} title="Unmesh Medical Admission" />
      <DiscussionCard top={326} height={91} title="Unmesh Medical Admission Batch-2023 Unmesh Medic..." />
      <DiscussionCard top={433} height={91} title="Unmesh Medical Admission Batch-2023" visit />

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
        <AppFooter />
      </div>
    </main>
  );
}
