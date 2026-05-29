import { forwardRef } from "react";
import { cn } from "@/lib/cn";

/*
 * 1:1 from Figma V2 — node 1:5011 ("<Checkbox>", MUI primary).
 *   unchecked: 24px box · border 2px #b9b9b9 · rounded-[4px] · bg #ffffff
 *   checked:   Figma SVG (node 1:5011 Vector) — public/components/icons/checkbox-check.svg
 *              (filled #1976d2 rounded box + white tick)
 */

export type CheckboxProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> & {
  label?: React.ReactNode;
};

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(
  { label, className, ...props },
  ref,
) {
  return (
    <label className="inline-flex items-center gap-[8px]">
      <span className="relative inline-flex size-[24px] shrink-0">
        <input
          ref={ref}
          type="checkbox"
          className={cn(
            "peer size-[24px] appearance-none rounded-[4px] border-2 border-[#b9b9b9] bg-white checked:border-transparent",
            className,
          )}
          {...props}
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/components/icons/checkbox-check.svg"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 hidden size-[24px] peer-checked:block"
        />
      </span>
      {label && (
        <span className="font-['Inter',sans-serif] text-[14px] text-[#616161]">{label}</span>
      )}
    </label>
  );
});
