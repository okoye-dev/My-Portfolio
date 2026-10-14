import Link from "next/link";
import { SITE } from "@/config/site";
import Arrow from "./Arrow";
import Pill from "./Pill";

export default function FieldNotes() {
  return (
    <section aria-labelledby="field-notes">
      <div className="flex items-center justify-between pb-4 text-ink-soft">
        <h2 id="field-notes" className="label">
          Latest field notes
        </h2>
        <Pill href="/blog" variant="orange">
          All notes
        </Pill>
      </div>
      <ol className="border-t border-ink/15">
        {SITE.notes.map((n, i) => (
          <li key={n.slug}>
            <Link
              href={`/blog/${n.slug}`}
              className="group grid grid-cols-[1.75rem_1fr_auto] items-baseline gap-x-3 border-b border-ink/15 py-2 md:py-3"
            >
              <span className="font-num text-[0.7rem] font-extralight text-ink-soft">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-[0.95rem] leading-snug transition-colors duration-300 group-hover:text-accent md:text-base">
                {n.title}
              </span>
              <Arrow className="h-3 w-3 self-center text-ink-soft transition-all duration-150 ease-out group-hover:translate-x-0.5 group-hover:rotate-[15deg] group-hover:text-accent" />
            </Link>
          </li>
        ))}
      </ol>
    </section>
  );
}
