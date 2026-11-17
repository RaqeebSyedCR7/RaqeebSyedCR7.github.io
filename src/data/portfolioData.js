/**
 * Verified portfolio data sourced from S. Abdul Raqeeb's LinkedIn profile
 * (https://www.linkedin.com/in/s-abdul-raqeeb-483a691a0) and active workspace systems.
 */

export const PROFILE = {
  name: 'S. Abdul Raqeeb',
  monogram: 'SAR',
  pronouns: 'He/Him',
  headline: 'Senior Operations Executive @ RAIZ HORIZON | Vibe Coder · AI Developer',
  subHeadline: 'Creative Technologist · Enterprise Database Specialist · Marketing Strategist · Interior Designer',
  location: 'Dubai, United Arab Emirates',
  availability: 'Open to Work · UAE On-site & Hybrid',
  followers: '876',
  connections: '500+',
  manifesto: 'LEVERAGING AI TO ITS FULLEST POTENTIAL IS ACTUAL INTELLIGENCE',
  avatarUrl: 'https://avatars.githubusercontent.com/u/85108211?v=4',
  about:
    'With close to 4 years of experience as a results-driven professional holding a BCA degree (8.9 CGPA), I bridge operational leadership, enterprise database engineering, and AI-powered creative development. From maintaining multi-country Daimler database pipelines at CGI to spearheading IT, 3D web experiences, 10-agent AI workflows, and 40% client growth at RAIZ HORIZON in Dubai, I build systems where aesthetic precision meets measurable business scale.',
  contact: {
    email: 'raqeebsyed6829@gmail.com',
    uaePhone: '+971 567000529',
    uaeWhatsapp: 'https://wa.me/971567000529',
    indiaPhone: '+91-63602 65041',
    linkedin: 'https://www.linkedin.com/in/s-abdul-raqeeb-483a691a0',
    github: 'https://github.com/RaqeebSyedCR7',
    companySite: 'https://raizhorizon.com',
  },
};

export const IMPACT_KPIS = [
  {
    value: '+40%',
    label: 'Client Growth Spearheaded',
    source: 'RAIZ HORIZON · UAE',
  },
  {
    value: '-60%',
    label: 'Patch Downtime Reduced',
    source: 'CGI · Daimler Multi-Country DBs',
  },
  {
    value: '+85%',
    label: 'Software Efficiency Gain',
    source: 'CGI · Threshold Monitoring',
  },
  {
    value: '-40%',
    label: 'Query Latency & Manual Ops',
    source: '50+ DAX Functions & Automation',
  },
  {
    value: '10',
    label: 'Autonomous AI Agents Live',
    source: 'Paperclip + n8n + Postgres ERP',
  },
  {
    value: '8.9',
    label: 'BCA CGPA · Sports Boy 2019',
    source: 'Bengaluru City University',
  },
];

export const MARQUEE_TOP = [
  'VIBE CODING',
  'AI AGENT ORCHESTRATION',
  'THREE.JS 3D SYSTEMS',
  'RAIZ HORIZON UAE',
  'MARKETING STRATEGY',
  'INTERIOR DESIGN',
  'N8N WORKFLOWS',
  'DAIMLER DB OPS',
];

export const MARQUEE_BOTTOM = [
  'POWER BI · 50+ DAX',
  'TABLEAU ANALYTICS',
  'POSTGRESQL ERP',
  'REACT + TAILWIND',
  'CLOUDFLARE PAGES',
  'BILINGUAL EN / AR UI',
  'DELIVERY AUTOMATION',
  'STRATEGIC CLOSING',
];

