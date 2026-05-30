import { AppHeader } from "@/components/screens/AppHeader";
import { AppFooter } from "@/components/screens/AppFooter";
import { PastClassList, PastClassFilterDropdown } from "@/components/screens/PastClassList";

/* Figma V2 — Past Class with "All Course" filter dropdown open. light 1:8016 · dark 1:8281. */
export default function PastClassFilterCoursePage() {
  return (
    <main className="relative mx-auto min-h-[1123px] w-[376px] bg-white dark:bg-[#111111]">
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 top-[50px] opacity-40 dark:hidden"
        style={{ backgroundImage: "linear-gradient(72.1999deg, #e2eefd 13.822%, #e6f3f1 52.905%, #e9dfee 93.259%)" }}
      />
      <AppHeader />
      <PastClassList />
      <PastClassFilterDropdown
        notchLeft={75.5}
        highlightedIndex={1}
        options={[
          "All Course",
          "All Course All Course All Course All Course All Course All Course All Course",
          "All Course",
          "All Course",
          "All Su",
          "All Subject",
        ]}
      />
      <div className="absolute bottom-0 left-0">
        <AppFooter />
      </div>
    </main>
  );
}
