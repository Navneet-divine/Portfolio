import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  image: StaticImageData;
  title: string;
  description: string;
  stacks: string[];
  githubLink: string;
  liveLink: string;
  className?: string;
}
const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  title,
  description,
  stacks,
  githubLink,
  liveLink,
  className,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
      viewport={{ once: true }}
      className={`flex justify-between flex-col items-center lg:flex-row gap-10 ${className} pt-30`}
    >
      <div className="border-2 p-4 border-[#2a2b37] rounded-xl sm:w-[80%] md:w-[75%] lg:w-[50%] xl:w-[45%]">
        <Link href={liveLink} target="_blank" rel="noopener noreferrer">
          <Image
            src={image}
            alt="Project Image"
            className="w-full h-full object-fit"
          />
        </Link>
      </div>
      <div className="flex flex-col gap-8 justify-center items-center p-4 sm:w-[80%] md:w-[75%] lg:w-[45%]">
        <div>
          <h1 className="text-5xl font-bold font-poppins gradient-text">
            {title}
          </h1>
        </div>
        <div className="text-center bg-[#1e1e30] p-4 shadow-2xl">
          <p className="text-sm font-poppins text-gray-400 p-4">
            {description}
          </p>
        </div>
        {/* stack */}
        <div className="flex text-gray-300 text-sm font-semibold font-montserrat uppercase flex-wrap gap-4 justify-center items-center">
          {stacks.map((stack, index) => (
            <span key={index}>{stack}</span>
          ))}
        </div>
        <div className="flex gap-4">
          <div>
            <Link href={githubLink} target="_blank" rel="noopener noreferrer">
              <Github className="text-gray-500 hover:text-gray-300" size={22} />
            </Link>
          </div>
          <div>
            <Link href={liveLink} target="_blank" rel="noopener noreferrer">
              <ExternalLink
                className="cursor-pointer text-gray-500 hover:text-gray-300"
                size={22}
              />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
