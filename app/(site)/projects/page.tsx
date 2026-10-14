import type { Metadata } from "next";
import PageHeader from "@/components/site/PageHeader";
import ProjectCard from "@/components/site/ProjectCard";
import { SITE } from "@/config/site";

export const metadata: Metadata = { title: "Projects | Okoye Divine" };

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        label="Projects"
        title={
          <>
            Selected <em className="italic">work</em>.
          </>
        }
        intro="A growing set of products I have helped build. Detailed case studies will live on their own pages."
      />
      <div className="mx-auto grid w-full max-w-[90rem] gap-x-8 gap-y-20 px-5 pt-20 md:grid-cols-2 md:px-10 xl:px-16">
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
    </>
  );
}
