/**
 * Vertex Loop Pvt Ltd — Global Geographic Entity & Semantic Taxonomy Engine
 * 
 * Strict Ground Truth:
 * - Single Official Physical Headquarters: G2, Venkatapuram, Ambattur, Chennai - 600053, Tamil Nadu, India
 * - Telephone: +91 94457 70160
 * - Email: hello@vertexloop.in
 * - All other geographic entities represent remote engineering service areas, corporate training markets, and global technology partnerships.
 * 
 * Geographic Hierarchy:
 * Continent -> Country -> State/Province/Region -> District/County -> City/Town -> Locality/Suburb -> Village
 */

export type GeoLevel =
  | 'continent'
  | 'country'
  | 'state'
  | 'province'
  | 'region'
  | 'district'
  | 'county'
  | 'prefecture'
  | 'city'
  | 'town'
  | 'locality'
  | 'suburb'
  | 'village'

export interface GeoFAQ {
  q: string
  a: string
}

export interface GeoEntity {
  slug: string
  slugPath: string[]
  name: string
  fullName: string
  level: GeoLevel
  parentSlug?: string
  countryCode: string
  continent: string
  isPhysicalHQ: boolean
  deliveryModel: string
  timeZone: string
  currency: string
  headline: string
  metaDescription: string
  businessContext: string
  targetIndustries: string[]
  keyServices: string[]
  academyOfferings: string[]
  faqs: GeoFAQ[]
  indexable: boolean
  hasDedicatedPage: boolean
}

export interface ServiceLocationPair {
  serviceSlug: string
  serviceTitle: string
  geoSlug: string
  geoName: string
  relationship: string
  searchIntent: 'commercial' | 'informational' | 'transactional' | 'local' | 'educational' | 'corporate' | 'international' | 'institutional'
}

