import { AppHeader } from "@/components/screens/AppHeader";
import { AppFooter } from "@/components/screens/AppFooter";
import { LiveClassCard } from "@/components/cards/LiveClassCard";

/*
 * Figma V2 — Live Class screen (list state). light node 1:9598 · dark 1:9634.
 *   header (50) + "Live Class" title (y74) + fading tab underline (y100) +
 *   2 class cards (y121, y481) + footer (Home active). frame 376×920.
 *   Empty state deferred to a later state-pass.
 */
const COURSE: [string, string] = ["Varsity 'KA' Online Class Service", "Varsity 'KA' Admission Program 2025"];
const SYLLABUS = "১ম পত্র অধ্যায়-০৫: কাজ, শক্তি ও ক্ষমতা";
const DATETIME = "21 Sep, 2025 07:30 PM to 11:00 PM";

export default function LiveClassPage() {
  return (
    <main className="relative mx-auto min-h-[920px] w-[376px] bg-white dark:bg-[#111111]">
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 top-[50px] opacity-40 dark:hidden"
        style={{ backgroundImage: "linear-gradient(78.9227deg, #e2eefd 13.822%, #e6f3f1 52.905%, #e9dfee 93.259%)" }}
      />

      <AppHeader />

      <p className="absolute left-1/2 top-[74px] -translate-x-1/2 font-['Inter',sans-serif] text-[20px] font-semibold leading-[normal] text-[#616161] dark:text-[#e8e8e8]">
        Live Class
      </p>
      <div className="absolute left-1/2 top-[100px] h-px w-[180px] -translate-x-1/2 bg-[linear-gradient(90deg,transparent,#000000,transparent)] opacity-[0.32] dark:w-[140px] dark:bg-[linear-gradient(90deg,transparent,#ffffff,transparent)]" />

      <div className="absolute left-[24px] top-[121px] flex flex-col gap-[20px]">
        <LiveClassCard
          subject="Phy"
          title="Marathon Live Class Physics-03"
          status={{ kind: "live" }}
          dateTimeValue={DATETIME}
          syllabus={SYLLABUS}
          courseLines={COURSE}
          joinEnabled
        />
        <LiveClassCard
          subject="Phy"
          title="Marathon Live Class Physics-03 (Part-01)"
          title2Lines
          status={{ kind: "countdown", text: "5h 14m" }}
          dateTimeValue={DATETIME}
          syllabus={SYLLABUS}
          courseLines={COURSE}
        />
      </div>

      <div className="absolute bottom-0 left-0">
        <AppFooter />
      </div>
    </main>
  );
}
