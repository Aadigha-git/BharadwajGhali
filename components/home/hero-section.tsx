"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6 sm:space-y-8"
    >
      <h1 className="text-2xl sm:text-3xl lg:text-[28px] font-medium">
        Shubham Gaur
      </h1>
      <div className="space-y-6 sm:space-y-8">
        <div className="space-y-4 text-sm sm:text-base lg:text-[16px] leading-relaxed text-muted-foreground">
          <p>Full-Stack Engineer specializing in AI/ML and Cybersecurity</p>
          <p>
            Since my childhood, I've been fascinated by computers and
            technology. Starting with PowerPoint at age 10, I've grown into a
            passionate developer building secure, scalable applications and
            advancing AI technologies.
          </p>
          <p>
            My expertise spans full-stack development, artificial intelligence,
            and cybersecurity. I focus on creating robust solutions that combine
            cutting-edge technology with practical applications.
          </p>
          <p>
            Currently, I'm working on advancing reinforcement learning
            applications in cybersecurity while building scalable web
            applications that make a difference.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 lg:text-[16px] sm:gap-4">
          <Button
            asChild
            variant="outline"
            className="group text-base sm:text-lg"
          >
            <Link href="/work">
              <p>My Work</p>
              <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="group text-base sm:text-lg"
          >
            <Link href="/about">
              <p>About Me</p>
              <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="group text-base sm:text-lg"
          >
            <Link
              href="/resume.pdf"
              target="https://gaurshubham.com/resume"
              rel="noopener noreferrer"
            >
              <p>Resume</p>
              <FileText className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
