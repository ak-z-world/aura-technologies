"use client";

import { useState, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  Zap,
  Layers,
  Brain,
  Network,
  Users,
  Target,
  X,
  Check,
  ArrowUpRight,
  Quote,
  Star,
} from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/ui/PageHero";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { staggerContainerVariants, staggerItemVariants } from "@/lib/motion";
import { VALUE_PROPOSITIONS } from "@/lib/data";

const ICON_MAP: Record<
  string,
  React.ComponentType<{ size?: number; style?: React.CSSProperties }>
> = {
  Zap,
  Layers,
  Brain,
  Network,
  Users,
  Target,
};

type ComparisonValue = boolean | "partial";

const COMPARISON_ROWS: {
  trait: string;
  vertex: ComparisonValue;
  agency: ComparisonValue;
  freelancer: ComparisonValue;
  inhouse: ComparisonValue;
}[] = [
  {
    trait: "Cross-domain expertise",
    vertex: true,
    agency: false,
    freelancer: false,
    inhouse: "partial",
  },
  {
    trait: "AI-native processes",
    vertex: true,
    agency: false,
    freelancer: false,
    inhouse: false,
  },
  {
    trait: "Architectural depth",
    vertex: true,
    agency: false,
    freelancer: "partial",
    inhouse: true,
  },
  {
    trait: "Integrated training + delivery",
    vertex: true,
    agency: false,
    freelancer: false,
    inhouse: false,
  },
  {
    trait: "Outcome accountability",
    vertex: true,
    agency: false,
    freelancer: false,
    inhouse: "partial",
  },
  {
    trait: "Speed to first delivery",
    vertex: true,
    agency: "partial",
    freelancer: true,
    inhouse: false,
  },
  {
    trait: "Global scalability",
    vertex: true,
    agency: "partial",
    freelancer: false,
    inhouse: false,
  },
  {
    trait: "Full-lifecycle support",
    vertex: true,
    agency: false,
    freelancer: false,
    inhouse: "partial",
  },
];

// const TESTIMONIALS = [
//   {
//     name: 'Rajesh Nair',
//     role: 'CTO, FinStack Technologies',
//     quote:
//       "Vertex Loop doesn't just understand technology. They understand the intersection of technology and business outcomes. Working across three of their divisions simultaneously transformed what was possible for our team.",
//     accent: '#4a7fa5',
//     bg: 'from-sky-soft to-sky-mist',
//     result: '3× faster shipping velocity',
//   },
//   {
//     name: 'Ananya Pillai',
//     role: 'Founder, LegalEdge',
//     quote:
//       "We interviewed seven firms before choosing Vertex Loop. The difference was obvious in the first architecture conversation — they were thinking about problems we hadn't even asked about yet.",
//     accent: '#7c6fad',
//     bg: 'from-lavender-soft to-lavender-mist',
//     result: '89% reduction in review time',
//   },
//   {
//     name: 'Kiran Shetty',
//     role: 'VP Engineering, RegionBank',
//     quote:
//       "In a regulated industry, we cannot afford to work with vendors who are figuring it out as they go. Vertex Loop brought deep compliance expertise and zero-downtime delivery discipline that we simply couldn't find elsewhere.",
//     accent: '#3d8c7a',
//     bg: 'from-mint-soft to-mint-mist',
//     result: '99.98% uptime over 18 months',
//   },
// ]

