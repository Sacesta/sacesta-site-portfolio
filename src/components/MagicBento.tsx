import { useRef, useEffect, useState, useCallback } from 'react';
import { gsap } from 'gsap';
import { useNavigate } from 'react-router-dom';
import { caseStudiesData } from '../data/caseStudies';
import esimPlatformBg from '../assets/esim-platform-bg.png';
import zenaiBg from '../assets/zenai.png';
import mayuriBg from '../assets/mayuri.png';
import evokeBg from '../assets/evoke.png';
import shividBg from '../assets/shivid-bg.png';

import crmBg from '../assets/crmbg.png';
import seacatBg from '../assets/seacatbg.png';
import visit from '../assets/visitahmdavadbg.png';
import picbg from '../assets/picbg.png';
import comehomebg from '../assets/comehombg.png';
import xray from '../assets/xray.png';
import bharatupline from '../assets/bharatupline.png';

const DEFAULT_PARTICLE_COUNT = 12;
const DEFAULT_SPOTLIGHT_RADIUS = 300;
const DEFAULT_GLOW_COLOR = '255, 255, 255';
const MOBILE_BREAKPOINT = 768;

const cardData = [
  {
    id: 'collaboration',
    color: '#060010',
    title: 'Mayuri Sharma Admin Platform',
    description:
      "Transforming a creator's knowledge into a scalable, structured, and beautifully organized education platform",
    label: 'CMS Platform',
    backgroundImage: mayuriBg,
  },

  {
    id: 'esim-platform',
    color: '#060010',
    title: 'eSIM Platform — Global Connectivity',
    description: 'Reimagining how people connect — anywhere, anytime',
    label: 'Telecom Platform',
    backgroundImage: esimPlatformBg,
  },

  {
    id: 'security',
    color: '#060010',
    title: 'ShivID – Identity Reimagined',
    description:
      'A next-generation identity layer powering authentication, authorization, and user lifecycle management with enterprise-grade accuracy',
    label: 'Identity Platform',
    backgroundImage: shividBg,
  },
  {
    id: 'evoke-dholavira',
    color: '#060010',
    title: 'Evoke Dholavira — Digital Window',
    description: 'Where archaeology meets digital artistry',
    label: 'Heritage Platform',
    backgroundImage: evokeBg,
  },

  {
    id: 'zenn-ai',
    color: '#060010',
    title: 'Zenn AI — Voice & Wellness Assistant',
    description:
      'AI-powered voice and text chat for wellness applications with multi-platform deployment',
    label: 'AI Wellness Platform',
    backgroundImage: zenaiBg,
  },
  {
    id: 'ai-diagnostics',
    color: '#060010',
    title: 'AI Diagnostics Scanner — Interpreting Health with Intelligence',
    description: 'Where medical data becomes clarity, and clarity becomes faster diagnosis',
    label: 'Healthcare Platform',
    backgroundImage: xray,
  },
    {
    id: 'analytics',
    color: '#060010',
    title: 'Visit Ahmedabad',
    description: 'Where heritage storytelling meets modern digital engineering',
    label: 'Tourism Platform',
    backgroundImage: visit,
  },
    {
    id: 'dashboard',
    color: '#060010',
    title: 'PIC Event Management Platform',
    description:
      'Engineering a seamless event backbone for thousands of athletes, coordinators, and administrators',
    label: 'Event Platform',
    backgroundImage: picbg,
  },
  {
    id: 'seacatboats',
    color: '#060010',
    title: 'SeaCatBoats — Power, Precision & Performance On Water',
    description: 'Where craftsmanship meets cutting-edge digital experience',
    label: 'Marine Platform',
    backgroundImage: seacatBg,
  },



  {
    id: 'hustlerguys-crm',
    color: '#060010',
    title: 'HustlerGuys CRM — Your Entire Business, One Smart System',
    description: 'Where chaos becomes clarity, and workflows become growth',
    label: 'CRM & ERP Platform',
    backgroundImage: crmBg,
  },
 

  {
    id: 'automation',
    color: '#060010',
    title: 'Bharat Upline — India\'s Utility Service Engine',
    description:
      'A unified multi-service platform enabling recharge, bill payments, wallet settlements, and digital distribution for consumers and agents across India',
    label: 'Utility Platform',
    backgroundImage: bharatupline,
  },
  {
    id: 'integration',
    color: '#060010',
    title: 'ComeHome AI — Intelligent Property Discovery',
    description:
      'Turning scattered property listings into intelligent, human-centered discovery paths',
    label: 'Real Estate Platform',
    backgroundImage: comehomebg,
  },
 
];

