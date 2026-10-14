import type { Metadata } from "next";
import PageHeader from "@/components/site/PageHeader";
import Placeholder from "@/components/site/Placeholder";

export const metadata: Metadata = { title: "Writing | Okoye Divine" };

export default function BlogPage() {
  return (
    <>
      <PageHeader
        label="Writing"
        title={
          <>
            Notes on <em className="italic">excellence</em>.
          </>
        }
        intro="Essays on growing as an engineer: craft, judgement, and the habits that compound."
      />
      <div className="mx-auto w-full max-w-[90rem] px-5 pt-20 md:px-10 xl:px-16">
        <Placeholder className="min-h-72">
          No posts yet. The first one will appear here.
        </Placeholder>
      </div>
    </>
  );
}
