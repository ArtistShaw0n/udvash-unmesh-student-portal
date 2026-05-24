"use client";

import { Icon, type IconName } from "../atoms/Icon";
import { Badge } from "../atoms/Badge";
import { cn } from "@/lib/cn";

export type HeaderAction = {
  icon: IconName;
  label: string;
  /** Optional badge count rendered on the icon. */
  badge?: number;
  onClick?: () => void;
};

export type HeaderProps = {
  /** Logo / title slot (left edge). */
  logo?: React.ReactNode;
  /** Action icon buttons (right edge, before avatar). */
  actions?: HeaderAction[];
  /** Trailing avatar slot. */
  avatar?: React.ReactNode;
  className?: string;
};

/*
 * Figma source: V2 Header (node 1:12014)
 *   bg-white (bg-surface)
 *   376×50
 *   shadow 0 1px 4px rgba(0,0,0,0.06) → our shadow-header
 *   logo at left edge, bell + avatar at right edge (28×28 avatar at x=336)
 */
export function Header({ logo, actions = [], avatar, className }: HeaderProps) {
  return (
    <header
      className={cn(
        "flex h-[50px] w-full max-w-[376px] items-center justify-between bg-surface px-3 shadow-header",
        className,
      )}
    >
      <div className="flex min-w-0 items-center gap-2">{logo}</div>
      <div className="flex items-center gap-2">
        {actions.map((action) => (
          <button
            key={action.label}
            type="button"
            onClick={action.onClick}
            aria-label={action.label}
            className="relative inline-flex size-7 items-center justify-center rounded-full text-primary transition-colors hover:bg-subtle focus:outline-none focus-visible:bg-subtle"
          >
            <Icon name={action.icon} size="md" />
            {action.badge != null && action.badge > 0 && (
              <span className="absolute -right-0.5 -top-0.5">
                <Badge>{action.badge}</Badge>
              </span>
            )}
          </button>
        ))}
        {avatar}
      </div>
    </header>
  );
}
