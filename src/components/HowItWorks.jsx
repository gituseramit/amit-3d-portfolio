import React from 'react';
import { Search, PenTool, Rocket, MessageSquare, Star, ArrowRight } from 'lucide-react';
import { processSteps, testimonials } from '../data/portfolioData.js';

export default function HowItWorks() {
  const stepIcons = [Search, PenTool, Rocket];

  return (
    <section id="process" className="py-24 px-4 sm:px-8 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading Tag (matching reference "/ Free Project Explored") */}
        <div className="text-center mb-14">
          <span className="text-xs font-serif italic text-[#55734F] tracking-wide block mb-1">
            / Engineering Workflow
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold text-[#1D2D1B]">
            Here's how it works
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#4E6948] max-w-lg mx-auto">
            From initial requirement discovery to production delivery with precision and tactility.
          </p>
        </div>

        {/* 3 Step Connected Cards with Green Organic Thread */}
        <div className="relative mb-16">
          
          {/* Curvy Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-1.5 bg-gradient-to-r from-[#A7C89C] via-[#6B8F61] to-[#A7C89C] rounded-full -translate-y-1/2 -z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {processSteps.map((step, idx) => {
              const IconComponent = stepIcons[idx];
              return (
                <div
                  key={step.step}
                  className="clay-card rounded-[32px] p-6 sm:p-7 flex flex-col justify-between group hover:-translate-y-1.5 transition-all duration-300"
                >
                  <div>
                    {/* Top Row: Number & 3D Pin Icon */}
                    <div className="flex items-center justify-between mb-5">
                      <span className="font-serif text-3xl sm:text-4xl font-bold text-[#3E5538]">
                        {step.step}
                      </span>
                      <div className="w-10 h-10 rounded-2xl clay-pill flex items-center justify-center text-[#3B5433] group-hover:scale-110 transition-transform">
                        <IconComponent className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-[#1E2E1A] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs text-[#486341] leading-relaxed mb-4">
                      {step.summary}
                    </p>

                    {/* Step Bullet Points */}
                    <ul className="space-y-2 border-t border-black/5 pt-3">
                      {step.points.map((pt, pIdx) => (
                        <li key={pIdx} className="text-[11px] text-[#334A2C] flex items-start gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#628758] mt-1.5 flex-shrink-0"></span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-3 border-t border-black/5 flex items-center text-[10px] font-bold uppercase tracking-wider text-[#4E6A47]">
                    <span>Phase {idx + 1} of 3</span>
                    <ArrowRight className="w-3 h-3 ml-auto text-[#628758]" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Testimonials Cards (matching reference bottom cards of middle panel) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, idx) => (
            <div key={idx} className="clay-card rounded-3xl p-6 relative">
              <div className="flex items-center gap-1 text-amber-500 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-[#2C4127] italic leading-relaxed mb-4">
                "{t.quote}"
              </p>
              <div className="flex items-center justify-between pt-3 border-t border-black/5">
                <div>
                  <div className="text-xs font-bold text-[#1C2C1A]">{t.name}</div>
                  <div className="text-[10px] text-[#55714E]">{t.role}</div>
                </div>
                <div className="text-xs font-mono font-bold text-[#4F7244]">
                  Testimonial
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
