import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="gap-16">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Hero />
      </main>
    </div>
  );
}
