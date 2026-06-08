"use client";

import { NextStudio } from "next-sanity/studio";
import config from "@/sanity.config";
import { hasSanityConfig } from "@/sanity/env";

export const dynamic = "force-static";

export default function StudioPage() {
  if (!hasSanityConfig) {
    return (
      <main className="min-h-screen bg-[#f6f8fc] px-6 py-16 text-[#030816]">
        <div className="mx-auto max-w-3xl border border-[#d7dfed] bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#0067c7]">
            Sanity setup required
          </p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
            Connect Fosh Estate Studio to a Sanity project
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-[#455064]">
            Add the Sanity project variables to{" "}
            <code className="border border-[#d7dfed] bg-[#f6f8fc] px-1.5 py-0.5">
              .env.local
            </code>{" "}
            and restart the dev server. After that, add this localhost URL as a
            trusted CORS origin in Sanity.
          </p>
          <pre className="mt-6 overflow-x-auto border border-[#d7dfed] bg-[#030816] p-5 text-sm leading-6 text-white">
{`NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2026-06-08`}
          </pre>
          <p className="mt-5 text-sm leading-6 text-[#455064]">
            In Sanity Manage, open the project settings, go to API/CORS, and
            add <strong>http://localhost:3000</strong> with credentials enabled.
          </p>
        </div>
      </main>
    );
  }

  return <NextStudio config={config} />;
}