const PROCESS_STAGES = [
  {
    number: "01",
    title: "Discovery Call",
    desc: "A 30-minute conversation to understand your challenge, goals, and constraints. No templates, no scripts — genuine inquiry.",
    duration: "30 minutes",
    accent: "#4a7fa5",
  },
  {
    number: "02",
    title: "Strategic Proposal",
    desc: "Within 3 business days, we deliver a tailored engagement proposal with scope, timeline, team composition, and outcomes defined.",
    duration: "3 business days",
    accent: "#7c6fad",
  },
  {
    number: "03",
    title: "Team Assembly",
    desc: "We hand-pick the precise team your challenge demands — not whoever is available, but whoever is optimal for your specific context.",
    duration: "1 week",
    accent: "#3d8c7a",
  },
  {
    number: "04",
    title: "Execution & Delivery",
    desc: "Sprint-based or milestone-driven delivery with weekly check-ins, transparent progress, and zero surprises at handoff.",
    duration: "Project duration",
    accent: "#a07830",
  },
  {
    number: "05",
    title: "Outcome Review",
    desc: "Post-delivery audit against defined success metrics. If we didn't move the needle, we own that conversation.",
    duration: "2 weeks post-delivery",
    accent: "#b04a4a",
  },
];

function ComparisonCell({ value }: { value: boolean | "partial" }) {
  if (value === true)
    return (
      <div className="flex justify-center">
        <div className="w-6 h-6 rounded-full bg-[#3d8c7a]/12 border border-[#3d8c7a]/25 flex items-center justify-center">
          <Check size={12} className="text-[#3d8c7a]" />
        </div>
      </div>
    );
  if (value === "partial")
    return (
      <div className="flex justify-center">
        <div className="w-6 h-6 rounded-full bg-[#a07830]/12 border border-[#a07830]/25 flex items-center justify-center">
          <div className="w-2 h-0.5 rounded-full bg-[#a07830]" />
        </div>
      </div>
    );
  return (
    <div className="flex justify-center">
      <div className="w-6 h-6 rounded-full bg-[#b04a4a]/10 border border-[#b04a4a]/20 flex items-center justify-center">
        <X size={11} className="text-[#b04a4a]/60" />
      </div>
    </div>
  );
}

