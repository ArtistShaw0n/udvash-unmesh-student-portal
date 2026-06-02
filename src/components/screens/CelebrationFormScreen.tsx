import Link from "next/link";
import { AppHeader } from "@/components/screens/AppHeader";
import { AppFooter } from "@/components/screens/AppFooter";

/*
 * Figma V2 — Grand Celebration · Registration Form. light 1:4348 · dark 1:4489. frame 376×3192.
 *   header + title "Grand Celebration - 2023" + Event Info (Venue/Date/Deadline + map-marker) +
 *   intro Message + fee-table card (প্রতিষ্ঠান / আমন্ত্রিত মেধাক্রম, 8 rows + 2 notes) +
 *   3 entry cards (program dropdown + admission roll + merit; gift/branch dropdowns; photo
 *   upload) + personal-info card (11 fields) + Submit + footer Home-active.
 *   Dark: cards #1a1a1a; fields #111/border #444; chips #2c2c2c; text #616161→#e8e8e8.
 */
const I = "/components/icons/celebration";
const TXT = "text-[#616161] dark:text-[#e8e8e8]";

function Card({ top, height }: { top: number; height: number }) {
  return (
    <div
      className="absolute left-[8px] w-[360px] rounded-[10px] bg-white shadow-[0px_0px_5px_0px_rgba(0,0,0,0.1),0px_0px_4px_0px_rgba(255,255,255,0.25)] dark:border dark:border-[#1c1c1c] dark:bg-[#1a1a1a] dark:shadow-[0px_0px_20px_0px_#000000]"
      style={{ top, height }}
    />
  );
}

function Label({ top, children }: { top: number; children: React.ReactNode }) {
  return (
    <p className={`absolute left-[28px] whitespace-nowrap font-['Inter',sans-serif] text-[14px] leading-[normal] ${TXT}`} style={{ top }}>
      {children} <span className="text-[#ff0000]">*</span>
    </p>
  );
}

function Field({ top, value, placeholder, dropdown, prefilled }: { top: number; value?: string; placeholder?: string; dropdown?: boolean; prefilled?: boolean }) {
  return (
    <div
      className={`absolute left-[28px] flex h-[40px] w-[320px] items-center justify-between rounded-[5px] border border-[#b9b9b9] px-[10px] dark:border-[0.5px] dark:border-[#444444] dark:shadow-[0px_0px_5px_0px_rgba(0,0,0,0.1)] ${prefilled ? "bg-[#f5f5f5] dark:bg-[#2c2c2c]" : "bg-white dark:bg-[#111111]"}`}
      style={{ top }}
    >
      <span className={`font-['Inter',sans-serif] text-[14px] leading-[normal] ${value ? "text-[#616161] dark:text-[#e8e8e8]" : "text-[#dcdcdc] dark:text-[#616161]"}`}>{value ?? placeholder}</span>
      {dropdown && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={`${I}/chevron.svg`} alt="" aria-hidden="true" className="h-[6px] w-[12px] rotate-180 dark:invert" />
      )}
    </div>
  );
}

const FEE_ROWS: [string, string, number][] = [
  ["MEDICAL", "1-5500", 619],
  ["DENTAL", "1-800", 664],
  ["DU (KA Unit)", "1-3000", 709],
  ["BUET (Engineering)", "1-1500", 754],
  ["BUET (Architecture)", "1-100", 799],
  ["CKRUET (Engineering)", "1-4500", 844],
  ["CKRUET (Architecture)", "1-200", 889],
  ["BUTEX", "1-1000", 934],
];
const DIVIDERS = [589, 650, 695, 740, 785, 830, 875, 920, 965];

