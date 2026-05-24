"use client";

import { useState } from "react";
import { Button } from "../atoms/Button";
import { Icon } from "../atoms/Icon";
import { IconChip } from "../atoms/IconChip";
import { Input } from "../atoms/Input";
import { Text } from "../atoms/Text";
import { cn } from "@/lib/cn";

export type AddRollCardProps = {
  /** Controlled roll-number value. */
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  loading?: boolean;
  errorMessage?: string;
  onChange?: (value: string) => void;
  onSubmit?: (value: string) => void;
  className?: string;
};

/**
 * AddRollCard — Figma Card/AddRollNo-Tile (176×60 collapsed, expands
 * to a single-input form). Used on Home dashboard when the student has
 * no enrolled courses — single CTA to enter their roll/registration
 * number and start the onboarding flow.
 */
export function AddRollCard({
  value: controlled,
  defaultValue = "",
  placeholder = "Enter your Registration Number",
  loading = false,
  errorMessage,
  onChange,
  onSubmit,
  className,
}: AddRollCardProps) {
  const [uncontrolled, setUncontrolled] = useState(defaultValue);
  const value = controlled ?? uncontrolled;
  const [expanded, setExpanded] = useState(!!defaultValue);

  function update(next: string) {
    if (controlled === undefined) setUncontrolled(next);
    onChange?.(next);
  }

  function submit() {
    if (!value.trim()) return;
    onSubmit?.(value.trim());
  }

  if (!expanded) {
    return (
      <button
        type="button"
        onClick={() => setExpanded(true)}
        className={cn(
          "flex w-full max-w-[336px] items-center gap-3 rounded-md border border-dashed border-brand/40 bg-brand-subtle/40 p-3 text-left transition-colors hover:bg-brand-subtle",
          className,
        )}
      >
        <IconChip name="Plus" tone="brand" size="md" />
        <div className="min-w-0 flex-1">
          <Text size="sm" weight="semibold" className="text-brand">
            Add Roll Number
          </Text>
          <Text size="xs" color="muted" className="truncate">
            Enter your registration to unlock courses
          </Text>
        </div>
        <Icon name="ChevronRight" size="sm" className="text-brand" />
      </button>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        submit();
      }}
      className={cn(
        "w-full max-w-[336px] rounded-md border border-line-subtle bg-surface p-3 shadow-sm",
        className,
      )}
    >
      <Text size="xs" weight="semibold" color="muted" className="mb-2 uppercase tracking-widest">
        Add Roll Number
      </Text>
      <Input
        value={value}
        onChange={(e) => update(e.target.value)}
        placeholder={placeholder}
        inputMode="numeric"
        invalid={!!errorMessage}
        disabled={loading}
        className="mb-2"
      />
      {errorMessage && (
        <Text size="xs" className="mb-2 text-error">{errorMessage}</Text>
      )}
      <div className="flex gap-2">
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => setExpanded(false)}
          disabled={loading}
        >
          Cancel
        </Button>
        <Button
          type="submit"
          size="sm"
          fullWidth
          loading={loading}
          iconLeft={<Icon name="Check" size="xs" />}
        >
          Add
        </Button>
      </div>
    </form>
  );
}