const createParticleElement = (x: number, y: number, color = DEFAULT_GLOW_COLOR) => {
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
  fadeDistance: radius * 0.75,
});

const updateCardGlowProperties = (
  card: HTMLElement,
  mouseX: number,
  mouseY: number,
  glow: number,
  radius: number,
) => {
  const rect = card.getBoundingClientRect();
  const relativeX = ((mouseX - rect.left) / rect.width) * 100;
  const relativeY = ((mouseY - rect.top) / rect.height) * 100;

  card.style.setProperty('--glow-x', `${relativeX}%`);
  card.style.setProperty('--glow-y', `${relativeY}%`);
  card.style.setProperty('--glow-intensity', glow.toString());
  card.style.setProperty('--glow-radius', `${radius}px`);
};

interface ParticleCardProps {
  children: React.ReactNode;
  className?: string;
  disableAnimations?: boolean;
  style?: React.CSSProperties;
  particleCount?: number;
  glowColor?: string;
  enableTilt?: boolean;
  clickEffect?: boolean;
  enableMagnetism?: boolean;
  cardId?: string;
  onCardClick?: (cardId: string) => void;
  backgroundImage?: string;
}

const ParticleCard = ({
  children,
  className = '',
  disableAnimations = false,
  style,
  particleCount = DEFAULT_PARTICLE_COUNT,
  glowColor = DEFAULT_GLOW_COLOR,
  enableTilt = true,
  clickEffect = false,
  enableMagnetism = false,
  cardId,
  onCardClick,
  backgroundImage,
}: ParticleCardProps) => {
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
      createParticleElement(Math.random() * width, Math.random() * height, glowColor),
    );
    particlesInitialized.current = true;
  }, [particleCount, glowColor]);

  const clearAllParticles = useCallback(() => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
    magnetismAnimationRef.current?.kill();

    particlesRef.current.forEach((particle) => {
      gsap.to(particle, {
        scale: 0,
        opacity: 0,
        duration: 0.3,
        ease: 'back.in(1.7)',
        onComplete: () => {
          particle.parentNode?.removeChild(particle);
        },
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

        gsap.fromTo(
          clone,
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.3, ease: 'back.out(1.7)' },
        );

        gsap.to(clone, {
          x: (Math.random() - 0.5) * 100,
          y: (Math.random() - 0.5) * 100,
          rotation: Math.random() * 360,
          duration: 2 + Math.random() * 2,
          ease: 'none',
          repeat: -1,
          yoyo: true,
        });

        gsap.to(clone, {
          opacity: 0.3,
          duration: 1.5,
          ease: 'power2.inOut',
          repeat: -1,
          yoyo: true,
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
          transformPerspective: 1000,
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
          ease: 'power2.out',
        });
      }

      if (enableMagnetism) {
        gsap.to(element, {
          x: 0,
          y: 0,
          duration: 0.3,
          ease: 'power2.out',
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
          transformPerspective: 1000,
        });
      }

      if (enableMagnetism) {
        const magnetX = (x - centerX) * 0.05;
        const magnetY = (y - centerY) * 0.05;

        magnetismAnimationRef.current = gsap.to(element, {
          x: magnetX,
          y: magnetY,
          duration: 0.3,
          ease: 'power2.out',
        });
      }
    };

    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);
    element.addEventListener('mousemove', handleMouseMove);

    return () => {
      isHoveredRef.current = false;
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
      element.removeEventListener('mousemove', handleMouseMove);
      clearAllParticles();
    };
  }, [
    animateParticles,
    clearAllParticles,
    disableAnimations,
    enableTilt,
    enableMagnetism,
    clickEffect,
    glowColor,
    cardId,
    onCardClick,
  ]);

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (clickEffect && !disableAnimations) {
      const element = e.currentTarget;
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const maxDistance = Math.max(
        Math.hypot(x, y),
        Math.hypot(x - rect.width, y),
        Math.hypot(x, y - rect.height),
        Math.hypot(x - rect.width, y - rect.height),
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
          opacity: 1,
        },
        {
          scale: 1,
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out',
          onComplete: () => ripple.remove(),
        },
      );
    }

    // Navigate to case study page
    if (cardId && onCardClick) {
      onCardClick(cardId);
    }
  };

  return (
    <div
      ref={cardRef}
      className={`${className} relative overflow-hidden ${cardId ? 'cursor-pointer' : ''}`}
      style={{ ...style, position: 'relative', overflow: 'hidden' }}
      onClick={handleContainerClick}
    >
      {backgroundImage && (
        <div
          className='absolute inset-0 z-0 bg-cover bg-center transition-transform duration-500 hover:scale-110'
          style={{
            backgroundImage: `url(${backgroundImage})`,
            // opacity: 0.6,
          }}
        />
      )}
      <div className='relative z-10 w-full h-full flex flex-col justify-between'>{children}</div>
    </div>
  );
};

