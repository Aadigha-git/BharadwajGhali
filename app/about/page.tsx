"use client";

import { motion } from "framer-motion";
import { books } from "@/data/about";
import { Carousel } from "@/components/carousel";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

export default function AboutPage() {
  return (
    <Container>
      <div className="mt-4 py-8 sm:py-12 lg:py-16 space-y-3 sm:space-y-12 lg:space-y-16">
        <Section>
          <motion.h1
            className="text-2xl sm:text-2xl lg:text-[28px] font-medium"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h1>

          <motion.div
            className="space-y-4 sm:space-y-8 text-sm sm:xs lg:text-[16px] leading-relaxed text-muted-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6 sm:space-y-8">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                As life progressed, I have grown a keen fascination toward computers, finance and
                technology. As a result, I spent years learning
                about them, fixing my computer, and taking apart broken tablets. I first learnt
                programming using Visual Basic during my school, thanks to Windows XP
                & computer viruses I learnt the habit of fixing errors, early in
                life.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                Other than programming I take pleasure in travelling, exploring, and observing life.
                I enjoy dabbling in the philosophies of human kind and exploring different schools of thought. 
                In my downtime, I enjoy watching movies and learning about finance through podcasts. 
              </motion.p>
            </div>
          </motion.div>
        </Section>

        <Section>
          <motion.h2
            className="text-2xl sm:text-xs mt-6 lg:text-[28px] font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            viewport={{ once: true }}
          >
            Reading List
          </motion.h2>

          <motion.div
            className="space-y-1 sm:space-y-1 text-sm sm:text-xs lg:text-[16px] text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1 }}
            viewport={{ once: true }}
          >
            {books.map((book, index) => (
              <motion.p
                key={book}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.1 }}
                viewport={{ once: true }}
              >
                {book}
              </motion.p>
            ))}
          </motion.div>
        </Section>
        
      </div>
    </Container>
  );
}
