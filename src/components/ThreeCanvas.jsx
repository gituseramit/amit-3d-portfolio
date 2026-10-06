import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeCanvas() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(
      45,
      mount.clientWidth / mount.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 18;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    // This canvas sits behind the page content; real-time shadows add a lot of
    // GPU work for an effect that is barely visible at normal scroll speed.
    renderer.shadowMap.enabled = false;
    mount.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 1.4);
    dirLight1.position.set(12, 18, 14);
    dirLight1.castShadow = true;
    dirLight1.shadow.mapSize.width = 1024;
    dirLight1.shadow.mapSize.height = 1024;
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xa3c49a, 0.8);
    dirLight2.position.set(-10, -8, 8);
    scene.add(dirLight2);

    // Clay Materials (tactile, matte finish matching reference)
    const clayColors = [
      0x577b4d, // Forest Sage
      0x86ab7a, // Light Sage
      0x344b2d, // Deep Moss
      0xafca9f, // Pistachio
      0xe7eee2, // Warm Cream
      0x6f9162, // Medium Olive
      0xd5e2cf, // Soft Sand
    ];

    const materials = clayColors.map(color => new THREE.MeshStandardMaterial({
      color: color,
      roughness: 0.55,
      metalness: 0.04,
      flatShading: false,
      transparent: true,
      opacity: 0.48,
    }));

    // Floating Spheres / Clay Blobs configuration
    const spheresData = [
      // Left cluster
      { x: -9.5, y: 3.5, z: -2, radius: 2.2, matIdx: 0, speed: 0.008, phase: 0 },
      { x: -7.5, y: -2.8, z: 0, radius: 1.4, matIdx: 1, speed: 0.012, phase: 1.2 },
      { x: -11, y: -0.5, z: -3, radius: 2.8, matIdx: 2, speed: 0.006, phase: 2.4 },
      { x: -6.2, y: 1.8, z: 2, radius: 0.8, matIdx: 4, speed: 0.014, phase: 3.1 },
      
      // Right cluster
      { x: 9.8, y: 4.2, z: -2, radius: 2.4, matIdx: 2, speed: 0.007, phase: 1.5 },
      { x: 7.8, y: 2.0, z: 1, radius: 1.2, matIdx: 0, speed: 0.011, phase: 0.7 },
      { x: 11.2, y: -1.5, z: -1, radius: 2.0, matIdx: 1, speed: 0.009, phase: 2.9 },
      { x: 6.8, y: -3.5, z: 1.5, radius: 0.9, matIdx: 3, speed: 0.015, phase: 4.0 },

      // Center background floating accent pebbles
      { x: -2.5, y: 5.5, z: -4, radius: 1.1, matIdx: 3, speed: 0.010, phase: 1.8 },
      { x: 3.2, y: 5.8, z: -3.5, radius: 1.3, matIdx: 1, speed: 0.008, phase: 3.5 },
      { x: -3.8, y: -5.2, z: -2, radius: 1.6, matIdx: 5, speed: 0.009, phase: 2.1 },
      { x: 4.2, y: -5.5, z: -2.5, radius: 1.8, matIdx: 0, speed: 0.007, phase: 0.4 },
    ];

    const spheres = spheresData.map(data => {
      const geometry = new THREE.SphereGeometry(data.radius, 24, 24);
      const mesh = new THREE.Mesh(geometry, materials[data.matIdx]);
      mesh.position.set(data.x, data.y, data.z);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      scene.add(mesh);
      return { mesh, ...data, initialX: data.x, initialY: data.y };
    });

    // Mouse Parallax & Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (event) => {
      const rect = mount.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((event.clientY - rect.top) / rect.height) * 2 - 1);
      targetMouseX = x;
      targetMouseY = y;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation Loop
    let animationFrameId;
    let startTime = performance.now();

    let lastRenderTime = 0;
    const animate = (now) => {
      animationFrameId = requestAnimationFrame(animate);
      if (now - lastRenderTime < 1000 / 30) return;
      lastRenderTime = now;
      const elapsedTime = (performance.now() - startTime) / 1000;

      // Smooth mouse lerp
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      // Camera subtle parallax
      camera.position.x = mouseX * 0.8;
      camera.position.y = mouseY * 0.8;
      camera.lookAt(0, 0, 0);

      // Animate each sphere with organic buoyancy
      spheres.forEach((s, idx) => {
        const timeOffset = elapsedTime * s.speed * 60 + s.phase;
        s.mesh.position.y = s.initialY + Math.sin(timeOffset) * 0.45;
        s.mesh.position.x = s.initialX + Math.cos(timeOffset * 0.7) * 0.25 + (mouseX * 0.3 * (idx % 2 === 0 ? 1 : -1));
        s.mesh.rotation.x = Math.sin(timeOffset * 0.5) * 0.2;
        s.mesh.rotation.y = Math.cos(timeOffset * 0.5) * 0.2;
      });

      if (document.visibilityState === 'visible') renderer.render(scene, camera);
    };

    animationFrameId = requestAnimationFrame(animate);

    // Resize Handler
    const handleResize = () => {
      if (!mount) return;
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (mount && renderer.domElement) {
        mount.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-x-0 top-0 h-[min(1100px,130vh)] pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    />
  );
}
