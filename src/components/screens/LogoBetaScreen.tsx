import { AppHeader } from "@/components/screens/AppHeader";
import { AppFooter } from "@/components/screens/AppFooter";

/*
 * Figma V2 — Logo (Beta). light 1:28864 · dark 1:28868. frame 376×812.
 *   Empty body — header (logo with a "Beta" superscript) + footer (Home active) only.
 *   Beta: Inter Semi-Bold 12px #161615 (light) at left-129 top-4, over the logo text.
 */
export function LogoBetaScreen() {
  return (
    <main className="relative mx-auto h-[812px] w-[376px] overflow-hidden bg-white dark:bg-[#111111]">
      <div className="pointer-events-none absolute inset-0 opacity-40 dark:hidden" style={{ backgroundImage: "linear-gradient(66.076deg, #e2eefd 13.822%, #e6f3f1 52.905%, #e9dfee 93.259%)" }} />

      <AppHeader />
      <p className="absolute left-[129px] top-[4px] font-['Inter',sans-serif] text-[12px] font-semibold leading-[normal] text-[#161615] dark:text-[#e8e8e8]">Beta</p>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
        <AppFooter />
      </div>
    </main>
  );
}
