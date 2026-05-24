import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";
import { Button } from "../atoms/Button";
import { PhotoPicker } from "./PhotoPicker";

const meta: Meta<typeof PhotoPicker> = {
  title: "Molecules/PhotoPicker",
  component: PhotoPicker,
  parameters: { layout: "centered" },
};
export default meta;

type Story = StoryObj<typeof PhotoPicker>;

export const Default: Story = {
  render: () => {
    const Demo = () => {
      const [open, setOpen] = useState(false);
      return (
        <>
          <Button onClick={() => setOpen(true)}>Change photo</Button>
          <PhotoPicker
            open={open}
            onClose={() => setOpen(false)}
            onPick={(src) => {
              alert(`Picked: ${src}`);
              setOpen(false);
            }}
            allowRemove
          />
        </>
      );
    };
    return <Demo />;
  },
};
