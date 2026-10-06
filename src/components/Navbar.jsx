import React, { useEffect, useState } from 'react';
import { Award, ArrowUpRight, FileText, Menu, Terminal, X } from 'lucide-react';
import { personalInfo } from '../data/portfolioData.js';
import { sounds } from '../utils/audio.js';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Featured Project', href: '#featured' },
  { label: 'Process', href: '#process' },
  { label: 'Selected Works', href: '#projects' },
  { label: 'Experience', href: '#experience' },
];

export default function Navbar({ onOpenContact, onOpenResume, onOpenTerminal }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const updateScrollState = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', updateScrollState, { passive: true });
    return () => window.removeEventListener('scroll', updateScrollState);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-5 sm:px-8 py-3 transition-all duration-300">
      <div className={`relative max-w-7xl mx-auto flex items-center justify-between rounded-full px-5 py-2.5 transition-all duration-300 ${
        scrolled ? 'bg-[#F3F0DF]/90 backdrop-blur-md shadow-clay-pill border border-white/70' : 'bg-transparent'
      }`}>
        <a href="#about" onClick={() => sounds.playClick()} className="shrink-0 whitespace-nowrap font-serif italic text-lg text-[#293021]">
          {personalInfo.name}
        </a>

        <div className="absolute left-1/2 -translate-x-1/2 hidden sm:flex items-center gap-2 px-4 py-1.5 rounded-full clay-pill text-[10px] lg:text-xs font-semibold text-[#303A26] whitespace-nowrap">
          <Award className="w-3.5 h-3.5 text-[#65794D]" />
          <span>Google Website of The Day 2026 Nominee</span>
        </div>

        <button
          onClick={() => { sounds.playClick(); setMenuOpen((open) => !open); }}
          className="p-2 rounded-full clay-pill text-[#2A3322] hover:scale-105 transition-transform"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
      </div>

      {menuOpen && (
        <nav className="mt-3 ml-auto max-w-sm rounded-[28px] p-5 clay-card animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} onClick={closeMenu} className="px-4 py-2.5 rounded-2xl text-sm font-semibold text-[#303A26] hover:bg-white/60 transition-colors">
                {link.label}
              </a>
            ))}
            <div className="mt-2 pt-3 border-t border-black/5 flex flex-col gap-2">
              <button onClick={() => { closeMenu(); onOpenResume(); }} className="flex items-center justify-center gap-2 py-2.5 rounded-full bg-white/75 text-sm font-semibold text-[#303A26]">
                <FileText className="w-4 h-4" /> View Resume
              </button>
              <button onClick={() => { closeMenu(); onOpenTerminal(); }} className="flex items-center justify-center gap-2 py-2.5 rounded-full bg-white/75 text-sm font-semibold text-[#303A26]">
                <Terminal className="w-4 h-4" /> Developer Terminal
              </button>
              <button onClick={() => { closeMenu(); onOpenContact(); }} className="flex items-center justify-center gap-2 py-2.5 rounded-full clay-button-dark text-sm font-semibold">
                Get In Touch <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
