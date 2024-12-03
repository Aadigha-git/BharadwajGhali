"use client";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { HeroSection } from "@/components/home/hero-section";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <Container>
      <div className="py-8 sm:py-12 lg:py-16 space-y-8 sm:space-y-12 lg:space-y-16">
        <Section>
          <HeroSection />
        </Section>

        <Section>
          <h2 className="text-2xl sm:text-2xl lg:text-[3xl] font-medium">
            Contact
          </h2>
          <Contact />
        </Section>
      </div>
    </Container>
  );
}
