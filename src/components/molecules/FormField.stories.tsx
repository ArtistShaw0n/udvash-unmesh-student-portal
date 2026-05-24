import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { FormField } from "./FormField";
import { Input } from "../atoms/Input";

const meta: Meta<typeof FormField> = {
  title: "Molecules/FormField",
  component: FormField,
  parameters: { layout: "centered" },
};
export default meta;
type Story = StoryObj<typeof FormField>;

export const States: Story = {
  render: () => (
    <div className="w-80 space-y-4">
      <FormField label="Admission Roll" required>
        <Input placeholder="Enter Admission Roll" />
      </FormField>
      <FormField label="Password" required hint="Must be 8+ characters">
        <Input type="password" />
      </FormField>
      <FormField label="Phone" error="Number is not registered">
        <Input defaultValue="01717000000" />
      </FormField>
    </div>
  ),
};
