import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Career from "@/components/Career";
import Skills from "@/components/Skills";
import Contact from "@/components/Contacts";
import About from "@/components/About";
import Footer from "@/components/Footer";
import ScrollTopButton from "@/components/ScrollTopButton";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Career />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <ScrollTopButton />
    </>
  );
};

export default Home;
