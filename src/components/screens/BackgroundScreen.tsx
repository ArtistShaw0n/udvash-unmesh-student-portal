/*
 * Figma V2 — Background 1:22611. frame 376×812. The app's base page background:
 *   white + a 40%-opacity diagonal gradient wash. No header / footer / content.
 *   Dark: solid #111111 (gradient hidden) — no dark frame in Figma, standard mapping.
 */
export function BackgroundScreen() {
  return (
    <main className="relative mx-auto h-[812px] w-[376px] overflow-hidden bg-white shadow-[0px_0px_5px_0px_rgba(0,0,0,0.1)] dark:bg-[#111111] dark:shadow-none">
      <div className="pointer-events-none absolute inset-0 opacity-40 dark:hidden" style={{ backgroundImage: "linear-gradient(66.076deg, #e2eefd 13.822%, #e6f3f1 52.905%, #e9dfee 93.259%)" }} />
    </main>
  );
}
