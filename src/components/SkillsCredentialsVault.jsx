import { useState } from 'react';
import { Award, GraduationCap, Quote, Sparkles } from 'lucide-react';
import GlassCard from './GlassCard';
import { CERTIFICATIONS, EDUCATION, RECOMMENDATION, SKILL_GROUPS } from '../data/portfolioData';

/**
 * Filterable skill constellation + Education, Certifications, and Recommendation vault.
 */
export default function SkillsCredentialsVault() {
  const [selectedGroup, setSelectedGroup] = useState('all');

  const visibleGroups =
    selectedGroup === 'all'
      ? SKILL_GROUPS
      : SKILL_GROUPS.filter((g) => g.id === selectedGroup);

  return (
    <section id="vault" className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <div className="mb-8 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
        <div>
          <span className="glass-chip inline-flex items-center gap-2 rounded-full px-3.5 py-1 font-mono text-[11px] uppercase tracking-[0.22em] text-cyan-200">
            51+ LinkedIn Skills &amp; Credentials
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Capability <span className="text-prism">Constellation &amp; Vault</span>
          </h2>
        </div>

        <div className="glass-panel flex flex-wrap gap-1.5 rounded-full p-1.5">
          <button
            type="button"
            onClick={() => setSelectedGroup('all')}
            className={`rounded-full px-4 py-1.5 text-xs font-semibold transition ${
              selectedGroup === 'all'
                ? 'bg-gradient-to-r from-cyan-300 via-violet-400 to-pink-400 text-slate-950'
                : 'text-slate-200 hover:bg-white/10'
            }`}
          >
            All Disciplines
          </button>
          {SKILL_GROUPS.map((g) => (
            <button
              key={g.id}
              type="button"
              onClick={() => setSelectedGroup(g.id)}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold transition ${
                selectedGroup === g.id
                  ? 'bg-gradient-to-r from-cyan-300 via-violet-400 to-pink-400 text-slate-950'
                  : 'text-slate-200 hover:bg-white/10'
              }`}
            >
              {g.label.split(',')[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Skill Constellation */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {visibleGroups.map((group) => (
          <GlassCard key={group.id} className="p-6">
            <div className="flex items-center justify-between">
              <h3 className="font-display text-lg font-bold text-white">{group.label}</h3>
              <Sparkles className="h-4 w-4 text-cyan-300" />
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="glass-chip rounded-full px-3 py-1.5 text-xs font-medium text-slate-100 transition hover:scale-105 hover:border-cyan-300/60"
                >
                  {skill}
                </span>
              ))}
            </div>
          </GlassCard>
        ))}
      </div>

      {/* Education, Certifications & Recommendation Grid */}
      <div className="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-12">
        <GlassCard className="p-6 lg:col-span-4">
          <div className="flex items-center gap-2.5 text-cyan-200">
            <GraduationCap className="h-5 w-5" />
            <h3 className="font-display text-lg font-bold text-white">Education</h3>
          </div>
          <div className="mt-4 space-y-4">
            {EDUCATION.map((edu) => (
              <div key={edu.school} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="font-display text-base font-bold text-white">{edu.school}</div>
                <div className="mt-1 text-xs text-slate-200">{edu.degree}</div>
                <div className="mt-2 flex flex-wrap gap-2 font-mono text-[10px] text-cyan-200">
                  <span>{edu.dates}</span>
                  <span>·</span>
                  <span className="text-emerald-300">{edu.highlight}</span>
                </div>
                {edu.activities && (
                  <p className="mt-2 text-[11px] text-slate-300">{edu.activities}</p>
                )}
              </div>
            ))}
          </div>
        </GlassCard>

        <GlassCard className="p-6 lg:col-span-4">
          <div className="flex items-center gap-2.5 text-violet-200">
            <Award className="h-5 w-5" />
            <h3 className="font-display text-lg font-bold text-white">Licenses &amp; Certs</h3>
          </div>
          <div className="mt-4 space-y-4">
            {CERTIFICATIONS.map((cert) => (
              <div key={cert.credentialId} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="font-display text-base font-bold text-white">{cert.title}</div>
                <div className="mt-1 font-mono text-[11px] text-violet-200">
                  {cert.issuer} · {cert.date}
                </div>
                <div className="mt-1 font-mono text-[10px] text-slate-400">
                  ID: {cert.credentialId}
                </div>
                <p className="mt-2 text-xs leading-relaxed text-slate-200/85">{cert.summary}</p>
              </div>
            ))}
          </div>
        </GlassCard>

        <GlassCard strong prismBeam className="flex flex-col justify-between p-6 lg:col-span-4">
          <div>
            <div className="flex items-center justify-between">
              <span className="glass-chip inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-pink-200">
                LinkedIn Endorsement
              </span>
              <Quote className="h-5 w-5 text-cyan-300" />
            </div>
            <p className="mt-5 text-sm leading-relaxed text-slate-100">
              &ldquo;{RECOMMENDATION.quote}&rdquo;
            </p>
          </div>
          <div className="mt-6 border-t border-white/10 pt-4">
            <div className="font-display text-sm font-bold text-white">{RECOMMENDATION.author}</div>
            <div className="mt-0.5 text-xs text-slate-300">{RECOMMENDATION.role}</div>
            <div className="mt-1 font-mono text-[10px] text-cyan-200/85">
              {RECOMMENDATION.date} · {RECOMMENDATION.relation}
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
