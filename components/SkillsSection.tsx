"use client";
import { motion } from "framer-motion";
import { Code2, Database, Palette, Zap, Server, Package } from "lucide-react";

export default function SkillsSection() {
  const skillCategories = [
    {
      id: 1,
      category: "Frontend",
      icon: Code2,
      color: "text-blue-400",
      skills: [
        { name: "Next.js", link: "https://nextjs.org" },
        { name: "React.js", link: "https://react.dev" },
        { name: "TypeScript", link: "https://www.typescriptlang.org" },
        { name: "TailwindCSS", link: "https://tailwindcss.com" },
        { name: "Shadcn UI", link: "https://ui.shadcn.com" },
        { name: "Mantine UI", link: "https://mantine.dev" },
      ],
    },
    {
      id: 2,
      category: "Backend",
      icon: Server,
      color: "text-green-400",
      skills: [
        { name: "Node.js", link: "https://nodejs.org" },
        { name: "Express", link: "https://expressjs.com" },
        { name: "Mongoose", link: "https://mongoosejs.com" },
        { name: "Prisma", link: "https://www.prisma.io" },
      ],
    },
    {
      id: 3,
      category: "Database",
      icon: Database,
      color: "text-purple-400",
      skills: [
        { name: "MongoDB", link: "https://www.mongodb.com" },
        { name: "Postgres", link: "https://www.postgresql.org" },
      ],
    },
    {
      id: 4,
      category: "Tools & DevOps",
      icon: Package,
      color: "text-orange-400",
      skills: [
        { name: "Docker", link: "https://www.docker.com" },
        { name: "Figma", link: "https://www.figma.com" },
      ],
    },
    {
      id: 5,
      category: "AI & Advanced",
      icon: Zap,
      color: "text-pink-400",
      skills: [
        { name: "LLMs Integration", link: "https://platform.openai.com" },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="skills" className="relative py-20">
      <div className="flex justify-center pt-10">
        <motion.h1
          className="text-5xl sm:text-6xl font-poppins font-bold text-white gradient-text"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Skills
        </motion.h1>
      </div>

      <div className="px-5 md:px-14 lg:px-32 min-[530px]:px-16 mt-20">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.id}
                variants={itemVariants}
                className="group relative border border-[#404050] rounded-lg p-6 bg-[#1a1a2e]/40 backdrop-blur-sm hover:border-[#6366f1] hover:bg-[#1a1a2e]/60 transition-all duration-300"
              >
                {/* Gradient border effect on hover */}
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="flex items-center gap-3 mb-4">
                  <IconComponent
                    className={`${category.color} flex-shrink-0`}
                    size={24}
                  />
                  <h3 className="text-lg font-bold text-white">
                    {category.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <motion.a
                      key={idx}
                      href={skill.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.3,
                        delay: idx * 0.05,
                      }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                      className="px-2 py-1 text-[10px] md:text-xs rounded-full bg-[#2a2a3e] text-gray-300 border border-[#6366f1]/30"
                    >
                      {skill.name}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Core Competencies Summary */}
        <motion.div
          className="mt-16 border border-[#404050] rounded-lg p-6 md:p-8 bg-[#1a1a2e]/40 backdrop-blur-sm"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Zap className="text-yellow-400" size={20} />
            Core Expertise
          </h3>
          <p className="text-gray-300 leading-relaxed">
            Specialized in building full-stack web applications with modern
            JavaScript frameworks. Proficient in designing responsive UIs with
            advanced CSS frameworks and creating scalable backend systems.
            Experienced with database design, ORM tools, and integrating AI
            capabilities into applications. Passionate about learning new
            technologies and continuously improving my skill set to deliver
            high-quality software solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
