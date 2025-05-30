"use client";

import { motion } from "framer-motion";

export default function ProjectSection() {
  return (
    <section id="projects" className="pb-[500px] mt-18">
      <div className="flex justify-center pt-20">
        <motion.h1
          className="text-6xl font-poppins font-bold text-white gradient-text"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          My Projects
        </motion.h1>
      </div>

      <ProjectSection />
    </section>
  );
}
