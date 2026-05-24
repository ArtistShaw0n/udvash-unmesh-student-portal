"use client";

import { useEffect } from "react";
import { Icon } from "../atoms/Icon";
import { cn } from "@/lib/cn";

export type ModalSize = "sm" | "md" | "lg";

export type ModalProps = {
  open: boolean;
  onClose: () => void;
  title?: React.ReactNode;
  description?: React.ReactNode;
  size?: ModalSize;
  showClose?: boolean;
  /** Click outside the panel closes the modal (default true). */
  closeOnBackdrop?: boolean;
  className?: string;
  children: React.ReactNode;
};

/*
 * Figma source: V2 Modal Overlay (node 1:32594)
 *   backdrop: backdrop-blur-[4px] bg-[rgba(25,28,29,0.6)]
 *   panel:    bg-white rounded-[20px] shadow-card w-[328px]
 *   title:    Inter SemiBold 20px text-center
 *   close ×:  top-right
 *
 * Our Figma source maps to:
 *   rounded-2xl (20px), w-[328px] = our --size-card (md size)
 *   backdrop = bg-[rgb(25_28_29/0.6)] + backdrop-blur-sm
 */

const sizeClass: Record<ModalSize, string> = {
  sm: "w-[296px]",
  md: "w-[328px]", // Figma source
  lg: "w-[360px]", // card-wide
};

export function Modal({
  open,
  onClose,
  title,
  description,
  size = "md",
  showClose = true,
  closeOnBackdrop = true,
  className,
  children,
}: ModalProps) {
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
      aria-label={typeof title === "string" ? title : "Dialog"}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ zIndex: "var(--z-modal)" }}
    >
      {/* Backdrop — Figma scrim rgba(25,28,29,0.6) + blur */}
      <div
        aria-hidden="true"
        onClick={closeOnBackdrop ? onClose : undefined}
        className="absolute inset-0 backdrop-blur-[4px]"
        style={{ background: "rgba(25, 28, 29, 0.6)" }}
      />
      {/* Panel */}
      <div
        className={cn(
          "relative max-h-[90vh] overflow-y-auto rounded-2xl bg-surface p-4 shadow-card",
          sizeClass[size],
          className,
        )}
      >
        {(title || showClose) && (
          <div className="mb-3 flex items-start justify-between gap-3">
            {title && (
              <h2 className="flex-1 text-center text-lg font-semibold text-primary">
                {title}
              </h2>
            )}
            {showClose && (
              <button
                type="button"
                onClick={onClose}
                aria-label="Close dialog"
                className="-m-1 shrink-0 rounded-full p-1 text-muted transition-colors hover:bg-subtle hover:text-primary focus:outline-none focus-visible:bg-subtle"
              >
                <Icon name="X" size="md" />
              </button>
            )}
          </div>
        )}
        {description && (
          <p className="mb-4 text-sm text-muted">{description}</p>
        )}
        {children}
      </div>
    </div>
  );
}
