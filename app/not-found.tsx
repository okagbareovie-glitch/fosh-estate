import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-[var(--background)] px-6 text-center text-[var(--ink)]">
      <div className="max-w-md">
        <p className="font-[family-name:var(--font-label)] text-sm text-[var(--blue)]">
          Page not found
        </p>
        <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-semibold">
          This page is still being prepared.
        </h1>
        <p className="mt-4 text-base leading-7 text-[var(--muted)]">
          The full Fosh Estate website will include About, Properties, and
          Contact pages in the next phase.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex min-h-12 items-center justify-center rounded-md bg-[var(--navy)] px-5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[var(--navy-2)]"
        >
          Return home
        </Link>
      </div>
    </main>
  );
}
