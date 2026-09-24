const keywordMap = {
    "/": {
        page: "Home",
        title: "Digital Marketing & Technology Agency in Rohtak | First Signal Digital",
        metaDescription:
            "First Signal Digital is a digital marketing agency in Rohtak, Haryana, offering SEO, Google Ads, social media marketing, websites, AI automation, software and media production for clients across India.",
        primaryKeyword: "digital marketing agency in Rohtak",
        focusKeyphrase: "digital marketing agency in Rohtak",
        secondaryKeywords: [
            "digital marketing company in Rohtak",
            "digital marketing services in Rohtak",
            "digital agency in Rohtak",
            "online marketing agency in Rohtak",
            "digital growth services",
        ],
        searchIntent: "Find a digital marketing agency in Rohtak for full-service marketing and technology",
        localIntent: true,
        cannibalizationRisk: "None — hub for brand; child pages use distinct service keywords",
    },

    "/about": {
        page: "About",
        title: "About First Signal Digital | Digital Marketing & Technology Company in Rohtak",
        metaDescription:
            "First Signal Digital is a Rohtak-based digital marketing and technology company combining marketing, AI, software, media and consulting under one roof.",
        primaryKeyword: "First Signal Digital Rohtak",
        focusKeyphrase: "First Signal Digital",
        secondaryKeywords: [
            "digital marketing company in Rohtak",
            "technology company in Rohtak",
            "digital solutions company",
        ],
        searchIntent: "Learn about the company, its identity and why to trust it",
        localIntent: true,
        cannibalizationRisk: "Low — brand/trust page, not a service landing page",
    },

    "/services": {
        page: "Services",
        title: "Digital Marketing & Technology Services in Rohtak | First Signal Digital",
        metaDescription:
            "Digital marketing services in Rohtak from First Signal Digital — SEO, Google Ads, social media marketing, website development, AI automation, software and media production.",
        primaryKeyword: "digital marketing services in Rohtak",
        focusKeyphrase: "digital marketing services in Rohtak",
        secondaryKeywords: [
            "SEO services in Rohtak",
            "Google Ads services",
            "social media marketing",
            "website development",
            "AI automation",
            "software development",
            "media production",
        ],
        searchIntent: "Browse the full range of services offered by an agency in Rohtak",
        localIntent: true,
        cannibalizationRisk: "Low — service hub; each child page targets its own primary keyword",
    },

    "/marketing": {
        page: "Performance Marketing",
        title: "Performance Marketing Agency in Rohtak | First Signal Digital",
        metaDescription:
            "Performance marketing in Rohtak — Google Ads, Meta Ads, social media and lead generation campaigns from First Signal Digital, tied to enquiries, calls and revenue.",
        primaryKeyword: "performance marketing in Rohtak",
        focusKeyphrase: "performance marketing in Rohtak",
        secondaryKeywords: [
            "digital marketing campaigns",
            "Google Ads management",
            "Meta Ads",
            "lead generation campaigns",
            "social media advertising",
            "WhatsApp marketing",
        ],
        searchIntent: "Find a performance marketing team for paid and measurable campaigns",
        localIntent: true,
        cannibalizationRisk: "Fixed — page previously targeted 'digital marketing services in Rohtak' (same as /services)",
    },

    "/solutions": {
        page: "Solutions",
        title: "Business Software Solutions | First Signal Digital",
        metaDescription:
            "Business software solutions from First Signal Digital — custom CRM, ERP, HRMS, dashboards, school ERP and hospital management systems built around your workflows.",
        primaryKeyword: "business software solutions",
        focusKeyphrase: "business software solutions",
        secondaryKeywords: [
            "custom software solutions",
            "business technology solutions",
            "digital business solutions",
            "SaaS solutions",
        ],
        searchIntent: "Discover software platforms that solve business operations",
        localIntent: false,
        cannibalizationRisk: "Low — hub page; each solution child page owns a distinct keyword",
    },

    "/studio": {
        page: "Studio",
        title: "Media Production Studio in Rohtak | First Signal Digital",
        metaDescription:
            "A professional media production studio in Rohtak for corporate videos, podcasts, reels, photography, commercials and branded content.",
        primaryKeyword: "media production studio in Rohtak",
        focusKeyphrase: "media production studio in Rohtak",
        secondaryKeywords: [
            "corporate video production",
            "podcast studio in Rohtak",
            "video production",
            "brand content production",
            "commercial video production",
        ],
        searchIntent: "Find a media / video production studio in Rohtak",
        localIntent: true,
        cannibalizationRisk: "Distinct from /services/media-production ('video production services' vs 'studio')",
    },

    "/contact": {
        page: "Contact",
        title: "Contact First Signal Digital | Digital Agency in Rohtak",
        metaDescription:
            "Contact First Signal Digital in Rohtak for digital marketing, SEO, websites, AI automation, software development and media production services.",
        primaryKeyword: "digital marketing agency in Rohtak contact",
        focusKeyphrase: "digital marketing agency in Rohtak contact",
        secondaryKeywords: [
            "digital agency Rohtak",
            "marketing agency Rohtak phone",
            "First Signal Digital contact",
        ],
        searchIntent: "Contact information — phone, email, location, form",
        localIntent: true,
        cannibalizationRisk: "None — transactional page",
    },

    "/snapshot": {
        page: "Business Snapshot",
        title: "Business Snapshot | First Signal Digital",
        metaDescription:
            "A quick overview of First Signal Digital — the problems we solve, capabilities, platforms, process and ways to connect.",
        primaryKeyword: "about First Signal Digital overview",
        focusKeyphrase: "First Signal Digital overview",
        secondaryKeywords: [
            "digital solutions company overview",
            "First Signal Digital capabilities",
        ],
        searchIntent: "Comprehensive but quick summary of the company",
        localIntent: true,
        cannibalizationRisk: "Low — overview page; keep distinct from /about",
    },
};

