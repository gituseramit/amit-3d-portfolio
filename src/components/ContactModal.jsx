import React, { useState } from 'react';
import { X, Mail, Phone, MapPin, Send, Check, Copy, ExternalLink } from 'lucide-react';
import { Github, Linkedin } from './Icons.jsx';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData.js';

export default function ContactModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [copied, setCopied] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSent(true);
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.6 }
    });
    setTimeout(() => {
      setFormSent(false);
      setFormData({ name: '', email: '', message: '' });
      onClose();
    }, 2800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl clay-card rounded-[36px] p-6 sm:p-9 shadow-2xl">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full clay-pill text-[#2A3E24] hover:bg-white transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Title */}
        <div className="mb-6">
          <span className="text-xs font-serif italic text-[#55734F] block mb-1">
            / Start a Conversation
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#1D2E1A]">
            Get In Touch
          </h3>
          <p className="text-xs sm:text-sm text-[#4E6847] mt-1">
            Whether for a full-stack role, Salesforce engineering, or freelance collaboration.
          </p>
        </div>

        {/* Quick Contact Chips */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          <div className="p-3.5 rounded-2xl bg-white/70 border border-white flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#4C6D42]" />
              <div className="text-xs font-bold text-[#1D2E1A] truncate max-w-[150px]">
                {personalInfo.email}
              </div>
            </div>
            <button
              onClick={copyEmail}
              className="p-1.5 rounded-lg clay-pill text-[#2F4428] hover:bg-white"
              title="Copy Email"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>

          <div className="p-3.5 rounded-2xl bg-white/70 border border-white flex items-center gap-2">
            <Phone className="w-4 h-4 text-[#4C6D42]" />
            <div className="text-xs font-bold text-[#1D2E1A]">
              {personalInfo.phone}
            </div>
          </div>
        </div>

        {/* Form or Success State */}
        {formSent ? (
          <div className="p-8 text-center bg-white/80 rounded-2xl border border-white">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-3">
              <Check className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-[#1D2E1A]">Message Sent Successfully!</h4>
            <p className="text-xs text-[#52704B] mt-1">
              Thank you! Amit will respond directly to your email shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3.5">
            <div>
              <label className="block text-[11px] font-bold text-[#354D2F] mb-1">Your Name</label>
              <input
                required
                type="text"
                placeholder="e.g. Sarah Connor"
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2.5 text-xs rounded-xl bg-white/80 border border-white/90 focus:outline-none focus:ring-2 focus:ring-[#527746] text-[#1E2E1A]"
              />
            </div>
            <div>
              <label className="block text-[11px] font-bold text-[#354D2F] mb-1">Your Email</label>
              <input
                required
                type="email"
                placeholder="sarah@example.com"
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2.5 text-xs rounded-xl bg-white/80 border border-white/90 focus:outline-none focus:ring-2 focus:ring-[#527746] text-[#1E2E1A]"
              />
            </div>
            <div>
              <label className="block text-[11px] font-bold text-[#354D2F] mb-1">Message</label>
              <textarea
                required
                rows={3}
                placeholder="Hi Amit, we would like to discuss an opportunity..."
                value={formData.message}
                onChange={e => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2.5 text-xs rounded-xl bg-white/80 border border-white/90 focus:outline-none focus:ring-2 focus:ring-[#527746] text-[#1E2E1A]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-full text-xs font-bold clay-button-dark flex items-center justify-center gap-2 mt-4"
            >
              <span>Send Message</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        )}

        {/* Direct Social Links */}
        <div className="mt-5 pt-4 border-t border-black/5 flex items-center justify-center gap-4 text-xs font-semibold text-[#44603E]">
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 hover:text-black"
          >
            <Linkedin className="w-3.5 h-3.5" />
            <span>LinkedIn Profile</span>
          </a>
          <span>•</span>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 hover:text-black"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub Profile</span>
          </a>
        </div>

      </div>
    </div>
  );
}
