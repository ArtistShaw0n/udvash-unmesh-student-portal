import { AppHeader } from "@/components/screens/AppHeader";
import { AppFooter } from "@/components/screens/AppFooter";

/*
 * Figma V2 — Grand Celebration · Success / Error. light 1:4637 · dark 1:4720. frame 376×1282.
 *   header + Pending message (yellow #fff2cf / #836a27) + Rejection message (pink #f7d7da /
 *   #723036) + QR card (party-popper icon + "Verification Successful!" + QR 150 + user photo +
 *   ID/Name/Admitted/Merit + stacked Udvash-Unmesh logo) + Download/Print buttons + footer.
 *   Dark: messages keep raw colors; QR card #1a1a1a + border; QR & logo swap to dark assets.
 */
const L = "/components/icons/celebration";

function CelebrationLogo() {
  // stacked logo (90×56): flame-books icon (top) + "উদ্ভাস-উন্মেষ" text (bottom)
  return (
    <div className="absolute left-[143px] top-[1034px] h-[56px] w-[90px]">
      {/* left book */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`${L}/logo-book-l.svg`} alt="" aria-hidden="true" className="absolute left-[24.8px] top-0 h-[32.4px] w-[19.5px] dark:hidden" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`${L}/logo-flame-b-dark.svg`} alt="" aria-hidden="true" className="absolute left-[24.8px] top-0 hidden h-[32.4px] w-[19.5px] dark:block" />
      {/* right book */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`${L}/logo-book-r.svg`} alt="" aria-hidden="true" className="absolute left-[46.8px] top-0 h-[32.4px] w-[19.5px] dark:hidden" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`${L}/logo-flame-a-dark.svg`} alt="" aria-hidden="true" className="absolute left-[46.8px] top-0 hidden h-[32.4px] w-[19.5px] dark:block" />
      {/* centre flame */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`${L}/logo-flame.svg`} alt="" aria-hidden="true" className="absolute left-[29.3px] top-[2.1px] h-[27.3px] w-[10.3px] dark:hidden" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`${L}/logo-flame-c-dark.svg`} alt="" aria-hidden="true" className="absolute left-[29.3px] top-[2.1px] hidden h-[27.3px] w-[10.3px] dark:block" />
      {/* text */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`${L}/logo-text.svg`} alt="উদ্ভাস-উন্মেষ" className="absolute left-0 top-[36.6px] h-[19.4px] w-[90px] dark:hidden" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`${L}/logo-text-dark.svg`} alt="" aria-hidden="true" className="absolute left-0 top-[36.6px] hidden h-[19.4px] w-[90px] dark:block" />
    </div>
  );
}

