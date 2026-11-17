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
          <span className="glass-chip text-accent inline-flex items-center gap-2 rounded-full px-3.5 py-1 font-mono text-[11px] font-medium uppercase tracking-[0.2em]">
            51+ LinkedIn Skills &amp; Credentials
          </span>
          <h2 className="text-ink mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-5xl">
            Capability <span className="text-prism">Constellation &amp; Vault</span>
          </h2>
        </div>

        <div className="glass-panel flex flex-wrap gap-1.5 rounded-full p-1.5">
          <button
            type="button"
            onClick={() => setSelectedGroup('all')}
            className={`rounded-full px-4 py-1.5 text-xs font-semibold transition ${
              selectedGroup === 'all'
                ? 'btn-accent'
                : 'text-ink-secondary hover:bg-glass-subtle hover:text-ink'
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
                  ? 'btn-accent'
                  : 'text-ink-secondary hover:bg-glass-subtle hover:text-ink'
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
              <h3 className="text-ink font-display text-lg font-bold">{group.label}</h3>
              <Sparkles className="text-accent h-4 w-4" />
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="glass-chip text-ink-secondary hover:text-ink rounded-full px-3 py-1.5 text-xs font-medium transition hover:scale-[1.03]"
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
          <div className="text-accent flex items-center gap-2.5">
            <GraduationCap className="h-5 w-5" />
            <h3 className="text-ink font-display text-lg font-bold">Education</h3>
          </div>
          <div className="mt-4 space-y-4">
            {EDUCATION.map((edu) => (
              <div key={edu.school} className="border-glass-line bg-glass-subtle rounded-2xl border p-4">
                <div className="text-ink font-display text-base font-bold">{edu.school}</div>
                <div className="text-ink-secondary mt-1 text-xs">{edu.degree}</div>
                <div className="text-ink-muted mt-2 flex flex-wrap gap-2 font-mono text-[10px]">
                  <span>{edu.dates}</span>
                  <span>·</span>
                  <span className="text-accent font-medium">{edu.highlight}</span>
                </div>
                {edu.activities && (
                  <p className="text-ink-muted mt-2 text-[11px]">{edu.activities}</p>
                )}
              </div>
            ))}
          </div>
        </GlassCard>

        <GlassCard className="p-6 lg:col-span-4">
          <div className="text-accent flex items-center gap-2.5">
            <Award className="h-5 w-5" />
            <h3 className="text-ink font-display text-lg font-bold">Licenses &amp; Certs</h3>
          </div>
          <div className="mt-4 space-y-4">
            {CERTIFICATIONS.map((cert) => (
              <div key={cert.credentialId} className="border-glass-line bg-glass-subtle rounded-2xl border p-4">
                <div className="text-ink font-display text-base font-bold">{cert.title}</div>
                <div className="text-accent mt-1 font-mono text-[11px] font-medium">
                  {cert.issuer} · {cert.date}
                </div>
                <div className="text-ink-muted mt-1 font-mono text-[10px]">
                  ID: {cert.credentialId}
                </div>
                <p className="text-ink-secondary mt-2 text-xs leading-relaxed">{cert.summary}</p>
              </div>
            ))}
          </div>
        </GlassCard>

        <GlassCard strong prismBeam className="flex flex-col justify-between p-6 lg:col-span-4">
          <div>
            <div className="flex items-center justify-between">
              <span className="glass-chip text-accent inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-mono text-[10px] font-medium uppercase tracking-widest">
                LinkedIn Endorsement
              </span>
              <Quote className="text-accent h-5 w-5" />
            </div>
            <p className="text-ink-secondary mt-5 text-sm leading-relaxed">
              &ldquo;{RECOMMENDATION.quote}&rdquo;
            </p>
          </div>
          <div className="border-glass-line mt-6 border-t pt-4">
            <div className="text-ink font-display text-sm font-bold">{RECOMMENDATION.author}</div>
            <div className="text-ink-muted mt-0.5 text-xs">{RECOMMENDATION.role}</div>
            <div className="text-accent mt-1 font-mono text-[10px] font-medium">
              {RECOMMENDATION.date} · {RECOMMENDATION.relation}
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
