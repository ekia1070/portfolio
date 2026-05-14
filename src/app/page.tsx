import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Career from "@/components/Career";
import Skills from "@/components/Skills";
import Contact from "@/components/Contacts";
import About from "@/components/About";
import ScrollTopButton from "@/components/ScrollTopButton";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Career />
      <Skills />
      <Contact />
      <ScrollTopButton />
    </main>
  );
}
