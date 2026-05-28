"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { staggerContainerVariants, staggerItemVariants } from "@/lib/motion";
import { DIVISIONS } from "@/lib/data";

const DIVISION_COLORS = {
  academy: "#4a7fa5",
  "ai-products": "#7c6fad",
  "it-services": "#3d8c7a",
  software: "#a07830",
  "digital-marketing": "#b04a4a",
};

function DivisionPill({ division }: { division: (typeof DIVISIONS)[0] }) {
  const color = DIVISION_COLORS[division.id as keyof typeof DIVISION_COLORS];
  return (
    <motion.div
      variants={staggerItemVariants}
      className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/70 shadow-glass hover:shadow-glass-lg transition-all duration-300 hover:-translate-y-0.5 cursor-default group">
      <span
        className="w-2.5 h-2.5 rounded-full flex-shrink-0 transition-transform duration-300 group-hover:scale-125"
        style={{ backgroundColor: color }}
      />
      <span className="text-sm font-medium text-slate-mid group-hover:text-slate-ink transition-colors">
        {division.title}
      </span>
    </motion.div>
  );
}

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-12 md:py-10 overflow-hidden"
      aria-label="Who We Are">
      {/* Background */}
      <motion.div style={{ y: bgY }} className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#f6f4f0] via-[#f0ede8] to-[#edeae4]" />
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full bg-lavender-soft/40 blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-sky-soft/40 blur-[80px]" />
      </motion.div>

      <div className="relative z-10 section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Text content */}
          <div>
            <AnimatedSection variant="fadeUp" className="mb-6">
              <SectionLabel accent="lavender">Who We Are</SectionLabel>
            </AnimatedSection>

            <AnimatedSection variant="fadeUp" delay={0.08}>
              <h2 className="text-display font-semibold text-slate-ink text-4xl md:text-5xl lg:text-6xl leading-[1.08] tracking-[-0.03em] mb-8">
                A single ecosystem.
                <br />
                <span className="italic font-normal text-[#7c6fad]">
                  Infinite leverage.
                </span>
              </h2>
            </AnimatedSection>

            <AnimatedSection variant="fadeUp" delay={0.14}>
              <p className="text-slate-mid text-lg leading-relaxed mb-6 font-light">
                Vertex Loop is not a collection of services — it is an
                interconnected technology ecosystem where five elite divisions
                operate in strategic synergy. Each division is a standalone
                powerhouse. Together, they create{" "}
                <strong className="font-medium text-slate-ink">
                  compounding advantage
                </strong>{" "}
                for every client we serve.
              </p>
            </AnimatedSection>

            <AnimatedSection variant="fadeUp" delay={0.2}>
              <p className="text-slate-mid text-base leading-relaxed mb-10 font-light">
                We were founded on a single conviction: the most complex
                technology challenges require not just execution, but
                architectural thinking, cross-domain mastery, and an unrelenting
                focus on outcomes. Eight years and 120+ clients later, that
                conviction is now our track record.
              </p>
            </AnimatedSection>

            <AnimatedSection variant="fadeUp" delay={0.26}>
              <a href="#ecosystem" className="btn-primary inline-flex">
                Explore the Ecosystem
                <ArrowUpRight size={15} />
              </a>
            </AnimatedSection>
          </div>

          {/* Right: Visual ecosystem representation */}
          <div className="relative">
            <AnimatedSection variant="scaleIn" delay={0.15}>
              {/* Central orb */}
              <div className="relative flex items-center justify-center">
                <div className="relative w-full max-w-lg mx-auto aspect-square">
                  {/* Background glow */}
                  <div className="absolute inset-8 rounded-full bg-gradient-to-br from-sky-soft via-lavender-soft to-mint-soft opacity-50 blur-2xl" />

                  {/* Global Connecting Lines Layer (FIXED) */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
                    {DIVISIONS.map((division, i) => {
                      const angle =
                        (i / DIVISIONS.length) * 2 * Math.PI - Math.PI / 2;
                      const radius = 42; // % of container
                      const x = 50 + radius * Math.cos(angle);
                      const y = 50 + radius * Math.sin(angle);
                      const color =
                        DIVISION_COLORS[
                          division.id as keyof typeof DIVISION_COLORS
                        ];

                      return (
                        <motion.line
                          key={`line-${division.id}`}
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 0.25 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.6,
                            delay: 0.4 + i * 0.1,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          x1="50%"
                          y1="50%"
                          x2={`${x}%`}
                          y2={`${y}%`}
                          stroke={color}
                          strokeWidth="1.5"
                          strokeDasharray="4 4"
                        />
                      );
                    })}
                  </svg>

                  {/* Center hub */}
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <div className="relative flex items-center justify-center">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 60,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="absolute w-28 h-28 rounded-full border border-dashed border-slate-ink/10"
                      />

                      <div className="w-28 h-28 rounded-full glass-card-strong flex flex-col items-center justify-center shadow-glass-lg">
                        <div className="text-display font-bold text-slate-ink text-2xl leading-none">
                          V
                        </div>

                        <div className="text-[9px] font-mono text-slate-dim tracking-wider uppercase mt-1">
                          Loop
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Division nodes positioned around the center */}
                  {DIVISIONS.map((division, i) => {
                    // =====================================
                    // RESPONSIVE RADIUS
                    // =====================================

                    const radius =
                      typeof window !== "undefined"
                        ? window.innerWidth < 640
                          ? 32
                          : window.innerWidth < 1024
                            ? 38
                            : 42
                        : 42;

                    const angle =
                      (i / DIVISIONS.length) * 2 * Math.PI - Math.PI / 2;

                    const x = 50 + radius * Math.cos(angle);

                    const y = 50 + radius * Math.sin(angle);

                    const color =
                      DIVISION_COLORS[
                        division.id as keyof typeof DIVISION_COLORS
                      ];

                    return (
                      <div
                        key={division.id}
                        className="absolute z-20"
                        style={{
                          left: `${x}%`,
                          top: `${y}%`,
                        }}>
                        {/* ================================= */}
                        {/* NODE WRAPPER */}
                        {/* ================================= */}

                        <div
                          className="
          relative
          -translate-x-1/2
          -translate-y-1/2
          flex
          flex-col
          items-center
        ">
                          {/* ================================= */}
                          {/* CARD */}
                          {/* ================================= */}

                          <motion.div
                            initial={{
                              opacity: 0,
                              scale: 0,
                            }}
                            whileInView={{
                              opacity: 1,
                              scale: 1,
                            }}
                            viewport={{
                              once: true,
                            }}
                            transition={{
                              duration: 0.5,
                              delay: 0.4 + i * 0.1,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                            animate={{
                              y: [0, -4, 0],
                            }}
                            className="
                              relative

                              w-12 h-12
                              sm:w-14 sm:h-14
                              md:w-16 md:h-16

                              rounded-2xl
                              glass-card

                              flex
                              items-center
                              justify-center

                              shadow-glass

                              overflow-hidden

                              backdrop-blur-xl
                            "
                            style={{
                              borderColor: `${color}25`,
                            }}>
                            {/* INNER GLOW */}

                            <div
                              className="
                                absolute
                                inset-0
                                opacity-20
                              "
                              style={{
                                background: `
                                  radial-gradient(
                                    circle at center,
                                    ${color},
                                    transparent 70%
                                  )
                                `,
                              }}
                            />

                            {/* DOT */}

                            <motion.span
                              animate={{
                                scale: [1, 1.2, 1],
                              }}
                              transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: i * 0.6,
                              }}
                              className="
                                relative
                                z-10

                                w-2.5 h-2.5
                                sm:w-3 sm:h-3

                                rounded-full
                              "
                              style={{
                                backgroundColor: color,
                                opacity: 0.9,
                              }}
                            />
                          </motion.div>

                          {/* ================================= */}
                          {/* LABEL */}
                          {/* ================================= */}

                          <div
                            className="
                            mt-2
                            sm:mt-3

                            text-center
                            whitespace-nowrap

                            text-[8px]
                            sm:text-[9px]
                            md:text-[10px]

                            font-mono

                            tracking-[0.18em]
                            uppercase

                            leading-none
                          "
                            style={{
                              color,
                            }}>
                            {division.id === "ai-products"
                              ? "AI Products"
                              : division.title}
                          </div>
                        </div>
                      </div>
                    );
                  })}

                  {/* Outer orbit ring */}
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{
                      duration: 90,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-0 z-0 rounded-full border border-dashed border-slate-ink/5"
                  />
                  <div className="absolute inset-4 z-0 rounded-full border border-slate-ink/5" />
                </div>
              </div>
            </AnimatedSection>

            {/* Division pills */}
            <motion.div
              variants={staggerContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-10 flex flex-wrap gap-2.5 justify-center relative z-20">
              {DIVISIONS.map((division) => (
                <DivisionPill key={division.id} division={division} />
              ))}
            </motion.div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-24 divider-gradient" />

      </div>
    </section>
  );
}
