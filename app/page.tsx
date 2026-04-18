import AboutMeSection from "@/components/AboutMeSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ProjectSection from "@/components/ProjectSection";
import Topbar from "@/components/Topbar";

import ExpSection from "@/components/ExpSection";
import SkillsSection from "@/components/SkillsSection";

export default function Home() {
  return (
    <>
      <Topbar />
      <HeroSection />
      <AboutMeSection />
      <SkillsSection />
      <ExpSection />
      <ProjectSection />
      <ContactSection />
      <Footer />
    </>
  );
}
