"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { Menu, X, ArrowUpRight, ChevronDown, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { navVariants } from "@/lib/motion";
import { NAV_LINKS, SERVICES_NAV, PRODUCTS_NAV } from "@/lib/data";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
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

  const handleMouseEnter = (key: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setActiveDropdown(key);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

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
          <nav className="flex items-center justify-between" aria-label="Main Navigation">
            {/* Logo */}
            <Link href="/" className="flex items-center group" aria-label="Vertex Loop Pvt Ltd Homepage">
              <div className="relative w-32 sm:w-36 lg:w-40 transition-all duration-300 group-hover:scale-[1.02]">
                <img
                  src="/logo.png"
                  alt="Vertex Loop Pvt Ltd Technology Ecosystem"
                  className="w-full h-auto object-contain"
                />
              </div>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => {
                const isServices = link.href === "/services";
                const isProducts = link.href === "/products";
                const isExternal = link.href.startsWith("http");

                if (isServices || isProducts) {
                  const key = isServices ? "services" : "products";
                  const items = isServices ? SERVICES_NAV : PRODUCTS_NAV;

                  return (
                    <div
                      key={link.href}
                      className="relative py-1"
                      onMouseEnter={() => handleMouseEnter(key)}
                      onMouseLeave={handleMouseLeave}>
                      <Link
                        href={link.href}
                        className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 rounded-xl transition-all duration-200 hover:bg-white/60 flex items-center gap-1.5">
                        {link.label}
                        <ChevronDown size={14} className={cn("transition-transform duration-200", activeDropdown === key && "rotate-180")} />
                      </Link>

                      {/* Dropdown Menu with Hover Bridge */}
                      {activeDropdown === key && (
                        <div
                          className="absolute top-full left-0 pt-2 w-80 z-50"
                          onMouseEnter={() => handleMouseEnter(key)}
                          onMouseLeave={handleMouseLeave}>
                          <div className="p-3 bg-white/95 backdrop-blur-2xl rounded-2xl shadow-xl border border-slate-200/80 animate-in fade-in slide-in-from-top-2 duration-200">
                            <div className="flex flex-col gap-1">
                              {items.map((item) => {
                                const isItemExternal = item.href.startsWith("http");
                                if (isItemExternal) {
                                  return (
                                    <a
                                      key={item.href}
                                      href={item.href}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      onClick={() => setActiveDropdown(null)}
                                      className="p-3 rounded-xl hover:bg-slate-100/80 transition-colors group">
                                      <div className="text-sm font-semibold text-slate-900 group-hover:text-indigo-600 flex items-center justify-between">
                                        <span className="flex items-center gap-1.5">
                                          {item.label}
                                          <ExternalLink size={12} className="text-slate-400" />
                                        </span>
                                        <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                      </div>
                                      <p className="text-xs text-slate-500 mt-1 line-clamp-2">{item.description}</p>
                                    </a>
                                  );
                                }
                                return (
                                  <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setActiveDropdown(null)}
                                    className="p-3 rounded-xl hover:bg-slate-100/80 transition-colors group">
                                    <div className="text-sm font-semibold text-slate-900 group-hover:text-indigo-600 flex items-center justify-between">
                                      <span>{item.label}</span>
                                      <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                    <p className="text-xs text-slate-500 mt-1 line-clamp-2">{item.description}</p>
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                if (isExternal) {
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 rounded-xl transition-all duration-200 hover:bg-white/60 flex items-center gap-1">
                      <span>{link.label}</span>
                      <ExternalLink size={12} className="text-slate-400" />
                    </a>
                  );
                }

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 rounded-xl transition-all duration-200 hover:bg-white/60">
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Link href="/contact" className="btn-ghost text-[13px] py-2.5 px-5">
                Partner With Us
              </Link>
              <Link href="/ecosystem" className="btn-primary text-[13px] py-2.5 px-5">
                Explore Ecosystem
                <ArrowUpRight size={14} />
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl glass-card"
              aria-label="Toggle navigation menu">
              {mobileOpen ? (
                <X size={18} className="text-slate-900" />
              ) : (
                <Menu size={18} className="text-slate-900" />
              )}
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <motion.div
        initial={false}
        animate={mobileOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: "100%" }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-0 z-40 lg:hidden">
        <div
          className="absolute inset-0 bg-slate-950/40 backdrop-blur-md"
          onClick={() => setMobileOpen(false)}
        />
        <div className="absolute right-0 top-0 bottom-0 w-80 bg-white shadow-2xl p-6 flex flex-col pt-20 overflow-y-auto">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => {
              const isExternal = link.href.startsWith("http");
              if (isExternal) {
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileOpen(false)}
                    className="px-4 py-3 text-base font-semibold text-slate-800 hover:text-slate-950 rounded-xl transition-all hover:bg-slate-100 flex items-center justify-between">
                    <span>{link.label}</span>
                    <ExternalLink size={14} className="text-slate-400" />
                  </a>
                );
              }
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 text-base font-semibold text-slate-800 hover:text-slate-950 rounded-xl transition-all hover:bg-slate-100">
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="my-4 h-px bg-slate-200" />

          {/* Quick Product/Service Links on Mobile */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 px-4">
              Products
            </span>
            {PRODUCTS_NAV.map((p) => {
              const isExternal = p.href.startsWith("http");
              if (isExternal) {
                return (
                  <a
                    key={p.href}
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileOpen(false)}
                    className="px-4 py-2 text-sm text-slate-700 hover:text-indigo-600 transition-colors flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      {p.label}
                      <ExternalLink size={12} className="text-slate-400" />
                    </span>
                    <span className="text-[10px] font-mono bg-slate-100 px-2 py-0.5 rounded text-slate-500">{p.tag}</span>
                  </a>
                );
              }
              return (
                <Link
                  key={p.href}
                  href={p.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-2 text-sm text-slate-700 hover:text-indigo-600 transition-colors flex items-center justify-between">
                  <span>{p.label}</span>
                  <span className="text-[10px] font-mono bg-slate-100 px-2 py-0.5 rounded text-slate-500">{p.tag}</span>
                </Link>
              );
            })}
          </div>

          <div className="mt-auto pt-6 flex flex-col gap-3">
            <Link
              href="/contact"
              className="btn-ghost text-center justify-center text-sm py-3"
              onClick={() => setMobileOpen(false)}>
              Partner With Us
            </Link>
            <Link
              href="/ecosystem"
              className="btn-primary text-center justify-center text-sm py-3"
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
