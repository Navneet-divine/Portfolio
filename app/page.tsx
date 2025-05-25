import { Spotlight } from "@/components/ui/Spotlight";
import HeroSection from "@/components/HeroSection";
import Topbar from "@/components/Topbar";

export default function Home() {
  return (
    <>
      <div className="">
        <Topbar />
        {/* <Spotlight
          className="-top-40 -left-10 md:-top-20 md:-left-32"
          fill="white"
        /> */}
        {/* <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        /> */}
        {/* <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" /> */}

        <HeroSection />
      </div>
    </>
  );
}
