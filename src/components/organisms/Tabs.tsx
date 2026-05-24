"use client";

import { cn } from "@/lib/cn";

export type TabItem = {
  id: string;
  label: React.ReactNode;
  disabled?: boolean;
};

export type TabsVariant = "underline" | "pill";

export type TabsProps = {
  items: TabItem[];
  activeId: string;
  onChange?: (id: string) => void;
  variant?: TabsVariant;
  className?: string;
  /** Aria-label for the tablist. */
  ariaLabel?: string;
};

/*
 * Tabs — horizontal tab strip. Two visual styles observed in V2 screens:
 *   underline → text + animated underline (active = brand text + bottom border)
 *   pill      → rounded-pill background swap (active = bg-brand text-onbrand)
 *
 * Brand-toned to match the V2 palette. ARIA tablist semantics throughout.
 */
export function Tabs({
  items,
  activeId,
  onChange,
  variant = "underline",
  className,
  ariaLabel = "Tabs",
}: TabsProps) {
  return (
    <div
      role="tablist"
      aria-label={ariaLabel}
      className={cn(
        variant === "underline"
          ? "flex items-center gap-1 border-b border-border"
          : "inline-flex items-center gap-1 rounded-pill bg-subtle p-1",
        className,
      )}
    >
      {items.map((item) => {
        const active = item.id === activeId;
        return (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={active}
            aria-disabled={item.disabled || undefined}
            disabled={item.disabled}
            onClick={() => !item.disabled && onChange?.(item.id)}
            className={cn(
              "whitespace-nowrap font-sans text-base font-medium transition-colors disabled:cursor-not-allowed disabled:text-disabled",
              variant === "underline"
                ? cn(
                    "-mb-px border-b-2 px-3 py-2",
                    active
                      ? "border-brand text-brand"
                      : "border-transparent text-muted hover:text-primary",
                  )
                : cn(
                    "rounded-pill px-3 py-1.5 text-sm",
                    active
                      ? "bg-brand text-onbrand shadow-card"
                      : "text-muted hover:text-primary",
                  ),
            )}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
