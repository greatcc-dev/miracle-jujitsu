import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Schedule from "@/components/Schedule";
import Pricing from "@/components/Pricing";
import Networking from "@/components/Networking";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <Schedule />
      <Networking />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
}
