import Link from "next/link";
import Arrow from "./Arrow";
import Placeholder from "./Placeholder";

/** A small project card, captioned like a figure in a publication. */
export default function FigureCard({
  index,
  name,
  href = "/projects",
}: {
  index: number;
  name: string;
  href?: string;
}) {
  return (
    <Link href={href} className="group block">
      <Placeholder className="aspect-[16/11] rounded-[1.25rem] md:aspect-[4/3] text-[0.8rem]">
        Cover image
      </Placeholder>
      <div className="mt-3 flex items-baseline justify-between gap-3">
        <p className="min-w-0">
          <span className="font-num text-[0.7rem] font-extralight text-ink-soft">
            Fig. {String(index).padStart(2, "0")}
          </span>
          <span className="mt-0.5 block truncate font-display text-[1.15rem] font-light leading-tight tracking-[-0.01em] transition-colors duration-500 group-hover:italic group-hover:text-accent md:text-[1.3rem]">
            {name}
          </span>
        </p>
        <Arrow className="h-3 w-3 shrink-0 text-ink-soft transition-all duration-150 ease-out group-hover:translate-x-0.5 group-hover:rotate-[15deg] group-hover:text-accent" />
      </div>
    </Link>
  );
}
