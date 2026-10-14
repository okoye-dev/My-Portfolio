import { SITE } from "@/config/site";
import Arrow from "./Arrow";

export default function ExperienceList() {
  return (
    <ul className="divide-y divide-ink/15 border-y border-ink/15">
      {SITE.experience.map((job, i) => {
        const row = (
          <>
            <span className="font-num text-xs font-extralight text-ink-soft">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="inline-flex items-baseline gap-3 font-display text-[clamp(2rem,4vw,3.5rem)] font-light leading-none tracking-[-0.02em] transition-colors duration-500 group-hover:italic group-hover:text-accent">
              {job.company}
              {job.href && <Arrow className="h-[0.3em] w-[0.3em]" />}
            </span>
            <span className="col-start-2 text-[0.95rem] text-ink-soft md:col-start-auto">
              {job.role}
            </span>
            <span className="col-start-2 font-num text-sm font-extralight text-ink-soft md:col-start-auto">
              {job.years}
            </span>
          </>
        );
        const cls =
          "group grid grid-cols-[3rem_1fr] items-baseline gap-x-4 gap-y-1 py-8 md:grid-cols-[4rem_1.4fr_1fr_auto] md:gap-8 md:py-10";
        return (
          <li key={job.company}>
            {job.href ? (
              <a href={job.href} target="_blank" rel="noreferrer" className={cls}>
                {row}
              </a>
            ) : (
              <div className={cls}>{row}</div>
            )}
          </li>
        );
      })}
    </ul>
  );
}
