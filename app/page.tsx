import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="gap-16">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Navbar/>
        <Hero />
      </main>
    </div>
  );
}
