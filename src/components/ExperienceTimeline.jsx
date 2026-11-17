import { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, ChevronDown, MapPin } from 'lucide-react';
import GlassCard from './GlassCard';
import { EXPERIENCES } from '../data/portfolioData';

/**
 * Refined vertical timeline displaying all verified LinkedIn roles,
 * measurable metrics, and expandable detail bullets.
 */
export default function ExperienceTimeline() {
  const [expandedId, setExpandedId] = useState(EXPERIENCES[0].id);

  return (
    <section id="journey" className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <span className="glass-chip text-accent inline-flex items-center gap-2 rounded-full px-3.5 py-1 font-mono text-[11px] font-medium uppercase tracking-[0.2em]">
            Experience Ledger · 2019 — Present
          </span>
          <h2 className="text-ink mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-5xl">
            Career <span className="text-prism">Trajectory &amp; Impact</span>
          </h2>
        </div>
        <p className="text-ink-muted max-w-md text-sm">
          From client acquisition and Daimler enterprise database automation in Bengaluru to
          leading operations &amp; AI systems in Dubai.
        </p>
      </div>

      <div className="relative space-y-5 pl-6 sm:pl-10">
        {/* Clean vertical hairline spine */}
        <div
          aria-hidden="true"
          className="absolute bottom-4 left-2 top-4 w-px sm:left-4"
          style={{
            background: 'linear-gradient(180deg, var(--accent), var(--glass-border))',
          }}
        />

        {EXPERIENCES.map((exp, idx) => {
          const isOpen = expandedId === exp.id;
          return (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 'some' }}
              transition={{ duration: 0.38, delay: idx * 0.04, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <span
                aria-hidden="true"
                className="status-dot absolute -left-[20px] top-7 sm:-left-[28px]"
              />

              <GlassCard prismBeam={idx === 0} tilt={false} className="p-5 sm:p-7">
                <button
                  type="button"
                  onClick={() => setExpandedId(isOpen ? '' : exp.id)}
                  className="flex w-full flex-col justify-between gap-4 text-left sm:flex-row sm:items-center"
                >
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="glass-chip text-accent rounded-full px-3 py-0.5 font-mono text-[11px] font-medium">
                        {exp.badge}
                      </span>
                      <span className="glass-chip text-ink-secondary rounded-full px-3 py-0.5 font-mono text-[11px]">
                        {exp.impact}
                      </span>
                    </div>
                    <h3 className="text-ink mt-2.5 font-display text-xl font-bold sm:text-2xl">
                      {exp.role}{' '}
                      <span className="text-accent">@ {exp.company}</span>
                    </h3>
                    <div className="text-ink-muted mt-1.5 flex flex-wrap items-center gap-4 font-mono text-xs">
                      <span className="inline-flex items-center gap-1.5">
                        <Briefcase className="text-accent h-3.5 w-3.5" />
                        {exp.dates} ({exp.duration}) · {exp.type}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="text-accent h-3.5 w-3.5" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <span className="glass-chip text-ink inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full">
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </span>
                </button>

                {isOpen && (
                  <div className="border-glass-line mt-5 border-t pt-5">
                    <ul className="text-ink-secondary space-y-2.5 text-sm leading-relaxed">
                      {exp.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2.5">
                          <span className="bg-accent mt-2 h-1.5 w-1.5 shrink-0 rounded-full" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="glass-chip text-ink-secondary rounded-full px-3 py-1 font-mono text-[11px]"
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
