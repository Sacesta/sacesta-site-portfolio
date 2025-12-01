import { useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import {
  AlertTriangle,
  Users,
  Layers,
  FileText,
  Check,
  Code2,
  Zap,
  Wind,
  Server,
  FileCode,
  Smartphone,
  Database,
  HardDrive,
  Globe,
  ExternalLink
} from 'lucide-react';
import { caseStudiesData, CaseStudyData } from '../data/caseStudies';

// Icon mapping for dynamic tech stack icons
const iconMap: Record<string, any> = {
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
    // Initialize lucide icons if needed
    if (typeof window !== 'undefined') {
      // Scroll to top on mount
      window.scrollTo(0, 0);
    }
  }, []);

  const handleBackClick = () => {
    navigate('/portfolio');
  };

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-[#020202] text-neutral-400 flex items-center justify-center">
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
        bg: 'bg-blue-500/10',
        text: 'text-blue-400',
        border: 'border-blue-500/20',
        hover: 'group-hover:border-blue-500/50 group-hover:bg-blue-900/10'
      },
      purple: {
        bg: 'bg-purple-500/10',
        text: 'text-purple-400',
        border: 'border-purple-500/20',
        hover: 'group-hover:border-purple-500/50 group-hover:bg-purple-900/10'
      },
      green: {
        bg: 'bg-green-500/10',
        text: 'text-green-400',
        border: 'border-green-500/20',
        hover: 'group-hover:border-green-500/50 group-hover:bg-green-900/10'
      }
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <div className="bg-[#020202] text-neutral-400 antialiased overflow-x-hidden scroll-smooth selection:bg-orange-500/30 selection:text-orange-200">
      <style>{`
        .bg-grid-pattern {
          background-size: 60px 60px;
          background-image:
            linear-gradient(to right, rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
        }
        .mask-gradient {
          mask-image: radial-gradient(circle at center, black 30%, transparent 100%);
          -webkit-mask-image: radial-gradient(circle at center, black 30%, transparent 100%);
        }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 inset-x-0 z-50 border-b border-white/5 bg-[#020202]/80 backdrop-blur-xl supports-[backdrop-filter]:bg-[#020202]/60">
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
          <button
            onClick={handleBackClick}
            className="flex items-center gap-4 group cursor-pointer"
          >
            <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center border border-orange-500/20 group-hover:bg-orange-500/20 transition-colors">
              <span className="font-bold text-orange-500">S</span>
            </div>
            <span className="text-sm font-semibold text-white tracking-tight">
              Sacesta Technologies
            </span>
          </button>

          <div className="hidden md:flex items-center gap-8 text-[13px] font-medium text-neutral-500">
            <button onClick={handleBackClick} className="hover:text-white transition-colors">
              Back to Portfolio
            </button>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-32 md:pt-48 md:pb-48 px-6 border-b border-white/5 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-40"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-500/10 via-[#020202] to-[#020202] pointer-events-none"></div>

          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-orange-600/5 rounded-full blur-[120px] animate-pulse pointer-events-none"></div>
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"></div>

          <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-center relative z-10">
            <div className="lg:col-span-7 space-y-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md shadow-2xl">
                <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></div>
                <span className="text-[11px] font-medium text-neutral-300 tracking-wide uppercase">
                  Our Work
                </span>
              </div>

              <div>
                <h1 className="text-6xl sm:text-7xl lg:text-8xl font-medium text-white tracking-tighter leading-[0.95] mb-6">
                  {caseStudy.title}
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-100">
                    {caseStudy.subtitle}
                  </span>
                </h1>
                <p className="text-xl text-neutral-400 font-light tracking-tight max-w-xl leading-relaxed">
                  {caseStudy.description}
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 relative w-full perspective-[2000px] group">
              <div className="absolute -inset-10 bg-gradient-to-t from-orange-500/10 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition duration-1000"></div>

              <div className="relative bg-[#080808] border border-white/10 rounded-xl shadow-2xl overflow-hidden transform rotate-y-[-10deg] rotate-x-[5deg] group-hover:rotate-0 transition duration-700 ease-out z-20">
                <div className="h-8 bg-[#0F0F0F] border-b border-white/5 flex items-center px-3 gap-2">
                  <div className="flex gap-1.5 opacity-50">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                  </div>
                </div>
                <div className="aspect-[4/3] bg-[#050505] p-6 relative">
                  <div className="flex justify-between items-end mb-8">
                    <div className="space-y-2">
                      <div className="w-8 h-8 rounded bg-gradient-to-br from-orange-500 to-red-500 mb-2"></div>
                      <div className="w-32 h-4 bg-neutral-800 rounded"></div>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-20 h-8 rounded border border-white/10 bg-white/5"></div>
                      <div className="w-8 h-8 rounded border border-white/10 bg-white/5"></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="h-32 rounded-lg bg-neutral-900/50 border border-white/5 p-3 flex flex-col justify-between">
                      <div className="w-16 h-3 bg-neutral-800 rounded"></div>
                      <div className="flex items-end gap-1 h-16">
                        <div className="w-full bg-neutral-800/50 rounded-t h-[40%]"></div>
                        <div className="w-full bg-orange-500/80 rounded-t h-[70%]"></div>
                        <div className="w-full bg-neutral-800/50 rounded-t h-[50%]"></div>
                        <div className="w-full bg-neutral-800/50 rounded-t h-[30%]"></div>
                      </div>
                    </div>
                    <div className="h-32 rounded-lg bg-neutral-900/50 border border-white/5 p-3 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent"></div>
                      <div className="w-16 h-3 bg-neutral-800 rounded mb-4"></div>
                      <div className="w-full h-1 bg-neutral-800 rounded-full"></div>
                      <div className="w-full h-1 bg-neutral-800 rounded-full mt-2"></div>
                    </div>
                  </div>
                  <div className="h-20 rounded-lg bg-neutral-900/50 border border-white/5"></div>
                </div>
              </div>

              <div className="absolute -bottom-10 -left-10 z-30 bg-[#0A0A0A]/90 backdrop-blur-xl border border-white/10 rounded-lg p-4 shadow-2xl transform transition duration-1000 group-hover:translate-y-2">
                <div className="flex items-center gap-2 mb-3 text-[10px] text-neutral-500 font-mono">
                  <FileCode width={12} height={12} />
                  Config.ts
                </div>
                <div className="space-y-1.5 font-mono text-[10px]">
                  <div className="flex gap-2">
                    <span className="text-pink-500">export</span>
                    <span className="text-blue-400">const</span>
                    <span>theme = {'{'}</span>
                  </div>
                  <div className="pl-4 text-green-400">primary: '#F97316',</div>
                  <div className="pl-4 text-green-400">darkMode: true,</div>
                  <div className="pl-4 text-green-400">version: '2.0.0'</div>
                  <div className="text-neutral-500">{'};'}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Details Section */}
        <section id="case-details" className="py-24 px-6 border-b border-white/5 bg-[#030303]">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center border border-orange-500/20 mb-4">
                <AlertTriangle className="text-orange-500 w-6 h-6" />
              </div>
              <h3 className="text-xl font-medium text-white">{caseStudy.problem.title}</h3>
              <p className="text-neutral-400 leading-relaxed text-sm">{caseStudy.problem.description}</p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center border border-blue-500/20 mb-4">
                <Users className="text-blue-500 w-6 h-6" />
              </div>
              <h3 className="text-xl font-medium text-white">{caseStudy.userBase.title}</h3>
              <p className="text-neutral-400 leading-relaxed text-sm">{caseStudy.userBase.description}</p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center border border-green-500/20 mb-4">
                <Layers className="text-green-500 w-6 h-6" />
              </div>
              <h3 className="text-xl font-medium text-white">{caseStudy.approach.title}</h3>
              <p className="text-neutral-400 leading-relaxed text-sm">{caseStudy.approach.description}</p>
            </div>
          </div>
        </section>

        {/* Detailed Analysis Section */}
        <section id="analysis" className="py-24 px-6 border-b border-white/5 bg-[#020202]">
          <div className="max-w-3xl mx-auto">
            <div className="mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] text-orange-400 font-mono mb-6">
                <FileText width={12} height={12} />
                <span>Detailed Analysis</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-6">
                {caseStudy.detailedAnalysis.title}
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-orange-500/0 rounded-full"></div>
            </div>

            <article className="space-y-8 text-neutral-400 leading-8 text-lg font-light">
              {caseStudy.detailedAnalysis.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}

              {caseStudy.detailedAnalysis.sections.map((section, sectionIndex) => (
                <div key={sectionIndex}>
                  <h3 className="text-2xl text-white font-medium pt-8 pb-2 tracking-tight">
                    {section.title}
                  </h3>
                  {section.paragraphs.map((paragraph, pIndex) => (
                    <p key={pIndex} className={pIndex > 0 ? 'pt-4' : ''}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              ))}

              {caseStudy.detailedAnalysis.quote && (
                <blockquote className="border-l-2 border-orange-500 pl-6 py-2 my-8 text-neutral-200 italic text-xl font-light">
                  "{caseStudy.detailedAnalysis.quote}"
                </blockquote>
              )}
            </article>
          </div>
        </section>

        {/* Development Workflow Section */}
        <section id="process" className="py-32 px-6 border-b border-white/5">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-20">
              <div>
                <h2 className="text-3xl font-medium text-white tracking-tight mb-2">
                  Development Workflow
                </h2>
                <p className="text-neutral-500 text-sm">A systematic approach to engineering excellence.</p>
              </div>
              <div className="hidden md:block px-4 py-2 rounded-full border border-white/10 text-xs font-mono text-neutral-400">
                Methodology: Agile / Kanban
              </div>
            </div>

            <div className="relative space-y-12">
              <div className="absolute left-[27px] top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>

              {caseStudy.workflow.map((step, index) => {
                const colorClasses = getColorClasses(step.color);
                const isLast = index === caseStudy.workflow.length - 1;
                return (
                  <div key={index} className="relative flex gap-10 group">
                    <div className="relative z-10 flex-shrink-0">
                      <div
                        className={`w-14 h-14 rounded-2xl bg-[#0A0A0A] border border-white/10 flex items-center justify-center transition-all shadow-[0_0_0_4px_rgba(0,0,0,1)] ${colorClasses.hover}`}
                      >
                        <span
                          className={`text-lg font-bold text-neutral-500 ${colorClasses.text.replace('text-', 'group-hover:text-')} transition-colors`}
                        >
                          {step.step}
                        </span>
                      </div>
                    </div>
                    <div className={`pt-2 ${isLast ? '' : 'pb-8 border-b border-white/5'} w-full`}>
                      <h3 className="text-xl text-white font-medium mb-3 flex items-center gap-3">
                        {step.title}
                        <span
                          className={`px-2 py-0.5 rounded text-[10px] ${colorClasses.bg} ${colorClasses.text} ${colorClasses.border} font-mono`}
                        >
                          {step.duration}
                        </span>
                      </h3>
                      <p className="text-neutral-400 leading-relaxed mb-4 max-w-xl">{step.description}</p>
                      <ul className="flex gap-4 text-xs text-neutral-600 font-mono">
                        {step.deliverables.map((deliverable, dIndex) => (
                          <li key={dIndex} className="flex items-center gap-1">
                            <Check width={10} height={10} />
                            {deliverable}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section id="tech" className="py-32 px-6 border-b border-white/5 bg-[#030303]">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-2xl mb-16">
              <h2 className="text-3xl font-medium text-white tracking-tight mb-4">Technology Stack</h2>
              <p className="text-neutral-500 leading-relaxed">
                We selected a modern, type-safe stack designed for performance at the edge. Every tool
                served a specific purpose in reducing latency and improving developer experience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {caseStudy.techStack.map((tech, index) => {
                const IconComponent = getIconComponent(tech.icon);
                return (
                  <div
                    key={index}
                    className="p-6 rounded-2xl bg-[#0A0A0A] border border-white/5 hover:border-white/10 transition-all group"
                  >
                    <div className="w-10 h-10 rounded bg-neutral-900 border border-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <IconComponent className={tech.iconColor} />
                    </div>
                    <h4 className="text-white font-medium mb-1">{tech.name}</h4>
                    <p className="text-xs text-neutral-500">{tech.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-24 px-6 border-b border-white/5 bg-[#020202]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-medium text-white tracking-tight mb-4">Impact & Outcomes</h2>
              <p className="text-neutral-500">Measurable performance improvements following the deployment.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {caseStudy.impact.map((item, index) => (
                <div
                  key={index}
                  className="p-8 rounded-2xl bg-[#0A0A0A] border border-white/5 flex flex-col items-center text-center hover:border-white/10 transition-colors group"
                >
                  <div className="text-5xl font-bold text-white tracking-tighter mb-2 group-hover:text-orange-500 transition-colors">
                    {item.value}
                  </div>
                  <div className="text-xs text-neutral-500 uppercase tracking-widest font-medium">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 px-6" id="contact">
          <div className="max-w-6xl mx-auto">
            <div className="relative bg-[#080808] border border-white/10 rounded-[2rem] p-12 lg:p-24 overflow-hidden text-center">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-white/5 blur-[100px] rounded-full pointer-events-none"></div>
              <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>

              <div className="relative z-10 flex flex-col items-center">
                <div className="w-16 h-16 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center mb-8 shadow-2xl">
                  <Globe className="text-white w-8 h-8" />
                </div>

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white tracking-tighter mb-6 max-w-2xl">
                  Experience the Platform
                </h2>

                <p className="text-neutral-400 mb-10 text-lg font-light max-w-lg mx-auto leading-relaxed">
                  Explore the live application to see our architectural decisions and design system in a
                  production environment.
                </p>

                {caseStudy.liveUrl && (
                  <a
                    href={caseStudy.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center justify-center gap-3 bg-white text-black px-8 py-4 rounded-full text-sm font-semibold transition-all hover:bg-neutral-200 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                  >
                    Visit Live Website
                    <ExternalLink width={16} height={16} className="transition-transform group-hover:translate-x-1" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-6 border-t border-white/5 bg-[#020202]">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-neutral-600">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              <p>Available for new projects</p>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-6">
              <p>© 2023 Case Study. Designed & Developed by Olamide Afolabi.</p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-white transition-colors">
                  Twitter
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  GitHub
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default CaseStudyDetail;

