import Link from "next/link";
import { AppHeader } from "@/components/screens/AppHeader";
import { AppFooter } from "@/components/screens/AppFooter";

/*
 * Figma V2 — Community group-chat conversation. light 1:23609 · dark 1:24226. frame 376×1956.
 *   app header + chat header (back + avatar + group name + search/menu) + pinned strip +
 *   message thread (left/right bubbles, coloured sender names + avatar discs, reaction pills,
 *   an audio message, two reply-quote cards, "Question rejected") + "Type a message" input
 *   bar + footer. Raw Figma values; CSS bubbles/avatars/pills.
 */
const CM = "/components/icons/community";
const TXT = "text-[#616161] dark:text-[#e8e8e8]";
const TIME = "text-[rgba(97,97,97,0.5)] dark:text-[rgba(232,232,232,0.5)]";
const LBUBBLE = "rounded-tl-[0px] rounded-tr-[5px] rounded-br-[5px] rounded-bl-[5px] bg-white p-[8px] shadow-[0px_0px_2.5px_0px_rgba(0,0,0,0.03)] dark:bg-[#1a1a1a]";
const RBUBBLE = "rounded-tl-[5px] rounded-tr-[0px] rounded-br-[5px] rounded-bl-[5px] bg-[rgba(185,203,255,0.5)] shadow-[0px_0px_5px_0px_rgba(0,0,0,0.03)]";

function Disc({ top, color }: { top: number; color: string }) {
  return <div className="absolute left-[12px] size-[30px] rounded-full" style={{ top, backgroundColor: color }} />;
}
function Name({ top, color, children }: { top: number; color: string; children: string }) {
  return <p className="absolute left-[44px] whitespace-nowrap font-['Inter',sans-serif] text-[14px] font-medium leading-[normal]" style={{ top, color }}>{children}</p>;
}
function Pill({ left, top, count }: { left: number; top: number; count: string }) {
  return (
    <span className="absolute flex h-[20px] items-center gap-[6px] rounded-[10px] border-[0.2px] border-[#00a511] bg-white px-[6px] shadow-[0px_0px_5px_0px_rgba(0,0,0,0.03)] dark:bg-[#1a1a1a]" style={{ left, top }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`${CM}/chat-thumb.svg`} alt="" aria-hidden="true" className="h-[12px] w-[14px]" />
      <span className={`font-['Inter',sans-serif] text-[10px] font-medium leading-[normal] ${TXT}`}>{count}</span>
    </span>
  );
}
function DateSep({ top }: { top: number }) {
  return (
    <div className="absolute left-1/2 flex w-[320px] -translate-x-1/2 items-center gap-[8px]" style={{ top }}>
      <span className="h-px flex-1 bg-[#cacaca] dark:bg-[#565656]" />
      <span className="whitespace-nowrap font-['Inter',sans-serif] text-[10px] leading-[normal] text-[#999999]">10:05 AM</span>
      <span className="h-px flex-1 bg-[#cacaca] dark:bg-[#565656]" />
    </div>
  );
}

const REPEAT4 = "কোন দেশের সংবিধান অলিখিত? কোন দেশের সংবিধান অলিখিত? কোন দেশের সংবিধান অলিখিত? কোন দেশের সংবিধান অলিখিত? ";
const REPEAT20 = REPEAT4.repeat(4) + "কোন দেশের সংবিধান অলিখিত?   " + REPEAT4;

