
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ThreeBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);
    
    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 500;
    
    const posArray = new Float32Array(particlesCount * 3);
    const scaleArray = new Float32Array(particlesCount);
    
    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 15;
    }
    
    for (let i = 0; i < particlesCount; i++) {
      scaleArray[i] = Math.random();
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    particlesGeometry.setAttribute('scale', new THREE.BufferAttribute(scaleArray, 1));
    
    // Create materials with different colors for cyberpunk theme
    const particlesMaterial1 = new THREE.PointsMaterial({
      size: 0.05,
      transparent: true,
      color: 0x3E68FF, // Cyber blue
      blending: THREE.AdditiveBlending
    });
    
    const particlesMaterial2 = new THREE.PointsMaterial({
      size: 0.05,
      transparent: true,
      color: 0x00F0FF, // Cyan
      blending: THREE.AdditiveBlending
    });
    
    const particlesMaterial3 = new THREE.PointsMaterial({
      size: 0.05,
      transparent: true,
      color: 0xE637BF, // Pink
      blending: THREE.AdditiveBlending
    });
    
    // Create particle systems with different materials
    const particlesMesh1 = new THREE.Points(particlesGeometry, particlesMaterial1);
    const particlesMesh2 = new THREE.Points(particlesGeometry, particlesMaterial2);
    const particlesMesh3 = new THREE.Points(particlesGeometry, particlesMaterial3);
    
    // Position the particle systems slightly differently
    particlesMesh2.position.z = -2;
    particlesMesh3.position.z = -4;
    
    scene.add(particlesMesh1, particlesMesh2, particlesMesh3);
    
    // Position camera
    camera.position.z = 5;
    
    // Mouse movement for interactive effect
    let mouseX = 0;
    let mouseY = 0;
    
    const onDocumentMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX - window.innerWidth / 2) * 0.0005;
      mouseY = (event.clientY - window.innerHeight / 2) * 0.0005;
    };
    
    document.addEventListener('mousemove', onDocumentMouseMove);
    
    // Handle window resize
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      
      renderer.setSize(width, height);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      particlesMesh1.rotation.x += 0.0003;
      particlesMesh1.rotation.y += 0.0005;
      
      particlesMesh2.rotation.x += 0.0005;
      particlesMesh2.rotation.y += 0.0003;
      
      particlesMesh3.rotation.x += 0.0003;
      particlesMesh3.rotation.y += 0.0004;
      
      // Interactive movement based on mouse position
      if (mouseX && mouseY) {
        particlesMesh1.rotation.x += mouseY * 0.1;
        particlesMesh1.rotation.y += mouseX * 0.1;
        
        particlesMesh2.rotation.x += mouseY * 0.12;
        particlesMesh2.rotation.y += mouseX * 0.12;
        
        particlesMesh3.rotation.x += mouseY * 0.15;
        particlesMesh3.rotation.y += mouseX * 0.15;
      }
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Cleanup function
    return () => {
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousemove', onDocumentMouseMove);
      
      scene.remove(particlesMesh1, particlesMesh2, particlesMesh3);
      particlesGeometry.dispose();
      particlesMaterial1.dispose();
      particlesMaterial2.dispose();
      particlesMaterial3.dispose();
    };
  }, []);
  
  return (
    <div 
      ref={containerRef} 
      className="fixed top-0 left-0 w-full h-full -z-10 opacity-70"
      style={{ pointerEvents: 'none' }}
    />
  );
};

export default ThreeBackground;
