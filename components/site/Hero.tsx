import Pill from "./Pill";

export default function Hero() {
  return (
    <section className="mx-auto flex min-h-[100svh] w-full max-w-[90rem] flex-col justify-end px-5 pb-10 pt-36 md:px-10 md:pb-14 xl:px-16">
      <h1 className="font-display text-[clamp(2rem,10vw,9.25rem)] font-light leading-[0.94] tracking-[-0.04em]">
        <span
          className="intro block whitespace-nowrap italic"
          style={{ animationDelay: "120ms" }}
        >
          A <span className="text-orange">product-minded</span>
        </span>
        <span
          className="intro block font-sans font-thin"
          style={{ animationDelay: "240ms" }}
        >
          software &amp; AI engineer.
        </span>
      </h1>

      <div
        className="intro mt-14 flex flex-wrap items-end justify-between gap-8 border-t border-ink/15 pt-6"
        style={{ animationDelay: "420ms" }}
      >
        <p className="max-w-[34ch] text-[1.05rem] font-extralight leading-relaxed text-ink-soft">
          Selected projects, writing on the road to engineering excellence, and
          the odd drawing.
        </p>
        <div className="flex flex-wrap gap-3">
          <Pill href="/projects">View projects</Pill>
          <Pill href="/blog" variant="ghost">
            Read the writing
          </Pill>
        </div>
      </div>
    </section>
  );
}
