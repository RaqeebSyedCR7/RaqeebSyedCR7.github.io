import { motion } from 'framer-motion';
import { Compass, Cpu, Layers, Megaphone } from 'lucide-react';
import GlassCard from './GlassCard';
import { SERVICES } from '../data/portfolioData';

const SERVICE_ICONS = {
  'vibe-ai': Cpu,
  marketing: Megaphone,
  interior: Compass,
  'ops-data': Layers,
};

/**
 * Multi-discipline Craft & Services Bento combining LinkedIn Services
 * (Marketing Strategy, Interior Design) with AI Engineering & Operations.
 */
export default function AboutServicesBento() {
  return (
    <section id="services" className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <span className="glass-chip text-accent inline-flex items-center gap-2 rounded-full px-3.5 py-1 font-mono text-[11px] font-medium uppercase tracking-[0.2em]">
            Multidimensional Craft
          </span>
          <h2 className="text-ink mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-5xl">
            Where <span className="text-prism">Design, Operations &amp; AI</span> Collide
          </h2>
        </div>
        <p className="text-ink-muted max-w-md text-sm leading-relaxed">
          Combining enterprise database discipline from CGI/Daimler, spatial aesthetics, and rapid
          AI-driven product execution across the UAE.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {SERVICES.map((service, index) => {
          const Icon = SERVICE_ICONS[service.id] || Cpu;
          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 'some' }}
              transition={{ duration: 0.45, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
            >
              <GlassCard prismBeam={index === 0} className="h-full p-6 sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div className="bg-accent-soft border-glass-line flex h-12 w-12 items-center justify-center rounded-2xl border">
                    <Icon className="text-accent h-6 w-6" />
                  </div>
                  <span className="glass-chip text-accent rounded-full px-3 py-1 font-mono text-[11px] font-medium">
                    {service.badge}
                  </span>
                </div>

                <h3 className="text-ink mt-5 font-display text-xl font-bold sm:text-2xl">
                  {service.title}
                </h3>
                <p className="text-ink-secondary mt-2.5 text-sm leading-relaxed">
                  {service.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="glass-chip text-ink-secondary rounded-full px-3 py-1 font-mono text-[11px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
