import Image from "next/image";
import Hero from "./components/hero";
import Education from "./components/education";
import Projects from "./components/projects";
import Work from "./components/work";
import TechStack from "./components/techstack";
import Certifications from "./components/certifications";
import Header from "./components/header";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Hero />
      <Education />
      <Projects />
      <Work />
      <TechStack />
      <Certifications />
    </div>
    
  );
}