export const SERVICES = [
  {
    id: 'vibe-ai',
    title: 'Vibe Coding & AI Systems',
    badge: 'Core Engineering',
    description:
      'End-to-end rapid product engineering, multi-agent Paperclip/n8n orchestrators, custom React + Three.js experiences, and zero-lock-in cloud deployments.',
    tags: ['React + Vite', 'Three.js WebGL', 'Multi-Agent AI', 'n8n & Postgres'],
  },
  {
    id: 'marketing',
    title: 'Marketing Strategy',
    badge: 'LinkedIn Service',
    description:
      'Full-funnel growth architecture combining SEO technical content engines, automated 4K video/reel distribution across LinkedIn, Meta & YouTube, and high-ticket B2B closing.',
    tags: ['B2B Growth (+40%)', 'Omni-Channel Funnels', 'SEO Content Engines', 'Client Acquisition'],
  },
  {
    id: 'interior',
    title: 'Interior Design',
    badge: 'LinkedIn Service',
    description:
      'Spatial composition thinking spanning architectural layouts, lighting harmony, and physical-to-3D environment visualization honed alongside industrial spatial engineering.',
    tags: ['Spatial Flow', '3D Visualization', 'Material Aesthetics', 'Modern Concepts'],
  },
  {
    id: 'ops-data',
    title: 'Operations & BI Intelligence',
    badge: 'Enterprise Proven',
    description:
      'Mission-critical database maintenance, ETL pipelines, DAX performance modeling, and automated inventory/order orchestration built for zero-error execution.',
    tags: ['Daimler DB Ops', 'Power BI & Tableau', 'ETL Pipelines', 'Inventory Automation'],
  },
];

