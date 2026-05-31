/*
 * organisms/footer-menu (post-login) — Figma V2 node 1:4435 (light) / Variant2 (dark). 376×66.
 *   Tabs: Home (active) · Downloads · Q&A · Community.
 *   light: bg #ffffff · rounded-b-[10px] · shadow 0 -1px 4px rgba(0,0,0,0.06)
 *   dark:  bg #1a1a1a · border #1c1c1c · rounded-t-[8px] · shadow 0 0 20px #000
 *   active box: #684b8a (light) / #55347b (dark) · labels #616161 / #e8e8e8
 */
import Link from "next/link";

// Footer icon SVGs carry inconsistent viewBoxes (footer-downloads 36×36 padded vs
// -dark 21×20 tight; footer-qa 25; footer-community 36), so each is rendered at its
// exact Figma container size — light/dark separately — rather than one uniform size.
function FooterIcon({ light, dark, lw, lh, dw, dh }: { light: string; dark: string; lw: number; lh: number; dw: number; dh: number }) {
  return (
    <span className="flex size-[36px] items-center justify-center">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={light} alt="" aria-hidden="true" className="object-contain dark:hidden" style={{ width: lw, height: lh }} />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={dark} alt="" aria-hidden="true" className="hidden object-contain dark:block" style={{ width: dw, height: dh }} />
    </span>
  );
}

export function AppFooter() {
  return (
    <nav
      aria-label="Primary"
      className="flex h-[66px] w-[376px] items-center justify-around rounded-bl-[10px] rounded-br-[10px] bg-white shadow-[0px_-1px_4px_0px_rgba(0,0,0,0.06)] dark:rounded-bl-none dark:rounded-br-none dark:rounded-tl-[8px] dark:rounded-tr-[8px] dark:border dark:border-[#1c1c1c] dark:bg-[#1a1a1a] dark:shadow-[0px_0px_20px_0px_#000000]"
    >
      {/* Home — active */}
      <Link href="/home" className="flex flex-col items-center gap-[4px]">
        <span className="relative block size-[36px] rounded-[5px] bg-[#684b8a] dark:bg-[#55347b]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/components/icons/footer-home-3.svg" alt="" aria-hidden="true" className="absolute left-[19.4%] top-[19.5%] h-[33.4%] w-[29.2%]" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/components/icons/footer-home-2.svg" alt="" aria-hidden="true" className="absolute left-[51.4%] top-[19.5%] h-[24.9%] w-[29.2%]" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/components/icons/footer-home-1.svg" alt="" aria-hidden="true" className="absolute left-[51.4%] top-[47.1%] h-[33.4%] w-[29.2%]" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/components/icons/footer-home-4.svg" alt="" aria-hidden="true" className="absolute left-[19.4%] top-[55.6%] h-[24.9%] w-[29.2%]" />
        </span>
        <span className="font-['Inter',sans-serif] text-[12px] font-medium text-[#616161] dark:text-[#e8e8e8]">Home</span>
      </Link>

      {/* Downloads */}
      <Link href="/downloads" className="flex flex-col items-center gap-[4px]">
        <FooterIcon light="/components/icons/footer-downloads.svg" dark="/components/icons/footer-downloads-dark.svg" lw={36} lh={36} dw={24} dh={23} />
        <span className="font-['Inter',sans-serif] text-[12px] text-[#616161] dark:text-[#e8e8e8]">Downloads</span>
      </Link>

      {/* Q&A */}
      <Link href="/qa" className="flex flex-col items-center gap-[4px]">
        <FooterIcon light="/components/icons/footer-qa.svg" dark="/components/icons/footer-qa-dark.svg" lw={25} lh={25} dw={25} dh={25} />
        <span className="font-['Inter',sans-serif] text-[12px] text-[#616161] dark:text-[#e8e8e8]">Q&amp;A</span>
      </Link>

      {/* Community */}
      <Link href="/community" className="flex flex-col items-center gap-[4px]">
        <FooterIcon light="/components/icons/footer-community.svg" dark="/components/icons/footer-community-dark.svg" lw={30} lh={30} dw={30} dh={30} />
        <span className="font-['Inter',sans-serif] text-[12px] text-[#616161] dark:text-[#e8e8e8]">Community</span>
      </Link>
    </nav>
  );
}
