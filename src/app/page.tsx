import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ProjectSheet from "@/components/ProjectSheet";
import UpNext from "@/components/UpNext";
import Experience from "@/components/Experience";
import SmallBuilds from "@/components/SmallBuilds";
import Toolkit from "@/components/Toolkit";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="pg">
      <div className="wrap">
        <Nav />
        <Hero />
      </div>
      <main>
        <ProjectSheet />
        <UpNext />
        <Experience />
        <SmallBuilds />
        <Toolkit />
      </main>
      <Contact />
    </div>
  );
}
