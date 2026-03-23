import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LmsPricingPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeTab, setActiveTab] = useState<'comparison' | 'services' | 'terms'>('comparison');

  const handleCTA = (planName: string) => {
    const message = encodeURIComponent(`Hello, I'm interested in the Excape White-label LMS ${planName} Plan.`);
    window.open(`https://wa.me/916282638237?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen swirl-bg text-[#202124] selection:bg-[#4ADE80]/30 pb-20 pt-24">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <Link to="/labs" className="flex items-center gap-2 text-slate-500 hover:text-[#34A853] transition-colors mb-12 text-sm font-bold group">
          <span className="material-symbols-outlined text-sm transition-transform group-hover:-translate-x-1">arrow_back</span> 
          BACK TO LABS
        </Link>

        {/* Hero Section */}
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-100 text-[#34A853] text-sm font-bold tracking-widest uppercase mb-6 shadow-sm">
            <span className="material-symbols-outlined text-xs">rocket_launch</span>
            Custom LMS Platform
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Excape Custom <span className="text-[#34A853]">LMS Application.</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed mx-auto max-w-3xl">
            Manage your courses fully automated. A powerful, branded Learning Management System designed to host, sell, and scale your educational content without writing a single line of code.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 max-w-6xl mx-auto">
          {/* Basic Plan */}
          <div className="bg-white rounded-[32px] p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all relative flex flex-col">
            <h3 className="text-2xl font-bold mb-2">Basic</h3>
            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-4xl font-bold">₹19,999</span>
              <span className="text-slate-500 text-sm">one-time setup</span>
            </div>
            <p className="text-sm text-[#34A853] font-bold mb-8">+ ₹1,500 / month</p>
            
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex gap-3 text-slate-700 text-sm"><span className="material-symbols-outlined text-[#34A853] text-lg">check_circle</span> Up to 70 Students</li>
              <li className="flex gap-3 text-slate-700 text-sm"><span className="material-symbols-outlined text-[#34A853] text-lg">check_circle</span> Up to 5 Tutors</li>
              <li className="flex gap-3 text-slate-700 text-sm"><span className="material-symbols-outlined text-[#34A853] text-lg">check_circle</span> 2 Admin Accounts</li>
              <li className="flex gap-3 text-slate-700 text-sm"><span className="material-symbols-outlined text-[#34A853] text-lg">check_circle</span> Custom Branding (Logo, Colors)</li>
              <li className="flex gap-3 text-slate-400 text-sm"><span className="material-symbols-outlined text-slate-300 text-lg">cancel</span> Custom Domain (uses subdomain)</li>
              <li className="flex gap-3 text-slate-700 text-sm"><span className="material-symbols-outlined text-[#34A853] text-lg">check_circle</span> WhatsApp Support (48h response)</li>
              <li className="flex gap-3 text-slate-700 text-sm"><span className="material-symbols-outlined text-[#34A853] text-lg">check_circle</span> 500 MB Database included</li>
            </ul>
            
            <button onClick={() => handleCTA('Basic')} className="w-full py-4 rounded-xl border-2 border-[#34A853] text-[#34A853] font-bold hover:bg-green-50 transition-colors">
              Get Started
            </button>
          </div>

          {/* Standard Plan (Popular) */}
          <div className="bg-[#1e293b] text-white rounded-[32px] p-8 border border-slate-700 shadow-2xl relative flex flex-col transform md:-translate-y-4">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#34A853] text-white text-xs font-bold uppercase tracking-widest py-1.5 px-4 rounded-full">Most Popular</div>
            <h3 className="text-2xl font-bold mb-2 text-[#34A853]">Standard</h3>
            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-4xl font-bold">₹26,999</span>
              <span className="text-slate-400 text-sm">one-time setup</span>
            </div>
            <p className="text-sm text-[#4ade80] font-bold mb-8">+ ₹3,000 / month</p>
            
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex gap-3 text-slate-300 text-sm"><span className="material-symbols-outlined text-[#34A853] text-lg">check_circle</span> Up to 200 Students</li>
              <li className="flex gap-3 text-slate-300 text-sm"><span className="material-symbols-outlined text-[#34A853] text-lg">check_circle</span> Up to 15 Tutors</li>
              <li className="flex gap-3 text-slate-300 text-sm"><span className="material-symbols-outlined text-[#34A853] text-lg">check_circle</span> 3 Admin Accounts</li>
              <li className="flex gap-3 text-slate-300 text-sm"><span className="material-symbols-outlined text-[#34A853] text-lg">check_circle</span> Custom Domain (e.g., lms.yoursite.com)</li>
              <li className="flex gap-3 text-slate-300 text-sm"><span className="material-symbols-outlined text-[#34A853] text-lg">check_circle</span> WhatsApp & Phone Support (24h)</li>
              <li className="flex gap-3 text-slate-300 text-sm"><span className="material-symbols-outlined text-[#34A853] text-lg">check_circle</span> 2 Training Sessions</li>
              <li className="flex gap-3 text-slate-300 text-sm"><span className="material-symbols-outlined text-[#34A853] text-lg">check_circle</span> 1 Custom Feature / year</li>
            </ul>
            
            <button onClick={() => handleCTA('Standard')} className="w-full py-4 rounded-xl bg-[#34A853] hover:bg-[#2E8B46] text-white font-bold transition-colors shadow-lg shadow-[#34A853]/20">
              Go Standard
            </button>
          </div>

          {/* Elite Plan */}
          <div className="bg-white rounded-[32px] p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all relative flex flex-col">
            <h3 className="text-2xl font-bold mb-2">Elite</h3>
            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-4xl font-bold">₹34,999</span>
              <span className="text-slate-500 text-sm">one-time setup</span>
            </div>
            <p className="text-sm text-[#34A853] font-bold mb-8">+ ₹6,000 / month</p>
            
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex gap-3 text-slate-700 text-sm"><span className="material-symbols-outlined text-[#34A853] text-lg">check_circle</span> Up to 500 Students</li>
              <li className="flex gap-3 text-slate-700 text-sm"><span className="material-symbols-outlined text-[#34A853] text-lg">check_circle</span> Unlimited Tutors</li>
              <li className="flex gap-3 text-slate-700 text-sm"><span className="material-symbols-outlined text-[#34A853] text-lg">check_circle</span> ~20 Admin Accounts</li>
              <li className="flex gap-3 text-slate-700 text-sm"><span className="material-symbols-outlined text-[#34A853] text-lg">check_circle</span> Custom Domain + SSL</li>
              <li className="flex gap-3 text-slate-700 text-sm"><span className="material-symbols-outlined text-[#34A853] text-lg">check_circle</span> Dedicated Manager (4h response)</li>
              <li className="flex gap-3 text-slate-700 text-sm"><span className="material-symbols-outlined text-[#34A853] text-lg">check_circle</span> 2 GB Database included</li>
              <li className="flex gap-3 text-slate-700 text-sm"><span className="material-symbols-outlined text-[#34A853] text-lg">check_circle</span> 2 Custom Features / year</li>
            </ul>
            
            <button onClick={() => handleCTA('Elite')} className="w-full py-4 rounded-xl border-2 border-[#34A853] text-[#34A853] font-bold hover:bg-green-50 transition-colors">
              Contact Sales
            </button>
          </div>
        </div>

        {/* Info Navigation Tabs */}
        <div className="flex justify-center mb-10 overflow-x-auto py-2">
          <div className="inline-flex bg-slate-100 p-1.5 rounded-2xl gap-2">
            {[
              { id: 'comparison', label: 'Feature Comparison', icon: 'tune' },
              { id: 'services', label: 'Additional Services', icon: 'add_shopping_cart' },
              { id: 'terms', label: 'Terms & Agreements', icon: 'gavel' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all whitespace-nowrap ${
                  activeTab === tab.id 
                    ? 'bg-white shadow-sm text-[#34A853]' 
                    : 'text-slate-500 hover:text-slate-800 hover:bg-slate-200/50'
                }`}
              >
                <span className="material-symbols-outlined text-[20px]">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content Panels */}
        <div className="bg-white rounded-[40px] border border-slate-100 shadow-sm p-8 md:p-12 mb-20">
          
          {/* Comparison Tab */}
          {activeTab === 'comparison' && (
            <div className="animate-fade-in overflow-x-auto">
              <h3 className="text-2xl font-bold mb-8 text-center">Detailed Plan Comparison</h3>
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="border-b-2 border-slate-100">
                    <th className="py-4 px-4 font-bold text-slate-400 uppercase tracking-wider text-xs w-1/4">Feature</th>
                    <th className="py-4 px-4 font-bold text-slate-800 text-lg w-1/4"><span className="text-[#34A853]">●</span> Basic</th>
                    <th className="py-4 px-4 font-bold text-[#34A853] text-lg w-1/4"><span className="text-blue-500">●</span> Standard</th>
                    <th className="py-4 px-4 font-bold text-slate-800 text-lg w-1/4"><span className="text-purple-500">●</span> Elite</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {[
                    ['Annual Renewal', '₹12,000/year', '₹18,000/year', '₹25,000/year'],
                    ['Support Hours', 'Mon-Sat 10AM-6PM', 'Mon-Sat 9AM-7PM', 'Mon-Sat 9AM-8PM'],
                    ['Uptime SLA', '99.5%', '99.9%', '99.9% + Credit'],
                    ['Backups', 'Weekly automated', 'Daily automated', 'Daily + On-demand'],
                    ['Training Sessions', '1 Session', '2 Sessions + Guide', '3 Sessions + Recordings'],
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                      <td className="py-5 px-4 font-medium text-slate-700">{row[0]}</td>
                      <td className="py-5 px-4 text-slate-600">{row[1]}</td>
                      <td className="py-5 px-4 text-slate-600">{row[2]}</td>
                      <td className="py-5 px-4 text-slate-600">{row[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Services Tab */}
          {activeTab === 'services' && (
            <div className="animate-fade-in">
              <h3 className="text-2xl font-bold mb-8 text-center">Additional Services</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "Extra Custom Feature (Small)", desc: "Add a new field, minor layout change", price: "₹3,000 - ₹5,000" },
                  { title: "Extra Custom Feature (Medium)", desc: "New page, customized report", price: "₹8,000 - ₹15,000" },
                  { title: "Extra Custom Feature (Large)", desc: "Third-party integration, new module", price: "₹20,000 - ₹50,000" },
                  { title: "Data Migration", desc: "From existing system/LMS", price: "₹5,000 - ₹15,000" },
                  { title: "Emergency Support", desc: "Outside business hours support", price: "₹1,500/incident" },
                  { title: "Student Limit Increase", desc: "Per 50 additional students", price: "₹300/month" },
                  { title: "SMS Notification Integration", desc: "Setup fee + actual API costs", price: "₹15,000" },
                  { title: "Payment/Fee Module", desc: "Automated fee collection setup", price: "₹25k - ₹40k" }
                ].map((s, idx) => (
                  <div key={idx} className="flex justify-between items-center p-5 border border-slate-100 rounded-2xl bg-slate-50/50">
                    <div>
                      <h4 className="font-bold text-slate-800">{s.title}</h4>
                      <p className="text-xs text-slate-500">{s.desc}</p>
                    </div>
                    <div className="text-right whitespace-nowrap bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-sm font-bold text-[#34A853] text-sm">
                      {s.price}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Terms Tab */}
          {activeTab === 'terms' && (
            <div className="animate-fade-in grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <h4 className="flex items-center gap-2 font-bold text-lg mb-4 text-slate-800">
                  <span className="material-symbols-outlined text-[#34A853]">payments</span> Payment Terms
                </h4>
                <ul className="list-disc pl-5 space-y-2 text-sm text-slate-600 mb-8">
                  <li>50% of setup fee payable before project initiation.</li>
                  <li>Remaining 50% payable upon delivery and admin handover.</li>
                  <li>Monthly charges billed on the 1st of each month.</li>
                  <li>Late payment: 7-day grace period. Service paused after 15 days.</li>
                </ul>

                <h4 className="flex items-center gap-2 font-bold text-lg mb-4 text-slate-800">
                  <span className="material-symbols-outlined text-[#34A853]">security</span> Data & Ownership
                </h4>
                <ul className="list-disc pl-5 space-y-2 text-sm text-slate-600">
                  <li>Your data belongs to you. Full export available on request.</li>
                  <li>You receive a usage license — source code is not transferable.</li>
                  <li>All data is encrypted in transit and stored securely.</li>
                </ul>
              </div>
              
              <div>
                <h4 className="flex items-center gap-2 font-bold text-lg mb-4 text-slate-800">
                  <span className="material-symbols-outlined text-[#34A853]">power</span> Uptime & Service
                </h4>
                <ul className="list-disc pl-5 space-y-2 text-sm text-slate-600 mb-8">
                  <li>Uptime is monitored 24/7. Credit provided if guarantee falls below SLA.</li>
                  <li>Elite plan gets full month credit if SLA breached &gt;2x in a quarter.</li>
                  <li>Scheduled maintenance communicated 48h in advance (done off-hours).</li>
                </ul>

                <h4 className="flex items-center gap-2 font-bold text-lg mb-4 text-slate-800">
                  <span className="material-symbols-outlined text-[#34A853]">cancel</span> Termination
                </h4>
                <ul className="list-disc pl-5 space-y-2 text-sm text-slate-600">
                  <li>30 days written notice required by either party.</li>
                  <li>Full data export provided within 7 business days.</li>
                  <li>Remaining prepaid amounts are non-refundable.</li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Setup Process Timeline */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold mb-12 text-center">Setup Process Timeline</h2>
          <div className="relative">
            {/* Horizontal Line Line */}
            <div className="hidden md:block absolute top-[45px] left-10 right-10 h-1 bg-slate-100 rounded-full"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-6 gap-6 relative z-10">
              {[
                { day: "Day 1", title: "Agreement", icon: "draw" },
                { day: "Day 1-2", title: "Branding", icon: "format_paint" },
                { day: "Day 3-5", title: "Deployment", icon: "cloud_upload" },
                { day: "Day 5-6", title: "Admin Setup", icon: "admin_panel_settings" },
                { day: "Day 7", title: "Training", icon: "play_lesson" },
                { day: "Day 7-10", title: "Go Live!", icon: "rocket" },
              ].map((step, i) => (
                <div key={i} className="flex flex-row md:flex-col items-center gap-4 text-center">
                  <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-white border-4 border-slate-100 flex items-center justify-center shadow-sm shrink-0 relative">
                    <span className="material-symbols-outlined text-2xl md:text-3xl text-[#34A853]">{step.icon}</span>
                    <div className="absolute -top-3 right-0 bg-slate-800 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">{step.day}</div>
                  </div>
                  <div className="text-left md:text-center">
                    <h5 className="font-bold text-slate-800 text-sm md:text-base">{step.title}</h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="max-w-3xl mx-auto">
           <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
           <div className="space-y-4">
             {[
               { q: "Can I upgrade my plan later?", a: "Yes. You only pay the difference in setup fee + the new monthly rate from the next billing cycle." },
               { q: "What happens if database storage exceeds limits?", a: "We'll notify you 30 days in advance. You can either optimize old data or pay the minor overage fee listed in your plan." },
               { q: "Do I need to provide web hosting?", a: "No. High-speed hosting, database scaling, and technical maintenance are entirely handled by us." },
               { q: "Is there a dedicated mobile app?", a: "Our LMS is designed as a Progressive Web App (PWA). It installs directly on a smartphone screen—no app store downloads needed." },
               { q: "Can my students download videos?", a: "Videos are viewed securely within the platform. Download access depends completely on your configured sharing settings." }
             ].map((faq, i) => (
               <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm cursor-pointer hover:shadow-md transition-all group">
                 <h4 className="font-bold text-lg text-slate-800 mb-2 group-hover:text-[#34A853] transition-colors flex justify-between items-center">
                   {faq.q}
                 </h4>
                 <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
               </div>
             ))}
           </div>
        </div>

      </div>
    </div>
  );
};

export default LmsPricingPage;
