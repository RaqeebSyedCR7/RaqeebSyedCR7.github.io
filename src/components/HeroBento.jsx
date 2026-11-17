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
 * Maximalist Bento Hero styled with understated architectural typography,
 * cool paper/sage glass surfaces, KPI telemetry, and smooth kinetic tickers.
 */
export default function HeroBento() {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="overview" className="relative z-10 mx-auto max-w-7xl px-4 pb-12 pt-28 sm:px-6 sm:pt-32">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-5">
        {/* Main Hero Display Pane */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-8"
        >
          <GlassCard strong prismBeam className="h-full p-6 sm:p-10">
            <div className="flex flex-wrap items-center gap-2">
              <span className="glass-chip text-ink inline-flex items-center gap-2 rounded-full px-3.5 py-1 font-mono text-[11px] font-medium">
                <span className="status-dot" aria-hidden="true" />
                {PROFILE.availability}
              </span>
              <span className="glass-chip text-ink-secondary inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-mono text-[11px]">
                <MapPin className="text-accent h-3 w-3" />
                {PROFILE.location}
              </span>
              <span className="glass-chip text-ink-secondary inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-mono text-[11px]">
                <ShieldCheck className="text-accent h-3.5 w-3.5" />
                Verified LinkedIn
              </span>
            </div>

            <div className="mt-7">
              <p className="text-accent font-mono text-xs font-medium uppercase tracking-[0.22em]">
                Senior Operations Executive @ RAIZ HORIZON · Vibe Coder · AI Developer
              </p>
              <h1 className="text-ink mt-3 font-display text-4xl font-extrabold leading-[1.02] tracking-[-0.03em] sm:text-6xl lg:text-[4.25rem]">
                S. ABDUL <span className="text-prism">RAQEEB</span>
              </h1>
              <p className="text-ink-secondary mt-5 max-w-2xl text-base leading-relaxed sm:text-[17.5px]">
                {PROFILE.about}
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="btn-accent inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
              >
                <span>Explore Selected Work</span>
                <ArrowDownRight className="h-4 w-4" />
              </a>
              <a
                href={PROFILE.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-chip text-ink inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold hover:opacity-85"
              >
                <Linkedin className="text-accent h-4 w-4" />
                <span>LinkedIn</span>
                <ArrowUpRight className="h-3.5 w-3.5 opacity-65" />
              </a>
              <a
                href={PROFILE.contact.companySite}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-chip text-ink inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold hover:opacity-85"
              >
                <Globe2 className="text-accent h-4 w-4" />
                <span>raizhorizon.com</span>
                <ArrowUpRight className="h-3.5 w-3.5 opacity-65" />
              </a>
            </div>
          </GlassCard>
        </motion.div>

        {/* Right Identity & Signature Manifesto Column */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-4 lg:col-span-4 lg:gap-5"
        >
          <GlassCard prismBeam className="p-6">
            <div className="flex items-center gap-4">
              <div className="border-glass-line bg-glass-subtle relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl border p-0.5">
                {!imgError ? (
                  <img
                    src={PROFILE.avatarUrl}
                    alt={PROFILE.name}
                    onError={() => setImgError(true)}
                    className="h-full w-full rounded-[14px] object-cover"
                  />
                ) : (
                  <div className="text-ink flex h-full w-full items-center justify-center rounded-[14px] font-display text-xl font-bold">
                    {PROFILE.monogram}
                  </div>
                )}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-ink font-display text-lg font-bold">{PROFILE.name}</span>
                  <span className="glass-chip text-ink-muted rounded-full px-2 py-0.5 font-mono text-[10px]">
                    {PROFILE.pronouns}
                  </span>
                </div>
                <p className="text-ink-muted mt-1 text-xs">
                  BCA · Bengaluru City University
                </p>
                <div className="mt-2.5 flex flex-wrap gap-2">
                  <span className="glass-chip text-ink-secondary inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 font-mono text-[11px]">
                    <Users className="text-accent h-3 w-3" />
                    {PROFILE.followers} Followers
                  </span>
                  <span className="glass-chip text-ink-secondary rounded-full px-2.5 py-0.5 font-mono text-[11px]">
                    {PROFILE.connections} Connections
                  </span>
                </div>
              </div>
            </div>
          </GlassCard>

          <GlassCard strong className="flex flex-1 flex-col justify-between p-6">
            <div>
              <div className="flex items-center justify-between">
                <span className="glass-chip text-accent inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-mono text-[10px] font-medium uppercase tracking-widest">
                  <Cpu className="h-3 w-3" />
                  Personal Philosophy
                </span>
                <Sparkles className="text-accent h-4 w-4" />
              </div>
              <blockquote className="text-ink mt-5 font-display text-xl font-bold leading-snug sm:text-[1.35rem]">
                &ldquo;{PROFILE.manifesto}&rdquo;
              </blockquote>
            </div>
            <div className="border-glass-line text-ink-muted mt-6 flex items-center justify-between border-t pt-4 font-mono text-[11px]">
              <span>— {PROFILE.name}</span>
              <span className="text-accent font-medium">AI + OPERATIONS</span>
            </div>
          </GlassCard>
        </motion.div>
      </div>

      {/* 6-Tile Impact KPI Bento Row */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
        className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6"
      >
        {IMPACT_KPIS.map((kpi) => (
          <GlassCard key={kpi.label} className="p-4 sm:p-5">
            <div className="text-accent font-display text-2xl font-extrabold tracking-tight sm:text-3xl">
              {kpi.value}
            </div>
            <div className="text-ink mt-1.5 text-xs font-semibold leading-snug">{kpi.label}</div>
            <div className="text-ink-muted mt-1 font-mono text-[10px]">{kpi.source}</div>
          </GlassCard>
        ))}
      </motion.div>

      {/* Dual-Track Kinetic Marquee Ribbons */}
      <div className="mt-6 space-y-2.5 overflow-hidden">
        <div className="marquee-group glass-panel rounded-full py-2.5">
          <div className="marquee-track animate-marquee-left flex w-max items-center gap-6 px-4">
            {[...MARQUEE_TOP, ...MARQUEE_TOP].map((word, idx) => (
              <span
                key={`top-${idx}`}
                className="text-ink flex items-center gap-6 font-display text-xs font-bold tracking-[0.18em] sm:text-sm"
              >
                <span>{word}</span>
                <span className="status-dot h-1.5 w-1.5" />
              </span>
            ))}
          </div>
        </div>

        <div className="marquee-group glass-panel rounded-full py-2.5">
          <div className="marquee-track animate-marquee-right flex w-max items-center gap-6 px-4">
            {[...MARQUEE_BOTTOM, ...MARQUEE_BOTTOM].map((word, idx) => (
              <span
                key={`bot-${idx}`}
                className="text-ink-secondary flex items-center gap-6 font-mono text-xs font-medium tracking-[0.16em]"
              >
                <span>{word}</span>
                <span className="bg-accent h-1.5 w-1.5 rotate-45 opacity-75" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
