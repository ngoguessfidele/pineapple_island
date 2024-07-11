import About from "@/components/About";
import Choose from "@/components/Choose";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Offer from "@/components/Offer";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Choose />
      <Offer />
      <Gallery />
    </main>
  );
}
