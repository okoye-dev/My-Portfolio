import { cn } from "@/utils";

interface IProps {
  id?: string;
  label: string;
  title: React.ReactNode;
  action?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

/** Shared frame for every home section: a hairline, a small label, a serif heading. */
export default function Section({
  id,
  label,
  title,
  action,
  children,
  className,
}: IProps) {
  return (
    <section
      id={id}
      className={cn(
        "reveal mx-auto w-full max-w-[90rem] px-5 pt-20 md:px-10 md:pt-28 xl:px-16",
        className,
      )}
    >
      <div className="border-t border-ink/15 pt-6">
        <div className="flex items-center justify-between gap-6">
          <p className="label text-ink-soft">{label}</p>
          {action}
        </div>
        <h2 className="mt-6 font-display text-[clamp(1.5rem,2.8vw,2.4rem)] font-light leading-[1.1] tracking-[-0.02em] text-ink">
          {title}
        </h2>
        <div className="mt-8 md:mt-10">{children}</div>
      </div>
    </section>
  );
}
