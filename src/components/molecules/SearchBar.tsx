"use client";

import { forwardRef } from "react";
import { Icon } from "../atoms/Icon";
import { Input, type InputProps } from "../atoms/Input";

export type SearchBarProps = Omit<InputProps, "type" | "iconLeft" | "iconRight"> & {
  /** Optional clear callback — when provided, an "x" button appears on the right. */
  onClear?: () => void;
};

/*
 * SearchBar — Input + leading magnifier icon, optional clear (×).
 * No standalone Figma master (search rows are inline Input + Search icon
 * across V2). This is the canonical composition.
 */
export const SearchBar = forwardRef<HTMLInputElement, SearchBarProps>(
  function SearchBar({ onClear, value, defaultValue, placeholder = "Search", ...rest }, ref) {
    const hasValue = (value ?? defaultValue ?? "").toString().length > 0;
    return (
      <Input
        ref={ref}
        type="search"
        placeholder={placeholder}
        iconLeft={<Icon name="Search" size="sm" />}
        iconRight={
          onClear && hasValue ? (
            <button
              type="button"
              onClick={onClear}
              aria-label="Clear search"
              className="pointer-events-auto rounded-full text-muted hover:text-primary focus:outline-none focus-visible:text-primary"
            >
              <Icon name="X" size="xs" />
            </button>
          ) : undefined
        }
        value={value}
        defaultValue={defaultValue}
        {...rest}
      />
    );
  },
);
