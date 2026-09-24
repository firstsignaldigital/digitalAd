import {
    Megaphone,
    Code2,
    Clapperboard,
} from "lucide-react";

const servicesMenu = {
    categories: [
        {
            title: "Digital Marketing",
            icon: Megaphone,
            services: [
                { label: "SEO & GEO", url: "/services/seo" },
                { label: "Google Ads", url: "/services/google-ads" },
                { label: "Social Media Marketing", url: "/services/social-media-marketing" },
                { label: "Meta Ads", url: "/services/social-media-marketing" },
                { label: "Lead Generation", url: "/services/lead-generation" },
                { label: "Branding", url: "/services/branding" },
            ],
        },
        {
            title: "Technology",
            icon: Code2,
            services: [
                { label: "AI Solutions & Automation", url: "/services/ai-solutions" },
                {
                    label: "Website & Portal Development",
                    url: "/services/website-development",
                },
                {
                    label: "Mobile App Development",
                    url: "/services/mobile-app-development",
                },
                {
                    label: "Software & SaaS Development",
                    url: "/services/software-development",
                },
                { label: "Enterprise SaaS Platforms", url: "/solutions" },
            ],
        },
        {
            title: "Creative & Media",
            icon: Clapperboard,
            services: [
                { label: "Media Production", url: "/services/media-production" },
                { label: "Corporate Videos", url: "/services/media-production" },
                { label: "Podcast Studio", url: "/studio" },
                { label: "Reels & Shorts", url: "/studio" },
                { label: "Photography", url: "/services/media-production" },
            ],
        },
    ],
    viewAll: {
        label: "View All Services",
        url: "/services",
    },
};

export default servicesMenu;