import React, { useState, useEffect } from 'react';
import ThreeCanvas from './components/ThreeCanvas.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import FeaturedProject from './components/FeaturedProject.jsx';
import RecentWorks from './components/RecentWorks.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import SelectedWorks from './components/SelectedWorks.jsx';
import PushingBoundaries from './components/PushingBoundaries.jsx';
import CallToAction from './components/CallToAction.jsx';
import ContactModal from './components/ContactModal.jsx';
import ResumeModal from './components/ResumeModal.jsx';
import PhotoUploadModal from './components/PhotoUploadModal.jsx';
import TerminalModal from './components/TerminalModal.jsx';

export default function App() {
  const [contactOpen, setContactOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [photoModalOpen, setPhotoModalOpen] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [userPhoto, setUserPhoto] = useState(() => {
    return localStorage.getItem('amit_portfolio_photo') || null;
  });

  // Keyboard shortcut: Ctrl+K or Cmd+K to toggle developer terminal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setTerminalOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSavePhoto = (newPhoto) => {
    if (newPhoto) {
      localStorage.setItem('amit_portfolio_photo', newPhoto);
      setUserPhoto(newPhoto);
    } else {
      localStorage.removeItem('amit_portfolio_photo');
      setUserPhoto(null);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#E9E8D2] text-[#22251C] overflow-x-hidden bg-grain">
      
      {/* 3D Three.js Interactive Floating Clay Canvas */}
      <ThreeCanvas />

      {/* Sticky Clay Navbar */}
      <Navbar
        onOpenContact={() => setContactOpen(true)}
        onOpenResume={() => setResumeOpen(true)}
        onOpenPhotoModal={() => setPhotoModalOpen(true)}
        onOpenTerminal={() => setTerminalOpen(true)}
      />

      {/* Main Content Flow */}
      <main className="relative z-10">
        
        {/* Hero Section with Direct Transparent Cutout (NO CARD FRAME) */}
        <Hero
          onOpenContact={() => setContactOpen(true)}
          onOpenResume={() => setResumeOpen(true)}
          onOpenPhotoModal={() => setPhotoModalOpen(true)}
          userPhoto={userPhoto}
        />

        {/* Featured Project Section with Interactive 3D Tablet Mockup */}
        <FeaturedProject />

        <RecentWorks />

        {/* How It Works - Connected Clay Steps */}
        <HowItWorks />

        {/* Selected Works Gallery & Reviews */}
        <SelectedWorks />

        {/* Layered Paper Cutout Organic Cave */}
        <PushingBoundaries
          onOpenResume={() => setResumeOpen(true)}
        />

        {/* Call To Action & Footer */}
        <CallToAction
          onOpenContact={() => setContactOpen(true)}
          onOpenResume={() => setResumeOpen(true)}
        />

      </main>

      {/* Modals */}
      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />

      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />

      <PhotoUploadModal
        isOpen={photoModalOpen}
        onClose={() => setPhotoModalOpen(false)}
        currentPhoto={userPhoto}
        onSavePhoto={handleSavePhoto}
      />

      <TerminalModal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
        onOpenContact={() => setContactOpen(true)}
      />

    </div>
  );
}
