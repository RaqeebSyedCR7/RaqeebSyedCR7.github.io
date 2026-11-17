import { useEffect, useState } from 'react';
import AboutServicesBento from './components/AboutServicesBento';
import CommandPaletteModal from './components/CommandPaletteModal';
import ContactGlassPortal from './components/ContactGlassPortal';
import CosmicGlassCanvas from './components/CosmicGlassCanvas';
import ExperienceTimeline from './components/ExperienceTimeline';
import GlassNavbar from './components/GlassNavbar';
import GlobalCursorAura from './components/GlobalCursorAura';
import HeroBento from './components/HeroBento';
import ProjectDetailModal from './components/ProjectDetailModal';
import ProjectsShowcase from './components/ProjectsShowcase';
import SkillsCredentialsVault from './components/SkillsCredentialsVault';

/**
 * Root Maximalist Glassmorphism Portfolio Application.
 */
export default function App() {
  const [themeId, setThemeId] = useState('cosmic');
  const [cmdOpen, setCmdOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', themeId);
  }, [themeId]);

  useEffect(() => {
    const onKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setCmdOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <CosmicGlassCanvas themeId={themeId} />
      <GlobalCursorAura />

      <GlassNavbar
        themeId={themeId}
        onThemeChange={setThemeId}
        onOpenCmd={() => setCmdOpen(true)}
      />

      <main className="relative z-10">
        <HeroBento />
        <AboutServicesBento />
        <ProjectsShowcase onSelectProject={setSelectedProject} />
        <ExperienceTimeline />
        <SkillsCredentialsVault />
        <ContactGlassPortal />
      </main>

      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
      <CommandPaletteModal
        open={cmdOpen}
        onClose={() => setCmdOpen(false)}
        themeId={themeId}
        onThemeChange={setThemeId}
      />
    </div>
  );
}
