import { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, ChevronDown, MapPin } from 'lucide-react';
import GlassCard from './GlassCard';
import { EXPERIENCES } from '../data/portfolioData';

/**
 * Chromatic career timeline rail displaying all verified LinkedIn roles,
 * measurable metrics, and expandable detail bullets.
 */
export default function ExperienceTimeline() {
  const [expandedId, setExpandedId] = useState(EXPERIENCES[0].id);

  return (
    <section id="journey" className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <span className="glass-chip inline-flex items-center gap-2 rounded-full px-3.5 py-1 font-mono text-[11px] uppercase tracking-[0.22em] text-violet-200">
            Experience Ledger · 2019 — Present
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Career <span className="text-prism">Trajectory &amp; Impact</span>
          </h2>
        </div>
        <p className="max-w-md text-sm text-slate-300">
          From client acquisition and Daimler enterprise database automation in Bengaluru to
          leading operations &amp; AI systems in Dubai.
        </p>
      </div>

      <div className="relative space-y-5 pl-6 sm:pl-10">
        {/* Glowing vertical neon spine */}
        <div
          aria-hidden="true"
          className="absolute bottom-4 left-2 top-4 w-0.5 rounded-full bg-gradient-to-b from-cyan-400 via-violet-500 to-pink-500 opacity-75 sm:left-4"
        />

        {EXPERIENCES.map((exp, idx) => {
          const isOpen = expandedId === exp.id;
          return (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 'some' }}
              transition={{ duration: 0.35, delay: idx * 0.04 }}
              className="relative"
            >
              <span
                aria-hidden="true"
                className="absolute -left-[22px] top-7 flex h-4 w-4 items-center justify-center rounded-full border border-white/60 bg-slate-950 shadow-[0_0_14px_#00F5D4] sm:-left-[30px]"
              >
                <span className="h-2 w-2 rounded-full bg-cyan-300" />
              </span>

              <GlassCard
                prismBeam={idx === 0}
                tilt={false}
                className="p-5 sm:p-7"
              >
                <button
                  type="button"
                  onClick={() => setExpandedId(isOpen ? '' : exp.id)}
                  className="flex w-full flex-col justify-between gap-4 text-left sm:flex-row sm:items-center"
                >
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="glass-chip rounded-full px-3 py-0.5 font-mono text-[11px] text-cyan-200">
                        {exp.badge}
                      </span>
                      <span className="glass-chip rounded-full px-3 py-0.5 font-mono text-[11px] text-emerald-200">
                        {exp.impact}
                      </span>
                    </div>
                    <h3 className="mt-2.5 font-display text-xl font-bold text-white sm:text-2xl">
                      {exp.role}{' '}
                      <span className="text-cyan-200/90">@ {exp.company}</span>
                    </h3>
                    <div className="mt-1.5 flex flex-wrap items-center gap-4 font-mono text-xs text-slate-300">
                      <span className="inline-flex items-center gap-1.5">
                        <Briefcase className="h-3.5 w-3.5 text-violet-300" />
                        {exp.dates} ({exp.duration}) · {exp.type}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5 text-pink-300" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <span className="glass-chip inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white">
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </span>
                </button>

                {isOpen && (
                  <div className="mt-5 border-t border-white/10 pt-5">
                    <ul className="space-y-2.5 text-sm leading-relaxed text-slate-200/90">
                      {exp.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2.5">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="glass-chip rounded-full px-3 py-1 font-mono text-[11px] text-slate-100"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </GlassCard>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
