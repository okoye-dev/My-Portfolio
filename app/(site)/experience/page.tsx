import type { Metadata } from "next";
import PageHeader from "@/components/site/PageHeader";
import ExperienceList from "@/components/site/ExperienceList";

export const metadata: Metadata = { title: "Experience | Okoye Divine" };

export default function ExperiencePage() {
  return (
    <>
      <PageHeader
        label="Experience"
        title={
          <span className="text-orange">
            Where I have <em className="italic">worked</em>.
          </span>
        }
        intro="The most recent role comes first."
      />
      <div className="mx-auto w-full max-w-[90rem] px-5 pt-20 md:px-10 xl:px-16">
        <ExperienceList />
      </div>
    </>
  );
}
