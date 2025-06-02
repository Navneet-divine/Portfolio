"use client";
import { motion } from "framer-motion";
import { Flame } from "lucide-react";
import { LeafyGreen } from "lucide-react";
import { AudioWaveform } from "lucide-react";

export default function AboutMeSection() {
  return (
    <section id="about" className="relative mt-18">
      <div className="absolute top-20">
        <Flame
          size={120}
          className="absolute lg:top-5 lg:left-32 top-16 left-16 animate-pulse -translate-x-4 -rotate-45 text-[#212135]  -z-10"
        />
      </div>
      <div className="absolute">
        <LeafyGreen
          size={100}
          className="absolute top-85 left-60 animate-pulse -translate-x-4 -rotate-45 text-[#212135]  -z-10"
        />
      </div>
      <div className="absolute hidden sm:block">
        <AudioWaveform
          size={100}
          className="absolute sm:top-30 lg:top-25 sm:left-130 md:left-160 lg:left-260 animate-pulse -translate-x-4 -rotate-45 text-[#212135]  -z-10"
        />
      </div>

      <div className="flex justify-center pt-20">
        <motion.h1
          className="text-6xl font-poppins font-bold text-white gradient-text"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          About me
        </motion.h1>
      </div>

      <div className="px-5 md:px-14 lg:px-32 min-[530px]:px-16">
        <motion.div
          className="text-center text-lg sm:text-xl md:text-2xl pt-20 font-montserrat text-gray-300"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
        >
          👋 Hi, I&apos;m Navneet — a passionate Full Stack Developer skilled in
          MERN and Next.js. I love building clean, user-focused apps and always
          strive to learn and grow. Currently open to remote opportunities where
          I can create meaningful digital experiences.
        </motion.div>
      </div>
    </section>
  );
}
