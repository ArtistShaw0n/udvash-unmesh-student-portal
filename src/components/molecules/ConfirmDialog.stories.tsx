import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";
import { Button } from "../atoms/Button";
import { ConfirmDialog } from "./ConfirmDialog";

const meta: Meta<typeof ConfirmDialog> = {
  title: "Molecules/ConfirmDialog",
  component: ConfirmDialog,
  parameters: { layout: "centered" },
};
export default meta;

type Story = StoryObj<typeof ConfirmDialog>;

export const Default: Story = {
  render: () => {
    const Demo = () => {
      const [open, setOpen] = useState(false);
      return (
        <>
          <Button onClick={() => setOpen(true)}>Open dialog</Button>
          <ConfirmDialog
            open={open}
            onClose={() => setOpen(false)}
            onConfirm={() => setOpen(false)}
            title="Submit exam?"
            description="You won't be able to edit answers after submitting."
            confirmLabel="Submit"
          />
        </>
      );
    };
    return <Demo />;
  },
};

export const Destructive: Story = {
  render: () => {
    const Demo = () => {
      const [open, setOpen] = useState(false);
      return (
        <>
          <Button variant="destructive" onClick={() => setOpen(true)}>Delete account</Button>
          <ConfirmDialog
            open={open}
            onClose={() => setOpen(false)}
            onConfirm={() => setOpen(false)}
            tone="destructive"
            title="Delete account?"
            description="This action is permanent. All progress, downloads, and discussions will be removed."
            confirmLabel="Delete"
          />
        </>
      );
    };
    return <Demo />;
  },
};
