import About from "@/components/About";
import Agent from "@/components/Agent";
import Choose from "@/components/Choose";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
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
      <Features />
      <Agent />
      <Contact />
      <Footer />
    </main>
  );
}
