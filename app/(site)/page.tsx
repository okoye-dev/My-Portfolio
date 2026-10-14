import Hero from "@/components/site/Hero";
import IndexList from "@/components/site/IndexList";
import FieldNotes from "@/components/site/FieldNotes";
import FigureCard from "@/components/site/FigureCard";
import Section from "@/components/site/Section";
import Bento from "@/components/site/Bento";
import Pill from "@/components/site/Pill";
import { SITE } from "@/config/site";

export default function Home() {
  return (
    <>
      <Hero />
      <IndexList />

      <div className="mx-auto mt-14 grid w-full max-w-[90rem] gap-12 px-5 md:mt-24 md:grid-cols-[1.35fr_1fr] md:gap-14 md:px-10 xl:px-16">
        <section aria-labelledby="figures">
          <div className="flex items-center pb-4 text-ink-soft">
            <h2 id="figures" className="label">
              Selected work
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            {SITE.projects.map((p, i) => (
              <FigureCard key={p.slug} index={i + 1} name={p.name} />
            ))}
          </div>
        </section>
        <FieldNotes />
      </div>

      <Section
        id="personal"
        label="Personal"
        title={
          <>
            Outside of <em className="italic">work</em>.
          </>
        }
        action={<Pill href="/personal" variant="ghost">Visit personal</Pill>}
      >
        <Bento
          labels={[
            "Sketchbook",
            "Study",
            "Colour test",
            "Series",
            "Doodle",
            "Notes",
            "Experiment",
            "Featured piece",
            "Process",
            "Lettering",
            "Landscape",
            "Portrait",
            "Texture",
            "In progress",
            "Reference",
          ]}
        />
      </Section>
    </>
  );
}
