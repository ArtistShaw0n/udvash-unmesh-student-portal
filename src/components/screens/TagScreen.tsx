import { AppHeader } from "@/components/screens/AppHeader";
import { AppFooter } from "@/components/screens/AppFooter";

/*
 * Figma V2 — Course / Subject / Chapter (Tag) — "Question and Answers" tagged view.
 *   light 1:35394 · dark 1:35517. frame 376×1363.
 *   header + title + Search/Filter bar + 3 white cards, each topped by a purple
 *   #55347b course/subject/chapter TAG band ("EAP / Bangla / International Relations
 *   and Bangladesh" + bookmark); card 1 & 3 = Me-question (right) + #e8e8e8 image +
 *   "Question Accepted" + meta + ⋮; card 2 = same w/o image; card 3 also carries an
 *   answer block (★ 1/5 rating + Satisfied/Not Yet pills + Shawon meta). Footer Home-active.
 *   Dark: card #2c2c2c (shadow 0 0 20 #000, no border), tag band & image stay raw,
 *   body #e8e8e8, question-meta rgba(232,232,232,0.7), pills stay #f9f9f9.
 */
const I = "/components/icons/tag";
const QA = "/components/icons/qa";
const TAG = "EAP / Bangla / International Relations and Bangladesh";
const ONE = "কোন দেশের সংবিধান অলিখিত? ";
const Q7 = ONE.repeat(7);

function TagHeader({ top }: { top: number }) {
  return (
    <div
      className="absolute left-[12px] flex h-[25px] w-[352px] items-center gap-[20px] rounded-tl-[5px] rounded-tr-[5px] bg-[#55347b] px-[8px] shadow-[0px_0px_5px_0px_rgba(0,0,0,0.1)]"
      style={{ top }}
    >
      <p className="w-[304px] truncate font-['Inter',sans-serif] text-[10px] leading-[normal] text-white">{TAG}</p>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`${I}/bookmark.svg`} alt="" aria-hidden="true" className="h-[15px] w-[12px] shrink-0" />
    </div>
  );
}

function Meta({ name, end, dim }: { name: string; end?: boolean; dim?: boolean }) {
  return (
    <div
      className={`flex w-[312px] items-center gap-[4px] font-['Inter',sans-serif] text-[10px] text-[#616161] ${dim ? "dark:text-[rgba(232,232,232,0.7)]" : "dark:text-[#e8e8e8]"} ${end ? "justify-end" : ""}`}
    >
      <span className="font-semibold">{name}</span>
      <span className="size-[2px] rounded-full bg-current" />
      <span className="italic">Today</span>
      <span className="size-[2px] rounded-full bg-current" />
      <span className="italic">11:01 PM</span>
    </div>
  );
}

function QuestionBlock({ top, image }: { top: number; image?: boolean }) {
  return (
    <div className="absolute left-[20px] flex w-[336px] items-start justify-between" style={{ top }}>
      {/* leading bookmark — white-on-card (invisible in both themes); kept as 12px spacer */}
      <div className="h-[15px] w-[12px] shrink-0" />
      <div className="flex w-[324px] flex-wrap items-start gap-[8px]">
        <div className="flex w-[312px] flex-col items-end gap-[8px]">
          <div className="flex w-full items-center justify-end pl-[38px]">
            <div className="flex h-[98px] flex-1 flex-col justify-end font-['Inter',sans-serif] text-[13px] text-[#616161] dark:text-[#e8e8e8]">
              <p className="leading-[20px]">{Q7}</p>
            </div>
          </div>
          {image && (
            <div className="flex w-full flex-col items-end pl-[160px]">
              <div className="h-[138px] w-[98px] rounded-[5px] bg-[#e8e8e8] shadow-[0px_0px_5px_0px_rgba(0,0,0,0.1)]" />
            </div>
          )}
          <p className="w-[312px] text-right font-['Inter',sans-serif] text-[10px] leading-[normal] text-[#2496c1]">Question Accepted</p>
        </div>
        <Meta name="Me" end dim />
      </div>
    </div>
  );
}

function Dots({ top }: { top: number }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={`${I}/dots3.svg`} alt="" aria-hidden="true" className="absolute left-[352px] h-[16px] w-[4px] dark:invert" style={{ top }} />
  );
}

function Star({ fill }: { fill?: boolean }) {
  return (
    <div className="relative size-[24px] overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`${I}/${fill ? "star-fill" : "star-empty"}.svg`} alt="" aria-hidden="true" className="absolute inset-[8.33%_8.33%_12.5%_8.33%]" />
    </div>
  );
}