export const GEO_LOCATIONS: GeoEntity[] = [
  // ============================================================================
  // ── 0. CONTINENTS (Entity Ontological Nodes — Hierarchy Anchors) ──
  // ============================================================================
  {
    slug: 'asia',
    slugPath: ['asia'],
    name: 'Asia',
    fullName: 'Continent of Asia',
    level: 'continent',
    countryCode: 'AS',
    continent: 'Asia',
    isPhysicalHQ: true,
    deliveryModel: 'HQ in Chennai, India with Pan-Asian Remote Engineering Pods',
    timeZone: 'IST / GST / SGT',
    currency: 'INR / AED / SGD',
    headline: 'AI Development & Enterprise Engineering Across Asia',
    metaDescription: 'Vertex Loop Pvt Ltd delivers custom AI development, SaaS platforms, and cloud engineering across key Asian tech markets.',
    businessContext: 'Asia is the epicenter of global software talent, engineering scale, and rapid AI adoption.',
    targetIndustries: ['Technology & SaaS', 'Financial Services', 'Manufacturing', 'Logistics'],
    keyServices: ['Custom AI Solutions', 'Microservices Engineering', 'Cloud DevOps', 'Crack Leap Tech Academy'],
    academyOfferings: ['AI & Full-Stack Bootcamps', 'College Campus Training', 'Corporate Upskilling'],
    faqs: [],
    indexable: false,
    hasDedicatedPage: false,
  },
  {
    slug: 'north-america',
    slugPath: ['north-america'],
    name: 'North America',
    fullName: 'Continent of North America',
    level: 'continent',
    countryCode: 'NA',
    continent: 'North America',
    isPhysicalHQ: false,
    deliveryModel: 'Remote Dedicated Engineering Pods with US/Canada Time-Zone Overlap',
    timeZone: 'EST / CST / MST / PST',
    currency: 'USD / CAD',
    headline: 'Frontier AI & Custom Software Engineering for North America',
    metaDescription: 'Offshore AI engineering pods and cloud architecture for US and Canadian enterprises.',
    businessContext: 'North American enterprises require high-velocity AI product development and cloud cost optimization.',
    targetIndustries: ['B2B SaaS', 'Healthcare & HealthTech', 'FinTech', 'LegalTech'],
    keyServices: ['Autonomous AI Agents', 'RAG Knowledge Systems', 'Next.js Web Applications', 'AWS Cloud DevOps'],
    academyOfferings: ['Advanced Tech Immersion'],
    faqs: [],
    indexable: false,
    hasDedicatedPage: false,
  },
  {
    slug: 'europe',
    slugPath: ['europe'],
    name: 'Europe',
    fullName: 'Continent of Europe',
    level: 'continent',
    countryCode: 'EU',
    continent: 'Europe',
    isPhysicalHQ: false,
    deliveryModel: 'Remote Software Engineering & GDPR-Compliant Cloud Solutions',
    timeZone: 'GMT / BST / CET',
    currency: 'GBP / EUR',
    headline: 'Enterprise AI & Cloud Infrastructure for European Markets',
    metaDescription: 'GDPR-compliant software engineering and AI systems for UK and European businesses.',
    businessContext: 'European markets demand strict privacy compliance, resilient cloud architecture, and measurable AI ROI.',
    targetIndustries: ['Fintech', 'CleanTech', 'Supply Chain', 'E-Commerce'],
    keyServices: ['Enterprise Microservices', 'Private VPC AI Deployments', 'Cloud Architecture'],
    academyOfferings: ['Corporate Technical Training'],
    faqs: [],
    indexable: false,
    hasDedicatedPage: false,
  },
  {
    slug: 'oceania',
    slugPath: ['oceania'],
    name: 'Oceania',
    fullName: 'Continent of Oceania',
    level: 'continent',
    countryCode: 'OC',
    continent: 'Oceania',
    isPhysicalHQ: false,
    deliveryModel: 'Remote Engineering Pods with AEST Overlap',
    timeZone: 'AEST / AEDT',
    currency: 'AUD ($)',
    headline: 'Cloud Architecture & AI Development for Australia & Oceania',
    metaDescription: 'Scalable cloud infrastructure and custom software engineering for Australian enterprises.',
    businessContext: 'Rapidly growing tech ecosystems in Sydney, Melbourne, and Brisbane require scalable engineering capacity.',
    targetIndustries: ['Mining & Resources Tech', 'FinTech', 'Agriculture Tech', 'Enterprise SaaS'],
    keyServices: ['AWS/GCP Cloud Migrations', 'Custom SaaS Engineering', 'Technical SEO & GEO'],
    academyOfferings: ['Corporate AI Workshops'],
    faqs: [],
    indexable: false,
    hasDedicatedPage: false,
  },

  // ============================================================================
  // ── 1. INDIA (Country — Headquarters & Core Market) ──
  // ============================================================================
  {
    slug: 'india',
    slugPath: ['india'],
    name: 'India',
    fullName: 'Republic of India',
    level: 'country',
    parentSlug: 'asia',
    countryCode: 'IN',
    continent: 'Asia',
    isPhysicalHQ: true,
    deliveryModel: 'Operational Headquarters (Ambattur, Chennai) & Pan-India Remote / On-Site Delivery',
    timeZone: 'IST (UTC+5:30)',
    currency: 'INR (₹)',
    headline: 'Enterprise AI Development, Software Engineering & Tech Academy in India',
    metaDescription:
      'Vertex Loop Pvt Ltd is an Indian technology ecosystem headquartered in Ambattur, Chennai. We deliver custom AI solutions, SaaS platforms, cloud architecture, and technical training across India.',
    businessContext:
      'As an indigenous technology engineering firm based in Tamil Nadu, Vertex Loop Pvt Ltd partners with Indian enterprises, fast-growing startups, universities, and government bodies to deploy mission-critical AI agents, ERP systems, and cloud infrastructure.',
    targetIndustries: [
      'Information Technology & SaaS',
      'Banking, Financial Services & Insurance (BFSI)',
      'Manufacturing & Supply Chain',
      'Higher Education & Technical Universities',
      'Healthcare & Diagnostics',
      'Retail & Digital Commerce',
    ],
    keyServices: [
      'Custom AI & Generative AI Development',
      'Autonomous Multi-Agent Networks & RAG Systems',
      'Enterprise Custom Software & Microservices',
      'Cloud Architecture, AWS Migration & DevOps',
      'Digital Marketing, AEO & Technical SEO',
      'Proprietary SaaS: ERP, HRMS, Invoicing, SCRIPTen',
    ],
    academyOfferings: [
      'Python Programming & Data Engineering',
      'Generative AI & Agentic AI Bootcamps',
      'AWS Cloud Architecture & Kubernetes DevOps',
      'College Campus Placement Training & Workshops',
      'Corporate Technical Team Upskilling',
    ],
    faqs: [
      {
        q: 'Where is Vertex Loop Pvt Ltd headquartered in India?',
        a: 'Vertex Loop Pvt Ltd is headquartered at G2, Venkatapuram, Ambattur, Chennai - 600053, Tamil Nadu, India. Contact: +91 94457 70160, Email: hello@vertexloop.in.',
      },
      {
        q: 'Does Vertex Loop serve clients across all Indian states and cities?',
        a: 'Yes. While our physical headquarters is located in Ambattur, Chennai, our engineering teams provide remote delivery and on-site architectural consulting for clients across all Indian states.',
      },
      {
        q: 'Does Vertex Loop provide campus technology training for colleges in India?',
        a: 'Yes. Through our Crack Leap technology education ecosystem, we conduct specialized campus training, bootcamps, and curriculum workshops in Python, AI, AWS, and DevOps for universities across India.',
      },
      {
        q: 'How can Indian enterprises engage Vertex Loop for custom software development?',
        a: 'Enterprises can schedule an architectural discovery session by submitting the contact form, emailing hello@vertexloop.in, or calling our headquarters desk at +91 94457 70160.',
      },
    ],
    indexable: true,
    hasDedicatedPage: true,
  },

  // ── 2. TAMIL NADU (State — India) ──
  {
    slug: 'tamil-nadu',
    slugPath: ['india', 'tamil-nadu'],
    name: 'Tamil Nadu',
    fullName: 'State of Tamil Nadu',
    level: 'state',
    parentSlug: 'india',
    countryCode: 'IN',
    continent: 'Asia',
    isPhysicalHQ: true,
    deliveryModel: 'Registered Physical Headquarters in Ambattur, Chennai + State-wide On-Site Delivery',
    timeZone: 'IST (UTC+5:30)',
    currency: 'INR (₹)',
    headline: 'Tamil Nadu Enterprise Software Architecture, AI Innovation & Tech Bootcamps',
    metaDescription:
      'Headquartered in Ambattur, Chennai, Vertex Loop Pvt Ltd provides Tamil Nadu enterprises and colleges with advanced AI engineering, cloud solutions, and Crack Leap tech bootcamps.',
    businessContext:
      'Tamil Nadu is one of India’s foremost industrial, SaaS, and educational powerhouses. Vertex Loop operates directly within this ecosystem, collaborating with manufacturers, SaaS companies, and prestigious engineering institutions.',
    targetIndustries: [
      'Automotive & Industrial Manufacturing',
      'SaaS & Software Product Companies',
      'Textiles & Export Logistics',
      'Engineering Colleges & Deemed Universities',
      'Healthcare & Hospital Networks',
    ],
    keyServices: [
      'Bespoke Enterprise Software & ERP Solutions',
      'Generative AI & Agentic Workflow Automation',
      'AWS & GCP Cloud DevOps Migration',
      'Full-Stack Headless Web Development',
      'Digital Marketing & AI Search Optimization',
    ],
    academyOfferings: [
      'College Campus Bootcamps & Placement Accelerators',
      'Corporate AI & Cloud Workshops',
      'Faculty Development Programs (FDP)',
      'Hands-On Python & Agentic AI Immersion',
    ],
    faqs: [
      {
        q: 'Where is Vertex Loop located in Tamil Nadu?',
        a: 'Our registered single office is at G2, Venkatapuram, Ambattur, Chennai - 600053, Tamil Nadu, India. Phone: +91 94457 70160.',
      },
      {
        q: 'Does Vertex Loop partner with engineering colleges across Tamil Nadu?',
        a: 'Yes. Through Crack Leap, we partner with universities in Chennai, Coimbatore, Madurai, Tiruchirappalli, and Salem to deliver high-impact placement training in Python, AI, AWS, and modern full-stack development.',
      },
    ],
    indexable: true,
    hasDedicatedPage: true,
  },

  // ── 3. CHENNAI (City / District — Physical Headquarters Anchor) ──
  {
    slug: 'chennai',
    slugPath: ['india', 'tamil-nadu', 'chennai'],
    name: 'Chennai',
    fullName: 'Chennai Metropolitan Region & District',
    level: 'city',
    parentSlug: 'tamil-nadu',
    countryCode: 'IN',
    continent: 'Asia',
    isPhysicalHQ: true,
    deliveryModel: 'In-Person Engineering Office & Operational Headquarters at Ambattur, Chennai',
    timeZone: 'IST (UTC+5:30)',
    currency: 'INR (₹)',
    headline: 'AI Development, Software Engineering & Tech Academy in Chennai (Ambattur HQ)',
    metaDescription:
      'Vertex Loop Pvt Ltd is an AI development and enterprise software company in Ambattur, Chennai (G2, Venkatapuram, 600053). Custom AI agents, cloud DevOps, ERP, and software academy.',
    businessContext:
      'Chennai is India’s SaaS capital and a premier industrial innovation center. Vertex Loop’s registered headquarters in Ambattur houses our senior architects, AI researchers, and Crack Leap educators.',
    targetIndustries: [
      'Enterprise SaaS Platforms',
      'Automotive & Industrial Manufacturing (Ambattur/Sriperumbudur corridor)',
      'Financial Technology & Banking Operations',
      'Healthcare Tech & Medical Equipment',
      'Universities & Autonomous Engineering Colleges',
    ],
    keyServices: [
      'Autonomous AI Agent Networks & RAG Knowledge Bases',
      'Custom SaaS & Microservices Development',
      'Cloud Architecture, Terraform & Kubernetes DevOps',
      'High-Performance Next.js & React Engineering',
      'Answer Engine Optimization (AEO) & Generative Engine Optimization (GEO)',
      'Proprietary Products: SCRIPTen, Vertex Loop ERP, HRMS, Invoicing',
    ],
    academyOfferings: [
      'Crack Leap Intensive Full-Stack Software Bootcamps',
      'Applied Generative AI & Agentic Python Programs',
      'AWS Solutions Architect & DevOps Certification Tracks',
      'On-Campus College Immersion Programs in Chennai',
    ],
    faqs: [
      {
        q: 'What is Vertex Loop Pvt Ltd’s exact address in Chennai?',
        a: 'Vertex Loop Pvt Ltd is located at G2, Venkatapuram, Ambattur, Chennai - 600053, Tamil Nadu, India. Contact us at +91 94457 70160 or email hello@vertexloop.in.',
      },
      {
        q: 'Can Chennai clients meet Vertex Loop architects in person?',
        a: 'Yes. Chennai-based enterprises, startups, and academic leaders can schedule in-person technical discovery sessions at our Ambattur office.',
      },
      {
        q: 'What makes Vertex Loop Chennai’s leading AI and software partner?',
        a: 'We combine deep engineering craft, outcome accountability, proprietary SaaS accelerators (ERP, HRMS, SCRIPTen), and Crack Leap talent development under one roof.',
      },
    ],
    indexable: true,
    hasDedicatedPage: true,
  },

  // ── 4. COIMBATORE (City / District — Industrial & Tech Hub, Tamil Nadu) ──
  {
    slug: 'coimbatore',
    slugPath: ['india', 'tamil-nadu', 'coimbatore'],
    name: 'Coimbatore',
    fullName: 'Coimbatore District & Metropolitan Region',
    level: 'city',
    parentSlug: 'tamil-nadu',
    countryCode: 'IN',
    continent: 'Asia',
    isPhysicalHQ: false,
    deliveryModel: 'Remote Engineering Pods & Scheduled On-Site Architectural Consulting from Chennai HQ',
    timeZone: 'IST (UTC+5:30)',
    currency: 'INR (₹)',
    headline: 'Industrial AI Solutions, ERP Software & Campus Tech Bootcamps for Coimbatore',
    metaDescription:
      'Vertex Loop Pvt Ltd brings enterprise AI, custom ERP software, and Crack Leap engineering bootcamps to Coimbatore manufacturers, tech firms, and engineering colleges.',
    businessContext:
      'Known as the Manchester of South India and a booming tier-2 technology hub, Coimbatore features dense manufacturing, textile automation, and premier engineering colleges requiring modern software and AI upskilling.',
    targetIndustries: [
      'Textile Machinery & Precision Manufacturing',
      'Automotive Components & Foundries',
      'Pumps, Motors & Industrial IoT',
      'Engineering & Polytechnic Institutions',
      'Emerging IT & SaaS Companies',
    ],
    keyServices: [
      'Smart Industrial ERP & Inventory Tracking',
      'Computer Vision for Factory Quality Control',
      'Custom Web Applications & API Architecture',
      'Managed AWS Cloud & Disaster Recovery',
    ],
    academyOfferings: [
      'Crack Leap Engineering Campus Bootcamps in Coimbatore',
      'Python, AI & DevOps Placement Acceleration',
      'Corporate Upskilling for Coimbatore IT Teams',
    ],
    faqs: [
      {
        q: 'Does Vertex Loop have an office in Coimbatore?',
        a: 'No. Our single registered physical office is in Ambattur, Chennai. We serve Coimbatore clients through remote agile sprints and scheduled on-site consulting.',
      },
      {
        q: 'Can Coimbatore colleges book Crack Leap campus bootcamps?',
        a: 'Yes. Crack Leap instructors travel on-site to Coimbatore colleges for multi-day workshops and semester-long tech placement tracks.',
      },
    ],
    indexable: true,
    hasDedicatedPage: true,
  },

  // ── 5. BENGALURU (City / District — Karnataka Silicon Valley) ──
  {
    slug: 'bengaluru',
    slugPath: ['india', 'bengaluru'],
    name: 'Bengaluru',
    fullName: 'Bengaluru Urban District (Silicon Valley of India)',
    level: 'city',
    parentSlug: 'india',
    countryCode: 'IN',
    continent: 'Asia',
    isPhysicalHQ: false,
    deliveryModel: 'Dedicated Remote Engineering Teams & Executive Architectural Sessions from Chennai HQ',
    timeZone: 'IST (UTC+5:30)',
    currency: 'INR (₹)',
    headline: 'Frontier AI Development, Cloud DevOps & High-Concurrency Systems for Bengaluru',
    metaDescription:
      'Vertex Loop Pvt Ltd partners with Bengaluru startups and enterprises to build autonomous AI agents, RAG pipelines, scalable Next.js backends, and cloud DevOps.',
    businessContext:
      'As India’s Silicon Valley, Bengaluru demands frontier AI architectures, high-concurrency microservices, and relentless development velocity.',
    targetIndustries: [
      'Venture-Backed AI Startups',
      'Fintech & Payment Aggregators',
      'E-Commerce & Quick Commerce Unicorns',
      'Enterprise SaaS Platforms',
      'DeepTech & Autonomous Systems',
    ],
    keyServices: [
      'LLM Fine-Tuning (Llama, Mistral) & RAG Vector Architectures',
      'Autonomous Multi-Agent Networks (LangChain, LangGraph)',
      'High-Concurrency Microservices (Go, Node.js, PostgreSQL)',
      'Terraform Cloud Infrastructure & Kubernetes (EKS/GKE)',
      'Answer Engine Optimization (AEO) for AI Visibility',
    ],
    academyOfferings: [
      'Corporate AI & Agentic Workflow Upskilling for Bengaluru Tech Teams',
      'Advanced DevOps & Kubernetes Workshops',
    ],
    faqs: [
      {
        q: 'Does Vertex Loop have a physical office in Bengaluru?',
        a: 'No. Vertex Loop Pvt Ltd has a single physical office located in Ambattur, Chennai (G2, Venkatapuram, 600053). We serve Bengaluru technology companies via agile remote engineering sprints.',
      },
      {
        q: 'How does Vertex Loop collaborate with Bengaluru startups?',
        a: 'We embed senior AI and backend engineers directly into client sprint cycles, providing sprint deliverables, architecture reviews, and daily Slack/video standups.',
      },
    ],
    indexable: true,
    hasDedicatedPage: true,
  },

  // ── 6. HYDERABAD (City / District — Telangana Cyber Corridor) ──
  {
    slug: 'hyderabad',
    slugPath: ['india', 'hyderabad'],
    name: 'Hyderabad',
    fullName: 'Hyderabad District & Cyberabad Metropolitan Region',
    level: 'city',
    parentSlug: 'india',
    countryCode: 'IN',
    continent: 'Asia',
    isPhysicalHQ: false,
    deliveryModel: 'Remote Engineering Pods & Dedicated Technical Delivery from Chennai HQ',
    timeZone: 'IST (UTC+5:30)',
    currency: 'INR (₹)',
    headline: 'Enterprise Cloud Architecture, AI Systems & Custom Software for Hyderabad',
    metaDescription:
      'Vertex Loop Pvt Ltd builds custom AI agents, pharma ERP systems, and cloud infrastructure for Hyderabad enterprises, HITEC City startups, and universities.',
    businessContext:
      'Hyderabad is a global hub for pharmaceuticals, life sciences, and cloud engineering. Vertex Loop provides secure, SOC 2 compliant software architectures for regional leaders.',
    targetIndustries: [
      'Pharmaceuticals & Life Sciences Tech',
      'HealthTech & Medical Platforms',
      'Global Capability Centers (GCCs)',
      'Financial Technology & Banking Tech',
      'Real Estate & Construction Tech',
    ],
    keyServices: [
      'Validated Software for Pharma & Healthcare',
      'Secure Multi-Tenant Cloud Architecture',
      'Enterprise Resource Planning (ERP) & Invoicing',
      'Custom LLMs for Biomedical & Regulatory Document Analysis',
    ],
    academyOfferings: [
      'Corporate Tech Upskilling for Hyderabad GCCs',
      'Crack Leap College Campus Placement Bootcamps',
    ],
    faqs: [
      {
        q: 'Does Vertex Loop have an office in Hyderabad?',
        a: 'No. Our registered single office is in Ambattur, Chennai. We serve Hyderabad enterprises via dedicated remote delivery pods and scheduled on-site consulting.',
      },
    ],
    indexable: true,
    hasDedicatedPage: true,
  },

  // ============================================================================
  // ── 7. UNITED STATES (Country — International Service Area) ──
  // ============================================================================
  {
    slug: 'united-states',
    slugPath: ['united-states'],
    name: 'United States',
    fullName: 'United States of America',
    level: 'country',
    parentSlug: 'north-america',
    countryCode: 'US',
    continent: 'North America',
    isPhysicalHQ: false,
    deliveryModel: 'Dedicated Offshore Engineering Teams with US Time-Zone Overlap (EST/CST/PST)',
    timeZone: 'EST / CST / MST / PST',
    currency: 'USD ($)',
    headline: 'Custom AI Development & Offshore Software Engineering for US Enterprises',
    metaDescription:
      'Vertex Loop Pvt Ltd delivers high-performance AI agents, custom software engineering, and AWS cloud architecture for US enterprises and venture-backed startups.',
    businessContext:
      'US enterprises require top-tier engineering talent capable of building production AI agents, secure cloud microservices, and modern web applications without exorbitant onshore overhead.',
    targetIndustries: [
      'B2B SaaS & Tech Startups (Silicon Valley, NYC, Austin)',
      'Healthcare, Telehealth & HIPAA Compliant Tech',
      'Financial Services & Fintech (NYC, Chicago)',
      'LegalTech & Document Intelligence',
      'E-Commerce & Digital Marketplaces',
    ],
    keyServices: [
      'Custom AI & LLM Fine-Tuning (OpenAI, Anthropic, Open-Source)',
      'Retrieval-Augmented Generation (RAG) Systems with Hybrid Search',
      'Autonomous Multi-Agent Systems for Business Automation',
      'High-Performance Next.js 16 Web Applications & APIs',
      'Cloud Architecture, Terraform & 24/7 Managed DevOps',
      'Generative Engine Optimization (GEO) & AEO Search Strategy',
    ],
    academyOfferings: [
      'Corporate AI Readiness & Developer Upskilling Programs',
    ],
    faqs: [
      {
        q: 'Does Vertex Loop have a physical office in the United States?',
        a: 'No. Vertex Loop Pvt Ltd is an Indian corporation headquartered in Ambattur, Chennai (G2, Venkatapuram, 600053). We serve US clients through dedicated offshore engineering teams with coordinated US time-zone overlap.',
      },
      {
        q: 'How does Vertex Loop handle US time-zone collaboration?',
        a: 'Our engineering pods provide 4–6 hours of daily synchronous overlap with US Eastern, Central, and Pacific working hours for standups, sprint reviews, and pair programming.',
      },
      {
        q: 'How does Vertex Loop protect proprietary IP and data for US clients?',
        a: 'We execute comprehensive international NDAs and IP assignment contracts. All code is authored directly in client-owned GitHub repositories with strict SOC 2 aligned security practices.',
      },
    ],
    indexable: true,
    hasDedicatedPage: true,
  },

  // ── 8. UNITED KINGDOM (Country — International Service Area) ──
  {
    slug: 'united-kingdom',
    slugPath: ['united-kingdom'],
    name: 'United Kingdom',
    fullName: 'United Kingdom of Great Britain and Northern Ireland',
    level: 'country',
    parentSlug: 'europe',
    countryCode: 'GB',
    continent: 'Europe',
    isPhysicalHQ: false,
    deliveryModel: 'Remote Software Engineering Pods with GMT/BST Business Hours Overlap',
    timeZone: 'GMT / BST (UTC+0 / +1)',
    currency: 'GBP (£)',
    headline: 'Enterprise AI Development & Cloud Engineering for UK Businesses',
    metaDescription:
      'Vertex Loop Pvt Ltd provides UK enterprises with bespoke AI development, cloud architecture, and software engineering with seamless GMT overlap.',
    businessContext:
      'London and UK tech corridors demand GDPR-compliant software engineering, low-latency fintech platforms, and pragmatic generative AI integration.',
    targetIndustries: [
      'London FinTech & Banking Innovators',
      'CleanTech & Energy Tech',
      'Retail & Omnichannel E-Commerce',
      'Legal & Professional Services',
    ],
    keyServices: [
      'GDPR-Compliant AI & Document Intelligence Systems',
      'Bespoke Cloud Microservices & High-Throughput APIs',
      'Managed AWS/GCP Infrastructure & Kubernetes',
      'Headless WordPress & Next.js Digital Platforms',
    ],
    academyOfferings: [
      'Enterprise AI Adoption & Technical Training Modules',
    ],
    faqs: [
      {
        q: 'Does Vertex Loop have a UK office or branch?',
        a: 'No. Vertex Loop Pvt Ltd operates from our single headquarters in Ambattur, Chennai, India. We deliver remote engineering services to UK businesses with full GMT/BST workday overlap.',
      },
      {
        q: 'Are Vertex Loop software solutions compliant with UK GDPR?',
        a: 'Yes. All systems we architect adhere strictly to UK GDPR requirements, including data residency in EU/UK cloud regions, encryption at rest/in transit, and audit logging.',
      },
    ],
    indexable: true,
    hasDedicatedPage: true,
  },

  // ── 9. CANADA (Country — International Service Area) ──
  {
    slug: 'canada',
    slugPath: ['canada'],
    name: 'Canada',
    fullName: 'Canada',
    level: 'country',
    parentSlug: 'north-america',
    countryCode: 'CA',
    continent: 'North America',
    isPhysicalHQ: false,
    deliveryModel: 'Remote Engineering Pods with EST/PST Overlap',
    timeZone: 'EST / CST / MST / PST',
    currency: 'CAD ($)',
    headline: 'Custom AI Development & SaaS Engineering for Canadian Enterprises',
    metaDescription:
      'Vertex Loop Pvt Ltd builds custom AI agents, scalable SaaS platforms, and cloud DevOps for companies in Toronto, Vancouver, Montreal, and across Canada.',
    businessContext:
      'Canada’s vibrant AI research corridors and enterprise SaaS hubs require specialized engineering execution to turn prototypes into resilient production systems.',
    targetIndustries: ['Enterprise B2B SaaS', 'Healthcare & Life Sciences', 'Financial Services', 'Natural Resources Tech'],
    keyServices: ['RAG Vector Search Systems', 'Multi-Tenant SaaS Architecture', 'AWS Cloud Infrastructure'],
    academyOfferings: ['Corporate AI Engineering Bootcamps'],
    faqs: [
      {
        q: 'Does Vertex Loop have a physical office in Canada?',
        a: 'No. Vertex Loop Pvt Ltd is based in Ambattur, Chennai, India, and delivers remote agile engineering to Canadian clients with full EST/PST timezone overlap.',
      },
    ],
    indexable: true,
    hasDedicatedPage: true,
  },

  // ── 10. AUSTRALIA (Country — International Service Area) ──
  {
    slug: 'australia',
    slugPath: ['australia'],
    name: 'Australia',
    fullName: 'Commonwealth of Australia',
    level: 'country',
    parentSlug: 'oceania',
    countryCode: 'AU',
    continent: 'Oceania',
    isPhysicalHQ: false,
    deliveryModel: 'Remote Engineering Teams with AEST/AEDT Overlap',
    timeZone: 'AEST / AEDT (UTC+10 / +11)',
    currency: 'AUD ($)',
    headline: 'AI Solutions, Cloud Architecture & Custom Software for Australia',
    metaDescription:
      'Vertex Loop Pvt Ltd delivers enterprise AI applications, cloud migrations, and custom software engineering for businesses across Sydney, Melbourne, and Brisbane.',
    businessContext:
      'Australian enterprises across resources, fintech, and digital commerce require agile engineering partners with proven delivery velocity and cloud expertise.',
    targetIndustries: ['FinTech & Payments', 'Mining & Resources Software', 'Healthcare Services', 'E-Commerce Platforms'],
    keyServices: ['High-Availability Cloud Architectures', 'Custom AI Workflow Agents', 'API Platform Engineering'],
    academyOfferings: ['Corporate Technology Upskilling'],
    faqs: [
      {
        q: 'Does Vertex Loop have an office in Australia?',
        a: 'No. Vertex Loop Pvt Ltd operates from our single headquarters in Ambattur, Chennai, India, delivering remote services with dedicated Australian business hours alignment.',
      },
    ],
    indexable: true,
    hasDedicatedPage: true,
  },

  // ── 11. UAE (Country — International Service Area) ──
  {
    slug: 'uae',
    slugPath: ['uae'],
    name: 'United Arab Emirates',
    fullName: 'United Arab Emirates',
    level: 'country',
    parentSlug: 'asia',
    countryCode: 'AE',
    continent: 'Asia',
    isPhysicalHQ: false,
    deliveryModel: 'Remote Engineering & Executive Consulting with GST Overlap',
    timeZone: 'GST (UTC+4)',
    currency: 'AED (د.إ)',
    headline: 'AI Transformation & Custom Software Development for UAE Enterprises',
    metaDescription:
      'Vertex Loop Pvt Ltd provides custom AI agents, enterprise ERP platforms, and cloud solutions for companies across Dubai, Abu Dhabi, and the UAE.',
    businessContext:
      'The UAE is accelerating AI adoption across government and private sectors, driving demand for custom LLM integration, digital workflows, and intelligent business software.',
    targetIndustries: ['Real Estate & PropTech', 'Logistics & Trade', 'Hospitality & Luxury Commerce', 'Government & Smart City Tech'],
    keyServices: ['Custom AI Solutions & Conversational Intelligence', 'Enterprise ERP & HRMS Platforms', 'Cloud Architecture & Cyber Resilience'],
    academyOfferings: ['Corporate AI Adoption & Executive Workshops'],
    faqs: [
      {
        q: 'Does Vertex Loop have a physical office in the UAE / Dubai?',
        a: 'No. Vertex Loop Pvt Ltd is based in Ambattur, Chennai, India, and provides remote software engineering and scheduled on-site consulting for UAE businesses.',
      },
    ],
    indexable: true,
    hasDedicatedPage: true,
  },

  // ── 12. SINGAPORE (Country — International Service Area) ──
  {
    slug: 'singapore',
    slugPath: ['singapore'],
    name: 'Singapore',
    fullName: 'Republic of Singapore',
    level: 'country',
    parentSlug: 'asia',
    countryCode: 'SG',
    continent: 'Asia',
    isPhysicalHQ: false,
    deliveryModel: 'Remote Software Engineering & AI Development for APAC Region',
    timeZone: 'SGT (UTC+8)',
    currency: 'SGD ($)',
    headline: 'Enterprise AI Development & Cloud Software Engineering for Singapore',
    metaDescription:
      'Vertex Loop Pvt Ltd delivers high-performance AI systems, fintech-grade software engineering, and DevOps for Singapore and Southeast Asian enterprises.',
    businessContext:
      'Singapore acts as the primary tech and financial bridge for Southeast Asia, requiring rigorous code standards, low-latency microservices, and AI-driven workflow efficiency.',
    targetIndustries: ['Fintech & Capital Markets', 'Maritime Logistics & Trade', 'Biotech & Health Sciences', 'Regional SaaS Headquarters'],
    keyServices: ['High-Performance Microservices', 'RAG AI Search Systems', 'AWS Cloud DevOps & Security Architecture'],
    academyOfferings: ['Advanced Tech Upskilling for APAC Engineering Teams'],
    faqs: [
      {
        q: 'Does Vertex Loop have an office in Singapore?',
        a: 'No. Vertex Loop Pvt Ltd has a single physical headquarters in Ambattur, Chennai, India, and serves Singapore enterprises via remote development and regional engagements.',
      },
    ],
    indexable: true,
    hasDedicatedPage: true,
  },
]

