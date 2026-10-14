import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHeader from "@/components/site/PageHeader";
import Placeholder from "@/components/site/Placeholder";
import Pill from "@/components/site/Pill";
import { SITE } from "@/config/site";

export function generateStaticParams() {
  return SITE.notes.map((n) => ({ slug: n.slug }));
}

type Params = Promise<{ slug: string }>;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const note = SITE.notes.find((n) => n.slug === slug);
  return { title: note ? `${note.title} | Okoye Divine` : "Writing" };
}

export default async function NotePage({ params }: { params: Params }) {
  const { slug } = await params;
  const note = SITE.notes.find((n) => n.slug === slug);
  if (!note) notFound();

  return (
    <>
      <PageHeader label="Field note" title={note.title} compact />
      <div className="mx-auto w-full max-w-[90rem] px-5 pt-16 md:px-10 xl:px-16">
        <Placeholder className="min-h-64 max-w-3xl">
          This note is still being written.
        </Placeholder>
        <div className="mt-10">
          <Pill href="/blog" variant="ghost">
            All notes
          </Pill>
        </div>
      </div>
    </>
  );
}
