import React from 'react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { recentWorks } from '../data/portfolioData.js';

function Preview({ project }) {
  const isCivyx = project.id === 'civyx';
  return (
    <div className="project-preview h-44 sm:h-52 rounded-[22px] p-3 sm:p-4 mb-5 overflow-hidden">
      <div className="h-full rounded-[14px] bg-[#FAF8EE] shadow-sm border border-white/90 overflow-hidden">
        <div className="h-7 px-3 flex items-center gap-1.5 border-b border-[#e5e2d2]">
          <i className="w-1.5 h-1.5 rounded-full bg-[#c8876b]" /><i className="w-1.5 h-1.5 rounded-full bg-[#d2b76a]" /><i className="w-1.5 h-1.5 rounded-full bg-[#8da16b]" />
          <span className="ml-2 text-[9px] font-medium text-[#6a705b]">{isCivyx ? 'CivyX · Incident overview' : 'El Presto · Service console'}</span>
        </div>
        <div className="grid grid-cols-[0.7fr_2fr] h-[calc(100%-28px)]">
          <div className="bg-[#38442d] p-3 flex flex-col gap-2">
            <div className="w-8 h-2 rounded-full bg-[#b8c994] mb-1" />
            <div className="h-1.5 rounded-full bg-white/35" /><div className="h-1.5 w-4/5 rounded-full bg-white/20" /><div className="h-1.5 w-3/5 rounded-full bg-white/20" />
          </div>
          <div className="p-3 sm:p-4">
            <div className="flex gap-2 mb-3">
              <div className="flex-1 h-8 rounded-lg bg-[#e7ead9]" /><div className="flex-1 h-8 rounded-lg bg-[#e7ead9]" /><div className="flex-1 h-8 rounded-lg bg-[#dbe2c8]" />
            </div>
            <div className={`relative h-[calc(100%-44px)] rounded-lg overflow-hidden ${isCivyx ? 'bg-[#e8eddd]' : 'bg-[#f0eddf]'}`}>
              {isCivyx ? <>
                <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'linear-gradient(#bbc5a4 1px, transparent 1px), linear-gradient(90deg, #bbc5a4 1px, transparent 1px)', backgroundSize: '18px 18px' }} />
                <div className="absolute left-[18%] top-[20%] w-3 h-3 rounded-full bg-[#b97553] ring-4 ring-[#b97553]/20" />
                <div className="absolute left-[58%] top-[45%] w-3 h-3 rounded-full bg-[#82965b] ring-4 ring-[#82965b]/20" />
                <div className="absolute left-[72%] top-[20%] w-2 h-2 rounded-full bg-[#b97553] ring-4 ring-[#b97553]/20" />
                <div className="absolute left-[28%] top-[44%] w-[44%] h-8 border-t-2 border-r-2 border-[#718650] rounded-tr-full rotate-6" />
              </> : <div className="grid grid-cols-3 gap-2 p-2 h-full">
                {[0, 1, 2].map((item) => <div key={item} className="rounded-md bg-white shadow-sm p-1.5"><div className="w-7 h-1 rounded bg-[#839562] mb-2"/><div className="h-5 rounded bg-[#ebe9d9]"/><div className="w-4/5 h-1 rounded bg-[#d3d5c4] mt-2"/></div>)}
              </div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function RecentWorks() {
  const projects = recentWorks.slice(0, 2);
  return (
    <section className="py-16 sm:py-20 px-5 sm:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 sm:mb-12">
          <span className="section-kicker">/ Recent work</span>
          <h2 className="section-title text-3xl sm:text-4xl">Seen Recent Works</h2>
          <p className="mt-2 text-sm text-[#626951] max-w-lg mx-auto">A few of the systems I’ve recently designed and shipped.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-7">
          {projects.map((project) => (
            <article key={project.id} className="clay-card rounded-[30px] p-4 sm:p-6 group hover:-translate-y-1 transition-transform duration-300">
              <Preview project={project} />
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.15em] text-[#78805F]">{project.type} · {project.year}</span>
                  <h3 className="mt-1 text-xl font-semibold text-[#303728]">{project.title}</h3>
                  <p className="mt-1 text-sm text-[#5B624D] leading-relaxed">{project.subtitle}</p>
                </div>
                <a href={project.liveUrl || project.githubUrl} target="_blank" rel="noreferrer" aria-label={`Open ${project.title}`} className="shrink-0 w-9 h-9 rounded-full clay-pill flex items-center justify-center text-[#4C5A37] hover:text-[#202719]">
                  {project.liveUrl?.includes('http') && !project.liveUrl.includes('github.com') ? <ExternalLink className="w-4 h-4" /> : <Github className="w-4 h-4" />}
                </a>
              </div>
              <div className="mt-4 pt-3 border-t border-black/5 flex items-center justify-between text-xs text-[#667052]">
                <span>{project.stats}</span><ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
