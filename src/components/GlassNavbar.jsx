import { useEffect, useState } from 'react';
import { Check, Command, Copy, Palette, Sparkles } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';
import { PRISM_THEMES } from '../data/themes';

const NAV_LINKS = [
  { id: 'overview', label: 'Overview' },
  { id: 'services', label: 'Craft' },
  { id: 'work', label: 'Work' },
  { id: 'journey', label: 'Journey' },
  { id: 'vault', label: 'Vault' },
  { id: 'connect', label: 'Connect' },
];

/**
 * Floating top glass navigation dock with Dubai live clock, prism mood switcher,
 * keyboard command palette trigger, and one-click email copy.
 */
export default function GlassNavbar({ themeId, onThemeChange, onOpenCmd }) {
  const [dubaiTime, setDubaiTime] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const updateClock = () => {
      try {
        const formatted = new Intl.DateTimeFormat('en-GB', {
          timeZone: 'Asia/Dubai',
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        }).format(new Date());
        setDubaiTime(`${formatted} GST`);
      } catch {
        setDubaiTime('DXB · UAE');
      }
    };
    updateClock();
    const timer = setInterval(updateClock, 30000);
    return () => clearInterval(timer);
  }, []);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${PROFILE.contact.email}`;
    }
  };

  const cycleTheme = () => {
    const keys = Object.keys(PRISM_THEMES);
    const next = keys[(keys.indexOf(themeId) + 1) % keys.length];
    onThemeChange(next);
  };

  return (
    <header className="fixed inset-x-0 top-3 z-40 px-3 sm:top-5 sm:px-6">
      <nav
        aria-label="Primary Navigation"
        className="glass-panel-strong mx-auto flex max-w-6xl items-center justify-between gap-2 rounded-full px-3 py-2 sm:px-5"
      >
        <a
          href="#overview"
          className="flex shrink-0 items-center gap-2.5 rounded-full py-1 pl-1 pr-2 transition hover:opacity-90"
        >
          <span className="glass-chip flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-display text-xs font-extrabold tracking-wider text-white">
            SAR
          </span>
          <span className="hidden flex-col whitespace-nowrap sm:flex">
            <span className="font-display text-xs font-bold tracking-wide text-white">
              S. ABDUL RAQEEB
            </span>
            <span className="font-mono text-[10px] text-cyan-200/80">{dubaiTime}</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="whitespace-nowrap rounded-full px-3.5 py-1.5 text-xs font-medium text-slate-200/85 transition hover:bg-white/15 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          <button
            type="button"
            onClick={cycleTheme}
            title={`Switch Prism Mood (${PRISM_THEMES[themeId]?.label})`}
            className="glass-chip flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-medium text-white transition hover:bg-white/20"
          >
            <Palette className="h-3.5 w-3.5 text-cyan-300" />
            <span className="hidden xl:inline">{PRISM_THEMES[themeId]?.label}</span>
          </button>

          <button
            type="button"
            onClick={onOpenCmd}
            aria-label="Open Command Palette"
            className="glass-chip flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full px-3 py-1.5 font-mono text-[11px] text-slate-100 transition hover:bg-white/20"
          >
            <Command className="h-3.5 w-3.5 text-violet-300" />
            <span className="hidden sm:inline">Ctrl K</span>
          </button>

          <button
            type="button"
            onClick={handleCopyEmail}
            className="flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full bg-gradient-to-r from-cyan-400 via-violet-500 to-fuchsia-500 px-3.5 py-1.5 text-xs font-bold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:brightness-110"
          >
            {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
            <span>{copied ? 'Copied!' : 'Email'}</span>
            {!copied && <Sparkles className="hidden h-3 w-3 sm:inline" />}
          </button>
        </div>
      </nav>
    </header>
  );
}
