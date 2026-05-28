"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { navVariants } from "@/lib/motion";
import { NAV_LINKS } from "@/lib/data";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 40);
  });

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        variants={navVariants}
        initial="hidden"
        animate="visible"
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled ? "py-3" : "py-6",
        )}>
        <div
          className={cn(
            "mx-4 md:mx-8 lg:mx-16 rounded-2xl transition-all duration-500",
            isScrolled ? "glass-card-strong px-6 py-3" : "px-6 py-2",
          )}>
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="
    flex
    items-center
    group
  ">
              <div
                className="
      relative

      w-32
      sm:w-36
      lg:w-40

      transition-all
      duration-300

      group-hover:scale-[1.02]
    ">
                <img
                  src="/logo.png"
                  alt="Aura Technologies"
                  className="
        w-full
        h-auto
        object-contain
      "
                />
              </div>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-slate-mid hover:text-slate-ink rounded-xl transition-all duration-200 hover:bg-white/50">
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                href="#contact"
                className="btn-ghost text-[13px] py-2.5 px-5">
                Partner With Us
              </Link>
              <Link
                href="#ecosystem"
                className="btn-primary text-[13px] py-2.5 px-5">
                Explore Ecosystem
                <ArrowUpRight size={14} />
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl glass-card"
              aria-label="Toggle menu">
              {mobileOpen ? (
                <X size={18} className="text-slate-ink" />
              ) : (
                <Menu size={18} className="text-slate-ink" />
              )}
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={mobileOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: "100%" }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-0 z-40 md:hidden">
        <div
          className="absolute inset-0 bg-white/80 backdrop-blur-3xl"
          onClick={() => setMobileOpen(false)}
        />
        <div className="absolute right-0 top-0 bottom-0 w-80 bg-white/90 backdrop-blur-3xl shadow-glass-xl p-8 flex flex-col pt-24">
          <div className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3.5 text-lg font-medium text-slate-mid hover:text-slate-ink rounded-xl transition-all hover:bg-pearl-100">
                {link.label}
              </Link>
            ))}
          </div>
          <div className="mt-auto flex flex-col gap-3">
            <Link
              href="#contact"
              className="btn-ghost text-center justify-center"
              onClick={() => setMobileOpen(false)}>
              Partner With Us
            </Link>
            <Link
              href="#ecosystem"
              className="btn-primary text-center justify-center"
              onClick={() => setMobileOpen(false)}>
              Explore Ecosystem
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  );
}
