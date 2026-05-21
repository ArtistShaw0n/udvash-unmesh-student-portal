"use client";

import { cn } from "@/lib/cn";
import { Icon } from "./Icon";

type StarRatingProps = {
  value: number;
  max?: number;
  size?: number;
  onChange?: (value: number) => void;
  readonly?: boolean;
  className?: string;
};

export function StarRating({
  value,
  max = 5,
  size = 24,
  onChange,
  readonly = !onChange,
  className,
}: StarRatingProps) {
  return (
    <div role="group" aria-label={`Rating: ${value} out of ${max}`} className={cn("inline-flex items-center gap-0.5", className)}>
      {Array.from({ length: max }, (_, i) => {
        const filled = i < value;
        const star = (
          <Icon
            name="star"
            size={size}
            className={cn(filled ? "text-warning fill-current" : "text-line", "transition-colors")}
          />
        );
        return readonly ? (
          <span key={i}>{star}</span>
        ) : (
          <button
            key={i}
            type="button"
            onClick={() => onChange?.(i + 1)}
            aria-label={`Set rating to ${i + 1}`}
            className="cursor-pointer hover:scale-110 transition-transform"
          >
            {star}
          </button>
        );
      })}
    </div>
  );
}
