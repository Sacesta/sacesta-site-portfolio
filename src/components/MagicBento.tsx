import React, { useRef, useEffect, useCallback, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export interface BentoCardProps {
  color?: string;
  title?: string;
  description?: string;
  label?: string;
  textAutoHide?: boolean;
  disableAnimations?: boolean;
}

export interface BentoProps {
  textAutoHide?: boolean;
  enableStars?: boolean;
  enableSpotlight?: boolean;
  enableBorderGlow?: boolean;
  disableAnimations?: boolean;
  spotlightRadius?: number;
  particleCount?: number;
  enableTilt?: boolean;
  glowColor?: string;
  clickEffect?: boolean;
  enableMagnetism?: boolean;
}

const DEFAULT_PARTICLE_COUNT = 12;
const DEFAULT_SPOTLIGHT_RADIUS = 300;
const DEFAULT_GLOW_COLOR = '132, 0, 255';
const MOBILE_BREAKPOINT = 768;

const cardData: BentoCardProps[] = [
  {
    color: '#060010',
    title: 'Analytics',
    description: 'Track user behavior and gain valuable insights',
    label: 'Insights'
  },
  {
    color: '#060010',
    title: 'Dashboard',
    description: 'Centralized data view with real-time updates',
    label: 'Overview'
  },
  {
    color: '#060010',
    title: 'Collaboration',
    description: 'Work together seamlessly across teams',
    label: 'Teamwork'
  },
  {
    color: '#060010',
    title: 'Automation',
    description: 'Streamline workflows with smart automation',
    label: 'Efficiency'
  },
  {
    color: '#060010',
    title: 'Integration',
    description: 'Connect your favorite tools and services',
    label: 'Connectivity'
  },
  {
    color: '#060010',
    title: 'Security',
    description: 'Enterprise-grade protection for your data',
    label: 'Protection'
  },
  {
    color: '#060010',
    title: 'AI Features',
    description: 'Smart automation and machine learning tools',
    label: 'Innovation'
  },
  {
    color: '#060010',
    title: 'Reports',
    description: 'Detailed analytics and performance reports',
    label: 'Analytics'
  },
  {
    color: '#060010',
    title: 'Cloud Sync',
    description: 'Seamless data synchronization across devices',
    label: 'Cloud'
  }
];

const createParticleElement = (x: number, y: number, color: string = DEFAULT_GLOW_COLOR): HTMLDivElement => {
  const el = document.createElement('div');
  el.className = 'particle';
  el.style.cssText = `
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: rgba(${color}, 1);
    box-shadow: 0 0 6px rgba(${color}, 0.6);
    pointer-events: none;
    z-index: 100;
    left: ${x}px;
    top: ${y}px;
  `;
  return el;
};

const calculateSpotlightValues = (radius: number) => ({
  proximity: radius * 0.5,
  fadeDistance: radius * 0.75
});

const updateCardGlowProperties = (card: HTMLElement, mouseX: number, mouseY: number, glow: number, radius: number) => {
  const rect = card.getBoundingClientRect();
  const relativeX = ((mouseX - rect.left) / rect.width) * 100;
  const relativeY = ((mouseY - rect.top) / rect.height) * 100;

  card.style.setProperty('--glow-x', `${relativeX}%`);
  card.style.setProperty('--glow-y', `${relativeY}%`);
  card.style.setProperty('--glow-intensity', glow.toString());
  card.style.setProperty('--glow-radius', `${radius}px`);
};

const ParticleCard: React.FC<{
  children: React.ReactNode;
  className?: string;
  disableAnimations?: boolean;
  style?: React.CSSProperties;
  particleCount?: number;
  glowColor?: string;
  enableTilt?: boolean;
  clickEffect?: boolean;
  enableMagnetism?: boolean;
  size?: 'small' | 'large';
}> = ({
  children,
  className = '',
  disableAnimations = false,
  style,
  particleCount = DEFAULT_PARTICLE_COUNT,
  glowColor = DEFAULT_GLOW_COLOR,
  enableTilt = true,
  clickEffect = false,
  enableMagnetism = false,
  size = 'small'
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement[]>([]);
  const timeoutsRef = useRef<NodeJS.Timeout[]>([]);
  const isHoveredRef = useRef(false);
  const memoizedParticles = useRef<HTMLDivElement[]>([]);
  const particlesInitialized = useRef(false);
  const magnetismAnimationRef = useRef<gsap.core.Tween | null>(null);

  const initializeParticles = useCallback(() => {
    if (particlesInitialized.current || !cardRef.current) return;

    const { width, height } = cardRef.current.getBoundingClientRect();
    memoizedParticles.current = Array.from({ length: particleCount }, () =>
      createParticleElement(Math.random() * width, Math.random() * height, glowColor)
    );
    particlesInitialized.current = true;
  }, [particleCount, glowColor]);

  const clearAllParticles = useCallback(() => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
    magnetismAnimationRef.current?.kill();

    particlesRef.current.forEach(particle => {
      gsap.to(particle, {
        scale: 0,
        opacity: 0,
        duration: 0.3,
        ease: 'back.in(1.7)',
        onComplete: () => {
          particle.parentNode?.removeChild(particle);
        }
      });
    });
    particlesRef.current = [];
  }, []);

  const animateParticles = useCallback(() => {
    if (!cardRef.current || !isHoveredRef.current) return;

    if (!particlesInitialized.current) {
      initializeParticles();
    }

    memoizedParticles.current.forEach((particle, index) => {
      const timeoutId = setTimeout(() => {
        if (!isHoveredRef.current || !cardRef.current) return;

        const clone = particle.cloneNode(true) as HTMLDivElement;
        cardRef.current.appendChild(clone);
        particlesRef.current.push(clone);

        gsap.fromTo(clone, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.3, ease: 'back.out(1.7)' });

        gsap.to(clone, {
          x: (Math.random() - 0.5) * 100,
          y: (Math.random() - 0.5) * 100,
          rotation: Math.random() * 360,
          duration: 2 + Math.random() * 2,
          ease: 'none',
          repeat: -1,
          yoyo: true
        });

        gsap.to(clone, {
          opacity: 0.3,
          duration: 1.5,
          ease: 'power2.inOut',
          repeat: -1,
          yoyo: true
        });
      }, index * 100);

      timeoutsRef.current.push(timeoutId);
    });
  }, [initializeParticles]);

  useEffect(() => {
    if (disableAnimations || !cardRef.current) return;

    const element = cardRef.current;

    const handleMouseEnter = () => {
      isHoveredRef.current = true;
      animateParticles();

      if (enableTilt) {
        gsap.to(element, {
          rotateX: 5,
          rotateY: 5,
          duration: 0.3,
          ease: 'power2.out',
          transformPerspective: 1000
        });
      }
    };

    const handleMouseLeave = () => {
      isHoveredRef.current = false;
      clearAllParticles();

      if (enableTilt) {
        gsap.to(element, {
          rotateX: 0,
          rotateY: 0,
          duration: 0.3,
          ease: 'power2.out'
        });
      }

      if (enableMagnetism) {
        gsap.to(element, {
          x: 0,
          y: 0,
          duration: 0.3,
          ease: 'power2.out'
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!enableTilt && !enableMagnetism) return;

      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      if (enableTilt) {
        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;

        gsap.to(element, {
          rotateX,
          rotateY,
          duration: 0.1,
          ease: 'power2.out',
          transformPerspective: 1000
        });
      }

      if (enableMagnetism) {
        const magnetX = (x - centerX) * 0.05;
        const magnetY = (y - centerY) * 0.05;

        magnetismAnimationRef.current = gsap.to(element, {
          x: magnetX,
          y: magnetY,
          duration: 0.3,
          ease: 'power2.out'
        });
      }
    };

    const handleClick = (e: MouseEvent) => {
      if (!clickEffect) return;

      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const maxDistance = Math.max(
        Math.hypot(x, y),
        Math.hypot(x - rect.width, y),
        Math.hypot(x, y - rect.height),
        Math.hypot(x - rect.width, y - rect.height)
      );

      const ripple = document.createElement('div');
      ripple.style.cssText = `
        position: absolute;
        width: ${maxDistance * 2}px;
        height: ${maxDistance * 2}px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(${glowColor}, 0.4) 0%, rgba(${glowColor}, 0.2) 30%, transparent 70%);
        left: ${x - maxDistance}px;
        top: ${y - maxDistance}px;
        pointer-events: none;
        z-index: 1000;
      `;

      element.appendChild(ripple);

      gsap.fromTo(
        ripple,
        {
          scale: 0,
          opacity: 1
        },
        {
          scale: 1,
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out',
          onComplete: () => ripple.remove()
        }
      );
    };

    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);
    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('click', handleClick);

    return () => {
      isHoveredRef.current = false;
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('click', handleClick);
      clearAllParticles();
    };
  }, [animateParticles, clearAllParticles, disableAnimations, enableTilt, enableMagnetism, clickEffect, glowColor]);

  const sizeClasses = size === 'large'
    ? 'min-h-[465px] h-[360px] aspect-[2/1]'
    : 'min-h-[450px] h-[360px] aspect-square';

  return (
    <div
      ref={cardRef}
      className={`
        ${className} 
        ${sizeClasses}
        flex flex-col justify-between relative p-5 md:p-10 rounded-3xl border border-[#392e4e] bg-[#060010]
        font-light overflow-hidden transition-all duration-300 ease-in-out cursor-pointer
        hover:-translate-y-1.5 hover:shadow-2xl
        particle-container
      `}
      style={style}
    >
      {children}
    </div>
  );
};

const GlobalSpotlight: React.FC<{
  gridRef: React.RefObject<HTMLDivElement | null>;
  disableAnimations?: boolean;
  enabled?: boolean;
  spotlightRadius?: number;
  glowColor?: string;
}> = ({
  gridRef,
  disableAnimations = false,
  enabled = true,
  spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS,
  glowColor = DEFAULT_GLOW_COLOR
}) => {
  const spotlightRef = useRef<HTMLDivElement | null>(null);
  const isInsideSection = useRef(false);

  useEffect(() => {
    if (disableAnimations || !gridRef?.current || !enabled) return;

    const spotlight = document.createElement('div');
    spotlight.className = 'global-spotlight';
    spotlight.style.cssText = `
      position: fixed;
      width: 800px;
      height: 800px;
      border-radius: 50%;
      pointer-events: none;
      background: radial-gradient(circle,
        rgba(${glowColor}, 0.15) 0%,
        rgba(${glowColor}, 0.08) 15%,
        rgba(${glowColor}, 0.04) 25%,
        rgba(${glowColor}, 0.02) 40%,
        rgba(${glowColor}, 0.01) 65%,
        transparent 70%
      );
      z-index: 200;
      opacity: 0;
      transform: translate(-50%, -50%);
      mix-blend-mode: screen;
    `;
    document.body.appendChild(spotlight);
    spotlightRef.current = spotlight;

    const handleMouseMove = (e: MouseEvent) => {
      if (!spotlightRef.current || !gridRef.current) return;

      const section = gridRef.current.closest('.bento-section');
      const rect = section?.getBoundingClientRect();
      const mouseInside =
        rect && e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom;

      isInsideSection.current = mouseInside || false;
      const cards = gridRef.current.querySelectorAll('.magic-bento-card');

      if (!mouseInside) {
        gsap.to(spotlightRef.current, {
          opacity: 0,
          duration: 0.3,
          ease: 'power2.out'
        });
        cards.forEach(card => {
          (card as HTMLElement).style.setProperty('--glow-intensity', '0');
        });
        return;
      }

      const { proximity, fadeDistance } = calculateSpotlightValues(spotlightRadius);
      let minDistance = Infinity;

      cards.forEach(card => {
        const cardElement = card as HTMLElement;
        const cardRect = cardElement.getBoundingClientRect();
        const centerX = cardRect.left + cardRect.width / 2;
        const centerY = cardRect.top + cardRect.height / 2;
        const distance =
          Math.hypot(e.clientX - centerX, e.clientY - centerY) - Math.max(cardRect.width, cardRect.height) / 2;
        const effectiveDistance = Math.max(0, distance);

        minDistance = Math.min(minDistance, effectiveDistance);

        let glowIntensity = 0;
        if (effectiveDistance <= proximity) {
          glowIntensity = 1;
        } else if (effectiveDistance <= fadeDistance) {
          glowIntensity = (fadeDistance - effectiveDistance) / (fadeDistance - proximity);
        }

        updateCardGlowProperties(cardElement, e.clientX, e.clientY, glowIntensity, spotlightRadius);
      });

      gsap.to(spotlightRef.current, {
        left: e.clientX,
        top: e.clientY,
        duration: 0.1,
        ease: 'power2.out'
      });

      const targetOpacity =
        minDistance <= proximity
          ? 0.8
          : minDistance <= fadeDistance
            ? ((fadeDistance - minDistance) / (fadeDistance - proximity)) * 0.8
            : 0;

      gsap.to(spotlightRef.current, {
        opacity: targetOpacity,
        duration: targetOpacity > 0 ? 0.2 : 0.5,
        ease: 'power2.out'
      });
    };

    const handleMouseLeave = () => {
      isInsideSection.current = false;
      gridRef.current?.querySelectorAll('.magic-bento-card').forEach(card => {
        (card as HTMLElement).style.setProperty('--glow-intensity', '0');
      });
      if (spotlightRef.current) {
        gsap.to(spotlightRef.current, {
          opacity: 0,
          duration: 0.3,
          ease: 'power2.out'
        });
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      spotlightRef.current?.parentNode?.removeChild(spotlightRef.current);
    };
  }, [gridRef, disableAnimations, enabled, spotlightRadius, glowColor]);

  return null;
};


const useMobileDetection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile;
};

const MagicBento: React.FC<BentoProps> = ({
  textAutoHide = true,
  enableStars = true,
  enableSpotlight = true,
  enableBorderGlow = true,
  disableAnimations = false,
  spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS,
  particleCount = DEFAULT_PARTICLE_COUNT,
  enableTilt = false,
  glowColor = DEFAULT_GLOW_COLOR,
  clickEffect = true,
  enableMagnetism = true
}) => {
  const gridRef = useRef<HTMLDivElement>(null);

  const sectionRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const mountedRef = useRef(false);
  const isMobile = useMobileDetection();
  const shouldDisableAnimations = disableAnimations || isMobile;

  useEffect(() => {
    mountedRef.current = true;
  }, []);

  // Initialize GSAP horizontal scroll
  useEffect(() => {
    if (!mountedRef.current || !sectionRef.current || !wrapperRef.current) return;

    const section = sectionRef.current;
    const wrapper = wrapperRef.current;

    const totalWidth = wrapper.scrollWidth - window.innerWidth;

    // Kill any existing ScrollTrigger instances
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    const ctx = gsap.context(() => {
      gsap.to(wrapper, {
        x: -totalWidth,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: `+=${totalWidth + 1000}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  // Group cards into sections of 3 (2 small + 1 large)
  const cardSections = [];
  for (let i = 0; i < cardData.length; i += 3) {
    const section = cardData.slice(i, i + 3);
    cardSections.push(section);
  }

  const scrollbarStyles = `
    /* Border glow effect */
    .border-glow::after {
      content: '';
      position: absolute;
      inset: 0;
      padding: 2px;
      background: radial-gradient(
        var(--glow-radius) circle at var(--glow-x) var(--glow-y),
        rgba(132, 0, 255, calc(var(--glow-intensity) * 0.8)) 0%,
        rgba(132, 0, 255, calc(var(--glow-intensity) * 0.4)) 30%,
        transparent 70%
      );
      border-radius: inherit;
      mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
      mask-composite: subtract;
      -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor;
      pointer-events: none;
      transition: opacity 0.3s ease;
      z-index: 1;
    }

    .border-glow:hover::after {
      opacity: 1;
    }

    .border-glow:hover {
      box-shadow: 
        0 12px 35px rgba(46, 24, 78, 0.5),
        0 0 50px rgba(132, 0, 255, 0.2);
    }

    /* Text auto-hide */
    .text-autohide .magic-bento-card__title {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .text-autohide .magic-bento-card__description {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    /* Global spotlight */
    .global-spotlight {
      mix-blend-mode: screen;
      will-change: transform, opacity;
      z-index: 200 !important;
      pointer-events: none;
    }

    /* Fade in animation */
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .animate-fade-in-up {
      animation: fadeInUp 0.6s ease-out;
    }

    /* Horizontal scroll section styles */
    .horizontal-scroll-section {
      width: 100vw;
      height: 100vh;
      overflow: hidden;
      background: transparent;
      display: flex;
      align-items: center;
    }

    .horizontal-scroll-wrapper {
      display: flex;
      gap: 8rem;
      padding: 0 30vw;
      height: 100%;
      align-items: center;
      justify-content: flex-start;
    }

    .bento-section-container {
      flex-shrink: 0;
      width: 80vw;
      max-width: 1200px;
    }

    @media (max-width: 768px) {
      .horizontal-scroll-wrapper {
        gap: 2rem;
        padding: 0 5vw;
      }

      .bento-section-container {
        width: 90vw;
      }

      .magic-bento-card {
        min-height: 200px !important;
        height: 180px !important;
      }
    }
  `;

  return (
    <>
      <style>{scrollbarStyles}</style>
      
      {enableSpotlight && (
        <GlobalSpotlight
          gridRef={gridRef}
          disableAnimations={shouldDisableAnimations}
          enabled={enableSpotlight}
          spotlightRadius={spotlightRadius}
          glowColor={glowColor}
        />
      )}

      <section
        ref={sectionRef}
        className="horizontal-scroll-section"
      >
        <div
          ref={wrapperRef}
          className="horizontal-scroll-wrapper"
        >
          {cardSections.map((section, sectionIndex) => (
            <div
              key={sectionIndex}
              className="bento-section-container flex flex-col gap-8 h-full justify-center animate-fade-in-up"
              style={{ animationDelay: `${sectionIndex * 0.1 + 0.1}s` }}
            >
              {isMobile ? (
                /* Mobile layout: 2 cards in first row with space, 1 large card below */
                <>
                  {/* First row: 2 small cards */}
                  <div className="flex w-full gap-6 mb-6">
                    {section.slice(0, 2).map((card, index) => (
                      <div key={index} className="flex-1 min-w-0">
                        {enableStars ? (
                          <ParticleCard
                            className={`
                              magic-bento-card animate-fade-in-up
                              ${textAutoHide ? 'text-autohide' : ''}
                              ${enableBorderGlow ? 'border-glow' : ''}
                            `}
                            style={{
                              backgroundColor: card.color,
                              '--glow-color': glowColor,
                              animationDelay: `${sectionIndex * 0.1 + 0.2 + index * 0.1}s`
                            } as React.CSSProperties}
                            disableAnimations={shouldDisableAnimations}
                            particleCount={particleCount}
                            glowColor={glowColor}
                            enableTilt={enableTilt}
                            clickEffect={clickEffect}
                            enableMagnetism={enableMagnetism}
                            size="small"
                          >
                            <div className="flex justify-between items-start relative text-white z-10">
                              <div className="text-sm opacity-80 font-medium tracking-wider uppercase">
                                {card.label}
                              </div>
                            </div>
                            <div className="flex flex-col flex-grow justify-end relative text-white z-10">
                              <h2 className="font-semibold text-2xl mb-3 leading-tight magic-bento-card__title">
                                {card.title}
                              </h2>
                              <p className="text-base leading-relaxed opacity-80 m-0 magic-bento-card__description">
                                {card.description}
                              </p>
                            </div>
                          </ParticleCard>
                        ) : (
                          <div
                            className={`
                              magic-bento-card animate-fade-in-up
                              flex flex-col justify-between relative p-5 md:p-10 rounded-3xl border border-[#392e4e]
                              bg-[#060010] font-light overflow-hidden transition-all duration-300 ease-in-out
                              cursor-pointer hover:-translate-y-1.5 hover:shadow-2xl
                              min-h-[405px] h-[330px] aspect-square
                              ${textAutoHide ? 'text-autohide' : ''}
                              ${enableBorderGlow ? 'border-glow' : ''}
                            `}
                            style={{
                              backgroundColor: card.color,
                              '--glow-color': glowColor,
                              animationDelay: `${sectionIndex * 0.1 + 0.2 + index * 0.1}s`
                            } as React.CSSProperties}
                          >
                            <div className="flex justify-between items-start relative text-white z-10">
                              <div className="text-sm opacity-80 font-medium tracking-wider uppercase">
                                {card.label}
                              </div>
                            </div>
                            <div className="flex flex-col flex-grow justify-end relative text-white z-10">
                              <h2 className="font-semibold text-2xl mb-3 leading-tight magic-bento-card__title">
                                {card.title}
                              </h2>
                              <p className="text-base leading-relaxed opacity-80 m-0 magic-bento-card__description">
                                {card.description}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  {/* Second row: 1 large card */}
                  <div className="flex w-full">
                    {section[2] && (
                      <div className="w-full">
                        {enableStars ? (
                          <ParticleCard
                            className={`
                              magic-bento-card animate-fade-in-up
                              ${textAutoHide ? 'text-autohide' : ''}
                              ${enableBorderGlow ? 'border-glow' : ''}
                            `}
                            style={{
                              backgroundColor: section[2].color,
                              '--glow-color': glowColor,
                              animationDelay: `${sectionIndex * 0.1 + 0.4}s`
                            } as React.CSSProperties}
                            disableAnimations={shouldDisableAnimations}
                            particleCount={particleCount}
                            glowColor={glowColor}
                            enableTilt={enableTilt}
                            clickEffect={clickEffect}
                            enableMagnetism={enableMagnetism}
                            size="large"
                          >
                            <div className="flex justify-between items-start relative text-white z-10">
                              <div className="text-sm opacity-80 font-medium tracking-wider uppercase">
                                {section[2].label}
                              </div>
                            </div>
                            <div className="flex flex-col flex-grow justify-end relative text-white z-10">
                              <h2 className="font-semibold text-2xl mb-3 leading-tight magic-bento-card__title">
                                {section[2].title}
                              </h2>
                              <p className="text-base leading-relaxed opacity-80 m-0 magic-bento-card__description">
                                {section[2].description}
                              </p>
                            </div>
                          </ParticleCard>
                        ) : (
                          <div
                            className={`
                              magic-bento-card animate-fade-in-up
                              flex flex-col justify-between relative p-5 md:p-10 rounded-3xl border border-[#392e4e]
                              bg-[#060010] font-light overflow-hidden transition-all duration-300 ease-in-out
                              cursor-pointer hover:-translate-y-1.5 hover:shadow-2xl
                              min-h-[465px] h-[330px] aspect-[2/1]
                              ${textAutoHide ? 'text-autohide' : ''}
                              ${enableBorderGlow ? 'border-glow' : ''}
                            `}
                            style={{
                              backgroundColor: section[2].color,
                              '--glow-color': glowColor,
                              animationDelay: `${sectionIndex * 0.1 + 0.4}s`
                            } as React.CSSProperties}
                          >
                            <div className="flex justify-between items-start relative text-white z-10">
                              <div className="text-sm opacity-80 font-medium tracking-wider uppercase">
                                {section[2].label}
                              </div>
                            </div>
                            <div className="flex flex-col flex-grow justify-end relative text-white z-10">
                              <h2 className="font-semibold text-2xl mb-3 leading-tight magic-bento-card__title">
                                {section[2].title}
                              </h2>
                              <p className="text-base leading-relaxed opacity-80 m-0 magic-bento-card__description">
                                {section[2].description}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </>
              ) : (
                /* Desktop layout: 2 small cards + 1 large card */
                <>
                  {/* First row: 2 small cards */}
                  <div className="flex w-[40vw] gap-5 lg:gap-16">
                    {section.slice(0, 2).map((card, index) => (
                      <div key={index} className="flex-1 min-w-0">
                        {enableStars ? (
                          <ParticleCard
                            className={`
                              magic-bento-card animate-fade-in-up
                              ${textAutoHide ? 'text-autohide' : ''}
                              ${enableBorderGlow ? 'border-glow' : ''}
                            `}
                            style={{
                              backgroundColor: card.color,
                              '--glow-color': glowColor,
                              animationDelay: `${sectionIndex * 0.1 + 0.2 + index * 0.1}s`
                            } as React.CSSProperties}
                            disableAnimations={shouldDisableAnimations}
                            particleCount={particleCount}
                            glowColor={glowColor}
                            enableTilt={enableTilt}
                            clickEffect={clickEffect}
                            enableMagnetism={enableMagnetism}
                            size="small"
                          >
                            <div className="flex justify-between items-start relative text-white z-10">
                              <div className="text-sm opacity-80 font-medium tracking-wider uppercase">
                                {card.label}
                              </div>
                            </div>
                            <div className="flex flex-col flex-grow justify-end relative text-white z-10">
                              <h2 className="font-semibold text-2xl mb-3 leading-tight magic-bento-card__title">
                                {card.title}
                              </h2>
                              <p className="text-base leading-relaxed opacity-80 m-0 magic-bento-card__description">
                                {card.description}
                              </p>
                            </div>
                          </ParticleCard>
                        ) : (
                          <div
                            className={`
                              magic-bento-card animate-fade-in-up
                              flex flex-col justify-between relative p-5 md:p-10 rounded-3xl border border-[#392e4e]
                              bg-[#060010] font-light overflow-hidden transition-all duration-300 ease-in-out
                              cursor-pointer hover:-translate-y-1.5 hover:shadow-2xl
                              min-h-[405px] h-[330px] aspect-square
                              ${textAutoHide ? 'text-autohide' : ''}
                              ${enableBorderGlow ? 'border-glow' : ''}
                            `}
                            style={{
                              backgroundColor: card.color,
                              '--glow-color': glowColor,
                              animationDelay: `${sectionIndex * 0.1 + 0.2 + index * 0.1}s`
                            } as React.CSSProperties}
                          >
                            <div className="flex justify-between items-start relative text-white z-10">
                              <div className="text-sm opacity-80 font-medium tracking-wider uppercase">
                                {card.label}
                              </div>
                            </div>
                            <div className="flex flex-col flex-grow justify-end relative text-white z-10">
                              <h2 className="font-semibold text-2xl mb-3 leading-tight magic-bento-card__title">
                                {card.title}
                              </h2>
                              <p className="text-base leading-relaxed opacity-80 m-0 magic-bento-card__description">
                                {card.description}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Second row: 1 large card */}
                  <div className="flex w-full">
                    {section[2] && (
                      <div className="w-full">
                        {enableStars ? (
                          <ParticleCard
                            className={`
                              magic-bento-card animate-fade-in-up
                              ${textAutoHide ? 'text-autohide' : ''}
                              ${enableBorderGlow ? 'border-glow' : ''}
                            `}
                            style={{
                              backgroundColor: section[2].color,
                              '--glow-color': glowColor,
                              animationDelay: `${sectionIndex * 0.1 + 0.4}s`
                            } as React.CSSProperties}
                            disableAnimations={shouldDisableAnimations}
                            particleCount={particleCount}
                            glowColor={glowColor}
                            enableTilt={enableTilt}
                            clickEffect={clickEffect}
                            enableMagnetism={enableMagnetism}
                            size="large"
                          >
                            <div className="flex flex-col items-start relative text-white z-10">
                               <h2 className="font-semibold text-2xl mb-3 leading-tight magic-bento-card__title">
                                {section[2].title}
                              </h2>
                              <p className="text-base leading-relaxed opacity-80 m-0 magic-bento-card__description">
                                {section[2].description}
                              </p>
                            </div>
                            <div className="flex flex-col flex-grow justify-end relative text-white z-10">

                              <p className="text-base leading-relaxed opacity-80 m-0 magic-bento-card__description">
                                {section[2].label}
                              </p>
                            </div>
                          </ParticleCard>
                        ) : (
                          <div
                            className={`
                              magic-bento-card animate-fade-in-up
                              flex flex-col justify-between relative p-5 md:p-10 rounded-3xl border border-[#392e4e]
                              bg-[#060010] font-light overflow-hidden transition-all duration-300 ease-in-out
                              cursor-pointer hover:-translate-y-1.5 hover:shadow-2xl
                              min-h-[465px] h-[330px] aspect-[2/1]
                              ${textAutoHide ? 'text-autohide' : ''}
                              ${enableBorderGlow ? 'border-glow' : ''}
                            `}
                            style={{
                              backgroundColor: section[2].color,
                              '--glow-color': glowColor,
                              animationDelay: `${sectionIndex * 0.1 + 0.4}s`
                            } as React.CSSProperties}
                          >
                            <div className="flex justify-between items-start relative text-white z-10">
                              <div className="text-sm opacity-80 font-medium tracking-wider uppercase">
                                {section[2].label}
                              </div>
                            </div>
                            <div className="flex flex-col flex-grow justify-end relative text-white z-10">
                              <h2 className="font-semibold text-2xl mb-3 leading-tight magic-bento-card__title">
                                {section[2].title}
                              </h2>
                              <p className="text-base leading-relaxed opacity-80 m-0 magic-bento-card__description">
                                {section[2].description}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default MagicBento;