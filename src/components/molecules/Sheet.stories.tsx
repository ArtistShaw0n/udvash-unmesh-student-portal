import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";
import { Sheet } from "./Sheet";
import { Button } from "../atoms/Button";
import { Checkbox } from "../atoms/Checkbox";

const meta: Meta<typeof Sheet> = {
  title: "Molecules/Sheet",
  component: Sheet,
  parameters: { layout: "centered" },
};
export default meta;
type Story = StoryObj<typeof Sheet>;

export const Default: Story = {
  render: () => {
    const Demo = () => {
      const [open, setOpen] = useState(false);
      return (
        <>
          <Button variant="secondary" onClick={() => setOpen(true)}>Open bottom sheet</Button>
          <Sheet open={open} onClose={() => setOpen(false)} title="Filter">
            <div className="space-y-2">
              <Checkbox label="Mathematics" />
              <Checkbox label="Physics" defaultChecked />
              <Checkbox label="Chemistry" />
              <Checkbox label="Biology" />
              <div className="mt-4 flex justify-end gap-2">
                <Button variant="ghost" size="sm" onClick={() => setOpen(false)}>Clear</Button>
                <Button size="sm" onClick={() => setOpen(false)}>Apply</Button>
              </div>
            </div>
          </Sheet>
        </>
      );
    };
    return <Demo />;
  },
};
