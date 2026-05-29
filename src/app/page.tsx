"use client";

import { Button, Input, Checkbox, Dropdown, ProgressBar, Spinner, Tag } from "@/components";

/* Raw-value component library showcase — 1:1 from Figma V2.
   Grows batch by batch as components are rebuilt. */

export default function Page() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <header className="mb-10">
        <p className="text-[11px] font-medium uppercase tracking-widest text-[#999999]">
          Udvash–Unmesh · Master Component Library
        </p>
        <h1 className="mt-2 text-[26px] font-semibold text-[#616161]">
          1:1 from Figma V2 — raw values
        </h1>
        <p className="mt-2 text-[14px] text-[#999999]">Batch R1 — Foundation atoms (7)</p>
      </header>

      <Section title="Button — node 1:4433">
        <div className="flex flex-wrap items-center gap-4">
          <Button>Browse</Button>
          <Button>Next</Button>
          <Button disabled>Disabled</Button>
          <div className="w-[280px]"><Button fullWidth>Full width</Button></div>
        </div>
      </Section>

      <Section title="Input — node 1:4360">
        <div className="flex flex-wrap gap-6">
          <Input placeholder="Enter Admission Roll" />
          <Input label="ভর্তি পরীক্ষার রোল" required placeholder="Enter Admission Roll" />
          <Input defaultValue="1819361" />
        </div>
      </Section>

      <Section title="Dropdown — node 1:4352">
        <Dropdown
          label="যে প্রতিষ্ঠানে ভর্তি হয়েছ / ভর্তি হতে যাচ্ছ"
          required
          options={[
            { value: "u", label: "Udvash" },
            { value: "un", label: "Unmesh" },
            { value: "ut", label: "Uttoron" },
          ]}
        />
      </Section>

      <Section title="Checkbox — node 1:5011 (MUI #1976d2)">
        <div className="flex flex-col gap-2">
          <Checkbox label="Start From Beginning" defaultChecked />
          <Checkbox label="Resume From Previous" />
        </div>
      </Section>

      <Section title="ProgressBar — node 1:32648">
        <div className="w-[264px] space-y-3">
          <ProgressBar value={5} />
          <ProgressBar value={45} />
          <ProgressBar value={80} />
        </div>
      </Section>

      <Section title="Spinner — node 1:10369">
        <Spinner />
      </Section>

      <Section title="Tag — node 1:17311">
        <div className="flex items-center gap-3">
          <Tag>বাং</Tag>
          <Tag>EN</Tag>
          <Tag color="#55347b">Live</Tag>
        </div>
      </Section>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="mb-4 text-[16px] font-semibold text-[#616161]">{title}</h2>
      {children}
    </section>
  );
}
