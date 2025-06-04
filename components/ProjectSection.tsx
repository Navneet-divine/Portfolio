"use client";

import { motion } from "framer-motion";

import ProjectCard from "./ProjectCard";
import projectOne from "@/public/images/project-1.png";
import projectTwo from "@/public/images/project-2.png";

export default function ProjectSection() {
  return (
    <section id="projects" className="mt-18">
      <div className="flex justify-center pt-30">
        <motion.h1
          className="text-5xl sm:text-6xl  font-poppins font-bold text-white gradient-text"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          My Projects
        </motion.h1>
      </div>

      <div className="px-5 md:px-14 lg:px-32 min-[530px]:px-16">
        <ProjectCard
          image={projectOne}
          title="Eventhub"
          description="A place to find, join, and host Events with a clean and easy to use user interface. Loaded with search capabilities and filters to find the best events you want without wasting time and many more."
          stacks={["Next.js", "TypeScript", "MongoDB", "Shadcn UI"]}
          githubLink="https://github.com/Navneet-divine/eventhub"
          liveLink="https://eventhub-j1dh.onrender.com/"
          className=""
        />
        <ProjectCard
          image={projectTwo}
          title="Poster"
          description="Poster is a modern full-stack blog platform where users can create, update, delete, and like posts. Built with a sleek UI and powerful technologies, Poster offers a smooth and intuitive user experience for sharing thoughts and engaging with content."
          stacks={["Next.js", "TypeScript", "MongoDB", "Mantine UI"]}
          githubLink="https://github.com/Navneet-divine/poster"
          liveLink="https://poster-r92j.onrender.com/"
          className="lg:flex-row-reverse"
        />
      </div>
    </section>
  );
}
