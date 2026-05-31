import { RevisionSettingsModal } from "@/components/screens/RevisionSettingsModal";

/* Figma V2 — Revision Settings modal, "Resume From Previous" + Progress. light 1:32428 · dark 1:33188. frame 376×812. */
export default function RevisionResumePage() {
  return (
    <main className="relative mx-auto min-h-[812px] w-[376px] overflow-hidden bg-white dark:bg-[#111111]">
      <div className="absolute inset-0 bg-[rgba(25,28,29,0.6)] backdrop-blur-[4px]" />
      <div className="absolute inset-0 flex items-center justify-center p-[16px]">
        <RevisionSettingsModal progress />
      </div>
    </main>
  );
}
