"use client"; // important if you're using Next.js App Router with Client Components

import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Topbar() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex justify-center w-full fixed top-15 z-50"
    >
      <div className="flex justify-between p-5 bg-[#2a2b3887] h-16 rounded-xl w-[90%] md:w-[50%]">
        <div>
          <h1 className="text-white italic">Navneet</h1>
        </div>
        <div className="text-white cursor-pointer flex gap-3">
          <div>
            <p>About</p>
          </div>
          <div>
            <p>Projects</p>
          </div>
          <div>
            <p>Skills</p>
          </div>
        </div>
        <div className="flex gap-3">
          <Link href="https://github.com/Navneet-divine">
            <Github className="text-gray-500 hover:text-gray-300" size={22} />
          </Link>
          <Link href="https://www.linkedin.com/in/navneet-kush/">
            <Linkedin className="text-gray-500 hover:text-gray-300" size={22} />
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
