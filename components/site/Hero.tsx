import Pill from "./Pill";
import { SITE } from "@/config/site";

export default function Hero() {
  return (
    <section className="mx-auto w-full max-w-[90rem] px-5 pt-20 md:px-10 md:pt-28 xl:px-16">
      <p className="label intro text-ink-soft">
        Working notebook<span className="hidden sm:inline"> · Product · Software · AI</span>
      </p>

      <h1
        className="intro mt-5 max-w-[34ch] text-[clamp(1.3rem,2.9vw,2.5rem)] leading-[1.08] tracking-[-0.03em]"
        style={{ animationDelay: "120ms" }}
      >
        <span className="font-sans font-thin">A </span>
        <span className="font-display font-light italic text-orange">
          product-minded
        </span>
        <span className="font-sans font-thin"> software &amp; AI engineer.</span>
      </h1>

      <div
        className="intro mt-6 flex flex-wrap gap-2 md:mt-7"
        style={{ animationDelay: "260ms" }}
      >
        <Pill href="/projects">
          Selected work
        </Pill>
        <Pill href="/blog" variant="ghost">
          Engineering notes
        </Pill>
        <Pill href={SITE.socials[0].href} variant="ghost">
          Github
        </Pill>
      </div>
    </section>
  );
}
