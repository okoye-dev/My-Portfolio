import Hero from "@/components/site/Hero";
import Section from "@/components/site/Section";
import Placeholder from "@/components/site/Placeholder";
import ProjectCard from "@/components/site/ProjectCard";
import Bento from "@/components/site/Bento";
import Arrow from "@/components/site/Arrow";
import Pill from "@/components/site/Pill";
import { SITE } from "@/config/site";

export default function Home() {
  return (
    <>
      <Hero />

      <Section
        id="about"
        label="About"
        title={
          <>
            Engineering with a <em className="italic">product</em> mind.
          </>
        }
      >
        <Placeholder className="min-h-48 max-w-3xl">
          Personal introduction goes here: who I am, how I think about building
          software, and where AI fits in.
        </Placeholder>
      </Section>

      <Section
        id="story"
        label="My story"
        title={
          <>
            From <em className="italic text-accent">there</em> to{" "}
            <em className="italic text-orange">here</em>.
          </>
        }
        action={<Pill href="/story" variant="ghost">The full story</Pill>}
      >
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:gap-16">
          <Placeholder className="min-h-56">
            The short version of how I grew up and found this field goes here:
            a few honest sentences.
          </Placeholder>
          <div className="flex flex-col items-start justify-end gap-5">
            <p className="max-w-[32ch] text-[1rem] font-extralight leading-relaxed text-ink-soft">
              The long version has chapters, from where I grew up to the work I
              do now.
            </p>
            <Pill href="/story">Read the long version</Pill>
          </div>
        </div>
      </Section>

      <Section
        id="projects"
        label="Selected projects"
        title={
          <>
            Things I have <em className="italic">built</em>.
          </>
        }
        action={<Pill href="/projects" variant="ghost">All projects</Pill>}
      >
        <div className="grid gap-x-8 gap-y-16 md:grid-cols-2">
          {SITE.projects.map((p, i) => (
            <ProjectCard
              key={p.slug}
              index={i + 1}
              name={p.name}
              tags={p.tags}
              summary={p.summary}
            />
          ))}
        </div>
      </Section>

      <Section
        id="experience"
        label="Experience"
        title={
          <span className="text-orange">
            Where I have <em className="italic">worked</em>.
          </span>
        }
      >
        <ul className="divide-y divide-ink/15 border-y border-ink/15">
          {SITE.experience.map((job, i) => (
            <li
              key={job.company}
              className="grid grid-cols-[3rem_1fr] items-baseline gap-x-4 gap-y-1 py-8 md:grid-cols-[4rem_1.4fr_1fr_auto] md:gap-8 md:py-10"
            >
              <span className="font-num text-xs font-extralight text-ink-soft">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-display text-[clamp(2rem,4vw,3.5rem)] font-light leading-none tracking-[-0.02em]">
                {job.href ? (
                  <a
                    href={job.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-baseline gap-3 transition-colors duration-500 hover:text-accent hover:italic"
                  >
                    {job.company}
                    <Arrow className="h-[0.3em] w-[0.3em]" />
                  </a>
                ) : (
                  job.company
                )}
              </span>
              <span className="col-start-2 text-[0.95rem] text-ink-soft md:col-start-auto">
                {job.role}
              </span>
              <span className="col-start-2 font-num text-sm font-extralight text-ink-soft md:col-start-auto">
                {job.years}
              </span>
            </li>
          ))}
        </ul>
      </Section>

      <Section
        id="writing"
        label="Writing"
        title={
          <>
            The road to engineering <em className="italic">excellence</em>.
          </>
        }
        action={<Pill href="/blog" variant="ghost">Open the blog</Pill>}
      >
        <Placeholder className="min-h-56 max-w-3xl">
          The first essay is on its way. Latest posts will appear here.
        </Placeholder>
      </Section>

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
