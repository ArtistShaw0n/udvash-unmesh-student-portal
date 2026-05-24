import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Alert } from "./Alert";

const meta: Meta<typeof Alert> = {
  title: "Molecules/Alert",
  component: Alert,
  parameters: { layout: "centered" },
};
export default meta;
type Story = StoryObj<typeof Alert>;

export const Variants: Story = {
  render: () => (
    <div className="w-96 space-y-3">
      <Alert variant="info" title="Heads up">
        Your next live class starts at 6 PM.
      </Alert>
      <Alert variant="success" title="Saved">
        Profile photo updated successfully.
      </Alert>
      <Alert variant="warning" title="Almost full">
        Only 4 seats left in the Master Class.
      </Alert>
      <Alert variant="danger" title="Login failed">
        Registration number not found.
      </Alert>
    </div>
  ),
};

export const Dismissable: Story = {
  render: () => (
    <div className="w-96">
      <Alert variant="info" title="Heads up" onClose={() => {}}>
        This is a dismissable alert. Click the × to close it.
      </Alert>
    </div>
  ),
};
