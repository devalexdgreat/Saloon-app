import Image from "next/image";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Services from "./components/Services";

export default function Home() {
  return (
    <main className="w-full overflow-hidden">
        <Hero />
        <Gallery />
        <About />
        <Services />
    </main>
  );
}
