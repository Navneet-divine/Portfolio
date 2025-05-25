"use client";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { cn } from "@/lib/utils";
import { Spotlight } from "@/components/ui/Spotlight";

export default function HeroSection() {
  const words = `Building beautiful
websites with
passion
  `;

  return (
    <>
      <section className="px-5">
        <Spotlight
          className="-top-40 -left-10 md:-top-20 md:-left-32 max-xl:hidden"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw] max-xl:hidden"
          fill="purple"
        />
        <Spotlight
          className="top-28 left-80 h-[80vh] w-[50vw] max-xl:hidden"
          fill="blue"
        />
        <div className="absoulute flex h-screen w-full pt-50 justify-center bg-white dark:bg-[#10101a]">
          <div
            className={cn(
              "absolute inset-0",
              "[background-size:20px_20px]",
              "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
              "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]"
            )}
          />
          {/* Radial gradient for the container to give a faded look */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
          <div className="w-full md:w-[80%] lg:w-[80%] xl:w-[50%]">
            <h1>
              <TextGenerateEffect words={words} className="text-center" />;
            </h1>
            <p className="text-white text-center text-xl z-50">
              Hi I&apos;m Navneet, a creative and passionate full-stack
              developer
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
