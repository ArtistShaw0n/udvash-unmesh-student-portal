import { BrandLogo } from "./BrandLogo";

/*
 * organisms/header (post-login) — Figma V2 node 1:12014 (light) / Variant2 (dark). 376×50.
 *   light: bg #ffffff · shadow 0 1px 4px rgba(0,0,0,0.06)
 *   dark:  bg #1a1a1a · shadow 0 0 20px #000
 *   logo (left) · notification bell + badge · profile circle (right).
 */
export function AppHeader() {
  return (
    <header className="relative h-[50px] w-[376px] bg-white shadow-[0px_1px_4px_0px_rgba(0,0,0,0.06)] dark:bg-[#1a1a1a] dark:shadow-[0px_0px_20px_0px_#000000]">
      <BrandLogo height={30} className="absolute left-[12px] top-[10px]" />

      {/* notification bell */}
      <span className="absolute left-[298px] top-[11px] block size-[28px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/components/icons/header-bell.svg" alt="" aria-hidden="true" className="size-full dark:hidden" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/components/icons/header-bell-dark.svg" alt="" aria-hidden="true" className="hidden size-full dark:block" />
      </span>
      {/* notification badge */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/components/icons/header-badge.svg" alt="" aria-hidden="true" className="absolute left-[312px] top-[5px] h-[15px] w-[15px]" />

      {/* profile circle */}
      <span className="absolute left-[336px] top-[11px] flex size-[28px] items-center justify-center rounded-[18px] bg-[#55347b]/10 dark:bg-[#f5edff]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/components/icons/header-profile.svg" alt="" aria-hidden="true" className="h-[20px] w-[16px]" />
      </span>
    </header>
  );
}
