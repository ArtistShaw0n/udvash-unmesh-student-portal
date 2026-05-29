import { forwardRef } from "react";
import { cn } from "@/lib/cn";

/*
 * 1:1 from Figma V2 — node 1:5011 ("<Checkbox>", MUI primary)
 * Raw values, no semantic tokens:
 *   box:      24px, rounded-[4px]
 *   unchecked: border 2px #b9b9b9, bg #ffffff
 *   checked:  bg #1976d2 (MUI primary/main), white check
 *   (42px tap target via p-[9px] wrapper per Figma)
 */

export type CheckboxProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> & {
  label?: React.ReactNode;
};

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(
  { label, className, ...props },
  ref,
) {
  return (
    <label className="inline-flex cursor-pointer items-center gap-[8px]">
      <span className="relative inline-flex size-[24px] items-center justify-center">
        <input
          ref={ref}
          type="checkbox"
          className={cn(
            "peer size-[24px] cursor-pointer appearance-none rounded-[4px] border-2 border-[#b9b9b9] bg-white",
            "checked:border-[#1976d2] checked:bg-[#1976d2]",
            className,
          )}
          {...props}
        />
        <svg
          className="pointer-events-none absolute size-[16px] opacity-0 peer-checked:opacity-100"
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M3.5 8.5 6.5 11.5 12.5 4.5"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      {label && (
        <span className="font-['Inter',sans-serif] text-[14px] text-[#616161]">{label}</span>
      )}
    </label>
  );
});
