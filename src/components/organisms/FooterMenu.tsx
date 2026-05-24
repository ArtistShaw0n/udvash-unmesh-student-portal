"use client";

import { Icon, type IconName } from "../atoms/Icon";
import { cn } from "@/lib/cn";

export type FooterTab = {
  id: string;
  label: string;
  icon: IconName;
};

export type FooterMenuProps = {
  tabs: FooterTab[];
  activeId: string;
  onChange?: (id: string) => void;
  className?: string;
};

/*
 * Figma source: V2 FooterMenu (node 1:4435)
 *   bg-white, 376×66
 *   shadow 0 -1px 4px rgba(0,0,0,0.06) → our shadow-footer
 *   4 tabs: Home, Downloads, Q&A, Community
 *   active tab: brand-400 (#684B8A → bg-brand-selected) rounded-sm icon
 *               background, label switches to font-medium
 *   text: #616161 (text-primary), 12px
 */
export function FooterMenu({ tabs, activeId, onChange, className }: FooterMenuProps) {
  return (
    <nav
      className={cn(
        "grid h-[66px] w-full max-w-[376px] items-center bg-surface shadow-footer",
        className,
      )}
      style={{ gridTemplateColumns: `repeat(${tabs.length}, minmax(0, 1fr))` }}
      aria-label="Primary"
    >
      {tabs.map((tab) => {
        const active = tab.id === activeId;
        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => onChange?.(tab.id)}
            aria-current={active ? "page" : undefined}
            className={cn(
              "flex h-full flex-col items-center justify-center gap-1 text-primary",
              "focus:outline-none focus-visible:bg-subtle",
            )}
          >
            <span
              className={cn(
                "inline-flex size-9 items-center justify-center rounded-sm transition-colors",
                active ? "bg-brand-selected text-onbrand" : "text-primary",
              )}
            >
              <Icon name={tab.icon} size="sm" />
            </span>
            <span className={cn("text-sm leading-none", active ? "font-medium" : "font-normal")}>
              {tab.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
