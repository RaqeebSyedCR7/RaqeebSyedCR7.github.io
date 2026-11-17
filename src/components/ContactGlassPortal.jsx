import { useState } from 'react';
import {
  ArrowUpRight,
  Check,
  Copy,
  Github,
  Globe2,
  Linkedin,
  Mail,
  MessageCircle,
  Phone,
  Send,
} from 'lucide-react';
import GlassCard from './GlassCard';
import { PROFILE } from '../data/portfolioData';

const INQUIRY_TOPICS = [
  'AI Automation & Vibe Coding',
  'Operations & Systems Leadership',
  'Marketing Strategy',
  'Interior Design',
];

/**
 * Maximalist contact hub with instant clipboard actions and an interactive brief composer
 * that prepares a structured Email or WhatsApp inquiry.
 */
export default function ContactGlassPortal() {
  const [copiedField, setCopiedField] = useState('');
  const [topic, setTopic] = useState(INQUIRY_TOPICS[0]);
  const [senderName, setSenderName] = useState('');
  const [message, setMessage] = useState('');

  const handleCopy = async (key, value) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedField(key);
      setTimeout(() => setCopiedField(''), 1800);
    } catch {
      // Fallback ignored in restricted frames
    }
  };

  const composedText = `Hi S. Abdul Raqeeb,\n\nI'm ${senderName || 'a visitor from your portfolio'} reaching out regarding: ${topic}.\n\n${
    message || 'Would love to connect and collaborate.'
  }`;

  const mailtoHref = `mailto:${PROFILE.contact.email}?subject=${encodeURIComponent(
    `Portfolio Inquiry — ${topic}`
  )}&body=${encodeURIComponent(composedText)}`;

  const whatsappHref = `${PROFILE.contact.uaeWhatsapp}?text=${encodeURIComponent(composedText)}`;

  return (
    <section id="connect" className="relative z-10 mx-auto max-w-7xl px-4 pb-20 pt-14 sm:px-6">
      <GlassCard strong prismBeam className="p-6 sm:p-10">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Direct Channels Column */}
          <div className="lg:col-span-6">
            <span className="glass-chip inline-flex items-center gap-2 rounded-full px-3.5 py-1 font-mono text-[11px] uppercase tracking-[0.22em] text-cyan-200">
              Let&apos;s Build Something Extraordinary
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              Initiate <span className="text-prism">Collaboration</span>
            </h2>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-slate-200/85 sm:text-base">
              Available in Dubai / UAE (On-site &amp; Hybrid) and globally for AI systems
              architecture, full-stack vibe coding, growth marketing, and interior design concepts.
            </p>

            <div className="mt-7 space-y-3">
              <div className="glass-panel flex items-center justify-between rounded-2xl px-4 py-3">
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-cyan-300" />
                  <div>
                    <div className="font-mono text-[10px] uppercase text-slate-400">Direct Email</div>
                    <div className="text-sm font-semibold text-white">{PROFILE.contact.email}</div>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy('email', PROFILE.contact.email)}
                  className="glass-chip inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-mono text-[11px] text-white hover:bg-white/20"
                >
                  {copiedField === 'email' ? (
                    <Check className="h-3.5 w-3.5 text-emerald-300" />
                  ) : (
                    <Copy className="h-3.5 w-3.5" />
                  )}
                  <span>{copiedField === 'email' ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="glass-panel flex items-center justify-between rounded-2xl px-4 py-3">
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-emerald-300" />
                    <div>
                      <div className="font-mono text-[10px] uppercase text-slate-400">UAE Mobile</div>
                      <div className="text-sm font-semibold text-white">{PROFILE.contact.uaePhone}</div>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy('uae', PROFILE.contact.uaePhone)}
                    aria-label="Copy UAE Mobile"
                    className="glass-chip rounded-full p-2 text-white hover:bg-white/20"
                  >
                    {copiedField === 'uae' ? (
                      <Check className="h-3.5 w-3.5 text-emerald-300" />
                    ) : (
                      <Copy className="h-3.5 w-3.5" />
                    )}
                  </button>
                </div>

                <div className="glass-panel flex items-center justify-between rounded-2xl px-4 py-3">
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-violet-300" />
                    <div>
                      <div className="font-mono text-[10px] uppercase text-slate-400">India Direct</div>
                      <div className="text-sm font-semibold text-white">{PROFILE.contact.indiaPhone}</div>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy('india', PROFILE.contact.indiaPhone)}
                    aria-label="Copy India Direct"
                    className="glass-chip rounded-full p-2 text-white hover:bg-white/20"
                  >
                    {copiedField === 'india' ? (
                      <Check className="h-3.5 w-3.5 text-emerald-300" />
                    ) : (
                      <Copy className="h-3.5 w-3.5" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2.5">
              <a
                href={PROFILE.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-chip inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold text-white transition hover:bg-white/20"
              >
                <Linkedin className="h-4 w-4 text-sky-300" />
                <span>LinkedIn</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
              <a
                href={PROFILE.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-chip inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold text-white transition hover:bg-white/20"
              >
                <Github className="h-4 w-4 text-violet-300" />
                <span>GitHub · RaqeebSyedCR7</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
              <a
                href={PROFILE.contact.companySite}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-chip inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold text-white transition hover:bg-white/20"
              >
                <Globe2 className="h-4 w-4 text-cyan-300" />
                <span>RAIZ HORIZON</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* Interactive Brief Composer Column */}
          <div className="glass-panel rounded-3xl p-5 sm:p-6 lg:col-span-6">
            <h3 className="font-display text-lg font-bold text-white">Interactive Brief Composer</h3>
            <p className="mt-1 text-xs text-slate-300">
              Select a focus area and launch a pre-filled Email or UAE WhatsApp message.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {INQUIRY_TOPICS.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setTopic(item)}
                  className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${
                    topic === item
                      ? 'bg-gradient-to-r from-cyan-300 to-violet-400 font-bold text-slate-950'
                      : 'glass-chip text-slate-200 hover:bg-white/15'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="mt-4 space-y-3">
              <input
                type="text"
                value={senderName}
                onChange={(e) => setSenderName(e.target.value)}
                placeholder="Your Name / Company"
                className="w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-400 outline-none focus:border-cyan-300/60"
              />
              <textarea
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell me about your role, AI workflow, design concept, or website idea..."
                className="w-full resize-none rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-400 outline-none focus:border-cyan-300/60"
              />
            </div>

            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href={mailtoHref}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-300 via-violet-400 to-pink-400 px-5 py-3 text-xs font-bold text-slate-950 transition hover:brightness-110"
              >
                <Send className="h-4 w-4" />
                <span>Send via Email</span>
              </a>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-chip inline-flex flex-1 items-center justify-center gap-2 rounded-full px-5 py-3 text-xs font-semibold text-emerald-200 transition hover:bg-white/20"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp UAE</span>
              </a>
            </div>
          </div>
        </div>
      </GlassCard>

      <footer className="mt-10 flex flex-col items-center justify-between gap-3 px-2 font-mono text-xs text-slate-400 sm:flex-row">
        <span>© {new Date().getFullYear()} S. Abdul Raqeeb · Built with Three.js + React + Glassmorphism</span>
        <span>Press Ctrl+K anywhere to launch Command Palette</span>
      </footer>
    </section>
  );
}
