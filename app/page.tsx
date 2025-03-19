import Navbar from "@/sections/Navbar";
import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import OurServices from "@/sections/OurServices";

const Home = () => {
  return (
    <main className="mx-auto">
      <Header />
      <Navbar />
      <Hero />
      <OurServices />
    </main>
  );
};
export default Home;
