import { useEffect } from 'react';
import { ArrowUpRight, CheckCircle2, X } from 'lucide-react';
import ProjectVisualPreview from './ProjectVisualPreview';

/**
 * Full-screen frosted glass modal inspecting architectural details, impact metrics,
 * and deployment links for the selected case study.
 */
export default function ProjectDetailModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="glass-panel-strong prism-border-beam max-h-[88vh] w-full max-w-3xl overflow-y-auto overflow-x-hidden rounded-3xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <span className="glass-chip rounded-full px-3 py-1 font-mono text-[11px] text-cyan-200">
              {project.category} · {project.year} · {project.role}
            </span>
            <h3 className="mt-3 font-display text-2xl font-extrabold text-white sm:text-3xl">
              {project.title}
            </h3>
            <p className="mt-1 font-mono text-xs text-violet-200">{project.subtitle}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close project inspector"
            className="glass-chip rounded-full p-2 text-slate-200 transition hover:bg-white/20 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div
          className={`mt-5 h-44 overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-br ${project.gradient} p-4`}
        >
          <ProjectVisualPreview visualType={project.visualType} />
        </div>

        <p className="mt-5 text-sm leading-relaxed text-slate-100 sm:text-base">{project.summary}</p>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {project.metrics.map((m) => (
            <div key={m.k} className="glass-panel min-w-0 rounded-2xl p-3.5">
              <div className="break-words font-display text-base font-extrabold text-cyan-300 sm:text-lg">
                {m.v}
              </div>
              <div className="mt-0.5 font-mono text-[11px] text-slate-300">{m.k}</div>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <h4 className="font-mono text-xs uppercase tracking-widest text-slate-300">
            Architecture &amp; Delivery Highlights
          </h4>
          <ul className="mt-3 space-y-2.5">
            {project.highlights.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-slate-200">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-white/15 pt-5">
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span key={tech} className="glass-chip rounded-full px-3 py-1 font-mono text-xs text-white">
                {tech}
              </span>
            ))}
          </div>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-300 via-violet-400 to-pink-400 px-5 py-2.5 text-xs font-bold text-slate-950 transition hover:brightness-110"
            >
              <span>Launch External Link</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
