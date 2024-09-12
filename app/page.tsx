import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Technologies from "./components/Technologies";
import Timeline from "./components/Timeline";

export default function Home() {
  return (
    <div className="flex justify-center gap-16">
      <main className="flex flex-col items-center gap-8 overflow-hidden sm:items-start lg:max-w-5xl">
        <Navbar />
        <Hero />
        <div className="px-2">
          <Timeline />
        </div>
        <Technologies />
      </main>
    </div>
  );
}
