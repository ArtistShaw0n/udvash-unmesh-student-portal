export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-2xl flex-col justify-center px-6 py-16">
      <p className="font-mono text-xs uppercase tracking-widest text-muted">
        Udvash–Unmesh
      </p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
        Design System — V2 rebuild
      </h1>
      <p className="mt-4 text-base text-muted">
        Atomic design library in progress. Tokens, atoms, molecules, and
        organisms are being rebuilt from the V2 Figma source with light/dark
        themes and small/medium/large size variants for mobile, tablet, and
        desktop.
      </p>

      <div className="mt-8 flex flex-col gap-2 text-sm">
        <a
          className="text-link underline-offset-4 hover:underline"
          href="https://udvash-unmesh-student-portal-storybook.vercel.app"
        >
          Storybook →
        </a>
        <a
          className="text-link underline-offset-4 hover:underline"
          href="https://github.com/ArtistShaw0n/udvash-unmesh-student-portal"
        >
          GitHub →
        </a>
        <a
          className="text-link underline-offset-4 hover:underline"
          href="https://www.figma.com/design/EM0QU7aqBCCK95WvV8Qwt5"
        >
          Figma source →
        </a>
      </div>
    </main>
  );
}
