import { useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import {
  AlertTriangle,
  Users,
  Layers,
  FileText,
  Code2,
  Zap,
  Wind,
  Server,
  FileCode,
  Smartphone,
  Database,
  HardDrive,
  Globe,
  ExternalLink,
  ChevronLeft,
  Quote
} from 'lucide-react';
import { caseStudiesData, CaseStudyData } from '../data/caseStudies';
import { cn } from '../lib/utils';
import logo from '../assets/logo-black-original.png';

// Import images
import esimPlatformBg from '../assets/esim-platform-bg.png';
import zenaiBg from '../assets/zenai.png';
import mayuriBg from '../assets/mayuri.png';
import evokeBg from '../assets/evoke.png';
import shividBg from '../assets/shivid-bg.png';
import crmBg from '../assets/crmbg.png';
import seacatBg from '../assets/seacatbg.png';
import visit from '../assets/visitahmdavadbg.png';
import picbg from '../assets/picbg.png';
import xray from '../assets/xray.png';
import bharatupline from '../assets/bharatupline.png';
import comehomebg from '../assets/comehombg.png';

// New Project Assets
import manlab from '../assets/manlab.png';
import fisAdvisory from '../assets/fis-advisory.png';
import velvetTravel from '../assets/velvet-travel.png';
import ghlWidget from '../assets/ghl-widget.png';

const assetMap: Record<string, string> = {
  'esim-platform': esimPlatformBg,
  'zenn-ai': zenaiBg,
  'collaboration': mayuriBg,
  'evoke-dholavira': evokeBg,
  'security': shividBg,
  'security-2': shividBg,
  'hustlerguys-crm': crmBg,
  'seacatboats': seacatBg,
  'analytics': visit,
  'dashboard': picbg,
  'ai-diagnostics': xray,
  'automation': bharatupline,
  'bharat-upline': bharatupline,
  'integration': comehomebg,
  'manlab-telehealth': manlab,
  'fis-advisory': fisAdvisory,
  'velvet-travel-world': velvetTravel,
  'ghl-widget': ghlWidget,
};

// Icon mapping for dynamic tech stack icons
const iconMap: Record<string, React.ComponentType<any>> = {
  'code-2': Code2,
  'zap': Zap,
  'wind': Wind,
  'server': Server,
  'file-code': FileCode,
  'smartphone': Smartphone,
  'database': Database,
  'hard-drive': HardDrive
};

const CaseStudyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const location = useLocation();

  // Get case study data from navigation state or find by ID
  const caseStudy: CaseStudyData | undefined =
    location.state?.caseStudy || caseStudiesData.find(cs => cs.id === id);

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  const handleBackClick = () => {
    navigate('/portfolio');
  };

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-slate-50 text-slate-800 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl text-slate-800 mb-4">Case Study Not Found</h1>
          <button
            onClick={handleBackClick}
            className="px-6 py-2 bg-slate-800/10 hover:bg-slate-800/20 border border-slate-800/10 rounded-full text-slate-800 transition-colors"
          >
            Back to Portfolio
          </button>
        </div>
      </div>
    );
  }

  const getIconComponent = (iconName: string) => {
    return iconMap[iconName] || Code2;
  };



  return (
    <div className="bg-slate-50 text-slate-800 antialiased overflow-x-hidden scroll-smooth selection:bg-sky-500/20">
      <style>{`
        * {
          font-family: 'Inter', sans-serif;
          -webkit-font-smoothing: antialiased;
        }
        
        .bg-grid-pattern {
          background-size: 60px 60px;
          background-image:
            linear-gradient(to right, rgba(15, 23, 42, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(15, 23, 42, 0.03) 1px, transparent 1px);
        }
        
        h1, h2, h3, h4, h5, h6 {
          letter-spacing: -0.04em;
          line-height: 1.1;
        }
      `}</style>

      {/* Navigation (Synced with Global Theme) */}
      <nav className="fixed top-0 inset-x-0 z-50 h-20 border-b border-slate-200/50 bg-white/75 backdrop-blur-3xl flex items-center">
        <div className="max-w-7xl mx-auto w-full px-6 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <a href="https://www.sacesta.com/" target="_blank" rel="noopener noreferrer" className="nav-logo-pill cursor-pointer hover:opacity-80 transition-opacity">
              <img src={logo} alt="Sacesta" className="h-8 w-auto object-contain" />
            </a>
          </div>

          <button
            onClick={handleBackClick}
            className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] font-black text-slate-500 hover:text-slate-900 transition-colors group"
          >
            <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Portfolio
          </button>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-24 md:pt-48 md:pb-40 px-6 overflow-hidden">
          {/* Global Theme background glows */}
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-sky-500/5 blur-[130px] rounded-full pointer-events-none" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-sky-500/5 blur-[130px] rounded-full pointer-events-none" />

          <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>

          <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-center relative z-10">
            <div className="lg:col-span-7 space-y-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white/50 backdrop-blur-md shadow-sm">
                <div className="w-2 h-2 rounded-full bg-sky-500 animate-pulse"></div>
                <span className="text-[10px] sm:text-[11px] font-black text-slate-600 uppercase tracking-[0.3em]">
                  Technical Case Study
                </span>
              </div>

              <div>
                <h1 className="text-5xl sm:text-6xl md:text-8xl font-black text-slate-900 mb-6 tracking-tighter leading-[0.95] md:leading-[0.95]">
                  {caseStudy.title}
                  <br />
                  <span className="text-slate-400 text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight block mt-4">
                    {caseStudy.subtitle}
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-slate-600 max-w-2xl font-light leading-relaxed">
                  {caseStudy.description}
                </p>
              </div>

              <div className="pt-8 grid grid-cols-3 gap-6 border-t border-slate-200/60 max-w-lg">
                <div>
                  <span className="block text-[10px] uppercase tracking-widest font-black text-slate-400 mb-1.5">Client</span>
                  <span className="text-slate-900 text-sm font-bold">{caseStudy.title}</span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-widest font-black text-slate-400 mb-1.5">Focus</span>
                  <span className="text-slate-900 text-sm font-bold">Systems & Web</span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-widest font-black text-slate-400 mb-1.5">Alliance</span>
                  <span className="text-slate-900 text-sm font-bold">Completed</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative w-full mt-8 lg:mt-0">
              <div className="relative bg-white border border-slate-200 rounded-[1.5rem] shadow-[0_30px_80px_rgba(15,23,42,0.08)] overflow-hidden transition-all duration-700">
                {/* Browser Mock header bar */}
                <div className="bg-slate-50 border-b border-slate-100 px-5 py-3.5 flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                  <div className="ml-4 bg-white border border-slate-100 rounded-md px-3 py-0.5 text-[9px] text-slate-400 font-medium tracking-wide w-40 truncate">
                    sacesta.com/project/{caseStudy.id}
                  </div>
                </div>
                {/* Image Aspect Box */}
                <div className="aspect-[4/3] bg-slate-100 overflow-hidden">
                  <img
                    src={assetMap[caseStudy.id] || ''}
                    alt={caseStudy.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Details Section (Unified Dashboard Panel) */}
        <section className="py-24 px-6 border-b border-slate-200 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white border border-slate-200 rounded-[2.5rem] shadow-[0_20px_50px_rgba(15,23,42,0.03)] overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200">
                
                {/* Problem */}
                <div className="p-10 md:p-12 hover:bg-slate-50/50 transition-colors">
                  <div className="w-12 h-12 rounded-2xl bg-sky-50 flex items-center justify-center border border-sky-100 mb-8">
                    <AlertTriangle className="text-sky-600 w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">{caseStudy.problem.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-light">{caseStudy.problem.description}</p>
                </div>

                {/* User Base */}
                <div className="p-10 md:p-12 hover:bg-slate-50/50 transition-colors">
                  <div className="w-12 h-12 rounded-2xl bg-sky-50 flex items-center justify-center border border-sky-100 mb-8">
                    <Users className="text-sky-600 w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">{caseStudy.userBase.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-light">{caseStudy.userBase.description}</p>
                </div>

                {/* Approach */}
                <div className="p-10 md:p-12 hover:bg-slate-50/50 transition-colors">
                  <div className="w-12 h-12 rounded-2xl bg-sky-50 flex items-center justify-center border border-sky-100 mb-8">
                    <Layers className="text-sky-600 w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">{caseStudy.approach.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-light">{caseStudy.approach.description}</p>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Detailed Analysis Section */}
        <section className="py-24 px-6 border-b border-slate-200 bg-slate-50 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-500/5 blur-[150px] rounded-full pointer-events-none" />

          <div className="max-w-4xl mx-auto relative z-10">
            <div className="mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white/85 text-[10px] text-sky-600 font-black uppercase tracking-[0.3em] mb-8">
                <FileText className="w-4 h-4" />
                <span>Executive Analysis</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tighter">
                {caseStudy.detailedAnalysis.title}
              </h2>
            </div>

            <article className="space-y-10 text-slate-700 text-lg md:text-xl font-light">
              {caseStudy.detailedAnalysis.paragraphs.map((paragraph, index) => (
                <p key={index} className="leading-relaxed">{paragraph}</p>
              ))}

              {caseStudy.detailedAnalysis.sections.map((section, sectionIndex) => (
                <div key={sectionIndex} className="pt-12">
                  <h3 className="text-3xl font-bold text-slate-900 mb-6 tracking-tight">
                    {section.title}
                  </h3>
                  {section.paragraphs.map((paragraph, pIndex) => (
                    <p key={pIndex} className="leading-relaxed pt-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              ))}

              {caseStudy.detailedAnalysis.quote && (
                <div className="relative py-12 px-10 rounded-[2.5rem] bg-sky-50/50 border border-sky-100 my-16 overflow-hidden">
                  <Quote className="absolute top-8 left-8 w-20 h-20 text-sky-500/5 -z-10" />
                  <blockquote className="text-slate-900 text-2xl md:text-3xl font-medium tracking-tight italic leading-snug">
                    "{caseStudy.detailedAnalysis.quote}"
                  </blockquote>
                </div>
              )}
            </article>
          </div>
        </section>

        {/* Development Workflow Section */}
        <section className="py-24 px-6 border-b border-slate-200 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
              <div>
                <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-4 tracking-tighter">
                  Engineering Workflow
                </h2>
                <p className="text-slate-500 text-lg font-light tracking-tight">A systemic approach to scalable architecture.</p>
              </div>
              <div className="px-5 py-2.5 rounded-2xl bg-white border border-slate-200 text-[10px] font-black uppercase tracking-[0.2em] text-slate-600 shadow-sm">
                Methodology: Agile / Lean
              </div>
            </div>

            <div className="relative border-l border-slate-200 md:border-l-0 ml-4 md:ml-0 pt-8">
              {/* Central vertical timeline track line for desktop */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-slate-200 -translate-x-1/2" />

              {caseStudy.workflow.map((step, index) => {
                const isLeft = index % 2 === 0;
                return (
                  <div key={index} className="relative mb-16 flex flex-col md:flex-row md:items-center">
                    
                    {/* Left Side (Desktop Only) */}
                    <div className="hidden md:flex md:w-1/2 md:pr-12 justify-end items-center">
                      {isLeft && (
                        <div className="p-8 rounded-[2rem] bg-white border border-slate-200 shadow-[0_10px_30px_rgba(15,23,42,0.02)] hover:border-sky-500/30 transition-all text-left w-full">
                          <span className="px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider bg-sky-50 border border-sky-100 text-sky-600">
                            {step.duration}
                          </span>
                          <h3 className="text-2xl font-bold text-slate-900 mt-4 mb-3 tracking-tight">{step.title}</h3>
                          <p className="text-slate-600 text-sm leading-relaxed font-light mb-5 opacity-90">{step.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {step.deliverables.map((d, i) => (
                              <span key={i} className="text-[9px] uppercase tracking-widest font-black text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                                {d}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Timeline Node dot */}
                    <div className="absolute -left-[5px] md:left-1/2 md:-translate-x-1/2 top-8 md:top-auto md:self-center flex items-center justify-center z-10">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#0284c7] ring-4 ring-sky-100" />
                    </div>

                    {/* Right Side (Desktop Right / Mobile Main) */}
                    <div className="pl-8 md:pl-12 md:w-1/2 flex items-center">
                      {!isLeft ? (
                        <div className="p-8 rounded-[2rem] bg-white border border-slate-200 shadow-[0_10px_30px_rgba(15,23,42,0.02)] hover:border-sky-500/30 transition-all text-left w-full">
                          <span className="px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider bg-sky-50 border border-sky-100 text-sky-600">
                            {step.duration}
                          </span>
                          <h3 className="text-2xl font-bold text-slate-900 mt-4 mb-3 tracking-tight">{step.title}</h3>
                          <p className="text-slate-600 text-sm leading-relaxed font-light mb-5 opacity-90">{step.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {step.deliverables.map((d, i) => (
                              <span key={i} className="text-[9px] uppercase tracking-widest font-black text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                                {d}
                              </span>
                            ))}
                          </div>
                        </div>
                      ) : (
                        /* Mobile layout fallback for left items */
                        <div className="md:hidden p-8 rounded-[2rem] bg-white border border-slate-200 shadow-[0_10px_30px_rgba(15,23,42,0.02)] hover:border-sky-500/30 transition-all text-left w-full">
                          <span className="px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider bg-sky-50 border border-sky-100 text-sky-600">
                            {step.duration}
                          </span>
                          <h3 className="text-2xl font-bold text-slate-900 mt-4 mb-3 tracking-tight">{step.title}</h3>
                          <p className="text-slate-600 text-sm leading-relaxed font-light mb-5 opacity-90">{step.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {step.deliverables.map((d, i) => (
                              <span key={i} className="text-[9px] uppercase tracking-widest font-black text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                                {d}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="py-24 px-6 border-b border-slate-200 bg-slate-50 relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/5 blur-[150px] rounded-full pointer-events-none" />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="max-w-2xl mb-16">
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tighter">Technology Stack</h2>
              <p className="text-slate-600 text-lg font-light leading-relaxed">
                Precision-engineered for performance. Every tool in our stack was selected for its ability to reduce latency and ensure rock-solid stability.
              </p>
            </div>

            <div className={cn(
              "grid gap-6",
              caseStudy.techStack.length === 5 
                ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-5" 
                : caseStudy.techStack.length === 6 
                  ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" 
                  : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
            )}>
              {caseStudy.techStack.map((tech, index) => {
                const IconComponent = getIconComponent(tech.icon);
                return (
                  <div
                    key={index}
                    className="p-8 rounded-[2rem] bg-white border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all group backdrop-blur-3xl"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                      <IconComponent className={cn("w-6 h-6", tech.iconColor)} />
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2 tracking-tight">{tech.name}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed font-light">{tech.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-24 px-6 border-b border-slate-200 bg-slate-50">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-16 tracking-tighter">Measurable Impact</h2>
            <div className={cn(
              "grid gap-8",
              caseStudy.impact.length === 3 
                ? "grid-cols-1 md:grid-cols-3" 
                : caseStudy.impact.length === 4 
                  ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" 
                  : "grid-cols-1 md:grid-cols-3"
            )}>
              {caseStudy.impact.map((item, index) => (
                <div
                  key={index}
                  className="p-12 rounded-[2.5rem] bg-white border border-slate-200 hover:border-sky-500/30 hover:shadow-md transition-all group"
                >
                  <div className="text-6xl md:text-8xl font-black text-slate-900 mb-4 group-hover:text-sky-600 transition-colors tracking-tighter">
                    {item.value}
                  </div>
                  <div className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-32 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="relative bg-white border border-slate-200 rounded-[3rem] p-12 md:p-24 overflow-hidden text-center shadow-sm">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-sky-500/5 blur-[100px] rounded-full pointer-events-none" />

              <div className="relative z-10 flex flex-col items-center">
                <div className="w-16 h-16 bg-slate-100 rounded-2xl border border-slate-200 flex items-center justify-center mb-10 shadow-sm">
                  <Globe className="text-sky-600 w-8 h-8" />
                </div>

                <h2 className="text-4xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter">
                  View the Final Result
                </h2>

                <p className="text-slate-600 text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto">
                  Experience the full power of the technical solution in a production environment.
                </p>

                {caseStudy.liveUrl && (
                  <a
                    href={caseStudy.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center justify-center gap-4 bg-slate-900 text-white px-12 py-5 rounded-2xl text-lg font-black transition-all hover:scale-105 active:scale-95 shadow-[0_20px_40px_rgba(15,23,42,0.12)]"
                  >
                    <span className="uppercase tracking-tight">Visit Live Project</span>
                    <ExternalLink className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-16 px-6 border-t border-slate-200 bg-slate-50">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.3)]"></span>
              <p className="text-slate-600 text-sm font-bold uppercase tracking-widest">Available for New Alliances</p>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-10">
              <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.25em]">© 2026 Sacesta Technologies</p>
              <div className="flex gap-8">
                <a href="https://x.com/sacestatech?s=21&t=kZ08CtKXa2d_h3XAG9-Fcg" target="_blank" rel="noopener noreferrer" className="text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-indigo-600 transition-colors">X</a>
                <a href="https://www.instagram.com/sacesta_technologies/" target="_blank" rel="noopener noreferrer" className="text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-indigo-600 transition-colors">Instagram</a>
                <a href="https://www.linkedin.com/company/sacesta" target="_blank" rel="noopener noreferrer" className="text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-indigo-600 transition-colors">LinkedIn</a>
                <a href="https://api.whatsapp.com/send?phone=918347406455" target="_blank" rel="noopener noreferrer" className="text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-indigo-600 transition-colors">WhatsApp</a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default CaseStudyDetail;
