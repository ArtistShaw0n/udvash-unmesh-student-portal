import { AppHeader } from "@/components/screens/AppHeader";
import { AppFooter } from "@/components/screens/AppFooter";
import { MasterClassCard } from "@/components/cards/MasterClassCard";

/*
 * Figma V2 — Master Class screen (list state). light node 1:8512 · dark 1:8541.
 *   header + "Master Class" title (y74) + "Physics 1st Paper" (y121) + 2-line
 *   "Chapter-1 : Physical World and Measurement" (y143) + fading underline (y100) +
 *   2 master-class cards (y203, flex-col gap-20) + footer (Home active). frame 376×920.
 *   Card 1: 3 buttons (Videos + Notes, then Quiz). Card 2: 2 buttons (Videos + Notes).
 */
const TOPICS = ["মাত্রা সমীকরণ দ্বারা সমীকরণের শুদ্ধতা যাচাই।", "পরিমাপের ত্রুটি", "স্ক্রু গজ, ভার্নিয়ার স্কেল, স্ফেরোমিটার ও নিক্তি"];

export default function MasterClassPage() {
  return (
    <main className="relative mx-auto min-h-[920px] w-[376px] bg-white dark:bg-[#111111]">
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 top-[50px] opacity-40 dark:hidden"
        style={{ backgroundImage: "linear-gradient(78.9227deg, #e2eefd 13.822%, #e6f3f1 52.905%, #e9dfee 93.259%)" }}
      />

      <AppHeader />

      <p className="absolute left-1/2 top-[74px] -translate-x-1/2 font-['Inter',sans-serif] text-[20px] font-semibold leading-[normal] text-[#616161] dark:text-[#e8e8e8]">
        Master Class
      </p>
      <div className="absolute left-1/2 top-[100px] h-px w-[180px] -translate-x-1/2 bg-[linear-gradient(90deg,transparent,#000000,transparent)] opacity-[0.32] dark:bg-[linear-gradient(90deg,transparent,#ffffff,transparent)]" />
      <p className="absolute left-1/2 top-[121px] -translate-x-1/2 font-['Inter',sans-serif] text-[12px] leading-[normal] text-[#616161] dark:text-[#e8e8e8]">
        Physics 1st Paper
      </p>
      <p className="absolute left-1/2 top-[143px] -translate-x-1/2 text-center font-['Inter',sans-serif] text-[14px] font-semibold leading-[20px] text-[#616161] dark:text-[#e8e8e8]">
        Chapter-1 : Physical<br />World and Measurement
      </p>

      <div className="absolute left-[24px] top-[203px] flex flex-col gap-[20px]">
        <MasterClassCard subject="Phy-1" title="লেকচার - ১" topics={TOPICS} buttons={["Videos", "Notes", "Quiz"]} />
        <MasterClassCard subject="Phy-1" title="লেকচার - ১ লেকচার - ১ লেকচার - ১ লেকচার - ১" title2Lines topics={TOPICS} buttons={["Videos", "Notes"]} />
      </div>

      <div className="absolute bottom-0 left-0">
        <AppFooter />
      </div>
    </main>
  );
}
