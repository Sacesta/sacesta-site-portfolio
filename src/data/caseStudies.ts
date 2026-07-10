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
    id: 'manlab-telehealth',
    title: 'Manlab',
    subtitle: 'A clinical-grade telehealth ecosystem powered by multimodal AI diagnostics and automated logistics',
    description: 'Manlab is a comprehensive hair wellness and telehealth platform that bridges the gap between clinical trichology and modern e-commerce. The ecosystem integrates patient self-assessments, automated AI photo validation (Gemini 2.5), a dedicated doctor review portal, and end-to-end payment and shipping pipelines.',
    problem: {
      title: 'The Problem',
      description: 'Online hair loss treatment is historically fragmented: patients buy unverified over-the-counter products without knowing their specific condition, while physicians lack structured data to safely evaluate and triage cases. Scaling a personalized medical model manually is bottlenecked by blurry photo uploads, slow prescription writing, and complex logistics coordination.'
    },
    userBase: {
      title: 'User Base',
      description: 'The platform serves three critical roles: Patients seeking verified, doctor-prescribed treatments; Trichologists & Doctors reviewing patient intake files, scalp photos, and AI summaries on a high-throughput triage queue; and Administrators managing product catalogs, doctor registries, and fulfillment pipelines.'
    },
    approach: {
      title: 'Our Approach',
      description: 'We engineered a highly secure, multi-platform clinical web application. This features: 1) A patient dashboard directing users through intake surveys and vision-validated photo uploads. 2) A Node.js backend executing pre-consultation diagnostic scoring and photo verification. 3) A HIPAA-aligned Doctor Workspace for digital prescription signing and clinical note editing. 4) Direct APIs integrating payment gateways (Razorpay) and logistics hubs (Shiprocket) for automated order generation.'
    },
    detailedAnalysis: {
      title: 'The Full Story',
      paragraphs: [
        'Telehealth for prescription-grade treatments is not just a standard e-commerce shop; it is a regulated medical workflow. Building Manlab required designing a secure, high-integrity system that empowers patients while protecting clinical standards.',
        'By orchestrating a multi-platform architecture consisting of patient web apps, doctor review dashboards, admin panels, and a central API engine, we created a self-sustaining ecosystem. It scales clinical services by automating the manual overhead of triage, diagnosis support, and distribution.'
      ],
      sections: [
        {
          title: 'Multimodal AI Scalp Diagnostics',
          paragraphs: [
            'At the heart of onboarding is a custom diagnostic engine. As patients upload scalp photos (Front, Top, Temples), a backend worker routes the image to Gemini 2.5 Flash. The model evaluates whether the photo represents a human scalp, matches the expected anatomical angle, and meets lighting and clarity benchmarks. Blurry images or incorrect angles are flagged instantly for re-upload, avoiding delays in the doctor\'s review queue.',
            'Following photo validation, Gemini processes the answers to a 20-question survey to generate a comprehensive trichological report outlining the likely condition (AGA, TE, or Mixed), its pathophysiological cause, and a projected 12-month recovery timeline.'
          ]
        },
        {
          title: 'Doctor Triage & Digital Prescriptions',
          paragraphs: [
            'To ensure medical compliance, the AI\'s report acts only as an advisory layer. A dedicated Doctor Portal pulls pending patient cases into a triage queue. The clinical review screen presents the patient\'s data, photo gallery, and the AI\'s pre-analysis.',
            'The physician can approve the suggested treatment protocol, modify it (switching oral meds to topical or adjusting dosages), or flag the case for a live video consultation. The system generates a digital prescription, releases the order hold, and signs off on the medical documentation.'
          ]
        },
        {
          title: 'Automated Logistics & Delivery',
          paragraphs: [
            'Once a doctor signs a prescription, the backend automates the fulfillment lifecycle. Integrated with Razorpay for secure payments and Shiprocket for logistics, the system books the shipment, generates shipping labels, issues Air Waybills (AWB), and tracks the delivery status in real-time.',
            'If a courier reports a non-delivery (NDR) or return-to-origin (RTO) event, the system logs the webhook and automatically triggers SMS updates to the patient.'
          ]
        },
        {
          title: 'The Follow-Up Care Loop',
          paragraphs: [
            'To track long-term clinical efficacy, the platform maintains a scheduler database. At Day 90, patients receive automated notifications to upload new progress photos. Doctors receive these check-ins in a separate queue, allowing them to compare side-by-side progression and adjust treatment dosages, resulting in a continuous, high-touch care loop that maximizes user retention.'
          ]
        }
      ],
      quote: 'Manlab replaces the guesswork of hair loss with a unified, AI-assisted clinic that brings doctor-approved protocols directly to patients\' doors.'
    },
    workflow: [
      {
        step: '01',
        title: 'Clinical Assessment Design',
        duration: 'Week 1-2',
        description: 'Collaborated with clinical trichologists to structure a 20-question medical intake survey and design photo-taking guidelines.',
        deliverables: ['Intake questionnaire', 'Photo guidelines', 'Condition scoring logic'],
        color: 'blue'
      },
      {
        step: '02',
        title: 'Multimodal AI Integration',
        duration: 'Week 3-5',
        description: 'Built the Gemini 2.5 Flash integrations for automated photo angle validation, image quality checks, and diagnostic report generation.',
        deliverables: ['Gemini photo validator', 'Pre-analysis engine', 'JSON schema parser'],
        color: 'purple'
      },
      {
        step: '03',
        title: 'Doctor & Admin Dashboards',
        duration: 'Week 6-9',
        description: 'Developed the React interfaces for the doctor triage queue, clinical review workspace, custom prescription editor, and patient chat.',
        deliverables: ['Doctor workspace UI', 'Triage queue system', 'Prescription generator'],
        color: 'green'
      },
      {
        step: '04',
        title: 'API Orchestration & Launch',
        duration: 'Week 10-12',
        description: 'Implemented Node.js controllers for Razorpay payment webhooks, Shiprocket logistics automation, Twilio SMS alerts, and database triggers.',
        deliverables: ['Logistics gateway', 'Real-time chat socket server', 'Production deployment'],
        color: 'blue'
      }
    ],
    techStack: [
      { name: 'React 18', description: 'Interactive frontend portal', icon: 'code-2', iconColor: 'text-blue-400' },
      { name: 'Node.js (Express)', description: 'High-throughput backend api', icon: 'server', iconColor: 'text-green-400' },
      { name: 'PostgreSQL & Prisma', description: 'ORM & database schemas', icon: 'database', iconColor: 'text-emerald-400' },
      { name: 'Gemini 2.5 Flash', description: 'Multimodal diagnostic AI', icon: 'zap', iconColor: 'text-purple-400' },
      { name: 'Socket.io', description: 'Real-time chat messaging', icon: 'smartphone', iconColor: 'text-cyan-400' },
      { name: 'Razorpay & Shiprocket', description: 'Payment & shipping integrations', icon: 'hard-drive', iconColor: 'text-orange-400' }
    ],
    impact: [
      { value: '95%', label: 'Photo Validation Accuracy' },
      { value: '80%', label: 'Faster Case Triage' },
      { value: 'Zero', label: 'Manual Shipping booking' },
      { value: '4.8/5', label: 'Patient Satisfaction Rating' }
    ],
    liveUrl: 'https://manlab.in/'
  },
  {
    id: 'fis-advisory',
    title: 'FIS Advisory',
    subtitle: 'A bilingual mortgage optimization platform helping homeowners reduce interest and shave years off loan tenures',
    description: 'FIS Advisory is a high-performance mortgage calculation and financial advisory platform tailored for the Malaysian property market. It combines an interactive interest-amortization calculator, dynamic client-side PDF report compilation, a secure zero-retention document upload backend, and a bilingual translation system.',
    problem: {
      title: 'The Problem',
      description: 'Malaysian homeowners pay millions in amortized interest without realizing their actual loan lifetime. Traditional banks do not show how adjustments in payment schemes or principal reductions shave years off loans. Furthermore, refinancing processes are slow and lack transparent calculations, causing homeowners to miss out on significant long-term savings.'
    },
    userBase: {
      title: 'User Base',
      description: 'The platform serves two primary groups: Malaysian property owners and real estate investors looking for direct visibility into mortgage interest savings, and the FIS certified consultant team who receive structured client documents (Offer Letters, loan summaries) to draft customized refinancing proposals.'
    },
    approach: {
      title: 'Our Approach',
      description: 'We engineered a lightweight, high-conversion web application featuring: 1) A clean, responsive landing page with custom micro-interactions. 2) A 3-step mortgage savings wizard with interactive interest comparison. 3) Client-side PDF reporting with dynamic QR-code linking. 4) A Node.js backend using memory-buffered Multer uploads to instantly forward sensitive bank documents via secure SMTP without saving them to disk.'
    },
    detailedAnalysis: {
      title: 'The Full Story',
      paragraphs: [
        'Mortgage optimization is a numbers game, but presenting these numbers clearly is a design challenge. For FIS Advisory, we built a modern, responsive interface that translates complex interest compounding algorithms into simple, actionable visual metrics.',
        'By combining a bilingual React frontend with a secure, serverless-ready Node.js backend, the platform enables prospective clients to evaluate their mortgage health in under two minutes. It bridges the gap between self-assessment and expert advisor consulting.'
      ],
      sections: [
        {
          title: 'Bilingual 3-Step Savings Calculator',
          paragraphs: [
            'The core utility is a multi-step mortgage calculator that supports conventional and Islamic financing styles. Users input their current bank, outstanding balance, monthly installment, and interest rate.',
            'The system runs amortization calculations in real-time. It features custom validation rules that warn the user if their current installment is lower than the monthly interest charge (negative amortization), notifying them that they are paying a non-reducing debt.'
          ]
        },
        {
          title: 'Client-Side PDF & QR Code Engine',
          paragraphs: [
            'Rather than sending plain email text, the platform compiles a customized 2-page Mortgage Savings Report. Built directly on the client side using jspdf and html2canvas-pro, it converts calculation cards and comparison charts into an elegant PDF.',
            'It embeds a dynamic QR code (qrcode.react) and contact links, allowing users to download or share their results instantly with partners or family members.'
          ]
        },
        {
          title: 'Zero-Retention Document Uploads',
          paragraphs: [
            'To request a custom refinancing proposal, users can attach sensitive documents (such as Bank Offer Letters or Statements).',
            'To guarantee strict compliance with the Malaysian Personal Data Protection Act (PDPA), the Node.js backend processes file uploads entirely in-memory using RAM storage. Nodemailer immediately encapsulates these buffers as attachments and sends them to the consulting team. Since no files are written to disk, client data remains completely private and secure.'
          ]
        },
        {
          title: 'Performance & SEO Optimization',
          paragraphs: [
            'Given the multicultural demographic in Malaysia, the application features an instant, state-driven English (EN) and Bahasa Melayu (BM) language toggle.',
            'We also optimized performance by adding a custom splash screen with Lighthouse and search bot detection. This bypasses animation frames for automated crawlers, ensuring rapid page indexing and a 100/100 Lighthouse performance rating.'
          ]
        }
      ],
      quote: 'FIS Advisory turns complex banking numbers into visual savings opportunities, helping Malaysian homeowners regain control of their mortgages.'
    },
    workflow: [
      {
        step: '01',
        title: 'Financial Logic Mapping',
        duration: 'Week 1-2',
        description: 'Researched Malaysian bank mortgage structures, conventional vs. Islamic amortization schedules, and negative amortization limits.',
        deliverables: ['Interest calculations formula', 'Validation guidelines', 'Multi-currency formatting rules'],
        color: 'blue'
      },
      {
        step: '02',
        title: 'UX & Bilingual Design',
        duration: 'Week 3-4',
        description: 'Designed a clean visual interface with an instant toggle for English and Bahasa Melayu. Developed wireframes for the 3-step sequence.',
        deliverables: ['Bilingual UI design system', 'Refinancing sequence UX', 'Responsive page layout'],
        color: 'purple'
      },
      {
        step: '03',
        title: 'Amortization & PDF Engine',
        duration: 'Week 5-6',
        description: 'Coded the interactive calculator logic, charts, and client-side PDF document generation using jspdf and html2canvas.',
        deliverables: ['React calculator module', 'Client-side PDF compiler', 'Amortization chart'],
        color: 'green'
      },
      {
        step: '04',
        title: 'Secure Backend & Launch',
        duration: 'Week 7-8',
        description: 'Engineered the Express backend for file upload handling, Hostinger SMTP configuration, and automated client/admin email delivery.',
        deliverables: ['Nodemailer email microservice', 'RAM-based upload buffer', 'Production deployment'],
        color: 'blue'
      }
    ],
    techStack: [
      { name: 'React 19', description: 'Interactive frontend portal', icon: 'code-2', iconColor: 'text-blue-400' },
      { name: 'Tailwind CSS 4', description: 'Next-gen CSS styling', icon: 'wind', iconColor: 'text-cyan-400' },
      { name: 'Node.js (Express)', description: 'Lead handling API service', icon: 'server', iconColor: 'text-green-400' },
      { name: 'Nodemailer', description: 'Secure SMTP email gateway', icon: 'hard-drive', iconColor: 'text-orange-400' },
      { name: 'jsPDF & html2canvas', description: 'Client-side PDF generation', icon: 'file-code', iconColor: 'text-purple-400' },
      { name: 'Framer Motion', description: 'Fluid UI transitions', icon: 'zap', iconColor: 'text-yellow-400' }
    ],
    impact: [
      { value: '48.8%', label: 'Average Interest Saved' },
      { value: '53%', label: 'Tenure Shaved Off' },
      { value: '100%', label: 'RAM-Only Document Security' },
      { value: '100/100', label: 'Lighthouse Performance' }
    ],
    liveUrl: 'https://www.fisadvisory.com/'
  },
  {
    id: 'velvet-travel-world',
    title: 'Velvet Travel World',
    subtitle: 'A premium interactive travel platform curating luxury global tours with 100% pure Jain hospitality',
    description: 'Velvet Travel World is a high-fidelity travel showcase tailored for families in Gujarat, India. Featuring a 3D WebGL interactive globe, GSAP-driven scroll animations, and a dedicated focus on sacred culinary traditions, the application ensures that strict dietary requirements (Jain & Swaminarayan kitchen rules) are fully aligned with luxury global travel.',
    problem: {
      title: 'The Problem',
      description: 'Traditional luxury tour operators often fail to accommodate strict religious dietary guidelines (no onion, garlic, or root vegetables) during international travel. Homeowners and families in Gujarat hesitated to explore global destinations due to food concerns, and standard travel websites lacked the visual interactivity to convey the safety and premium nature of group tours.'
    },
    userBase: {
      title: 'User Base',
      description: 'The platform serves Gujarati family groups and pilgrims seeking global and domestic tours without compromising their spiritual culinary values, alongside tour operators managing custom packages, inquiries, and itineraries.'
    },
    approach: {
      title: 'Our Approach',
      description: 'We engineered an immersive, content-rich web experience that builds instant trust. This includes: 1) A 3D WebGL interactive globe mapping tour coordinates with automatic camera adjustments. 2) GSAP ScrollTrigger reveals that present destination details dynamically. 3) A dedicated "Sacred Cuisine" portal highlighting the logistical operations of traveling chefs (Gujarati Maharajs) who establish private kitchens in international hotels.'
    },
    detailedAnalysis: {
      title: 'The Full Story',
      paragraphs: [
        'Designing for cultural trust requires blending high-tech interactivity with high-touch traditional values. For Velvet Travel World, we built a digital interface that speaks directly to the needs of the family traveler—giving them peace of mind through both transparent information and engaging visuals.',
        'By combining a Three.js interactive earth map with liquid-smooth GSAP transition paths, we created an experience that makes international locations feel accessible, while placing the "Velvet Promise" of pure food and zero-stress planning at the center of the journey.'
      ],
      sections: [
        {
          title: '3D Interactive WebGL Globe',
          paragraphs: [
            'To showcase the agency\'s international footprint, we integrated a fully interactive 3D WebGL Globe. Built on top of react-globe.gl and Three.js, it projects high-resolution Earth textures, topology bump maps, and a starry space background.',
            'Tour package data is mapped to exact coordinates. Clicking a location pin automatically pauses the globe\'s rotation, focuses the camera on the chosen city, and slides in an overview card detailing the tour duration, pricing, and booking links.'
          ]
        },
        {
          title: 'GSAP Motion and Scroll trigger Sequences',
          paragraphs: [
            'Using GSAP and the ScrollTrigger plugin, we built a responsive storytelling layout. Page sections reveal themselves with subtle upward translations, fade-ins, and rotational shifts.',
            'This matches the luxurious, slow-paced aesthetic of premium travel while ensuring rendering performance is fully optimized for mobile devices.'
          ]
        },
        {
          title: 'The \'Sacred Cuisine\' Showcase',
          paragraphs: [
            'Food is the primary decision factor for religious Indian families traveling abroad. We designed a dedicated page and custom cards explaining the catering details.',
            'The platform highlights how professional chefs (Gujarati Maharajs) travel with tour cohorts, setting up completely separate kitchen areas in hotels from Europe to Southeast Asia. It visually guarantees that meals contain no onion, garlic, or root vegetables.'
          ]
        },
        {
          title: 'Bespoke Package Creator',
          paragraphs: [
            'For custom travel requirements, the application houses a multi-field inquiry intake form. It collects party size, duration, destination types, and dietary preferences.',
            'It instantly routes inquiries to the travel consultants, integrating floating WhatsApp messaging with pre-filled text templates.'
          ]
        }
      ],
      quote: 'Velvet Travel World blends 3D WebGL and luxury storytelling to assure travelers that their spiritual values are respected, no matter where they fly.'
    },
    workflow: [
      {
        step: '01',
        title: 'Cultural Alignment & UX',
        duration: 'Week 1-2',
        description: 'Studied the specific needs of Jain and Swaminarayan travelers and established the brand\'s \'Luxury with Purity\' design language.',
        deliverables: ['Target persona profiles', 'Color and typography system', 'Visual copy outline'],
        color: 'blue'
      },
      {
        step: '02',
        title: '3D Globe & Map Engineering',
        duration: 'Week 3-5',
        description: 'Integrated react-globe.gl with custom Three.js raycasting to handle coordinate plotting, responsive scaling, and cinematic zoom transitions.',
        deliverables: ['3D interactive globe', 'Anatomical pins script', 'Coordinate data schema'],
        color: 'purple'
      },
      {
        step: '03',
        title: 'GSAP Motion Sequencing',
        duration: 'Week 6-7',
        description: 'Coded the scroll-reveal animations, carousels, and page transitions using GSAP and Framer Motion.',
        deliverables: ['Scroll Trigger handlers', 'Fluid tour carousel', 'Micro-interaction library'],
        color: 'green'
      },
      {
        step: '04',
        title: 'Tour Details & Launch',
        duration: 'Week 8-10',
        description: 'Built pages for domestic, international, and sacred tours, optimized SEO tagging, and deployed the frontend application to Vercel.',
        deliverables: ['Responsive pages', 'Custom tour builder form', 'Production release'],
        color: 'blue'
      }
    ],
    techStack: [
      { name: 'React 19', description: 'Core web library framework', icon: 'code-2', iconColor: 'text-blue-400' },
      { name: 'Three.js & react-globe.gl', description: '3D WebGL rendering engine', icon: 'zap', iconColor: 'text-purple-400' },
      { name: 'GSAP & ScrollTrigger', description: 'High-fidelity scroll animations', icon: 'server', iconColor: 'text-green-400' },
      { name: 'Framer Motion', description: 'Declarative component transitions', icon: 'zap', iconColor: 'text-yellow-400' },
      { name: 'Vanilla CSS', description: 'Custom styled responsive layouts', icon: 'wind', iconColor: 'text-cyan-400' },
      { name: 'React Router Dom 7', description: 'Client-side routing engine', icon: 'smartphone', iconColor: 'text-orange-400' }
    ],
    impact: [
      { value: '3D Globe', label: 'Interactive Footprint' },
      { value: '100%', label: 'Jain Diet Accommodation' },
      { value: '0s Lag', label: 'WebGL Render Speed' },
      { value: '+150%', label: 'Lead Inquiry Conversion' }
    ],
    liveUrl: 'https://www.velvettravelworld.com/'
},
{
id: 'ghl-widget',
title: 'GoHighLevel Ads Report Widget',
subtitle: 'A custom CRM iframe widget consolidating Google & Facebook Ads metrics with dynamic keyword filtering',
description: 'This high-performance widget is engineered to be embedded natively as an iframe inside GoHighLevel (GHL) CRM subaccount dashboards. It connects to the Google Ads and Facebook Graph APIs to pull live marketing campaigns, aggregates metrics into a unified dashboard, and supports real-time client-side sorting and keyword-based location filtering.',
problem: {
title: 'The Problem',
description: 'GoHighLevel CRM does not have a native dashboard that merges Facebook and Google campaign performance into a single dashboard within the CRM context. Agencies had to manually build reports, send screenshots, or redirect clients to external reporting dashboards, fracturing the user experience and increasing admin overhead.'
},
userBase: {
title: 'User Base',
description: 'The widget serves local business clients and agency owners who need instant, self-serve visibility into their combined ad spend and lead generation outcomes directly from their CRM login.'
},
approach: {
title: 'Our Approach',
description: 'We built a high-performance iframe widget and backend aggregation engine. This includes: 1) A clean, responsive HTML/JS widget interface with campaign check/uncheck filters. 2) A Node.js backend integrating the Google Ads API and Facebook Graph API, featuring OAuth token health checks. 3) A link generator portal that translates location names, Google Ads customer IDs, and keywords into direct link structures, iframe embeds, and dynamic GHL merge-tag templates.'
},
detailedAnalysis: {
title: 'The Full Story',
paragraphs: [
  'Custom integrations inside CRMs like GoHighLevel need to feel native, load instantly, and demand zero complex setup from the end user. For the GHL Ads Report Widget, we designed a serverless-ready architecture that pulls, combines, and filters advertising data in one swift execution.',
  'By designing a two-part system—a lightweight, client-side dashboard page and a custom Express backend—we allowed agencies to embed personalized ad reports inside their client portals with minimal configuration.'
],
sections: [
  {
    title: 'Multi-Platform Ad Aggregation',
    paragraphs: [
      'The backend handles concurrent connections to the Google Ads API and Facebook Graph API. When a query is initiated, the server runs a token health check, resolves accessible customer accounts, and queries active campaigns.',
      'On the Facebook side, the API inspects all active ad accounts under the system token, querying campaign insights and matching standard and custom lead goals (leads, registrations, pixel events) to compile a unified report.'
    ]
  },
  {
    title: 'Dynamic Keyword-Based Sorting',
    paragraphs: [
      'To prevent cross-account data pollution and ensure relevant metrics, the widget relies on keyword filtering. Users specify keywords (e.g., location names like Windsor Mill).',
      'The backend filters campaign names case-insensitively, meaning only campaigns related to the specific branch or region are fetched. This makes the system fully dynamic and reusable across hundreds of CRM locations.'
    ]
  },
  {
    title: 'Real-Time Client-Side Re-calculation',
    paragraphs: [
      'The widget\'s UI displays overall KPIs (Total Spend, Leads, Impressions, Clicks, CTR, and Cost Per Lead) along with comparison blocks. At the bottom, a detailed campaign table lets users toggle checkboxes for individual campaigns.',
      'Unchecking a campaign instantly triggers a local Javascript recalculation of all KPIs and graphs on the screen, giving clients immediate control over their data view without reloading.'
    ]
  },
  {
    title: 'GHL Integration & Link Generator',
    paragraphs: [
      'To simplify deployment for agency admins, we built a 3-column Link Generator Portal. Admins enter the location name, Google customer ID, and matching keywords.',
      'The portal outputs three formats: a Direct Link, an HTML Iframe Embed, and a GoHighLevel Dynamic Template using CRM merge tags like {{location.id}}, automating deployment across multiple subaccounts simultaneously.'
    ]
  }
],
quote: 'This widget gives GoHighLevel users native, live campaign statistics directly in their dashboards, removing the need for external reporting portals.'
},
workflow: [
{
  step: '01',
  title: 'API Architecture & Auth',
  duration: 'Week 1-2',
  description: 'Configured Google Ads OAuth credentials and Facebook Graph API parameters, testing token generation and accessible account discovery.',
  deliverables: ['OAuth token microservice', 'Ad account permission mapper', 'Developer console credentials'],
  color: 'blue'
},
{
  step: '02',
  title: 'Data Aggregation Engine',
  duration: 'Week 3-4',
  description: 'Built backend controller logic to fetch, filter, and format campaigns from both platforms based on date presets and keywords.',
  deliverables: ['Google Ads API collector', 'Facebook Insights query handler', 'JSON data normalizer'],
  color: 'purple'
},
{
  step: '03',
  title: 'Interactive Widget UI',
  duration: 'Week 5-6',
  description: 'Developed the dashboard interface using clean HTML/JS, incorporating loading skeletons, KPI cards, preset dates, and interactive tables.',
  deliverables: ['widget.html UI mockup', 'Local KPI calculator scripts', 'Date preset selector'],
  color: 'green'
},
{
  step: '04',
  title: 'Generator Portal & Launch',
  duration: 'Week 7-8',
  description: 'Coded the 3-column link generator, implemented serverless routing configurations, and deployed the service to Vercel.',
  deliverables: ['generator.html dashboard', 'Dynamic merge tag parser', 'Vercel serverless deployment'],
  color: 'blue'
}
],
techStack: [
{ name: 'Node.js (Express)', description: 'Backend routing & lead aggregator', icon: 'server', iconColor: 'text-green-400' },
{ name: 'Google Ads API', description: 'Search campaign collector', icon: 'zap', iconColor: 'text-red-400' },
{ name: 'Facebook Graph API', description: 'Social campaign collector', icon: 'zap', iconColor: 'text-blue-400' },
{ name: 'Vanilla CSS & HTML5', description: 'Responsive iframe layouts', icon: 'wind', iconColor: 'text-cyan-400' },
{ name: 'JavaScript (ES6+)', description: 'Client-side KPI calculator', icon: 'code-2', iconColor: 'text-yellow-400' },
{ name: 'Axios', description: 'HTTP request handling client', icon: 'hard-drive', iconColor: 'text-purple-400' }
],
impact: [
{ value: 'Real-Time', label: 'Data Syncing' },
{ value: '0s Delay', label: 'Local KPI Math' },
{ value: '1 Click', label: 'Dynamic Deployment' },
{ value: 'Scalable', label: 'Multi-Account support' }
],
liveUrl: 'https://ghl-widget.vercel.app/widget?sub_account_id=aQS4UbBnSOaoP89UoKSJ&google_customer_id=6952208414&keywords=Windsor%20Mill,Woodlawn&location_name=Windsor%20Mill'
},
  {
    id: 'analytics',
    title: 'Visit Ahmedabad',
    subtitle: 'Where heritage storytelling meets modern digital engineering',
    description: 'Visit Ahmedabad reimagines city tourism by bringing together immersive visuals, hyper-organized data, personalized discovery paths, and lightning-fast performance. The platform acts as both a digital companion for travelers and a strategic content engine for tourism authorities.',
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
        'Visit Ahmedabad was never about building pages. It was about crafting a digital identity for a city.'
      ],
      sections: [
        {
          title: 'Architectural Insight',
          paragraphs: [
            'Early analysis showed that 70% of tourism searches revolve around: "Top places to visit", "Local food spots", "Heritage & culture", "One-day itinerary". But existing platforms lacked depth and failed to capture cultural nuance. Our solution introduced a hierarchical content system built around: Places, Categories, Experiences, Food Trails, Events, Itineraries. This structure allowed semantic SEO, internal linking flows, and predictable crawlers paths.'
          ]
        },
        {
          title: 'Engineering the Experience',
          paragraphs: [
            'Static pages weren\'t enough — we engineered an immersive experience: Geographical mapping layers for future map-based navigation, Image compression pipeline enabling fast loads without compromising travel photography, Pre-rendered content paths ensuring instant page transitions, Intuitive micro animations grounding user attention on what matters.'
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
      { value: '98/100', label: 'SEO Score' },
      { value: '40%', label: 'Lower Bounce Rate' },
      { value: 'Fully CMS', label: 'Controlled Updates' }
    ],
    liveUrl: 'https://www.visitamdavad.com/'
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
        'The Indian utility service ecosystem is inherently volatile — telecom APIs fail randomly, electricity boards maintain inconsistent protocols, and transaction statuses often arrive late.',
        'Our job was not just to build a platform, but to design a resilient financial transaction kernel.'
      ],
      sections: [
        {
          title: 'Centralized Transaction Engine',
          paragraphs: [
            'We created a unified engine capable of: 1. Handling Every Service Type — Prepaid recharge, DTH, Landline, Electricity, Gas, Broadband, FASTag, Insurance renewals, And more. Each service mapped into a single, predictable orchestration flow. 2. Real-Time Status Syncing — We integrated: Callback listeners, Webhooks, Polling fallback, Delayed settlement handlers, Multi-retry queues. The system automatically resolves ambiguous states like PENDING or TIMEOUT. 3. Wallet & Commission Engine — Agents and distributors rely heavily on real-time wallet health. We engineered: Balance freeze policies, Instant deductions, Auto refunds on failed transactions, Tiered commission slabs, Distributor → Retailer flows. This engine alone reduced support tickets significantly.'
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
        deliverables: ['Transaction state flows', 'Wallet dashboard', 'Commission previews', 'Service screens'],
        color: 'purple'
      },
      {
        step: '03',
        title: 'Building the Transaction Kernel',
        duration: 'Week 5-10',
        description: 'Engineering work included: Multi-service API layer, Wallet system, Status synchronization engine, Commission calculator, Admin modules, Retry queues. This formed the beating heart of Bharat Upline.',
        deliverables: ['API layer', 'Wallet system', 'Status sync engine', 'Commission calculator', 'Admin modules'],
        color: 'green'
      },
      {
        step: '04',
        title: 'Deployment & Reliability Hardening',
        duration: 'Week 11-14',
        description: 'We ensured: API monitoring, Containerized deployment, Error alerts, Backups, High-availability clustering, Real-time logs. The system is built like a financial-grade platform.',
        deliverables: ['API monitoring', 'Containerized deployment', 'Error alerts', 'Backup system', 'High-availability setup'],
        color: 'blue'
      }
    ],
    techStack: [
      { name: 'Node.js + Express', description: 'Transaction orchestration engine', icon: 'server', iconColor: 'text-green-400' },
      { name: 'React.js / Next.js', description: 'Consumer + Agent interfaces', icon: 'code-2', iconColor: 'text-blue-400' },
      { name: 'MongoDB / PostgreSQL', description: 'Transaction and wallet data', icon: 'database', iconColor: 'text-emerald-400' },
      { name: 'Redis', description: 'Queues and caching', icon: 'zap', iconColor: 'text-yellow-400' },
      { name: 'Third-party APIs', description: 'Telecom & utility services', icon: 'wind', iconColor: 'text-cyan-400' },
      { name: 'AWS or DigitalOcean', description: 'Reliable cloud deployment', icon: 'hard-drive', iconColor: 'text-orange-400' },
      { name: 'Docker + PM2', description: 'Horizontal scaling and process management', icon: 'smartphone', iconColor: 'text-purple-400' }
    ],
    impact: [
      { value: '90%', label: 'Fewer Failed Transactions' },
      { value: '2x', label: 'Faster Settlement' },
      { value: '60%', label: 'Reduction in Support Load' }
    ],
    liveUrl: '#'
  },
  {
    id: 'integration',
    title: 'ComeHome AI — Intelligent Property Discovery',
    subtitle: 'Turning scattered property listings into intelligent, human-centered discovery paths',
    description: 'ComeHome AI transforms real estate browsing from a tiring, fragmented hunt into a personalized exploration journey. By combining structured property data, geolocation intelligence, and a recommendation engine trained on user behavior, the platform helps buyers find the right home faster — and helps developers maximize visibility across their inventory.',
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
        'Real estate browsing is inherently overwhelming. Buyers jump between apps, chat with agents, revisit PDFs, and only then form decisions.',
        'ComeHome AI set out to collapse this entire journey into one cohesive, intelligent platform.'
      ],
      sections: [
        {
          title: 'Property Intelligence Architecture',
          paragraphs: [
            'Properties were standardized using a structured metadata layer: Bedrooms, bathrooms, carpet area, Lifestyle tags, Commute-focused filters, School/hospital proximity, Developer trust score. This allowed the recommendation engine to operate with precision.'
          ]
        },
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
        duration: 'Week 3-4',
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
      { value: '70%', label: 'Reduction in Drop-off Rates' },
      { value: 'High-Trust', label: 'Verified Listings' },
      { value: 'Seamless', label: 'Scalability for New Cities' }
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
    id: 'hustlerguys-crm',
    title: 'HustlerGuys CRM — Your Entire Business, One Smart System',
    subtitle: 'Where chaos becomes clarity, and workflows become growth',
    description: 'A full-stack CRM and ERP platform built to centralize sales, projects, staff, leads, support, accounting, contracts, tasks, and reporting — engineered for growing businesses that need structure, speed, and control.',
    problem: {
      title: 'The Problem',
      description: 'Growing companies typically face: Leads scattered across WhatsApp, email, Excel. No visibility into sales pipelines. Projects and tasks tracked in 5 different tools. Delayed billing and collection issues. Minimal staff accountability. No single dashboard to oversee operations. Zero automation for follow-ups and renewals. HustlerGuys needed a central operating system to run their entire workflow end to end.'
    },
    userBase: {
      title: 'User Base',
      description: 'The platform serves every functional role: Sales Teams — Lead capture, Pipeline movement, Follow-ups & reminders, Deal closures. Project Managers & Delivery Teams — Project timelines, Task assignment, Status monitoring. HR & Admin — Staff records, Attendance, Tickets & support. Finance & Accounts — Expenses, Subscription management, Invoices. Founders & Leadership — Unified reporting, Profitability tracking, Team performance analytics. Each team gets a tailor-made module aligned to its workflow.'
    },
    approach: {
      title: 'Our Approach',
      description: 'We built HustlerGuys CRM as a multi-module enterprise system, featuring: End-to-end lead management, Multi-stage sales funnels, Project + task workflow engine, Support and ticketing system, HR panel with staff permissions, Contract and subscription modules, Expense and financial tracking, Automated reminders & notifications, Full activity logs. Designed for real-world operations, not theoretical workflows.'
    },
    detailedAnalysis: {
      title: 'The Full Story',
      paragraphs: [
        'HustlerGuys was scaling fast — but operations were scattered.',
        'We architected a unified CRM that connects every part of the business.'
      ],
      sections: [
        {
          title: 'Lead Management & Sales Pipeline',
          paragraphs: [
            'Features include: Lead import & capture, Contact details + source tracking, Custom pipeline stages, Kanban movement, Hot/warm/cold qualification, Automated reminders, Follow-up logs, Deal closure tracking. Sales teams gained total visibility and control.'
          ]
        },
        {
          title: 'Project & Task Management Engine',
          paragraphs: [
            'Once deals close, projects move into structured execution: Project creation, Team assignment, Milestone planning, Checklists, Status updates, Real-time progress bars, Member-specific dashboards. This replaced messy WhatsApp updates and untracked work.'
          ]
        },
        {
          title: 'Support & Ticketing System',
          paragraphs: [
            'Clients can raise support requests which are: Categorized, Prioritized, Assigned to staff, Time-tracked, Closed with history. Zero missed tickets. Zero guesswork.'
          ]
        },
        {
          title: 'HR & Staff Performance Module',
          paragraphs: [
            'The HR system includes: Staff roles & permissions, Attendance or check-ins, Staff task reports, Performance snapshots, Activity logs. Leadership finally gets measurable, transparent staff data.'
          ]
        },
        {
          title: 'Finance, Contracts & Subscriptions',
          paragraphs: [
            'A powerful financial suite: Subscription creation, Recurring billing reminders, Contract management, Expense entry, Profitability indicators, Invoice tracking. Finance teams save hours every week.'
          ]
        },
        {
          title: 'Dashboard & Reporting Suite',
          paragraphs: [
            'A unified view of the entire company: Sales funnel visualization, Lead heatmap, Income vs expenses, Project load, Team activity, Contract deadlines, Tickets pending. Leadership sees everything at a glance.'
          ]
        }
      ],
      quote: 'HustlerGuys CRM became a complete business operating system — enabling structure, growth, and performance transparency.'
    },
    workflow: [
      {
        step: '01',
        title: 'Discovery & Workflow Mapping',
        duration: 'Week 1-2',
        description: 'We mapped internal processes: Lead → Sales → Project → Support → Billing, HR and Admin workflows, Approval chains, Reporting needs. This became the blueprint.',
        deliverables: ['Process mapping', 'Workflow documentation', 'Approval chain design', 'Reporting requirements'],
        color: 'blue'
      },
      {
        step: '02',
        title: 'UX Alignment with Real Operations',
        duration: 'Week 3-4',
        description: 'We designed: Clean navigation, Minimal clicks to reach key modules, Role-specific dashboards, Mobile-friendly views. Usability came before aesthetics.',
        deliverables: ['Navigation system', 'Role-based dashboards', 'Mobile UI design', 'User flow optimization'],
        color: 'purple'
      },
      {
        step: '03',
        title: 'Multi-Module Development',
        duration: 'Week 5-12',
        description: 'Engineering focused on: Lead pipeline engine, Task + project workflow, Subscription logic, Permission-based access, Ticketing backend, Reporting algorithms. Each module is a standalone micro-system yet fully integrated.',
        deliverables: ['Lead management system', 'Project workflow engine', 'Subscription module', 'Permission system', 'Ticketing backend', 'Reporting engine'],
        color: 'green'
      },
      {
        step: '04',
        title: 'Deploy, Train, and Scale',
        duration: 'Week 13-16',
        description: 'We delivered: Secure deployment, User training, Role-based onboarding, Multi-device testing, Performance tuning. The CRM is built to scale as HustlerGuys grows.',
        deliverables: ['Production deployment', 'User training materials', 'Onboarding system', 'Performance optimization'],
        color: 'blue'
      }
    ],
    techStack: [
      { name: 'React.js', description: 'Modern admin dashboard', icon: 'code-2', iconColor: 'text-blue-400' },
      { name: 'Node.js + Express', description: 'Core backend', icon: 'server', iconColor: 'text-green-400' },
      { name: 'MongoDB / PostgreSQL', description: 'Business data', icon: 'database', iconColor: 'text-emerald-400' },
      { name: 'Redis', description: 'Caching for speed', icon: 'smartphone', iconColor: 'text-purple-400' },
      { name: 'JWT Authentication', description: 'Secure access', icon: 'zap', iconColor: 'text-yellow-400' },
      { name: 'AWS / Vercel', description: 'Deployment', icon: 'hard-drive', iconColor: 'text-orange-400' },
      { name: 'Cloudinary', description: 'Media management', icon: 'wind', iconColor: 'text-cyan-400' }
    ],
    impact: [
      { value: 'Full', label: 'Operational Visibility' },
      { value: '60%', label: 'Faster Sales Follow-ups' },
      { value: 'Unified', label: 'Workspace Replacing 6+ Tools' }
    ],
    liveUrl: '#'
  },
  {
    id: 'seacatboats',
    title: 'SeaCatBoats — Power, Precision & Performance On Water',
    subtitle: 'Where craftsmanship meets cutting-edge digital experience',
    description: 'A modern digital showcase for one of America\'s most innovative hybrid catamaran manufacturers — combining engineering excellence, AFTEC™ tunnel technology, and fully-interactive 3D boat customization.',
    problem: {
      title: 'The Problem',
      description: 'Marine buyers are discerning. They expect: High-detail product visualization, Complete specifications for every model, Accurate representation of build options, A luxury-level digital experience, A way to explore custom configurations before speaking to sales. SeaCat\'s old web presence lacked: A modern identity, Mobile responsiveness, A configurator, Performance-optimized media, A structured spec database. They needed a platform that matched the premium quality of their vessels.'
    },
    userBase: {
      title: 'User Base',
      description: 'The platform serves: Boat Buyers & Enthusiasts — Explore models, Customize builds, Compare specs, Submit inquiries. Dealers & Sales Teams — Receive qualified leads, Showcase configurations, Present technical specs. Admin & Marketing Teams — Update images, Manage model content, Publish new releases. Every user pathway needed speed, clarity, and immersion.'
    },
    approach: {
      title: 'Our Approach',
      description: 'We engineered SeaCatBoats as a marine-grade product experience platform with: High-resolution media layers, AFTEC™ tunnel technology explanation modules, 3D customization system, Optimized pages for every model, Performance-first engineering, Mobile-first layouts for buyers on the go. The result blends storytelling, engineering detail, and interactive functionality.'
    },
    detailedAnalysis: {
      title: 'The Full Story',
      paragraphs: [
        'Boat buyers don\'t just want specs — they want emotion, performance, and trust.',
        'SeaCatBoats bridges these needs with an elegant digital experience.'
      ],
      sections: [
        {
          title: 'Model Showcase Architecture',
          paragraphs: [
            'Each SeaCat model page includes: Hero banners, Detailed engine options, Hull specifications, Seating layouts, Storage maps, Performance curves, Offshore capability insights, AFTEC™ tunnel airflow diagrams. Every section is modular, easy to update, and SEO-optimized.'
          ]
        },
        {
          title: '3D "Build Your Boat" Customizer',
          paragraphs: [
            'The customizer was engineered as a standalone experience: Select hull colors, Choose deck layouts, Add accessories, Change engine packages, Preview in real time, Generate lead + configuration sheet. Buyers get a high-end, showroom-like experience right from their browser.'
          ]
        },
        {
          title: 'Visual Storytelling & Media Engine',
          paragraphs: [
            'We optimized: Drone videos, High-resolution photography, Walkaround galleries, On-water performance shots. Media loads instantly thanks to: Lazy loading, Smart compression, CDN delivery, Progressive rendering.'
          ]
        },
        {
          title: 'Brand Identity & UI/UX',
          paragraphs: [
            'The design direction reflects: Offshore performance, Luxury finishing, Bold typography, Metallic accents, Ocean-inspired gradients. The experience is premium but still lightweight and easy to navigate.'
          ]
        },
        {
          title: 'Lead Management System',
          paragraphs: [
            'Every interaction feeds into a structured lead pipeline: Inquiry submission, Custom build request, Dealer routing, Automated notifications, CRM-friendly exports. Sales teams receive complete buyer context — increasing conversion rates.'
          ]
        }
      ],
      quote: 'SeaCatBoats now offers a digital experience that reflects the performance and craftsmanship of their hybrid catamarans.'
    },
    workflow: [
      {
        step: '01',
        title: 'Industry Research & Buyer Behavior Mapping',
        duration: 'Week 1-2',
        description: 'We studied premium boat brands and user expectations across: Marine configuration tools, Technical spec pages, On-water performance presentations.',
        deliverables: ['Model structure framework', 'Brand identity blueprint', 'Buyer persona mapping'],
        color: 'blue'
      },
      {
        step: '02',
        title: 'UX & Structure Planning',
        duration: 'Week 3-4',
        description: 'We crafted layouts for: Model detail pages, Configurator UI, Spec tables, AFTEC™ technology section, Interactive galleries. The user journey flows like a modern car configurator.',
        deliverables: ['Model page templates', 'Configurator wireframes', 'Spec table designs', 'Gallery layouts', 'Technology section UI'],
        color: 'purple'
      },
      {
        step: '03',
        title: 'Development & 3D Engine Integration',
        duration: 'Week 5-10',
        description: 'Engineering tasks included: Component-based React structure, Dynamic spec modules, Custom 3D rendering pipeline, Lead form automation, SEO & performance optimization. Every module is scalable for new boat models.',
        deliverables: ['React component system', '3D configurator engine', 'Spec modules', 'Lead capture system', 'SEO optimization'],
        color: 'green'
      },
      {
        step: '04',
        title: 'Deployment & Optimization',
        duration: 'Week 11-12',
        description: 'We ensured: Ultra-fast load times, Mobile-first rendering, CDN-based media delivery, Lighthouse optimization, Continuous deployment workflows. The final system is lightweight, visually rich, and high-performance.',
        deliverables: ['Performance optimization', 'CDN setup', 'Mobile optimization', 'Lighthouse improvements', 'CI/CD pipeline'],
        color: 'blue'
      }
    ],
    techStack: [
      { name: 'React.js', description: 'Frontend experience', icon: 'code-2', iconColor: 'text-blue-400' },
      { name: 'Next.js', description: 'SSR + SEO optimization', icon: 'code-2', iconColor: 'text-blue-400' },
      { name: 'Tailwind CSS', description: 'Component styling', icon: 'wind', iconColor: 'text-cyan-400' },
      { name: 'Three.js', description: '3D boat configurator', icon: 'zap', iconColor: 'text-yellow-400' },
      { name: 'Node.js / Express', description: 'Lead capture APIs', icon: 'server', iconColor: 'text-green-400' },
      { name: 'MongoDB', description: 'Model + builder data', icon: 'database', iconColor: 'text-emerald-400' },
      { name: 'Cloudinary', description: 'Image optimization', icon: 'smartphone', iconColor: 'text-purple-400' },
      { name: 'Vercel', description: 'Global deployment', icon: 'hard-drive', iconColor: 'text-orange-400' }
    ],
    impact: [
      { value: '2.5×', label: 'Increase in Inquiries' },
      { value: 'Premium', label: 'Brand Positioning' },
      { value: 'High', label: '3D Configurator Engagement' }
    ],
    liveUrl: '#'
  },
  {
    id: 'dashboard',
    title: 'PIC Event Management Platform',
    subtitle: 'Engineering a seamless event backbone for thousands of athletes, coordinators, and administrators',
    description: 'The PIC Event Management Platform replaces fragmented spreadsheets and manual coordination with a unified digital command center. From participant onboarding to race-day execution, the system delivers operational clarity, instant data flow, and a frictionless experience for everyone involved.',
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
        'The PIC platform emerged from a deep understanding of event volatility. Sporting events are dynamic: categories shift, participants edit details last-minute, weather forces operational changes, and timing partners require pristine data structures.'
      ],
      sections: [
        {
          title: 'Architectural Foundation',
          paragraphs: [
            'We constructed a modular event engine that supports: Unlimited event types: running, cycling, duathlon, corporate sports, Hierarchical subcategories, Gender & age filters, Wave and batch assignments, Custom registration forms, Real-time payment verification. Every rule could be configured without code changes.'
          ]
        },
        {
          title: 'Data Flow Engineering',
          paragraphs: [
            'The biggest challenge was ensuring data accuracy at scale. We implemented: A multi-stage registration pipeline, Payment status synchronization using webhooks, Deduplication logic to prevent double entries, A versioned participant profile system, Export pipelines for timing chips and third-party systems. This eliminated work that previously required days of manual cleanup.'
          ]
        },
        {
          title: 'Race-Day Experience Optimization',
          paragraphs: [
            'On event day, speed is survival. We engineered: A QR-based kit collection system, Instant participant verification, Bib distribution scanners, Volunteer-friendly UIs, Error-proofed search for thousands of participants. These optimizations reduced kit distribution time by 60%.'
          ]
        },
        {
          title: 'Scalability & Reliability',
          paragraphs: [
            'The platform is capable of: Handling 10,000+ registrations, Multi-event concurrency, Zero-downtime deployment, Real-time dashboards for every stakeholder. With cloud-native deployment, the system remains stable even under traffic surges from last-minute participants.'
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
      { value: '40%', label: 'Fewer Participant Support Requests' },
      { value: '99.9%', label: 'Uptime Across Event Cycles' },
      { value: 'Near-Instant', label: 'Reporting for Timing Partners' }
    ],
    liveUrl: 'https://event-pic-fe.vercel.app/'
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
    id: 'zenn-ai',
    title: 'Zenn AI — Voice & Wellness Assistant',
    subtitle: 'AI-powered voice and text chat for wellness applications with multi-platform deployment',
    description: 'A comprehensive Node.js/Express API providing AI-powered voice and text chat for wellness applications like yoga instruction and fitness coaching. Features phone/email OTP authentication, LangGraph AI integration for context-aware conversations, and full voice processing pipeline using AWS services.',
    problem: {
      title: 'The Problem',
      description: 'Wellness applications needed intelligent, context-aware assistants but faced critical challenges: No unified system for voice and text interactions, Manual authentication flows created friction, Lack of context retention across conversations, No voice processing pipeline for real-time interactions, Scattered chat histories without thread management, Limited multi-platform support. Yoga apps, fitness coaches, and wellness platforms required a scalable backend that could handle voice-to-voice AI interactions while maintaining conversation context and user profiles seamlessly.'
    },
    userBase: {
      title: 'User Base',
      description: 'The platform serves multiple user segments: End Users — Yoga practitioners seeking guided sessions, Fitness enthusiasts needing personalized coaching, Wellness seekers wanting mental health conversations. They interact via Flutter mobile app (APK) and React.js web interface. Administrators — Manage user profiles, Monitor AI performance, Configure system settings. Developers — Integrate via REST APIs for custom wellness applications. The system supports multi-threaded conversations per user, ensuring personalized experiences across different wellness contexts.'
    },
    approach: {
      title: 'Our Approach',
      description: 'We architected Zenn AI Backend as a comprehensive wellness AI engine: Multi-channel authentication with phone/email OTP via Twilio and Nodemailer, LangGraph integration with "yoga_assistant" AI for contextual, domain-specific responses, Complete voice pipeline: AWS Transcribe (STT) → AI processing → AWS Polly (TTS), Multi-threaded chat system with full history storage and sequence tracking, MySQL database for scalable user management and conversation persistence, AWS S3 for audio file storage with automatic cleanup. The architecture ensures seamless voice-to-voice interactions while maintaining conversation intelligence across sessions.'
    },
    detailedAnalysis: {
      title: 'The Full Story',
      paragraphs: [
        'Zenn AI Backend emerged from the need to create a production-ready wellness assistant that could understand context, remember conversations, and interact naturally through both voice and text.',
        'The system architecture follows a complete workflow: Users authenticate via phone/email OTP, receive JWT tokens for secure sessions, engage in multi-threaded conversations with context-aware AI, and experience seamless voice interactions through a full transcription → AI → synthesis pipeline. Every conversation thread maintains its own history, enabling personalized wellness guidance across different topics like yoga poses, workout plans, or mental health support.'
      ],
      sections: [
        {
          title: 'Authentication & User Management',
          paragraphs: [
            'The authentication system supports dual channels: Phone OTP via Twilio SMS and Email OTP via Nodemailer. Upon OTP verification, the system automatically creates user profiles if they don\'t exist, generates JWT tokens for secure API access, stores verification status and session data. User profiles include: Verification status, Session management, Profile metadata. This enables frictionless onboarding while maintaining security standards.'
          ]
        },
        {
          title: 'AI Chat System with LangGraph',
          paragraphs: [
            'The chat system integrates LangGraph SDK with a specialized "yoga_assistant" AI model. Features include: Context-aware responses based on conversation history, Multi-chat threads per user with independent conversation contexts, Full history storage with sequence tracking, Endpoints for sending queries (POST /api/auth/chat-question) and retrieving history (POST /api/auth/chat-list). Each thread maintains its own sequence, allowing users to have separate conversations about different wellness topics simultaneously. The AI understands yoga terminology, fitness concepts, and wellness contexts to deliver personalized guidance.'
          ]
        },
        {
          title: 'Complete Voice Processing Pipeline',
          paragraphs: [
            'The voice system provides three key endpoints: Voice-to-Text (POST /api/voice/voice-to-text) — Uses AWS Transcribe for accurate audio transcription, supports multiple audio formats (WebM, MP3, etc.), handles format detection automatically. Text-to-Voice (POST /api/voice/text-to-voice) — Uses AWS Polly for natural voice synthesis, supports long text chunking for seamless audio generation, returns public S3 URLs for audio playback. Voice-to-Voice (POST /api/voice/voice-to-voice) — Complete pipeline: User records audio → AWS Transcribe converts to text → AI processes query → AWS Polly synthesizes response → Audio URL returned. All audio files auto-upload to S3 with public URLs and temporary storage cleanup.'
          ]
        },
        {
          title: 'Multi-Platform Frontend Support',
          paragraphs: [
            'Mobile App (Flutter): Cross-platform native app compiled as Android APK, Features voice recording and playback using native plugins, Interactive chat interface with text and voice input, OTP login integration with backend, Local state management and native device permissions for microphone access. Web App (React.js): React 18 with functional components and hooks, SCSS/Sass for modular styling, Ant Design (Antd) UI library for professional components, Login and OTP verification forms, Multi-thread chat interface, Voice recording and playback controls, Responsive design for desktop and mobile browsers, React Router DOM for SPA navigation, Axios for HTTP requests with streaming support.'
          ]
        },
        {
          title: 'AWS Infrastructure & Deployment',
          paragraphs: [
            'The system is deployed on AWS EC2 with comprehensive infrastructure: EC2 Instance (98.86.74.102) with secure access, IAM user (serenityai-dev) for AWS service access, S3 buckets for audio file storage with lifecycle policies, AWS Transcribe for speech-to-text processing, AWS Polly for text-to-speech synthesis, MySQL database for user and chat data persistence. The deployment supports scalable user management, automatic resource cleanup, and high availability for production wellness applications.'
          ]
        }
      ],
      quote: 'Wellness deserves intelligence. Zenn AI delivers context-aware conversations and seamless voice interactions — making every wellness journey personal and accessible.'
    },
    workflow: [
      {
        step: '01',
        title: 'Discovery & Architecture Planning',
        duration: 'Week 1-2',
        description: 'We analyzed wellness application requirements: Voice interaction patterns, Authentication flows, Conversation context needs, Multi-platform deployment strategies. This informed the API design and database schema.',
        deliverables: ['API endpoint specifications', 'Database schema design', 'Voice pipeline architecture', 'Authentication flow diagrams'],
        color: 'blue'
      },
      {
        step: '02',
        title: 'Authentication & User Management',
        duration: 'Week 3-4',
        description: 'Built dual-channel OTP system: Twilio SMS integration for phone OTP, Nodemailer for email OTP, JWT token generation and validation, Automatic user profile creation, Secure session management.',
        deliverables: ['OTP service modules', 'JWT middleware', 'User profile system', 'Session management'],
        color: 'purple'
      },
      {
        step: '03',
        title: 'AI Chat System Integration',
        duration: 'Week 5-8',
        description: 'Integrated LangGraph SDK and built chat infrastructure: Yoga assistant AI configuration, Multi-threaded conversation system, Chat history storage with sequence tracking, Context-aware response generation, MySQL database optimization for chat data.',
        deliverables: ['LangGraph integration', 'Chat controller', 'Thread management system', 'History storage'],
        color: 'green'
      },
      {
        step: '04',
        title: 'Voice Processing Pipeline',
        duration: 'Week 9-12',
        description: 'Developed complete voice system: AWS Transcribe integration for STT, AWS Polly integration for TTS, Audio format detection and conversion, S3 upload and URL management, Voice-to-voice pipeline orchestration, Long text chunking for Polly.',
        deliverables: ['Transcribe service', 'Polly service', 'Audio upload system', 'Voice-to-voice pipeline'],
        color: 'blue'
      },
      {
        step: '05',
        title: 'Frontend Development & Deployment',
        duration: 'Week 13-16',
        description: 'Built multi-platform frontends: Flutter mobile app with voice/chat features, React.js web app with Ant Design components, SCSS styling system, API integration with error handling, Responsive design implementation. Deployed backend on AWS EC2 with infrastructure setup.',
        deliverables: ['Flutter APK', 'React web application', 'AWS EC2 deployment', 'Production configuration'],
        color: 'green'
      }
    ],
    techStack: [
      { name: 'Node.js + Express.js', description: 'REST API server with CORS and middleware', icon: 'server', iconColor: 'text-green-400' },
      { name: 'LangGraph SDK', description: 'AI conversation management', icon: 'zap', iconColor: 'text-yellow-400' },
      { name: 'MySQL', description: 'Users, chats, and conversation storage', icon: 'database', iconColor: 'text-emerald-400' },
      { name: 'AWS Transcribe', description: 'Speech-to-text processing', icon: 'smartphone', iconColor: 'text-purple-400' },
      { name: 'AWS Polly', description: 'Text-to-speech synthesis', icon: 'hard-drive', iconColor: 'text-orange-400' },
      { name: 'AWS S3', description: 'Audio file storage', icon: 'hard-drive', iconColor: 'text-blue-300' },
      { name: 'Twilio', description: 'SMS OTP delivery', icon: 'code-2', iconColor: 'text-blue-400' },
      { name: 'Nodemailer', description: 'Email OTP delivery', icon: 'wind', iconColor: 'text-cyan-400' },
      { name: 'JWT + Bcryptjs', description: 'Secure authentication', icon: 'zap', iconColor: 'text-yellow-300' },
      { name: 'Flutter', description: 'Cross-platform mobile app (APK)', icon: 'smartphone', iconColor: 'text-indigo-400' },
      { name: 'React.js + SCSS', description: 'Web application frontend', icon: 'code-2', iconColor: 'text-cyan-400' },
      { name: 'Ant Design (Antd)', description: 'UI component library', icon: 'wind', iconColor: 'text-purple-300' },
      { name: 'AWS EC2', description: 'Production deployment', icon: 'server', iconColor: 'text-green-300' }
    ],
    impact: [
      { value: 'Multi-Platform', label: 'Flutter APK + React Web Support' },
      { value: 'Voice-to-Voice', label: 'Complete AI Pipeline' },
      { value: 'Context-Aware', label: 'Multi-Thread Conversations' }
    ],
    liveUrl: '#'
  },
  {
    id: 'ai-diagnostics',
    title: 'AI Diagnostics Scanner — Interpreting Health with Intelligence',
    subtitle: 'Where medical data becomes clarity, and clarity becomes faster diagnosis',
    description: 'The AI Diagnostics Scanner automates the first layer of clinical interpretation by analyzing radiology images, pathology reports, and handwritten medical results. It combines computer vision with natural language processing to highlight anomalies, extract critical values, interpret ranges, and produce a trusted medical summary — all while maintaining hospital-grade compliance.',
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
        'This project required building a system that respects medical nuance, handles unstructured data, and delivers reliable insights.'
      ],
      sections: [
        {
          title: 'Radiology AI Engine',
          paragraphs: [
            'We implemented: CNN + Vision Transformer models (for chest and bone X-rays), Heatmaps that visualize areas of concern, Severity scoring, Multi-class detection: Pneumonia, TB indications, Lung opacity, Cardiomegaly, Fractures, Dental decay markers. Each image undergoes: Pre-processing, Contrast enhancement, Noise correction, AI inference, Result scoring. This produces a structured radiology insight.'
          ]
        },
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
      { value: '80%', label: 'Reduction in Manual Screening Time' },
      { value: 'High', label: 'Confidence Anomaly Detection' },
      { value: 'Instant', label: 'Extraction from Complex Formats' },
      { value: 'Improved', label: 'Patient Understanding' },
      { value: 'Lower', label: 'Doctor Burnout' },
      { value: 'Clinic-Ready', label: 'Reliability' }
    ],
    liveUrl: '#'
  },
];

