"use client";

import { motion } from "framer-motion";
import { Education, education } from "@/data/education";

export function EducationSection() {
  return (
    <section className="space-y-6 sm:space-y-8 lg:space-y-12">
      {/* Main Heading */}
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium">Education</h2>

      <div className="space-y-6 sm:space-y-8 lg:space-y-10">
        {education.map((edu) => (
          <motion.div
            key={edu.degree}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0 }}
            viewport={{ once: true }}
            className="space-y-2 sm:space-y-3"
          >
            {/* Degree and Duration */}
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-medium max-w-[70%] sm:max-w-none ">
                {edu.degree}
              </h3>
              <p className="text-sm sm:text-base lg:text-lg text-muted-foreground">
                {edu.duration}
              </p>
            </div>

            {/* School Name */}
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-[70%] sm:max-w-none">
              {edu.school}
            </p>

            {/* Grade (optional) */}
            {edu.grade && (
              <p className="text-sm sm:text-base lg:text-lg text-muted-foreground">
                ({edu.grade})
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
