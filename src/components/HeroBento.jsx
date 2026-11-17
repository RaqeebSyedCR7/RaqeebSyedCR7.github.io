import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowDownRight,
  ArrowUpRight,
  Cpu,
  Globe2,
  Linkedin,
  MapPin,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react';
import GlassCard from './GlassCard';
import { IMPACT_KPIS, MARQUEE_BOTTOM, MARQUEE_TOP, PROFILE } from '../data/portfolioData';

/**
 * Maximalist Bento Hero showcasing identity, verified LinkedIn metrics,
 * live signature quote, impact KPIs, and dual kinetic ticker ribbons.
 */
export default function HeroBento() {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="overview" className="relative z-10 mx-auto max-w-7xl px-4 pb-12 pt-24 sm:px-6 sm:pt-32">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-5">
        {/* Main Hero Display Pane */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-8"
        >
          <GlassCard strong prismBeam className="h-full p-6 sm:p-10">
            <div className="flex flex-wrap items-center gap-2">
              <span className="glass-chip inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-mono text-[11px] font-medium text-emerald-300">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                {PROFILE.availability}
              </span>
              <span className="glass-chip inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-mono text-[11px] text-cyan-200">
                <MapPin className="h-3 w-3" />
                {PROFILE.location}
              </span>
              <span className="glass-chip inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-mono text-[11px] text-violet-200">
                <ShieldCheck className="h-3.5 w-3.5 text-cyan-300" />
                Verified LinkedIn Profile
              </span>
            </div>

            <div className="mt-7">
              <p className="font-mono text-xs uppercase tracking-[0.26em] text-cyan-200/85">
                Senior Operations Executive @ RAIZ HORIZON · Vibe Coder · AI Developer
              </p>
              <h1 className="text-prism mt-3 font-display text-4xl font-extrabold leading-[0.98] tracking-tight sm:text-6xl lg:text-[4.25rem]">
                S. ABDUL
                <br />
                RAQEEB
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-200/90 sm:text-lg">
                {PROFILE.about}
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-300 via-violet-400 to-pink-400 px-6 py-3 text-sm font-bold text-slate-950 shadow-xl shadow-cyan-500/25 transition hover:scale-[1.02] hover:brightness-110"
              >
                <span>Explore Selected Work</span>
                <ArrowDownRight className="h-4 w-4" />
              </a>
              <a
                href={PROFILE.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-chip inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
              >
                <Linkedin className="h-4 w-4 text-sky-300" />
                <span>LinkedIn</span>
                <ArrowUpRight className="h-3.5 w-3.5 opacity-75" />
              </a>
              <a
                href={PROFILE.contact.companySite}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-chip inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
              >
                <Globe2 className="h-4 w-4 text-cyan-300" />
                <span>raizhorizon.com</span>
                <ArrowUpRight className="h-3.5 w-3.5 opacity-75" />
              </a>
            </div>
          </GlassCard>
        </motion.div>

        {/* Right Identity & Signature Manifesto Column */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-4 lg:col-span-4 lg:gap-5"
        >
          {/* Portrait & Social Telemetry Card */}
          <GlassCard prismBeam className="p-6">
            <div className="flex items-center gap-4">
              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl border border-white/30 bg-gradient-to-br from-cyan-500/30 via-violet-500/30 to-pink-500/30 p-0.5">
                {!imgError ? (
                  <img
                    src={PROFILE.avatarUrl}
                    alt={PROFILE.name}
                    onError={() => setImgError(true)}
                    className="h-full w-full rounded-[14px] object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center rounded-[14px] bg-slate-950/70 font-display text-xl font-extrabold text-white">
                    {PROFILE.monogram}
                  </div>
                )}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-display text-lg font-bold text-white">{PROFILE.name}</span>
                  <span className="glass-chip rounded-full px-2 py-0.5 font-mono text-[10px] text-slate-200">
                    {PROFILE.pronouns}
                  </span>
                </div>
                <p className="mt-1 text-xs text-slate-300">
                  BCA · Bengaluru City University
                </p>
                <div className="mt-2.5 flex flex-wrap gap-2">
                  <span className="glass-chip inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 font-mono text-[11px] text-cyan-200">
                    <Users className="h-3 w-3" />
                    {PROFILE.followers} Followers
                  </span>
                  <span className="glass-chip rounded-full px-2.5 py-0.5 font-mono text-[11px] text-violet-200">
                    {PROFILE.connections} Connections
                  </span>
                </div>
              </div>
            </div>
          </GlassCard>

          {/* Signature Manifesto Card (From LinkedIn Banner) */}
          <GlassCard strong className="flex flex-1 flex-col justify-between p-6">
            <div>
              <div className="flex items-center justify-between">
                <span className="glass-chip inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-pink-200">
                  <Cpu className="h-3 w-3 text-pink-300" />
                  Personal Philosophy
                </span>
                <Sparkles className="h-4 w-4 text-cyan-300" />
              </div>
              <blockquote className="mt-5 font-display text-xl font-bold leading-snug text-white sm:text-2xl">
                &ldquo;{PROFILE.manifesto}&rdquo;
              </blockquote>
            </div>
            <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 font-mono text-[11px] text-slate-300">
              <span>— {PROFILE.name}</span>
              <span className="text-cyan-300">AI + OPERATIONS</span>
            </div>
          </GlassCard>
        </motion.div>
      </div>

      {/* 6-Tile Impact KPI Bento Row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6"
      >
        {IMPACT_KPIS.map((kpi) => (
          <GlassCard key={kpi.label} className="p-4 sm:p-5">
            <div
              className={`bg-gradient-to-r ${kpi.accent} bg-clip-text font-display text-2xl font-extrabold text-transparent sm:text-3xl`}
            >
              {kpi.value}
            </div>
            <div className="mt-1.5 text-xs font-semibold leading-snug text-white">{kpi.label}</div>
            <div className="mt-1 font-mono text-[10px] text-slate-300/80">{kpi.source}</div>
          </GlassCard>
        ))}
      </motion.div>

      {/* Maximalist Dual-Track Kinetic Marquee Ribbons */}
      <div className="mt-6 space-y-2.5 overflow-hidden">
        <div className="marquee-group glass-panel rounded-full py-2.5">
          <div className="marquee-track animate-marquee-left flex w-max items-center gap-6 px-4">
            {[...MARQUEE_TOP, ...MARQUEE_TOP].map((word, idx) => (
              <span
                key={`top-${idx}`}
                className="flex items-center gap-6 font-display text-xs font-bold tracking-[0.2em] text-slate-100 sm:text-sm"
              >
                <span>{word}</span>
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_#00F5D4]" />
              </span>
            ))}
          </div>
        </div>

        <div className="marquee-group glass-panel rounded-full py-2.5">
          <div className="marquee-track animate-marquee-right flex w-max items-center gap-6 px-4">
            {[...MARQUEE_BOTTOM, ...MARQUEE_BOTTOM].map((word, idx) => (
              <span
                key={`bot-${idx}`}
                className="flex items-center gap-6 font-mono text-xs font-medium tracking-[0.18em] text-cyan-100/90"
              >
                <span>{word}</span>
                <span className="h-1.5 w-1.5 rotate-45 bg-fuchsia-400 shadow-[0_0_10px_#EC4899]" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
