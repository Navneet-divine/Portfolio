"use client";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import Link from "next/link";

export default function ExpSection() {
  const experiences = [
    {
      id: 1,
      title: "Software Engineer",
      company: "Dume AI",
      companyLink: "https://www.dume.ai/#hero",
      type: "Internship",
      duration: "July 2025 - August 2025",
      location: "India",
      description:
        "Contributed to full-stack development projects, worked with modern web technologies and collaborated with a talented team in a remote environment.",
      skills: [
        { name: "Next.js", link: "https://nextjs.org" },
        { name: "React.js", link: "https://react.dev" },
        { name: "TypeScript", link: "https://www.typescriptlang.org" },
        { name: "MongoDB", link: "https://www.mongodb.com" },
        { name: "Docker", link: "https://www.docker.com" },
        { name: "Vercel AI SDK", link: "https://sdk.vercel.ai" },
        { name: "GCP", link: "https://cloud.google.com" },
      ],
    },
    {
      id: 2,
      title: "Junior MERN Stack Developer",
      company: "App Mechanic",
      companyLink: "https://appmechanic.in/",
      type: "Full-time",
      duration: "September 2025 - Present",
      location: "London, Ontario",
      description:
        "Building robust full-stack applications using the MERN stack. Developing responsive user interfaces and maintaining scalable backend solutions.",
      skills: [
        { name: "Firebase", link: "https://firebase.google.com" },
        { name: "MongoDB", link: "https://www.mongodb.com" },
        { name: "Postgres", link: "https://www.postgresql.org" },
        { name: "Next.js", link: "https://nextjs.org" },
        { name: "TypeScript", link: "https://www.typescriptlang.org" },
        {
          name: "LLMs Integration (OpenAI)",
          link: "https://platform.openai.com",
        },
        {
          name: "Vector Databases (MongoDB Atlas Search)",
          link: "https://www.mongodb.com/products/platform/atlas",
        },
        {
          name: "DigitalOcean App Platform",
          link: "https://www.digitalocean.com/products/app-platform",
        },
      ],
    },
  ];

  return (
    <section id="experience" className="relative py-20">
      <div className="flex justify-center pt-10 mb-20">
        <motion.h1
          className="text-5xl sm:text-6xl font-poppins font-bold text-white gradient-text"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Experience
        </motion.h1>
      </div>

      <div className="px-5 md:px-14 lg:px-32 min-[530px]:px-16">
        {/* Timeline Container */}
        <div className="relative">
          {/* Center vertical line - hidden on mobile, visible on md+ */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-600 to-indigo-400 transform -translate-x-1/2"></div>

          {/* Mobile timeline line - visible only on mobile */}
          <div className="md:hidden absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-600 to-indigo-400"></div>

          <div className="space-y-12 md:space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                className={`flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } gap-8 md:gap-12 items-stretch relative`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  delay: index * 0.2,
                }}
                viewport={{ once: true }}
              >
                {/* Timeline dot */}
                <motion.div
                  className="absolute left-2 md:left-1/2 top-8 md:top-12 w-6 h-6 md:w-5 md:h-5 bg-indigo-500 rounded-full border-4 border-[#0f0f1e] transform md:-translate-x-1/2 z-10 shadow-lg shadow-indigo-500/50"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                ></motion.div>

                {/* Content on desktop - takes 50% width, adjusted for mobile */}
                <div className="flex-1 ml-12 md:ml-0">
                  <motion.div
                    className="border border-[#404050] rounded-lg p-6 md:p-8 bg-[#1a1a2e]/40 backdrop-blur-sm hover:border-[#6366f1] transition-all duration-300 h-full"
                    whileHover={{ scale: 1.02, borderColor: "#6366f1" }}
                  >
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="flex items-center gap-3">
                        <Briefcase
                          className="text-indigo-400 flex-shrink-0"
                          size={24}
                        />
                        <div>
                          <h3 className="text-2xl font-bold text-white">
                            {exp.title}
                          </h3>
                          <p className="text-lg text-indigo-300 font-semibold">
                            <Link href={exp.companyLink} target="_blank">
                              {exp.company}
                            </Link>
                          </p>
                        </div>
                      </div>
                      <span className="text-[10px] shrink-0 md:text-xs px-2 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/40">
                        {exp.type}
                      </span>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 text-gray-400 text-sm mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <p className="text-gray-300 leading-relaxed mb-4 text-base">
                      {exp.description}
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, idx) => (
                        <a
                          key={idx}
                          href={skill.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-2 py-1 text-[10px] md:text-xs rounded-full bg-[#2a2a3e] text-gray-300 border border-[#6366f1]/30"
                        >
                          {skill.name}
                        </a>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Spacer for mobile */}
                <div className="flex-1 hidden md:block"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
