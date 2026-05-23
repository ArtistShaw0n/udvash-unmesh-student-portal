import { cn } from "@/lib/cn";

export type LogoSize = "sm" | "md" | "lg" | "xl";

export type LogoProps = {
  size?: LogoSize;
  showBeta?: boolean;
  className?: string;
};

// Source: Figma V2 file EM0QU7aqBCCK95WvV8Qwt5, node 1:11908 (Group 35318).
// Composite SVG at public/components/logo/logo.svg combines the 4 part exports
// with their real logo-local positions (extracted via get_metadata, not invented).
// Natural bounds 144.0622 × 29.9877 — the measured size of Group 35318.
const ASSET_WIDTH = 144.0622;
const ASSET_HEIGHT = 29.9877;

const heightPx: Record<LogoSize, number> = {
  sm: 20,
  md: 24,
  lg: 30,
  xl: 40,
};

export function Logo({ size = "md", showBeta = false, className }: LogoProps) {
  const h = heightPx[size];
  const w = Math.round((h / ASSET_HEIGHT) * ASSET_WIDTH);

  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <img
        src="/components/logo/logo.svg"
        alt="উদ্ভাস-উন্মেষ"
        width={w}
        height={h}
        style={{ width: `${w}px`, height: `${h}px` }}
        className="block"
      />
      {showBeta && (
        <span className="rounded-xs bg-brand-subtle px-1 py-0.5 text-xs font-medium uppercase tracking-widest text-brand">
          Beta
        </span>
      )}
    </span>
  );
}
