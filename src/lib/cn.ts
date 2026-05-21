/**
 * Lightweight className combiner — joins truthy class strings with spaces.
 * Used by all DS components for variant composition.
 */
export function cn(...classes: Array<string | undefined | null | false>): string {
  return classes.filter(Boolean).join(" ");
}
