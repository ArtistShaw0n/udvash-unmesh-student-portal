"use client";

import { useState } from "react";
import { Button } from "../atoms/Button";
import { Checkbox } from "../atoms/Checkbox";
import { Chip } from "../atoms/Chip";
import { Icon } from "../atoms/Icon";
import { Text } from "../atoms/Text";
import { Popover } from "./Popover";
import { cn } from "@/lib/cn";

export type FilterOption = { value: string; label: string };
export type FilterGroup = { id: string; label: string; options: FilterOption[] };

export type FilterPanelProps = {
  groups: FilterGroup[];
  /** Controlled selected values keyed by group id. */
  value?: Record<string, string[]>;
  /** Initial selection for uncontrolled mode. */
  defaultValue?: Record<string, string[]>;
  onChange?: (value: Record<string, string[]>) => void;
  triggerLabel?: string;
  className?: string;
};

/**
 * FilterPanel — Figma Panel/FilterDropdown (360×198). Composable filter
 * dropdown wrapper. Renders a Chip trigger that opens a Popover with
 * checkbox groups + Apply / Clear actions. The total count of selected
 * filters appears as a badge inside the trigger.
 */
export function FilterPanel({
  groups,
  value: controlled,
  defaultValue,
  onChange,
  triggerLabel = "Filters",
  className,
}: FilterPanelProps) {
  const [uncontrolled, setUncontrolled] = useState<Record<string, string[]>>(
    defaultValue ?? {},
  );
  const selected = controlled ?? uncontrolled;
  const totalSelected = Object.values(selected).reduce(
    (sum, arr) => sum + arr.length,
    0,
  );

  function commit(next: Record<string, string[]>) {
    if (controlled === undefined) setUncontrolled(next);
    onChange?.(next);
  }

  function toggle(groupId: string, optionValue: string) {
    const current = selected[groupId] ?? [];
    const next = current.includes(optionValue)
      ? current.filter((v) => v !== optionValue)
      : [...current, optionValue];
    commit({ ...selected, [groupId]: next });
  }

  function clearAll() {
    commit({});
  }

  return (
    <div className={cn("inline-block", className)}>
      <Popover
        placement="bottom-start"
        trigger={(triggerProps) => (
          <Chip iconLeft="Funnel" {...triggerProps}>
            {triggerLabel}
            {totalSelected > 0 && (
              <span className="ml-1 inline-flex h-4 min-w-4 items-center justify-center rounded-full bg-brand px-1 text-[10px] font-bold text-onbrand">
                {totalSelected}
              </span>
            )}
          </Chip>
        )}
        contentClassName="min-w-[280px] p-3"
      >
        <div className="space-y-4">
          {groups.map((group) => (
            <div key={group.id}>
              <Text size="xs" weight="semibold" color="muted" className="mb-2 uppercase tracking-widest">
                {group.label}
              </Text>
              <div className="space-y-1.5">
                {group.options.map((opt) => (
                  <Checkbox
                    key={opt.value}
                    label={opt.label}
                    checked={selected[group.id]?.includes(opt.value) ?? false}
                    onChange={() => toggle(group.id, opt.value)}
                  />
                ))}
              </div>
            </div>
          ))}
          <div className="flex items-center justify-between border-t border-line-subtle pt-3">
            <Button variant="ghost" size="sm" onClick={clearAll}>
              Clear all
            </Button>
            <Text size="xs" color="muted">
              <Icon name="Funnel" size="xs" className="mr-1 inline" />
              {totalSelected} selected
            </Text>
          </div>
        </div>
      </Popover>
    </div>
  );
}