/**
 * Evaluates whether a geographic entity should be indexed in XML sitemaps and search engines.
 * Prevents thin doorway pages by ensuring only commercially justified, content-rich nodes are indexed.
 */
export function shouldIndexLocation(location: GeoEntity): boolean {
  return location.indexable === true && location.hasDedicatedPage === true
}

/**
 * Returns all indexable geographic entities for static site generation (SSG) and XML sitemaps
 */
export function getAllIndexableLocations(): GeoEntity[] {
  return GEO_LOCATIONS.filter((loc) => shouldIndexLocation(loc))
}

/**
 * Retrieves a geographic entity by its slug path segment array
 */
export function getLocationBySlugPath(slugs: string[]): GeoEntity | undefined {
  const pathStr = slugs.join('/')
  return GEO_LOCATIONS.find(
    (loc) => loc.slugPath.join('/') === pathStr || loc.slug === pathStr
  )
}

/**
 * Retrieves child locations of a specific parent entity
 */
export function getChildLocations(parentSlug: string): GeoEntity[] {
  return GEO_LOCATIONS.filter((loc) => loc.parentSlug === parentSlug && loc.indexable)
}

/**
 * Returns the high-value Service × Geography matrix mapping primary commercial capabilities
 * to target territories without generating duplicate doorway URLs.
 */
