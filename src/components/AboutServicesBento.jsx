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

const VARIANT_GRADIENTS = {
  prism: 'from-cyan-400/25 via-violet-500/20 to-fuchsia-500/25',
  cyan: 'from-cyan-400/25 via-sky-500/20 to-blue-600/20',
  magenta: 'from-fuchsia-500/25 via-pink-500/20 to-rose-500/20',
  gold: 'from-amber-400/25 via-orange-500/20 to-yellow-500/20',
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
          <span className="glass-chip inline-flex items-center gap-2 rounded-full px-3.5 py-1 font-mono text-[11px] uppercase tracking-[0.22em] text-cyan-200">
            Multidimensional Craft
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Where <span className="text-prism">Design, Operations &amp; AI</span> Collide
          </h2>
        </div>
        <p className="max-w-md text-sm leading-relaxed text-slate-300">
          Combining enterprise database discipline from CGI/Daimler, spatial aesthetics, and rapid
          AI-driven product execution across the UAE.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {SERVICES.map((service, index) => {
          const Icon = SERVICE_ICONS[service.id] || Cpu;
          const gradient = VARIANT_GRADIENTS[service.variant] || VARIANT_GRADIENTS.prism;
          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 'some' }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
            >
              <GlassCard prismBeam={index === 0} className="h-full p-6 sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl border border-white/25 bg-gradient-to-br ${gradient}`}
                  >
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <span className="glass-chip rounded-full px-3 py-1 font-mono text-[11px] text-cyan-200">
                    {service.badge}
                  </span>
                </div>

                <h3 className="mt-5 font-display text-xl font-bold text-white sm:text-2xl">
                  {service.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-200/85">
                  {service.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="glass-chip rounded-full px-3 py-1 font-mono text-[11px] text-slate-100"
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
