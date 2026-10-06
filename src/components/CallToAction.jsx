import React from 'react';
import { ArrowUpRight, Mail, Phone, MapPin, Heart } from 'lucide-react';
import { Github, Linkedin } from './Icons.jsx';
import { personalInfo } from '../data/portfolioData.js';

export default function CallToAction({ onOpenContact, onOpenResume }) {
  return (
    <footer className="pt-20 pb-12 px-4 sm:px-8 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* CTA Banner matching reference "Let's Make It Happen" */}
        <div className="text-center py-16 px-6 sm:px-12 rounded-[38px] clay-card relative overflow-hidden mb-16">
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-sans font-bold text-[#1D2E1A] tracking-tight mb-4">
            Let's Make It Happen
          </h2>
          
          <p className="text-xs sm:text-sm text-[#46613F] max-w-lg mx-auto mb-8 leading-relaxed font-medium">
            Always open to new opportunities, collaborations, and engineering challenges. Let's work together to bring your ideas to life.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={onOpenContact}
              className="px-8 py-3.5 rounded-full text-sm font-bold clay-button-dark flex items-center gap-2 group"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
            <button
              onClick={onOpenResume}
              className="px-6 py-3.5 rounded-full text-sm font-semibold text-[#293E23] bg-white/80 hover:bg-white border border-white transition-all"
            >
              Download Resume
            </button>
          </div>

          {/* Quick Direct Contacts */}
          <div className="mt-10 pt-8 border-t border-black/5 flex flex-wrap items-center justify-center gap-6 text-xs text-[#3C5435]">
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-1.5 hover:text-[#182614] font-medium"
            >
              <Mail className="w-3.5 h-3.5 text-[#537748]" />
              <span>{personalInfo.email}</span>
            </a>
            <a
              href={`tel:${personalInfo.phone}`}
              className="flex items-center gap-1.5 hover:text-[#182614] font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-[#537748]" />
              <span>{personalInfo.phone}</span>
            </a>
            <span className="flex items-center gap-1.5 font-medium">
              <MapPin className="w-3.5 h-3.5 text-[#537748]" />
              <span>{personalInfo.location}</span>
            </span>
          </div>

        </div>

        {/* Footer Navigation & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-black/5 text-xs text-[#526D4C]">
          
          {/* Navigation Links */}
          <div className="flex items-center gap-6">
            <a href="#about" className="hover:text-[#1E2D1A] font-medium">Home</a>
            <a href="#about" className="hover:text-[#1E2D1A] font-medium">About</a>
            <a href="#featured" className="hover:text-[#1E2D1A] font-medium">Portfolio</a>
            <a href="#projects" className="hover:text-[#1E2D1A] font-medium">Projects</a>
            <button onClick={onOpenContact} className="hover:text-[#1E2D1A] font-medium">Contact</button>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-full clay-pill flex items-center justify-center text-[#2C4026] hover:text-black transition-colors"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-full clay-pill flex items-center justify-center text-[#2C4026] hover:text-[#0A66C2] transition-colors"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-[11px] font-mono text-[#587452]">
            © 2026 Amit Keshari. All rights reserved.
          </div>

        </div>

      </div>
    </footer>
  );
}