export function getServiceLocationMatrix(): ServiceLocationPair[] {
  return [
    {
      serviceSlug: 'ai-development',
      serviceTitle: 'Custom AI Development & Autonomous Agents',
      geoSlug: 'chennai',
      geoName: 'Chennai (Ambattur HQ)',
      relationship: 'In-person architecture consulting, RAG engineering, and on-site AI strategy from our Ambattur headquarters.',
      searchIntent: 'commercial',
    },
    {
      serviceSlug: 'ai-development',
      serviceTitle: 'Custom AI Development & Autonomous Agents',
      geoSlug: 'bengaluru',
      geoName: 'Bengaluru',
      relationship: 'Frontier LLM fine-tuning, autonomous agents, and RAG knowledge systems for Bengaluru tech startups.',
      searchIntent: 'commercial',
    },
    {
      serviceSlug: 'ai-development',
      serviceTitle: 'Custom AI Development & Autonomous Agents',
      geoSlug: 'united-states',
      geoName: 'United States',
      relationship: 'Offshore dedicated AI engineering teams with US timezone overlap for venture-backed startups and enterprises.',
      searchIntent: 'international',
    },
    {
      serviceSlug: 'custom-software-development',
      serviceTitle: 'Custom Software Engineering & Architecture',
      geoSlug: 'india',
      geoName: 'India',
      relationship: 'High-throughput microservices, Next.js web applications, and legacy system modernizations across India.',
      searchIntent: 'commercial',
    },
    {
      serviceSlug: 'custom-software-development',
      serviceTitle: 'Custom Software Engineering & Architecture',
      geoSlug: 'united-kingdom',
      geoName: 'United Kingdom',
      relationship: 'GDPR-compliant enterprise microservices and scalable web platforms with GMT business hours overlap.',
      searchIntent: 'international',
    },
    {
      serviceSlug: 'cloud-architecture',
      serviceTitle: 'Cloud Architecture & Managed DevOps',
      geoSlug: 'hyderabad',
      geoName: 'Hyderabad',
      relationship: 'Multi-region AWS/GCP cloud migrations, Kubernetes clusters, and 24/7 security monitoring for Hyderabad enterprises.',
      searchIntent: 'commercial',
    },
    {
      serviceSlug: 'cloud-architecture',
      serviceTitle: 'Cloud Architecture & Managed DevOps',
      geoSlug: 'singapore',
      geoName: 'Singapore',
      relationship: 'Fintech-grade cloud infrastructure and container orchestration for Singapore and Southeast Asian companies.',
      searchIntent: 'international',
    },
    {
      serviceSlug: 'digital-marketing',
      serviceTitle: 'Digital Marketing & Technical SEO (AEO/GEO)',
      geoSlug: 'uae',
      geoName: 'UAE (Dubai)',
      relationship: 'Answer Engine Optimization (AEO), Generative Engine Optimization (GEO), and technical SEO for Dubai businesses.',
      searchIntent: 'international',
    },
    {
      serviceSlug: 'crackleap-academy',
      serviceTitle: 'Crack Leap Technology Academy',
      geoSlug: 'tamil-nadu',
      geoName: 'Tamil Nadu',
      relationship: 'Campus bootcamps, faculty development, and placement immersion tracks in Python, AI, AWS, and DevOps across Tamil Nadu.',
      searchIntent: 'educational',
    },
    {
      serviceSlug: 'crackleap-academy',
      serviceTitle: 'Crack Leap Technology Academy',
      geoSlug: 'coimbatore',
      geoName: 'Coimbatore',
      relationship: 'On-campus college engineering bootcamps and placement training for Coimbatore technical institutions.',
      searchIntent: 'educational',
    },
  ]
}
