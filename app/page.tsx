import AboutMeSection from "@/components/AboutMeSection";
import HeroSection from "@/components/HeroSection";
import ProjectSection from "@/components/ProjectSection";
import Topbar from "@/components/Topbar";

export default function Home() {
  return (
    <>
      <Topbar />
      <HeroSection />
      <AboutMeSection />
      <ProjectSection />
    </>
  );
}
