import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { PRISM_THEMES } from '../data/themes';

/**
 * Full-bleed interactive WebGL background rendering an understated frosted architectural
 * glass polyhedron, wireframe lattice, orbital rings, and damped particle field.
 */
export default function CosmicGlassCanvas({ themeId = 'paper' }) {
  const mountRef = useRef(null);
  const refs = useRef({});
  const initialThemeRef = useRef(themeId);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    } catch {
      return;
    }

    const width = window.innerWidth;
    const height = window.innerHeight;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    renderer.setSize(width, height);
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(48, width / height, 0.1, 100);
    camera.position.set(0, 0, 12);

    const palette = PRISM_THEMES[initialThemeRef.current]?.three || PRISM_THEMES.paper.three;

    const ambient = new THREE.AmbientLight(0xffffff, 0.9);
    const lightA = new THREE.PointLight(palette.lightA, 18, 30);
    lightA.position.set(5, 4, 6);
    const lightB = new THREE.PointLight(palette.lightB, 16, 30);
    lightB.position.set(-5, -3, 5);
    const lightC = new THREE.PointLight(palette.lightC, 14, 30);
    lightC.position.set(0, 6, -4);
    scene.add(ambient, lightA, lightB, lightC);

    const group = new THREE.Group();
    scene.add(group);

    // Core faceted frosted glass polyhedron
    const crystalGeo = new THREE.IcosahedronGeometry(2.1, 1);
    const crystalMat = new THREE.MeshPhysicalMaterial({
      color: palette.wireA,
      emissive: palette.wireB,
      emissiveIntensity: 0.12,
      roughness: 0.18,
      metalness: 0.2,
      clearcoat: 1.0,
      transparent: true,
      opacity: palette.crystalOpacity,
    });
    const crystalMesh = new THREE.Mesh(crystalGeo, crystalMat);
    const crystalWireMat = new THREE.MeshBasicMaterial({
      color: palette.wireA,
      wireframe: true,
      transparent: true,
      opacity: palette.wireOpacity,
    });
    const crystalWire = new THREE.Mesh(crystalGeo, crystalWireMat);
    group.add(crystalMesh, crystalWire);

    // Subtle architectural torus knot lattice
    const cageGeo = new THREE.TorusKnotGeometry(3.4, 0.085, 130, 16, 2, 3);
    const cageMat = new THREE.MeshStandardMaterial({
      color: palette.wireA,
      emissive: palette.wireA,
      emissiveIntensity: 0.25,
      wireframe: true,
      transparent: true,
      opacity: palette.wireOpacity * 0.85,
    });
    const cageMesh = new THREE.Mesh(cageGeo, cageMat);
    group.add(cageMesh);

    // Thin orbital rings
    const ringGeo = new THREE.TorusGeometry(4.6, 0.02, 16, 120);
    const ringMat = new THREE.MeshStandardMaterial({
      color: palette.wireB,
      emissive: palette.wireB,
      emissiveIntensity: 0.3,
      transparent: true,
      opacity: palette.ringOpacity,
    });
    const ringA = new THREE.Mesh(ringGeo, ringMat);
    ringA.rotation.x = Math.PI / 3;
    const ringB = new THREE.Mesh(ringGeo, ringMat);
    ringB.rotation.y = Math.PI / 3.5;
    ringB.scale.setScalar(1.16);
    group.add(ringA, ringB);

    // Floating geometric shards
    const shardGeo = new THREE.OctahedronGeometry(0.4, 0);
    const shards = [];
    for (let i = 0; i < 8; i += 1) {
      const shard = new THREE.Mesh(shardGeo, crystalMat);
      const angle = (i / 8) * Math.PI * 2;
      shard.position.set(Math.cos(angle) * 5.4, Math.sin(angle * 2) * 1.9, Math.sin(angle) * 3.2);
      shards.push({ mesh: shard, angle, speed: 0.16 + (i % 3) * 0.07 });
      group.add(shard);
    }

    // Subtle spatial particles
    const particleCount = 460;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i += 1) {
      positions[i * 3] = (Math.random() - 0.5) * 36;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 28;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 24 - 4;
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: palette.particles,
      size: 0.06,
      transparent: true,
      opacity: 0.45,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    refs.current = { lightA, lightB, lightC, cageMat, ringMat, particleMat, crystalMat, crystalWireMat };

    const pointer = { x: 0, y: 0, tx: 0, ty: 0 };
    const onPointerMove = (e) => {
      pointer.tx = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.ty = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    const onResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('resize', onResize);

    const clock = new THREE.Clock();
    let frameId;

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();
      const scrollRatio = window.scrollY / Math.max(document.body.scrollHeight - window.innerHeight, 1);

      pointer.x += (pointer.tx - pointer.x) * 0.035;
      pointer.y += (pointer.ty - pointer.y) * 0.035;

      if (!prefersReduced) {
        crystalMesh.rotation.x = t * 0.1 + pointer.y * 0.25;
        crystalMesh.rotation.y = t * 0.14 + pointer.x * 0.3;
        crystalWire.rotation.copy(crystalMesh.rotation);
        cageMesh.rotation.x = -t * 0.06 + scrollRatio * 1.1;
        cageMesh.rotation.y = t * 0.09;
        ringA.rotation.z = t * 0.11;
        ringB.rotation.x = -t * 0.09;
        particles.rotation.y = t * 0.018 + pointer.x * 0.05;

        shards.forEach((s) => {
          const a = s.angle + t * s.speed;
          s.mesh.position.x = Math.cos(a) * 5.2;
          s.mesh.position.z = Math.sin(a) * 3.4;
          s.mesh.rotation.x += 0.006;
          s.mesh.rotation.y += 0.008;
        });

        lightA.position.x = Math.sin(t * 0.35) * 6;
        lightB.position.y = Math.cos(t * 0.3) * 5;
      }

      group.position.x = pointer.x * 0.55 + Math.sin(scrollRatio * Math.PI) * 0.9;
      group.position.y = pointer.y * 0.38 - scrollRatio * 0.9;
      camera.position.z = 12 - scrollRatio * 1.8;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('resize', onResize);
      crystalGeo.dispose();
      crystalMat.dispose();
      crystalWireMat.dispose();
      cageGeo.dispose();
      cageMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      shardGeo.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  useEffect(() => {
    const palette = PRISM_THEMES[themeId]?.three;
    const { lightA, lightB, lightC, cageMat, ringMat, particleMat, crystalMat, crystalWireMat } = refs.current;
    if (!palette || !lightA) return;
    lightA.color.setHex(palette.lightA);
    lightB.color.setHex(palette.lightB);
    lightC.color.setHex(palette.lightC);
    cageMat.color.setHex(palette.wireA);
    cageMat.emissive.setHex(palette.wireA);
    cageMat.opacity = palette.wireOpacity * 0.85;
    ringMat.color.setHex(palette.wireB);
    ringMat.emissive.setHex(palette.wireB);
    ringMat.opacity = palette.ringOpacity;
    particleMat.color.setHex(palette.particles);
    crystalMat.color.setHex(palette.wireA);
    crystalMat.emissive.setHex(palette.wireB);
    crystalMat.opacity = palette.crystalOpacity;
    crystalWireMat.color.setHex(palette.wireA);
    crystalWireMat.opacity = palette.wireOpacity;
  }, [themeId]);

  const theme = PRISM_THEMES[themeId] || PRISM_THEMES.paper;

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div
        className="animate-float-slow absolute -left-32 -top-32 h-[540px] w-[540px] rounded-full blur-3xl transition-all duration-700"
        style={{ background: theme.orbs[0] }}
      />
      <div
        className="animate-float-slow absolute -right-24 top-1/4 h-[620px] w-[620px] rounded-full blur-3xl transition-all duration-700"
        style={{ background: theme.orbs[1], animationDelay: '-5s' }}
      />
      <div
        className="animate-float-slow absolute bottom-[-160px] left-1/3 h-[560px] w-[560px] rounded-full blur-3xl transition-all duration-700"
        style={{ background: theme.orbs[2], animationDelay: '-9s' }}
      />

      <div className="cosmic-grid absolute inset-0 opacity-75" />
      <div ref={mountRef} className="absolute inset-0" />
      <div className="noise-overlay absolute inset-0" />
    </div>
  );
}
