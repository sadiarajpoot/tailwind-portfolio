
import About from "@/components/About";
import { Hero } from "@/components/Hero";
import Projects from "./projects/page";
import Contact from "@/components/Contact";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";



export default function Home() {
  return (
    <div>
      <Hero />
      <div/>
      <div>
        <About />
      </div>
      <div>
        <Projects/>
      </div>
      <div>
        <Skills/>
      </div>
      <div>
        <Contact/>
      </div>
      <div>
        <Footer/>
      </div>
  </div>
  );
}
