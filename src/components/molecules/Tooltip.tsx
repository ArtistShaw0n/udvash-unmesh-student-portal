"use client";

import { useId, useState } from "react";
import { cn } from "@/lib/cn";

export type TooltipPlacement = "top" | "bottom" | "left" | "right";

export type TooltipProps = {
  content: React.ReactNode;
  placement?: TooltipPlacement;
  /** Delay (ms) before showing on hover/focus. */
  delay?: number;
  className?: string;
  children: React.ReactElement;
};

/*
 * Tooltip — small hover/focus label. No Figma master in V2.
 * Pure-CSS positioning via Tailwind; no portal. Pairs the tooltip text
 * with the trigger via aria-describedby for accessibility.
 */

const placementClass: Record<TooltipPlacement, string> = {
  top:    "bottom-full left-1/2 mb-2 -translate-x-1/2",
  bottom: "top-full left-1/2 mt-2 -translate-x-1/2",
  left:   "right-full top-1/2 mr-2 -translate-y-1/2",
  right:  "left-full top-1/2 ml-2 -translate-y-1/2",
};

export function Tooltip({
  content,
  placement = "top",
  delay = 200,
  className,
  children,
}: TooltipProps) {
  const id = useId();
  const [open, setOpen] = useState(false);
  const [timer, setTimer] = useState<ReturnType<typeof setTimeout> | null>(null);

  function show() {
    if (timer) clearTimeout(timer);
    setTimer(setTimeout(() => setOpen(true), delay));
  }
  function hide() {
    if (timer) clearTimeout(timer);
    setOpen(false);
  }

  return (
    <span
      className="relative inline-flex"
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={hide}
    >
      <span aria-describedby={open ? id : undefined}>{children}</span>
      {open && (
        <span
          id={id}
          role="tooltip"
          className={cn(
            "pointer-events-none absolute z-50 whitespace-nowrap rounded-sm px-2 py-1 text-xs font-medium text-white shadow-card",
            placementClass[placement],
            className,
          )}
          style={{
            zIndex: "var(--z-tooltip)",
            background: "var(--color-grey-900)",
          }}
        >
          {content}
        </span>
      )}
    </span>
  );
}
