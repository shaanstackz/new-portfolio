import Image from "next/image";
import Hero from "./components/hero";
import Education from "./components/education";
import Projects from "./components/projects";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Education />
      <Projects />
    </div>
    
  );
}
