"use client";

import { motion } from "framer-motion";

import ProjectCard from "./ProjectCard";
import projectOne from "@/public/images/project-1.png";
import projectTwo from "@/public/images/project-2.png";

export default function ProjectSection() {
  return (
    <section id="projects" className="pb-[500px] mt-18">
      <div className="flex justify-center pt-20 pb-20">
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

      <div className="px-5 md:px-14 lg:px-32">
        <ProjectCard
          image={projectOne}
          title="Eventhub"
          description="A place to find, join, and host Events with a clean and easy to use user interface. Loaded with search capabilities and filters to find the best events you want without wasting time and many more."
          stacks={["Next.js", "TypeScript", "MongoDB", "Shadcn UI"]}
          githubLink="https://github.com/Navneet-divine"
          liveLink="https://eventhub-j1dh.onrender.com/"
          className=""
        />
        <ProjectCard
          image={projectTwo}
          title="Eventhub"
          description="A place to find, join, and host Events with a clean and easy to use user interface. Loaded with search capabilities and filters to find the best events you want without wasting time and many more."
          stacks={["Next.js", "TypeScript", "MongoDB", "Shadcn UI"]}
          githubLink="https://github.com/Navneet-divine"
          liveLink="https://eventhub-j1dh.onrender.com/"
          className="md:flex-row-reverse"
        />
      </div>
    </section>
  );
}
