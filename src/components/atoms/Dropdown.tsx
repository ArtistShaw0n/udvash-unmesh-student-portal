"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

/*
 * 1:1 from Figma V2 — node 1:4352 ("Dropdown")
 * Raw values, no semantic tokens:
 *   trigger:  bg #ffffff, border 1px #b9b9b9, h-[40px], rounded-[5px], w-[320px]
 *   text:     Inter 14px #616161 ("Select a option")
 *   chevron:  down, #616161
 *   label:    Inter 14px #616161, required asterisk red
 */

export type DropdownOption = { value: string; label: React.ReactNode };

export type DropdownProps = {
  options: DropdownOption[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  placeholder?: React.ReactNode;
  label?: React.ReactNode;
  required?: boolean;
  className?: string;
};

export function Dropdown({
  options,
  value: controlled,
  defaultValue,
  onChange,
  placeholder = "Select a option",
  label,
  required,
  className,
}: DropdownProps) {
  const [uncontrolled, setUncontrolled] = useState(defaultValue);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const value = controlled ?? uncontrolled;
  const selected = options.find((o) => o.value === value);

  useEffect(() => {
    if (!open) return;
    function onDoc(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [open]);

  function pick(v: string) {
    if (controlled === undefined) setUncontrolled(v);
    onChange?.(v);
    setOpen(false);
  }

  return (
    <div className={cn("flex w-[320px] flex-col gap-[8px]", className)}>
      {label && (
        <span className="font-['Inter',sans-serif] text-[14px] text-[#616161]">
          {label}
          {required && <span className="text-[red]"> *</span>}
        </span>
      )}
      <div ref={ref} className="relative w-[320px]">
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-haspopup="listbox"
          aria-expanded={open}
          className="flex h-[40px] w-[320px] items-center justify-between rounded-[5px] border border-[#b9b9b9] bg-white px-[10px] font-['Inter',sans-serif] text-[14px] text-[#616161] outline-none focus:border-[#55347b]"
        >
          <span className="truncate">{selected?.label ?? placeholder}</span>
          <svg width="12" height="6" viewBox="0 0 12 6" fill="none" aria-hidden="true" className="shrink-0">
            <path d="M1 1 6 5 11 1" stroke="#616161" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        {open && (
          <ul
            role="listbox"
            className="absolute left-0 top-[44px] z-10 max-h-[240px] w-[320px] overflow-auto rounded-[5px] border border-[#b9b9b9] bg-white py-[4px] shadow-[0px_0px_5px_0px_rgba(0,0,0,0.1)]"
          >
            {options.map((opt) => (
              <li key={opt.value}>
                <button
                  type="button"
                  role="option"
                  aria-selected={opt.value === value}
                  onClick={() => pick(opt.value)}
                  className={cn(
                    "flex w-full items-center px-[10px] py-[8px] text-left font-['Inter',sans-serif] text-[14px] text-[#616161]",
                    "hover:bg-[#f5edff]",
                    opt.value === value && "bg-[#f5edff]",
                  )}
                >
                  {opt.label}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
