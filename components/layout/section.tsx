"use client";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

export function Section({ children, className = "" }: SectionProps) {
  return (
    <section className={`space-y-6 sm:space-y-8 ${className}`}>
      {children}
    </section>
  );
}