import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import Pricing from "@/components/landing/Pricing";
import Footer from "@/components/landing/Footer";
import CryptoTicker from "@/components/landing/CryptoTicker";

export default function Home() {
  return (
    <div className="min-h-screen text-foreground font-sans">
      <Navbar />
      <div className="pt-16">
        <CryptoTicker />
      </div>
      <main>
        <Hero />
        <Features />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
