import { cn } from "@/lib/cn";
import { AppHeader } from "@/components/screens/AppHeader";
import { AppFooter } from "@/components/screens/AppFooter";

/*
 * Figma V2 — Q&A "Question and Answers" thread. light 1:27673 · dark 1:27960. frame 376×2369.
 *   Re-audited 1:1 by real Figma values:
 *   cards @ top 187/510/1750, fixed height 313/1230/523 (→ exactly 10px gaps + popup aligned);
 *   per-card bookmark (12×15 #616161, node 1:27680) as left flex-child → content indented to x20;
 *   message internal gap 8 (1:27681/691), text→rating 20, stars→pills 16 (1:27738/742);
 *   star row = 5× 24-box / 20px glyph + gap2 = 128 (1:27745); 2px dot separators (1:27685);
 *   Me-question text 282px in the small-image card / 244 elsewhere.
 *   DEFERRED: 3-dot ⋮ overflow menu in CARD1 (4×16 #616161, node 1:27697) — auto-layout has no
 *   fixed coord; asset saved at qa/card-menu.svg, placement pending. Raw Figma values.
 */
const I = "/components/icons/qa";
const TXT = "text-[#616161] dark:text-[#e8e8e8]";
const ONE = "কোন দেশের সংবিধান অলিখিত? ";
const T7 = ONE.repeat(7);
const T5 = ONE.repeat(5);

type Msg = { sender: string; t1: string; t2: string; right?: boolean; text: string; textW?: number; imageW?: number; accepted?: boolean; feedback?: boolean };

// Figma Ellipse 41 — 2px filled circle separator (#616161, node 1:27685).
function Dot({ dim }: { dim?: boolean }) {
  return <span className={cn("block size-[2px] shrink-0 rounded-full", dim ? "bg-[rgba(97,97,97,0.7)] dark:bg-[rgba(232,232,232,0.7)]" : "bg-[#616161] dark:bg-[#e8e8e8]")} />;
}

function MsgHeader({ sender, t1, t2, right, dim }: { sender: string; t1: string; t2: string; right?: boolean; dim?: boolean }) {
  const c = dim ? "text-[rgba(97,97,97,0.7)] dark:text-[rgba(232,232,232,0.7)]" : TXT;
  return (
    <div className={cn("flex items-center gap-[4px] font-['Inter',sans-serif] text-[12px] leading-[normal]", c, right && "justify-end")}>
      <span className="font-semibold">{sender}</span>
      <Dot dim={dim} />
      <span className="italic">{t1}</span>
      <Dot dim={dim} />
      <span className="italic">{t2}</span>
    </div>
  );
}

// Figma star-scroe — each "Grade" is a 24×24 box with a ~20px glyph; gap-2 → 128px row (node 1:27745).
function Stars() {
  return (
    <div className="flex gap-[2px]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <span className="flex size-[24px] items-center justify-center"><img src={`${I}/star-filled.svg`} alt="" aria-hidden="true" className="size-[20px]" /></span>
      {[0, 1, 2, 3].map((i) => (
        <span key={i} className="flex size-[24px] items-center justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`${I}/star-empty.svg`} alt="" aria-hidden="true" className="size-[20px]" />
        </span>
      ))}
    </div>
  );
}

function Pills() {
  return (
    <div className="flex gap-[10px]">
      <div className="flex h-[27px] w-[99px] items-center justify-center gap-[6px] rounded-[5px] bg-[#f9f9f9] dark:bg-[#2c2c2c]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`${I}/pill-satisfied.svg`} alt="" aria-hidden="true" className="size-[16px]" />
        <span className={`font-['Inter',sans-serif] text-[13px] leading-[normal] ${TXT}`}>Satisfied</span>
      </div>
      <div className="flex h-[27px] w-[99px] items-center justify-center gap-[6px] rounded-[5px] bg-[#f9f9f9] dark:bg-[#2c2c2c]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`${I}/pill-notyet.svg`} alt="" aria-hidden="true" className="size-[16px]" />
        <span className={`font-['Inter',sans-serif] text-[13px] leading-[normal] ${TXT}`}>Not Yet</span>
      </div>
    </div>
  );
}

