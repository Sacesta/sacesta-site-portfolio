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
      <div className="min-h-screen bg-[#020202] text-white flex items-center justify-center">
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
    <div className="bg-[#020202] text-white antialiased overflow-x-hidden scroll-smooth selection:bg-orange-500/30 selection:text-orange-200">
      <style>{`
        * {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-rendering: optimizeLegibility;
        }
        
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
        
        /* Typography Improvements */
        h1, h2, h3, h4, h5, h6 {
          font-weight: 600;
          letter-spacing: -0.02em;
          line-height: 1.2;
        }
        
        p {
          letter-spacing: -0.01em;
          line-height: 1.7;
        }
        
        /* Navigation */
        nav {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif !important;
        }
        nav button {
          font-weight: 500;
          letter-spacing: -0.01em;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif !important;
        }
        nav span {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif !important;
        }
        
        /* Hero Section */
        .hero-title {
          font-weight: 700;
          letter-spacing: -0.03em;
          line-height: 0.95;
        }
        
        .hero-description {
          font-weight: 400;
          letter-spacing: -0.01em;
          line-height: 1.75;
        }
        
        /* Section Headings */
        .section-heading {
          font-weight: 600;
          letter-spacing: -0.02em;
          line-height: 1.3;
        }
        
        /* Body Text */
        .body-text {
          font-weight: 400;
          letter-spacing: -0.01em;
          line-height: 1.75;
        }
        
        /* Card Text */
        .card-title {
          font-weight: 600;
          letter-spacing: -0.015em;
          line-height: 1.4;
        }
        
        .card-description {
          font-weight: 400;
          letter-spacing: -0.01em;
          line-height: 1.7;
        }
        
        /* Impact Numbers */
        .impact-value {
          font-weight: 700;
          letter-spacing: -0.03em;
          line-height: 1;
        }
        
        /* Quote */
        blockquote {
          font-weight: 400;
          letter-spacing: -0.01em;
          line-height: 1.8;
          font-style: italic;
        }
        
        /* Code/Mono Text */
        code, .font-mono {
          font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', 'Source Code Pro', monospace;
          font-weight: 400;
          letter-spacing: 0;
        }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 inset-x-0 z-50 border-b border-white/5 bg-[#020202]/80 backdrop-blur-xl supports-[backdrop-filter]:bg-[#020202]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <button
            onClick={handleBackClick}
            className="flex items-center gap-2 sm:gap-4 group cursor-pointer"
          >
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-orange-500/10 flex items-center justify-center border border-orange-500/20 group-hover:bg-orange-500/20 transition-colors">
              <span className="font-bold text-orange-500 text-xs sm:text-sm" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>S</span>
            </div>
            <span className="text-xs sm:text-sm font-semibold text-white tracking-tight" style={{ letterSpacing: '-0.01em', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
              <span className="hidden sm:inline">Sacesta Technologies</span>
              <span className="sm:hidden">Sacesta</span>
            </span>
          </button>

          <div className="flex items-center gap-4 md:gap-8 text-[13px] md:text-[14px] font-medium text-neutral-300">
            <button onClick={handleBackClick} className="hover:text-white transition-colors whitespace-nowrap" style={{ letterSpacing: '-0.01em', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
              Back to Portfolio
            </button>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-24 md:pt-48 md:pb-48 px-4 sm:px-6 border-b border-white/5 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-40"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-500/10 via-[#020202] to-[#020202] pointer-events-none"></div>

          <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] bg-orange-600/5 rounded-full blur-[120px] animate-pulse pointer-events-none"></div>
          <div className="absolute bottom-0 right-0 w-[250px] h-[250px] sm:w-[500px] sm:h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"></div>

          <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center relative z-10">
            <div className="lg:col-span-7 space-y-6 sm:space-y-8 lg:space-y-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md shadow-2xl">
                <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></div>
                <span className="text-[11px] sm:text-[12px] font-semibold text-white uppercase" style={{ letterSpacing: '0.1em' }}>
                  Our Work
                </span>
              </div>

              <div>
                <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white mb-5 sm:mb-7">
                  {caseStudy.title}
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-100">
                    {caseStudy.subtitle}
                  </span>
                </h1>
                <p className="hero-description text-base sm:text-lg md:text-xl text-neutral-200 max-w-2xl">
                  {caseStudy.description}
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 relative w-full perspective-[2000px] group mt-8 lg:mt-0">
              <div className="absolute -inset-10 bg-gradient-to-t from-orange-500/10 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition duration-1000 hidden lg:block"></div>

              <div className="relative bg-[#080808] border border-white/10 rounded-xl shadow-2xl overflow-hidden transform lg:rotate-y-[-10deg] lg:rotate-x-[5deg] group-hover:rotate-0 transition duration-700 ease-out z-20">
                <div className="h-8 bg-[#0F0F0F] border-b border-white/5 flex items-center px-3 gap-2">
                  <div className="flex gap-1.5 opacity-50">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                  </div>
                </div>
                <div className="aspect-[4/3] bg-[#050505] p-4 sm:p-6 relative">
                  <div className="flex justify-between items-end mb-6 sm:mb-8">
                    <div className="space-y-2">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded bg-gradient-to-br from-orange-500 to-red-500 mb-2"></div>
                      <div className="w-24 sm:w-32 h-3 sm:h-4 bg-neutral-800 rounded"></div>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-16 sm:w-20 h-6 sm:h-8 rounded border border-white/10 bg-white/5"></div>
                      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded border border-white/10 bg-white/5"></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className="h-24 sm:h-32 rounded-lg bg-neutral-900/50 border border-white/5 p-2 sm:p-3 flex flex-col justify-between">
                      <div className="w-12 sm:w-16 h-2 sm:h-3 bg-neutral-800 rounded"></div>
                      <div className="flex items-end gap-1 h-12 sm:h-16">
                        <div className="w-full bg-neutral-800/50 rounded-t h-[40%]"></div>
                        <div className="w-full bg-orange-500/80 rounded-t h-[70%]"></div>
                        <div className="w-full bg-neutral-800/50 rounded-t h-[50%]"></div>
                        <div className="w-full bg-neutral-800/50 rounded-t h-[30%]"></div>
                      </div>
                    </div>
                    <div className="h-24 sm:h-32 rounded-lg bg-neutral-900/50 border border-white/5 p-2 sm:p-3 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent"></div>
                      <div className="w-12 sm:w-16 h-2 sm:h-3 bg-neutral-800 rounded mb-3 sm:mb-4"></div>
                      <div className="w-full h-1 bg-neutral-800 rounded-full"></div>
                      <div className="w-full h-1 bg-neutral-800 rounded-full mt-2"></div>
                    </div>
                  </div>
                  <div className="h-16 sm:h-20 rounded-lg bg-neutral-900/50 border border-white/5"></div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 sm:-bottom-10 sm:-left-10 z-30 bg-[#0A0A0A]/90 backdrop-blur-xl border border-white/10 rounded-lg p-3 sm:p-4 shadow-2xl transform transition duration-1000 group-hover:translate-y-2 hidden sm:block">
                <div className="flex items-center gap-2 mb-2 sm:mb-3 text-[9px] sm:text-[10px] text-neutral-300 font-mono">
                  <FileCode width={10} height={10} className="sm:w-3 sm:h-3" />
                  Config.ts
                </div>
                <div className="space-y-1 sm:space-y-1.5 font-mono text-[9px] sm:text-[10px]">
                  <div className="flex gap-2">
                    <span className="text-pink-400">export</span>
                    <span className="text-blue-300">const</span>
                    <span className="text-neutral-200">theme = {'{'}</span>
                  </div>
                  <div className="pl-3 sm:pl-4 text-green-300">primary: '#F97316',</div>
                  <div className="pl-3 sm:pl-4 text-green-300">darkMode: true,</div>
                  <div className="pl-3 sm:pl-4 text-green-300">version: '2.0.0'</div>
                  <div className="text-neutral-300">{'};'}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Details Section */}
        <section id="case-details" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 border-b border-white/5 bg-[#030303]">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
            <div className="space-y-3 sm:space-y-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-orange-500/10 flex items-center justify-center border border-orange-500/20 mb-3 sm:mb-4">
                <AlertTriangle className="text-orange-500 w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="card-title text-lg sm:text-xl md:text-2xl text-white mb-3 sm:mb-4">{caseStudy.problem.title}</h3>
              <p className="card-description text-neutral-200 text-sm sm:text-base md:text-lg">{caseStudy.problem.description}</p>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-blue-500/10 flex items-center justify-center border border-blue-500/20 mb-3 sm:mb-4">
                <Users className="text-blue-500 w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="card-title text-lg sm:text-xl md:text-2xl text-white mb-3 sm:mb-4">{caseStudy.userBase.title}</h3>
              <p className="card-description text-neutral-200 text-sm sm:text-base md:text-lg">{caseStudy.userBase.description}</p>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-green-500/10 flex items-center justify-center border border-green-500/20 mb-3 sm:mb-4">
                <Layers className="text-green-500 w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="card-title text-lg sm:text-xl md:text-2xl text-white mb-3 sm:mb-4">{caseStudy.approach.title}</h3>
              <p className="card-description text-neutral-200 text-sm sm:text-base md:text-lg">{caseStudy.approach.description}</p>
            </div>
          </div>
        </section>

        {/* Detailed Analysis Section */}
        <section id="analysis" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 border-b border-white/5 bg-[#020202]">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8 sm:mb-10 md:mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-[11px] sm:text-[12px] text-orange-400 font-mono mb-5 sm:mb-7" style={{ letterSpacing: '0.05em' }}>
                <FileText width={12} height={12} className="sm:w-4 sm:h-4" />
                <span>Detailed Analysis</span>
              </div>
              <h2 className="section-heading text-3xl sm:text-4xl md:text-5xl text-white mb-5 sm:mb-7">
                {caseStudy.detailedAnalysis.title}
              </h2>
              <div className="h-1 w-16 sm:w-20 bg-gradient-to-r from-orange-500 to-orange-500/0 rounded-full"></div>
            </div>

            <article className="space-y-7 sm:space-y-9 md:space-y-10 text-neutral-100 text-base sm:text-lg md:text-xl">
              {caseStudy.detailedAnalysis.paragraphs.map((paragraph, index) => (
                <p key={index} className="body-text">{paragraph}</p>
              ))}

              {caseStudy.detailedAnalysis.sections.map((section, sectionIndex) => (
                <div key={sectionIndex} className="pt-8 sm:pt-10 md:pt-12">
                  <h3 className="section-heading text-2xl sm:text-3xl md:text-4xl text-white pb-4 sm:pb-5 mb-4 sm:mb-5">
                    {section.title}
                  </h3>
                  {section.paragraphs.map((paragraph, pIndex) => (
                    <p key={pIndex} className={`body-text text-neutral-100 ${pIndex > 0 ? 'pt-4 sm:pt-5 md:pt-6' : ''}`}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              ))}

              {caseStudy.detailedAnalysis.quote && (
                <blockquote className="border-l-4 border-orange-500 pl-6 sm:pl-8 md:pl-10 py-4 sm:py-6 my-8 sm:my-10 md:my-12 text-white text-lg sm:text-xl md:text-2xl max-w-4xl">
                  "{caseStudy.detailedAnalysis.quote}"
                </blockquote>
              )}
            </article>
          </div>
        </section>

        {/* Development Workflow Section */}
        <section id="process" className="py-20 sm:py-24 md:py-32 px-4 sm:px-6 border-b border-white/5">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-12 sm:mb-16 md:mb-20 gap-4">
              <div>
                <h2 className="section-heading text-3xl sm:text-4xl md:text-5xl text-white mb-3 sm:mb-4">
                  Development Workflow
                </h2>
                <p className="body-text text-neutral-300 text-sm sm:text-base md:text-lg">A systematic approach to engineering excellence.</p>
              </div>
              <div className="hidden md:block px-5 py-2.5 rounded-full border border-white/10 text-xs font-mono text-neutral-300" style={{ letterSpacing: '0.05em' }}>
                Methodology: Agile / Kanban
              </div>
            </div>

            <div className="relative space-y-8 sm:space-y-10 md:space-y-12">
              <div className="absolute left-[23px] sm:left-[27px] top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent hidden sm:block"></div>

              {caseStudy.workflow.map((step, index) => {
                const colorClasses = getColorClasses(step.color);
                const isLast = index === caseStudy.workflow.length - 1;
                return (
                  <div key={index} className="relative flex gap-4 sm:gap-6 md:gap-10 group">
                    <div className="relative z-10 flex-shrink-0">
                      <div
                        className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-[#0A0A0A] border border-white/10 flex items-center justify-center transition-all shadow-[0_0_0_4px_rgba(0,0,0,1)] ${colorClasses.hover}`}
                      >
                        <span
                          className={`text-base sm:text-lg font-bold text-neutral-500 ${colorClasses.text.replace('text-', 'group-hover:text-')} transition-colors`}
                        >
                          {step.step}
                        </span>
                      </div>
                    </div>
                    <div className={`pt-1 sm:pt-2 ${isLast ? '' : 'pb-6 sm:pb-8 border-b border-white/5'} w-full`}>
                      <h3 className="card-title text-xl sm:text-2xl md:text-3xl text-white mb-3 sm:mb-4 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                        <span>{step.title}</span>
                        <span
                          className={`px-3 py-1 rounded-md text-[10px] sm:text-[11px] ${colorClasses.bg} ${colorClasses.text} ${colorClasses.border} font-mono w-fit`}
                          style={{ letterSpacing: '0.05em' }}
                        >
                          {step.duration}
                        </span>
                      </h3>
                      <p className="card-description text-sm sm:text-base md:text-lg text-neutral-200 mb-4 sm:mb-5 max-w-2xl">{step.description}</p>
                      <ul className="flex flex-wrap gap-3 sm:gap-4 text-[11px] sm:text-xs md:text-sm text-neutral-300 font-mono">
                        {step.deliverables.map((deliverable, dIndex) => (
                          <li key={dIndex} className="flex items-center gap-1">
                            <Check width={8} height={8} className="sm:w-2.5 sm:h-2.5" />
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
        <section id="tech" className="py-20 sm:py-24 md:py-32 px-4 sm:px-6 border-b border-white/5 bg-[#030303]">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-2xl mb-12 sm:mb-14 md:mb-16">
              <h2 className="section-heading text-3xl sm:text-4xl md:text-5xl text-white mb-4 sm:mb-5">Technology Stack</h2>
              <p className="body-text text-base sm:text-lg md:text-xl text-neutral-200">
                We selected a modern, type-safe stack designed for performance at the edge. Every tool
                served a specific purpose in reducing latency and improving developer experience.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
              {caseStudy.techStack.map((tech, index) => {
                const IconComponent = getIconComponent(tech.icon);
                return (
                  <div
                    key={index}
                    className="p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl bg-[#0A0A0A] border border-white/5 hover:border-white/10 transition-all group"
                  >
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded bg-neutral-900 border border-white/5 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                      <IconComponent className={tech.iconColor} />
                    </div>
                    <h4 className="card-title text-base sm:text-lg md:text-xl text-white mb-2" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif', fontWeight: 600, letterSpacing: '-0.01em' }}>{tech.name}</h4>
                    <p className="card-description text-xs sm:text-sm md:text-base text-neutral-300" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>{tech.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 border-b border-white/5 bg-[#020202]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-14 md:mb-16">
              <h2 className="section-heading text-3xl sm:text-4xl md:text-5xl text-white mb-4 sm:mb-5">Impact & Outcomes</h2>
              <p className="body-text text-base sm:text-lg md:text-xl text-neutral-200">Measurable performance improvements following the deployment.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-7 md:gap-8">
              {caseStudy.impact.map((item, index) => (
                <div
                  key={index}
                  className="p-8 sm:p-10 md:p-12 rounded-xl sm:rounded-2xl bg-[#0A0A0A] border border-white/5 flex flex-col items-center text-center hover:border-white/10 transition-colors group"
                >
                  <div className="impact-value text-5xl sm:text-6xl md:text-7xl text-white mb-3 sm:mb-4 group-hover:text-orange-500 transition-colors">
                    {item.value}
                  </div>
                  <div className="text-xs sm:text-sm md:text-base text-neutral-300 uppercase tracking-wider font-semibold" style={{ letterSpacing: '0.1em' }}>
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 sm:py-24 md:py-32 px-4 sm:px-6" id="contact">
          <div className="max-w-6xl mx-auto">
            <div className="relative bg-[#080808] border border-white/10 rounded-2xl sm:rounded-[2rem] p-8 sm:p-12 lg:p-24 overflow-hidden text-center">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[200px] sm:w-[600px] sm:h-[400px] bg-white/5 blur-[100px] rounded-full pointer-events-none"></div>
              <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>

              <div className="relative z-10 flex flex-col items-center">
                <div className="w-12 h-12 sm:w-14 sm:h-16 bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 flex items-center justify-center mb-6 sm:mb-8 shadow-2xl">
                  <Globe className="text-white w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
                </div>

                <h2 className="section-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-5 sm:mb-7 max-w-3xl">
                  Experience the Platform
                </h2>

                <p className="body-text text-base sm:text-lg md:text-xl text-neutral-200 mb-10 sm:mb-12 max-w-2xl mx-auto px-2">
                  Explore the live application to see our architectural decisions and design system in a
                  production environment.
                </p>

                {caseStudy.liveUrl && (
                  <a
                    href={caseStudy.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center justify-center gap-2 sm:gap-3 bg-white text-black px-8 sm:px-10 py-4 sm:py-5 rounded-full text-sm sm:text-base md:text-lg font-semibold transition-all hover:bg-neutral-200 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                    style={{ letterSpacing: '-0.01em' }}
                  >
                    Visit Live Website
                    <ExternalLink width={16} height={16} className="sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 sm:py-10 md:py-12 px-4 sm:px-6 border-t border-white/5 bg-[#020202]">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs sm:text-sm text-neutral-300 gap-4 sm:gap-6">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              <p className="body-text">Available for new projects</p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center">
              <p className="body-text text-xs sm:text-sm">© 2024 Sacesta Technologies. All rights reserved.</p>
              <div className="flex gap-4 sm:gap-6">
                <a href="#" className="hover:text-white transition-colors body-text" style={{ letterSpacing: '-0.01em' }}>
                  Twitter
                </a>
                <a href="#" className="hover:text-white transition-colors body-text" style={{ letterSpacing: '-0.01em' }}>
                  GitHub
                </a>
                <a href="#" className="hover:text-white transition-colors body-text" style={{ letterSpacing: '-0.01em' }}>
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

