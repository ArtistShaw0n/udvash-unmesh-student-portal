"use client";

import { Button } from "../atoms/Button";
import { Icon, type IconName } from "../atoms/Icon";
import { IconChip } from "../atoms/IconChip";
import { Text } from "../atoms/Text";
import { Modal } from "../organisms/Modal";

export type ConfirmTone = "default" | "destructive" | "warning";

export type ConfirmDialogProps = {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  description?: React.ReactNode;
  /** Visual tone of the confirm action. Destructive shows red button + error icon. */
  tone?: ConfirmTone;
  confirmLabel?: string;
  cancelLabel?: string;
  icon?: IconName;
  loading?: boolean;
};

/**
 * ConfirmDialog — Figma Dialog/DeleteConfirm + DeleteConfirm-Small. Thin
 * Modal preset for the common "are you sure?" pattern. Three tones drive
 * the icon colour + confirm button variant.
 */
export function ConfirmDialog({
  open,
  onClose,
  onConfirm,
  title,
  description,
  tone = "default",
  confirmLabel = "Confirm",
  cancelLabel = "Cancel",
  icon,
  loading = false,
}: ConfirmDialogProps) {
  const presetIcon: IconName =
    icon ?? (tone === "destructive" ? "Trash2" : tone === "warning" ? "TriangleAlert" : "CircleQuestionMark");
  const iconTone: "error" | "warning" | "brand" =
    tone === "destructive" ? "error" : tone === "warning" ? "warning" : "brand";

  return (
    <Modal open={open} onClose={onClose} size="sm" showClose={false}>
      <div className="flex flex-col items-center gap-3 text-center">
        <IconChip name={presetIcon} tone={iconTone} size="lg" />
        <Text size="lg" weight="semibold">{title}</Text>
        {description && (
          <Text size="sm" color="muted">{description}</Text>
        )}
      </div>
      <div className="mt-5 flex gap-2">
        <Button variant="ghost" fullWidth onClick={onClose} disabled={loading}>
          {cancelLabel}
        </Button>
        <Button
          variant={tone === "destructive" ? "destructive" : "primary"}
          fullWidth
          loading={loading}
          iconLeft={<Icon name={tone === "destructive" ? "Trash2" : "Check"} size="sm" />}
          onClick={onConfirm}
        >
          {confirmLabel}
        </Button>
      </div>
    </Modal>
  );
}