export const PROJECTS = [
  {
    id: 'raiz-horizon',
    category: '3D & Web Design',
    title: 'RAIZ HORIZON Digital Flagship & 3D Rack Configurator',
    subtitle: 'Industrial Spatial Web Platform · UAE & GCC',
    year: '2025 — 2026',
    role: 'IT Lead & Full-Stack Vibe Coder',
    summary:
      'Engineered the flagship web presence for RAIZ HORIZON serving Dubai and the GCC — featuring an interactive Three.js 3D Rack Configurator, a dual-vertical portal (/explore), 17 industrial product systems, and a 12-article bilingual EN/AR engineering blog with embedded 4K briefings.',
    metrics: [
      { k: 'Client Growth', v: '+40%' },
      { k: 'Product Systems', v: '17' },
      { k: 'Bilingual Articles', v: '12 EN/AR' },
      { k: 'Edge Hosting', v: 'Cloudflare' },
    ],
    highlights: [
      'Removed vendor lock-in SDKs and decoupled frontend routing onto Cloudflare Pages global edge nodes (300+ PoPs including Dubai/UAE).',
      'Built interactive 3D Warehouse Rack Configurator with Three.js and responsive bilingual English/Arabic RTL rendering.',
      'Integrated RFQ lead capture directly into PostgreSQL ERP and n8n automation pipelines with 9.5/10 SPF/DKIM/DMARC email deliverability.',
    ],
    stack: ['React 18', 'Vite 6', 'Three.js', 'Tailwind CSS', 'Framer Motion', 'Cloudflare Pages'],
    liveUrl: 'https://raizhorizon.com',
    visualType: 'rack3d',
  },
  {
    id: 'paperclip-n8n',
    category: 'AI & Automation',
    title: '10-Agent AI Boardroom & Multi-Platform Media Pipeline',
    subtitle: 'Autonomous Content, Video & ERP Orchestrator',
    year: '2026',
    role: 'AI Systems Architect',
    summary:
      'Designed an autonomous 10-agent organization (Paperclip RAI-1 to RAI-10) paired with FFmpeg video rendering and n8n webhook pipelines to generate, render, and publish 16:9 briefings and 9:16 social reels across LinkedIn, Instagram, Facebook, and YouTube.',
    metrics: [
      { k: 'AI Agents', v: '10 Active' },
      { k: 'Video Formats', v: '16:9 + 9:16' },
      { k: 'Platforms', v: '4 Channels' },
      { k: 'State Store', v: 'PostgreSQL' },
    ],
    highlights: [
      'Orchestrated 10 specialized autonomous agents covering technical SEO writing, 4K/MP4 industrial media creation, and frontend/backend delivery.',
      'Automated 16:9 blog briefing videos and 1080×1920 vertical Reels/Shorts rendered via Node + FFmpeg.',
      'Connected n8n workflows (social_media_publisher.json) with PostgreSQL tables (marketing_posts, leads, quotation_requests, email_log).',
    ],
    stack: ['Node.js', 'Paperclip AI', 'n8n Workflows', 'PostgreSQL', 'FFmpeg', 'Meta & LinkedIn APIs'],
    liveUrl: 'https://raizhorizon.com/blog',
    visualType: 'agents',
  },
  {
    id: 'graphify-kg',
    category: 'AI & Automation',
    title: 'Graphify AST Codebase Knowledge Graph',
    subtitle: 'Full-Stack Architecture Intelligence Explorer',
    year: '2026',
    role: 'Automation Engineer',
    summary:
      'Generated and integrated an AST-driven knowledge graph across 1,354 workspace files (~2.21M words), indexing 26,171 nodes and 55,427 relationships across 1,308 structural communities for zero-token instant GraphRAG querying.',
    metrics: [
      { k: 'Graph Nodes', v: '26,171' },
      { k: 'Mapped Edges', v: '55,427' },
      { k: 'Communities', v: '1,308' },
      { k: 'Files Indexed', v: '1,354' },
    ],
    highlights: [
      'Extracted 96% deterministic AST relationships with interactive force-directed HTML visualization.',
      'Enabled sub-second architectural path tracing and call-graph inspection across multi-language Python, PowerShell, JS, and SQL systems.',
    ],
    stack: ['Python', 'GraphRAG', 'AST Parsing', 'NetworkX', 'Interactive HTML Canvas'],
    liveUrl: null,
    visualType: 'graph',
  },
  {
    id: 'netflix-tableau',
    category: 'Data & BI',
    title: 'Netflix Global Content Analytics Dashboard',
    subtitle: 'Interactive BI Visualization · 10,000+ Titles',
    year: '2024',
    role: 'Data Analyst',
    summary:
      'Engineered an interactive Tableau dashboard dissecting over 10,000 Netflix titles across 190+ countries and a 20-year release timeline, pairing multi-dimensional geo-maps, genre trends, and 5 dynamic user filters.',
    metrics: [
      { k: 'Titles Analyzed', v: '10,000+' },
      { k: 'Countries Mapped', v: '190+' },
      { k: 'Time Horizon', v: '20 Years' },
      { k: 'Visual Modes', v: '5 Charts' },
    ],
    highlights: [
      'Mapped international catalog density across 190+ territories alongside 20-year area-chart growth trajectories.',
      'Classified 20+ genres and highlighted top-10 content categories with 5 interactive user filters (descriptions, ratings, genres, release years, durations).',
    ],
    stack: ['Tableau', 'Data Modeling', 'Geo Mapping', 'Interactive Filtering', 'Visual Storytelling'],
    liveUrl: null,
    visualType: 'tableau',
  },
  {
    id: 'family-tree',
    category: '3D & Web Design',
    title: 'My Family Tree Interactive Web App',
    subtitle: 'Hierarchical Ancestry Visualizer · GitHub Pages',
    year: '2022',
    role: 'Frontend Designer & Developer',
    summary:
      'Built an interactive, responsive web application using semantic HTML, CSS animations, and vanilla JavaScript to visualize expandable ancestry hierarchies with real-time LocalStorage persistence and customizable themes.',
    metrics: [
      { k: 'Architecture', v: 'Expandable Tree' },
      { k: 'Persistence', v: 'LocalStorage' },
      { k: 'Styling', v: 'Custom Themes' },
      { k: 'Hosting', v: 'GitHub Pages' },
    ],
    highlights: [
      'Supports adding, editing, and deleting family members dynamically in-browser with zero backend overhead.',
      'Provides customizable node colors, typography, and CSS transition animations across desktop and mobile viewports.',
    ],
    stack: ['HTML5', 'CSS3 Animations', 'JavaScript', 'LocalStorage API', 'GitHub Pages'],
    liveUrl: 'https://github.com/RaqeebSyedCR7/Familytree.github.io',
    visualType: 'tree',
  },
];

