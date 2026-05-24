import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ProfileCard } from "./ProfileCard";

const meta: Meta<typeof ProfileCard> = {
  title: "Cards/ProfileCard",
  component: ProfileCard,
  parameters: { layout: "centered" },
};
export default meta;

type Story = StoryObj<typeof ProfileCard>;

export const Default: Story = {
  args: {
    name: "Asif Mahmood Ripon",
    registrationNo: 1819361,
    personalInfo: [
      { label: "Nick Name", value: "Asif" },
      { label: "Gender", value: "Male" },
      { label: "Religion", value: "Islam" },
      { label: "Group", value: "Science" },
      { label: "Father's Name", value: "Mahmood Hossain" },
    ],
    contactInfo: [
      { label: "Mobile", value: "8801713787805" },
      { label: "Email", value: "asif@example.com" },
    ],
    onEdit: () => {},
  },
};
export const Loading: Story = {
  args: { name: "", registrationNo: 0, loading: true },
};
