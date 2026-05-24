import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Popover } from "./Popover";
import { Button } from "../atoms/Button";
import { Text } from "../atoms/Text";

const meta: Meta<typeof Popover> = {
  title: "Molecules/Popover",
  component: Popover,
  parameters: { layout: "centered" },
};
export default meta;

type Story = StoryObj<typeof Popover>;

/**
 * Recommended: use the render-prop form when the trigger is itself a
 * `<button>` (e.g. our `<Button>` atom). Spread the supplied
 * `triggerProps` onto your element so Popover owns the open state
 * without wrapping your button in another button.
 */
export const WithButtonTrigger: Story = {
  render: () => (
    <Popover
      trigger={(triggerProps) => (
        <Button variant="secondary" {...triggerProps}>
          Open Popover
        </Button>
      )}
    >
      <div className="p-2">
        <Text weight="medium">Popover content</Text>
        <Text size="sm" color="muted">Click outside or press Esc to close.</Text>
      </div>
    </Popover>
  ),
};

/**
 * Static-node form: pass any non-interactive React element and Popover
 * wraps it in its own `<button>`. Use this for icons, text labels, or
 * styled spans — never for elements that are already buttons.
 */
export const WithIconTrigger: Story = {
  render: () => (
    <Popover
      trigger={<span className="rounded-sm border border-line-subtle px-3 py-1.5 text-sm">Settings</span>}
    >
      <div className="p-2">
        <Text size="sm">Settings menu</Text>
      </div>
    </Popover>
  ),
};
