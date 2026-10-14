import type { Metadata } from "next";
import PageHeader from "@/components/site/PageHeader";
import Bento from "@/components/site/Bento";

export const metadata: Metadata = { title: "Personal | Okoye Divine" };

export default function PersonalPage() {
  return (
    <>
      <PageHeader
        label="Personal"
        title={
          <>
            The <em className="italic">art</em> and the rest.
          </>
        }
        intro="Drawings, experiments and things made for the joy of it."
      />
      <div className="mx-auto flex w-full max-w-[90rem] flex-col gap-3 px-5 pt-20 md:gap-4 md:px-10 xl:px-16">
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
        <Bento
          turned
          startAt={16}
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
      </div>
    </>
  );
}
