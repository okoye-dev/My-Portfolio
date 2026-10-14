export default function PageHeader({
  label,
  title,
  intro,
  compact = false,
}: {
  label: string;
  title: React.ReactNode;
  intro?: string;
  /** Smaller title, for long titles such as a field note */
  compact?: boolean;
}) {
  return (
    <div className="mx-auto w-full max-w-[90rem] px-5 pb-6 pt-40 md:px-10 md:pt-56 xl:px-16">
      <p className="label intro text-ink-soft">{label}</p>
      <h1
        className={
          compact
            ? "intro mt-8 max-w-[24ch] font-display text-[clamp(2rem,5vw,4.5rem)] font-light leading-[1.02] tracking-[-0.03em]"
            : "intro mt-8 max-w-[14ch] font-display text-[clamp(3.25rem,9vw,9rem)] font-light leading-[0.96] tracking-[-0.035em]"
        }
        style={{ animationDelay: "100ms" }}
      >
        {title}
      </h1>
      {intro && (
        <p
          className="intro mt-10 max-w-[44ch] text-[1.15rem] font-extralight leading-relaxed text-ink-soft"
          style={{ animationDelay: "220ms" }}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
