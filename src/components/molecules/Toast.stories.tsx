import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Toast } from "./Toast";

const meta: Meta<typeof Toast> = {
  title: "Molecules/Toast",
  component: Toast,
  parameters: { layout: "centered" },
};
export default meta;
type Story = StoryObj<typeof Toast>;

export const Variants: Story = {
  render: () => (
    <div className="w-96 space-y-3">
      <Toast variant="info" title="Heads up" duration={0}>
        Your next live class starts at 6 PM.
      </Toast>
      <Toast variant="success" title="Saved" duration={0}>
        Profile photo updated.
      </Toast>
      <Toast variant="warning" title="Almost full" duration={0}>
        Only 4 seats left.
      </Toast>
      <Toast variant="danger" title="Failed" duration={0} onClose={() => {}}>
        Registration number not found.
      </Toast>
    </div>
  ),
};