const serviceKeywords = {
    seo: {
        title: "SEO Services in Rohtak | First Signal Digital",
        metaDescription:
            "SEO services in Rohtak from First Signal Digital — technical SEO, on-page optimization, local SEO and AI search (GEO) visibility for Google and beyond.",
        primaryKeyword: "SEO services in Rohtak",
        focusKeyphrase: "SEO services in Rohtak",
        secondaryKeywords: [
            "SEO company in Rohtak",
            "local SEO services in Rohtak",
            "technical SEO",
            "on-page SEO",
            "local search optimization",
            "SEO audit",
            "SEO strategy",
        ],
    },
    "google-ads": {
        title: "Google Ads Services in Rohtak | First Signal Digital",
        metaDescription:
            "Google Ads services in Rohtak — campaign setup, keyword strategy, ad optimization, conversion tracking and reporting that bring qualified enquiries and calls.",
        primaryKeyword: "Google Ads services in Rohtak",
        focusKeyphrase: "Google Ads services in Rohtak",
        secondaryKeywords: [
            "Google Ads management",
            "PPC services in Rohtak",
            "Google Ads campaign management",
            "paid search advertising",
            "lead generation campaigns",
        ],
    },
    "social-media-marketing": {
        title: "Social Media Marketing Services in Rohtak | First Signal Digital",
        metaDescription:
            "Social media marketing services in Rohtak — content strategy, page management, reels and social media advertising that grow brand reach and enquiries.",
        primaryKeyword: "social media marketing services in Rohtak",
        focusKeyphrase: "social media marketing services in Rohtak",
        secondaryKeywords: [
            "social media marketing services",
            "social media management",
            "social media strategy",
            "content marketing",
            "social media advertising",
        ],
    },
    "lead-generation": {
        title: "Lead Generation Services in Rohtak | First Signal Digital",
        metaDescription:
            "Lead generation services in Rohtak — landing pages, lead forms, call tracking and performance campaigns that deliver qualified enquiries at a measurable cost.",
        primaryKeyword: "lead generation services in Rohtak",
        focusKeyphrase: "lead generation services in Rohtak",
        secondaryKeywords: [
            "performance marketing",
            "lead generation agency",
            "B2B lead generation",
            "qualified leads for business",
        ],
    },
    branding: {
        title: "Branding & Brand Identity Services in Rohtak | First Signal Digital",
        metaDescription:
            "Branding services in Rohtak — logo design, brand identity, positioning and visual systems that make your business easy to recognize and remember.",
        primaryKeyword: "branding services in Rohtak",
        focusKeyphrase: "branding services in Rohtak",
        secondaryKeywords: [
            "brand identity design",
            "logo design company",
            "brand strategy",
            "visual identity",
        ],
    },
    "website-development": {
        title: "Website Development Company in Rohtak | First Signal Digital",
        metaDescription:
            "Website development company in Rohtak building fast, responsive and SEO-friendly business websites and portals that convert visitors into enquiries.",
        primaryKeyword: "website development company in Rohtak",
        focusKeyphrase: "website development company in Rohtak",
        secondaryKeywords: [
            "web development company in Rohtak",
            "website design services",
            "business website development",
            "responsive website development",
            "SEO-friendly website development",
        ],
    },
    "software-development": {
        title: "Custom Software Development Services | First Signal Digital",
        metaDescription:
            "Custom software development from First Signal Digital — business software, SaaS platforms and enterprise solutions built around your workflows, for clients across India.",
        primaryKeyword: "custom software development",
        focusKeyphrase: "custom software development",
        secondaryKeywords: [
            "software development company",
            "business software development",
            "custom business software",
            "enterprise software solutions",
            "SaaS development",
        ],
    },
    "mobile-app-development": {
        title: "Mobile App Development Services in Rohtak | First Signal Digital",
        metaDescription:
            "Mobile app development services from First Signal Digital — cross-platform apps for iOS and Android with clean design, reliable performance and business features.",
        primaryKeyword: "mobile app development services",
        focusKeyphrase: "mobile app development services",
        secondaryKeywords: [
            "app development company",
            "cross-platform app development",
            "mobile app design",
            "business mobile apps",
        ],
    },
    "ai-solutions": {
        title: "AI Automation Services for Businesses | First Signal Digital",
        metaDescription:
            "AI automation services for businesses — AI assistants, chatbots, workflow automation and lead automation that save time and scale small teams.",
        primaryKeyword: "AI automation services",
        focusKeyphrase: "AI automation services",
        secondaryKeywords: [
            "business automation",
            "AI solutions for businesses",
            "AI workflow automation",
            "AI chatbot solutions",
            "lead automation",
        ],
    },
    "media-production": {
        title: "Media Production Services in Rohtak | First Signal Digital",
        metaDescription:
            "Media production services in Rohtak — corporate videos, commercials, reels, photography and branded content produced in our in-house studio.",
        primaryKeyword: "media production services in Rohtak",
        focusKeyphrase: "media production services in Rohtak",
        secondaryKeywords: [
            "video production services in Rohtak",
            "corporate video production",
            "commercial video production",
            "brand content production",
        ],
    },
    "cloud-solutions": {
        title: "Cloud Solutions & Services in Rohtak | First Signal Digital",
        metaDescription:
            "Cloud solutions and services in Rohtak from First Signal Digital — cloud hosting, migration, infrastructure and architecture that keep your platforms secure, scalable and available.",
        primaryKeyword: "cloud solutions & services",
        focusKeyphrase: "cloud solutions & services in Rohtak",
        secondaryKeywords: [
            "cloud migration services",
            "cloud infrastructure",
            "cloud hosting",
            "cloud architecture",
        ],
    },
    "database-solutions": {
        title: "Database Solutions & Services in Rohtak | First Signal Digital",
        metaDescription:
            "Database solutions and services in Rohtak from First Signal Digital — design, optimization, migration and management of relational and NoSQL databases for reliable business data.",
        primaryKeyword: "database solutions & services",
        focusKeyphrase: "database solutions & services in Rohtak",
        secondaryKeywords: [
            "database design",
            "database optimization",
            "database migration",
            "database management",
        ],
    },
    "cyber-security": {
        title: "Cyber Security Services in Rohtak | First Signal Digital",
        metaDescription:
            "Cyber security services in Rohtak from First Signal Digital — audits, security architecture and hardening that protect business websites, apps and customer data.",
        primaryKeyword: "cyber security services",
        focusKeyphrase: "cyber security services in Rohtak",
        secondaryKeywords: [
            "security audit",
            "application security",
            "data protection",
            "security architecture",
        ],
    },
    "digital-transformation": {
        title: "Digital Transformation Services in Rohtak | First Signal Digital",
        metaDescription:
            "Digital transformation services in Rohtak from First Signal Digital — process automation, technology strategy and digitization roadmaps that help organizations modernize and grow.",
        primaryKeyword: "digital transformation services",
        focusKeyphrase: "digital transformation services in Rohtak",
        secondaryKeywords: [
            "business digitization",
            "process automation",
            "technology strategy",
            "digital strategy consulting",
        ],
    },
};

