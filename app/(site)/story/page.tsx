import type { Metadata } from "next";
import PageHeader from "@/components/site/PageHeader";
import Placeholder from "@/components/site/Placeholder";
import Pill from "@/components/site/Pill";

export const metadata: Metadata = { title: "Story | Okoye Divine" };

/** The chapters of the long story. Rewrite or reorder them freely. */
const CHAPTERS = [
  {
    title: "Where I grew up",
    note: "Home, family and the place that shaped how I see things.",
  },
  {
    title: "First time with computers",
    note: "The first machine, the first program, the first time something I made worked.",
  },
  {
    title: "Learning to build",
    note: "Teaching myself, the early mistakes, the people who helped.",
  },
  {
    title: "Finding product",
    note: "When I started caring about why something is built, not only how.",
  },
  {
    title: "Engineering and AI",
    note: "How software and AI became the work I want to do.",
  },
  {
    title: "Now, and what is next",
    note: "Where I am today and what I am working towards.",
  },
];

export default function StoryPage() {
  return (
    <>
      <PageHeader
        label="Story"
        title={
          <>
            How I got <em className="italic">here</em>.
          </>
        }
        intro="The long version: where I grew up, how I found computers, and how that became a life in product, software and AI."
      />

      <div className="mx-auto w-full max-w-[90rem] px-5 pt-24 md:px-10 md:pt-32 xl:px-16">
        <ol className="divide-y divide-ink/15 border-y border-ink/15">
          {CHAPTERS.map((c, i) => (
            <li
              key={c.title}
              className="grid gap-6 py-12 md:grid-cols-[4rem_1fr_1.4fr] md:gap-10 md:py-20"
            >
              <span className="font-num text-sm font-extralight text-ink-soft">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-light leading-[1.02] tracking-[-0.025em]">
                  {c.title}
                </h2>
                <p className="mt-4 max-w-[30ch] text-[0.95rem] font-extralight text-ink-soft">
                  {c.note}
                </p>
              </div>
              <Placeholder className="min-h-48">
                Write this chapter here, in your own words.
              </Placeholder>
            </li>
          ))}
        </ol>

        <div className="mt-16 flex flex-wrap gap-3">
          <Pill href="/">Back home</Pill>
          <Pill href="/projects" variant="ghost">
            See the work
          </Pill>
        </div>
      </div>
    </>
  );
}
