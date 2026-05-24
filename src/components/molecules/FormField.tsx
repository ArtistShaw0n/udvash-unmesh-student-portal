"use client";

import { useId, Children, cloneElement, isValidElement, type ReactElement } from "react";
import { cn } from "@/lib/cn";

export type FormFieldProps = {
  label?: React.ReactNode;
  /** Mark the field as required (adds red asterisk to label — V2 pattern). */
  required?: boolean;
  /** Helper text below the field. */
  hint?: React.ReactNode;
  /** Error message — when set, replaces hint and marks the child input invalid. */
  error?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
};

/*
 * FormField — wraps a single input control with a label, required *,
 * hint and error slots. Mirrors the V2 pattern: "Label *" then field
 * then optional helper / error.
 *
 * Forwards `id` + `aria-describedby` + `aria-invalid` to a single child
 * input via cloneElement so accessibility wiring is automatic.
 */
export function FormField({
  label,
  required = false,
  hint,
  error,
  className,
  children,
}: FormFieldProps) {
  const generatedId = useId();
  const hintId = `${generatedId}-hint`;
  const errorId = `${generatedId}-error`;

  const wired = Children.map(children, (child) => {
    if (!isValidElement(child)) return child;
    const childProps = child.props as Record<string, unknown>;
    return cloneElement(child as ReactElement<Record<string, unknown>>, {
      id: childProps.id ?? generatedId,
      "aria-invalid": error ? true : childProps["aria-invalid"],
      "aria-describedby":
        [error ? errorId : hint ? hintId : null, childProps["aria-describedby"]]
          .filter(Boolean)
          .join(" ") || undefined,
    });
  });

  return (
    <div className={cn("flex w-full flex-col gap-1", className)}>
      {label && (
        <label htmlFor={generatedId} className="text-sm font-medium text-primary">
          {label}
          {required && <span className="ml-0.5 text-danger" aria-hidden="true">*</span>}
        </label>
      )}
      {wired}
      {error ? (
        <p id={errorId} className="text-xs text-danger">
          {error}
        </p>
      ) : hint ? (
        <p id={hintId} className="text-xs text-muted">
          {hint}
        </p>
      ) : null}
    </div>
  );
}
