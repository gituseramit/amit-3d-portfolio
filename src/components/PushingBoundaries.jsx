import React from 'react';
import { Briefcase, GraduationCap, Award, CheckCircle, Code, ShieldCheck } from 'lucide-react';
import { experience, education, certifications, skillCategories, personalInfo } from '../data/portfolioData.js';

export default function PushingBoundaries({ onOpenResume }) {
  return (
    <section id="experience" className="py-24 px-4 sm:px-8 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Layered Paper Cutout Cave (Exact matching reference right panel) */}
        <div className="relative rounded-[48px] p-6 sm:p-10 lg:p-14 overflow-hidden text-white cave-layer-1">
          
          {/* Layer 2 cutout overlay */}
          <div className="absolute inset-4 rounded-[40px] cave-layer-2 -z-0"></div>
          
          {/* Layer 3 cutout overlay */}
          <div className="absolute inset-8 rounded-[34px] cave-layer-3 -z-0"></div>
          
          {/* Layer 4 cutout overlay (Deepest center cave) */}
          <div className="absolute inset-12 rounded-[28px] cave-layer-4 -z-0"></div>

          {/* Content Inside Cave */}
          <div className="relative z-10 px-2 sm:px-6 py-4">
            
            {/* Header matching reference */}
            <div className="mb-10 text-center sm:text-left">
              <span className="text-xs font-serif italic text-[#A6C99B] tracking-wide block mb-1">
                / Who Am I
              </span>
              <h2 className="text-4xl sm:text-5xl font-sans font-bold tracking-tight text-white mb-3">
                Pushing Boundaries
              </h2>
              <p className="text-xs sm:text-sm text-[#C9DCC4] max-w-2xl leading-relaxed">
                {personalInfo.bio} {personalInfo.secondaryBio}
              </p>
            </div>

            {/* Experience Timeline Grid */}
            <div className="mb-12">
              <div className="flex items-center gap-2 mb-6">
                <Briefcase className="w-4 h-4 text-[#A6C99B]" />
                <h3 className="text-lg font-bold text-white tracking-wide">
                  Professional Experience
                </h3>
              </div>

              <div className="space-y-4">
                {experience.map((exp, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 hover:bg-white/15 transition-all"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                      <div>
                        <span className="text-base font-bold text-white">
                          {exp.role}
                        </span>
                        <span className="text-sm text-[#A6C99B] ml-2">
                          — {exp.company}
                        </span>
                      </div>
                      <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-white/10 text-[#D5E6D2] w-fit">
                        {exp.period} • {exp.mode}
                      </span>
                    </div>

                    <p className="text-sm text-[#D8E6D5] leading-relaxed mb-3">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-black/25 text-[#B6D7AB]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education & Certifications Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
              
              {/* Education */}
              <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15">
                <div className="flex items-center gap-2 mb-4">
                  <GraduationCap className="w-4 h-4 text-[#A6C99B]" />
                  <h3 className="text-base font-bold text-white">Education</h3>
                </div>
                <div className="space-y-4">
                  {education.map((edu, idx) => (
                    <div key={idx} className="border-b border-white/10 pb-3 last:border-0 last:pb-0">
                      <div className="text-sm font-bold text-white">{edu.degree}</div>
                      <div className="text-sm text-[#A6C99B] mt-0.5">{edu.institution}</div>
                      <div className="flex items-center justify-between text-xs text-[#C0D4BC] mt-1">
                        <span>{edu.period}</span>
                        <span className="font-bold text-emerald-300">{edu.score}</span>
                      </div>
                      <div className="text-xs text-[#D8E6D5] mt-1">{edu.focus}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15">
                <div className="flex items-center gap-2 mb-4">
                  <Award className="w-4 h-4 text-[#A6C99B]" />
                  <h3 className="text-base font-bold text-white">Certifications & Training</h3>
                </div>
                <div className="space-y-3">
                  {certifications.map((cert, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-sm text-[#D8E6D5]">
                      <CheckCircle className="w-3.5 h-3.5 text-[#A6C99B] flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold text-white">{cert.name}</div>
                        <div className="text-xs text-[#AEC8A5]">{cert.detail}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Skills Bento Matrix */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Code className="w-4 h-4 text-[#A6C99B]" />
                <h3 className="text-base font-bold text-white">Core Technical Matrix</h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {skillCategories.map((cat, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-white/10 border border-white/10">
                    <div className="text-xs font-bold text-[#A6C99B] mb-2">{cat.title}</div>
                    <div className="flex flex-wrap gap-1">
                      {cat.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-white/15 text-white"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Resume Callout inside the cave */}
            <div className="mt-8 pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-[#C8DCC5] text-center sm:text-left">
                Full technical documentation, achievements, and project breakdown available in official resume.
              </div>
              <button
                onClick={onOpenResume}
                className="px-5 py-2 rounded-full text-xs font-bold bg-[#A6C99B] text-[#182615] hover:bg-white transition-all shadow-md"
              >
                Open Complete Resume (PDF)
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