export function CelebrationFormScreen() {
  return (
    <main className="relative mx-auto h-[3192px] w-[376px] overflow-hidden bg-white dark:bg-[#111111]">
      <div className="pointer-events-none absolute inset-0 opacity-40 dark:hidden" style={{ backgroundImage: "linear-gradient(74.3049deg, #e2eefd 13.822%, #e6f3f1 52.905%, #e9dfee 93.259%)" }} />

      <AppHeader />

      {/* title */}
      <p className={`absolute left-1/2 top-[74px] -translate-x-1/2 whitespace-nowrap font-['Inter',sans-serif] text-[20px] font-semibold leading-[normal] ${TXT}`}>Grand Celebration - 2023</p>
      <div className="absolute left-1/2 top-[100px] h-px w-[300px] -translate-x-1/2 bg-[linear-gradient(90deg,transparent,#000000,transparent)] opacity-[0.32] dark:bg-[linear-gradient(90deg,transparent,#ffffff,transparent)]" />

      {/* event info */}
      <p className={`absolute left-[calc(50%-126px)] top-[111px] whitespace-nowrap font-['Inter',sans-serif] text-[14px] leading-[24px] ${TXT}`}>Venue : Mirpur Indoor Stadium, Dhaka</p>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`${I}/map-marker.svg`} alt="" aria-hidden="true" className="absolute left-[317px] top-[116px] h-[13.717px] w-[10.21px]" />
      <p className={`absolute left-[calc(50%-120px)] top-[135px] whitespace-pre font-['Inter',sans-serif] text-[14px] leading-[24px] ${TXT}`}>Date  4 May, 2024, Time : 09:30 AM</p>
      <p className={`absolute left-[calc(50%-155px)] top-[159px] whitespace-nowrap font-['Inter',sans-serif] text-[14px] leading-[24px] ${TXT}`}>Registration Deadline : 29 April, 2024 11:59 PM</p>
      <div className="absolute left-1/2 top-[193px] h-px w-[300px] -translate-x-1/2 bg-[linear-gradient(90deg,transparent,#000000,transparent)] opacity-[0.32] dark:bg-[linear-gradient(90deg,transparent,#ffffff,transparent)]" />

      {/* intro message */}
      <div className={`absolute left-[20px] top-[224px] w-[336px] text-center font-['Inter',sans-serif] text-[14px] leading-[22px] ${TXT}`}>
        <p>প্রিয় শিক্ষার্থী বন্ধুরা,</p>
        <p>এডমিশন-২৩ ব্যাচের অভাবনীয় সাফল্যে উদ্ভাস-উন্মেষ শিক্ষা পরিবার গর্বিত তোমাদের এই সাফল্যকে আরও স্মরণীয় করে রাখতে আগামী ০৪ মে, ২০২৪ (শনিবার) মিরপুর ইনডোর স্টেডিয়ামে আমরা আয়োজন করতে যাচ্ছি Grand Celebration-2023. ভেন্যুর আসন সংখ্যা সীমিত হওয়ায় অনিচ্ছাসত্ত্বেও আমরা সম্মানিত অভিভাবকদের আমন্ত্রণ জানাতে পারছিনা এবং আমন্ত্রিত শিক্ষার্থীদের তালিকাও সীমাবদ্ধ রাখতে হচ্ছে তোমাদের মধ্যে যারা নিম্নোক্ত যেকোনো প্রতিষ্ঠানের উল্লেখিত মেধাস্থানের মধ্যে অবস্থান করে ভর্তি হয়েছ বা হতে যাচ্ছ তারা নিচের ফরমটি পূরণ করে আগামী ২৯ এপ্রিল, ২০২৪ এর মধ্যে সাবমিট করো।</p>
      </div>

      {/* ===== fee table card ===== */}
      <Card top={518} height={629} />
      <div className="absolute left-[28px] top-[548px] flex h-[21px] items-center rounded-[5px] bg-[#f6f6f6] px-[6px] dark:bg-[#2c2c2c]">
        <span className={`font-['Inter',sans-serif] text-[16px] font-medium leading-[normal] ${TXT}`}>প্রতিষ্ঠান</span>
      </div>
      <div className="absolute left-[220px] top-[548px] flex h-[21px] items-center rounded-[5px] bg-[#f6f6f6] px-[6px] dark:bg-[#2c2c2c]">
        <span className={`font-['Inter',sans-serif] text-[16px] font-medium leading-[normal] ${TXT}`}>আমন্ত্রিত মেধাক্রম</span>
      </div>
      {DIVIDERS.map((t) => (
        <div key={t} className="absolute left-1/2 h-px w-[320px] -translate-x-1/2 bg-[#cacaca] dark:bg-[#3a3a3a]" style={{ top: t }} />
      ))}
      {FEE_ROWS.map(([name, val, top]) => (
        <div key={name} className={`absolute left-[34px] flex w-[308px] items-center font-['Inter',sans-serif] text-[14px] leading-[normal] ${TXT}`} style={{ top }}>
          <span className="w-[154px]">{name}</span>
          <span className="w-[154px] text-right">{val}</span>
        </div>
      ))}
      <p className="absolute left-[28px] top-[985px] w-[320px] font-['Inter',sans-serif] text-[14px] leading-[22px]">
        <span className="text-[#ff0000]">*</span>
        <span className={TXT}> কোটায় চান্সপ্রাপ্ত শিক্ষার্থীদের </span>
        <span className="text-[#159be1]">09666775566</span>
        <span className={TXT}> নম্বরে কল করে রেজিস্ট্রেশন সম্পন্ন করার জন্য অনুরোধ করা হলো।</span>
      </p>
      <p className={`absolute left-[28px] top-[1061px] w-[320px] font-['Inter',sans-serif] text-[14px] leading-[22px] ${TXT}`}>
        <span className="text-[#ff0000]">*</span>
        <span> উল্লেখিত মেধাক্রমের বাইরেও সংশ্লিষ্ট প্রতিষ্ঠানে ভর্তিকৃত শিক্ষার্থীরা পরবর্তীতে নিকটস্থ শাখা থেকে সংবর্ধনা গিফট সংগ্রহ করতে পারবে। </span>
      </p>

      {/* ===== entry card 1 — program dropdown + 2 inputs ===== */}
      <Card top={1167} height={309} />
      <Label top={1207}>যে প্রতিষ্ঠানে ভর্তি হয়েছ / ভর্তি হতে যাচ্ছ</Label>
      <Field top={1232} value="Select a option" dropdown />
      <Label top={1292}>ভর্তি পরীক্ষার রোল</Label>
      <Field top={1317} placeholder="Enter Admission Roll" />
      <Label top={1377}>মেধাস্থান</Label>
      <Field top={1402} placeholder="Enter Merit Position" />

      {/* ===== entry card 2 — 2 dropdowns ===== */}
      <Card top={1492} height={224} />
      <Label top={1532}>সংবর্ধনা গিফট যেখান থেকে সংগ্রহ করতে চাও</Label>
      <Field top={1557} value="Select a option" dropdown />
      <Label top={1617}>নিকটস্থ যে শাখা থেকে সংগ্রহ করতে চাও</Label>
      <Field top={1642} value="Select a option" dropdown />

      {/* ===== photo upload card ===== */}
      <Card top={1732} height={283} />
      <p className={`absolute left-1/2 top-[1762px] -translate-x-1/2 whitespace-nowrap text-center font-['Inter',sans-serif] text-[14px] leading-[normal] ${TXT}`}>তোমার রিসেন্ট ছবি আপলোড করো <span className="text-[#ff0000]">*</span></p>
      <div className="absolute left-[123px] top-[1799px] flex size-[130px] items-center justify-center rounded-[10px] border border-[#b2b9c4] bg-white dark:border-[#444444] dark:bg-[#111111]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`${I}/img-placeholder.svg`} alt="" aria-hidden="true" className="h-[30px] w-[37px] dark:invert" />
      </div>
      <div className="absolute left-1/2 top-[1949px] flex h-[36px] w-[130px] -translate-x-1/2 items-center justify-center rounded-[5px] bg-[#55347b]">
        <span className="font-['Inter',sans-serif] text-[14px] leading-[12px] text-white">Browse</span>
      </div>

      {/* ===== personal info card — 11 fields ===== */}
      <Card top={2031} height={989} />
      <p className={`absolute left-[28px] top-[2071px] whitespace-nowrap font-['Inter',sans-serif] text-[14px] leading-[normal] ${TXT}`}>Udvash-Unmesh Registration Number</p>
      <Field top={2096} value="1234567" prefilled />
      <Label top={2156}>Nick Name</Label>
      <Field top={2181} value="Rayhan" />
      <p className={`absolute left-[28px] top-[2241px] whitespace-nowrap font-['Inter',sans-serif] text-[14px] leading-[normal] ${TXT}`}>Full Name <span className="text-[10px]">(According to Certificate)</span> <span className="text-[#ff0000]">*</span></p>
      <Field top={2266} value="Full Name" />
      <Label top={2326}>Mobile Number</Label>
      <Field top={2351} value="01710000000" />
      <Label top={2411}>Gender</Label>
      <Field top={2436} value="Male" dropdown />
      <Label top={2496}>College Name</Label>
      <Field top={2521} value="College Name" />
      <Label top={2581}>HSC Board Roll</Label>
      <Field top={2606} placeholder="Enter HSc Board Roll" />
      <Label top={2666}>HSc Registration Number</Label>
      <Field top={2691} placeholder="Enter HSc Registration Number" />
      <Label top={2751}>HSC Board</Label>
      <Field top={2776} value="Select a option" dropdown />
      <Label top={2836}>HSC Passing Year</Label>
      <Field top={2861} value="Select a option" dropdown />
      <Label top={2921}>SSC Board Roll</Label>
      <Field top={2946} placeholder="Enter HSc Board Roll" />

      {/* submit */}
      <Link href="/grand-celebration/result" className="absolute left-[123px] top-[3060px] flex h-[36px] w-[130px] items-center justify-center rounded-[5px] bg-[#55347b]">
        <span className="font-['Inter',sans-serif] text-[14px] leading-[12px] text-white">Submit</span>
      </Link>

      <div className="absolute bottom-0 left-0">
        <AppFooter />
      </div>
    </main>
  );
}
