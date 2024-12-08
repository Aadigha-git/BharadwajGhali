"use client";

import { motion } from "framer-motion";
import { ExperienceSection } from "@/components/work/experience-section";
import { EducationSection } from "@/components/work/education-section";
import { SkillsSection } from "@/components/work/skills-section";
import { ProjectSection } from "@/components/work/project-section";
import { AchievementSection } from "@/components/work/achievement-section";

export default function WorkPage() {
  return (
    <div className="container max-w-[1000px] mx-auto px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0 }}
        viewport={{ once: true }}
        className="space-y-16"
      >
        <ExperienceSection />
        <EducationSection />
        <SkillsSection />
        <ProjectSection />
        <AchievementSection />
      </motion.div>
    </div>
  );
}
