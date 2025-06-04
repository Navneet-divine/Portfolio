"use client";
import { motion } from "framer-motion";
import { Flame } from "lucide-react";
import { LeafyGreen } from "lucide-react";
import { AudioWaveform } from "lucide-react";

import { Activity } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="relative pb-30">
      <div className="absolute top-20">
        <Activity
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

      <div className="flex justify-center pt-30 ">
        <motion.h1
          className="text-5xl sm:text-6xl font-poppins font-bold text-white gradient-text"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Get In Touch
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
          Thanks for checking out my portfolio 🎉! I hope you liked it, I would
          appreciate your feedback also, I'm constantly looking for new
          opportunities and welcome anyone to my inboxes ✉️.
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div>
          <div className="flex justify-center pt-7">
            <button className="md:w-60 relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-slate-950 px-3 py-1 text-lg font-medium text-white backdrop-blur-3xl">
                Say hello!👋
              </span>
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
