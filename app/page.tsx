"use client";

import { motion } from "framer-motion";
import Head from "next/head";
import { HeroSection } from "@/components/home/hero-section";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <div className="mt-9 container mx-auto px-4 sm:px-6 lg:px-8  sm:py-8 lg:py-12 max-w-full sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1000px]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0 }}
        viewport={{ once: true }}
        className="space-y-5"
      >
        <HeroSection />
        <h2 className="text-2xl pt-6 sm:text-2xl sm:pt-2 lg:text-2xl font-medium ">
          Contact
        </h2>
        <Contact />
      </motion.div>
    </div>
  );
}