export const EXPERIENCES = [
  {
    id: 'raiz',
    role: 'Senior Operations Executive',
    company: 'RAIZ HORIZON',
    type: 'Full-time',
    dates: 'Feb 2025 — Present',
    duration: '1 yr 10 mos',
    location: 'Dubai, United Arab Emirates · On-site',
    badge: 'Current Role',
    impact: '+40% Client Growth',
    bullets: [
      'Oversaw the IT section of RAIZ HORIZON, integrating modern web engineering, 3D visualization, and AI automation.',
      'Spearheaded strategic market analysis initiatives that increased client growth by 40%.',
      'Closed high-profile B2B clients by identifying top procurers and tailoring technical storage solutions.',
      'Managed end-to-end operations, sales records, orders, inventory, and delivery automation across the organization.',
    ],
    skills: ['IT Leadership', 'Sales Strategy Development', 'Client Acquisition & Retention', 'Delivery Automation', 'AI Operations'],
  },
  {
    id: 'meriskill',
    role: 'Data Analyst',
    company: 'MeriSKILL',
    type: 'Internship',
    dates: 'May 2024 — Jun 2024',
    duration: '2 mos',
    location: 'India · Remote',
    badge: 'BI & ETL',
    impact: '-40% Query Time · 50+ DAX',
    bullets: [
      'Performed comprehensive data cleansing and transformation tasks using structured ETL pipelines for full data accuracy.',
      'Developed a reusable library of 50+ DAX functions, strengthening data models and cutting query execution times by 40%.',
      'Designed dynamic, interactive dashboards enabling executive data-driven decision-making.',
    ],
    skills: ['ETL', 'DAX (50+ Functions)', 'Microsoft Power BI', 'Data Modeling', 'Data Visualization'],
  },
  {
    id: 'cgi',
    role: 'System Engineer',
    company: 'CGI',
    type: 'Full-time',
    dates: 'Sep 2022 — Sep 2024',
    duration: '2 yrs 1 mo',
    location: 'Bengaluru, Karnataka, India · On-site',
    badge: 'Enterprise · Daimler',
    impact: '-60% Downtime · +85% Efficiency',
    bullets: [
      'Maintained mission-critical Daimler databases across 4+ countries with continuous data integrity.',
      'Supported patch release pipelines for regular software updates, cutting system downtime by up to 60%.',
      'Monitored database thresholds proactively, boosting overall software efficiency by 85%.',
      'Automated recurring database maintenance routines, reducing manual workload by 40% and curbing data vulnerabilities by 30%.',
    ],
    skills: ['Database Management', 'Patch Pipelines', 'Process Automation', 'Cross-Functional Ops', 'SQL'],
  },
  {
    id: 'ucct',
    role: 'Sales Executive in Advertisement',
    company: 'United Capital Club Tourism Services Pvt Ltd',
    type: 'Full-time',
    dates: 'Mar 2019 — Sep 2020',
    duration: '1 yr 7 mos',
    location: 'Bengaluru, Karnataka, India · On-site',
    badge: 'Advertising & Growth',
    impact: 'Exceeded Revenue Targets',
    bullets: [
      'Acquired and nurtured key advertising accounts while executing tailored revenue-growth strategies.',
      'Consistently exceeded sales targets through consultative negotiation and client closing.',
      'Collaborated closely with creative teams to deliver custom advertising campaigns that elevated brand visibility.',
    ],
    skills: ['Advertising Strategy', 'Negotiation', 'Creative Collaboration', 'Revenue Growth'],
  },
  {
    id: 'nsdc',
    role: 'Sales And Service Executive',
    company: 'National Skill Development Corporation (Whirlpool Corporation)',
    type: 'Full-time',
    dates: 'Jan 2019 — Jun 2019',
    duration: '6 mos',
    location: 'Bengaluru, Karnataka, India · On-site',
    badge: 'NSQF Level-4',
    impact: 'Consultative Sales & Tech Support',
    bullets: [
      'Applied consultative selling, cross-selling, upselling, and live product demonstrations to grow transaction value.',
      'Managed field sales territory and delivered hands-on Whirlpool appliance technical support to drive long-term retention.',
    ],
    skills: ['Consultative Selling', 'Territory Management', 'Product Demonstrations', 'Technical Support'],
  },
];

