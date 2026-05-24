"use client";

import { useEffect } from "react";
import { Icon } from "../atoms/Icon";
import { cn } from "@/lib/cn";

export type SheetProps = {
  open: boolean;
  onClose: () => void;
  title?: React.ReactNode;
  showClose?: boolean;
  showHandle?: boolean;
  closeOnBackdrop?: boolean;
  className?: string;
  children: React.ReactNode;
};

/*
 * Sheet — bottom drawer panel. No formalised Figma master in V2; built on
 * the same scrim + rounded-top pattern observed on filter / share screens.
 * Uses our z-drawer (40) and the same scrim recipe as Modal.
 */
export function Sheet({
  open,
  onClose,
  title,
  showClose = true,
  showHandle = true,
  closeOnBackdrop = true,
  className,
  children,
}: SheetProps) {
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
      aria-label={typeof title === "string" ? title : "Sheet"}
      className="fixed inset-0 flex items-end justify-center"
      style={{ zIndex: "var(--z-drawer)" }}
    >
      <div
        aria-hidden="true"
        onClick={closeOnBackdrop ? onClose : undefined}
        className="absolute inset-0 backdrop-blur-[4px]"
        style={{ background: "rgba(25, 28, 29, 0.6)" }}
      />
      <div
        className={cn(
          "relative max-h-[85vh] w-full overflow-y-auto rounded-t-2xl bg-surface p-4 pb-6 shadow-card",
          "animate-in slide-in-from-bottom",
          className,
        )}
      >
        {showHandle && (
          <div
            aria-hidden="true"
            className="mx-auto mb-3 h-1 w-10 rounded-full bg-border"
          />
        )}
        {(title || showClose) && (
          <div className="mb-3 flex items-start justify-between gap-3">
            {title && (
              <h2 className="text-lg font-semibold text-primary">{title}</h2>
            )}
            {showClose && (
              <button
                type="button"
                onClick={onClose}
                aria-label="Close sheet"
                className="-m-1 shrink-0 rounded-full p-1 text-muted transition-colors hover:bg-subtle hover:text-primary focus:outline-none focus-visible:bg-subtle"
              >
                <Icon name="X" size="md" />
              </button>
            )}
          </div>
        )}
        {children}
      </div>
    </div>
  );
}
