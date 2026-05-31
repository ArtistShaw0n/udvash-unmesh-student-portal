/*
 * Figma V2 — Downloads § No Internet Connection. light 1:21799 · dark 1:21821. frame 376×812.
 *   wifi-off icon + "No Internet Connection" (#ff3a3a) + hint + Retry (#c1c1c1) +
 *   "View Offline Video" (#0a84ff) + bottom "No Connection" (#2c2c2c) status bar.
 */
const I = "/components/icons/downloads";

export default function DownloadsNoInternetPage() {
  return (
    <main className="relative mx-auto h-[812px] w-[376px] overflow-hidden bg-white dark:bg-[#111111]">
      <div
        className="pointer-events-none absolute inset-0 opacity-40 dark:hidden"
        style={{ backgroundImage: "linear-gradient(66.076deg, #e2eefd 13.822%, #e6f3f1 52.905%, #e9dfee 93.259%)" }}
      />

      {/* wifi-off icon */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`${I}/wifi-arcs.svg`} alt="" aria-hidden="true" className="absolute left-[140px] top-[180px] h-[66px] w-[96px]" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`${I}/wifi-x.svg`} alt="" aria-hidden="true" className="absolute left-[215px] top-[189px] size-[25px]" />

      <p className="absolute left-1/2 top-[264px] -translate-x-1/2 whitespace-nowrap font-['Inter',sans-serif] text-[18px] font-bold leading-[normal] text-[#ff3a3a]">No Internet Connection</p>
      <p className="absolute left-1/2 top-[294px] -translate-x-1/2 whitespace-nowrap font-['Inter',sans-serif] text-[12px] leading-[normal] text-[#616161] dark:text-[#e8e8e8]">Please check your network settings and try again.</p>

      <div className="absolute left-1/2 top-[329px] flex h-[30px] w-[92px] -translate-x-1/2 items-center justify-center rounded-[5px] bg-[#c1c1c1] dark:bg-[#2c2c2c]">
        <span className="font-['Inter',sans-serif] text-[14px] text-white">Retry</span>
      </div>

      <div className="absolute left-1/2 top-[600px] flex h-[36px] w-[214px] -translate-x-1/2 items-center justify-center rounded-[5px] bg-[#0a84ff]">
        <span className="font-['Inter',sans-serif] text-[14px] text-white">View Offline Video</span>
      </div>

      {/* bottom status bar */}
      <div className="absolute left-0 top-[782px] flex h-[30px] w-[376px] items-center justify-center bg-[#2c2c2c]">
        <span className="font-['Inter',sans-serif] text-[12px] text-white">No Connection</span>
      </div>
    </main>
  );
}