export const SKILL_GROUPS = [
  {
    id: 'ai-dev',
    label: 'AI, Vibe Coding & Web 3D',
    skills: [
      'Vibe Coding',
      'AI Agent Orchestration',
      'React & Vite',
      'Three.js / WebGL',
      'JavaScript (ES6+)',
      'Tailwind CSS',
      'Framer Motion',
      'n8n Automation',
      'HTML5 & CSS3',
      'Java',
      'C++',
      'Node.js',
    ],
  },
  {
    id: 'data-bi',
    label: 'Data Science, BI & Databases',
    skills: [
      'Microsoft Power BI',
      'DAX (50+ Functions)',
      'Tableau',
      'SQL',
      'PostgreSQL',
      'ETL Pipelines',
      'Data Modeling',
      'Data Analytics',
      'Database Management',
      'Machine Learning & AI',
      'Data Cleansing',
      'Threshold Monitoring',
    ],
  },
  {
    id: 'ops-strategy',
    label: 'Operations, Growth & Design',
    skills: [
      'Marketing Strategy',
      'Interior Design',
      'Sales Strategy Development',
      'Client Acquisition & Retention',
      'General Business Analysis',
      'Delivery Automation',
      'Inventory Management',
      'Project Planning',
      'Customer Experience',
      'Consultative Selling',
      'Territory Management',
      'Problem Solving',
    ],
  },
];

export const EDUCATION = [
  {
    school: 'Tutort Academy',
    degree: 'Full Stack Data Science and Machine Learning · Artificial Intelligence',
    dates: 'Apr 2024 — Jan 2025',
    highlight: 'AI & Data Science Research',
    skills: ['SQL', 'Microsoft Power BI', 'Machine Learning', 'Artificial Intelligence'],
  },
  {
    school: 'Bengaluru City University',
    degree: "Bachelor's Degree in Computer Science & Information Science (BCA)",
    dates: 'Apr 2019 — Sep 2022',
    highlight: 'CGPA 8.9 · Sports Boy of the Year 2019',
    activities: 'Cricket, Football, Athletics, Anchoring & Class Representative',
    skills: ['Java', 'C++', 'Computer Applications', 'Algorithms'],
  },
];

export const CERTIFICATIONS = [
  {
    title: 'Power-BI Beginner to Intermediate',
    issuer: 'Cursa',
    date: 'Jun 2024',
    credentialId: 'u3188278',
    summary: 'Data import & transformation, data modeling, interactive reports, dashboards, and collaboration.',
  },
  {
    title: 'National Skill Qualifications Framework (NSQF) Level-4',
    issuer: 'National Skill Development Corporation (NSDC)',
    date: 'Jun 2019',
    credentialId: 'WOIL/2018-19/309200837613',
    summary: 'Certified in Project Planning, Customer Experience, and technical service operations.',
  },
];

export const RECOMMENDATION = {
  author: 'Abdul Razzaq',
  role: 'Data Analyst (Sales Operations) · Salesforce CRM · Data Quality & Enrichment',
  date: 'April 29, 2024',
  relation: 'Studied together',
  quote:
    'I highly recommend Abdul Raqeeb for his exceptional dedication to academic excellence and outstanding communication skills. Raqeeb consistently demonstrates a strong work ethic and a willingness to support others. He would be a valuable addition to any team or organization.',
};
