import React, { useState } from 'react';
import { ArrowUpRight, Brain, Camera, Code2, Star } from 'lucide-react';
import { personalInfo, trustedTech } from '../data/portfolioData.js';
import { sounds } from '../utils/audio.js';

export default function Hero({ onOpenContact, onOpenResume, onOpenPhotoModal, userPhoto }) {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const image = userPhoto || '/amit-cutout.png';

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setMouseOffset({
      x: ((event.clientX - rect.left) / rect.width - 0.5) * 12,
      y: ((event.clientY - rect.top) / rect.height - 0.5) * 12,
    });
  };

  return (
    <section id="about" className="relative px-5 sm:px-8 pt-28 pb-10 lg:pt-32 lg:pb-14 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center mb-4 sm:mb-7">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full clay-pill text-xs font-semibold text-[#35402A] mb-4 lg:absolute lg:left-0 lg:top-[38%]">
            <span className="w-2 h-2 rounded-full bg-[#78964F] animate-pulse" />
            {personalInfo.status}
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-sans font-bold tracking-tight text-[#283020] leading-[1.02]">
            Hi I'm {personalInfo.name.split(' ')[0]}
          </h1>
          <p className="mt-1 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif italic font-normal text-[#424A31] tracking-tight">
            {personalInfo.roleTitle}
          </p>
        </div>

        <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_1.25fr_1fr] items-center gap-5 lg:gap-8">
          <div className="hidden lg:flex justify-start order-1">
            <div className="p-5 rounded-[28px] clay-card max-w-[260px]">
              <div className="flex items-center gap-1.5 text-amber-500 mb-2" aria-label="5 out of 5 stars">
                {[...Array(5)].map((_, index) => <Star key={index} className="w-3.5 h-3.5 fill-current" />)}
              </div>
              <p className="text-sm text-[#414936] leading-relaxed font-medium">“Amit is exceptional at translating complex full-stack architectures into clean, tactile solutions.”</p>
              <div className="mt-3 pt-3 border-t border-black/5 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#60734A] text-white flex items-center justify-center font-bold text-xs">AK</div>
                <div>
                  <div className="text-xs font-bold text-[#293021]">AI & Full-Stack</div>
                  <div className="text-[11px] text-[#68705A]">5+ production systems</div>
                </div>
              </div>
            </div>
          </div>

          <div
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setMouseOffset({ x: 0, y: 0 })}
            className="relative mx-auto w-full max-w-[min(72vw,280px)] sm:max-w-sm lg:max-w-md aspect-[3.8/5] flex items-end justify-center order-1 lg:order-2 select-none"
          >
            <div className="absolute inset-x-4 top-16 bottom-2 rounded-full bg-gradient-to-tr from-[#9FAE69]/25 via-[#F1EEDC]/20 to-[#859651]/25 blur-3xl pointer-events-none" />
            <div className="relative w-full h-full flex items-end justify-center transition-transform duration-300 ease-out" style={{ transform: `perspective(1000px) rotateY(${mouseOffset.x * 0.3}deg) rotateX(${-mouseOffset.y * 0.3}deg)` }}>
              <img src={image} alt={personalInfo.name} className="w-full h-auto max-h-[360px] sm:max-h-[440px] lg:max-h-[500px] object-contain object-bottom pointer-events-none drop-shadow-[0_24px_30px_rgba(48,54,35,0.28)]" />
              <button onClick={() => { sounds.playClick(); onOpenPhotoModal(); }} className="absolute top-8 right-1 flex items-center gap-1.5 px-3 py-1.5 rounded-full clay-pill text-[11px] font-semibold text-[#35402A] hover:scale-105 transition-all" title="Swap or update photo">
                <Camera className="w-3.5 h-3.5" /> My Photo
              </button>
            </div>
            <div className="absolute top-12 -right-4 px-3.5 py-2 rounded-2xl clay-pill text-xs font-semibold text-[#35402A] hidden sm:flex items-center gap-1.5 animate-float-medium">
              <Brain className="w-3.5 h-3.5 text-[#637746]" /> AI/ML · AutoAI · Vision
            </div>
            <div className="absolute bottom-10 -left-6 px-3.5 py-2 rounded-2xl clay-pill text-xs font-semibold text-[#35402A] hidden sm:flex items-center gap-1.5 animate-float-slow">
              <Code2 className="w-3.5 h-3.5 text-[#637746]" /> React · Node.js · Firebase
            </div>
          </div>

          <div className="flex justify-center lg:justify-end order-2 lg:order-3">
            <div className="p-5 rounded-[28px] clay-card max-w-sm text-center lg:text-right">
              <p className="text-sm text-[#414936] font-medium leading-relaxed">{personalInfo.bio}</p>
              <div className="mt-4 flex flex-col gap-2">
                <button onClick={() => { sounds.playPop(); onOpenContact(); }} className="w-full py-2.5 px-4 rounded-full text-sm font-semibold clay-button-dark flex items-center justify-center gap-1.5">
                  Get in Touch <ArrowUpRight className="w-4 h-4" />
                </button>
                <button onClick={() => { sounds.playClick(); onOpenResume(); }} className="w-full py-2.5 px-4 rounded-full text-sm font-semibold text-[#35402A] bg-white/75 hover:bg-white transition-all border border-white/80">
                  View Resume
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-10 pt-5 border-t border-[#737952]/20 flex flex-col items-center gap-3">
          <div className="text-[11px] sm:text-xs uppercase tracking-[0.22em] font-semibold text-[#66704D]">Built with</div>
          <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2">
            {trustedTech.slice(0, 6).map((tech) => <span key={tech.name} className="font-serif italic text-sm sm:text-base font-semibold text-[#35402A]/75">{tech.name}</span>)}
          </div>
          <div className="text-xs text-[#596348]">5+ production deliveries · {personalInfo.location}</div>
        </div>
      </div>
    </section>
  );
}
