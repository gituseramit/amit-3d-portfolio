import { Github } from './Icons.jsx';
import React, { useState } from 'react';
import { ExternalLink, CheckCircle, TrendingUp, Layers, ShieldCheck, ArrowRight } from 'lucide-react';
import { featuredProject } from '../data/portfolioData.js';

export default function FeaturedProject({ onSelectProject }) {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <section id="featured" className="py-24 px-4 sm:px-8 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading Tag (matching reference "/ Featured Project") */}
        <div className="text-center mb-12">
          <span className="text-xs font-serif italic text-[#55734F] tracking-wide block mb-1">
            / Featured Project
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold text-[#1D2D1B]">
            Featured Project
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#4E6948] max-w-lg mx-auto">
            Deep dive into flagship production architectures with full-stack data integrity.
          </p>
        </div>

        {/* 3D Floating Tablet Mockup & Details Card */}
        <div className="clay-card rounded-[38px] p-6 sm:p-10 lg:p-12 relative overflow-hidden">
          
          {/* Header Row of the Card */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8 pb-6 border-b border-black/5">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full clay-pill text-xs font-semibold text-[#304829] mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>{featuredProject.category} • {featuredProject.year}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#1C2C1A]">
                {featuredProject.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#4A6443] mt-1">
                {featuredProject.subtitle}
              </p>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex items-center gap-3">
              <a
                href={featuredProject.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold clay-button-dark"
              >
                <span>Live System</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href={featuredProject.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-[#293E23] bg-white/80 hover:bg-white border border-white"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Main Showcase Layout: Tablet Mockup + Architecture Specs */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Tablet Mockup (7 Cols) */}
            <div className="lg:col-span-7">
              <div className="clay-screen-frame p-3 sm:p-5 relative transform transition-all duration-500 hover:rotate-[-0.5deg]">
                
                {/* Tablet Camera & Top Bar */}
                <div className="flex items-center justify-between px-3 py-2 bg-[#2D4127] rounded-t-2xl text-white/80 text-[10px]">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-red-400/80"></span>
                    <span className="w-2 h-2 rounded-full bg-yellow-400/80"></span>
                    <span className="w-2 h-2 rounded-full bg-green-400/80"></span>
                  </div>
                  <div className="w-2.5 h-2.5 rounded-full bg-black/60 mx-auto"></div>
                  <div className="font-mono text-[9px] text-[#A5C89A]">
                    billing-software-21dcb.web.app
                  </div>
                </div>

                {/* Tablet Screen Content - Interactive Mock Dashboard */}
                <div className="bg-[#FAFBF9] rounded-b-2xl p-4 sm:p-6 text-[#1E2E1A] shadow-inner min-h-[320px]">
                  
                  {/* Dashboard Nav Tabs */}
                  <div className="flex items-center justify-between pb-3 border-b border-black/5 mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-lg bg-[#3C5236] text-white flex items-center justify-center font-bold text-xs">
                        GST
                      </div>
                      <span className="font-bold text-xs">Admin Console</span>
                    </div>
                    <div className="flex gap-1.5">
                      {['overview', 'invoices', 'inventory'].map(tab => (
                        <button
                          key={tab}
                          onClick={() => setActiveTab(tab)}
                          className={`px-2.5 py-1 rounded-md text-[10px] font-semibold capitalize transition-all ${
                            activeTab === tab
                              ? 'bg-[#3A5034] text-white'
                              : 'bg-black/5 text-[#4E6847] hover:bg-black/10'
                          }`}
                        >
                          {tab}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Dashboard Content based on Tab */}
                  {activeTab === 'overview' && (
                    <div className="space-y-4">
                      {/* Metric Tiles */}
                      <div className="grid grid-cols-3 gap-2.5">
                        <div className="p-3 rounded-xl bg-[#EEF4EC] border border-[#DEE7DB]">
                      <div className="text-xs text-[#55714E]">Total Invoices</div>
                          <div className="text-base sm:text-lg font-bold text-[#1C2C1A]">10,420+</div>
                          <div className="text-[9px] text-emerald-600 flex items-center gap-0.5 mt-0.5">
                            <TrendingUp className="w-2.5 h-2.5" /> +18.4% this mo
                          </div>
                        </div>
                        <div className="p-3 rounded-xl bg-[#EEF4EC] border border-[#DEE7DB]">
                      <div className="text-xs text-[#55714E]">Stock Units</div>
                          <div className="text-base sm:text-lg font-bold text-[#1C2C1A]">584 Items</div>
                          <div className="text-[9px] text-blue-600 mt-0.5">Real-time sync</div>
                        </div>
                        <div className="p-3 rounded-xl bg-[#EEF4EC] border border-[#DEE7DB]">
                      <div className="text-xs text-[#55714E]">Cloud Latency</div>
                          <div className="text-base sm:text-lg font-bold text-emerald-700">120ms</div>
                          <div className="text-[9px] text-[#55714E] mt-0.5">Firebase store</div>
                        </div>
                      </div>

                      {/* Mock Chart & Invoicing Activity */}
                      <div className="p-3 rounded-xl bg-white border border-[#E3ECE0] shadow-sm">
                        <div className="flex items-center justify-between text-[11px] font-semibold mb-2">
                          <span>Revenue & GST Analytics</span>
                          <span className="text-emerald-700 font-mono text-[10px]">Verified Realtime</span>
                        </div>
                        <div className="h-20 flex items-end gap-2 pt-2 px-1">
                          {[35, 60, 45, 80, 65, 90, 75, 95, 88].map((h, i) => (
                            <div key={i} className="flex-1 bg-gradient-to-t from-[#415939] to-[#80A875] rounded-t-sm" style={{ height: `${h}%` }}></div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'invoices' && (
                    <div className="space-y-2">
                      <div className="text-xs font-bold text-[#2A3F24] mb-1">Recent Invoices Generated</div>
                      {[
                        { id: 'INV-2026-089', client: 'Sharma Trading Co.', amount: '₹48,250', status: 'Paid' },
                        { id: 'INV-2026-088', client: 'Prayag Enterprise', amount: '₹12,400', status: 'Pending' },
                        { id: 'INV-2026-087', client: 'United Retailers Ltd.', amount: '₹89,100', status: 'Paid' },
                      ].map(inv => (
                        <div key={inv.id} className="flex items-center justify-between p-2 rounded-lg bg-white border border-[#E4EDE1] text-xs">
                          <div>
                            <div className="font-bold text-[#1D2E1A]">{inv.id}</div>
                          <div className="text-xs text-[#587451]">{inv.client}</div>
                          </div>
                          <div className="text-right">
                            <div className="font-bold text-[#1D2E1A]">{inv.amount}</div>
                            <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-semibold">{inv.status}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeTab === 'inventory' && (
                    <div className="space-y-2 text-xs">
                      <div className="font-bold text-[#2A3F24]">Live Stock Management</div>
                      <div className="p-3 bg-[#EFF5ED] rounded-xl text-[11px] text-[#334A2C] leading-relaxed">
                        Features low-stock alerting, automated SKU categorization, barcode mapping, and integrated GST tax brackets (5%, 12%, 18%, 28%).
                      </div>
                    </div>
                  )}

                </div>
              </div>
            </div>

            {/* Architecture Highlights & Specs (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-[#4E6B47] mb-2">
                  System Architecture & Impact
                </h4>
                <p className="text-sm md:text-base text-[#2D4127] leading-relaxed">
                  {featuredProject.description}
                </p>
              </div>

              {/* Highlights List */}
              <div className="space-y-2.5">
                {featuredProject.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-[#283C22]">
                    <CheckCircle className="w-4 h-4 text-[#527746] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Tech Badges */}
              <div className="pt-2">
                <div className="text-[11px] font-bold text-[#4B6745] mb-2">Technologies Used:</div>
                <div className="flex flex-wrap gap-1.5">
                  {featuredProject.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-full text-[11px] font-semibold text-[#293E23] bg-white/80 border border-white"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Testimonial Quote Bubble */}
              <div className="p-4 rounded-2xl bg-white/70 border border-white/90 shadow-sm">
                <p className="text-xs italic text-[#31462A]">
                  "{featuredProject.testimonial.quote}"
                </p>
                <div className="mt-2 text-[11px] font-bold text-[#1C2C1A]">
                  — {featuredProject.testimonial.author}, <span className="font-normal text-[#53704C]">{featuredProject.testimonial.role}</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
