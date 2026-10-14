import Link from "next/link";
import Arrow from "./Arrow";
import Placeholder from "./Placeholder";

interface IProps {
  index: number;
  name: string;
  tags: string[];
  summary: string;
}

export default function ProjectCard({ index, name, tags, summary }: IProps) {
  return (
    <Link href="/projects" className="group block">
      <Placeholder className="aspect-[4/3] transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[0.985] md:aspect-[5/4]">
        Cover image for {name}
      </Placeholder>
      <div className="mt-6 flex items-start justify-between gap-6">
        <div>
          <p className="font-num text-xs font-extralight text-ink-soft">
            {String(index).padStart(2, "0")}
          </p>
          <h3 className="mt-2 font-display text-[clamp(2.25rem,4vw,3.5rem)] font-light leading-none tracking-[-0.02em] transition-colors duration-500 group-hover:text-accent">
            {name}
          </h3>
          <p className="mt-3 text-[0.95rem] font-extralight text-ink-soft">
            {summary}
          </p>
        </div>
        <div className="flex flex-col items-end gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-full border border-ink/20 transition-colors duration-500 group-hover:border-accent group-hover:bg-accent group-hover:text-paper">
            <Arrow className="h-3 w-3" />
          </span>
          {tags.length > 0 && (
            <ul className="flex flex-wrap justify-end gap-2">
              {tags.map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-ink/15 px-3 py-1 text-xs text-ink-soft"
                >
                  {t}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </Link>
  );
}
