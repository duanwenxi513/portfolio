import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Education } from "./components/Education";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { SectionDivider } from "./components/SectionDivider";
import { BackgroundProvider } from "./components/BackgroundProvider";
import { LensFlare } from "./components/LensFlare";

export default function App() {
  return (
    <BackgroundProvider>
      <LensFlare />
      <div className="flex min-h-screen flex-col items-center">
        <Nav />
        <main className="w-full">
          <Hero />
          <SectionDivider />
          <About />
          <SectionDivider />
          <Education />
          <SectionDivider />
          <Skills />
          <SectionDivider />
          <Projects />
          <SectionDivider />
          <Contact />
        </main>
        <Footer />
      </div>
    </BackgroundProvider>
  );
}