function Message({ m, dim }: { m: Msg; dim?: boolean }) {
  return (
    <div className={cn("flex flex-col gap-[8px]", m.right ? "items-end" : "items-start")}>
      <MsgHeader sender={m.sender} t1={m.t1} t2={m.t2} right={m.right} dim={dim} />
      <p className={cn("font-['Inter',sans-serif] text-[13px] leading-[20px]", TXT, m.right && "text-right")} style={{ width: m.textW ?? 244 }}>{m.text}</p>
      {m.imageW && <div className="rounded-[5px] bg-[#e8e8e8] shadow-[0px_0px_5px_0px_rgba(0,0,0,0.1)] dark:bg-[#2c2c2c]" style={{ width: m.imageW, height: 138 }} />}
      {m.accepted && <p className="font-['Inter',sans-serif] text-[10px] leading-[normal] text-[#2496c1]">Question Accepted</p>}
      {m.feedback && (
        <div className="mt-[12px] flex flex-col gap-[16px]">
          <Stars />
          <Pills />
        </div>
      )}
    </div>
  );
}

function Card({ top, height, msgs, dim, menu }: { top: number; height: number; msgs: Msg[]; dim?: boolean; menu?: boolean }) {
  return (
    <div className="absolute left-[12px] flex w-[352px] items-start rounded-[5px] bg-white px-[8px] py-[12px] shadow-[0px_0px_2.5px_0px_rgba(0,0,0,0.03)] dark:bg-[#2c2c2c] dark:shadow-[0px_0px_10px_0px_#000000]" style={{ top, height }}>
      {/* bookmark — Figma 1:27680 light #616161 / dark #e8e8e8 */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`${I}/card-bookmark.svg`} alt="" aria-hidden="true" className="h-[15px] w-[12px] shrink-0 dark:hidden" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`${I}/card-bookmark-dark.svg`} alt="" aria-hidden="true" className="hidden h-[15px] w-[12px] shrink-0 dark:block" />
      <div className="flex w-[312px] flex-col gap-[16px]">
        {msgs.map((m, i) => (
          <Message key={i} m={m} dim={dim} />
        ))}
      </div>
      {menu && (
        <>
          {/* ⋮ overflow menu — Figma 1:27697 (4×16 #616161 / dark #e8e8e8), top-right */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`${I}/card-menu.svg`} alt="" aria-hidden="true" className="absolute right-[8px] top-[12px] h-[16px] w-[4px] dark:hidden" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`${I}/card-menu-dark.svg`} alt="" aria-hidden="true" className="absolute right-[8px] top-[12px] hidden h-[16px] w-[4px] dark:block" />
        </>
      )}
    </div>
  );
}

const CARD1: Msg[] = [{ sender: "Me", t1: "Today", t2: "11:01 PM", right: true, text: T7, textW: 282, imageW: 98, accepted: true }];
const CARD2: Msg[] = [
  { sender: "Me", t1: "Today", t2: "11:01 PM", right: true, text: T7, imageW: 244 },
  { sender: "AI Teacher", t1: "Today", t2: "06:11 PM", text: T7, feedback: true },
  { sender: "Me", t1: "Yesterday", t2: "06:11 PM", right: true, text: T5 },
  { sender: "AI Teacher", t1: "Yesterday", t2: "06:11 PM", text: T5, feedback: true },
  { sender: "Me", t1: "Yesterday", t2: "06:11 PM", right: true, text: T5 },
  { sender: "Shawon", t1: "Yesterday", t2: "06:11 PM", text: T5, feedback: true },
];
const CARD3: Msg[] = [
  { sender: "Me", t1: "Today", t2: "11:01 PM", right: true, text: T7, imageW: 244 },
  { sender: "Shawon", t1: "Yesterday", t2: "06:11 PM", text: T5, feedback: true },
];

