/**
 * Prism mood themes controlling CSS variables, ambient aura orbs, and WebGL crystal palette.
 */
export const PRISM_THEMES = {
  cosmic: {
    id: 'cosmic',
    label: 'Cosmic Prism',
    swatch: ['#00F5D4', '#8B5CF6', '#EC4899'],
    three: {
      wireA: 0x00f5d4,
      wireB: 0x8b5cf6,
      lightA: 0x00f5d4,
      lightB: 0xec4899,
      lightC: 0x8b5cf6,
      particles: 0x93c5fd,
    },
    orbs: [
      'radial-gradient(circle, rgba(0,245,212,0.30) 0%, rgba(0,245,212,0) 70%)',
      'radial-gradient(circle, rgba(139,92,246,0.34) 0%, rgba(139,92,246,0) 70%)',
      'radial-gradient(circle, rgba(236,72,153,0.28) 0%, rgba(236,72,153,0) 70%)',
    ],
  },
  obsidian: {
    id: 'obsidian',
    label: 'Cyber Obsidian',
    swatch: ['#E2E8F0', '#38BDF8', '#818CF8'],
    three: {
      wireA: 0x38bdf8,
      wireB: 0xe2e8f0,
      lightA: 0x38bdf8,
      lightB: 0x818cf8,
      lightC: 0x22d3ee,
      particles: 0xe2e8f0,
    },
    orbs: [
      'radial-gradient(circle, rgba(56,189,248,0.28) 0%, rgba(56,189,248,0) 70%)',
      'radial-gradient(circle, rgba(129,140,248,0.30) 0%, rgba(129,140,248,0) 70%)',
      'radial-gradient(circle, rgba(226,232,240,0.18) 0%, rgba(226,232,240,0) 70%)',
    ],
  },
  solar: {
    id: 'solar',
    label: 'Solar Gold',
    swatch: ['#FBBF24', '#F43F5E', '#A855F7'],
    three: {
      wireA: 0xfbbf24,
      wireB: 0xf43f5e,
      lightA: 0xfbbf24,
      lightB: 0xf43f5e,
      lightC: 0xa855f7,
      particles: 0xfde68a,
    },
    orbs: [
      'radial-gradient(circle, rgba(251,191,36,0.30) 0%, rgba(251,191,36,0) 70%)',
      'radial-gradient(circle, rgba(244,63,94,0.28) 0%, rgba(244,63,94,0) 70%)',
      'radial-gradient(circle, rgba(168,85,247,0.30) 0%, rgba(168,85,247,0) 70%)',
    ],
  },
};
