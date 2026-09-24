import {
    BrainCircuit,
    Globe,
    Smartphone,
    Search,
    Megaphone,
    Camera,
    MonitorSmartphone,
    Cloud,
    Database,
    Shield,
    Video,
    Cpu,
} from "lucide-react";

const services = [
    {
        title: "Artificial Intelligence",
        icon: BrainCircuit,
        to: "/services/ai-solutions",
        description:
            "AI assistants, chatbots, voice agents and business automation.",
    },
    {
        title: "Web Development",
        icon: Globe,
        to: "/services/website-development",
        description:
            "Corporate websites, portals, eCommerce and web applications.",
    },
    {
        title: "Mobile Applications",
        icon: Smartphone,
        to: "/services/mobile-app-development",
        description:
            "Android, iOS and cross-platform mobile app development.",
    },
    {
        title: "SEO & GEO",
        icon: Search,
        to: "/services/seo",
        description:
            "Search optimization for Google and AI-powered search engines.",
    },
    {
        title: "Digital Marketing",
        icon: Megaphone,
        to: "/marketing",
        description:
            "Performance marketing, Meta Ads, Google Ads and lead generation.",
    },
    {
        title: "Media Production",
        icon: Camera,
        to: "/services/media-production",
        description:
            "Corporate films, podcasts, reels, photography and studio services.",
    },
    {
        title: "Business Software",
        icon: MonitorSmartphone,
        to: "/services/software-development",
        description:
            "CRM, ERP, HRMS, attendance, inventory and automation systems.",
    },
    {
        title: "Cloud Solutions",
        icon: Cloud,
        to: "/services/cloud-solutions",
        description:
            "Cloud deployment, hosting, monitoring and scalable infrastructure.",
    },
    {
        title: "Database Solutions",
        icon: Database,
        to: "/services/database-solutions",
        description:
            "Secure, optimized and scalable database architecture.",
    },
    {
        title: "Cyber Security",
        icon: Shield,
        to: "/services/cyber-security",
        description:
            "Application security, audits and enterprise-grade protection.",
    },
    {
        title: "Studio & Video",
        icon: Video,
        to: "/studio",
        description:
            "Professional studio, anchors, actors and video production.",
    },
    {
        title: "Digital Transformation",
        icon: Cpu,
        to: "/services/digital-transformation",
        description:
            "End-to-end consulting to modernize and automate business operations.",
    },
];

export default services;