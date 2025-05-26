"use client";
import { motion } from "framer-motion";

export default function AboutMeSection() {
  return (
    <section id="about" className="pb-[500px] mt-18">
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

      <div className="px-5 md:px-14 lg:px-50">
        <motion.p
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
        </motion.p>
      </div>
    </section>
  );
}
