import { AppHeader } from "@/components/screens/AppHeader";
import { AppFooter } from "@/components/screens/AppFooter";

/*
 * Figma V2 — Community group list (footer-tab). light 1:22616 · dark 1:22751. frame 376×812.
 *   header + "Groups" search bar + 9 group rows (colored avatar+initials, name, last-message
 *   preview, time, optional green unread badge + pin, 3-dot menu, divider) + footer (Home active).
 */
const DL = "/components/icons/downloads";
const CM = "/components/icons/community";

type Row = { top: number; c: string; ini: string; name: string; prev: string; time: string; badge?: string; pin?: boolean };
const ROWS: Row[] = [
  { top: 122, c: "#25B7D3", ini: "AB", name: "উদ্ভাস ইঞ্জিনিয়ারিং ব্যাচ’২৫ (Boys)", prev: "Miraz (Muhammad Miraz) : তুখোড় ব্...", time: "10:05 AM", badge: "100+", pin: true },
  { top: 196, c: "#FFCC28", ini: "CD", name: "উদ্ভাস ভার্সিটি ‘ক’ ব্যাচ’২৫ (Boys)", prev: "Al- Amin (Al- Amin) : কে বলছে আপনাকেx...", time: "25 Feb, 2025", badge: "5", pin: true },
  { top: 270, c: "#684B8A", ini: "EF", name: "উদ্ভাস ভার্সিটি ‘ক’ ব্যাচ’২৫ (Boys)", prev: "Al- Amin (Al- Amin) : কে বলছে আপনাকে টপ ফ...", time: "Yesterday", badge: "9" },
  { top: 344, c: "#BDB400", ini: "GH", name: "টিম-মেম্বার গ্রুপ", prev: "Ai-Admin : Hello! উদ্ভাস AI এডমিন কিভাবে আ...", time: "08 Mar, 2025", badge: "20" },
  { top: 418, c: "#00BA00", ini: "IJ", name: "উদ্ভাস ভার্সিটি ‘ক’ ব্যাচ’২৫ (Boys)", prev: "Al- Amin (Al- Amin) : কে বলছে আপনাআআপনাকেx...", time: "25 Feb, 2025" },
  { top: 492, c: "#C1249C", ini: "KL", name: "উদ্ভাস ভার্সিটি ‘ক’ ব্যাচ’২৫ (Boys)", prev: "Al- Amin (Al- Amin) : কে বলছে আপনাকে টপ ফ", time: "Yesterday" },
  { top: 566, c: "#263058", ini: "MN", name: "টিম-মেম্বার গ্রুপ", prev: "Ai-Admin : Hello! উদ্ভাস AI এডমিন কিভাবে", time: "08 Mar, 2025" },
  { top: 640, c: "#FC5A5A", ini: "OP", name: "উদ্ভাস ভার্সিটি ‘ক’ ব্যাচ’২৫ (Boys)", prev: "Al- Amin (Al- Amin) : কে বলছে আপনাআআপনাকেx...", time: "25 Feb, 2025" },
  { top: 714, c: "#7979EF", ini: "QR", name: "উদ্ভাস ভার্সিটি ‘ক’ ব্যাচ’২৫ (Boys)", prev: "Al- Amin (Al- Amin) : কে বলছে আপনাকে টপ ফ", time: "Yesterday" },
];

function GroupRow({ top, c, ini, name, prev, time, badge, pin }: Row) {
  return (
    <>
      <div className="absolute left-[12px] flex size-[50px] items-center justify-center rounded-full" style={{ top, backgroundColor: c }}>
        <span className="font-['Inter',sans-serif] text-[20px] leading-[normal] text-white">{ini}</span>
      </div>
      <p className="absolute left-[72px] right-[72px] truncate font-['Inter',sans-serif] text-[14px] font-semibold leading-[22px] text-[#616161] dark:text-[#e8e8e8]" style={{ top: top + 3 }}>{name}</p>
      <p className="absolute left-[72px] right-[46px] truncate font-['Inter',sans-serif] text-[12px] leading-[20px] text-[rgba(97,97,97,0.8)] dark:text-[rgba(232,232,232,0.8)]" style={{ top: top + 27 }}>{prev}</p>
      <p className="absolute right-[12px] whitespace-nowrap text-right font-['Inter',sans-serif] text-[10px] leading-[20px] text-[rgba(97,97,97,0.5)] dark:text-[rgba(232,232,232,0.5)]" style={{ top: top + 4 }}>{time}</p>
      {badge && (
        <span className="absolute flex h-[18px] min-w-[18px] items-center justify-center rounded-[18px] bg-[#00a511] px-[3px] font-['Inter',sans-serif] text-[12px] font-medium leading-[normal] text-white" style={{ top: top + 28, right: pin ? 56 : 24 }}>{badge}</span>
      )}
      {pin && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={`${CM}/pin.svg`} alt="" aria-hidden="true" className="absolute right-[34px] h-[14px] w-[14px]" style={{ top: top + 30 }} />
      )}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`${CM}/menu.svg`} alt="" aria-hidden="true" className="absolute right-[12px] h-[16px] w-[4px] dark:invert" style={{ top: top + 29 }} />
      <div className="absolute left-1/2 h-px w-[352px] -translate-x-1/2 bg-[#cacaca]" style={{ top: top + 74 }} />
    </>
  );
}

export default function CommunityPage() {
  return (
    <main className="relative mx-auto h-[812px] w-[376px] overflow-hidden bg-white dark:bg-[#111111]">
      <div className="pointer-events-none absolute inset-0 opacity-40 dark:hidden" style={{ backgroundImage: "linear-gradient(66.076deg, #e2eefd 13.822%, #e6f3f1 52.905%, #e9dfee 93.259%)" }} />

      <AppHeader />

      {/* Groups search bar */}
      <div className="absolute left-1/2 top-[60px] h-[42px] w-[368px] -translate-x-1/2 rounded-[5px] bg-[rgba(85,52,123,0.1)] dark:bg-[#2c2c2c]" />
      <p className="absolute left-[12px] top-[71px] font-['Inter',sans-serif] text-[16px] font-bold leading-[normal] text-[#616161] dark:text-[#e8e8e8]">Groups</p>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`${DL}/search.svg`} alt="" aria-hidden="true" className="absolute left-[347px] top-[73px] size-[16px] dark:invert" />

      {ROWS.map((r) => (
        <GroupRow key={r.ini} {...r} />
      ))}

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
        <AppFooter />
      </div>
    </main>
  );
}