const GlobalSpotlight = ({
  gridRef,
  disableAnimations = false,
  enabled = true,
  spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS,
  glowColor = DEFAULT_GLOW_COLOR,
  isMobile = false,
}: {
  gridRef: React.RefObject<HTMLDivElement | null>;
  disableAnimations?: boolean;
  enabled?: boolean;
  spotlightRadius?: number;
  glowColor?: string;
  isMobile?: boolean;
}) => {
  const spotlightRef = useRef<HTMLDivElement | null>(null);
  const isInsideSection = useRef(false);

  useEffect(() => {
    if (disableAnimations || !gridRef?.current || !enabled) return;

    const spotlightSize = isMobile ? 400 : 800;
    const spotlight = document.createElement('div');
    spotlight.className = 'global-spotlight';
    spotlight.style.cssText = `
      position: fixed;
      width: ${spotlightSize}px;
      height: ${spotlightSize}px;
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
    spotlightRef.current = spotlight as HTMLDivElement;

    const handleMouseMove = (e: MouseEvent) => {
      if (!spotlightRef.current || !gridRef.current) return;

      const section = gridRef.current.closest('.bento-section');
      const rect = section?.getBoundingClientRect();
      const mouseInside =
        rect &&
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;

      isInsideSection.current = mouseInside || false;
      const cards = gridRef.current.querySelectorAll('.card');

      if (!mouseInside) {
        gsap.to(spotlightRef.current, {
          opacity: 0,
          duration: 0.3,
          ease: 'power2.out',
        });
        cards.forEach((card: Element) => {
          (card as HTMLElement).style.setProperty('--glow-intensity', '0');
        });
        return;
      }

      const { proximity, fadeDistance } = calculateSpotlightValues(spotlightRadius);
      let minDistance = Infinity;

      cards.forEach((card: Element) => {
        const cardElement = card as HTMLElement;
        const cardRect = cardElement.getBoundingClientRect();
        const centerX = cardRect.left + cardRect.width / 2;
        const centerY = cardRect.top + cardRect.height / 2;
        const distance =
          Math.hypot(e.clientX - centerX, e.clientY - centerY) -
          Math.max(cardRect.width, cardRect.height) / 2;
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
        ease: 'power2.out',
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
        ease: 'power2.out',
      });
    };

    const handleMouseLeave = () => {
      isInsideSection.current = false;
      gridRef.current?.querySelectorAll('.card').forEach((card: Element) => {
        (card as HTMLElement).style.setProperty('--glow-intensity', '0');
      });
      if (spotlightRef.current) {
        gsap.to(spotlightRef.current, {
          opacity: 0,
          duration: 0.3,
          ease: 'power2.out',
        });
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (spotlightRef.current?.parentNode) {
        spotlightRef.current.parentNode.removeChild(spotlightRef.current);
      }
    };
  }, [gridRef, disableAnimations, enabled, spotlightRadius, glowColor, isMobile]);

  return null;
};

const BentoCardGrid = ({
  children,
  gridRef,
  isMobile,
}: {
  children: React.ReactNode;
  gridRef: React.RefObject<HTMLDivElement | null>;
  isMobile: boolean;
}) => (
  <div
    className='bento-section grid gap-2 p-3 select-none relative overflow-y-auto'
    style={{
      fontSize: 'clamp(0.875rem, 0.8rem + 0.5vw, 1.5rem)',
      maxHeight: '100vh',
      width: '100%',
      padding: isMobile ? '0.5rem' : '0.75rem',
    }}
    ref={gridRef}
  >
    {children}
  </div>
);

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

const MagicBento = ({
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
  enableMagnetism = true,
}) => {
  const gridRef = useRef<HTMLDivElement>(null);
  const isMobile = useMobileDetection();
  const shouldDisableAnimations = disableAnimations || isMobile;
  const navigate = useNavigate();

  const handleCardClick = (cardId: string) => {
    // Remove -2 suffix to map duplicate cards to original case studies
    const baseId = cardId.replace(/-2$/, '');
    const caseStudy = caseStudiesData.find((cs) => cs.id === baseId || cs.id === cardId);
    if (caseStudy) {
      navigate(`/case-study/${baseId}`, { state: { caseStudy } });
    }
  };

  return (
    <>
      <style>
        {`
          .bento-section {
            --glow-x: 50%;
            --glow-y: 50%;
            --glow-intensity: 0;
            --glow-radius: 200px;
            --glow-color: ${glowColor};
            --border-color: #392e4e;
            --background-dark: #060010;
            --white: hsl(0, 0%, 100%);
            --purple-primary: rgba(132, 0, 255, 1);
            --purple-glow: rgba(132, 0, 255, 0.2);
            --purple-border: rgba(132, 0, 255, 0.8);
          }
          
          .card-responsive {
            grid-template-columns: 1fr;
            width: 100%;
            margin: 0;
            padding: 0;
            gap: 0.75rem;
          }
          
          @media (min-width: 640px) {
            .card-responsive {
              grid-template-columns: repeat(2, 1fr);
              gap: 1rem;
            }
          }
          
          @media (min-width: 1024px) {
            .card-responsive {
              grid-template-columns: repeat(4, 1fr);
              gap: 0.75rem;
            }
            
            .card-responsive .card:nth-child(3) {
              grid-column: span 2;
              grid-row: span 2;
            }
            
            .card-responsive .card:nth-child(4) {
              grid-column: 1 / span 2;
              grid-row: 2 / span 2;
            }
            
            .card-responsive .card:nth-child(6) {
              grid-column: 4;
              grid-row: 3;
            }
            
            .card-responsive .card:nth-child(9) {
              grid-column: span 2;
              grid-row: span 2;
            }
            
            .card-responsive .card:nth-child(10) {
              grid-column: 1 / span 2;
              grid-row: 5 / span 2;
            }
            
            .card-responsive .card:nth-child(12) {
              grid-column: 4;
              grid-row: 6;
            }
          }
          
          .card--border-glow::after {
            content: '';
            position: absolute;
            inset: 0;
            padding: 6px;
            background: radial-gradient(var(--glow-radius) circle at var(--glow-x) var(--glow-y),
                rgba(${glowColor}, calc(var(--glow-intensity) * 0.8)) 0%,
                rgba(${glowColor}, calc(var(--glow-intensity) * 0.4)) 30%,
                transparent 60%);
            border-radius: inherit;
            mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            mask-composite: subtract;
            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            pointer-events: none;
            transition: opacity 0.3s ease;
            z-index: 1;
          }
          
          .card--border-glow:hover::after {
            opacity: 1;
          }
          
          .card--border-glow:hover {
            box-shadow: 0 4px 20px rgba(46, 24, 78, 0.4), 0 0 30px rgba(${glowColor}, 0.2);
          }
          
          .particle::before {
            content: '';
            position: absolute;
            top: -2px;
            left: -2px;
            right: -2px;
            bottom: -2px;
            background: rgba(${glowColor}, 0.2);
            border-radius: 50%;
            z-index: -1;
          }
          
          .particle-container:hover {
            box-shadow: 0 4px 20px rgba(46, 24, 78, 0.2), 0 0 30px rgba(${glowColor}, 0.2);
          }
          
          .text-clamp-1 {
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
            line-clamp: 1;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          
          .text-clamp-2 {
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            line-clamp: 2;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          
          .card {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif !important;
          }
          
          .card__label,
          .card__title,
          .card__description {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif !important;
            color: rgba(0, 0, 0, 0.95) !important;
            font-weight: 600 !important;
            text-shadow: 0 1px 2px rgba(255, 255, 255, 0.8), 0 0 4px rgba(255, 255, 255, 0.5) !important;
            letter-spacing: -0.01em !important;
          }
          
          .card__title {
            font-weight: 700 !important;
            color: rgba(0, 0, 0, 1) !important;
            line-height: 1.4 !important;
            letter-spacing: -0.02em !important;
            font-size: 1.125rem !important;
          }
          
          .card__description {
            color: rgba(0, 0, 0, 0.9) !important;
            font-weight: 500 !important;
            line-height: 1.5 !important;
            letter-spacing: -0.01em !important;
            font-size: 0.9375rem !important;
          }
          
          .card__label {
            font-weight: 600 !important;
            color: rgba(0, 0, 0, 0.95) !important;
            letter-spacing: 0.02em !important;
            text-transform: uppercase !important;
            font-size: 0.75rem !important;
            line-height: 1.3 !important;
          }
          
          .mobile-card {
            aspect-ratio: auto !important;
          }
          
          @media (max-width: 639px) {
            .bento-section {
              padding: 0.5rem !important;
              overflow-y: auto;
              -webkit-overflow-scrolling: touch;
            }
            
            .card-responsive {
              grid-template-columns: 1fr;
              width: 100%;
              margin: 0;
              padding: 0;
              gap: 0.75rem;
            }
            
            .card-responsive .card {
              width: 100%;
              min-height: 320px;
              max-height: 420px;
              padding: 1rem;
              aspect-ratio: auto;
              touch-action: manipulation;
            }
            
            .card:hover {
              transform: none !important;
            }
            
            .card__label {
              font-size: 0.8125rem !important;
              color: rgba(0, 0, 0, 0.95) !important;
              font-weight: 600 !important;
              text-shadow: 0 1px 2px rgba(255, 255, 255, 0.8), 0 0 4px rgba(255, 255, 255, 0.5) !important;
              letter-spacing: 0.03em !important;
              line-height: 1.3 !important;
            }
            
            .card__title {
              font-size: 1.125rem !important;
              line-height: 1.5 !important;
              color: rgba(0, 0, 0, 1) !important;
              font-weight: 700 !important;
              text-shadow: 0 1px 2px rgba(255, 255, 255, 0.8), 0 0 4px rgba(255, 255, 255, 0.5) !important;
              letter-spacing: -0.02em !important;
              margin-bottom: 0.5rem !important;
            }
            
            .card__description {
              font-size: 0.875rem !important;
              line-height: 1.6 !important;
              color: rgba(0, 0, 0, 0.9) !important;
              font-weight: 500 !important;
              text-shadow: 0 1px 2px rgba(255, 255, 255, 0.8), 0 0 4px rgba(255, 255, 255, 0.5) !important;
              letter-spacing: -0.01em !important;
            }
          }
          
          @media (min-width: 640px) and (max-width: 1023px) {
            .card-responsive .card {
              min-height: 220px;
              max-height: 320px;
              padding: 1.25rem;
            }
            
            .card__label {
              font-size: 0.875rem !important;
              color: rgba(0, 0, 0, 0.95) !important;
              font-weight: 600 !important;
              text-shadow: 0 1px 2px rgba(255, 255, 255, 0.8), 0 0 4px rgba(255, 255, 255, 0.5) !important;
              letter-spacing: 0.02em !important;
              line-height: 1.3 !important;
            }
            
            .card__title {
              font-size: 1.25rem !important;
              line-height: 1.5 !important;
              color: rgba(0, 0, 0, 1) !important;
              font-weight: 700 !important;
              text-shadow: 0 1px 2px rgba(255, 255, 255, 0.8), 0 0 4px rgba(255, 255, 255, 0.5) !important;
              letter-spacing: -0.02em !important;
              margin-bottom: 0.5rem !important;
            }
            
            .card__description {
              font-size: 0.9375rem !important;
              line-height: 1.6 !important;
              color: rgba(0, 0, 0, 0.9) !important;
              font-weight: 500 !important;
              text-shadow: 0 1px 2px rgba(255, 255, 255, 0.8), 0 0 4px rgba(255, 255, 255, 0.5) !important;
              letter-spacing: -0.01em !important;
            }
          }
        `}
      </style>

      {enableSpotlight && (
        <GlobalSpotlight
          gridRef={gridRef}
          disableAnimations={shouldDisableAnimations}
          enabled={enableSpotlight}
          spotlightRadius={spotlightRadius}
          glowColor={glowColor}
          isMobile={isMobile}
        />
      )}

      <BentoCardGrid gridRef={gridRef} isMobile={isMobile}>
        <div className='card-responsive grid'>
          {cardData.map((card, index) => {
            const baseClassName = `card flex flex-col justify-between relative aspect-[4/3] min-h-[200px] max-h-[420px] w-full max-w-full p-5 rounded-[20px] border border-solid font-light overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(0,0,0,0.15)] cursor-pointer ${enableBorderGlow ? 'card--border-glow' : ''} ${isMobile ? 'mobile-card' : ''}`;

            const cardStyle = {
              backgroundColor: card.color || 'var(--background-dark)',
              borderColor: 'var(--border-color)',
              color: 'var(--white)',
              '--glow-x': '50%',
              '--glow-y': '50%',
              '--glow-intensity': '0',
              '--glow-radius': '200px',
            };

            if (enableStars) {
              return (
                <ParticleCard
                  key={index}
                  className={baseClassName}
                  style={cardStyle}
                  disableAnimations={shouldDisableAnimations}
                  particleCount={particleCount}
                  glowColor={glowColor}
                  enableTilt={enableTilt}
                  clickEffect={clickEffect}
                  enableMagnetism={enableMagnetism}
                  cardId={card.id}
                  onCardClick={handleCardClick}
                  backgroundImage={card.backgroundImage}
                >
                  <div className='card__header flex justify-between gap-3 relative text-black'>
                    <span className='card__label text-base text-black font-semibold'>{card.label}</span>
                  </div>
                  <div className='card__content flex flex-col relative text-black'>
                    <h3
                      className={`card__title font-bold text-base m-0 mb-1 text-black ${textAutoHide ? 'text-clamp-1' : ''}`}
                    >
                      {card.title}
                    </h3>
                    <p
                      className={`card__description text-xs leading-5 opacity-90 text-black font-medium ${textAutoHide ? 'text-clamp-2' : ''}`}
                    >
                      {card.description}
                    </p>
                  </div>
                </ParticleCard>
              );
            }

            return (
              <div
                key={index}
                className={baseClassName}
                style={cardStyle}
                ref={(el) => {
                  if (!el) return;

                  const handleMouseMove = (e: MouseEvent) => {
                    if (shouldDisableAnimations) return;

                    const rect = el.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;

                    if (enableTilt) {
                      const rotateX = ((y - centerY) / centerY) * -10;
                      const rotateY = ((x - centerX) / centerX) * 10;

                      gsap.to(el, {
                        rotateX,
                        rotateY,
                        duration: 0.1,
                        ease: 'power2.out',
                        transformPerspective: 1000,
                      });
                    }

                    if (enableMagnetism) {
                      const magnetX = (x - centerX) * 0.05;
                      const magnetY = (y - centerY) * 0.05;

                      gsap.to(el, {
                        x: magnetX,
                        y: magnetY,
                        duration: 0.3,
                        ease: 'power2.out',
                      });
                    }
                  };

                  const handleMouseLeave = () => {
                    if (shouldDisableAnimations) return;

                    if (enableTilt) {
                      gsap.to(el, {
                        rotateX: 0,
                        rotateY: 0,
                        duration: 0.3,
                        ease: 'power2.out',
                      });
                    }

                    if (enableMagnetism) {
                      gsap.to(el, {
                        x: 0,
                        y: 0,
                        duration: 0.3,
                        ease: 'power2.out',
                      });
                    }
                  };

                  el.addEventListener('mousemove', handleMouseMove);
                  el.addEventListener('mouseleave', handleMouseLeave);
                }}
                onClick={(e) => {
                  if (clickEffect && !shouldDisableAnimations) {
                    const el = e.currentTarget;
                    const rect = el.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;

                    const maxDistance = Math.max(
                      Math.hypot(x, y),
                      Math.hypot(x - rect.width, y),
                      Math.hypot(x, y - rect.height),
                      Math.hypot(x - rect.width, y - rect.height),
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

                    el.appendChild(ripple);

                    gsap.fromTo(
                      ripple,
                      {
                        scale: 0,
                        opacity: 1,
                      },
                      {
                        scale: 1,
                        opacity: 0,
                        duration: 0.8,
                        ease: 'power2.out',
                        onComplete: () => ripple.remove(),
                      },
                    );
                  }

                  // Navigate to case study page
                  handleCardClick(card.id);
                }}
              >
                {card.backgroundImage && (
                  <div
                    className='absolute inset-0 z-0 bg-cover bg-center transition-transform duration-500 hover:scale-110'
                    style={{
                      backgroundImage: `url(${card.backgroundImage})`,
                      opacity: 0.6,
                    }}
                  />
                )}
                <div className='relative z-10 w-full h-full flex flex-col justify-between'>
                  <div className='card__header flex justify-between gap-3 relative text-black'>
                    <span className='card__label text-base text-black font-semibold'>{card.label}</span>
                  </div>
                  <div className='card__content flex flex-col relative text-black'>
                    <h3
                      className={`card__title font-bold text-base m-0 mb-1 text-black ${textAutoHide ? 'text-clamp-1' : ''}`}
                    >
                      {card.title}
                    </h3>
                    <p
                      className={`card__description text-xs leading-5 opacity-90 text-black font-medium ${textAutoHide ? 'text-clamp-2' : ''}`}
                    >
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </BentoCardGrid>
    </>
  );
};

export default MagicBento;
