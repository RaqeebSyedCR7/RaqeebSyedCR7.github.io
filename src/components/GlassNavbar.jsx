import { useEffect, useRef, useState } from 'react';
import { Check, Command, Copy, Palette } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';
import { PRISM_THEMES } from '../data/themes';

const NAV_LINKS = [
  { id: 'overview', label: 'Overview', det: 'profile 0.99' },
  { id: 'services', label: 'Craft', det: 'craft 0.98' },
  { id: 'work', label: 'Work', det: 'builds 0.99' },
  { id: 'journey', label: 'Journey', det: 'career 0.97' },
  { id: 'vault', label: 'Vault', det: 'skills 0.96' },
  { id: 'connect', label: 'Connect', det: 'contact 0.95' },
];

/**
 * Floating glass navigation dock featuring jong980812-inspired corner-bracket
 * hover detection and a smooth gliding timeline playhead along its bottom edge.
 */
export default function GlassNavbar({ themeId, onThemeChange, onOpenCmd }) {
  const [dubaiTime, setDubaiTime] = useState('');
  const [copied, setCopied] = useState(false);
  const navRef = useRef(null);
  const fillRef = useRef(null);
  const headRef = useRef(null);
  const targetXRef = useRef(null);

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

  // Smooth drifting playhead along the navbar bottom timeline (glides smoothly under hovered link)
  useEffect(() => {
    const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let x = 0;
    let last = performance.now();
    let frameId;

    const tick = (now) => {
      const dt = Math.min(now - last, 50);
      last = now;
      const bar = navRef.current;
      if (bar && fillRef.current && headRef.current) {
        const w = bar.clientWidth;
        if (targetXRef.current !== null) {
          x += (targetXRef.current - x) * Math.min(1, dt / 120);
        } else if (!still && w > 0) {
          x += (w / 26000) * dt;
        }
        if (w > 0 && x > w) x = 0;
        fillRef.current.style.width = `${x}px`;
        headRef.current.style.left = `${x}px`;
      }
      frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, []);

  const handleLinkEnter = (e) => {
    if (!navRef.current) return;
    const r = e.currentTarget.getBoundingClientRect();
    const b = navRef.current.getBoundingClientRect();
    targetXRef.current = r.left + r.width / 2 - b.left;
  };

  const handleLinkLeave = () => {
    targetXRef.current = null;
  };

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
        ref={navRef}
        aria-label="Primary Navigation"
        className="glass-panel-strong mx-auto max-w-6xl overflow-visible rounded-2xl px-3 pt-2 sm:rounded-full sm:px-6"
      >
        <div className="flex items-center justify-between gap-2 pb-1.5">
          <a
            href="#overview"
            data-det="person 0.99"
            onMouseEnter={handleLinkEnter}
            onMouseLeave={handleLinkLeave}
            className="det-link flex shrink-0 items-center gap-2.5 rounded-full py-1 pl-1 pr-2 transition hover:opacity-90"
          >
            <span className="glass-chip text-ink flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-display text-xs font-bold tracking-wider">
              SAR
            </span>
            <span className="hidden flex-col whitespace-nowrap sm:flex">
              <span className="text-ink font-display text-xs font-bold tracking-wide">
                S. ABDUL RAQEEB
              </span>
              <span className="text-accent font-mono text-[10px] font-medium">{dubaiTime}</span>
            </span>
          </a>

          <div className="hidden items-center gap-2 lg:flex">
            {NAV_LINKS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                data-det={item.det}
                onMouseEnter={handleLinkEnter}
                onMouseLeave={handleLinkLeave}
                className="det-link text-ink-secondary hover:text-ink whitespace-nowrap rounded-full px-3 py-1 text-xs font-semibold transition"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
            <button
              type="button"
              onClick={cycleTheme}
              title={`Switch Theme (${PRISM_THEMES[themeId]?.label})`}
              className="glass-chip text-ink flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-medium hover:opacity-85"
            >
              <Palette className="text-accent h-3.5 w-3.5" />
              <span className="hidden xl:inline">{PRISM_THEMES[themeId]?.label}</span>
            </button>

            <button
              type="button"
              onClick={onOpenCmd}
              aria-label="Open Command Palette"
              className="glass-chip text-ink flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full px-3 py-1.5 font-mono text-[11px] hover:opacity-85"
            >
              <Command className="text-accent h-3.5 w-3.5" />
              <span className="hidden sm:inline">Ctrl K</span>
            </button>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="btn-accent flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full px-3.5 py-1.5 text-xs font-semibold"
            >
              {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
              <span>{copied ? 'Copied' : 'Email'}</span>
            </button>
          </div>
        </div>

        {/* Bottom-edge smooth timeline playhead track (jong980812 signature polish) */}
        <div aria-hidden="true" className="nav-timeline mx-auto w-[96%]">
          <div className="nav-timeline-ticks" />
          <div ref={fillRef} className="nav-timeline-fill" />
          <div ref={headRef} className="nav-timeline-head" />
        </div>
      </nav>
    </header>
  );
}
