import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="flex justify-between items-center w-full border-t-2 border-[#2a2b37] p-5">
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
    </footer>
  );
}
