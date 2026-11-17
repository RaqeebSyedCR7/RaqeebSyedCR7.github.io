import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Maximize2 } from 'lucide-react';
import GlassCard from './GlassCard';
import ProjectVisualPreview from './ProjectVisualPreview';
import { PROJECTS } from '../data/portfolioData';

const CATEGORIES = ['All', '3D & Web Design', 'AI & Automation', 'Data & BI'];

/**
 * Filterable bento grid of flagship design, AI automation, and data projects.
 */
export default function ProjectsShowcase({ onSelectProject }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = useMemo(() => {
    if (activeCategory === 'All') return PROJECTS;
    return PROJECTS.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="work" className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <div className="mb-8 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
        <div>
          <span className="glass-chip inline-flex items-center gap-2 rounded-full px-3.5 py-1 font-mono text-[11px] uppercase tracking-[0.22em] text-pink-200">
            Selected Works · 2022 — 2026
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Flagship <span className="text-prism">Builds &amp; Case Studies</span>
          </h2>
        </div>

        <div className="glass-panel flex flex-wrap gap-1.5 rounded-full p-1.5">
          {CATEGORIES.map((cat) => {
            const active = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold transition ${
                  active
                    ? 'bg-gradient-to-r from-cyan-300 via-violet-400 to-pink-400 text-slate-950 shadow-md'
                    : 'text-slate-200/85 hover:bg-white/10 hover:text-white'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
        {filtered.map((project, idx) => {
          const isWide = idx === 0 || (filtered.length % 2 === 1 && idx === filtered.length - 1);
          return (
            <motion.div
              key={`${activeCategory}-${project.id}`}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              className={isWide ? 'lg:col-span-7' : 'lg:col-span-5'}
            >
              <GlassCard
                prismBeam={idx === 0}
                className="group flex h-full cursor-pointer flex-col justify-between p-6"
                onClick={() => onSelectProject(project)}
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="glass-chip rounded-full px-3 py-1 font-mono text-[11px] text-cyan-200">
                      {project.category} · {project.year}
                    </span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectProject(project);
                      }}
                      className="glass-chip inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-mono text-[11px] text-white transition group-hover:bg-white/25"
                    >
                      <Maximize2 className="h-3 w-3" />
                      <span>Inspect</span>
                    </button>
                  </div>

                  {/* Interactive Holographic Schematic Frame */}
                  <div
                    className={`mt-4 h-36 overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-br ${project.gradient} p-3 backdrop-blur-md`}
                  >
                    <ProjectVisualPreview visualType={project.visualType} />
                  </div>

                  <h3 className="mt-5 font-display text-xl font-bold text-white transition group-hover:text-cyan-200 sm:text-2xl">
                    {project.title}
                  </h3>
                  <p className="mt-1 font-mono text-xs text-violet-200/90">{project.subtitle}</p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-200/85">{project.summary}</p>
                </div>

                <div className="mt-6 space-y-4">
                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                    {project.metrics.map((m) => (
                      <div key={m.k} className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                        <div className="font-display text-sm font-bold text-white">{m.v}</div>
                        <div className="font-mono text-[10px] text-slate-300">{m.k}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-4">
                    <div className="flex flex-wrap gap-1.5">
                      {project.stack.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="glass-chip rounded-full px-2.5 py-0.5 font-mono text-[10px] text-slate-100"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1 font-mono text-xs font-semibold text-cyan-300 hover:text-cyan-100"
                      >
                        <span>Open Live</span>
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