export default function WhyUsPageClient() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const comparisonRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: comparisonRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);

  return (
    <main className="relative overflow-hidden">
      <Navbar />

      {/* ── HERO ── */}
      <PageHero
        label="Why Vertex Loop"
        labelAccent="gold"
        headline={
          <>
            Not a vendor.
            <br />
            <span className="italic font-normal text-[#a07830]">
              A strategic partner.
            </span>
          </>
        }
        subline="The difference between a vendor and a partner is accountability. Vendors deliver outputs. We deliver outcomes — with the architecture, talent, and ecosystem depth to back every commitment we make."
        gradient={{
          orb1: "rgba(240,230,200,0.55)",
          orb2: "rgba(193,218,240,0.4)",
          orb3: "rgba(216,210,236,0.3)",
          base: "#f8f3eb",
        }}>
        <div className="flex flex-wrap gap-4">
          <Link href="/contact" className="btn-primary text-sm">
            Start the Conversation <ArrowUpRight size={14} />
          </Link>
          <Link href="/ecosystem" className="btn-ghost text-sm">
            Explore Our Ecosystem
          </Link>
        </div>
      </PageHero>

      {/* ── VALUE PROPS GRID ── */}
      <section className="relative py-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#f8f3eb] to-[#f0ece5]" />
        <div className="absolute top-1/3 right-0 w-[500px] h-[400px] rounded-full bg-gold-soft/50 blur-[100px]" />
        <div className="relative z-10 section-padding">
          <AnimatedSection variant="fadeUp" className="mb-5">
            <SectionLabel accent="gold">Our Standards</SectionLabel>
          </AnimatedSection>
          <AnimatedSection
            variant="fadeUp"
            delay={0.08}
            className="mb-16 max-w-2xl">
            <h2 className="text-display font-semibold text-slate-ink text-4xl md:text-5xl leading-tight tracking-[-0.03em]">
              Six reasons top organizations
              <br />
              <span className="italic font-normal text-[#a07830]">
                choose Vertex Loop.
              </span>
            </h2>
          </AnimatedSection>
          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {VALUE_PROPOSITIONS.map((value, i) => {
              const IconComponent = ICON_MAP[value.icon];
              const accents = [
                "#4a7fa5",
                "#7c6fad",
                "#3d8c7a",
                "#a07830",
                "#b04a4a",
                "#4a7fa5",
              ];
              const color = accents[i];
              return (
                <motion.div
                  key={value.id}
                  variants={staggerItemVariants}
                  whileHover={{
                    y: -5,
                    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
                  }}
                  className="glass-card rounded-2xl p-7 group cursor-default relative overflow-hidden">
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                    style={{
                      background: `radial-gradient(ellipse at 0% 0%, ${color}10, transparent 65%)`,
                    }}
                  />
                  <motion.div
                    className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `linear-gradient(90deg, ${color}80, transparent)`,
                    }}
                  />
                  <div className="flex items-start justify-between mb-5">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-105"
                      style={{
                        background: `${color}12`,
                        border: `1px solid ${color}25`,
                      }}>
                      {IconComponent && (
                        <IconComponent size={20} style={{ color }} />
                      )}
                    </div>
                    {value.metric && (
                      <div className="text-right">
                        <div
                          className="text-2xl font-display font-semibold transition-colors duration-300 group-hover:text-current"
                          style={{ color }}>
                          {value.metric}
                        </div>
                        <div className="text-[10px] font-mono text-slate-dim tracking-wider uppercase mt-0.5">
                          {value.metricLabel}
                        </div>
                      </div>
                    )}
                  </div>
                  <h3 className="font-semibold text-slate-ink text-lg mb-3 tracking-tight">
                    {value.title}
                  </h3>
                  <p className="text-slate-mid text-sm leading-relaxed font-light">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── COMPARISON TABLE ── */}
      <section ref={comparisonRef} className="relative py-8 overflow-hidden">
        <motion.div style={{ y: bgY }} className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#f0ece5] to-[#edeae4]" />
          <div className="absolute bottom-0 left-1/3 w-[600px] h-[400px] rounded-full bg-sky-soft/35 blur-[100px]" />
        </motion.div>
        <div className="relative z-10 section-padding">
          <AnimatedSection variant="fadeUp" className="mb-5">
            <SectionLabel accent="blue">Competitive Clarity</SectionLabel>
          </AnimatedSection>
          <AnimatedSection
            variant="fadeUp"
            delay={0.08}
            className="mb-14 max-w-xl">
            <h2 className="text-display font-semibold text-slate-ink text-4xl md:text-5xl leading-tight tracking-[-0.03em]">
              How we compare
              <br />
              <span className="italic font-normal text-[#4a7fa5]">
                to your alternatives.
              </span>
            </h2>
          </AnimatedSection>
          <AnimatedSection variant="scaleIn" delay={0.1}>
            <div className="glass-card-strong rounded-3xl overflow-hidden shadow-glass-xl">
              {/* Table header */}
              <div className="grid grid-cols-5 gap-0 border-b border-pearl-100">
                <div className="col-span-1 p-5 pr-6">
                  <span className="text-xs font-mono text-slate-dim uppercase tracking-wider">
                    Capability
                  </span>
                </div>
                {[
                  {
                    label: "Vertex Loop",
                    highlight: true,
                    sublabel: "Ecosystem",
                  },
                  {
                    label: "Agency",
                    highlight: false,
                    sublabel: "Creative / Digital",
                  },
                  {
                    label: "Freelancer",
                    highlight: false,
                    sublabel: "Individual",
                  },
                  {
                    label: "In-House",
                    highlight: false,
                    sublabel: "Internal Team",
                  },
                ].map((col) => (
                  <div
                    key={col.label}
                    // FIXED: Replaced bg-slate-ink with bg-[#0f172a] so the dark background actually renders
                    className={`p-5 text-center border-l border-pearl-100 ${col.highlight ? "bg-[#0f172a]" : ""}`}>
                    {/* FIXED: Replaced text-slate-ink with text-[#0f172a] to guarantee dark text visibility */}
                    <div
                      className={`text-xs font-semibold tracking-tight ${col.highlight ? "text-white" : "text-[#0f172a]"}`}>
                      {col.label}
                    </div>
                    <div
                      className={`text-[10px] font-mono mt-0.5 ${col.highlight ? "text-white/50" : "text-slate-500"}`}>
                      {col.sublabel}
                    </div>
                  </div>
                ))}
              </div>
              {/* Rows */}
              {COMPARISON_ROWS.map((row, i) => (
                <div
                  key={row.trait}
                  className={`grid grid-cols-5 border-b border-pearl-100 last:border-0 ${i % 2 === 0 ? "bg-white/30" : ""}`}>
                  <div className="col-span-1 p-4 pr-6 flex items-center">
                    <span className="text-sm text-slate-mid">{row.trait}</span>
                  </div>
                  <div className="p-4 flex items-center justify-center border-l border-pearl-100 bg-slate-ink/5">
                    <ComparisonCell value={row.vertex} />
                  </div>
                  <div className="p-4 flex items-center justify-center border-l border-pearl-100">
                    <ComparisonCell value={row.agency} />
                  </div>
                  <div className="p-4 flex items-center justify-center border-l border-pearl-100">
                    <ComparisonCell value={row.freelancer} />
                  </div>
                  <div className="p-4 flex items-center justify-center border-l border-pearl-100">
                    <ComparisonCell value={row.inhouse} />
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-slate-dim/70 text-xs mt-4 font-mono">
              ● Full capability &nbsp;|&nbsp; — Partial &nbsp;|&nbsp; ✕ Not
              available
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── OUR PROCESS ── */}
      <section className="relative py-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#edeae4] to-[#f0ece5]" />
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-lavender-soft/35 blur-[100px]" />
        <div className="relative z-10 section-padding">
          <AnimatedSection variant="fadeUp" className="mb-5">
            <SectionLabel accent="lavender">How We Engage</SectionLabel>
          </AnimatedSection>
          <AnimatedSection
            variant="fadeUp"
            delay={0.08}
            className="mb-16 max-w-xl">
            <h2 className="text-display font-semibold text-slate-ink text-4xl md:text-5xl leading-tight tracking-[-0.03em]">
              From conversation
              <br />
              <span className="italic font-normal text-[#7c6fad]">
                to compounding outcome.
              </span>
            </h2>
          </AnimatedSection>
          <div className="relative">
            {/* Connector line */}
            <div className="absolute top-10 left-10 right-10 h-px bg-gradient-to-r from-transparent via-pearl-200 to-transparent hidden lg:block" />
            <motion.div
              variants={staggerContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
              {PROCESS_STAGES.map((stage) => (
                <motion.div
                  key={stage.number}
                  variants={staggerItemVariants}
                  whileHover={{ y: -4, transition: { duration: 0.28 } }}
                  className="glass-card rounded-2xl p-6 relative group">
                  {/* Step number */}
                  <div
                    className="text-3xl font-display font-bold mb-4 leading-none"
                    style={{ color: `${stage.accent}35` }}>
                    {stage.number}
                  </div>
                  <div
                    className="absolute top-0 left-4 right-4 h-[2px] rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: stage.accent }}
                  />
                  <h3 className="font-semibold text-slate-ink text-base mb-2 tracking-tight">
                    {stage.title}
                  </h3>
                  <p className="text-slate-dim text-xs leading-relaxed mb-4">
                    {stage.desc}
                  </p>
                  <span
                    className="text-[10px] font-mono px-2.5 py-1 rounded-full"
                    style={{
                      background: `${stage.accent}10`,
                      color: stage.accent,
                      border: `1px solid ${stage.accent}20`,
                    }}>
                    {stage.duration}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      {/* <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#f0ece5] to-[#f4f0eb]" />
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full bg-mint-soft/35 blur-[100px]" />
        <div className="relative z-10 section-padding">
          <AnimatedSection variant="fadeUp" className="mb-5">
            <SectionLabel accent="mint">Client Voices</SectionLabel>
          </AnimatedSection>
          <AnimatedSection
            variant="fadeUp"
            delay={0.08}
            className="mb-14 max-w-xl">
            <h2 className="text-display font-semibold text-slate-ink text-4xl md:text-5xl leading-tight tracking-[-0.03em]">
              The outcomes speak
              <br />
              <span className="italic font-normal text-[#3d8c7a]">
                for themselves.
              </span>
            </h2>
          </AnimatedSection>

          {/* Testimonial tabs */}
          {/* <div className="flex gap-3 mb-8 flex-wrap">
            {TESTIMONIALS.map((t, i) => (
              <button
                key={t.name}
                onClick={() => setActiveTestimonial(i)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeTestimonial === i
                    ? "bg-white shadow-glass text-slate-ink"
                    : "text-slate-dim hover:text-slate-mid hover:bg-white/50"
                }`}>
                {t.name}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial}
              initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="glass-card-strong rounded-3xl p-8 md:p-12 relative overflow-hidden max-w-4xl">
              {(() => {
                const t = TESTIMONIALS[activeTestimonial];
                return (
                  <>
                    <div
                      className="absolute top-0 left-8 right-8 h-px"
                      style={{
                        background: `linear-gradient(90deg, transparent, ${t.accent}40, transparent)`,
                      }}
                    />
                    <div className="absolute top-6 right-8 opacity-10">
                      <Quote size={80} style={{ color: t.accent }} />
                    </div>
                    <div className="relative z-10">
                      <div
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-7 text-xs font-mono font-semibold"
                        style={{
                          background: `${t.accent}12`,
                          color: t.accent,
                          border: `1px solid ${t.accent}25`,
                        }}>
                        <Star size={10} fill="currentColor" /> {t.result}
                      </div>
                      <p className="text-display italic font-normal text-slate-ink text-xl md:text-2xl lg:text-3xl leading-relaxed tracking-tight mb-8">
                        &ldquo;{t.quote}&rdquo;
                      </p>
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-12 h-12 rounded-full bg-gradient-to-br ${t.bg} flex items-center justify-center font-display font-bold text-base`}
                          style={{ color: t.accent }}>
                          {t.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </div>
                        <div>
                          <div className="font-semibold text-slate-ink text-sm">
                            {t.name}
                          </div>
                          <div className="text-slate-dim text-xs font-mono">
                            {t.role}
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })()}
            </motion.div>
          </AnimatePresence>
        </div> */}
      {/* </section> */}

      {/* ── STATS ── */}
      {/* <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-slate-ink" />
        <div className="absolute top-0 left-1/3 w-[400px] h-[200px] rounded-full bg-[#4a7fa5]/12 blur-[80px]" />
        <div className="relative z-10 section-padding">
          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:divide-x divide-white/10">
            {STATS.map((s) => (
              <motion.div
                key={s.label}
                variants={staggerItemVariants}
                className="text-center px-6">
                <div className="stat-value text-4xl md:text-5xl text-white mb-2">
                  {s.value}
                </div>
                <div className="text-white/45 text-xs font-mono tracking-widest uppercase">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section> */}

      {/* ── CTA ── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#faf0e6] via-[#f0e6c8] to-[#dde9f4]" />
        <div className="relative z-10 section-padding text-center max-w-3xl mx-auto">
          <AnimatedSection variant="scaleIn">
            <div className="tag-pill mb-6 mx-auto w-fit">
              <span className="w-1 h-1 rounded-full bg-[#a07830]" />
              94% client retention rate
            </div>
            <h2 className="text-display font-semibold text-slate-ink text-4xl md:text-5xl leading-tight tracking-[-0.03em] mb-5">
              Join the organizations that
              <br />
              <span className="italic font-normal text-[#a07830]">
                trust Vertex Loop.
              </span>
            </h2>
            <p className="text-slate-mid text-lg font-light mb-8">
              A 30-minute conversation is all it takes to know whether we are
              the right partner. No commitment, no pressure — just genuine
              strategic dialogue.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Book a Discovery Call <ArrowUpRight size={14} />
              </Link>
              <Link href="/about" className="btn-ghost">
                Learn About Us
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </main>
  );
}
