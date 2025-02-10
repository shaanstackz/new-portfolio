import Hero from "./components/hero";
import Education from "./components/education";
import Projects from "./components/projects";
import Work from "./components/work";
import TechStack from "./components/techstack";
import Certifications from "./components/certifications";
import Header from "./components/header";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Hero />
      <Education />
      <Work />
      <Projects />
      <TechStack />
      <Certifications />
      <Footer />
    </div>
    
  );
}