export function CelebrationResultScreen() {
  return (
    <main className="relative mx-auto h-[1282px] w-[376px] overflow-hidden bg-white dark:bg-[#111111]">
      <div className="pointer-events-none absolute inset-0 opacity-40 dark:hidden" style={{ backgroundImage: "linear-gradient(74.3049deg, #e2eefd 13.822%, #e6f3f1 52.905%, #e9dfee 93.259%)" }} />

      <AppHeader />

      {/* Pending Verification Message */}
      <div className="absolute left-[24px] top-[74px] h-[216px] w-[328px] rounded-[10px] bg-[#fff2cf] shadow-[0px_0px_5px_0px_rgba(0,0,0,0.1),0px_0px_4px_0px_rgba(255,255,255,0.25)]" />
      <div className="absolute left-[44px] top-[94px] w-[288px] font-['Inter',sans-serif] text-[14px] font-normal text-[#836a27]">
        <p className="leading-[22px]">প্রিয় Mahfuz,</p>
        <p className="leading-[22px]">তোমার আবেদনটি Verification এর অপেক্ষায় আছে Verification সম্পন্ন হলে তোমাকে একটি QR Code দেওয়া হবে QR Code টি মোবাইল স্ক্রিনে অথবা কাগজে প্রিন্ট করে প্রদর্শন সাপেক্ষে সেলিব্রেশন ভেন্যু থেকে অথবা নিকটস্থ শাখা থেকে সংবর্ধনা গিফট সংগ্রহ করতে পারবে একটি QR Code একবারই ব্যবহারযোগ্য।</p>
      </div>

      {/* Rejection Message */}
      <div className="absolute left-[24px] top-[300px] h-[128px] w-[328px] rounded-[10px] bg-[#f7d7da] shadow-[0px_0px_5px_0px_rgba(0,0,0,0.1),0px_0px_4px_0px_rgba(255,255,255,0.25)]" />
      <div className="absolute left-[44px] top-[320px] w-[288px] font-['Inter',sans-serif] text-[14px] font-normal text-[#723036]">
        <p className="leading-[22px]">প্রিয় Mahfuz,</p>
        <p className="leading-[22px]">দুঃখিত! তথ্য সঠিক না হওয়ায় তোমার আবেদনটি Reject করা হয়েছে। </p>
        <p className="leading-[22px]">প্রয়োজনে - 09666775566</p>
      </div>

      {/* QR Code card */}
      <div className="absolute left-[24px] top-[458px] h-[652px] w-[328px] rounded-[10px] bg-white shadow-[0px_0px_5px_0px_rgba(0,0,0,0.1)] dark:border dark:border-[#1c1c1c] dark:bg-[#1a1a1a] dark:shadow-[0px_0px_20px_0px_#000000]" />

      {/* party-popper icon */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`${L}/party.svg`} alt="" aria-hidden="true" className="absolute left-1/2 top-[497px] h-[42px] w-[42px] -translate-x-1/2" />

      <div className="absolute left-1/2 top-[568px] -translate-x-1/2 text-center font-['Inter',sans-serif] text-[14px] font-medium whitespace-nowrap text-[#616161] dark:text-[#e8e8e8]">
        <p className="leading-[22px]">Verification Successful!</p>
        <p className="leading-[22px]">Please show this QR Code during collection</p>
      </div>

      {/* QR code */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`${L}/qr.svg`} alt="QR Code" className="absolute left-1/2 top-[642px] h-[150px] w-[150px] -translate-x-1/2 dark:hidden" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`${L}/qr-dark.svg`} alt="" aria-hidden="true" className="absolute left-1/2 top-[642px] hidden h-[150px] w-[150px] -translate-x-1/2 dark:block" />

      {/* user photo */}
      <div className="absolute left-1/2 top-[822px] size-[68px] -translate-x-1/2 overflow-hidden rounded-[10px] shadow-[0px_0px_5px_0px_rgba(0,0,0,0.1)] dark:bg-[#2c2c2c]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`${L}/photo.png`} alt="" aria-hidden="true" className="absolute left-1/2 top-1/2 size-[66px] -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* user info */}
      <div className="absolute left-1/2 top-[910px] -translate-x-1/2 text-center font-['Inter',sans-serif] text-[14px] font-medium leading-[22px] whitespace-nowrap text-[#616161] dark:text-[#e8e8e8]">
        <p>1261844</p>
        <p>Muhammad Mahfuz Khalifa</p>
        <p>Admitted In : BUET (Engineering)</p>
        <p>Merit Position : 51 (FFQ)</p>
      </div>

      <CelebrationLogo />

      {/* buttons */}
      <div className="absolute left-[48px] top-[1150px] flex h-[36px] w-[130px] items-center justify-center rounded-[5px] bg-[#55347b]">
        <span className="font-['Inter',sans-serif] text-[14px] leading-[12px] text-white">Download</span>
      </div>
      <div className="absolute left-[198px] top-[1150px] flex h-[36px] w-[130px] items-center justify-center rounded-[5px] bg-[#55347b]">
        <span className="font-['Inter',sans-serif] text-[14px] leading-[12px] text-white">Print</span>
      </div>

      <div className="absolute bottom-0 left-0">
        <AppFooter />
      </div>
    </main>
  );
}
