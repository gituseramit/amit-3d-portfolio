import React from 'react';
import { X, Download, Printer, ExternalLink, Briefcase, GraduationCap, Award, CheckCircle } from 'lucide-react';
import { personalInfo, experience, education, certifications, skillCategories } from '../data/portfolioData.js';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden">
        
        {/* Modal Toolbar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#EAF0E6] border-b border-[#D6E2D2]">
          <div className="flex items-center gap-2">
            <span className="font-bold text-sm text-[#24371F]">Amit Keshari — Official Resume</span>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold">2026 Edition</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-[#293F23] bg-white hover:bg-white/80 shadow-sm border border-black/5"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-[#293F23] hover:bg-black/5"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Scrollable Content */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-6 text-[#1A2616] text-xs leading-relaxed font-sans">
          
          {/* Header */}
          <div className="text-center pb-6 border-b border-black/10">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#162312]">
              {personalInfo.name}
            </h1>
            <p className="text-xs font-semibold text-[#3C5734] mt-1">
              AIML & Full Stack Developer (Fresher) | Full-Stack Engineering, REST/SOAP APIs & OOP Foundations
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 text-[11px] text-[#556F4F] mt-2">
              <span>{personalInfo.location}</span>
              <span>•</span>
              <a href={`mailto:${personalInfo.email}`} className="text-[#324C2A] underline">{personalInfo.email}</a>
              <span>•</span>
              <span>{personalInfo.phone}</span>
              <span>•</span>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-[#324C2A] underline">LinkedIn: {personalInfo.linkedinHandle}</a>
              <span>•</span>
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-[#324C2A] underline">GitHub: {personalInfo.githubHandle}</a>
            </div>
          </div>

          {/* Core Skills & Keywords */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#354F2E] border-b border-black/10 pb-1 mb-2">
              Core Skills & Keywords
            </h2>
            <div className="space-y-1 text-[11px]">
              <div><span className="font-bold">Programming Languages:</span> Python, Java, JavaScript, C, HTML5, CSS3</div>
              <div><span className="font-bold">Web & Full-Stack:</span> React.js, Node.js, Flask, REST APIs, responsive HTML/CSS, Firebase, SQL</div>
              <div><span className="font-bold">SDLC & Integration:</span> Component & solution design, API/system integration, unit testing, debugging, technical documentation</div>
              <div><span className="font-bold">Methodologies & Practices:</span> Object-Oriented Programming (OOP), Agile collaboration, coding best practices, Data Structures & Algorithms</div>
              <div><span className="font-bold">Version Control & Tooling:</span> Git, GitHub, Linux (Kali Linux), server-side troubleshooting, Windows</div>
              <div><span className="font-bold">Design & Documentation:</span> Figma, Adobe XD, Photoshop, Illustrator, technical documentation & user guides</div>
              <div><span className="font-bold">Other:</span> IBM Watson Studio (AutoAI), Cybersecurity Fundamentals (Wireshark, Nmap, Metasploit, OWASP)</div>
            </div>
          </div>

          {/* Professional Experience */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#354F2E] border-b border-black/10 pb-1 mb-2">
              Experience
            </h2>
            <div className="space-y-4">
              {experience.map((exp, idx) => (
                <div key={idx}>
                  <div className="flex items-center justify-between font-bold text-xs text-[#1D2B19]">
                    <span>{exp.role} — {exp.company}</span>
                    <span className="font-mono text-[11px] text-[#556F4F]">{exp.period}</span>
                  </div>
                  <div className="text-[10px] text-[#55714E] italic mb-1">
                    {exp.mode} | {exp.tech.join(', ')}
                  </div>
                  <p className="text-[11px] text-[#2F4428]">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Projects */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#354F2E] border-b border-black/10 pb-1 mb-2">
              Projects
            </h2>
            <div className="space-y-3 text-[11px]">
              <div>
                <div className="flex items-center justify-between font-bold">
                  <span>GST Billing Software — Business Management System</span>
                  <span className="font-mono text-[#556F4F]">2026</span>
                </div>
                <div className="text-[10px] text-[#55714E]">React, Firebase | Live: billing-software-21dcb.web.app</div>
                <p className="text-[#2F4428] mt-0.5">
                  ● Designed and integrated modular components — invoice generation, customer/product management, expense tracking, and inventory — backed by Firebase.
                  <br />● Built analytics dashboards and reporting modules to surface actionable insights.
                </p>
              </div>

              <div>
                <div className="flex items-center justify-between font-bold">
                  <span>CivyX — Smart Public Complaint & Emergency Response Platform</span>
                  <span className="font-mono text-[#556F4F]">2025</span>
                </div>
                <div className="text-[10px] text-[#55714E]">Full-Stack Web App | GitHub: github.com/gituseramit/CivyX</div>
                <p className="text-[#2F4428] mt-0.5">
                  ● Built full-stack application for automated categorization by location and issue severity.
                  <br />● Integrated safe-route guidance module for emergencies mirroring enterprise API integration patterns.
                </p>
              </div>

              <div>
                <div className="flex items-center justify-between font-bold">
                  <span>Full Stack Café Management System (El Presto)</span>
                  <span className="font-mono text-[#556F4F]">2026</span>
                </div>
                <div className="text-[10px] text-[#55714E]">Freelance | Live: elpresto.co.in</div>
                <p className="text-[#2F4428] mt-0.5">
                  ● Developed full-stack system with dedicated kitchen, manager, cashier, and admin interfaces with role-based access conceptually aligned with Salesforce Profiles and Roles.
                </p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#354F2E] border-b border-black/10 pb-1 mb-2">
              Education
            </h2>
            <div className="space-y-2 text-[11px]">
              {education.map((edu, idx) => (
                <div key={idx} className="flex justify-between items-start">
                  <div>
                    <div className="font-bold">{edu.degree}</div>
                    <div className="text-[10px] text-[#55714E]">{edu.institution}</div>
                  </div>
                  <div className="text-right font-mono text-[10px]">
                    <div>{edu.period}</div>
                    <div className="font-bold text-emerald-800">{edu.score}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Achievements */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#354F2E] border-b border-black/10 pb-1 mb-2">
              Certifications & Achievements
            </h2>
            <ul className="space-y-1 text-[11px] text-[#2F4428]">
              {certifications.map((c, i) => (
                <li key={i}>● <span className="font-bold">{c.name}</span> — {c.detail}</li>
              ))}
              <li>● Authored creative assets, posters, and branding materials for multiple college events.</li>
              <li>● Sustained an independent freelance career earning consistent monthly income while balancing academics.</li>
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
}
