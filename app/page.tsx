"use client";

import { motion } from "framer-motion";
import Head from "next/head";
import { HeroSection } from "@/components/home/hero-section";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <div className=" mt-4.5 container max-w-[1000px] mx-auto px-6 py-14">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0 }}
        viewport={{ once: true }}
        className="space-y-5"
      >
        <HeroSection />
        <h2 className="text-2xl pt-7 pb-1 sm:text-2xl sm:pt-2 lg:text-2xl font-medium ">
          Contact
        </h2>
        <Contact />
      </motion.div>
    </div>
  );
}
