import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";
import { Modal } from "./Modal";
import { Button } from "../atoms/Button";

const meta: Meta<typeof Modal> = {
  title: "Molecules/Modal",
  component: Modal,
  parameters: { layout: "centered" },
};
export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  render: () => {
    const Demo = () => {
      const [open, setOpen] = useState(false);
      return (
        <>
          <Button onClick={() => setOpen(true)}>Open modal</Button>
          <Modal
            open={open}
            onClose={() => setOpen(false)}
            title="Revision Settings"
            description="Pick a starting mode and which question statuses to include."
          >
            <p className="text-sm">
              Modal body content goes here. The panel matches the V2 Figma design — 328px
              wide, rounded-2xl, with a backdrop-blurred scrim.
            </p>
            <div className="mt-4 flex justify-end gap-2">
              <Button variant="ghost" onClick={() => setOpen(false)}>Cancel</Button>
              <Button onClick={() => setOpen(false)}>Start Revision</Button>
            </div>
          </Modal>
        </>
      );
    };
    return <Demo />;
  },
};
