import { useEffect, useState } from 'react';

/**
 * Subtle pointer-following radial ambient aura matching the active theme accent.
 */
export default function GlobalCursorAura() {
  const [pos, setPos] = useState({ x: -300, y: -300 });

  useEffect(() => {
    const onMove = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[1] hidden transition-opacity duration-300 lg:block"
      style={{
        background: `radial-gradient(500px circle at ${pos.x}px ${pos.y}px, var(--accent-soft), transparent 70%)`,
      }}
    />
  );
}
