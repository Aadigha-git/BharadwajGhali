"use client";

import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

interface Achievement {
  title: string;
  description: string;
  duration: string;
}

export function AchievementSection() {
  const achievements = [
    {
      title: "National Entrepreneurship Challenge, IIT Bombay",
      description: "Top 10 out of 200 teams",
      duration: "Feb, 2023",
    },
    {
      title: "Techfest, IIT Bombay",
      description:
        "Participated in robotics competitions (Cozmoclench, Mesmerize). Designed maze-solving algorithms.",
      duration: "Dec, 2022",
    },
    {
      title: "EYRC ",
      description:
        "Utilized Python libraries such as turtlesim, gained ROS expertise.",
      duration: "Aug, 2022",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.0 }}
      viewport={{ once: true }}
      className="space-y-8 sm:space-y-10 lg:space-y-12"
    >
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium">
        Achievements
      </h2>
      <div className="space-y-6 sm:space-y-8 lg:space-y-10">
        {achievements.map((achievement) => (
          <motion.div
            key={achievement.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6"
          >
            <div className="mt-1">
              <Trophy className="h-5 w-5 text-muted-foreground" />
            </div>
            <div className="space-y-2 w-full">
              <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-medium tracking-tight max-w-[70%] sm:max-w-none">
                  {achievement.title}
                </h3>
                <span className="text-sm sm:text-base text-muted-foreground mt-2 sm:mt-0 sm:ml-4">
                  {achievement.duration}
                </span>
              </div>
              <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
                {achievement.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