export default function QAQuestionsPage() {
  return (
    <main className="relative mx-auto h-[2369px] w-[376px] overflow-hidden bg-white dark:bg-[#111111]">
      <div className="pointer-events-none absolute inset-0 opacity-40 dark:hidden" style={{ backgroundImage: "linear-gradient(81.3537deg, #e2eefd 13.822%, #e6f3f1 52.905%, #e9dfee 93.259%)" }} />

      <AppHeader />

      <p className={`absolute left-1/2 top-[74px] -translate-x-1/2 whitespace-nowrap font-['Inter',sans-serif] text-[20px] font-semibold leading-[normal] ${TXT}`}>Question and Answers</p>
      <div className="absolute left-1/2 top-[100px] h-px w-[230px] -translate-x-1/2 bg-[linear-gradient(90deg,transparent,#000000,transparent)] opacity-[0.32] dark:bg-[linear-gradient(90deg,transparent,#ffffff,transparent)]" />

      {/* Search + Filter */}
      <div className="absolute left-1/2 top-[121px] h-[50px] w-[368px] -translate-x-1/2 rounded-[5px] bg-white shadow-[0px_0px_5px_0px_rgba(0,0,0,0.1),0px_0px_4px_0px_rgba(255,255,255,0.25)] dark:bg-[#2c2c2c]" />
      <div className="absolute left-[12px] top-[131px] flex h-[30px] w-[253px] items-center gap-[6px] rounded-[15px] border border-[#cdcdcd] bg-white px-[10px] dark:border-[#6d6d6d] dark:bg-[#2c2c2c]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`${I}/qa-search.svg`} alt="" aria-hidden="true" className="size-[18px] dark:invert" />
        <span className="font-['Inter',sans-serif] text-[14px] leading-[normal] text-[#999999]">Search</span>
      </div>
      <div className="absolute left-[281px] top-[131px] flex h-[30px] w-[83px] items-center justify-center gap-[12px] rounded-[5px] border border-[#cdcdcd] bg-white dark:border-[#6d6d6d] dark:bg-[#2c2c2c]">
        <span className={`font-['Inter',sans-serif] text-[14px] leading-[normal] ${TXT}`}>Filter</span>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`${I}/qa-filter.svg`} alt="" aria-hidden="true" className="h-[16px] w-[21px] dark:invert" />
      </div>

      <Card top={187} height={313} msgs={CARD1} menu />
      <Card top={510} height={1230} msgs={CARD2} dim />
      <Card top={1750} height={523} msgs={CARD3} dim />

      {/* AI-Teacher warning notice — node 1:27950 @ (38,851) 189×200 */}
      <div className="absolute left-[38px] top-[851px] h-[200px] w-[189px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <span className="absolute inset-[-4px] block dark:hidden"><img src={`${I}/warn-union.svg`} alt="" aria-hidden="true" className="block size-full max-w-none" /></span>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <span className="absolute inset-[-20px] hidden dark:block"><img src={`${I}/warn-union-dark.svg`} alt="" aria-hidden="true" className="block size-full max-w-none" /></span>
        <p className="absolute left-[12px] top-[30px] w-[165px] whitespace-pre-wrap font-['Inter',sans-serif] text-[11px] leading-[16px] text-[#f95959]">সর্বাধিক নির্ভুল উত্তর পেতে হাতের লেখা, বাঁকা, ঝাপসা ছবি এবং বাংলিশ লেখা এড়িয়ে চলো  তবে AI TEACHER  এর উত্তর যেহেতু ১০০% সঠিক নাও হতে পারে; তাই কোনো উত্তরে সন্তুষ্ট না হলে &quot; NOT YET &quot;  এ ক্লিক করে HUMAN TEACHER  ভাইয়া / আপু কে প্রশ্ন করলে কিছু সময় পর উত্তর পেয়ে যাবে ইন শা আল্লাহ</p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`${I}/warn-cross.svg`} alt="" aria-hidden="true" className="absolute right-[6px] top-[6px] size-[16px] dark:hidden" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`${I}/warn-cross-dark.svg`} alt="" aria-hidden="true" className="absolute right-[6px] top-[6px] hidden size-[16px] dark:block" />
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
        <AppFooter />
      </div>
    </main>
  );
}
