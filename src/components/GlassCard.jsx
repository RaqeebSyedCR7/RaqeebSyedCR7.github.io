import { useRef, useState } from 'react';

/**
 * Reusable interactive glassmorphism panel featuring pointer-tracked specular glare,
 * subtle 3D micro-tilt, and optional animated conic-gradient prism rim lighting.
 */
export default function GlassCard({
  children,
  className = '',
  strong = false,
  prismBeam = false,
  tilt = true,
  onClick,
  as: Tag = 'div',
  ...props
}) {
  const ref = useRef(null);
  const [coords, setCoords] = useState({ x: 50, y: 50, rx: 0, ry: 0, active: false });

  const handleMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = ((e.clientX - rect.left) / rect.width) * 100;
    const py = ((e.clientY - rect.top) / rect.height) * 100;
    const rx = tilt ? ((py - 50) / 50) * -4.5 : 0;
    const ry = tilt ? ((px - 50) / 50) * 4.5 : 0;
    setCoords({ x: px, y: py, rx, ry, active: true });
  };

  const handleLeave = () => {
    setCoords((prev) => ({ ...prev, rx: 0, ry: 0, active: false }));
  };

  const baseClass = strong ? 'glass-panel-strong' : 'glass-panel';
  const beamClass = prismBeam ? 'prism-border-beam' : '';

  return (
    <Tag
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onClick={onClick}
      style={{
        transform:
          tilt && coords.active
            ? `perspective(1100px) rotateX(${coords.rx}deg) rotateY(${coords.ry}deg) translateZ(0)`
            : 'perspective(1100px) rotateX(0deg) rotateY(0deg) translateZ(0)',
        transition: coords.active
          ? 'transform 120ms ease-out, border-color 250ms ease'
          : 'transform 450ms cubic-bezier(0.22, 1, 0.36, 1), border-color 250ms ease',
      }}
      className={`${baseClass} ${beamClass} overflow-hidden rounded-3xl ${className}`}
      {...props}
    >
      {/* Dynamic pointer-tracking inner specular sheen */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300"
        style={{
          opacity: coords.active ? 1 : 0,
          background: `radial-gradient(460px circle at ${coords.x}% ${coords.y}%, rgba(255,255,255,0.16), transparent 55%)`,
        }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </Tag>
  );
}
