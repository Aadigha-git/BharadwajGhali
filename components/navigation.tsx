"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./theme-toggle";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "https://gaurshubham.com/TZDOL", label: "Blog" },
  { href: "/about", label: "About" },
];

export function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur"
    >
      <div className="container max-w-[900px] h-14 flex items-center mt-6 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-sm sm:text-base lg:text-[16px] font-medium hover:text-foreground/80 transition-colors"
        >
          Shubham Gaur
        </Link>
        <div className="flex-1" />

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="h-5 w-5" />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 mr-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm sm:text-base lg:text-[16px] transition-colors hover:text-foreground/80",
                pathname === link.href
                  ? "text-foreground"
                  : "text-muted-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <ThemeToggle />

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-sm border-b md:hidden">
            <nav className="container max-w-[900px] py-4 px-4 sm:px-6 flex flex-col gap-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    "text-sm sm:text-base transition-colors hover:text-foreground/80",
                    pathname === link.href
                      ? "text-foreground"
                      : "text-muted-foreground"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </motion.header>
  );
}
