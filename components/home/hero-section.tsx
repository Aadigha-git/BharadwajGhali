"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, GraduationCap } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-2 sm:space-y-4"
    >
      <h1 className="text-2xl pb-3 sm:text-2xl lg:text-[28px] font-medium ">
        Bharadwaj Ghali
      </h1>
      <div className="space-y-2 sm:space-y-8">
        <div className="space-y-2 text-sm sm:text-base lg:text-[16px] leading-relaxed text-muted-foreground">
          <p>
            I am a student, data, and finance enthusiast. I believe in
            the philosophy, &quot;Take every opportunity as a learning experience." 
            Outside of programming, I enjoy spending time offline and learning about newer innovations.
          </p>
          <p>
            In data, I see a dynamic and impactful craft where logic and analysis refine raw facts to rich actionable value.
            It’s about innovating and experimenting freely,
            creating unique ways to analyze data.
          </p>
        </div>

        <div className="flex pt-2 flex-wrap gap-2.5 lg:text-[16px] sm:gap-4">
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
              href="https://scholar.google.com/citations?user=F4y__aAAAAAJ&hl=en"
              rel="noopener noreferrer"
            >
              <p>Google Scholar</p>
              <GraduationCap className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="group text-base sm:text-lg"
          >
            <Link
              href="https://drive.google.com/file/d/1-hae_GAfYmCup_PkVpxTe9cAnnJdFXOE/view?usp=sharing"
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
