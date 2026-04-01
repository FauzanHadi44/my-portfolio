import Navbar from "../components/layout/Navbar";
import HeroSection from "../components/sections/HeroSection";
import About from "../components/sections/About";
import Skills from "../components/sections/Skills";
import Projects from "../components/sections/Projects";
import Experience from "../components/sections/Experience";
import Contact from "../components/sections/Contact";
import Footer from "../components/sections/Footer";

export default function Home() {
  return (
    <main
      className="min-h-screen"
      style={{
        backgroundColor: '#F8F9FA',
        backgroundImage: "url('https://www.transparenttextures.com/patterns/cream-paper.png')"
      }}
    >
      <Navbar />
      <HeroSection />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}