"use client";

import {
  Text,
  Button,
  Input,
  Icon,
  Avatar,
  Badge,
  Tag,
  Checkbox,
  Switch,
  Radio,
  Spinner,
  Divider,
} from "@/components";

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <header className="mb-12">
        <Text size="xs" weight="medium" color="muted" className="uppercase tracking-widest">
          Udvash–Unmesh
        </Text>
        <Text as="h1" size="3xl" weight="semibold" className="mt-2">
          Design System — V2
        </Text>
        <Text color="muted" className="mt-3">
          Atomic library. 12 atoms shipped — Text, Icon, Button, Input, Avatar,
          Badge, Tag, Checkbox, Switch, Radio, Spinner, Divider.
        </Text>
      </header>

      <Section title="Text">
        <div className="space-y-2">
          <Text size="3xl" weight="semibold">Heading 3xl</Text>
          <Text size="2xl" weight="semibold">Heading 2xl</Text>
          <Text size="xl" weight="medium">Heading xl</Text>
          <Text size="lg">Body lg — 16px</Text>
          <Text size="md">Body md — 14px (default)</Text>
          <Text size="sm" color="muted">Body sm muted — 12px</Text>
          <Text bangla size="lg">উদ্ভাস-উন্মেষ — Bangla via Hind Siliguri</Text>
        </div>
      </Section>

      <Section title="Icon">
        <div className="flex items-center gap-4 text-ink">
          <Icon name="Play" size="xs" />
          <Icon name="Play" size="sm" />
          <Icon name="Play" size="md" />
          <Icon name="Play" size="lg" />
          <Icon name="Play" size="xl" />
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-4 text-brand">
          <Icon name="Bell" /> <Icon name="User" /> <Icon name="Search" />
          <Icon name="Settings" /> <Icon name="Download" /> <Icon name="MessageSquare" />
          <Icon name="Calendar" /> <Icon name="BookOpen" /> <Icon name="Video" />
        </div>
      </Section>

      <Section title="Button">
        <div className="flex flex-wrap gap-3">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="link">Link</Button>
          <Button disabled>Disabled</Button>
          <Button loading>Loading</Button>
        </div>
        <div className="mt-3 flex flex-wrap items-center gap-3">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
          <Button size="xl">Extra large</Button>
        </div>
        <div className="mt-3 flex flex-wrap items-center gap-3">
          <Button iconLeft={<Icon name="Play" size="sm" />}>Start Class</Button>
          <Button variant="secondary" iconRight={<Icon name="ArrowRight" size="sm" />}>Next</Button>
        </div>
      </Section>

      <Section title="Input">
        <div className="space-y-3 max-w-sm">
          <Input placeholder="Enter Your Registration Number" />
          <Input size="sm" placeholder="Small" />
          <Input size="lg" placeholder="Large" />
          <Input invalid defaultValue="invalid value" />
          <Input disabled placeholder="Disabled" />
          <Input iconLeft={<Icon name="Search" size="sm" />} placeholder="Search anything" />
        </div>
      </Section>

      <Section title="Avatar">
        <div className="flex items-center gap-3">
          <Avatar name="SA" size="xs" />
          <Avatar name="SA" size="sm" />
          <Avatar name="Shawon Ahmed" />
          <Avatar name="Shawon Ahmed" size="lg" />
          <Avatar name="Shawon Ahmed" size="xl" />
          <Avatar src="https://i.pravatar.cc/100" alt="image avatar" size="lg" />
          <Avatar name="SA" shape="rounded" size="lg" />
        </div>
      </Section>

      <Section title="Badge">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="neutral">Neutral</Badge>
          <Badge variant="brand">Brand</Badge>
          <Badge variant="error">3</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="info">Info</Badge>
        </div>
        <div className="mt-3 flex items-center gap-3">
          <Badge dot variant="error" />
          <Badge dot variant="success" />
          <Badge dot variant="warning" />
          <Badge dot variant="brand" size="lg" />
        </div>
      </Section>

      <Section title="Tag">
        <div className="flex flex-wrap items-center gap-2">
          <Tag variant="neutral">Neutral</Tag>
          <Tag variant="brand">HSC 2026</Tag>
          <Tag variant="info">Physics</Tag>
          <Tag variant="success">Completed</Tag>
          <Tag variant="warning">In progress</Tag>
          <Tag variant="error">Overdue</Tag>
          <Tag variant="brand" onRemove={() => {}}>Removable</Tag>
        </div>
      </Section>

      <Section title="Checkbox / Switch / Radio">
        <div className="grid grid-cols-3 gap-6">
          <div className="space-y-2">
            <Text size="xs" color="muted">Checkbox</Text>
            <Checkbox label="Unchecked" />
            <Checkbox label="Checked" defaultChecked />
            <Checkbox label="Indeterminate" indeterminate />
            <Checkbox label="Disabled" disabled />
          </div>
          <div className="space-y-2">
            <Text size="xs" color="muted">Switch</Text>
            <Switch label="Off" />
            <Switch label="On" defaultChecked />
            <Switch label="Disabled" disabled />
            <Switch label="Disabled on" disabled defaultChecked />
          </div>
          <div className="space-y-2">
            <Text size="xs" color="muted">Radio</Text>
            <Radio name="demo" value="a" label="Option A" defaultChecked />
            <Radio name="demo" value="b" label="Option B" />
            <Radio name="demo" value="c" label="Option C" />
            <Radio name="demo" value="d" label="Disabled" disabled />
          </div>
        </div>
      </Section>

      <Section title="Spinner / Divider">
        <div className="flex items-center gap-6 text-brand">
          <Spinner size="xs" />
          <Spinner size="sm" />
          <Spinner size="md" />
          <Spinner size="lg" />
          <Spinner size="xl" />
        </div>
        <div className="mt-6 w-full max-w-sm">
          <Text size="sm">Above the divider</Text>
          <Divider className="my-3" />
          <Text size="sm">Below the divider</Text>
        </div>
      </Section>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-12">
      <Text size="xs" weight="medium" color="muted" className="mb-4 uppercase tracking-widest">
        {title}
      </Text>
      {children}
    </section>
  );
}
