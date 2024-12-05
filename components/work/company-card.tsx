"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

interface CompanyCardProps {
  company: string;
  role: string;
  duration: string;
  description: string;
}

export function CompanyCard({
  company,
  role,
  duration,
  description,
}: CompanyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.0 }}
      viewport={{ once: true }}
    >
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between text-sm sm:text-base md:text-lg">
            <span>{company}</span>
            <span className="text-xs sm:text-sm text-muted-foreground">
              {duration}
            </span>
          </CardTitle>
          <p className="text-xs sm:text-sm md:text-base font-medium text-muted-foreground">
            {role}
          </p>
        </CardHeader>
        <CardContent>
          <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
            {description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
