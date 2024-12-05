"use client";

import { motion } from "framer-motion";
import { Github, Globe } from "lucide-react";
import Link from "next/link";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
}

export function ProjectSection() {
  const projects = [
    {
      title: "Meetster",
      description:
        "Meetster aims to making scheduling IRL meets, easy and fun. Meetster is currently in prototype development, and can be waitlisted.",
      technologies: ["React + Vite", "Supabase", "Typescript"],
      demo: "https://meetster.gaurshubham.com",
    },
    {
      title: "Anti AI Website",
      description:
        "Built company website and HR management system, streamlining 6,000+ monthly applications.",
      technologies: ["React", "Next.js", "PostgreSQL", "Javascript", "AWS"],
      demo: "https://anti.ai",
    },
    {
      title: "CyberBattleSim (Microsoft)",
      description:
        "Enhanced simulation functionalities and refined neural network algorithms during research internship.",
      technologies: ["Python", "PyTorch", "Reinforcement Learning"],
      github: "https://github.com/microsoft/CyberBattleSim",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.0 }}
      viewport={{ once: true }}
      className="space-y-12"
    >
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium">Projects</h2>
      <div className="space-y-16">
        {projects.map((project) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-medium">
                {project.title}
              </h3>
              <div className="flex gap-4">
                {project.github && (
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </Link>
                )}
                {project.demo && (
                  <Link
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Globe className="h-5 w-5" />
                  </Link>
                )}
              </div>
            </div>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-sm sm:text-base text-muted-foreground bg-secondary/50 px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
