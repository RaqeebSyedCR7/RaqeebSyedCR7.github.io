/**
 * Crisp inline SVG holographic schematics for each flagship project card
 * so every showcase card displays rich visual identity with zero broken binary images.
 */
export default function ProjectVisualPreview({ visualType }) {
  if (visualType === 'rack3d') {
    return (
      <svg viewBox="0 0 360 150" className="h-full w-full" aria-hidden="true">
        <defs>
          <linearGradient id="r3d" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#00F5D4" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.85" />
          </linearGradient>
        </defs>
        <g stroke="url(#r3d)" strokeWidth="1.5" fill="none">
          <polygon points="55,115 160,138 295,95 190,72" fill="#00F5D4" fillOpacity="0.08" />
          <line x1="75" y1="30" x2="75" y2="118" />
          <line x1="145" y1="45" x2="145" y2="133" />
          <line x1="215" y1="22" x2="215" y2="110" />
          <line x1="280" y1="38" x2="280" y2="98" />
          <polyline points="75,52 145,67 280,48" />
          <polyline points="75,82 145,97 280,74" />
          <rect x="92" y="42" width="34" height="16" rx="2" fill="#00F5D4" fillOpacity="0.22" />
          <rect x="168" y="64" width="38" height="18" rx="2" fill="#8B5CF6" fillOpacity="0.26" />
          <rect x="226" y="45" width="32" height="15" rx="2" fill="#EC4899" fillOpacity="0.24" />
        </g>
        <text x="18" y="24" fill="#A5F3FC" fontSize="10" fontFamily="monospace">
          THREE.JS · 3D RACK CONFIGURATOR · 17 SYSTEMS
        </text>
      </svg>
    );
  }

  if (visualType === 'agents') {
    return (
      <svg viewBox="0 0 360 150" className="h-full w-full" aria-hidden="true">
        <g stroke="#C4B5FD" strokeWidth="1.3" fill="none" opacity="0.85">
          <line x1="75" y1="75" x2="180" y2="35" />
          <line x1="75" y1="75" x2="180" y2="75" />
          <line x1="75" y1="75" x2="180" y2="115" />
          <line x1="180" y1="35" x2="290" y2="50" />
          <line x1="180" y1="75" x2="290" y2="75" />
          <line x1="180" y1="115" x2="290" y2="105" />
        </g>
        <rect x="22" y="55" width="70" height="40" rx="10" fill="#8B5CF6" fillOpacity="0.3" stroke="#E9D5FF" />
        <text x="57" y="79" textAnchor="middle" fill="#FFF" fontSize="9.5" fontFamily="monospace">
          PAPERCLIP 10
        </text>
        <rect x="145" y="20" width="76" height="28" rx="8" fill="#00F5D4" fillOpacity="0.22" stroke="#67E8F9" />
        <text x="183" y="38" textAnchor="middle" fill="#ECFEFF" fontSize="9" fontFamily="monospace">
          FFMPEG 4K
        </text>
        <rect x="145" y="61" width="76" height="28" rx="8" fill="#EC4899" fillOpacity="0.24" stroke="#F9A8D4" />
        <text x="183" y="79" textAnchor="middle" fill="#FDF2F8" fontSize="9" fontFamily="monospace">
          N8N WEBHOOK
        </text>
        <rect x="145" y="102" width="76" height="28" rx="8" fill="#38BDF8" fillOpacity="0.22" stroke="#93C5FD" />
        <text x="183" y="120" textAnchor="middle" fill="#EFF6FF" fontSize="9" fontFamily="monospace">
          POSTGRES ERP
        </text>
        <circle cx="298" cy="50" r="14" fill="#38BDF8" fillOpacity="0.25" stroke="#BAE6FD" />
        <text x="298" y="53" textAnchor="middle" fill="#FFF" fontSize="8" fontFamily="monospace">
          IN
        </text>
        <circle cx="298" cy="78" r="14" fill="#EC4899" fillOpacity="0.25" stroke="#FBCFE8" />
        <text x="298" y="81" textAnchor="middle" fill="#FFF" fontSize="8" fontFamily="monospace">
          IG
        </text>
        <circle cx="298" cy="106" r="14" fill="#F43F5E" fillOpacity="0.25" stroke="#FECDD3" />
        <text x="298" y="109" textAnchor="middle" fill="#FFF" fontSize="8" fontFamily="monospace">
          YT
        </text>
      </svg>
    );
  }

  if (visualType === 'graph') {
    const nodes = [
      [60, 50],
      [118, 30],
      [145, 92],
      [205, 42],
      [230, 112],
      [290, 58],
      [310, 110],
      [88, 114],
    ];
    return (
      <svg viewBox="0 0 360 150" className="h-full w-full" aria-hidden="true">
        <g stroke="#5EEAD4" strokeOpacity="0.45" strokeWidth="1.2">
          <line x1="60" y1="50" x2="118" y2="30" />
          <line x1="118" y1="30" x2="145" y2="92" />
          <line x1="118" y1="30" x2="205" y2="42" />
          <line x1="145" y1="92" x2="230" y2="112" />
          <line x1="205" y1="42" x2="290" y2="58" />
          <line x1="205" y1="42" x2="230" y2="112" />
          <line x1="290" y1="58" x2="310" y2="110" />
          <line x1="60" y1="50" x2="88" y2="114" />
          <line x1="88" y1="114" x2="145" y2="92" />
        </g>
        {nodes.map(([cx, cy], i) => (
          <circle
            key={i}
            cx={cx}
            cy={cy}
            r={i % 2 === 0 ? 8 : 5.5}
            fill={i % 3 === 0 ? '#00F5D4' : i % 3 === 1 ? '#8B5CF6' : '#38BDF8'}
            fillOpacity="0.65"
            stroke="#FFFFFF"
            strokeOpacity="0.7"
          />
        ))}
        <text x="18" y="20" fill="#A7F3D0" fontSize="10" fontFamily="monospace">
          26,171 NODES · 55,427 EDGES · 1,308 CLUSTERS
        </text>
      </svg>
    );
  }

  if (visualType === 'tableau') {
    const bars = [44, 72, 58, 92, 66, 108, 82, 98];
    return (
      <svg viewBox="0 0 360 150" className="h-full w-full" aria-hidden="true">
        <defs>
          <linearGradient id="tbar" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FB7185" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        {bars.map((h, i) => (
          <rect
            key={i}
            x={26 + i * 24}
            y={130 - h * 0.72}
            width="16"
            height={h * 0.72}
            rx="4"
            fill="url(#tbar)"
            stroke="#FDA4AF"
            strokeOpacity="0.5"
          />
        ))}
        <circle cx="286" cy="78" r="34" fill="none" stroke="#FBBF24" strokeWidth="8" strokeDasharray="120 90" />
        <circle cx="286" cy="78" r="34" fill="none" stroke="#EC4899" strokeWidth="8" strokeDasharray="70 140" strokeDashoffset="-125" />
        <text x="18" y="22" fill="#FECDD3" fontSize="10" fontFamily="monospace">
          10,000+ TITLES · 190+ COUNTRIES · 20 YRS
        </text>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 360 150" className="h-full w-full" aria-hidden="true">
      <g stroke="#FDE68A" strokeOpacity="0.7" strokeWidth="1.5" fill="none">
        <path d="M180,38 L180,68 M110,68 L250,68 M110,68 L110,95 M250,68 L250,95" />
      </g>
      <rect x="140" y="16" width="80" height="24" rx="8" fill="#00F5D4" fillOpacity="0.25" stroke="#67E8F9" />
      <text x="180" y="32" textAnchor="middle" fill="#FFF" fontSize="9.5" fontFamily="monospace">
        ROOT NODE
      </text>
      <rect x="70" y="95" width="80" height="26" rx="8" fill="#FBBF24" fillOpacity="0.25" stroke="#FDE68A" />
      <text x="110" y="112" textAnchor="middle" fill="#FFF" fontSize="9" fontFamily="monospace">
        BRANCH A
      </text>
      <rect x="210" y="95" width="80" height="26" rx="8" fill="#8B5CF6" fillOpacity="0.25" stroke="#DDD6FE" />
      <text x="250" y="112" textAnchor="middle" fill="#FFF" fontSize="9" fontFamily="monospace">
        BRANCH B
      </text>
    </svg>
  );
}
