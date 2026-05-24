import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ServiceBlockedCard } from "./ServiceBlockedCard";

const meta: Meta<typeof ServiceBlockedCard> = {
  title: "Cards/ServiceBlockedCard",
  component: ServiceBlockedCard,
  parameters: { layout: "centered" },
};
export default meta;

type Story = StoryObj<typeof ServiceBlockedCard>;

export const Payment: Story = {
  args: {
    reason: "payment",
    primaryAction: { label: "Renew now", onClick: () => {} },
    secondaryAction: { label: "Contact support", onClick: () => {} },
  },
};
export const Expired: Story = {
  args: { reason: "expired", primaryAction: { label: "Browse programs", onClick: () => {} } },
};
export const NoConnection: Story = {
  args: {
    reason: "no-connection",
    primaryAction: { label: "Retry", onClick: () => {} },
    secondaryAction: { label: "View offline", onClick: () => {} },
  },
};
export const CustomOverride: Story = {
  args: {
    reason: "blocked",
    icon: "ShieldAlert",
    title: "Account suspended",
    message: "Your account is under review. Please reach out to admin.",
  },
};
export const Loading: Story = { args: { loading: true } };
