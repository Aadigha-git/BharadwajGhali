"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter, Globe } from "lucide-react";
import Link from "next/link";

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/shubhamessier",
    color: "hover:text-[#333]",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/in/shubhamgaur10",
    color: "hover:text-[#0077b5]",
  },
  {
    name: "Twitter",
    icon: Twitter,
    href: "https://x.com/0xshubhamgaur",
    color: "hover:text-[#1DA1F2]",
  },
  {
    name: "Blog",
    icon: Globe,
    href: "https://gaurshubham.com/TZDOL",
    color: "hover:text-[#4CAF50]",
  },
  {
    name: "Email",
    icon: Mail,
    href: "mailto:shubham.gaur7116@gmail.com",
    color: "hover:text-[#ea4335]",
  },
];

export function Contact() {
  return (
    <div className="flex flex-wrap gap-4 sm:gap-6">
      {socialLinks.map((link, i) => (
        <motion.div
          key={link.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
        >
          <Link
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 text-sm sm:text-base text-muted-foreground transition-colors ${link.color} dark:hover:text-white`}
          >
            <link.icon className="h-5 w-5 sm:h-5 sm:w-5" />
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
