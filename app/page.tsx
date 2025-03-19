import Navbar from "@/sections/Navbar";
import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import OurServices from "@/sections/OurServices";
import HowDoesItWork from "@/sections/HowDoesItWork";
import Services from "@/sections/Services";
import TrustedSection from "@/sections/TrustedSection";
import Whatsapp from "@/components/Whatsapp";
import "./globals.css";
import Footer from "@/sections/Footer";

const Home = () => {
  return (
    <main className="mx-auto">
      <Header />
      <Navbar />
      <Hero />
      <OurServices />
      <HowDoesItWork />
      <Services />
      <TrustedSection />
      <Whatsapp />
      <Footer />
    </main>
  );
};
export default Home;
