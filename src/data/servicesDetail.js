import {
    Search,
    MousePointerClick,
    Share2,
    Target,
    Palette,
    Globe,
    Code2,
    Smartphone,
    BrainCircuit,
    Camera,
    Cloud,
    Database,
    Shield,
    Cpu,
} from "lucide-react";

const deliveryProcess = [
    "Business Discovery",
    "Strategy & Planning",
    "Design & Development",
    "Testing & Optimization",
    "Launch & Continuous Support",
];

const services = {
    seo: {
        slug: "seo",
        name: "SEO & GEO",

        problems: [
            "Your business is invisible when customers search for services you already offer, losing qualified local demand to better-ranked competitors.",
            "You see website traffic, but it doesn't convert or grow, because there is no structured keyword strategy or technical foundation behind it.",
            "Your brand has no presence in AI-generated answers and voice results, so the growing audience using these tools never discovers you.",
        ],

        audience: [
            "Local businesses in Rohtak and Haryana that want more customers from Google",
            "Companies that want long-term organic growth instead of paying for every click",
            "Businesses preparing for visibility in AI-powered search results",
        ],
        h1: "SEO Services in Rohtak",
        short:
            "Search optimization for Google and AI-powered search engines.",
        icon: Search,
        metaTitle: "SEO Services in Rohtak | First Signal Digital",
        metaDescription:
            "SEO services in Rohtak from First Signal Digital — technical SEO, on-page optimization, local SEO and AI search (GEO) visibility for Google and beyond.",
        description:
            "We optimize your digital presence for Google Search and AI-powered search platforms including ChatGPT, Gemini and Perplexity. From technical SEO to on-page optimization and content strategy, we help your business get found by customers who are actively searching — with local SEO for Rohtak businesses and national visibility for brands across India.",
        benefits: [
            "Higher visibility in Google search results",
            "Visibility in AI-powered search answers",
            "More qualified organic traffic to your website",
            "Long-term growth that compounds month after month",
        ],
        offerings: [
            "Technical SEO audits",
            "On-page optimization",
            "Keyword & content strategy",
            "Local SEO for Rohtak & Haryana",
            "AI search (GEO) optimization",
            "Internal linking & site architecture",
            "Monthly performance reporting",
        ],
        process: deliveryProcess,
        technologies: [
            "Technical SEO",
            "On-Page SEO",
            "GEO",
            "ChatGPT",
            "Gemini",
            "Perplexity",
        ],
        faqs: [
            {
                q: "How is GEO different from traditional SEO?",
                a: "GEO (Generative Engine Optimization) focuses on being cited in AI-powered search results such as ChatGPT, Gemini and Perplexity, while SEO focuses on ranking in Google. We work on both together.",
            },
            {
                q: "How soon will I see SEO results?",
                a: "Paid campaigns can bring traffic quickly, while consistent search rankings from SEO typically build over a few months of focused work.",
            },
            {
                q: "Do you provide SEO for businesses outside Rohtak?",
                a: "Yes. We help businesses in Haryana, across India and beyond with SEO and GEO strategies.",
            },
        ],
        related: ["google-ads", "social-media-marketing", "website-development", "ai-solutions"],
    },

    googleAds: {
        slug: "google-ads",
        name: "Google Ads",

        problems: [
            "You spend on ads that bring clicks but no enquiries or calls, because campaigns, targeting and landing pages aren't aligned to revenue.",
            "Your budget gets wasted on irrelevant keywords and broad audiences that have never shown real buying intent.",
            "You can't tell which campaigns actually make money, so the same underperforming spend keeps repeating month after month.",
        ],

        audience: [
            "Local businesses in Rohtak that want enquiries and calls quickly",
            "Service providers and retailers who need professionally managed campaigns",
            "Companies that want clear visibility into what ad budget brings back",
        ],
        h1: "Google Ads Management in Rohtak",
        short:
            "Search, Display, Shopping and Performance Max campaigns that bring qualified leads.",
        icon: MousePointerClick,
        metaTitle: "Google Ads Services in Rohtak | First Signal Digital",
        metaDescription:
            "Google Ads services in Rohtak — campaign setup, keyword strategy, ad optimization, conversion tracking and reporting that bring qualified enquiries and calls.",
        description:
            "We plan, launch and manage Google Ads campaigns that put your business in front of ready-to-buy customers. From search and display to Shopping and Performance Max, every campaign is tied to leads, calls and revenue — including conversion tracking and reporting that show exactly what your ad budget returns.",
        benefits: [
            "Reach customers actively searching for your services",
            "Control your daily and monthly budget",
            "Campaigns optimized on data, not guesswork",
            "Clear reporting tied to enquiries and calls",
        ],
        offerings: [
            "Search campaigns",
            "Display campaigns",
            "Shopping campaigns",
            "Performance Max campaigns",
            "Landing page support",
            "Conversion tracking & reporting",
        ],
        process: deliveryProcess,
        technologies: [
            "Google Ads",
            "Search Campaigns",
            "Display Campaigns",
            "Shopping",
            "Performance Max",
            "Conversion Tracking",
        ],
        faqs: [
            {
                q: "What is the minimum ad budget for Google Ads?",
                a: "It depends on your market and goals. We recommend starting with a budget you are comfortable testing, and we optimize as results come in.",
            },
            {
                q: "When will I start getting calls and enquiries?",
                a: "Paid campaigns can start bringing clicks within days. Conversions improve as we gather data and refine targeting.",
            },
            {
                q: "Will you manage my ads or just set them up?",
                a: "We manage end to end — setup, daily optimization, conversion tracking and monthly reporting.",
            },
        ],
        related: ["seo", "lead-generation", "social-media-marketing", "website-development"],
    },

    socialMediaMarketing: {
        slug: "social-media-marketing",
        name: "Social Media Marketing",

        problems: [
            "Your business posts sporadically with no content plan, so social channels feel empty and fail to build trust or sales.",
            "You have followers and reach, but no measurable pipeline — engagement never turns into enquiries or customers.",
            "Your brand looks inconsistent and unprofessional across platforms, weakening the impression it makes on potential buyers.",
        ],

        audience: [
            "Local businesses in Rohtak that want to stay visible on Facebook, Instagram and YouTube",
            "Brands that need consistent content but don't have time in-house",
            "Companies ready to run targeted Meta ads to attract nearby customers",
        ],
        h1: "Social Media Marketing in Rohtak",
        short:
            "Content calendars, page management, reels and Facebook & Instagram ad campaigns.",
        icon: Share2,
        metaTitle: "Social Media Marketing Services in Rohtak | First Signal Digital",
        metaDescription:
            "Social media marketing services in Rohtak — content strategy, page management, reels and social media advertising that grow brand reach and enquiries.",
        description:
            "We build and manage your social media presence across Facebook, Instagram, YouTube and WhatsApp — with content calendars, page management, reels and Meta ad campaigns that turn followers into customers.",
        benefits: [
            "Consistent, on-brand content every week",
            "Stronger community engagement",
            "Facebook & Instagram ads that reach the right audience",
            "Reels and video built with our in-house studio",
        ],
        offerings: [
            "Page management",
            "Content calendars & strategy",
            "Reels & short-form video",
            "Meta (Facebook & Instagram) ads",
            "Community engagement",
            "Monthly performance reports",
        ],
        process: deliveryProcess,
        technologies: [
            "Instagram",
            "Facebook",
            "Reels",
            "YouTube",
            "WhatsApp",
            "Meta Ads",
        ],
        faqs: [
            {
                q: "Do you create the content too?",
                a: "Yes. With our in-house media studio, we produce photos, reels and videos as part of the service.",
            },
            {
                q: "Which platforms do you manage?",
                a: "We manage Facebook, Instagram, YouTube and WhatsApp marketing based on where your customers are.",
            },
            {
                q: "Is social media marketing good for local businesses?",
                a: "Very. Consistent local content plus targeted Meta ads help businesses in Rohtak and Haryana reach nearby customers.",
            },
        ],
        related: ["seo", "google-ads", "branding", "media-production"],
    },

    leadGeneration: {
        slug: "lead-generation",
        name: "Performance Marketing & Lead Generation",

        problems: [
            "Your sales team spends time on cold or unqualified contacts, and the cost of acquiring a real customer keeps climbing.",
            "You rely on guesswork instead of data — no structured funnels, tracking or scoring to tell you which leads will close.",
            "Your marketing generates enquiries, but they leak out of the funnel because there is no nurturing or follow-up system.",
        ],

        audience: [
            "Service businesses that depend on calls, WhatsApp messages and form enquiries",
            "Companies launching new offers or campaigns that need qualified leads",
            "Businesses that want to measure exactly what each lead costs",
        ],
        h1: "Lead Generation Services in Rohtak",
        short:
            "Landing pages, lead forms, call tracking and qualified leads measured against targets.",
        icon: Target,
        metaTitle: "Lead Generation Services in Rohtak | First Signal Digital",
        metaDescription:
            "Lead generation services in Rohtak — landing pages, lead forms, call tracking and performance campaigns that deliver qualified enquiries at a measurable cost.",
        description:
            "We build lead generation systems that deliver calls, WhatsApp enquiries and form fills — with landing pages, lead forms and call tracking measured against your cost and revenue targets.",
        benefits: [
            "Qualified leads, not just website traffic",
            "Tracking for calls, WhatsApp and form submissions",
            "Landing pages designed for conversion",
            "Clear cost-per-lead visibility",
        ],
        offerings: [
            "High-converting landing pages",
            "Lead forms & WhatsApp integration",
            "Call tracking setup",
            "Paid lead campaigns",
            "Lead qualification workflow",
            "Monthly performance reporting",
        ],
        process: deliveryProcess,
        technologies: [
            "Landing Pages",
            "Lead Forms",
            "Call Tracking",
            "WhatsApp",
            "Google Ads",
            "Meta Ads",
        ],
        faqs: [
            {
                q: "What kind of leads will I get?",
                a: "We focus on qualified enquiries — calls, WhatsApp messages and form fills from people interested in your product or service.",
            },
            {
                q: "How do you measure lead quality?",
                a: "We track the source of every call and enquiry so you can see exactly which campaigns bring real customers.",
            },
            {
                q: "Do you build the landing pages as well?",
                a: "Yes. Landing pages and lead forms are part of the lead generation service.",
            },
        ],
        related: ["google-ads", "seo", "social-media-marketing", "website-development"],
    },

    branding: {
        slug: "branding",
        name: "Branding",

        problems: [
            "Your business looks like a commodity — with no clear identity, customers decide on price instead of preference.",
            "Your brand is inconsistent across website, packaging, social media and communication, confusing the audience you serve.",
            "You have no defined positioning or message, so you can't justify better pricing or stand apart from local competitors.",
        ],

        audience: [
            "Startups building a brand identity from scratch",
            "Established businesses in Rohtak that want a stronger, consistent identity",
            "Companies that want messaging that works across web, social and video",
        ],
        h1: "Branding Services in Rohtak",
        short:
            "Brand Identity, visual content and content strategy that build a stronger brand.",
        icon: Palette,
        metaTitle: "Branding & Brand Identity Services in Rohtak | First Signal Digital",
        metaDescription:
            "Branding services in Rohtak — logo design, brand identity, positioning and visual systems that make your business easy to recognize and remember.",
        description:
            "Beyond logos, we build brands that customers remember — through brand identity, visual content, messaging and content strategy that make your business stand out.",
        benefits: [
            "A consistent, recognizable identity",
            "Stronger customer trust and recall",
            "Content that communicates your value clearly",
            "Brand assets that work across web, print and video",
        ],
        offerings: [
            "Brand identity & guidelines",
            "Visual branding",
            "Content & messaging strategy",
            "Social media branding",
            "Marketing collateral",
            "Brand storytelling through media",
        ],
        process: deliveryProcess,
        technologies: [
            "Brand Identity",
            "Visual Content",
            "Content Strategy",
            "Digital Branding",
            "Social Media",
            "Media Production",
        ],
        faqs: [
            {
                q: "Do you do only logos or full branding?",
                a: "We work on the full brand — identity, messaging, content and how your brand shows up across digital platforms.",
            },
            {
                q: "I already have a logo. Can you still help?",
                a: "Yes. We can strengthen your existing brand with consistent visuals, content and digital presence.",
            },
            {
                q: "Is branding useful for small businesses?",
                a: "Absolutely. A clear brand helps small businesses in Rohtak compete and be remembered by customers.",
            },
        ],
        related: ["seo", "social-media-marketing", "media-production", "website-development"],
    },

    websiteDevelopment: {
        slug: "website-development",
        name: "Website & Portal Development",

        problems: [
            "Your current website loads slowly, breaks on mobile and pushes visitors away before they understand what you offer.",
            "Your site has no clear structure or calls-to-action, so even good traffic fails to turn into enquiries.",
            "You have no easy way to update content, add pages or publish offers — every change depends on someone external.",
        ],

        audience: [
            "Businesses in Rohtak that need a professional first impression online",
            "Companies that want fast, mobile-friendly, SEO-ready websites",
            "Organizations that need a CMS, landing pages or a customer portal that can scale",
        ],
        h1: "Website Development Company in Rohtak",
        short:
            "Corporate websites, portals and business platforms built for performance and SEO.",
        icon: Globe,
        metaTitle: "Website Development Company in Rohtak | First Signal Digital",
        metaDescription:
            "Website development company in Rohtak building fast, responsive and SEO-friendly business websites and portals that convert visitors into enquiries.",
        description:
            "We design and develop professional corporate websites, portals and business platforms designed for performance, SEO, GEO and long-term scalability — each one responsive and built to win business.",
        benefits: [
            "Fast, responsive websites that work on every device",
            "Built SEO-ready for search and AI visibility",
            "Easy to update with CMS",
            "Scalable for future growth",
        ],
        offerings: [
            "Business websites",
            "Corporate websites",
            "CMS websites",
            "Landing pages",
            "E-commerce websites",
            "Customer portals",
            "Responsive UI design",
            "SEO-friendly development",
            "Custom development",
            "Performance optimization",
        ],
        process: deliveryProcess,
        technologies: [
            "CMS",
            "Corporate Websites",
            "Customer Portals",
            "Responsive UI",
            "eCommerce",
            "SEO-ready build",
        ],
        faqs: [
            {
                q: "How long does a website take to build?",
                a: "It depends on the scope. A corporate site typically takes a few weeks from design to launch.",
            },
            {
                q: "Will the site work on mobile?",
                a: "Yes — every website we build is fully responsive and optimized for phones, tablets and desktops.",
            },
            {
                q: "Can I update content myself later?",
                a: "Yes. We build sites that are easy to manage, and we can handle updates for you as well.",
            },
        ],
        related: ["seo", "mobile-app-development", "branding", "software-development"],
    },

    softwareDevelopment: {
        slug: "software-development",
        name: "Software & SaaS Development",

        problems: [
            "Your teams rely on manual processes, spreadsheets and disconnected tools that slow work down and cause errors.",
            "You use off-the-shelf software that doesn't fit your workflow, forcing staff to adapt to the tool instead of the tool serving them.",
            "Your existing systems can't scale with growth, so as volume rises operations become slower and harder to manage.",
        ],

        audience: [
            "Businesses running on spreadsheets and manual processes",
            "Startups and enterprises building custom software or SaaS platforms",
            "Organizations that need CRM, ERP or HRMS tailored to their workflow",
        ],
        h1: "Custom Software Development Services",
        short:
            "Custom software, CRM, ERP, HRMS and SaaS platforms engineered for scale.",
        icon: Code2,
        metaTitle: "Custom Software Development Services | First Signal Digital",
        metaDescription:
            "Custom software development from First Signal Digital — business software, SaaS platforms and enterprise solutions built around your workflows, for clients across India.",
        description:
            "We engineer scalable enterprise software — SaaS platforms, custom business systems, CRM, ERP and HRMS — designed for performance, security and long-term growth.",
        benefits: [
            "Software built around your business workflow",
            "Secure, scalable architecture",
            "SaaS platforms ready for growth",
            "Ongoing support and improvement",
        ],
        offerings: [
            "SaaS platform development",
            "Enterprise portals",
            "CRM, ERP & HRMS systems",
            "API development",
            "Business workflow automation",
            "Legacy modernization",
        ],
        process: deliveryProcess,
        technologies: [
            "CRM",
            "ERP",
            "HRMS",
            "Attendance",
            "API Development",
            "SaaS Platforms",
        ],
        faqs: [
            {
                q: "Can you build software for my specific business?",
                a: "Yes. We build custom systems around your unique workflows, customers and growth goals.",
            },
            {
                q: "Do you develop SaaS products for startups?",
                a: "Yes — from MVP to complete multi-tenant SaaS platforms, with design, development and hosting support.",
            },
            {
                q: "What support do you provide after launch?",
                a: "We provide ongoing maintenance, updates and continuous improvement as part of our delivery process.",
            },
        ],
        related: ["ai-solutions", "website-development", "database-solutions", "cloud-solutions"],
    },

    mobileAppDevelopment: {
        slug: "mobile-app-development",
        name: "Mobile App Development",

        problems: [
            "Your customers expect a mobile experience, but a responsive website alone doesn't give you the engagement a dedicated app can.",
            "Your current app is slow, outdated or unreliable, so users churn instead of coming back again and again.",
            "You have no real-time channels to reach users — notifications, loyalty, in-app actions — so re-engagement is near zero.",
        ],

        audience: [
            "Businesses that want a mobile presence for customers or staff",
            "Startups validating a product idea with an MVP",
            "Companies that need apps integrated with their existing systems",
        ],
        h1: "Mobile App Development Services in Rohtak",
        short:
            "Android, iOS and cross-platform mobile applications with great user experience.",
        icon: Smartphone,
        metaTitle: "Mobile App Development Services in Rohtak | First Signal Digital",
        metaDescription:
            "Mobile app development services from First Signal Digital — cross-platform apps for iOS and Android with clean design, reliable performance and business features.",
        description:
            "We build modern Android and iOS applications for startups, enterprises and internal business operations — cross-platform apps with exceptional user experience.",
        benefits: [
            "One app that works on Android and iOS",
            "Fast, smooth and user-friendly experience",
            "Built to integrate with your business systems",
            "Ready for growth and feature additions",
        ],
        offerings: [
            "Android apps",
            "iOS apps",
            "Cross-platform apps (Flutter / React Native)",
            "MVP development",
            "App UI/UX design",
            "Maintenance & updates",
        ],
        process: deliveryProcess,
        technologies: [
            "Android",
            "iOS",
            "Flutter",
            "React Native",
        ],
        faqs: [
            {
                q: "Do you build for both Android and iOS?",
                a: "Yes. We use cross-platform technology so you get both apps without doubling the cost.",
            },
            {
                q: "Can you connect the app to my existing software?",
                a: "Yes — we integrate apps with backends, APIs and your existing business systems.",
            },
            {
                q: "Do you handle app store publishing?",
                a: "We help prepare, test and guide the publishing process for app stores.",
            },
        ],
        related: ["website-development", "software-development", "ai-solutions", "lead-generation"],
    },

    aiSolutions: {
        slug: "ai-solutions",
        name: "AI Solutions & Automation",

        problems: [
            "Your teams repeat the same manual tasks daily — data entry, document processing, replies — burning hours that automation could reclaim.",
            "You collect business data but can't easily turn it into decisions, forecasts or customer insights.",
            "You're missing practical, buildable AI use cases while competitors begin automating service delivery and internal operations.",
        ],

        audience: [
            "Businesses that want to automate repetitive support and data work",
            "Companies that want AI chatbots and voice assistants for customers",
            "Organizations exploring practical, low-risk AI projects",
        ],
        h1: "AI Solutions & Automation Services",
        short:
            "AI assistants, chatbots, voice AI and business workflow automation.",
        icon: BrainCircuit,
        metaTitle: "AI Automation Services for Businesses | First Signal Digital",
        metaDescription:
            "AI automation services for businesses — AI assistants, chatbots, workflow automation and lead automation that save time and scale small teams.",
        description:
            "We build practical AI-powered solutions that automate repetitive work, improve decision-making and enhance customer experiences. From AI assistants to workflow automation, we help businesses embrace intelligent technology.",
        benefits: [
            "Repetitive tasks automated",
            "Faster customer response with AI assistants",
            "Smarter workflows and decisions",
            "Practical AI built around your business",
        ],
        offerings: [
            "AI chatbots & assistants",
            "Voice AI",
            "Workflow automation",
            "Knowledge bases",
            "LLM integration",
            "Business analytics",
        ],
        process: deliveryProcess,
        technologies: [
            "AI Chatbots",
            "Voice AI",
            "Workflow Automation",
            "LLM Integration",
            "Knowledge Base",
            "Business Analytics",
        ],
        faqs: [
            {
                q: "Will AI replace my team?",
                a: "No. Our goal is automation that removes repetitive work so your team can focus on higher-value tasks.",
            },
            {
                q: "What kind of businesses can use AI automation?",
                a: "Any business with repetitive processes — customer support, data entry, reporting and workflows can all be automated.",
            },
            {
                q: "How do you build custom AI solutions?",
                a: "We start with your workflow, then design and integrate AI systems that fit your existing tools and processes.",
            },
        ],
        related: ["software-development", "website-development", "cloud-solutions", "digital-transformation"],
    },

    mediaProduction: {
        slug: "media-production",
        name: "Media Production",

        problems: [
            "Your brand's videos, photos and promotional content look amateur, making your business seem smaller than it actually is.",
            "You don't have a steady stream of on-brand content for campaigns, social media and ads, so marketing runs on borrowed, mismatched media.",
            "Shoots are expensive and disorganised — no proper planning, scripting or post-production, so results rarely match the cost.",
        ],

        audience: [
            "Businesses in Rohtak needing corporate films, videos and photography",
            "Brands that want podcasts, reels and short-form content",
            "Companies that need professional content for marketing campaigns",
        ],
        h1: "Media Production Services in Rohtak",
        short:
            "Corporate films, podcasts, reels, photography and studio production.",
        icon: Camera,
        metaTitle: "Media Production Services in Rohtak | First Signal Digital",
        metaDescription:
            "Media production services in Rohtak — corporate videos, commercials, reels, photography and branded content produced in our in-house studio.",
        description:
            "From concept to final delivery, our professional studio and production team create corporate films, podcasts, reels, photography and branded content that informs, inspires and drives business growth.",
        benefits: [
            "Professional studio with quality equipment",
            "Anchors, actors and experienced production talent",
            "End-to-end production from concept to delivery",
            "Content built for your brand's growth",
        ],
        offerings: [
            "Corporate films & videos",
            "Podcast recording",
            "Social media reels",
            "Photography",
            "Commercial shoots",
            "Video editing & post-production",
        ],
        process: deliveryProcess,
        technologies: [
            "Studio",
            "Podcast",
            "Corporate Films",
            "Reels",
            "Photography",
            "Video Editing",
        ],
        faqs: [
            {
                q: "Can we record a podcast at your studio?",
                a: "Yes — our studio is equipped for professional audio and video podcast production.",
            },
            {
                q: "Do you help with scripts and planning?",
                a: "We provide end-to-end support including concept, scripting, production and final delivery.",
            },
            {
                q: "Can you produce content for social media?",
                a: "Yes — reels, shorts and short-form content are a core part of our media production service.",
            },
        ],
        related: ["branding", "social-media-marketing", "website-development", "digital-transformation"],
    },

    cloudSolutions: {
        slug: "cloud-solutions",
        name: "Cloud Solutions",

        problems: [
            "Your servers and hardware are aging, costly to maintain and unable to handle traffic spikes or sudden growth.",
            "Your teams can't securely access files, applications and backups from where they work, slowing collaboration and turnaround.",
            "You have no clear disaster recovery or backup strategy, leaving critical business data exposed to loss and downtime.",
        ],

        audience: [
            "Businesses migrating applications from local servers to the cloud",
            "Startups that need reliable, scalable hosting",
            "Companies that want monitoring and predictable cloud costs",
        ],
        h1: "Cloud Solutions Services",
        short:
            "Cloud deployment, hosting, monitoring and scalable infrastructure.",
        icon: Cloud,
        metaTitle: "Cloud Solutions & Services in Rohtak | First Signal Digital",
        metaDescription:
            "Cloud solutions and services in Rohtak from First Signal Digital — cloud hosting, migration, infrastructure and architecture that keep your platforms secure, scalable and available.",
        description:
            "We plan, deploy and manage cloud infrastructure — from hosting and deployment to monitoring and scalability — so your applications stay fast, available and cost-efficient.",
        benefits: [
            "Fast, reliable application hosting",
            "Scales with your business growth",
            "Proactive monitoring and uptime",
            "Cost-efficient infrastructure planning",
        ],
        offerings: [
            "Cloud deployment",
            "Application hosting",
            "Monitoring & alerting",
            "Scalable infrastructure",
            "Cloud migration",
            "Cost optimization",
        ],
        process: deliveryProcess,
        technologies: [
            "Cloud Deployment",
            "Hosting",
            "Monitoring",
            "Scalable Infrastructure",
            "Migration",
        ],
        faqs: [
            {
                q: "Can you migrate my existing systems to the cloud?",
                a: "Yes — we plan and execute cloud migration for existing applications and infrastructure.",
            },
            {
                q: "Do you provide ongoing monitoring?",
                a: "Yes. We set up monitoring and alerting so problems are caught and handled early.",
            },
            {
                q: "Is cloud hosting good for small businesses?",
                a: "Cloud hosting gives small businesses reliability and scalability at predictable cost.",
            },
        ],
        related: ["software-development", "database-solutions", "cyber-security", "ai-solutions"],
    },

    databaseSolutions: {
        slug: "database-solutions",
        name: "Database Solutions",

        problems: [
            "Your reports and dashboards are slow and unreliable, because data is scattered and queries are poorly structured.",
            "Duplicate, noisy or stale records make it hard to trust your numbers, affecting billing, inventory and decisions.",
            "Your data systems can't handle growing volume, so performance drops exactly when the business needs it most.",
        ],

        audience: [
            "Software teams that need solid database architecture",
            "Businesses with slow queries or growing data",
            "Companies that need backup, recovery and security planning",
        ],
        h1: "Database Solutions Services",
        short:
            "Secure, optimized and scalable database architecture.",
        icon: Database,
        metaTitle: "Database Solutions & Services in Rohtak | First Signal Digital",
        metaDescription:
            "Database solutions and services in Rohtak from First Signal Digital — design, optimization, migration and management of relational and NoSQL databases for reliable business data.",
        description:
            "We design, optimize and secure the databases behind your applications — ensuring performance, reliability and scalability as your data grows.",
        benefits: [
            "Faster application queries",
            "Secure and reliable data storage",
            "Scales with growing data",
            "Backup and recovery planning",
        ],
        offerings: [
            "Database architecture",
            "Query optimization",
            "Database security",
            "Backup & recovery",
            "Data migration",
            "Performance tuning",
        ],
        process: deliveryProcess,
        technologies: [
            "Database Architecture",
            "Optimization",
            "Security",
            "Scalability",
            "Migration",
        ],
        faqs: [
            {
                q: "Do you design databases for new applications?",
                a: "Yes — we design database architecture as part of software and SaaS development.",
            },
            {
                q: "Can you optimize an existing slow database?",
                a: "Yes. We audit and optimize queries, structure and configuration to improve performance.",
            },
            {
                q: "Is my data safe?",
                a: "We follow secure architecture practices and implement backup, access control and recovery planning.",
            },
        ],
        related: ["software-development", "cloud-solutions", "cyber-security", "mobile-app-development"],
    },

    cyberSecurity: {
        slug: "cyber-security",
        name: "Cyber Security",

        problems: [
            "Your business handles customer and payment data but has no tested security posture, exposing itself to breaches and fines.",
            "Employees are an easy entry point — phishing, weak passwords and unpatched systems go unnoticed until it's too late.",
            "You have no incident response or monitoring plan, so a single attack can freeze operations completely.",
        ],

        audience: [
            "Companies with websites or software that handle customer data",
            "Organizations that want a security audit before launching",
            "Businesses that want security built into the development process",
        ],
        h1: "Cyber Security Services",
        short:
            "Application security audits and enterprise-grade protection.",
        icon: Shield,
        metaTitle: "Cyber Security Services in Rohtak | First Signal Digital",
        metaDescription:
            "Cyber security services in Rohtak from First Signal Digital — audits, security architecture and hardening that protect business websites, apps and customer data.",
        description:
            "We apply application security, audits and enterprise-grade protection practices to keep your software, data and customers safe from common threats.",
        benefits: [
            "Find and fix security gaps early",
            "Protection for customer and business data",
            "Confidence for your users and partners",
            "Security built into the development process",
        ],
        offerings: [
            "Application security",
            "Security audits",
            "Vulnerability assessment",
            "Secure development practices",
            "Access control design",
            "Security guidance & fixes",
        ],
        process: deliveryProcess,
        technologies: [
            "Application Security",
            "Security Audits",
            "Vulnerability Assessment",
            "Enterprise Protection",
        ],
        faqs: [
            {
                q: "Can you audit an existing application?",
                a: "Yes — we review applications and infrastructure for common security weaknesses and provide fixes.",
            },
            {
                q: "Do you secure both websites and software?",
                a: "Yes, we apply security practices to websites, mobile apps, APIs and business software.",
            },
            {
                q: "Will security slow down my development?",
                a: "No — we build security into the process, which costs far less than fixing issues after launch.",
            },
        ],
        related: ["software-development", "cloud-solutions", "database-solutions", "website-development"],
    },

    digitalTransformation: {
        slug: "digital-transformation",
        name: "Digital Transformation",

        problems: [
            "Manual, paperwork-heavy processes slow every department down and make the business hard to scale.",
            "Departments work in silos with disconnected tools, so data, customer history and decisions never flow together.",
            "You know competitors are digitising, but without a clear roadmap you risk investing in the wrong technology.",
        ],

        audience: [
            "Organizations modernizing outdated processes and systems",
            "Businesses that want a clear technology roadmap",
            "Companies adopting cloud, automation and AI step by step",
        ],
        h1: "Digital Transformation Services",
        short:
            "End-to-end consulting to modernize and automate business operations.",
        icon: Cpu,
        metaTitle: "Digital Transformation Services in Rohtak | First Signal Digital",
        metaDescription:
            "Digital transformation services in Rohtak from First Signal Digital — process automation, technology strategy and digitization roadmaps that help organizations modernize and grow.",
        description:
            "We align technology with business strategy through consulting, automation and digital transformation initiatives — helping organizations modernize operations and accelerate growth.",
        benefits: [
            "A clear digital roadmap for your business",
            "Operations streamlined with automation",
            "Technology aligned with business goals",
            "Modern systems ready for the future",
        ],
        offerings: [
            "Digital strategy",
            "Business consulting",
            "Cloud adoption",
            "Workflow automation",
            "Technology advisory",
            "Process optimization",
        ],
        process: deliveryProcess,
        technologies: [
            "Digital Strategy",
            "Business Consulting",
            "Cloud Adoption",
            "Automation",
            "Process Optimization",
        ],
        faqs: [
            {
                q: "How do we start a digital transformation?",
                a: "We begin with a discovery and strategy phase to understand your goals, processes and priorities.",
            },
            {
                q: "Do we have to change everything at once?",
                a: "No. We create a practical roadmap so you can modernize in phases that fit your budget and timeline.",
            },
            {
                q: "Is digital transformation only for big companies?",
                a: "No — small and medium businesses benefit from smarter systems and automation too.",
            },
        ],
        related: ["ai-solutions", "software-development", "cloud-solutions", "branding"],
    },
};

const serviceList = Object.values(services);

export default services;
export { serviceList, deliveryProcess };