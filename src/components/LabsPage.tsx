
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const LabsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCTA = () => {
    window.open('https://labs.excape.ai', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen swirl-bg text-[#202124] selection:bg-[#4ADE80]/30 pb-20 pt-24">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <Link to="/" className="flex items-center gap-2 text-slate-500 hover:text-[#34A853] transition-colors mb-16 text-sm font-bold group">
          <span className="material-symbols-outlined text-sm transition-transform group-hover:-translate-x-1">arrow_back</span> 
          BACK TO HUB
        </Link>

        <div className="mb-20">
          <div className="flex gap-6">
            <div className="w-1.5 bg-[#34A853] rounded-full"></div>
            <div>
              <p className="text-[#34A853] font-bold text-xs tracking-widest uppercase mb-2">EXCAPE LABS</p>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight max-w-4xl">
                The Marketplace <br/><span className="text-[#34A853]">Engine.</span>
              </h1>
              <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">Where Code meets Capital. Build, Upload, Earn.</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-4xl font-bold mb-10">For Developers</h2>
            <div className="space-y-6">
              {[
                { icon: 'code', title: 'Submission', desc: 'Upload scripts/apps (e.g., Invoice Generator).', color: 'bg-green-50 text-[#34A853]' },
                { icon: 'verified_user', title: 'Review', desc: 'Engineering team audits for security/quality.', color: 'bg-blue-50 text-blue-600' },
                { icon: 'payments', title: 'Monetization', desc: 'Direct Sales & Consulting Usage Royalties.', color: 'bg-amber-50 text-amber-600' }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-8 rounded-[32px] flex items-center gap-6 border border-slate-100 shadow-sm hover:shadow-xl transition-all">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${item.color} shrink-0`}>
                    <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-[40px] flex items-center justify-center min-h-[400px] relative overflow-hidden shadow-sm border border-slate-100">
            <div className="absolute inset-0 opacity-[0.2]" style={{ backgroundImage: 'radial-gradient(circle, #34A853 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}></div>
            <div className="relative text-center p-12">
              <h3 className="text-8xl font-black text-slate-100 uppercase tracking-tighter mb-4 select-none">STORE</h3>
              <div className="flex items-center justify-center gap-4 text-[#34A853] font-mono text-sm font-bold bg-green-50 py-2 px-6 rounded-full border border-green-100 shadow-sm">
                <span className="opacity-40">&lt;</span> READY_TO_DEPLOY <span className="opacity-40">/&gt;</span>
              </div>
              
              {/* Floating Mockup Tags */}
              <div className="absolute top-14 left-10 bg-white border border-slate-100 px-4 py-2 rounded-xl text-xs font-mono text-slate-500 shadow-md animate-float">Auto_Invoice.py</div>
              <div className="absolute bottom-14 right-10 bg-white border border-slate-100 px-4 py-2 rounded-xl text-xs font-mono text-slate-500 shadow-md animate-float" style={{ animationDelay: '2s' }}>CRM_Bot.js</div>
            </div>
          </div>
        </div>

        <div className="bg-white p-10 rounded-[40px] border border-slate-100 shadow-sm border-l-8 border-l-[#34A853]">
           <div className="flex items-center gap-3 mb-6">
             <span className="material-symbols-outlined text-[#34A853] animate-spin-slow">sync</span>
             <h3 className="text-2xl font-bold">Nexus Connection</h3>
           </div>
           <p className="text-slate-600 mb-10 text-lg max-w-3xl">
             Labs provides the tools that Consulting sells. It is the bridge between <span className="text-[#34A853] font-bold">Talent</span> and <span className="text-[#34A853] font-bold">Business</span>.
           </p>
           <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="bg-slate-50 border border-slate-200 px-6 py-3 rounded-xl font-bold text-sm text-slate-700 uppercase tracking-widest">Labs Repository</div>
              <div className="flex-grow h-px bg-slate-200 relative">
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white border border-[#34A853]/30 px-4 py-1 text-[10px] font-bold uppercase tracking-widest text-[#34A853]">Supplies Verified Tools</div>
              </div>
              <div className="bg-slate-50 border border-slate-200 px-6 py-3 rounded-xl font-bold text-sm text-slate-700 uppercase tracking-widest">Consulting Solutions</div>
           </div>
        </div>

        <div className="mt-24 mb-20">
          <h2 className="text-4xl font-bold mb-12 text-center">Excape Labs Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Category 1 */}
            <div className="col-span-1 md:col-span-2">
               <h3 className="text-2xl font-bold mb-6 text-[#34A853]">Business Automation & Compliance</h3>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                 {[
                    { title: "AI Automated Agent for Visa", desc: "Monitors visa/residency expiries, sends auto-reminders via WhatsApp 30 days in advance.", icon: "badge" },
                    { title: "Automated VAT & Invoice Processor", desc: "Scans invoices (OCR), extracts data, calculates VAT, and syncs with Tally/QuickBooks.", icon: "receipt_long" },
                    { title: "WhatsApp Enterprise Sales Bot", desc: "Showcases product catalogs, answers queries in English/Arabic, and processes orders 24/7.", icon: "chat" },
                    { title: "AI Lead Scraper & CRM Enricher", desc: "Finds B2B leads from LinkedIn/Maps, verifies emails, and pushes 'Warm Leads' to CRM.", icon: "person_search" },
                    { title: "Intelligent HR Assistant", desc: "Chatbot for document uploads, leave requests, and instant salary slip downloads.", icon: "support_agent" }
                 ].map((p, i) => (
                    <div key={i} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-slate-500 mb-4">
                        <span className="material-symbols-outlined">{p.icon}</span>
                      </div>
                      <h4 className="font-bold text-sm mb-2 text-slate-800">{p.title}</h4>
                      <p className="text-xs text-slate-500 leading-relaxed">{p.desc}</p>
                    </div>
                 ))}
               </div>
            </div>

            {/* Category 2 */}
            <div className="col-span-1 md:col-span-2">
               <h3 className="text-2xl font-bold mb-6 text-[#34A853] mt-8">Advanced AI & Customer Experience</h3>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                 {[
                    { title: "AI 3D Conversational Chatbot", desc: "Immersive AI avatars with real-time voice and gesture responses for kiosks/websites.", icon: "smart_toy" },
                    { title: "AI Social Media Manager", desc: "Scrapes trends, generates captions/images, and schedules content on Auto-Pilot.", icon: "share" },
                    { title: "Multi-Lingual Voice Agent", desc: "Handles support calls in English/Arabic/Hindi, books appointments, and routes issues.", icon: "record_voice_over" },
                    { title: "E-Commerce Rec. Engine", desc: "Analyzes browsing behavior to suggest personalized products, boosting cross-selling.", icon: "recommend" },
                    { title: "AI Document Summarizer", desc: "Reads contracts/PDFs and generates instant summaries and risk analysis for firms.", icon: "summarize" }
                 ].map((p, i) => (
                    <div key={i} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-slate-500 mb-4">
                         <span className="material-symbols-outlined">{p.icon}</span>
                      </div>
                      <h4 className="font-bold text-sm mb-2 text-slate-800">{p.title}</h4>
                      <p className="text-xs text-slate-500 leading-relaxed">{p.desc}</p>
                    </div>
                 ))}
               </div>
            </div>

             {/* Category 3 */}
             <div className="col-span-1">
               <h3 className="text-2xl font-bold mb-6 text-[#34A853] mt-8">Healthcare & Wellness</h3>
               <div className="grid grid-cols-1 gap-6">
                 {[
                    { title: "AI Nutrition Tracker", desc: "Recognizes food from photos and logs daily meals with AI diet recommendations.", icon: "nutrition" },
                    { title: "AI Fitness Companion", desc: "Tracks workouts via smart bands and auto-generates progress reports.", icon: "fitness_center" }
                 ].map((p, i) => (
                    <div key={i} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                       <h4 className="font-bold text-sm mb-2 text-slate-800 flex items-center gap-2"><span className="material-symbols-outlined text-sm">{p.icon}</span> {p.title}</h4>
                       <p className="text-xs text-slate-500">{p.desc}</p>
                    </div>
                 ))}
               </div>
            </div>

            {/* Category 4 */}
            <div className="col-span-1">
               <h3 className="text-2xl font-bold mb-6 text-[#34A853] mt-8">Recruitment & Education</h3>
               <div className="grid grid-cols-1 gap-6">
                 {[
                    { title: "AI Job Recommendation", desc: "Parses CVs and matches them with jobs from LinkedIn/Naukri.", icon: "work_outline" },
                    { title: "AI Academic RAG System", desc: "Provides cited answers from uploaded academic papers for research.", icon: "school" },
                    { title: "Auto Student Attendance", desc: "Face recognition system for classrooms to prevent proxy attendance.", icon: "face" }
                 ].map((p, i) => (
                    <div key={i} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                       <h4 className="font-bold text-sm mb-2 text-slate-800 flex items-center gap-2"><span className="material-symbols-outlined text-sm">{p.icon}</span> {p.title}</h4>
                       <p className="text-xs text-slate-500">{p.desc}</p>
                    </div>
                 ))}
               </div>
            </div>
             
             {/* Category 5 */}
            <div className="col-span-1 md:col-span-2">
               <h3 className="text-2xl font-bold mb-6 text-[#34A853] mt-8">Industry Specific</h3>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                 {[
                    { title: "Real Estate Property Manager", desc: "Track lease expiries, rent payments, and maintenance requests.", icon: "apartment" },
                    { title: "Smart Logistics Tracker", desc: "Real-time driver tracking, route optimization, and customer viewing links.", icon: "local_shipping" },
                    { title: "Construction Safety Monitor", desc: "Detects safety violations (missing helmets/vests) via CCTV.", icon: "construction" },
                    { title: "Dynamic Pricing Predictor", desc: "Predicts stock shortages and suggests optimal pricing strategies.", icon: "price_change" }
                 ].map((p, i) => (
                    <div key={i} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-slate-500 mb-4">
                         <span className="material-symbols-outlined">{p.icon}</span>
                      </div>
                      <h4 className="font-bold text-sm mb-2 text-slate-800">{p.title}</h4>
                      <p className="text-xs text-slate-500 leading-relaxed">{p.desc}</p>
                    </div>
                 ))}
               </div>
            </div>

          </div>
        </div>

        {/* Excape White-label LMS Banner */}
        <div className="mb-20">
           <div className="bg-[#1e293b] rounded-[40px] p-10 md:p-14 border border-slate-700 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10 min-h-[300px]">
             {/* Background Patterns */}
             <div className="absolute inset-0 opacity-10">
               <div className="absolute top-0 right-0 w-96 h-96 bg-[#34A853] rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4"></div>
             </div>
             
             <div className="relative z-10 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-[#4ADE80] text-xs font-bold tracking-widest uppercase mb-6 shadow-sm">
                   <span className="material-symbols-outlined text-[14px]">rocket_launch</span>
                   Custom LMS Platform
                </div>
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                  Excape Custom LMS Application
                </h3>
                <p className="text-xl text-slate-300 leading-relaxed mb-8">
                  Manage your courses fully automated. A powerful, branded Learning Management System designed to host, sell, and scale your educational content. Complete setup within 7 days.
                </p>
                <Link to="/lms-pricing" className="inline-flex bg-[#34A853] hover:bg-[#2E8B46] text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-[#34A853]/20 transition-all hover:-translate-y-1">
                  View Pricing & Plans
                </Link>
             </div>
             
             <div className="relative z-10 shrink-0 w-full md:w-auto flex justify-center">
                <div className="w-64 h-64 bg-slate-800 rounded-3xl border border-slate-700 shadow-xl overflow-hidden relative">
                   {/* Mockup Top Bar */}
                   <div className="bg-slate-900 border-b border-slate-700 p-3 flex gap-2">
                     <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                     <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                     <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                   </div>
                   {/* Mockup Content */}
                   <div className="p-4 space-y-3">
                     <div className="h-6 w-1/2 bg-slate-700 rounded-lg"></div>
                     <div className="grid grid-cols-2 gap-3 mt-4">
                       <div className="h-16 bg-slate-700 rounded-lg"></div>
                       <div className="h-16 bg-slate-700 rounded-lg"></div>
                       <div className="h-16 bg-slate-700 rounded-lg"></div>
                       <div className="h-16 bg-[#34A853]/20 relative overflow-hidden rounded-lg">
                         <div className="absolute -left-2 top-0 bottom-0 w-6 bg-[#34A853]"></div>
                       </div>
                     </div>
                   </div>
                   {/* Floating Tag */}
                   <div className="absolute bottom-6 right-6 bg-white py-1 px-3 rounded-full text-[10px] font-bold text-slate-800 shadow-md">
                     Your Logo Here
                   </div>
                </div>
             </div>
           </div>
        </div>

        <div className="mt-20 text-center">
           <button onClick={handleCTA} className="bg-[#34A853] hover:bg-[#2E8B46] text-white px-10 py-5 rounded-full font-bold text-xl shadow-2xl shadow-[#34A853]/20 transition-all hover:scale-105 active:scale-95">
             Visit Marketplace
           </button>
        </div>
      </div>
    </div>
  );
};

export default LabsPage;
