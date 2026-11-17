/**
 * Crisp architectural schematic SVGs styled via CSS theme variables
 * so every project preview maintains understated, cohesive contrast across themes.
 */
export default function ProjectVisualPreview({ visualType }) {
  if (visualType === 'rack3d') {
    return (
      <svg viewBox="0 0 360 150" className="h-full w-full" aria-hidden="true">
        <g stroke="var(--accent)" strokeWidth="1.4" fill="none">
          <polygon
            points="55,115 160,138 295,95 190,72"
            fill="var(--accent)"
            fillOpacity="0.08"
          />
          <line x1="75" y1="32" x2="75" y2="118" />
          <line x1="145" y1="47" x2="145" y2="133" />
          <line x1="215" y1="24" x2="215" y2="110" />
          <line x1="280" y1="40" x2="280" y2="98" />
          <polyline points="75,54 145,69 280,50" />
          <polyline points="75,84 145,99 280,76" />
          <rect x="92" y="42" width="34" height="16" rx="3" fill="var(--accent)" fillOpacity="0.16" />
          <rect x="168" y="64" width="38" height="18" rx="3" fill="var(--ink-primary)" fillOpacity="0.10" stroke="var(--ink-muted)" />
          <rect x="226" y="45" width="32" height="15" rx="3" fill="var(--accent)" fillOpacity="0.16" />
        </g>
        <text x="18" y="22" fill="var(--ink-muted)" fontSize="10" fontFamily="monospace">
          THREE.JS · 3D RACK CONFIGURATOR · 17 SYSTEMS
        </text>
      </svg>
    );
  }

  if (visualType === 'agents') {
    return (
      <svg viewBox="0 0 360 150" className="h-full w-full" aria-hidden="true">
        <g stroke="var(--ink-muted)" strokeWidth="1.2" fill="none" strokeDasharray="3 3" opacity="0.75">
          <line x1="92" y1="75" x2="145" y2="34" />
          <line x1="92" y1="75" x2="145" y2="75" />
          <line x1="92" y1="75" x2="145" y2="116" />
          <line x1="222" y1="34" x2="284" y2="50" />
          <line x1="222" y1="75" x2="284" y2="78" />
          <line x1="222" y1="116" x2="284" y2="106" />
        </g>
        <rect x="20" y="55" width="74" height="40" rx="10" fill="var(--accent)" fillOpacity="0.14" stroke="var(--accent)" />
        <text x="57" y="79" textAnchor="middle" fill="var(--ink-primary)" fontSize="9.5" fontFamily="monospace" fontWeight="600">
          PAPERCLIP 10
        </text>
        <rect x="145" y="20" width="78" height="28" rx="8" fill="var(--glass-chip-bg)" stroke="var(--ink-muted)" strokeOpacity="0.45" />
        <text x="184" y="38" textAnchor="middle" fill="var(--ink-primary)" fontSize="9" fontFamily="monospace">
          FFMPEG 4K
        </text>
        <rect x="145" y="61" width="78" height="28" rx="8" fill="var(--accent)" fillOpacity="0.12" stroke="var(--accent)" />
        <text x="184" y="79" textAnchor="middle" fill="var(--ink-primary)" fontSize="9" fontFamily="monospace">
          N8N WEBHOOK
        </text>
        <rect x="145" y="102" width="78" height="28" rx="8" fill="var(--glass-chip-bg)" stroke="var(--ink-muted)" strokeOpacity="0.45" />
        <text x="184" y="120" textAnchor="middle" fill="var(--ink-primary)" fontSize="9" fontFamily="monospace">
          POSTGRES ERP
        </text>
        {[
          { y: 50, t: 'IN' },
          { y: 78, t: 'IG' },
          { y: 106, t: 'YT' },
        ].map((ch) => (
          <g key={ch.t}>
            <circle cx="298" cy={ch.y} r="13" fill="var(--accent)" fillOpacity="0.12" stroke="var(--accent)" />
            <text x="298" y={ch.y + 3} textAnchor="middle" fill="var(--ink-primary)" fontSize="8" fontFamily="monospace" fontWeight="600">
              {ch.t}
            </text>
          </g>
        ))}
      </svg>
    );
  }

  if (visualType === 'graph') {
    const nodes = [
      [60, 52],
      [118, 34],
      [145, 94],
      [205, 44],
      [230, 114],
      [290, 58],
      [310, 110],
      [88, 114],
    ];
    return (
      <svg viewBox="0 0 360 150" className="h-full w-full" aria-hidden="true">
        <g stroke="var(--accent)" strokeOpacity="0.45" strokeWidth="1.2">
          <line x1="60" y1="52" x2="118" y2="34" />
          <line x1="118" y1="34" x2="145" y2="94" />
          <line x1="118" y1="34" x2="205" y2="44" />
          <line x1="145" y1="94" x2="230" y2="114" />
          <line x1="205" y1="44" x2="290" y2="58" />
          <line x1="205" y1="44" x2="230" y2="114" />
          <line x1="290" y1="58" x2="310" y2="110" />
          <line x1="60" y1="52" x2="88" y2="114" />
          <line x1="88" y1="114" x2="145" y2="94" />
        </g>
        {nodes.map(([cx, cy], i) => (
          <circle
            key={i}
            cx={cx}
            cy={cy}
            r={i % 2 === 0 ? 7.5 : 5}
            fill={i % 2 === 0 ? 'var(--accent)' : 'var(--ink-muted)'}
            fillOpacity={i % 2 === 0 ? 0.85 : 0.45}
            stroke="var(--ink-primary)"
            strokeOpacity="0.35"
          />
        ))}
        <text x="18" y="20" fill="var(--ink-muted)" fontSize="10" fontFamily="monospace">
          26,171 NODES · 55,427 EDGES · 1,308 CLUSTERS
        </text>
      </svg>
    );
  }

  if (visualType === 'tableau') {
    const bars = [44, 72, 58, 92, 66, 108, 82, 98];
    return (
      <svg viewBox="0 0 360 150" className="h-full w-full" aria-hidden="true">
        {bars.map((h, i) => (
          <rect
            key={i}
            x={26 + i * 24}
            y={130 - h * 0.72}
            width="16"
            height={h * 0.72}
            rx="4"
            fill="var(--accent)"
            fillOpacity={0.28 + (i % 3) * 0.22}
            stroke="var(--accent)"
            strokeOpacity="0.55"
          />
        ))}
        <circle cx="286" cy="78" r="34" fill="none" stroke="var(--accent)" strokeWidth="8" strokeDasharray="125 90" />
        <circle cx="286" cy="78" r="34" fill="none" stroke="var(--ink-muted)" strokeOpacity="0.38" strokeWidth="8" strokeDasharray="70 145" strokeDashoffset="-130" />
        <text x="18" y="22" fill="var(--ink-muted)" fontSize="10" fontFamily="monospace">
          10,000+ TITLES · 190+ COUNTRIES · 20 YRS
        </text>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 360 150" className="h-full w-full" aria-hidden="true">
      <g stroke="var(--accent)" strokeOpacity="0.65" strokeWidth="1.5" fill="none">
        <path d="M180,40 L180,68 M110,68 L250,68 M110,68 L110,95 M250,68 L250,95" />
      </g>
      <rect x="140" y="16" width="80" height="24" rx="8" fill="var(--accent)" fillOpacity="0.16" stroke="var(--accent)" />
      <text x="180" y="32" textAnchor="middle" fill="var(--ink-primary)" fontSize="9.5" fontFamily="monospace">
        ROOT NODE
      </text>
      <rect x="70" y="95" width="80" height="26" rx="8" fill="var(--glass-chip-bg)" stroke="var(--ink-muted)" strokeOpacity="0.55" />
      <text x="110" y="112" textAnchor="middle" fill="var(--ink-primary)" fontSize="9" fontFamily="monospace">
        BRANCH A
      </text>
      <rect x="210" y="95" width="80" height="26" rx="8" fill="var(--glass-chip-bg)" stroke="var(--ink-muted)" strokeOpacity="0.55" />
      <text x="250" y="112" textAnchor="middle" fill="var(--ink-primary)" fontSize="9" fontFamily="monospace">
        BRANCH B
      </text>
    </svg>
  );
}
