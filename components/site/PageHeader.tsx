export default function PageHeader({
  label,
  title,
  intro,
}: {
  label: string;
  title: React.ReactNode;
  intro?: string;
}) {
  return (
    <div className="mx-auto w-full max-w-[90rem] px-5 pb-6 pt-40 md:px-10 md:pt-56 xl:px-16">
      <p className="label intro text-ink-soft">{label}</p>
      <h1
        className="intro mt-8 max-w-[14ch] font-display text-[clamp(3.25rem,9vw,9rem)] font-light leading-[0.96] tracking-[-0.035em]"
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
