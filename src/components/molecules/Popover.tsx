"use client";

import { useEffect, useId, useRef, useState } from "react";
import { cn } from "@/lib/cn";

export type PopoverPlacement = "bottom-start" | "bottom-end" | "top-start" | "top-end";

/**
 * The props the Popover passes to a render-prop trigger. Spread these
 * onto your own interactive element (a Button, a Link, anything) so the
 * Popover owns the open/close behaviour without ever wrapping your
 * element in its own `<button>`.
 */
export type PopoverTriggerProps = {
  onClick: () => void;
  "aria-expanded": boolean;
  "aria-haspopup": "dialog";
  "aria-controls": string;
};

export type PopoverProps = {
  /**
   * Either a static React element (wrapped in Popover's default `<button>`)
   * or a render function that receives trigger props and returns your own
   * interactive element. Prefer the render-prop form when the trigger
   * already renders a button (e.g. our `<Button>` atom) — that avoids
   * an invalid `<button>`-inside-`<button>` nesting.
   */
  trigger: React.ReactNode | ((props: PopoverTriggerProps) => React.ReactNode);
  placement?: PopoverPlacement;
  className?: string;
  contentClassName?: string;
  children: React.ReactNode;
};

const placementClass: Record<PopoverPlacement, string> = {
  "bottom-start": "top-full left-0 mt-1",
  "bottom-end": "top-full right-0 mt-1",
  "top-start": "bottom-full left-0 mb-1",
  "top-end": "bottom-full right-0 mb-1",
};

export function Popover({
  trigger,
  placement = "bottom-start",
  className,
  contentClassName,
  children,
}: PopoverProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const contentId = useId();

  useEffect(() => {
    if (!open) return;
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const toggle = () => setOpen((o) => !o);
  const triggerProps: PopoverTriggerProps = {
    onClick: toggle,
    "aria-expanded": open,
    "aria-haspopup": "dialog",
    "aria-controls": contentId,
  };

  return (
    <div ref={ref} className={cn("relative inline-block", className)}>
      {typeof trigger === "function" ? (
        // Render-prop form: caller renders their own interactive element.
        // No extra <button> wrapper — fixes the button-in-button hydration
        // error when the trigger is itself a <Button>.
        trigger(triggerProps)
      ) : (
        // Static-node form: legacy/backward-compat path. We wrap the node
        // in our own <button>. This is only safe when `trigger` is a
        // non-interactive element (a styled span, an icon, plain text).
        <button
          type="button"
          {...triggerProps}
          className="inline-flex"
        >
          {trigger}
        </button>
      )}
      {open && (
        <div
          id={contentId}
          role="dialog"
          className={cn(
            "absolute z-30 min-w-[180px] rounded-md border border-line-subtle bg-surface p-1 shadow-md",
            placementClass[placement],
            contentClassName,
          )}
        >
          {children}
        </div>
      )}
    </div>
  );
}
