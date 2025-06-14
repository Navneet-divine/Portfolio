"use client";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { cn } from "@/lib/utils";
import { Spotlight } from "@/components/ui/Spotlight";
import { Send } from "lucide-react";

export default function HeroSection() {
  const words = `Building beautiful
websites with
passion
  `;

  const handleScroll = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section className="relative px-5">
        <div className="relative w-full">
          <Spotlight
            className="top-28 left-35 h-[80vh] w-[50vw]"
            fill="white"
          />

          <Spotlight
            className="top-10 left-full h-[80vh] w-[50vw] "
            fill="purple"
          />
          <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
        </div>

        <div className="flex h-screen w-full pt-45 justify-center bg-white dark:bg-[#10101a]">
          <div
            className={cn(
              "absolute inset-0",
              "[background-size:20px_20px]",
              "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
              "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]"
            )}
          />
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
          <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[80%] xl:w-[50%]">
            <h1>
              <TextGenerateEffect words={words} className="text-center" />;
            </h1>
            <p className="text-white text-center text-lg md:text-xl z-50 mt-[-16px] font-dancingScript backdrop-blur">
              Hey! 👋, my name is Navneet and I&apos;m a passionate full-stack
              developer who loves tech, learning new things, and have been
              coding since the age of 15.
            </p>
            <div className="flex justify-center pt-7">
              <button
                onClick={handleScroll}
                className="md:w-60 relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none"
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                  Show my work
                  <Send className="h-4 w-4" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
