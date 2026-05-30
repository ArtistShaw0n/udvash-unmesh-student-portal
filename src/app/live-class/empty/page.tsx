import { AppHeader } from "@/components/screens/AppHeader";
import { AppFooter } from "@/components/screens/AppFooter";

/*
 * Figma V2 — Live Class screen, EMPTY state. light node 1:9670 · dark 1:9690.
 *   Same chrome as the list state (header + "Live Class" title + fading underline +
 *   footer), but the body is a centred magnifying-glass illustration (64×69.363) +
 *   "Live class not found" (14px #535353 → dark #e8e8e8).
 *   Frame 376×812 (shorter than the 920 list frame); footer sits at y746.
 *   Fading underline width per Figma frame: light 180 · dark 112.
 *   Illustration is one shared asset (works on both themes).
 */
export default function LiveClassEmptyPage() {
  return (
    <main className="relative mx-auto min-h-[812px] w-[376px] bg-white dark:bg-[#111111]">
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 top-[50px] opacity-40 dark:hidden"
        style={{ backgroundImage: "linear-gradient(78.9227deg, #e2eefd 13.822%, #e6f3f1 52.905%, #e9dfee 93.259%)" }}
      />

      <AppHeader />

      <p className="absolute left-1/2 top-[74px] -translate-x-1/2 font-['Inter',sans-serif] text-[20px] font-semibold leading-[normal] text-[#616161] dark:text-[#e8e8e8]">
        Live Class
      </p>
      <div className="absolute left-1/2 top-[100px] h-px w-[180px] -translate-x-1/2 bg-[linear-gradient(90deg,transparent,#000000,transparent)] opacity-[0.32] dark:w-[112px] dark:bg-[linear-gradient(90deg,transparent,#ffffff,transparent)]" />

      <div className="absolute left-1/2 top-[241px] flex w-[135px] -translate-x-1/2 flex-col items-center gap-[16px]">
        <span className="block h-[69.363px] w-[64px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/components/icons/live-class-empty.svg" alt="" aria-hidden="true" className="block size-full" />
        </span>
        <p className="w-full text-center font-['Inter',sans-serif] text-[14px] leading-[normal] text-[#535353] dark:text-[#e8e8e8]">
          Live class not found
        </p>
      </div>

      <div className="absolute bottom-0 left-0">
        <AppFooter />
      </div>
    </main>
  );
}
