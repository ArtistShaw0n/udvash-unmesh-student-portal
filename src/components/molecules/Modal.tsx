"use client";

import { useEffect } from "react";
import { cn } from "@/lib/cn";

/*
 * 1:1 from Figma V2 — node 1:32594 ("Modal Overlay")
 * Raw values, no semantic tokens:
 *   scrim:  backdrop-blur-[4px] · bg rgba(25,28,29,0.6) · p-[16px]
 *   panel:  bg #ffffff · rounded-[20px] · w-[328px] · shadow 0px 0px 5px 0px rgba(0,0,0,0.1)
 *   title:  Inter SemiBold 20px #616161, centered
 *   cross:  ~24px, #616161, top-right
 */

export type ModalProps = {
  open: boolean;
  onClose: () => void;
  title?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
};

export function Modal({ open, onClose, title, className, children }: ModalProps) {
  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-[16px]"
    >
      <div
        aria-hidden="true"
        onClick={onClose}
        className="absolute inset-0 bg-[rgba(25,28,29,0.6)] backdrop-blur-[4px]"
      />
      <div
        className={cn(
          "relative w-[328px] rounded-[20px] bg-white p-[16px] shadow-[0px_0px_5px_0px_rgba(0,0,0,0.1)]",
          className,
        )}
      >
        {/* cross glyph is a Figma SVG asset — skipped in Phase 1 (close via Esc / backdrop) */}
        {title != null && (
          <div className="mb-[12px] flex items-center justify-center">
            <h2 className="font-['Inter',sans-serif] text-[20px] font-semibold text-[#616161]">
              {title}
            </h2>
          </div>
        )}
        {children}
      </div>
    </div>
  );
}
