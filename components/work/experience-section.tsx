"use client";

import { motion } from "framer-motion";
import { Experience, experiences } from "@/data/experience";

export function ExperienceSection() {
  return (
    <section className="space-y-8">
      <h1 className="text-xl sm:text-2xl lg:text-4xl font-medium">
        Experience
      </h1>
      <div className="space-y-8 sm:space-y-10 lg:space-y-12">
        {experiences.map((job) => (
          <motion.div
            key={job.company}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0 }}
            viewport={{ once: true }}
            className="space-y-2"
          >
            <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-medium">
                {job.company}
              </h3>
              <span className="text-sm sm:text-base lg:text-lg text-muted-foreground mt-2 sm:mt-0 sm:ml-4">
                {job.duration}
              </span>
            </div>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground font-medium">
              {job.role}
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground">
              {job.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
