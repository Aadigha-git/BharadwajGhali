"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Globe } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
}

export function ProjectCard({
  title,
  description,
  technologies,
  github,
  demo,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.0 }}
      viewport={{ once: true }}
    >
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">{description}</p>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex gap-2">
          {github && (
            <Button variant="outline" size="sm" asChild>
              <Link href={github} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Link>
            </Button>
          )}
          {demo && (
            <Button variant="outline" size="sm" asChild>
              <Link href={demo} target="_blank" rel="noopener noreferrer">
                <Globe className="mr-2 h-4 w-4" />
                Live Demo
              </Link>
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
}
