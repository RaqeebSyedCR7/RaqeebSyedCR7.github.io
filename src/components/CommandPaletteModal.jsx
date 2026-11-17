import { useEffect, useMemo, useState } from 'react';
import { ArrowUpRight, Check, Copy, CornerDownLeft, Palette, Search, X } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';
import { PRISM_THEMES } from '../data/themes';

/**
 * Interactive Ctrl/Cmd + K frosted glass command palette for quick navigation,
 * theme switching, and one-click contact actions.
 */
export default function CommandPaletteModal({ open, onClose, themeId, onThemeChange }) {
  const [query, setQuery] = useState('');
  const [copiedKey, setCopiedKey] = useState('');

  useEffect(() => {
    if (!open) {
      setQuery('');
      return;
    }
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  const actions = useMemo(
    () => [
      { id: 'nav-overview', group: 'Navigate', label: 'Jump to Hero & KPI Telemetry', href: '#overview' },
      { id: 'nav-services', group: 'Navigate', label: 'Jump to Craft & LinkedIn Services', href: '#services' },
      { id: 'nav-work', group: 'Navigate', label: 'Jump to Flagship Work & Case Studies', href: '#work' },
      { id: 'nav-journey', group: 'Navigate', label: 'Jump to Career Timeline (RAIZ, CGI, MeriSKILL)', href: '#journey' },
      { id: 'nav-vault', group: 'Navigate', label: 'Jump to 51-Skill Constellation & Credentials', href: '#vault' },
      { id: 'nav-connect', group: 'Navigate', label: 'Jump to Contact & Brief Composer', href: '#connect' },
      {
        id: 'copy-email',
        group: 'Quick Copy',
        label: `Copy Email (${PROFILE.contact.email})`,
        copyValue: PROFILE.contact.email,
      },
      {
        id: 'copy-uae',
        group: 'Quick Copy',
        label: `Copy UAE Mobile (${PROFILE.contact.uaePhone})`,
        copyValue: PROFILE.contact.uaePhone,
      },
      {
        id: 'ext-linkedin',
        group: 'External',
        label: 'Open LinkedIn Profile',
        external: PROFILE.contact.linkedin,
      },
      {
        id: 'ext-github',
        group: 'External',
        label: 'Open GitHub (RaqeebSyedCR7)',
        external: PROFILE.contact.github,
      },
      {
        id: 'ext-raiz',
        group: 'External',
        label: 'Visit RAIZ HORIZON Live Platform',
        external: PROFILE.contact.companySite,
      },
      ...Object.values(PRISM_THEMES).map((t) => ({
        id: `theme-${t.id}`,
        group: 'Theme',
        label: `Activate ${t.label} Glass Theme${themeId === t.id ? ' (Active)' : ''}`,
        themeTarget: t.id,
      })),
    ],
    [themeId]
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return actions;
    return actions.filter(
      (a) => a.label.toLowerCase().includes(q) || a.group.toLowerCase().includes(q)
    );
  }, [actions, query]);

  if (!open) return null;

  const triggerAction = async (item) => {
    if (item.href) {
      document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
      onClose();
      return;
    }
    if (item.external) {
      window.open(item.external, '_blank', 'noopener,noreferrer');
      onClose();
      return;
    }
    if (item.copyValue) {
      try {
        await navigator.clipboard.writeText(item.copyValue);
        setCopiedKey(item.id);
        setTimeout(() => setCopiedKey(''), 1500);
      } catch {
        // Clipboard API fallback ignored in non-secure frames
      }
      return;
    }
    if (item.themeTarget) {
      onThemeChange(item.themeTarget);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Command Palette"
      className="fixed inset-0 z-50 flex items-start justify-center px-4 pt-24 backdrop-blur-md"
      style={{ background: 'var(--modal-backdrop)' }}
      onClick={onClose}
    >
      <div
        className="glass-panel-strong prism-border-beam w-full max-w-xl overflow-hidden rounded-3xl p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="border-glass-line flex items-center gap-3 border-b pb-3">
          <Search className="text-accent h-4 w-4" />
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search sections, copy contact, or switch glass theme..."
            className="text-ink w-full bg-transparent text-sm placeholder:opacity-55 outline-none"
          />
          <button
            type="button"
            onClick={onClose}
            className="glass-chip text-ink-muted hover:text-ink rounded-full p-1.5"
            aria-label="Close command palette"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-3 max-h-80 space-y-1 overflow-y-auto pr-1">
          {filtered.length === 0 ? (
            <p className="text-ink-muted py-6 text-center text-xs">No matching commands found.</p>
          ) : (
            filtered.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => triggerAction(item)}
                className="text-ink hover:bg-accent-soft flex w-full items-center justify-between rounded-2xl px-3.5 py-2.5 text-left text-sm transition"
              >
                <div className="flex items-center gap-2.5">
                  <span className="bg-glass-subtle text-accent rounded-lg px-2 py-0.5 font-mono text-[10px] font-medium uppercase tracking-wider">
                    {item.group}
                  </span>
                  <span>{item.label}</span>
                </div>
                {item.copyValue ? (
                  copiedKey === item.id ? (
                    <Check className="text-accent h-4 w-4" />
                  ) : (
                    <Copy className="text-ink-muted h-4 w-4" />
                  )
                ) : item.themeTarget ? (
                  <Palette className="text-accent h-4 w-4" />
                ) : item.external ? (
                  <ArrowUpRight className="text-accent h-4 w-4" />
                ) : (
                  <CornerDownLeft className="text-ink-muted h-3.5 w-3.5" />
                )}
              </button>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
