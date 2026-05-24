"use client";

import { Icon } from "../atoms/Icon";
import { IconChip } from "../atoms/IconChip";
import { Text } from "../atoms/Text";
import { Modal } from "../organisms/Modal";
import { cn } from "@/lib/cn";

export type PhotoPickerSource = "camera" | "gallery" | "remove";

export type PhotoPickerProps = {
  open: boolean;
  onClose: () => void;
  onPick: (source: PhotoPickerSource) => void;
  title?: string;
  /** Whether to show the "Remove photo" destructive option. */
  allowRemove?: boolean;
};

/**
 * PhotoPicker — Figma Dialog/PhotoPicker (360×170). Three-option chooser
 * for profile photo source. Wraps Modal with prebuilt actions.
 */
export function PhotoPicker({
  open,
  onClose,
  onPick,
  title = "Update profile photo",
  allowRemove = false,
}: PhotoPickerProps) {
  return (
    <Modal open={open} onClose={onClose} size="sm" title={title}>
      <div className="grid grid-cols-2 gap-3">
        <Tile
          icon="Camera"
          label="Camera"
          onClick={() => onPick("camera")}
        />
        <Tile
          icon="ImagePlus"
          label="Gallery"
          onClick={() => onPick("gallery")}
        />
      </div>
      {allowRemove && (
        <button
          type="button"
          onClick={() => onPick("remove")}
          className={cn(
            "mt-3 inline-flex w-full items-center justify-center gap-2 rounded-sm border border-error/40 bg-error-subtle p-3 text-sm font-medium text-error",
            "transition-colors hover:bg-error-subtle/70",
          )}
        >
          <Icon name="Trash2" size="sm" />
          Remove current photo
        </button>
      )}
    </Modal>
  );
}

function Tile({
  icon,
  label,
  onClick,
}: {
  icon: "Camera" | "ImagePlus";
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex flex-col items-center gap-2 rounded-sm border border-line-subtle bg-surface p-4 text-sm font-medium",
        "transition-colors hover:border-brand hover:bg-brand-subtle hover:text-brand",
      )}
    >
      <IconChip name={icon} tone="brand" size="lg" />
      <Text size="sm" weight="medium">{label}</Text>
    </button>
  );
}
