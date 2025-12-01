export interface CaseStudyData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  problem: {
    title: string;
    description: string;
  };
  userBase: {
    title: string;
    description: string;
  };
  approach: {
    title: string;
    description: string;
  };
  detailedAnalysis: {
    title: string;
    paragraphs: string[];
    sections: Array<{
      title: string;
      paragraphs: string[];
    }>;
    quote?: string;
  };
  workflow: Array<{
    step: string;
    title: string;
    duration: string;
    description: string;
    deliverables: string[];
    color: string;
  }>;
  techStack: Array<{
    name: string;
    description: string;
    icon: string;
    iconColor: string;
  }>;
  impact: Array<{
    value: string;
    label: string;
  }>;
  liveUrl?: string;
}

export const caseStudiesData: CaseStudyData[] = [
  {
    id: 'analytics',
    title: 'Visit Ahmedabad',
    subtitle: 'Where heritage storytelling meets modern digital engineering',
    description: 'A next-generation tourism intelligence platform designed to transform how travelers discover, explore, and emotionally connect with the cultural capital of Gujarat.',
    problem: {
      title: 'The Problem',
      description: 'Tourism content for Ahmedabad existed across scattered blogs, offline brochures, and legacy portals that lacked structure, visual clarity, and real-time maintainability. Travelers struggled to plan coherent itineraries, and local tourism bodies had no modern CMS to showcase monuments, festivals, food culture, or hidden gems. The goal was to centralize everything into a fast, elegant, SEO-optimized platform that could scale as the city modernized.'
    },
    userBase: {
      title: 'User Base',
      description: 'The platform serves four major user personas: Domestic tourists searching for reliable first-time information. Foreign travelers needing structured, mobile-friendly itineraries. Heritage enthusiasts & students requiring accurate cultural context. Tourism administrators looking for a maintainable content system. Each persona required vastly different interaction flows, which shaped the UX strategy.'
    },
    approach: {
      title: 'Our Approach',
      description: 'We engineered Visit Ahmedabad as a content-driven experience platform, not just a brochure site. Our approach included: A modular CMS architecture enabling non-technical teams to update places, festivals, routes, and galleries effortlessly. A performance-first frontend capable of loading high-resolution images and long-form content under 1 second. A narrative-led UX that invites exploration through micro-interactions, transitions, and card-based discovery. Future-proof routing allowing expansion into AR tours, multilingual content, and interactive map layers.'
    },
    detailedAnalysis: {
      title: 'The Full Story',
      paragraphs: [
        'Visit Ahmedabad was never about building pages. It was about crafting a digital identity for a city.',
        'Early analysis showed that 70% of tourism searches revolve around: "Top places to visit", "Local food spots", "Heritage & culture", "One-day itinerary". But existing platforms lacked depth and failed to capture cultural nuance. Our solution introduced a hierarchical content system built around: Places, Categories, Experiences, Food Trails, Events, Itineraries. This structure allowed semantic SEO, internal linking flows, and predictable crawlers paths.'
      ],
      sections: [
        {
          title: 'Engineering the Experience',
          paragraphs: [
            'Static pages weren\'t enough — we engineered an immersive experience: Geographical mapping layers for future map-based navigation. Image compression pipeline enabling fast loads without compromising travel photography. Pre-rendered content paths ensuring instant page transitions. Intuitive micro animations grounding user attention on what matters.'
          ]
        },
        {
          title: 'The Storytelling Layer',
          paragraphs: [
            'Travel is emotional. So we embedded narrative design: Each monument page follows a pattern: History → Why Visit → Best Time → Local Insights → Gallery. Food pages highlight origin stories and must-try dishes. Neighborhood guides offer walking paths and curated insights. This turned information into a discovery journey.'
          ]
        },
        {
          title: 'Scalability',
          paragraphs: [
            'The system can handle: 1,000+ locations, Multi-language expansion, Event listing calendars, Tourism partner pages, API-driven integrations. The architecture was engineered to grow with the city\'s future.'
          ]
        }
      ],
      quote: 'Visit Ahmedabad reimagines city tourism by bringing together immersive visuals, hyper-organized data, personalized discovery paths, and lightning-fast performance.'
    },
    workflow: [
      {
        step: '01',
        title: 'Discovery & City Immersion',
        duration: 'Week 1-2',
        description: 'We spent two weeks gathering datasets from tourism bodies, municipal archives, and local guides.',
        deliverables: ['Persona mapping', 'Content map', 'Cultural tone-of-voice guide'],
        color: 'blue'
      },
      {
        step: '02',
        title: 'UX & Information Architecture',
        duration: 'Week 3-4',
        description: 'Wireframes for 40+ screens were created to structure navigation into intuitive funnels.',
        deliverables: ['Category-based navigation system', 'Landmark detail page templates', 'Reusable content modules', 'SEO-driven URL strategy'],
        color: 'purple'
      },
      {
        step: '03',
        title: 'UI/UX Design',
        duration: 'Week 5-6',
        description: 'Inspired by Ahmedabad\'s red sandstone and modern skyline, we designed a warm yet contemporary visual identity.',
        deliverables: ['Color palette rooted in heritage', 'Immersive gallery components', 'Smooth transitions & scroll experiences'],
        color: 'green'
      },
      {
        step: '04',
        title: 'Development & Optimization',
        duration: 'Week 7-10',
        description: 'A performance-first engineering sprint delivered component-driven React architecture, pre-rendering for 0.9s average load time, cloud image pipeline, and CMS integration for seamless updates.',
        deliverables: ['Component-driven React architecture', 'Pre-rendering optimization', 'Cloud image pipeline', 'CMS integration'],
        color: 'blue'
      }
    ],
    techStack: [
      { name: 'React 18', description: 'Frontend Framework', icon: 'code-2', iconColor: 'text-blue-400' },
      { name: 'Tailwind CSS', description: 'Rapid, scalable styling', icon: 'wind', iconColor: 'text-cyan-400' },
      { name: 'Node.js + Express', description: 'Backend services', icon: 'server', iconColor: 'text-green-400' },
      { name: 'MySQL', description: 'Structured content storage', icon: 'database', iconColor: 'text-blue-500' },
      { name: 'Cloudinary', description: 'Image optimization', icon: 'smartphone', iconColor: 'text-purple-400' },
      { name: 'Map APIs', description: 'Location intelligence', icon: 'hard-drive', iconColor: 'text-orange-400' },
      { name: 'Vercel', description: 'Deployment edge network', icon: 'zap', iconColor: 'text-yellow-400' }
    ],
    impact: [
      { value: '0.9s', label: 'Average Load Time' },
      { value: '+120%', label: 'User Engagement' },
      { value: '98/100', label: 'SEO Score' }
    ],
    liveUrl: 'https://www.visitamdavad.com/'
  },
  {
    id: 'dashboard',
    title: 'PIC Event Management Platform',
    subtitle: 'Engineering a seamless event backbone for thousands of athletes, coordinators, and administrators',
    description: 'A fully orchestrated event intelligence and participant-management system built to power large-scale sporting and corporate events with precision, automation, and real-time operational visibility.',
    problem: {
      title: 'The Problem',
      description: 'The client managed multi-category athletic events—marathons, cycling races, duathlons—using manual workflows. Registration data came through Google forms, payments had to be validated by hand, and event-day synchronization between categories, waves, and timing partners caused frequent delays. Operational fatigue increased with scale. They needed a system capable of: Automated participant onboarding, Category-specific logic, Bib allocation, Payment tracking, Event kit distribution, Real-time dashboards. The old tools were simply not built for the complexity of modern sporting events.'
    },
    userBase: {
      title: 'User Base',
      description: 'The platform serves a multi-layer ecosystem: Participants registering across categories, age groups, and distances. Event admins managing configurations, rules, and communication. Volunteers & Race marshals needing instant check-in and tracking tools. Timing partners requiring structured exports. Finance teams verifying transactions and refunds. This diverse user base required an interface that is fast, intuitive, and deeply structured.'
    },
    approach: {
      title: 'Our Approach',
      description: 'We didn\'t build "just another registration system." We engineered an end-to-end event infrastructure platform with: A dynamic category engine supporting unlimited sports formats. Automated payment reconciliation via integrated gateways. Real-time bib generation & numbering logic. Bulk import/export tools for operational teams. Admin dashboards with live metrics. A communication system for event updates. Secure participant verification workflows. The architecture ensured every module—registration, kit issuance, timing exports—worked together seamlessly.'
    },
    detailedAnalysis: {
      title: 'The Full Story',
      paragraphs: [
        'The PIC platform emerged from a deep understanding of event volatility. Sporting events are dynamic: categories shift, participants edit details last-minute, weather forces operational changes, and timing partners require pristine data structures.',
        'We constructed a modular event engine that supports: Unlimited event types: running, cycling, duathlon, corporate sports. Hierarchical subcategories. Gender & age filters. Wave and batch assignments. Custom registration forms. Real-time payment verification. Every rule could be configured without code changes.'
      ],
      sections: [
        {
          title: 'Data Flow Engineering',
          paragraphs: [
            'The biggest challenge was ensuring data accuracy at scale. We implemented: A multi-stage registration pipeline. Payment status synchronization using webhooks. Deduplication logic to prevent double entries. A versioned participant profile system. Export pipelines for timing chips and third-party systems. This eliminated work that previously required days of manual cleanup.'
          ]
        },
        {
          title: 'Race-Day Experience Optimization',
          paragraphs: [
            'On event day, speed is survival. We engineered: A QR-based kit collection system. Instant participant verification. Bib distribution scanners. Volunteer-friendly UIs. Error-proofed search for thousands of participants. These optimizations reduced kit distribution time by 60%.'
          ]
        },
        {
          title: 'Scalability & Reliability',
          paragraphs: [
            'The platform is capable of: Handling 10,000+ registrations. Multi-event concurrency. Zero-downtime deployment. Real-time dashboards for every stakeholder. With cloud-native deployment, the system remains stable even under traffic surges from last-minute participants.'
          ]
        }
      ],
      quote: 'The PIC platform is more than software—it is the unseen engine that powers a flawless event-day experience.'
    },
    workflow: [
      {
        step: '01',
        title: 'Discovery & Field Immersion',
        duration: 'Week 1-2',
        description: 'We shadowed the organizing team through an entire event cycle—registration, kit prep, check-ins—to map pain points accurately.',
        deliverables: ['Detailed event lifecycle map', 'Volunteer workflows', 'Category matrix', 'Operational bottleneck analysis'],
        color: 'blue'
      },
      {
        step: '02',
        title: 'Information Architecture & UX Blueprints',
        duration: 'Week 3-4',
        description: 'We created detailed UX flows covering: Full registration lifecycle, Admin event creation, Multi-category participant logic, Field-team dashboards, Financial verification flows.',
        deliverables: ['Wireframes for 60+ screens', 'Registration flows', 'Admin dashboards', 'Financial workflows'],
        color: 'purple'
      },
      {
        step: '03',
        title: 'Interface & Visual System',
        duration: 'Week 5-6',
        description: 'A clean, operational UI was designed: High-contrast layouts for outdoor event usage. Oversized inputs for volunteers using gloves or in bright sunlight. Zero-clutter admin design for high-speed filtering. Data tables engineered for thousands of rows without lag.',
        deliverables: ['High-contrast UI design', 'Volunteer-friendly interfaces', 'Admin dashboards', 'Data table optimization'],
        color: 'green'
      },
      {
        step: '04',
        title: 'Engineering & Deployment',
        duration: 'Week 7-12',
        description: 'Development focused on: Component-driven frontend. API architecture handling heavy filtering. Payment integration. Bulk Excel workflows. Real-time dashboards. Event-day QR systems. Load testing simulated peak traffic to ensure system stability.',
        deliverables: ['Component-driven frontend', 'Payment integration', 'QR verification system', 'Real-time dashboards'],
        color: 'blue'
      }
    ],
    techStack: [
      { name: 'React.js', description: 'Frontend UI engine', icon: 'code-2', iconColor: 'text-blue-400' },
      { name: 'Node.js & Express', description: 'REST API backend', icon: 'server', iconColor: 'text-green-400' },
      { name: 'MongoDB', description: 'Participant and event data storage', icon: 'database', iconColor: 'text-emerald-400' },
      { name: 'AWS S3', description: 'Storage for documents/bib exports', icon: 'hard-drive', iconColor: 'text-orange-400' },
      { name: 'Payment Gateway APIs', description: 'Automated reconciliation', icon: 'zap', iconColor: 'text-yellow-400' },
      { name: 'QR Engine', description: 'Participant verification', icon: 'smartphone', iconColor: 'text-purple-400' },
      { name: 'Vercel / AWS', description: 'High-performance hosting', icon: 'wind', iconColor: 'text-cyan-400' }
    ],
    impact: [
      { value: '62%', label: 'Reduction in Kit Distribution Time' },
      { value: '4x', label: 'Faster Payment Validation' },
      { value: '99.9%', label: 'Uptime Across Event Cycles' }
    ],
    liveUrl: 'https://event-pic-fe.vercel.app/'
  },
  {
    id: 'collaboration',
    title: 'Mayuri Sharma Admin Platform',
    subtitle: 'Transforming a creator\'s knowledge into a scalable, structured, and beautifully organized education platform',
    description: 'A fully integrated admin, content, and course-management engine powering a personal digital academy with precision, storytelling, and operational elegance.',
    problem: {
      title: 'The Problem',
      description: 'Mayuri required a reliable way to publish courses, organize chapters, track students, and manage digital assets without relying on external platforms like Udemy or Thinkific. Multiple issues emerged: Duplication of content across folders, Inconsistent lesson formatting, No structured chapter hierarchy, Manual uploads and frequent version confusion, Zero analytics or student progress insights. The goal was to create a complete, creator-friendly admin system with structure, speed, and long-term scalability.'
    },
    userBase: {
      title: 'User Base',
      description: 'The platform supports three primary user personas: The Educator — uploading courses, descriptions, images, chapters, and lesson metadata. The Admin/Manager — overseeing approvals, content consistency, and curriculum hygiene. Students & Learners — consuming published content through the front-facing website (not part of this admin case study but synchronized with the admin workflows). The Admin Panel needed to empower creators but also protect content quality and organization.'
    },
    approach: {
      title: 'Our Approach',
      description: 'We architected the system around content hierarchy clarity and workflow fluidity: Courses → Chapters → Lessons, Category-based navigation, Image and video asset management, Secure content APIs, SEO-ready metadata and structured descriptions, Creator-first experience with validation, drafts, and revision control. Every action a creator takes should feel effortless — the platform handles the complexity beneath the hood.'
    },
    detailedAnalysis: {
      title: 'The Full Story',
      paragraphs: [
        'The Mayuri Sharma Admin System wasn\'t just a dashboard — it was a complete transformation of how content is produced, curated, and published.',
        'Educators often struggle not with the teaching, but with structuring the material. We solved this by creating: Strict course-tree hierarchy, Reusable content blocks, Automatic chapter ordering, Thumbnail-driven visual navigation, Draft mode with validation. This ensured that regardless of how large the academy grows, content remains organized.'
      ],
      sections: [
        {
          title: 'CMS Engineering',
          paragraphs: [
            'The admin system behaves like a lightweight, custom-built headless CMS: Standardized input patterns, Markdown-ready description fields, Auto-thumbnail compression, Instant preview modes, Secure file upload handling. The editor experience mirrors the simplicity of tools like Notion — clean, minimal, and distraction-free.'
          ]
        },
        {
          title: 'Workflow Automation',
          paragraphs: [
            'A structured workflow was introduced: Course Creation, Chapter Addition, Lesson Upload, Visibility Settings, Publish Review, Go Live. Each stage uses built-in validation to prevent broken links or incomplete chapters.'
          ]
        },
        {
          title: 'Security & Access Controls',
          paragraphs: [
            'The platform ensures every content update is traceable: Admin-only access, JWT-protected APIs, Secure file storage, Revision logs, Version-stamped uploads. Creators can focus on teaching while the system ensures reliability.'
          ]
        },
        {
          title: 'Performance & Scalability',
          paragraphs: [
            'With the ability to handle: Hundreds of courses, Thousands of chapters, Tens of thousands of lessons. The architecture ensures smooth performance, even as content volume scales dramatically.'
          ]
        }
      ],
      quote: 'From chaos to clarity — the Mayuri Sharma Admin Platform turns raw educational content into a premium, structured digital academy experience.'
    },
    workflow: [
      {
        step: '01',
        title: 'Discovery & Content Blueprinting',
        duration: 'Week 1-2',
        description: 'We conducted interviews with the educator to understand course structure patterns, teaching style, and publishing frequency.',
        deliverables: ['Curriculum mapping', 'UI structure plan', 'Asset-handling guidelines'],
        color: 'blue'
      },
      {
        step: '02',
        title: 'UX & Information Design',
        duration: 'Week 3-4',
        description: 'We created clean, minimal layouts focusing on clarity: Left-aligned course tree, High-contrast admin panel, Simplified image uploads, Validation-first form design, Instant reordering and drag sorting. Every screen was engineered for low cognitive load.',
        deliverables: ['Admin panel layouts', 'Form validation design', 'Content hierarchy UI'],
        color: 'purple'
      },
      {
        step: '03',
        title: 'Component Design & System Styling',
        duration: 'Week 5-6',
        description: 'The UI was built using reusable components: Card-based course tiles, Two-pane chapter editor, Rich text description module, Asset preview blocks, Status indicators (draft, published, archived). The system feels modern, predictable, and visually stable across screens.',
        deliverables: ['Component library', 'Design system', 'Status indicators'],
        color: 'green'
      },
      {
        step: '04',
        title: 'Development & Final Integration',
        duration: 'Week 7-12',
        description: 'Engineering efforts included: Role-based access, Secure APIs, Database schemas for hierarchical content, Image optimization, SEO metadata fields, Live preview engine. Once deployed, the admin system required zero training — intuitive by design.',
        deliverables: ['Role-based access system', 'Content APIs', 'Image optimization', 'Live preview'],
        color: 'blue'
      }
    ],
    techStack: [
      { name: 'React.js', description: 'Frontend admin interface', icon: 'code-2', iconColor: 'text-blue-400' },
      { name: 'Tailwind CSS', description: 'Clean, modular UI styling', icon: 'wind', iconColor: 'text-cyan-400' },
      { name: 'Node.js (Express)', description: 'Admin API services', icon: 'server', iconColor: 'text-green-400' },
      { name: 'MongoDB / PostgreSQL', description: 'Content hierarchy storage', icon: 'database', iconColor: 'text-emerald-400' },
      { name: 'Cloudinary', description: 'Image compression & delivery', icon: 'smartphone', iconColor: 'text-purple-400' },
      { name: 'JWT', description: 'Secure authentication', icon: 'zap', iconColor: 'text-yellow-400' },
      { name: 'Vercel / AWS', description: 'Hosting & scalability', icon: 'hard-drive', iconColor: 'text-orange-400' }
    ],
    impact: [
      { value: '90%', label: 'Faster Course Publishing' },
      { value: '100%', label: 'Consistent Content Hierarchy' },
      { value: '40%', label: 'Fewer Admin Corrections' }
    ],
    liveUrl: 'https://mayurisharma.nl/'
  },
  {
    id: 'automation',
    title: 'FindSecure — Security Intelligence Reimagined',
    subtitle: 'Where compliance, intelligence, and operational control converge in one secure platform',
    description: 'A mission-critical security documentation, incident logging, and multi-entity verification system designed to streamline high-sensitivity workflows for government-adjacent operations.',
    problem: {
      title: 'The Problem',
      description: 'Critical security operations relied on manual documentation, unstructured communication, and inconsistent incident reporting. Sensitive data lived in shared drives without version control. Key challenges included: No standardized workflow for capturing incidents, Missing audit trails for compliance reviews, Delayed communication between security teams, Zero automation for repetitive verification tasks, Disorganized records with no central repository. These limitations increased operational risk and slowed down high-level decision making. A robust digital system was required.'
    },
    userBase: {
      title: 'User Base',
      description: 'FindSecure serves a hierarchy of operational roles: Security Officers who log incidents, upload reports, and verify identity documents. Supervisors who handle approvals and escalate cases. Compliance Teams who audit logs and check policy enforcement. Administrators who manage roles, permissions, and sensitive configurations. External Partners with limited, controlled visibility via secure endpoints. The system enforces strict permission layers to ensure the right data reaches the right user at the right time.'
    },
    approach: {
      title: 'Our Approach',
      description: 'We engineered FindSecure as a security-first operational platform, built upon: A hardened access-control system, Enterprise-level encryption for sensitive uploads, Immutable activity trails, Dynamic incident-logging modules, Real-time dashboards for command-level clarity, Modular expansion for future compliance standards. Every interaction is logged, validated, and versioned to maintain absolute operational integrity.'
    },
    detailedAnalysis: {
      title: 'The Full Story',
      paragraphs: [
        'FindSecure began as a simple need for better documentation but evolved into a full-spectrum security intelligence framework when deeper challenges surfaced during discovery.',
        'Legacy systems showed patterns: Incidents were recorded post-factum, not in real time, Cross-team communication lagged by hours, Documentation inconsistencies created ambiguity, Sensitive PDFs lacked traceability, Approvals were informal and undocumented. The organization needed an auditable, standardized, and defensible workflow.'
      ],
      sections: [
        {
          title: 'Engineering the Core Security Engine',
          paragraphs: [
            'We built a multi-module architecture: 1. Incident Logging Module — Structured forms, Severity scoring, Automated timestamps, Evidence uploads, Multi-step approvals. Each entry produces a fully traceable digital record. 2. Document Verification Pipeline — Staff IDs, Authorization letters, Access badges, Clearance certificates. Documents are encrypted and linked to identity profiles. 3. Compliance & Audit Layer — Activity heatmaps, Escalation records, Weekly and monthly reports, Automated compliance scoring. Auditability became a core feature, not an afterthought.'
          ]
        },
        {
          title: 'Analytics & Real-Time Visibility',
          paragraphs: [
            'FindSecure\'s dashboard surfaces: High-risk zones, Incident frequency trends, Pending approvals, Clearance expiry alerts, Operational bottlenecks. Security teams can now act on intelligence instead of reacting to chaos.'
          ]
        },
        {
          title: 'Scalable and Hardened Infrastructure',
          paragraphs: [
            'The system supports: Multi-location rollouts, 10,000+ security records, Zero-downtime updates, Access governed by fine-grained RBAC, Secure API integration for partners. The architecture ensures long-term reliability and security resilience.'
          ]
        }
      ],
      quote: 'Security is built on clarity. FindSecure delivers it through structured workflows, hardened architecture, and intelligence-driven insights.'
    },
    workflow: [
      {
        step: '01',
        title: 'Discovery & Situation Analysis',
        duration: 'Week 1-2',
        description: 'We conducted interviews with field officers, supervisors, and compliance teams.',
        deliverables: ['Incident classification hierarchy', 'Data sensitivity map', 'Policy compliance matrix'],
        color: 'blue'
      },
      {
        step: '02',
        title: 'UX for High-Sensitivity Operations',
        duration: 'Week 3-4',
        description: 'The UI focuses on clarity and error-proofing: Structured incident forms, High-contrast operational screens, Instant upload and tagging, Clear audit indicators, Notification system for escalations. The interface supports high-pressure environments where clarity is essential.',
        deliverables: ['Structured forms', 'High-contrast UI', 'Upload system', 'Notification system'],
        color: 'purple'
      },
      {
        step: '03',
        title: 'Engineering Secure Interaction Layers',
        duration: 'Week 5-10',
        description: 'We engineered: RBAC permission grids, Encrypted document pipelines, Approval chains, Incident status evolution, Activity signatures. All actions are hashed and stamped for compliance-grade traceability.',
        deliverables: ['RBAC system', 'Encryption pipeline', 'Approval workflows', 'Activity logging'],
        color: 'green'
      },
      {
        step: '04',
        title: 'Deployment & Hardening',
        duration: 'Week 11-14',
        description: 'Security hardening included: HTTPS enforcement, Data encryption at rest & transit, Admin activity logging, Rate limiters, Secure backups, Automated vulnerability checks. The result is a stable, tamper-resistant operational backbone.',
        deliverables: ['Security hardening', 'Encryption implementation', 'Monitoring system', 'Backup system'],
        color: 'blue'
      }
    ],
    techStack: [
      { name: 'React.js', description: 'Operational dashboards', icon: 'code-2', iconColor: 'text-blue-400' },
      { name: 'Node.js (Express)', description: 'Secure API layer', icon: 'server', iconColor: 'text-green-400' },
      { name: 'MongoDB', description: 'Audit-grade database system', icon: 'database', iconColor: 'text-emerald-400' },
      { name: 'JWT + Bcrypt', description: 'Authentication & encryption', icon: 'zap', iconColor: 'text-yellow-400' },
      { name: 'AWS S3', description: 'Secure evidence and document storage', icon: 'hard-drive', iconColor: 'text-orange-400' },
      { name: 'Docker + NGINX', description: 'Hardened deployment', icon: 'smartphone', iconColor: 'text-purple-400' },
      { name: 'CloudWatch / Logging', description: 'Monitoring & alerts', icon: 'wind', iconColor: 'text-cyan-400' }
    ],
    impact: [
      { value: '80%', label: 'Faster Incident Reporting' },
      { value: '100%', label: 'Traceability for Audits' },
      { value: '50%', label: 'Reduction in Miscommunication' }
    ],
    liveUrl: '#'
  },
  {
    id: 'integration',
    title: 'ComeHome AI — Intelligent Property Discovery',
    subtitle: 'Turning scattered property listings into intelligent, human-centered discovery paths',
    description: 'A next-generation property recommendation engine that blends real estate data, behavioral insights, and AI-driven personalization into one seamless home-finding experience.',
    problem: {
      title: 'The Problem',
      description: 'Real estate buyers often struggle with: Inconsistent property information, Outdated listings across portals, Manual filtering and repetitive searches, No personalization based on preferences, Zero central management for developers, Poor quality images and missing details. The industry lacked a smart engine that could understand user intent, refine recommendations, and unify developer-side management. ComeHome AI was engineered to become that intelligent layer.'
    },
    userBase: {
      title: 'User Base',
      description: 'The platform supports three distinct personas: Home Buyers — Searching based on budget, location, layout, lifestyle preferences, Want clarity, visuals, and trustworthy information. Property Developers & Agents — Upload properties, images, amenities, and pricing, Track visibility, leads, and buyer behavior. Admin & Operations Teams — Oversee listing quality, Manage verifications, Control recommendation logic and system health. The system balances ease-of-use for buyers with powerful tools for developers.'
    },
    approach: {
      title: 'Our Approach',
      description: 'We engineered ComeHome AI with three pillars: 1. A Smart Recommendation Engine — Powered by behavioral signals: Search patterns, Interaction heatmaps, Saved preferences, Budget sensitivity, Geolocation proximity. 2. A Structured Listing Management System — Properties follow strict schemas: Location, Square footage, Amenities, Pricing, Availability, Photos and unit plans. 3. A Visual, Human-Centric Experience — The UI emphasizes: Image-first navigation, Comparisons, Map overlays, Quick filters, Interactive floor plans. The result: an intelligent real estate journey.'
    },
    detailedAnalysis: {
      title: 'The Full Story',
      paragraphs: [
        'Real estate browsing is inherently overwhelming. Buyers jump between apps, chat with agents, revisit PDFs, and only then form decisions. ComeHome AI set out to collapse this entire journey into one cohesive, intelligent platform.',
        'Properties were standardized using a structured metadata layer: Bedrooms, bathrooms, carpet area, Lifestyle tags, Commute-focused filters, School/hospital proximity, Developer trust score. This allowed the recommendation engine to operate with precision.'
      ],
      sections: [
        {
          title: 'AI-Powered Personalization',
          paragraphs: [
            'The system learns from: Filtering trends, Click-through patterns, Property dwell time, Budget elasticity, Spatial preferences (radius expansion). As users explore, the model continuously refines recommendations.'
          ]
        },
        {
          title: 'Developer & Agent Console',
          paragraphs: [
            'We built a powerful backend console: Bulk property import, Automated quality checks, Image optimization, Lead pipeline, Developer-level analytics, Feature property controls, Availability calendar. It became a modern operating system for developer teams.'
          ]
        },
        {
          title: 'Dynamic Search & Map Engine',
          paragraphs: [
            'Search results aren\'t static — they respond in real time: Map-based "Live Tile Updates", Dynamic scoring, Alternate recommendations, Highlighting unexpected fits the user might love, Micro interactions to smooth complex queries. The platform reimagines how people "scroll" for homes.'
          ]
        },
        {
          title: 'Performance Engineering',
          paragraphs: [
            'To deliver instant results: Queries were pre-indexed, Caching layers accelerated repeat searches, Images were compressed intelligently, Property data was served from distributed nodes. The system remained fast even at high traffic volumes.'
          ]
        }
      ],
      quote: 'Real estate isn\'t just data — it\'s emotion, context, and intuition. ComeHome AI brings all three together through intelligent engineering.'
    },
    workflow: [
      {
        step: '01',
        title: 'Discovery & Real Estate Behavior Mapping',
        duration: 'Week 1-2',
        description: 'We interviewed buyers, agents, and brokers to map behavior: Decision triggers, Painful browsing moments, Trust blockers, Visualization gaps.',
        deliverables: ['Persona matrices', 'Feature prioritization', 'Data architecture blueprint'],
        color: 'blue'
      },
      {
        step: '02',
        title: 'UX & Information Flow Design',
        duration: 'Week 3-5',
        description: 'Our UX plan introduced: Visual-first property cards, Sticky comparison tray, Preference-learning indicators, Location-based clustering, Amenity icons, Instant map + list hybrid browsing. Wireframes were refined into 60+ polished layouts.',
        deliverables: ['Visual-first UI design', 'Comparison system', 'Map integration', '60+ polished layouts'],
        color: 'purple'
      },
      {
        step: '03',
        title: 'AI Pipeline & Backend Engineering',
        duration: 'Week 6-10',
        description: 'We built: Preference engine, Scoring model, Search layers, Real-time property sync, Validation systems, Structured listing schemas. The backend became a robust property intelligence hub.',
        deliverables: ['AI recommendation engine', 'Search system', 'Property sync', 'Validation systems'],
        color: 'green'
      },
      {
        step: '04',
        title: 'Deployment, QA & Scalability',
        duration: 'Week 11-14',
        description: 'We implemented: Security hardening, Server-side rendering, Edge caching, Load testing, Automated monitoring, CI/CD workflows. The platform was deployed for frictionless scaling across regions.',
        deliverables: ['Security implementation', 'SSR optimization', 'Edge caching', 'CI/CD pipeline'],
        color: 'blue'
      }
    ],
    techStack: [
      { name: 'React.js / Next.js', description: 'Frontend with SSR', icon: 'code-2', iconColor: 'text-blue-400' },
      { name: 'Node.js + Express', description: 'API layer', icon: 'server', iconColor: 'text-green-400' },
      { name: 'MongoDB', description: 'Property metadata storage', icon: 'database', iconColor: 'text-emerald-400' },
      { name: 'OpenAI / ML Models', description: 'Preference learning', icon: 'zap', iconColor: 'text-yellow-400' },
      { name: 'AWS S3', description: 'Image storage', icon: 'hard-drive', iconColor: 'text-orange-400' },
      { name: 'Mapbox / Google Maps', description: 'Spatial intelligence', icon: 'smartphone', iconColor: 'text-purple-400' },
      { name: 'Nginx + Docker', description: 'Deployment & scaling', icon: 'wind', iconColor: 'text-cyan-400' }
    ],
    impact: [
      { value: '3x', label: 'Faster Property Discovery' },
      { value: '40%', label: 'More Developer Engagement' },
      { value: '70%', label: 'Reduction in Drop-off Rates' }
    ],
    liveUrl: '#'
  },
  {
    id: 'security',
    title: 'ShivID – Identity Reimagined',
    subtitle: 'A next-generation identity layer powering authentication, authorization, and user lifecycle management with enterprise-grade accuracy',
    description: 'A unified digital identity and access framework engineered for organizations that demand precision, reliability, and uncompromising security.',
    problem: {
      title: 'The Problem',
      description: 'Most internal systems relied on outdated spreadsheets, manual onboarding, and weak access control logic. Unauthorized access risks were growing, audit logs were incomplete, and multi-department workflows lacked consistency. There was no unified identity backbone. ShivID needed to introduce: Centralized authentication, Role-based user governance, Secure document storage, Multi-stage approval workflows, Immutable audit trails, Automated deactivation protocols. The organization required a security-first identity product that could evolve with internal policies and compliance requirements.'
    },
    userBase: {
      title: 'User Base',
      description: 'The platform supports: Employees who require seamless access to specific tools. Department heads who approve onboarding and control privileges. Admins who manage the IAM ecosystem. Compliance teams who rely on historical activity logs. Auditors who need structured, timestamped records. Each user type interacts with ShivID differently, demanding a layered and permission-aware experience.'
    },
    approach: {
      title: 'Our Approach',
      description: 'We architected ShivID around three principles: Zero Trust Access — assume no user or request is safe without verification. Modular Identity Structure — allow departments to create custom roles and access matrices. Compliance-Centric Architecture — store all actions, changes, and approvals with immutability. The goal was to create a single source of truth for identity governance across the organization.'
    },
    detailedAnalysis: {
      title: 'The Full Story',
      paragraphs: [
        'ShivID began as a simple authentication tool but evolved into a complete identity management suite after uncovering systemic issues across legacy workflows.',
        'Departments used siloed methods for identity: HR tracked staff via spreadsheets, IT handled email provisioning manually, and team leads granted approvals informally. This lack of coherence caused: Duplicate user accounts, Inconsistent permissions, Orphaned access privileges, Security blind spots. ShivID\'s architecture enforced a single identity graph across all roles, departments, and workflows.'
      ],
      sections: [
        {
          title: 'Engineering a Hardened Access Core',
          paragraphs: [
            'Security became the centerpiece. We built: JWT-based session control, Encryption layers for sensitive data, Automated token rotation, Multi-tenancy readiness for future scaling, Device fingerprinting hooks for future expansion. User sessions are monitored for anomalies, and suspicious patterns trigger access revocation automatically.'
          ]
        },
        {
          title: 'Document & Verification Layer',
          paragraphs: [
            'ShivID introduced a secure pipeline for: Employee onboarding documents, ID validation, Proof of designation, Digital signatures. All documents are encrypted at rest and transit, and every change is logged permanently.'
          ]
        },
        {
          title: 'Audit Story',
          paragraphs: [
            'Every action is recorded: Who accessed what, When permissions changed, Who approved, Which device was used, What data was modified. The audit trail acts as a legal-grade activity ledger, enabling compliance teams to resolve disputes in minutes, not hours.'
          ]
        },
        {
          title: 'Scalability First',
          paragraphs: [
            'ShivID is capable of handling: 100,000+ users, 10+ access levels per department, Zero-downtime deployments, Horizontal scaling with containerization. This ensures reliability even as the organization grows exponentially.'
          ]
        }
      ],
      quote: 'Identity is the core of every system. ShivID ensures it remains secure, consistent, and future-ready — no matter how large the organization grows.'
    },
    workflow: [
      {
        step: '01',
        title: 'Identity Discovery & Mapping',
        duration: 'Week 1-2',
        description: 'We analyzed all departments to construct a unified identity lifecycle: Pre-onboarding, Document verification, Role assignment, Access delegation, Exit workflows.',
        deliverables: ['Complete identity graph', 'Permission matrix', 'Department workflows'],
        color: 'blue'
      },
      {
        step: '02',
        title: 'UX for High-Stakes Security',
        duration: 'Week 3-4',
        description: 'Identity management requires clarity, not beauty. We designed: Clean, distraction-free interfaces, Role visibility screens, Permission toggles, Real-time activity indicators. Wireframes mapped every possible user journey to ensure zero ambiguity during critical actions.',
        deliverables: ['Security-focused UI design', 'Role management interfaces', 'Permission toggles', 'Activity dashboards'],
        color: 'purple'
      },
      {
        step: '03',
        title: 'Engineering the IAM Kernel',
        duration: 'Week 5-10',
        description: 'Core engineering work included: Auth server, Permission policies, Access-token lifecycle, Activity logs, Encryption and hashing, Document pipelines. We built ShivID as a fault-tolerant, API-driven IAM engine.',
        deliverables: ['Auth server', 'Permission engine', 'Token management', 'Document pipeline'],
        color: 'green'
      },
      {
        step: '04',
        title: 'Deployment & Hardening',
        duration: 'Week 11-14',
        description: 'To deliver enterprise-grade reliability: Hardened API endpoints, Load-balanced microservices, Backup pipelines, Encrypted S3 storage, Central log aggregator, CI/CD with automated vulnerability scanning. This architecture ensures ShivID remains secure, stable, and scalable.',
        deliverables: ['Hardened infrastructure', 'Load balancing', 'Encrypted storage', 'CI/CD pipeline'],
        color: 'blue'
      }
    ],
    techStack: [
      { name: 'React.js', description: 'Identity dashboards', icon: 'code-2', iconColor: 'text-blue-400' },
      { name: 'Node.js (Express)', description: 'Auth server & permission APIs', icon: 'server', iconColor: 'text-green-400' },
      { name: 'JWT + Bcrypt', description: 'Authentication & encryption', icon: 'zap', iconColor: 'text-yellow-400' },
      { name: 'MongoDB / PostgreSQL', description: 'User and activity storage', icon: 'database', iconColor: 'text-emerald-400' },
      { name: 'AWS S3', description: 'Encrypted document storage', icon: 'hard-drive', iconColor: 'text-orange-400' },
      { name: 'NGINX + Docker', description: 'Infrastructure readiness', icon: 'smartphone', iconColor: 'text-purple-400' },
      { name: 'GitHub Actions', description: 'CI/CD & automated scans', icon: 'wind', iconColor: 'text-cyan-400' }
    ],
    impact: [
      { value: '85%', label: 'Faster User Onboarding' },
      { value: '100%', label: 'Permission Accuracy' },
      { value: '60%', label: 'Reduction in Unauthorized Access' }
    ],
    liveUrl: 'https://www.shivaid.com/'
  },
  {
    id: 'esim-platform',
    title: 'eSIM Platform — Global Connectivity',
    subtitle: 'Reimagining how people connect — anywhere, anytime',
    description: 'A seamless telecom engine enabling instant eSIM activation, plan management, and cross-border connectivity with zero physical touchpoints.',
    problem: {
      title: 'The Problem',
      description: 'Tourism content for Ahmedabad existed across scattered blogs, offline brochures, and legacy portals that lacked structure, visual clarity, and real-time maintainability. Travelers struggled to plan coherent itineraries, and local tourism bodies had no modern CMS to showcase monuments, festivals, food culture, or hidden gems. The goal was to centralize everything into a fast, elegant, SEO-optimized platform that could scale as the city modernized.'
    },
    userBase: {
      title: 'User Base',
      description: 'The platform serves four major user personas: Domestic tourists searching for reliable first-time information. Foreign travelers needing structured, mobile-friendly itineraries. Heritage enthusiasts & students requiring accurate cultural context. Tourism administrators looking for a maintainable content system. Each persona required vastly different interaction flows, which shaped the UX strategy.'
    },
    approach: {
      title: 'Our Approach',
      description: 'We engineered Visit Ahmedabad as a content-driven experience platform, not just a brochure site. Our approach included: A modular CMS architecture enabling non-technical teams to update places, festivals, routes, and galleries effortlessly. A performance-first frontend capable of loading high-resolution images and long-form content under 1 second. A narrative-led UX that invites exploration through micro-interactions, transitions, and card-based discovery. Future-proof routing allowing expansion into AR tours, multilingual content, and interactive map layers.'
    },
    detailedAnalysis: {
      title: 'The Full Story',
      paragraphs: [
        'Visit Ahmedabad was never about building pages. It was about crafting a digital identity for a city.',
        'Early analysis showed that 70% of tourism searches revolve around: "Top places to visit", "Local food spots", "Heritage & culture", "One-day itinerary". But existing platforms lacked depth and failed to capture cultural nuance. Our solution introduced a hierarchical content system built around: Places, Categories, Experiences, Food Trails, Events, Itineraries. This structure allowed semantic SEO, internal linking flows, and predictable crawlers paths.'
      ],
      sections: [
        {
          title: 'Engineering the Experience',
          paragraphs: [
            'Static pages weren\'t enough — we engineered an immersive experience: Geographical mapping layers for future map-based navigation. Image compression pipeline enabling fast loads without compromising travel photography. Pre-rendered content paths ensuring instant page transitions. Intuitive micro animations grounding user attention on what matters.'
          ]
        },
        {
          title: 'The Storytelling Layer',
          paragraphs: [
            'Travel is emotional. So we embedded narrative design: Each monument page follows a pattern: History → Why Visit → Best Time → Local Insights → Gallery. Food pages highlight origin stories and must-try dishes. Neighborhood guides offer walking paths and curated insights. This turned information into a discovery journey.'
          ]
        },
        {
          title: 'Scalability',
          paragraphs: [
            'The system can handle: 1,000+ locations, Multi-language expansion, Event listing calendars, Tourism partner pages, API-driven integrations. The architecture was engineered to grow with the city\'s future.'
          ]
        }
      ],
      quote: 'Visit Ahmedabad reimagines city tourism by bringing together immersive visuals, hyper-organized data, personalized discovery paths, and lightning-fast performance.'
    },
    workflow: [
      {
        step: '01',
        title: 'Discovery & City Immersion',
        duration: 'Week 1-2',
        description: 'We spent two weeks gathering datasets from tourism bodies, municipal archives, and local guides.',
        deliverables: ['Persona mapping', 'Content map', 'Cultural tone-of-voice guide'],
        color: 'blue'
      },
      {
        step: '02',
        title: 'UX & Information Architecture',
        duration: 'Week 3-4',
        description: 'Wireframes for 40+ screens were created to structure navigation into intuitive funnels.',
        deliverables: ['Category-based navigation system', 'Landmark detail page templates', 'Reusable content modules', 'SEO-driven URL strategy'],
        color: 'purple'
      },
      {
        step: '03',
        title: 'UI/UX Design',
        duration: 'Week 5-6',
        description: 'Inspired by Ahmedabad\'s red sandstone and modern skyline, we designed a warm yet contemporary visual identity.',
        deliverables: ['Color palette rooted in heritage', 'Immersive gallery components', 'Smooth transitions & scroll experiences'],
        color: 'green'
      },
      {
        step: '04',
        title: 'Development & Optimization',
        duration: 'Week 7-10',
        description: 'A performance-first engineering sprint delivered component-driven React architecture, pre-rendering for 0.9s average load time, cloud image pipeline, and CMS integration for seamless updates.',
        deliverables: ['Component-driven React architecture', 'Pre-rendering optimization', 'Cloud image pipeline', 'CMS integration'],
        color: 'blue'
      }
    ],
    techStack: [
      { name: 'React 18', description: 'Frontend Framework', icon: 'code-2', iconColor: 'text-blue-400' },
      { name: 'Tailwind CSS', description: 'Rapid, scalable styling', icon: 'wind', iconColor: 'text-cyan-400' },
      { name: 'Node.js + Express', description: 'Backend services', icon: 'server', iconColor: 'text-green-400' },
      { name: 'MySQL', description: 'Structured content storage', icon: 'database', iconColor: 'text-blue-500' },
      { name: 'Cloudinary', description: 'Image optimization', icon: 'smartphone', iconColor: 'text-purple-400' },
      { name: 'Map APIs', description: 'Location intelligence', icon: 'hard-drive', iconColor: 'text-orange-400' },
      { name: 'Vercel', description: 'Deployment edge network', icon: 'zap', iconColor: 'text-yellow-400' }
    ],
    impact: [
      { value: '0.9s', label: 'Average Load Time' },
      { value: '+120%', label: 'User Engagement' },
      { value: '98/100', label: 'SEO Score' }
    ],
    liveUrl: 'https://esimfox.com/en'
  },
  {
    id: 'evoke-dholavira',
    title: 'Evoke Dholavira — A Digital Window',
    subtitle: 'Where archaeology meets digital artistry',
    description: 'An immersive storytelling platform that brings the UNESCO World Heritage Site of Dholavira to life through modern web engineering and experience design.',
    problem: {
      title: 'The Problem',
      description: 'Information about Dholavira was scattered across academic papers, outdated blogs, tourism brochures, and museum exhibitions. Visitors lacked a cohesive digital space that: Explained the site\'s significance, Offered structured visual storytelling, Provided interactive timelines, Clarified archaeological zones, Guided tourists through the excavation layout. The world needed a platform that could translate ancient history into a modern, immersive digital narrative.'
    },
    userBase: {
      title: 'User Base',
      description: 'We designed Evoke Dholavira for three core user groups: Tourists & Travelers — Want simple explanations, visuals, guides, and site maps. Students & Researchers — Need in-depth content, excavations, timelines, and technical details. Tourism Authorities & Curators — Require an official digital presence, A CMS-friendly structure for updates, A place to showcase the site\'s global importance. Each persona demanded clarity, storytelling, and accuracy.'
    },
    approach: {
      title: 'Our Approach',
      description: 'We approached Evoke Dholavira as a cultural-tech hybrid, blending: Documentary-style narration, Archaeological rigor, Clean, modern UI, Mobile-friendly browsing, SEO-focused content organization, Image-driven storytelling, Interactive guides. The challenge was to create a digital product that felt both culturally respectful and technologically refined.'
    },
    detailedAnalysis: {
      title: 'The Full Story',
      paragraphs: [
        'Evoke Dholavira became a deeply researched project. To digitize a 4,000-year-old civilization, we needed a methodical and respectful approach.',
        'We mapped the entire Harappan-era site into digital modules: The Citadel, The Middle Town, The Lower Town, Water Reservoirs, Burial Grounds, Artefacts and Excavation Findings, Timelines and cultural evolution, Visitor guides and best routes. Each section was woven together to form a coherent learning journey.'
      ],
      sections: [
        {
          title: 'Experience Design',
          paragraphs: [
            'We wanted the platform to feel: Calm, Warm, Earthy, Archaeologically authentic. The UI drew inspiration from Harappan architecture: Sandstone color palette, Sharp geometrical lines, Grid-based layouts mimicking excavation plans, Soft transitions inspired by desert landscapes. This visual identity honored the ancient roots while retaining a premium digital feel.'
          ]
        },
        {
          title: 'Interactive Exploration Layer',
          paragraphs: [
            'We incorporated: Illustrative maps, Section-based storytelling, Scroll-triggered animations, Timelines for historical phases, Infographics for understanding water systems, Image galleries optimized for mobile. This allowed visitors to explore Dholavira without stepping foot on-site, yet feel the cultural weight of the place.'
          ]
        },
        {
          title: 'Performance Engineering',
          paragraphs: [
            'Heritage platforms often rely on heavy images and rich content. To ensure smooth browsing: Images were compressed intelligently, Lazy loading improved scroll speed, Pre-rendered routes enabled fast navigation, Components were optimized for mobile-first access, Content Delivery Networks improved global load times. The result: an elegant, lightweight digital museum.'
          ]
        }
      ],
      quote: 'History deserves a digital presence that honors its depth. Evoke Dholavira brings ancient stories to life with precision, respect, and immersive design.'
    },
    workflow: [
      {
        step: '01',
        title: 'Historical Research & Content Blueprinting',
        duration: 'Week 1-2',
        description: 'We collaborated with domain experts, studied archaeological mappings, and reviewed historical literature.',
        deliverables: ['Content sitemap', 'Artifact classification', 'Visual theme guidelines'],
        color: 'blue'
      },
      {
        step: '02',
        title: 'UX for Cultural Storytelling',
        duration: 'Week 3-4',
        description: 'We designed highly visual flows: Sectioned storytelling layouts, Highlighted excavation maps, Minimalist navigation, Long-form content structures, Dedicated modules for facts, findings, and routes. Wireframes ensured clarity for both casual readers and deep learners.',
        deliverables: ['Storytelling layouts', 'Excavation maps', 'Navigation design'],
        color: 'purple'
      },
      {
        step: '03',
        title: 'UI Design Fusion: Heritage × Modern',
        duration: 'Week 5-6',
        description: 'Our design direction emphasized: Sandstone-inspired palette, Subtle textures echoing excavation layers, Cinematic headers, High-resolution imagery, Typography that balances modern readability with cultural tone. The interface feels premium without overshadowing the heritage content.',
        deliverables: ['Heritage-inspired design system', 'Color palette', 'Typography system'],
        color: 'green'
      },
      {
        step: '04',
        title: 'Development & Deployment',
        duration: 'Week 7-10',
        description: 'The engineering approach included: Component-based React architecture, SEO-optimized page structure, Fast image rendering, Efficient routing, Clean CMS integration for updates. Deployment delivered high-speed performance globally.',
        deliverables: ['React architecture', 'Image optimization', 'CMS integration'],
        color: 'blue'
      }
    ],
    techStack: [
      { name: 'React.js', description: 'Experience-driven frontend', icon: 'code-2', iconColor: 'text-blue-400' },
      { name: 'Tailwind CSS', description: 'Flexible and clean styling system', icon: 'wind', iconColor: 'text-cyan-400' },
      { name: 'Node.js + Express', description: 'API and CMS connectivity', icon: 'server', iconColor: 'text-green-400' },
      { name: 'Cloudinary', description: 'Optimized media delivery', icon: 'smartphone', iconColor: 'text-purple-400' },
      { name: 'MySQL / MongoDB', description: 'Structured content storage', icon: 'database', iconColor: 'text-emerald-400' },
      { name: 'Vercel', description: 'Global edge deployment', icon: 'zap', iconColor: 'text-yellow-400' }
    ],
    impact: [
      { value: '150%', label: 'Increase in User Engagement' },
      { value: '0.9s', label: 'Load Time' },
      { value: '100%', label: 'SEO Improvements' }
    ],
    liveUrl: 'https://app.evokedholavira.com/'
  },
  {
    id: 'bharat-upline',
    title: 'Bharat Upline — India\'s Utility Service Engine',
    subtitle: 'Powering India\'s everyday transactions through a robust, scalable digital backbone',
    description: 'A unified multi-service platform enabling recharge, bill payments, wallet settlements, and digital distribution for consumers and agents across India.',
    problem: {
      title: 'The Problem',
      description: 'Utility service providers in India face chronic fragmentation: Different APIs for each service, Unreliable transaction settlements, Zero transparency for failed transactions, Manual reconciliation across partners, Slow wallet updates and delayed refunds, No enterprise-grade agent management system. Users needed simplicity. Agents needed stability. Partners needed accountability. The solution required a centralized, tamper-proof, real-time digital service engine.'
    },
    userBase: {
      title: 'User Base',
      description: 'Bharat Upline serves a wide operational spectrum: Consumers — Quick bill pay, Recharges, Real-time status, Instant refunds when needed. Retail Agents & Distributors — Wallet additions, Commission tracking, Transaction history, Multi-service distribution. Admins & Finance Teams — Settlement pipelines, Transaction monitoring, Service health dashboards, Partner API oversight. Each user type interacts with the platform at different intensities, demanding performance, clarity, and trust.'
    },
    approach: {
      title: 'Our Approach',
      description: 'We architected Bharat Upline as a multi-rail digital transaction engine, with: Unified API layer for all services, Real-time transaction orchestration, Wallet + commission system, Fail-safe retry mechanisms, Distributor + retailer hierarchies, Secure logging and reconciliation modules, Analytics dashboards for visibility. This ensured high availability even during peak transactional loads.'
    },
    detailedAnalysis: {
      title: 'The Full Story',
      paragraphs: [
        'The Indian utility service ecosystem is inherently volatile — telecom APIs fail randomly, electricity boards maintain inconsistent protocols, and transaction statuses often arrive late. Our job was not just to build a platform, but to design a resilient financial transaction kernel.',
        'We created a unified engine capable of: 1. Handling Every Service Type — Prepaid recharge, DTH, Landline, Electricity, Gas, Broadband, FASTag, Insurance renewals, And more. Each service mapped into a single, predictable orchestration flow. 2. Real-Time Status Syncing — We integrated: Callback listeners, Webhooks, Polling fallback, Delayed settlement handlers, Multi-retry queues. The system automatically resolves ambiguous states like PENDING or TIMEOUT.'
      ],
      sections: [
        {
          title: 'Wallet & Commission Engine',
          paragraphs: [
            'Agents and distributors rely heavily on real-time wallet health. We engineered: Balance freeze policies, Instant deductions, Auto refunds on failed transactions, Tiered commission slabs, Distributor → Retailer flows. This engine alone reduced support tickets significantly.'
          ]
        },
        {
          title: 'API Reliability & Failover Strategy',
          paragraphs: [
            'We built failover protocols: Tier-1 partner → Tier-2 fallback, Automatic rerouting on failure spikes, Smart retries, Transaction duplication prevention, Partner health monitoring. This ensured transaction success rates remained consistently high even on unstable external APIs.'
          ]
        },
        {
          title: 'Admin & Analytics Console',
          paragraphs: [
            'The admin system introduced: Real-time transaction heatmaps, API failure analysis, Commission rule editor, Wallet settlement history, Service uptime metrics, Escalation workflows. The console allowed operations teams to take quick, informed decisions.'
          ]
        },
        {
          title: 'Performance Engineering',
          paragraphs: [
            'To handle thousands of daily transactions: Redis caching prevented bottlenecks, Queue workers handled spikes, Horizontal scaling ensured reliability, Database indexes kept queries fast, CDN minimized UI delays. The system is engineered to handle 10x traffic without architectural changes.'
          ]
        }
      ],
      quote: 'In a country where millions rely on digital utility services every day, Bharat Upline brings reliability, structure, and speed to the heart of essential transactions.'
    },
    workflow: [
      {
        step: '01',
        title: 'Ecosystem Study & Data Mapping',
        duration: 'Week 1-2',
        description: 'We analyzed APIs from various telecom operators, electricity boards, and financial gateways.',
        deliverables: ['Unified data schema', 'Retry strategies', 'Wallet structure framework'],
        color: 'blue'
      },
      {
        step: '02',
        title: 'UX for Financial Clarity',
        duration: 'Week 3-4',
        description: 'We designed transparent flows: Clear transaction states, Intuitive wallet dashboard, Commission previews, Categorized service screens, Simple bill entry flows. A user must always know what happened, why, and what to do next.',
        deliverables: ['Transaction flow design', 'Wallet dashboard', 'Commission system UI'],
        color: 'purple'
      },
      {
        step: '03',
        title: 'Building the Transaction Kernel',
        duration: 'Week 5-10',
        description: 'Engineering work included: Multi-service API layer, Wallet system, Status synchronization engine, Commission calculator, Admin modules, Retry queues. This formed the beating heart of Bharat Upline.',
        deliverables: ['Transaction engine', 'Wallet system', 'Commission engine', 'Retry system'],
        color: 'green'
      },
      {
        step: '04',
        title: 'Deployment & Reliability Hardening',
        duration: 'Week 11-14',
        description: 'We ensured: API monitoring, Containerized deployment, Error alerts, Backups, High-availability clustering, Real-time logs. The system is built like a financial-grade platform.',
        deliverables: ['Monitoring system', 'Containerization', 'High-availability setup'],
        color: 'blue'
      }
    ],
    techStack: [
      { name: 'Node.js + Express', description: 'Transaction orchestration engine', icon: 'server', iconColor: 'text-green-400' },
      { name: 'React.js / Next.js', description: 'Consumer + Agent interfaces', icon: 'code-2', iconColor: 'text-blue-400' },
      { name: 'MongoDB / PostgreSQL', description: 'Transaction and wallet data', icon: 'database', iconColor: 'text-emerald-400' },
      { name: 'Redis', description: 'Queues and caching', icon: 'smartphone', iconColor: 'text-purple-400' },
      { name: 'Third-party APIs', description: 'Telecom & utility services', icon: 'zap', iconColor: 'text-yellow-400' },
      { name: 'AWS / DigitalOcean', description: 'Reliable cloud deployment', icon: 'hard-drive', iconColor: 'text-orange-400' },
      { name: 'Docker + PM2', description: 'Horizontal scaling and process management', icon: 'wind', iconColor: 'text-cyan-400' }
    ],
    impact: [
      { value: '90%', label: 'Fewer Failed Transactions' },
      { value: '2x', label: 'Faster Settlement' },
      { value: '60%', label: 'Reduction in Support Load' }
    ],
    liveUrl: 'https://bharat-upline-fe-main.vercel.app/login'
  },
  {
    id: 'ayris-assure',
    title: 'Ayris Assure — Precision in Card Compliance',
    subtitle: 'Engineering trust, transparency, and total governance in financial card testing',
    description: 'A mission-critical platform enabling banks, fintechs, and payment institutions to manage issuer test cards, validate card controls, and maintain strict compliance across complex card ecosystems.',
    problem: {
      title: 'The Problem',
      description: 'Before Ayris Assure, test card management was chaotic: Card data lived in Excel sheets, No unified control over active or blocked cards, SME and Manager approvals were inconsistent, Card control updates weren\'t tracked, Auto-release rules weren\'t automated, Errors during manual card updates caused compliance issues, No visibility into card history or responsible users. Financial institutions needed a secure, rule-driven, fully auditable system to govern all issuer test cards across departments.'
    },
    userBase: {
      title: 'User Base',
      description: 'The system supports a multi-tier identity structure: Profile Editor — Creates profiles, Uploads matching schema JSON, Adds cards to valid profiles. SME — Validates card controls, Approves or rejects profiles, Performs updates on assigned card parameters. Manager — Has final approval authority, Manages card release and escalations. Admins — Configure release logic, Manage issuers, features, products, Oversee audit and system health. Third-party test teams (via exports) — Consume valid test cards for sandbox and QA cycles. Each role interacts through tightly restricted access logic.'
    },
    approach: {
      title: 'Our Approach',
      description: 'We engineered Ayris Assure with absolute precision: A profile-based card matching engine, JSON-driven feature-product-issuer validation, Card lifecycle automation, Auto-block → auto-active → auto-release flows, Cron jobs for date-based triggers, Multi-step review + approval pipelines, Exhaustive audit logs with timestamped actions. The architecture ensures zero ambiguity, zero duplicates, and zero compliance deviations.'
    },
    detailedAnalysis: {
      title: 'The Full Story',
      paragraphs: [
        'Ayris Assure emerged from deep operational chaos — hundreds of test cards circulating without visibility, undocumented changes, and no framework to ensure testing integrity. This required a complete architectural rethinking.',
        'Every card is assigned under a Profile, defined by three parameters: Feature Name, Product Name, Issuer Name. The system validates profile creation by ensuring: Matching combination exists, JSON schema uploaded is valid, No duplicate active profiles exist. If a new profile shares the same combination, the last active profile auto-archives — preserving compliance and preventing duplicate ecosystems.'
      ],
      sections: [
        {
          title: 'Card Lifecycle Intelligence',
          paragraphs: [
            'Card States: Assigned, Active, Blocked, Archived, Released (auto). Card behavior is governed by: Start Date, End Date, Block Reason, Activation rules, SME-level control updates. Automation: Cron jobs monitor all cards daily: If End Date = today, card moves to Blocked. If Blocked but Start Date = today, card reactivates. If End Date expired by 1 day, system auto-releases the card. Transaction count reduces OTB after each usage. OTB syncs daily with third-party databases. The result: a self-governing card ecosystem.'
          ]
        },
        {
          title: 'SME Control Update Workflow',
          paragraphs: [
            'Only SME can update: Merchant category, Control type, Velocity limits, OTB, Sub-controls, Flags (cross-border, ecom, chip, swipe). Each change triggers logging: User, Time, Old value → New value, Reason. This ensures full traceability.'
          ]
        },
        {
          title: 'Profile Approval Flow',
          paragraphs: [
            'Profile Editor creates a new Profile. Adds matching JSON. Adds Cards via structured form. Profile assigned → SME validation. SME approves or rejects. Manager finalizes if required. Once approved, the profile becomes test-ready.'
          ]
        },
        {
          title: 'Card Assignment & History Visibility',
          paragraphs: [
            'Every card includes: Lifecycle history, Ticket-level notes, Assigned SME, Release history, Timestamps for every state change. Test teams finally gain a single view of truth.'
          ]
        }
      ],
      quote: 'When financial products require absolute precision, Ayris Assure delivers a system built for clarity, control, and end-to-end compliance.'
    },
    workflow: [
      {
        step: '01',
        title: 'Discovery & Operational Mapping',
        duration: 'Week 1-2',
        description: 'We participated in workflow interviews across compliance, QA, card issuance, and SME teams to map the true lifecycle of test cards.',
        deliverables: ['Role matrices', 'Card state diagrams', 'Auto-release logic', 'Profile creation blueprint'],
        color: 'blue'
      },
      {
        step: '02',
        title: 'UX & Process Clarity',
        duration: 'Week 3-4',
        description: 'The UI required zero-friction precision: High-clarity status tags, Validations preventing wrong card assignment, JSON upload panel, Control update drawer, SME-only edit restrictions, Timeline-based history viewer. Complex logic presented in clean, composable screens.',
        deliverables: ['Status system UI', 'JSON upload interface', 'Control update UI', 'History viewer'],
        color: 'purple'
      },
      {
        step: '03',
        title: 'Card Intelligence Engine Development',
        duration: 'Week 5-10',
        description: 'Engineering focused on: Profile matching logic, Cron-driven automation, Card state engine, Multi-role middleware, Audit log infrastructure, OTB sync, Release pipeline. The backend acts as the compliance brain of the organization.',
        deliverables: ['Profile matching engine', 'Cron automation', 'Card state engine', 'Audit system'],
        color: 'green'
      },
      {
        step: '04',
        title: 'Deployment & Compliance Hardening',
        duration: 'Week 11-14',
        description: 'We delivered: Encrypted card storage, Secure RBAC implementation, Daily backup rotation, Notification system, Real-time error monitoring, Multi-environment sandbox support. Ayris Assure is now hardened for financial-grade reliability.',
        deliverables: ['Encryption implementation', 'RBAC system', 'Backup system', 'Monitoring'],
        color: 'blue'
      }
    ],
    techStack: [
      { name: 'React.js (Next.js optional)', description: 'Admin dashboards', icon: 'code-2', iconColor: 'text-blue-400' },
      { name: 'Node.js (Express)', description: 'Card lifecycle engine', icon: 'server', iconColor: 'text-green-400' },
      { name: 'MongoDB', description: 'Card data + logs', icon: 'database', iconColor: 'text-emerald-400' },
      { name: 'Cron + Node Schedulers', description: 'Automated card-state management', icon: 'zap', iconColor: 'text-yellow-400' },
      { name: 'JWT + RBAC middleware', description: 'Role security', icon: 'smartphone', iconColor: 'text-purple-400' },
      { name: 'AWS S3', description: 'JSON schema and document storage', icon: 'hard-drive', iconColor: 'text-orange-400' },
      { name: 'Docker + Nginx', description: 'Production deployment', icon: 'wind', iconColor: 'text-cyan-400' }
    ],
    impact: [
      { value: '100%', label: 'Traceability for Every Card' },
      { value: '95%', label: 'Reduction in Manual Oversight' },
      { value: '100%', label: 'Compliance-Grade Audit Integrity' }
    ],
    liveUrl: 'https://assure-stage.ayrisglobal.com/'
  },
  {
    id: 'ai-diagnostics',
    title: 'AI Diagnostics Scanner — Interpreting Health',
    subtitle: 'Where medical data becomes clarity, and clarity becomes faster diagnosis',
    description: 'A next-generation medical analysis engine that reads X-rays, blood reports, and diagnostic documents through AI — delivering structured results, probability-based findings, and actionable doctor-ready summaries.',
    problem: {
      title: 'The Problem',
      description: 'Medical teams faced recurring challenges: X-ray interpretation requires radiologist availability, Blood reports vary widely in format and terminology, Doctors lose time scanning for abnormal values, Patients cannot understand their own reports, No unified system for structured report extraction, Manual interpretation is slow during high-volume OPD days. Healthcare needed a fast, consistent, AI-driven pre-diagnosis assistant.'
    },
    userBase: {
      title: 'User Base',
      description: 'The platform supports three major user groups: Doctors & Radiologists — AI pre-reads reports, Highlights abnormalities, Saves time on initial evaluation. Hospitals & Labs — Automate intake, Reduce manual errors, Speed up patient flow. Patients — Upload report images, Receive easy-to-understand summaries, Know whether values fall in normal ranges. The system balances clinical accuracy with accessible explanations.'
    },
    approach: {
      title: 'Our Approach',
      description: 'We designed the AI Scanner as a dual-pipeline diagnostic engine: Pipeline 1: X-ray Image Analyzer — Detects anomalies, Highlights regions of concern, Provides probability-based findings, Suggests potential medical interpretations, Supports chest X-ray, limb fractures, dental X-ray, and more. Pipeline 2: Blood Report NLP Extractor — OCR + NLP to extract table values, Detects abnormal ranges, Summarizes potential conditions, Flags critical indicators immediately. The architecture emphasizes speed, accuracy, and medical reliability.'
    },
    detailedAnalysis: {
      title: 'The Full Story',
      paragraphs: [
        'This project required building a system that respects medical nuance, handles unstructured data, and delivers reliable insights.',
        'We implemented: CNN + Vision Transformer models (for chest and bone X-rays), Heatmaps that visualize areas of concern, Severity scoring, Multi-class detection: Pneumonia, TB indications, Lung opacity, Cardiomegaly, Fractures, Dental decay markers. Each image undergoes: Pre-processing, Contrast enhancement, Noise correction, AI inference, Result scoring. This produces a structured radiology insight.'
      ],
      sections: [
        {
          title: 'Blood Report Interpretation Engine',
          paragraphs: [
            'Blood reports vary massively — fonts, lab names, tables, handwritten notes. We built a robust extraction pipeline: OCR Phase — Layout-aware OCR, Table reconstruction, Detection of units (mg/dL, %, x10^9/L etc.). NLP Phase — Value-to-range comparison, Medical dictionary classification, Critical flagging, Named-entity extraction. Interpretation Phase — AI scans for patterns such as: Infection likelihood, Anemia indicators, Thyroid abnormalities, Diabetes risk, Liver/Kidney red flags. The system outputs a doctor-friendly and patient-friendly summary.'
          ]
        },
        {
          title: 'Clinical Summary Generator',
          paragraphs: [
            'The system compiles: "Findings", "Possible Causes", "Recommended Next Steps", "Urgency level". This pre-analysis reduces doctor workload and improves patient clarity.'
          ]
        },
        {
          title: 'Compliance & Safety',
          paragraphs: [
            'Given the domain, we implemented: HIPAA-aligned data handling, Encrypted uploads, No long-term storage (unless enabled), Secure deletion, Audit logs, Role-based access for hospitals. Safety is built into the core.'
          ]
        }
      ],
      quote: 'Healthcare deserves tools that think. The AI Diagnostics Scanner delivers clarity, consistency, and clinical intelligence — instantly.'
    },
    workflow: [
      {
        step: '01',
        title: 'Medical Workflow Mapping',
        duration: 'Week 1-2',
        description: 'We worked with clinicians to map: X-ray reading flows, Pathology interpretation patterns, Red-flag thresholds, User personas, Patient understanding levels. This informed the UX and AI behavior.',
        deliverables: ['Medical workflow maps', 'Red-flag definitions', 'User personas'],
        color: 'blue'
      },
      {
        step: '02',
        title: 'UI for Clinical Clarity',
        duration: 'Week 3-4',
        description: 'We built: Clean upload interface, Color-coded value indicators, Heatmap overlays on X-rays, Simple normal vs abnormal indicators, Doctor-level view and patient-level view. Every screen is engineered for speed and precision.',
        deliverables: ['Upload interface', 'Heatmap visualization', 'Value indicators', 'Dual-view system'],
        color: 'purple'
      },
      {
        step: '03',
        title: 'AI Kernel Engineering',
        duration: 'Week 5-10',
        description: 'Core features include: X-ray anomaly detector, Blood range analyzer, OCR correction engine, Multi-language support, Summary generation LLM pipelines, Confidence scoring. This forms the intelligence backbone.',
        deliverables: ['X-ray AI model', 'Blood report NLP', 'OCR system', 'Summary generator'],
        color: 'green'
      },
      {
        step: '04',
        title: 'Testing, QA & Deployment',
        duration: 'Week 11-14',
        description: 'We ensured: Medical dataset validation, False positive & false negative analysis, Latency optimization, API-based modular deployment, Secure multi-user access. The system is reliable for clinic-level use.',
        deliverables: ['Medical validation', 'Performance optimization', 'Security implementation'],
        color: 'blue'
      }
    ],
    techStack: [
      { name: 'Python (FastAPI)', description: 'AI inference backend', icon: 'code-2', iconColor: 'text-blue-400' },
      { name: 'TensorFlow / PyTorch', description: 'X-ray & vision models', icon: 'zap', iconColor: 'text-yellow-400' },
      { name: 'OpenAI / Medical LLMs', description: 'Report summarization', icon: 'server', iconColor: 'text-green-400' },
      { name: 'OCR (Tesseract / PaddleOCR)', description: 'Report extraction', icon: 'smartphone', iconColor: 'text-purple-400' },
      { name: 'Supabase / PostgreSQL', description: 'Optional secure data storage', icon: 'database', iconColor: 'text-emerald-400' },
      { name: 'React.js / Next.js', description: 'User dashboard', icon: 'wind', iconColor: 'text-cyan-400' },
      { name: 'AWS S3', description: 'Encrypted image storage', icon: 'hard-drive', iconColor: 'text-orange-400' },
      { name: 'Docker + GPU Runtime', description: 'Scalable inference', icon: 'hard-drive', iconColor: 'text-blue-300' }
    ],
    impact: [
      { value: '80%', label: 'Reduction in Screening Time' },
      { value: 'High', label: 'Confidence Anomaly Detection' },
      { value: 'Instant', label: 'Report Extraction' }
    ],
    liveUrl: '#'
  },
  {
    id: 'security-2',
    title: 'ShivID – Identity Reimagined',
    subtitle: 'A next-generation identity layer powering authentication, authorization, and user lifecycle management with enterprise-grade accuracy',
    description: 'A unified digital identity and access framework engineered for organizations that demand precision, reliability, and uncompromising security.',
    problem: {
      title: 'The Problem',
      description: 'Most internal systems relied on outdated spreadsheets, manual onboarding, and weak access control logic. Unauthorized access risks were growing, audit logs were incomplete, and multi-department workflows lacked consistency. There was no unified identity backbone. ShivID needed to introduce: Centralized authentication, Role-based user governance, Secure document storage, Multi-stage approval workflows, Immutable audit trails, Automated deactivation protocols. The organization required a security-first identity product that could evolve with internal policies and compliance requirements.'
    },
    userBase: {
      title: 'User Base',
      description: 'The platform supports: Employees who require seamless access to specific tools. Department heads who approve onboarding and control privileges. Admins who manage the IAM ecosystem. Compliance teams who rely on historical activity logs. Auditors who need structured, timestamped records. Each user type interacts with ShivID differently, demanding a layered and permission-aware experience.'
    },
    approach: {
      title: 'Our Approach',
      description: 'We architected ShivID around three principles: Zero Trust Access — assume no user or request is safe without verification. Modular Identity Structure — allow departments to create custom roles and access matrices. Compliance-Centric Architecture — store all actions, changes, and approvals with immutability. The goal was to create a single source of truth for identity governance across the organization.'
    },
    detailedAnalysis: {
      title: 'The Full Story',
      paragraphs: [
        'ShivID began as a simple authentication tool but evolved into a complete identity management suite after uncovering systemic issues across legacy workflows.',
        'Departments used siloed methods for identity: HR tracked staff via spreadsheets, IT handled email provisioning manually, and team leads granted approvals informally. This lack of coherence caused: Duplicate user accounts, Inconsistent permissions, Orphaned access privileges, Security blind spots. ShivID\'s architecture enforced a single identity graph across all roles, departments, and workflows.'
      ],
      sections: [
        {
          title: 'Engineering a Hardened Access Core',
          paragraphs: [
            'Security became the centerpiece. We built: JWT-based session control, Encryption layers for sensitive data, Automated token rotation, Multi-tenancy readiness for future scaling, Device fingerprinting hooks for future expansion. User sessions are monitored for anomalies, and suspicious patterns trigger access revocation automatically.'
          ]
        },
        {
          title: 'Document & Verification Layer',
          paragraphs: [
            'ShivID introduced a secure pipeline for: Employee onboarding documents, ID validation, Proof of designation, Digital signatures. All documents are encrypted at rest and transit, and every change is logged permanently.'
          ]
        },
        {
          title: 'Audit Story',
          paragraphs: [
            'Every action is recorded: Who accessed what, When permissions changed, Who approved, Which device was used, What data was modified. The audit trail acts as a legal-grade activity ledger, enabling compliance teams to resolve disputes in minutes, not hours.'
          ]
        },
        {
          title: 'Scalability First',
          paragraphs: [
            'ShivID is capable of handling: 100,000+ users, 10+ access levels per department, Zero-downtime deployments, Horizontal scaling with containerization. This ensures reliability even as the organization grows exponentially.'
          ]
        }
      ],
      quote: 'Identity is the core of every system. ShivID ensures it remains secure, consistent, and future-ready — no matter how large the organization grows.'
    },
    workflow: [
      {
        step: '01',
        title: 'Identity Discovery & Mapping',
        duration: 'Week 1-2',
        description: 'We analyzed all departments to construct a unified identity lifecycle: Pre-onboarding, Document verification, Role assignment, Access delegation, Exit workflows.',
        deliverables: ['Complete identity graph', 'Permission matrix', 'Department workflows'],
        color: 'blue'
      },
      {
        step: '02',
        title: 'UX for High-Stakes Security',
        duration: 'Week 3-4',
        description: 'Identity management requires clarity, not beauty. We designed: Clean, distraction-free interfaces, Role visibility screens, Permission toggles, Real-time activity indicators. Wireframes mapped every possible user journey to ensure zero ambiguity during critical actions.',
        deliverables: ['Security-focused UI design', 'Role management interfaces', 'Permission toggles', 'Activity dashboards'],
        color: 'purple'
      },
      {
        step: '03',
        title: 'Engineering the IAM Kernel',
        duration: 'Week 5-10',
        description: 'Core engineering work included: Auth server, Permission policies, Access-token lifecycle, Activity logs, Encryption and hashing, Document pipelines. We built ShivID as a fault-tolerant, API-driven IAM engine.',
        deliverables: ['Auth server', 'Permission engine', 'Token management', 'Document pipeline'],
        color: 'green'
      },
      {
        step: '04',
        title: 'Deployment & Hardening',
        duration: 'Week 11-14',
        description: 'To deliver enterprise-grade reliability: Hardened API endpoints, Load-balanced microservices, Backup pipelines, Encrypted S3 storage, Central log aggregator, CI/CD with automated vulnerability scanning. This architecture ensures ShivID remains secure, stable, and scalable.',
        deliverables: ['Hardened infrastructure', 'Load balancing', 'Encrypted storage', 'CI/CD pipeline'],
        color: 'blue'
      }
    ],
    techStack: [
      { name: 'React.js', description: 'Identity dashboards', icon: 'code-2', iconColor: 'text-blue-400' },
      { name: 'Node.js (Express)', description: 'Auth server & permission APIs', icon: 'server', iconColor: 'text-green-400' },
      { name: 'JWT + Bcrypt', description: 'Authentication & encryption', icon: 'zap', iconColor: 'text-yellow-400' },
      { name: 'MongoDB / PostgreSQL', description: 'User and activity storage', icon: 'database', iconColor: 'text-emerald-400' },
      { name: 'AWS S3', description: 'Encrypted document storage', icon: 'hard-drive', iconColor: 'text-orange-400' },
      { name: 'NGINX + Docker', description: 'Infrastructure readiness', icon: 'smartphone', iconColor: 'text-purple-400' },
      { name: 'GitHub Actions', description: 'CI/CD & automated scans', icon: 'wind', iconColor: 'text-cyan-400' }
    ],
    impact: [
      { value: '85%', label: 'Faster User Onboarding' },
      { value: '100%', label: 'Permission Accuracy' },
      { value: '60%', label: 'Reduction in Unauthorized Access' }
    ],
    liveUrl: 'https://www.shivaid.com/'
  }
];