const solutionKeywords = {
    crm: {
        title: "CRM Solutions for Businesses | First Signal Digital",
        metaDescription:
            "CRM solutions for businesses — custom CRM software, sales automation and customer relationship management built around your sales workflow.",
        primaryKeyword: "CRM solutions",
        focusKeyphrase: "CRM solutions for businesses",
        secondaryKeywords: [
            "CRM software",
            "custom CRM development",
            "customer relationship management software",
            "CRM system for business",
        ],
    },
    erp: {
        title: "ERP Solutions for Businesses | First Signal Digital",
        metaDescription:
            "ERP solutions for businesses — custom ERP software that unifies operations, inventory, finance and reporting in one system.",
        primaryKeyword: "ERP solutions",
        focusKeyphrase: "ERP solutions for businesses",
        secondaryKeywords: [
            "ERP software",
            "custom ERP development",
            "business ERP system",
            "enterprise resource planning software",
        ],
    },
    hrms: {
        title: "HRMS Solutions for Businesses | First Signal Digital",
        metaDescription:
            "HRMS solutions for businesses — HR management, payroll, leave, attendance and workforce platforms that simplify people operations.",
        primaryKeyword: "HRMS software",
        focusKeyphrase: "HRMS solutions for businesses",
        secondaryKeywords: [
            "HR management software",
            "employee management software",
            "HRMS system",
            "human resource management software",
        ],
    },
    dashboards: {
        title: "Business Dashboard & Analytics Development | First Signal Digital",
        metaDescription:
            "Custom business dashboard development — sales, operations and reporting dashboards that put your key metrics in one clear view.",
        primaryKeyword: "business dashboard development",
        focusKeyphrase: "custom business dashboard development",
        secondaryKeywords: [
            "business analytics dashboard",
            "custom dashboard",
            "data dashboard development",
            "business reporting dashboard",
        ],
    },
    "education-management": {
        title: "School ERP & Education Management Software | First Signal Digital",
        metaDescription:
            "School ERP and education management software for admissions, fees, attendance, exams and parent communication.",
        primaryKeyword: "school ERP software",
        focusKeyphrase: "school ERP & education management software",
        secondaryKeywords: [
            "education management system",
            "school management software",
            "college ERP",
            "student management system",
        ],
    },
    "hospital-management": {
        title: "Hospital Management Software | First Signal Digital",
        metaDescription:
            "Hospital management software for clinics and hospitals — patients, appointments, billing, pharmacy and reports in one system.",
        primaryKeyword: "hospital management software",
        focusKeyphrase: "hospital management software",
        secondaryKeywords: [
            "patient management system",
            "clinic management software",
            "hospital billing software",
            "healthcare management system",
        ],
    },
    "appointment-booking": {
        title: "Appointment & Booking Software | First Signal Digital",
        metaDescription:
            "Appointment and booking software for salons, clinics and service businesses — online scheduling, reminders and payments.",
        primaryKeyword: "appointment booking software",
        focusKeyphrase: "appointment & booking software",
        secondaryKeywords: [
            "online booking system",
            "appointment scheduling software",
            "booking management system",
        ],
    },
    "inventory-management": {
        title: "Inventory Management Software | First Signal Digital",
        metaDescription:
            "Inventory management software for real-time stock control — suppliers, purchase orders, warehouses and reporting.",
        primaryKeyword: "inventory management software",
        focusKeyphrase: "inventory management software",
        secondaryKeywords: [
            "stock management system",
            "inventory tracking software",
            "warehouse management system",
        ],
    },
    "billing-and-pos": {
        title: "Billing & POS Software Solutions | First Signal Digital",
        metaDescription:
            "Billing & POS software for retail and restaurants — fast billing, GST invoices, customer management and sales analytics.",
        primaryKeyword: "billing & POS software",
        focusKeyphrase: "billing & POS software",
        secondaryKeywords: [
            "POS system for retail",
            "GST billing software",
            "restaurant POS software",
            "billing software",
        ],
    },
    "business-compliance": {
        title: "Business Compliance Management Software | First Signal Digital",
        metaDescription:
            "Business compliance management software to monitor policies, audits and compliance activities across departments.",
        primaryKeyword: "business compliance management software",
        focusKeyphrase: "business compliance management software",
        secondaryKeywords: [
            "compliance management system",
            "audit management software",
            "policy management software",
        ],
    },
};

export default keywordMap;

export { serviceKeywords, solutionKeywords };