export default function CommunityChatPage() {
  return (
    <main className="relative mx-auto h-[1956px] w-[376px] overflow-hidden bg-white dark:bg-[#111111]">
      <div className="pointer-events-none absolute inset-0 opacity-40 dark:hidden" style={{ backgroundImage: "linear-gradient(79.5648deg, #e2eefd 13.822%, #e6f3f1 52.905%, #e9dfee 93.259%)" }} />

      <AppHeader />

      {/* Chat header */}
      <div className="absolute left-1/2 top-[60px] flex h-[30px] w-[368px] -translate-x-1/2 items-center rounded-[5px] bg-[rgba(85,52,123,0.1)] dark:bg-[#2c2c2c]" />
      <Link href="/community" aria-label="Back to groups" className="absolute left-[12px] top-[66px] block h-[18px] w-[10px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`${CM}/chat-back.svg`} alt="" aria-hidden="true" className="size-full dark:invert" />
      </Link>
      <div className="absolute left-[27px] top-[60px] flex size-[30px] items-center justify-center rounded-full bg-[#25b7d3]">
        <span className="font-['Inter',sans-serif] text-[14px] leading-[normal] text-white">AB</span>
      </div>
      <p className={`absolute left-[63px] top-[66px] right-[70px] truncate font-['Inter',sans-serif] text-[14px] font-semibold leading-[normal] ${TXT}`}>উদ্ভাস ইঞ্জিনিয়ারিং ব্যাচ’২৫ (Boys) উদ্ভা...</p>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`${CM}/chat-search.svg`} alt="" aria-hidden="true" className="absolute left-[325px] top-[67px] size-[16px] dark:invert" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`${CM}/chat-menu.svg`} alt="" aria-hidden="true" className="absolute left-[350px] top-[67px] h-[16px] w-[4px] dark:invert" />

      {/* Pinned strip */}
      <div className="absolute left-1/2 top-[106px] flex h-[42px] w-[368px] -translate-x-1/2 items-center gap-[8px] rounded-[5px] bg-[rgba(85,52,123,0.05)] px-[12px] dark:bg-[#2c2c2c]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`${CM}/chat-back.svg`} alt="" aria-hidden="true" className="h-[14px] w-[8px] dark:invert" />
        <p className={`flex-1 truncate font-['Inter',sans-serif] text-[14px] leading-[normal] ${TXT}`}>একটা বিষয় তোমাদের ক্লিয়ার থাকা প্রয়োজন বলে ...</p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`${CM}/chat-back.svg`} alt="" aria-hidden="true" className="h-[14px] w-[8px] rotate-180 dark:invert" />
      </div>

      <DateSep top={168} />

      {/* ROW A — right, rejected MCQ */}
      <div className="absolute right-[12px] top-[200px] w-[268px]">
        <div className={`${RBUBBLE} py-[8px] pl-[11px] pr-[8px]`}>
          <div className="h-[138px] w-[244px] rounded-[5px] bg-white dark:bg-[#2c2c2c]" />
          <p className={`mt-[6px] w-[244px] font-['Inter',sans-serif] text-[13px] leading-[normal] ${TXT}`}>কোন দেশের সংবিধান অলিখিত? </p>
          <div className="mt-[4px] flex items-center justify-end gap-[6px] font-['Inter',sans-serif] text-[10px] leading-[normal]">
            <span className="text-[#f95959]">Question rejected</span>
            <span className={TIME}>· Edited</span>
            <span className={TIME}>· 12 Aug, 2024</span>
            <span className={TIME}>· 10:05 AM</span>
          </div>
        </div>
      </div>

      {/* ROW B — left blue */}
      <Disc top={446} color="#2496c1" />
      <Name top={424} color="#2496c1">Akash (1245637)</Name>
      <div className="absolute left-[44px] top-[446px]">
        <div className={`${LBUBBLE} w-[184px]`}>
          <p className={`font-['Inter',sans-serif] text-[13px] leading-[normal] ${TXT}`}>কোন দেশের সংবিধানলিখিত?</p>
          <p className={`mt-[2px] text-right font-['Inter',sans-serif] text-[10px] leading-[normal] ${TIME}`}>10:05 AM</p>
        </div>
      </div>
      <Pill left={52} top={510} count="9" />

      {/* ROW C — left red */}
      <Disc top={556} color="#e02d15" />
      <Name top={534} color="#e02d15">Akash (1245637)</Name>
      <div className="absolute left-[44px] top-[556px]">
        <div className={`${LBUBBLE} w-[256px]`}>
          <p className={`font-['Inter',sans-serif] text-[13px] leading-[20px] ${TXT}`}>Which country has an unwritten constitution?</p>
          <p className={`mt-[2px] text-right font-['Inter',sans-serif] text-[10px] leading-[normal] ${TIME}`}>10:05 AM</p>
        </div>
      </div>
      <Pill left={52} top={628} count="99+" />

      <DateSep top={662} />

      {/* ROW D — left purple */}
      <Disc top={722} color="#684b8a" />
      <Name top={700} color="#684b8a">Bikash (1245987)</Name>
      <div className="absolute left-[44px] top-[722px]">
        <div className={`${LBUBBLE} w-[256px]`}>
          <p className={`font-['Inter',sans-serif] text-[13px] leading-[20px] ${TXT}`}>{REPEAT4}</p>
          <p className={`mt-[2px] text-right font-['Inter',sans-serif] text-[10px] leading-[normal] ${TIME}`}>10:05 AM</p>
        </div>
      </div>
      <Pill left={52} top={830} count="99+" />

      {/* ROW E — right audio */}
      <div className="absolute left-[123px] top-[848px] w-[234px]">
        <div className={`${RBUBBLE} py-[8px] pl-[10px] pr-[8px]`}>
          <div className="flex items-center gap-[8px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${CM}/chat-audio-play.svg`} alt="" aria-hidden="true" className="size-[22px]" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${CM}/chat-audio-wave.svg`} alt="" aria-hidden="true" className="h-[8px] w-[69px]" />
            <span className="whitespace-nowrap font-['Inter',sans-serif] text-[12px] leading-[normal] text-[#c1c2c3]">0:00 / 0:00</span>
          </div>
          <p className="mt-[4px] text-right font-['Inter',sans-serif] text-[10px] leading-[normal] text-[#f95959]">Question rejected</p>
        </div>
      </div>

      {/* ROW F — left green, very long */}
      <Disc top={966} color="#00ba00" />
      <Name top={944} color="#00ba00">Bikash (1245987)</Name>
      <div className="absolute left-[44px] top-[966px]">
        <div className={`${LBUBBLE} w-[260px]`}>
          <p className={`whitespace-pre-wrap font-['Inter',sans-serif] text-[13px] leading-[20px] ${TXT}`}>{REPEAT20}</p>
          <p className={`mt-[2px] text-right font-['Inter',sans-serif] text-[10px] leading-[normal] ${TIME}`}>10:05 AM</p>
        </div>
      </div>

      {/* ROW G — left orange, reply-quote */}
      <Disc top={1350} color="#ff9900" />
      <Name top={1328} color="#ff9900">Bikash Noor (1245987)</Name>
      <div className="absolute left-[44px] top-[1350px] w-[293px]">
        <div className={`${LBUBBLE} relative`}>
          <div className="rounded-[5px] bg-[#f5f5f5] p-[8px] shadow-[0px_0px_5px_0px_rgba(0,0,0,0.03)] dark:bg-[#2c2c2c]">
            <div className="mb-[6px] h-[42px] w-[75px] rounded-[5px] bg-white dark:bg-[#1a1a1a]" />
            <p className={`font-['Inter',sans-serif] text-[12px] leading-[normal] ${TXT}`}>কোন দেশের সংবিধান অলিখিত? </p>
            <p className="mt-[2px] font-['Inter',sans-serif] text-[10px] leading-[normal] text-[#2496c1]">Akash (1256875)</p>
          </div>
          <p className={`mt-[8px] font-['Inter',sans-serif] text-[13px] leading-[20px] ${TXT}`}>কোন দেশের সংবিধান অলিখিত? কোন দেশের সংবিধান অলিখিত? কোন দেশের সংবিধান অলিখিত?</p>
          <p className="mt-[4px] text-right font-['Inter',sans-serif] text-[10px] leading-[normal] text-[#999999]">10:05 AM</p>
        </div>
      </div>

      {/* ROW H — left magenta, reply-quote */}
      <Disc top={1605} color="#c1249c" />
      <Name top={1583} color="#c1249c">Bikash (1245987)</Name>
      <div className="absolute left-[44px] top-[1605px] w-[293px]">
        <div className={`${LBUBBLE}`}>
          <div className="rounded-[5px] bg-[#f5f5f5] p-[8px] shadow-[0px_0px_5px_0px_rgba(0,0,0,0.03)] dark:bg-[#2c2c2c]">
            <p className={`font-['Inter',sans-serif] text-[12px] leading-[normal] ${TXT}`}>কোন দেশের সংবিধান অলিখিত? </p>
            <p className="mt-[2px] font-['Inter',sans-serif] text-[10px] leading-[normal] text-[#2496c1]">Akash (1256875)</p>
          </div>
          <p className={`mt-[8px] font-['Inter',sans-serif] text-[13px] leading-[20px] ${TXT}`}>কোন দেশের সংবিধান অলিখিত? কোন দেশের সংবিধান অলিখিত? কোন দেশের সংবিধান অলিখিত?কোন দেশের সংবিধান অলিখিত?কোন দেশের সংবিধান অলিখিত?কোন দেশের সংবিধান অলিখিত?</p>
          <p className="mt-[4px] text-right font-['Inter',sans-serif] text-[10px] leading-[normal] text-[#999999]">10:05 AM</p>
        </div>
      </div>

      {/* Input bar */}
      <div className="absolute left-1/2 top-[1824px] flex w-[376px] -translate-x-1/2 items-center gap-[10px] rounded-[10px] bg-white py-[12px] pl-[12px] shadow-[0px_-1px_2px_0px_rgba(104,75,138,0.1)] dark:bg-[#1a1a1a]">
        <div className="flex h-[40px] w-[302px] items-center gap-[4px] rounded-[10px] bg-[#eef0f1] px-[6px] dark:bg-[#2c2c2c]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`${CM}/chat-smiley.svg`} alt="" aria-hidden="true" className="size-[24px] dark:invert" />
          <span className="flex-1 font-['Inter',sans-serif] text-[14px] leading-[23px] text-[#9da3a7]">Type a message</span>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`${CM}/chat-mic.svg`} alt="" aria-hidden="true" className="h-[20px] w-[14px] dark:invert" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`${CM}/chat-clip.svg`} alt="" aria-hidden="true" className="size-[20px] dark:invert" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`${CM}/chat-camera.svg`} alt="" aria-hidden="true" className="size-[20px] dark:invert" />
        </div>
        <div className="flex size-[40px] items-center justify-center rounded-[10px] bg-[#c6c6c6] dark:bg-[#2c2c2c]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`${CM}/chat-send.svg`} alt="" aria-hidden="true" className="size-[22px]" />
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
        <AppFooter />
      </div>
    </main>
  );
}
