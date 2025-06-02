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
      <div className="flex justify-between items-center p-5 bg-[#2a2b3887] backdrop-blur-3xl h-16 rounded-xl w-[90%] md:w-[50%]">
        <div>
          <h1 className="text-white font-dancingScript text-2xl">Navneet</h1>
        </div>

        <div className="flex gap-3">
          <Link
            href="https://github.com/Navneet-divine"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="text-gray-500 hover:text-gray-300" size={22} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/navneet-kush/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="text-gray-500 hover:text-gray-300" size={22} />
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