function Pill({ icon, label }: { icon: string; label: string }) {
  return (
    <div className="relative h-[27px] w-[99px]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`${I}/pill-bg.svg`} alt="" aria-hidden="true" className="absolute inset-0 size-full" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`${I}/${icon}.svg`} alt="" aria-hidden="true" className="absolute left-[12px] top-[5px] h-[17px] w-[16.5px]" />
      <span className="absolute left-[36px] top-[5px] font-['Inter',sans-serif] text-[13px] leading-[normal] text-[#616161]">{label}</span>
    </div>
  );
}

export function TagScreen() {
  return (
    <main className="relative mx-auto h-[1363px] w-[376px] overflow-hidden bg-white dark:bg-[#111111]">
      <div className="pointer-events-none absolute inset-0 opacity-40 dark:hidden" style={{ backgroundImage: "linear-gradient(75.1954deg, #e2eefd 13.822%, #e6f3f1 52.905%, #e9dfee 93.259%)" }} />

      <AppHeader />

      <p className="absolute left-1/2 top-[74px] -translate-x-1/2 whitespace-nowrap font-['Inter',sans-serif] text-[20px] font-semibold leading-[normal] text-[#616161] dark:text-[#e8e8e8]">Question and Answers</p>
      <div className="absolute left-1/2 top-[100px] h-px w-[230px] -translate-x-1/2 bg-[linear-gradient(90deg,transparent,#000000,transparent)] opacity-[0.32] dark:bg-[linear-gradient(90deg,transparent,#ffffff,transparent)]" />

      {/* Search + Filter */}
      <div className="absolute left-1/2 top-[121px] h-[50px] w-[368px] -translate-x-1/2 rounded-[5px] bg-white shadow-[0px_0px_4px_0px_rgba(255,255,255,0.25)] dark:bg-[#1a1a1a]" />
      <div className="absolute left-[12px] top-[131px] flex h-[30px] w-[253px] items-center gap-[6px] rounded-[15px] border border-[#cdcdcd] bg-white px-[10px] dark:border-[#444444] dark:bg-[#1a1a1a]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`${QA}/qa-search.svg`} alt="" aria-hidden="true" className="size-[18px] dark:invert" />
        <span className="font-['Inter',sans-serif] text-[14px] leading-[normal] text-[#999999]">Search</span>
      </div>
      <div className="absolute left-[281px] top-[131px] flex h-[30px] w-[83px] items-center justify-center gap-[12px] rounded-[5px] border border-[#cdcdcd] bg-white dark:border-[#444444] dark:bg-[#1a1a1a]">
        <span className="font-['Inter',sans-serif] text-[14px] leading-[normal] text-[#616161] dark:text-[#e8e8e8]">Filter</span>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`${QA}/qa-filter.svg`} alt="" aria-hidden="true" className="h-[16px] w-[21px] dark:invert" />
      </div>

      {/* Card 1 — Me question + image + Question Accepted */}
      <div className="absolute left-[12px] top-[187px] h-[333px] w-[352px] rounded-[5px] bg-white dark:bg-[#2c2c2c] dark:shadow-[0px_0px_20px_0px_#000000]" />
      <TagHeader top={187} />
      <QuestionBlock top={224} image />
      <Dots top={452} />

      {/* Card 2 — Me question (no image) + Question Accepted */}
      <div className="absolute left-[12px] top-[530px] h-[187px] w-[352px] rounded-[5px] bg-white dark:bg-[#2c2c2c] dark:shadow-[0px_0px_20px_0px_#000000]" />
      <TagHeader top={530} />
      <QuestionBlock top={567} />
      <Dots top={635} />

      {/* Card 3 — Me question + image, then answer (rating + pills) */}
      <div className="absolute left-[12px] top-[727px] h-[540px] w-[352px] rounded-[5px] bg-white dark:bg-[#2c2c2c] dark:shadow-[0px_0px_20px_0px_#000000]" />
      <TagHeader top={727} />
      <QuestionBlock top={764} image />

      {/* answer block */}
      <div className="absolute left-[20px] top-[1060px] flex w-[324px] flex-col gap-[8px]">
        <div className="flex h-[98px] flex-col justify-end font-['Inter',sans-serif] text-[13px] text-[#616161] dark:text-[#e8e8e8]">
          <p className="leading-[20px]">{Q7}</p>
        </div>
        <div className="flex w-[321px] flex-col gap-[10px]">
          <div className="flex flex-col gap-[16px]">
            <div className="flex gap-[2px]">
              <Star fill />
              <Star />
              <Star />
              <Star />
              <Star />
            </div>
            <div className="flex gap-[10px]">
              <Pill icon="thumb-up" label="Satisfied" />
              <Pill icon="thumb-down" label="Not Yet" />
            </div>
          </div>
          <Meta name="Shawon" />
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
        <AppFooter />
      </div>
    </main>
  );
}
