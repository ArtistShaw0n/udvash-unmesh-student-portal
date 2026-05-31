import { AppHeader } from "@/components/screens/AppHeader";
import { AppFooter } from "@/components/screens/AppFooter";

/*
 * Figma V2 — Downloads § Settings. light 1:17154 · dark 1:17197. frame 376×812.
 *   header + white card: Download location (Downloads ●/SD card ○, blue #2585FD radio) +
 *   divider + Downloads by User (3 users: name/reg/size + Delete All #ff3a3a) +
 *   App version + footer (Home active).
 */
const RV = "/components/icons/revision";
const I = "/components/icons/downloads";
const TXT = "text-[#616161] dark:text-[#e8e8e8]";

function UserRow({ top, name, you, reg, size }: { top: number; name: string; you?: boolean; reg: string; size: string }) {
  return (
    <>
      <p className={`absolute left-[20px] whitespace-nowrap font-['Inter',sans-serif] text-[14px] font-semibold leading-[normal] ${TXT}`} style={{ top }}>
        {name}
        {you && <span className="font-normal"> (You)</span>}
      </p>
      <p className={`absolute left-[20px] whitespace-nowrap font-['Inter',sans-serif] text-[13px] leading-[normal] ${TXT}`} style={{ top: top + 23 }}>
        <span className="font-semibold">Reg. Number:</span> <span className="font-normal">{reg}</span>
      </p>
      <p className={`absolute left-[20px] whitespace-nowrap font-['Inter',sans-serif] text-[14px] leading-[normal] ${TXT}`} style={{ top: top + 55 }}>Downloaded videos</p>
      <span className="absolute left-[161px] whitespace-nowrap font-['Inter',sans-serif] text-[11px] font-bold leading-[normal] text-[#2585fd]" style={{ top: top + 58 }}>{size}</span>
      <div className="absolute left-[calc(50%+127px)] flex h-[24px] w-[82px] -translate-x-1/2 items-center justify-center rounded-[5px] bg-[#ff3a3a]" style={{ top: top + 52 }}>
        <span className="font-['Inter',sans-serif] text-[11px] text-white">Delete All</span>
      </div>
    </>
  );
}

export default function DownloadsSettingsPage() {
  return (
    <main className="relative mx-auto h-[812px] w-[376px] overflow-hidden bg-white dark:bg-[#111111]">
      <AppHeader />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 top-[50px] opacity-40 dark:hidden"
        style={{ backgroundImage: "linear-gradient(64.6975deg, #e2eefd 13.822%, #e6f3f1 52.905%, #e9dfee 93.259%)" }}
      />

      {/* card */}
      <div className="absolute left-1/2 top-[80px] h-[601px] w-[360px] -translate-x-1/2 rounded-[10px] bg-white shadow-[0px_0px_5px_0px_rgba(0,0,0,0.1)] dark:border dark:border-[#1c1c1c] dark:bg-[#1a1a1a] dark:shadow-[0px_0px_20px_0px_#000000]" />

      <p className={`absolute left-[20px] top-[100px] font-['Inter',sans-serif] text-[16px] leading-[normal] ${TXT}`}>Download location</p>

      {/* Downloads (selected) */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`${RV}/radio-on.svg`} alt="" aria-hidden="true" className="absolute left-[20px] top-[143px] size-[16px]" />
      <p className="absolute left-[42px] top-[143px] whitespace-nowrap font-['Inter',sans-serif] text-[14px] leading-[normal] text-[#444444] dark:text-[#e8e8e8]">Downloads</p>
      <p className="absolute left-[42px] top-[163px] whitespace-nowrap font-['Inter',sans-serif] text-[11px] leading-[normal] text-[#444444] dark:text-[#e8e8e8]">10.08 GB available</p>

      {/* SD card (unselected) */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`${I}/radio-off.svg`} alt="" aria-hidden="true" className="absolute left-[20px] top-[190px] size-[16px]" />
      <p className="absolute left-[42px] top-[190px] whitespace-nowrap font-['Inter',sans-serif] text-[14px] leading-[normal] text-[#444444] dark:text-[#e8e8e8]">SD card</p>
      <p className="absolute left-[42px] top-[210px] whitespace-nowrap font-['Inter',sans-serif] text-[11px] leading-[normal] text-[#444444] dark:text-[#e8e8e8]">5.28 GB available</p>

      <div className="absolute left-1/2 top-[243px] h-px w-[336px] -translate-x-1/2 bg-[#cacaca]" />

      <p className={`absolute left-[20px] top-[263px] font-['Inter',sans-serif] text-[16px] leading-[normal] ${TXT}`}>Downloads by User</p>

      <UserRow top={302} name="Asif Mahmood Ripon" you reg="1819361" size="(10.08 GB)" />
      <UserRow top={404} name="Saiful Islam Sujon" reg="5687423" size="(15.01 GB)" />
      <UserRow top={506} name="User 2" reg="2547839" size="(890 MB)" />

      <p className={`absolute left-[calc(50%-63px)] top-[648px] whitespace-nowrap font-['Inter',sans-serif] text-[11px] leading-[normal] ${TXT}`}>App version: 1.2.5 (Beta)</p>

      <div className="absolute left-0 top-[746px]">
        <AppFooter />
      </div>
    </main>
  );
}
