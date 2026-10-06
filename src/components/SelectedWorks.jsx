import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { Github } from './Icons';
import { recentWorks, testimonials } from '../data/portfolioData';

function ProjectArtwork({ project }) {
  const isNetwork = project.id === 'localloop';
  return (
    <div className="project-preview h-48 sm:h-56 rounded-[22px] p-3 sm:p-4 overflow-hidden">
      <div className="h-full rounded-[15px] bg-[#FAF8EE] shadow-sm border border-white/90 overflow-hidden">
        <div className="h-7 px-3 flex items-center gap-1.5 border-b border-[#e5e2d2]">
          <i className="w-1.5 h-1.5 rounded-full bg-[#c8876b]"/><i className="w-1.5 h-1.5 rounded-full bg-[#d2b76a]"/><i className="w-1.5 h-1.5 rounded-full bg-[#8da16b]"/>
          <span className="ml-2 text-[9px] font-medium text-[#6a705b]">{isNetwork ? 'LocalLoop · Network dashboard' : 'AutoAI · Prediction insights'}</span>
        </div>
        <div className="grid grid-cols-[0.65fr_2fr] h-[calc(100%-28px)]">
          <div className="bg-[#38442d] p-3 flex flex-col gap-2">
            <div className="w-8 h-2 rounded-full bg-[#bdc995] mb-1"/>
            {[0, 1, 2, 3].map((item) => <div key={item} className={`h-1.5 rounded-full ${item === 0 ? 'bg-white/45' : 'bg-white/20'}`} />)}
          </div>
          <div className="p-3 sm:p-4 min-w-0">
            <div className="flex gap-2 mb-3">
              {[0, 1, 2].map((item) => <div key={item} className="flex-1 h-8 rounded-lg bg-[#e9eadc]" />)}
            </div>
            {isNetwork ? <div className="h-[calc(100%-44px)] rounded-lg bg-[#f0efdf] p-2.5 font-mono text-[9px] text-[#46513a]">
              <div className="flex justify-between border-b border-[#dfe1d1] pb-2 mb-2"><span>REQUEST</span><span>STATUS</span></div>
              {['/api/workstations/sync', '/api/services/queue', '/api/centers/status'].map((row) => <div key={row} className="flex justify-between py-1.5 border-b border-[#e8e8dd]"><span>{row}</span><span className="text-[#75884f]">200 OK</span></div>)}
              <div className="mt-2 h-1.5 rounded-full bg-[#d5dfbe]"><div className="h-full w-4/5 rounded-full bg-[#80935b]"/></div>
            </div> : <div className="h-[calc(100%-44px)] rounded-lg bg-[#f0efdf] p-3 flex gap-3">
              <div className="w-[38%] rounded-lg bg-white p-2 flex flex-col justify-between"><div className="text-[9px] text-[#687154]">Model confidence</div><div className="text-xl font-semibold text-[#38432d]">94.8%</div><div className="h-1.5 rounded-full bg-[#dce4cb]"><div className="h-full w-[94%] rounded-full bg-[#81965c]"/></div></div>
              <div className="flex-1 rounded-lg bg-white p-2 flex items-end gap-1.5">{[38, 66, 48, 82, 58, 91, 72, 96].map((height, index) => <div key={index} className="flex-1 rounded-t-sm bg-gradient-to-t from-[#7e9058] to-[#c6ce9f]" style={{ height: `${height}%` }}/>)}</div>
            </div>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SelectedWorks() {
  const [filter, setFilter] = useState('All');
  // Recent previews show the first two projects; this gallery features the remaining work.
  const projects = recentWorks.slice(2);
  const categories = ['All', ...projects.map((project) => project.type)];
  const visibleProjects = filter === 'All' ? projects : projects.filter((project) => project.type === filter);

  return (
    <section id="projects" className="py-20 sm:py-24 px-5 sm:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <span className="section-kicker">/ Best projects</span>
          <h2 className="section-title text-3xl sm:text-4xl md:text-5xl">Selected Works</h2>
          <p className="mt-2 text-sm text-[#626951] max-w-lg mx-auto">A few deeper looks at the systems and experiments I’ve built.</p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-9">
          {testimonials.map((item) => <div key={item.name} className="px-5 py-2.5 rounded-full clay-pill text-xs font-medium text-[#4b523e] max-w-md text-center shadow-sm">“{item.quote.split('.')[0]}.”</div>)}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 mb-9">
          {categories.map((category) => <button key={category} onClick={() => setFilter(category)} className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${filter === category ? 'clay-button-dark' : 'clay-pill text-[#465039] hover:bg-white'}`}>{category}</button>)}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {visibleProjects.map((project) => <article key={project.id} className="clay-card rounded-[30px] p-4 sm:p-6 group hover:-translate-y-1 transition-transform duration-300">
            <ProjectArtwork project={project}/>
            <div className="flex items-center justify-between gap-3 mb-2">
              <span className="text-[10px] uppercase tracking-[0.15em] text-[#78805F]">{project.type}</span>
              <span className="text-xs text-[#798064]">{project.year}</span>
            </div>
            <h3 className="text-2xl font-semibold text-[#303728] mb-2">{project.title}</h3>
            <p className="text-sm text-[#555D49] leading-relaxed mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-1.5 mb-5">{project.tags.map((tag) => <span key={tag} className="px-2.5 py-1 rounded-full text-[11px] font-medium text-[#465039] bg-white/65 border border-white/80">{tag}</span>)}</div>
            <div className="pt-3 border-t border-black/5 flex items-center justify-between">
              <span className="text-xs text-[#667052]">{project.stats}</span>
              <div className="flex gap-3">
                <a href={project.liveUrl} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} live app`} className="text-[#4c5b37] hover:text-[#21291a]">{project.liveUrl?.includes('github.com') ? <Github className="w-4 h-4"/> : <ExternalLink className="w-4 h-4"/>}</a>
                <a href={project.githubUrl} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} source code`} className="text-[#4c5b37] hover:text-[#21291a]"><Github className="w-4 h-4"/></a>
              </div>
            </div>
          </article>)}
        </div>
      </div>
    </section>
  );
}
