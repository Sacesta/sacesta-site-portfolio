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
import logo from '../assets/sacesta logo white.png';

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
      <div className="min-h-screen bg-[#050505] text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl text-white mb-4">Case Study Not Found</h1>
          <button
            onClick={handleBackClick}
            className="px-6 py-2 bg-white/10 hover:bg-white/20 border border-white/10 rounded-full text-white transition-colors"
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

  const getColorClasses = (color: string) => {
    const colorMap: Record<string, { bg: string; text: string; border: string; hover: string }> = {
      blue: {
        bg: 'bg-indigo-500/10',
        text: 'text-indigo-400',
        border: 'border-indigo-500/20',
        hover: 'group-hover:border-indigo-500/50 group-hover:bg-indigo-900/10'
      },
      purple: {
        bg: 'bg-purple-500/10',
        text: 'text-purple-400',
        border: 'border-purple-500/20',
        hover: 'group-hover:border-purple-500/50 group-hover:bg-purple-900/10'
      },
      green: {
        bg: 'bg-emerald-500/10',
        text: 'text-emerald-400',
        border: 'border-emerald-500/20',
        hover: 'group-hover:border-emerald-500/50 group-hover:bg-emerald-900/10'
      }
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <div className="bg-[#050505] text-white antialiased overflow-x-hidden scroll-smooth selection:bg-indigo-500/30">
      <style>{`
        * {
          font-family: 'Inter', sans-serif;
          -webkit-font-smoothing: antialiased;
        }
        
        .bg-grid-pattern {
          background-size: 60px 60px;
          background-image:
            linear-gradient(to right, rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
        }
        
        h1, h2, h3, h4, h5, h6 {
          letter-spacing: -0.04em;
          line-height: 1.1;
        }
      `}</style>

      {/* Navigation (Synced with Global Theme) */}
      <nav className="fixed top-0 inset-x-0 z-50 h-20 border-b border-white/5 bg-black/40 backdrop-blur-3xl flex items-center">
        <div className="max-w-7xl mx-auto w-full px-6 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="nav-logo-pill cursor-pointer" onClick={handleBackClick}>
              <img src={logo} alt="Sacesta" className="h-8 w-auto object-contain" />
            </div>
          </div>

          <button
            onClick={handleBackClick}
            className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] font-black text-white/50 hover:text-white transition-colors group"
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
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/10 blur-[130px] rounded-full pointer-events-none" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[130px] rounded-full pointer-events-none" />
          
          <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>

          <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-center relative z-10">
            <div className="lg:col-span-7 space-y-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md">
                <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></div>
                <span className="text-[10px] sm:text-[11px] font-black text-white uppercase tracking-[0.3em]">
                  Technical Case Study
                </span>
              </div>

              <div>
                <h1 className="text-5xl sm:text-6xl md:text-8xl font-black text-white mb-6 tracking-tighter">
                  {caseStudy.title}
                  <br />
                  <span className="text-white/40">
                    {caseStudy.subtitle}
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-gray-400 max-w-2xl font-light leading-relaxed">
                  {caseStudy.description}
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 relative w-full perspective-[2000px] mt-8 lg:mt-0">
               <div className="relative bg-white/[0.02] backdrop-blur-3xl border border-white/10 rounded-[2.5rem] shadow-[0_40px_100px_rgba(0,0,0,0.5)] overflow-hidden transition-all duration-700">
                    <div className="aspect-[4/3] bg-black/40 overflow-hidden">
                         <img 
                            src={assetMap[caseStudy.id] || ''} 
                            alt={caseStudy.title} 
                            className="w-full h-full object-cover opacity-80 transition-transform duration-1000"
                         />
                    </div>
               </div>
            </div>
          </div>
        </section>

        {/* Case Details Section (Glassmorphic Cards) */}
        <section className="py-24 px-6 border-b border-white/5 bg-[#050505]">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/[0.02] border border-white/5 p-10 rounded-[2rem] hover:border-indigo-500/20 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20 mb-8">
                <AlertTriangle className="text-indigo-400 w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 tracking-tight">{caseStudy.problem.title}</h3>
              <p className="text-gray-400 text-base leading-relaxed font-light">{caseStudy.problem.description}</p>
            </div>

            <div className="bg-white/[0.02] border border-white/5 p-10 rounded-[2rem] hover:border-purple-500/20 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center border border-purple-500/20 mb-8">
                <Users className="text-purple-400 w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 tracking-tight">{caseStudy.userBase.title}</h3>
              <p className="text-gray-400 text-base leading-relaxed font-light">{caseStudy.userBase.description}</p>
            </div>

            <div className="bg-white/[0.02] border border-white/5 p-10 rounded-[2rem] hover:border-emerald-500/20 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 mb-8">
                <Layers className="text-emerald-400 w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 tracking-tight">{caseStudy.approach.title}</h3>
              <p className="text-gray-400 text-base leading-relaxed font-light">{caseStudy.approach.description}</p>
            </div>
          </div>
        </section>

        {/* Detailed Analysis Section */}
        <section className="py-24 px-6 border-b border-white/5 bg-[#050505] relative overflow-hidden">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/5 blur-[150px] rounded-full pointer-events-none" />

          <div className="max-w-4xl mx-auto relative z-10">
            <div className="mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-[10px] text-indigo-400 font-black uppercase tracking-[0.3em] mb-8">
                <FileText className="w-4 h-4" />
                <span>Executive Analysis</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">
                {caseStudy.detailedAnalysis.title}
              </h2>
            </div>

            <article className="space-y-10 text-gray-300 text-lg md:text-xl font-light">
              {caseStudy.detailedAnalysis.paragraphs.map((paragraph, index) => (
                <p key={index} className="leading-relaxed">{paragraph}</p>
              ))}

              {caseStudy.detailedAnalysis.sections.map((section, sectionIndex) => (
                <div key={sectionIndex} className="pt-12">
                  <h3 className="text-3xl font-bold text-white mb-6 tracking-tight">
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
                <div className="relative py-12 px-10 rounded-[2.5rem] bg-indigo-500/5 border border-indigo-500/10 my-16 overflow-hidden">
                   <Quote className="absolute top-8 left-8 w-20 h-20 text-indigo-500/10 -z-10" />
                   <blockquote className="text-white text-2xl md:text-3xl font-medium tracking-tight italic leading-snug">
                    "{caseStudy.detailedAnalysis.quote}"
                    </blockquote>
                </div>
              )}
            </article>
          </div>
        </section>

        {/* Development Workflow Section */}
        <section className="py-24 px-6 border-b border-white/5 bg-[#050505]">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
              <div>
                <h2 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter">
                  Engineering Workflow
                </h2>
                <p className="text-gray-500 text-lg font-light tracking-tight">A systemic approach to scalable architecture.</p>
              </div>
              <div className="px-5 py-2.5 rounded-2xl bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
                Methodology: Agile / Lean
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {caseStudy.workflow.map((step, index) => {
                const colorClasses = getColorClasses(step.color);
                return (
                  <div key={index} className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-indigo-500/20 group transition-all">
                    <div className="flex items-center justify-between mb-8">
                         <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center font-black text-lg border", colorClasses.bg, colorClasses.border, colorClasses.text)}>
                            {step.step}
                         </div>
                         <span className={cn("px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider border", colorClasses.bg, colorClasses.text, colorClasses.border)}>
                            {step.duration}
                         </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{step.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed font-light mb-6 opacity-80">{step.description}</p>
                    <div className="flex flex-wrap gap-2">
                         {step.deliverables.map((d, i) => (
                            <span key={i} className="text-[9px] uppercase tracking-widest font-black text-gray-600 bg-white/5 px-2.5 py-1 rounded-md">
                                {d}
                            </span>
                         ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="py-24 px-6 border-b border-white/5 bg-[#050505] relative overflow-hidden">
             <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/5 blur-[150px] rounded-full pointer-events-none" />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="max-w-2xl mb-16">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">Technology Stack</h2>
              <p className="text-gray-400 text-lg font-light leading-relaxed">
                Precision-engineered for performance. Every tool in our stack was selected for its ability to reduce latency and ensure rock-solid stability.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {caseStudy.techStack.map((tech, index) => {
                const IconComponent = getIconComponent(tech.icon);
                return (
                  <div
                    key={index}
                    className="p-8 rounded-[2rem] bg-white/[0.03] border border-white/5 hover:border-white/10 transition-all group backdrop-blur-3xl"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-black/40 border border-white/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                      <IconComponent className={cn("w-6 h-6", tech.iconColor)} />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2 tracking-tight">{tech.name}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed font-light">{tech.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-24 px-6 border-b border-white/5 bg-[#050505]">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-16 tracking-tighter">Measurable Impact</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {caseStudy.impact.map((item, index) => (
                <div
                  key={index}
                  className="p-12 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-indigo-500/20 transition-all group"
                >
                  <div className="text-6xl md:text-8xl font-black text-white mb-4 group-hover:text-indigo-400 transition-colors tracking-tighter">
                    {item.value}
                  </div>
                  <div className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="relative bg-white/[0.02] backdrop-blur-3xl border border-white/10 rounded-[3rem] p-12 md:p-24 overflow-hidden text-center">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none" />

              <div className="relative z-10 flex flex-col items-center">
                <div className="w-16 h-16 bg-black rounded-2xl border border-white/10 flex items-center justify-center mb-10 shadow-2xl">
                  <Globe className="text-indigo-400 w-8 h-8" />
                </div>

                <h2 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter">
                  View the Final Result
                </h2>

                <p className="text-gray-400 text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto">
                  Experience the full power of the technical solution in a production environment.
                </p>

                {caseStudy.liveUrl && (
                  <a
                    href={caseStudy.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center justify-center gap-4 bg-white text-black px-12 py-5 rounded-2xl text-lg font-black transition-all hover:scale-105 active:scale-95 shadow-[0_20px_40px_rgba(255,255,255,0.2)]"
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
        <footer className="py-16 px-6 border-t border-white/5 bg-[#050505]">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]"></span>
              <p className="text-gray-400 text-sm font-bold uppercase tracking-widest">Available for New Alliances</p>
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-10">
              <p className="text-gray-600 text-[10px] font-black uppercase tracking-[0.25em]">© 2026 Sacesta Technologies</p>
              <div className="flex gap-8">
                 <a href="https://x.com/sacestatech?s=21&t=kZ08CtKXa2d_h3XAG9-Fcg" target="_blank" rel="noopener noreferrer" className="text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-indigo-400 transition-colors">X</a>
                 <a href="https://www.instagram.com/sacesta_technologies/" target="_blank" rel="noopener noreferrer" className="text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-indigo-400 transition-colors">Instagram</a>
                 <a href="https://www.linkedin.com/company/sacesta" target="_blank" rel="noopener noreferrer" className="text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-indigo-400 transition-colors">LinkedIn</a>
                 <a href="https://api.whatsapp.com/send?phone=918347406455" target="_blank" rel="noopener noreferrer" className="text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-indigo-400 transition-colors">WhatsApp</a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default CaseStudyDetail;
