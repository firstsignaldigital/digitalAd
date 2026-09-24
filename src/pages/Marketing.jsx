import { motion } from "framer-motion";
import {
    ArrowRight,
    Search,
    Megaphone,
    Target,
    BarChart3,
    MousePointerClick,
    MessageCircle,
    TrendingUp,
    LineChart,
    Share2,
    Users,
    Eye,
    Rocket,
    CheckCircle2,
    PieChart,
    Globe,
    Clapperboard,
} from "lucide-react";
import { Link } from "react-router-dom";

import SEO from "/src/components/SEO";
import keywordMap from "/src/data/keywordMap";

const channels = [
    { title: "Google", icon: Globe, desc: "Search & display campaigns on Google." },
    { title: "Facebook / Instagram", icon: Share2, desc: "Meta Ads with precise audience targeting." },
    { title: "YouTube", icon: Clapperboard, desc: "Video campaigns for brand and performance." },
    { title: "WhatsApp", icon: MessageCircle, desc: "Direct conversations, broadcasts and follow-ups." },
];

const services = [
    {
        icon: Search,
        title: "Google Ads (PPC)",
        description:
            "Search, Display, Shopping and Performance Max campaigns that put your business in front of ready-to-buy customers.",
    },
    {
        icon: Megaphone,
        title: "Meta Ads",
        description:
            "Facebook and Instagram ad campaigns built on audience research, creative testing and clear conversion tracking.",
    },
    {
        icon: Target,
        title: "SEO & GEO",
        description:
            "Rank on Google and AI-powered search engines like ChatGPT, Gemini and Perplexity with search-optimized content.",
    },
    {
        icon: UserFocus,
        title: "Social Media Marketing",
        description:
            "Content calendars, page management, reels and community growth that build your brand every single day.",
    },
    {
        icon: MousePointerClick,
        title: "Performance & Lead Gen",
        description:
            "Landing pages, lead forms, call tracking and qualified leads measured against your cost and revenue targets.",
    },
    {
        icon: Clapperboard,
        title: "YouTube Marketing",
        description:
            "Channel growth, video campaigns and content that turn viewers into customers using our in-house studio.",
    },
];

const process = [
    { title: "Audit & Research", desc: "We study your market, competitors and current presence." },
    { title: "Strategy & Targeting", desc: "We define audiences, budget and the channels that matter." },
    { title: "Creative & Landing Pages", desc: "Ads, content and pages designed to convert your leads." },
    { title: "Launch & Optimize", desc: "Campaigns go live and are continuously improved." },
    { title: "Reports & Growth", desc: "Clear monthly reports tied to leads, calls and sales." },
];

const benefits = [
    {
        icon: Target,
        title: "ROI-Focused",
        desc: "Every campaign is measured against leads, calls and revenue — not just clicks.",
    },
    {
        icon: LineChart,
        title: "Transparent Reporting",
        desc: "Monthly dashboards you can understand, with honest recommendations.",
    },
    {
        icon: PieChart,
        title: "Full-Funnel Approach",
        desc: "From first impression to follow-up, your marketing works as one system.",
    },
    {
        icon: Users,
        title: "Built For Local Businesses",
        desc: "We know the Rohtak & Haryana market and how local customers actually buy.",
    },
    {
        icon: Rocket,
        title: "In-House Creative",
        desc: "Studio, anchors, reels and ads — produced and launched by the same team.",
    },
    {
        icon: Eye,
        title: "Awareness To Sales",
        desc: "We don't stop at visibility. The goal is booked calls and closed deals.",
    },
];

const faqs = [
    {
        q: "What marketing services do you offer?",
        a: "Google Ads, Meta (Facebook & Instagram) ads, SEO & GEO, social media marketing, WhatsApp marketing and full performance/lead generation campaigns.",
    },
    {
        q: "What is the minimum budget for ads?",
        a: "It depends on your market and goals. We recommend starting with a budget you are comfortable testing with, and we optimize it as results come in.",
    },
    {
        q: "How soon will I see results?",
        a: "Paid ads can bring clicks and calls within days. Consistent search rankings from SEO typically build over a few months.",
    },
    {
        q: "Do you provide monthly reports?",
        a: "Yes. You get a clear monthly report showing spend, results, leads and recommendations for the next phase.",
    },
];

function UserFocus(props) {
    return <Share2 {...props} />;
}

export default function Marketing() {
    const kw = keywordMap["/marketing"];
    return (
        <>
            <SEO
                route="/marketing"
                title={kw.title}
                description={kw.metaDescription}
                faq={faqs}
            />

            {/* HERO */}

            <section className="bg-linear-to-br from-blue-950 via-blue-900 to-blue-800 pt-36 pb-24 text-white">

                <div className="mx-auto max-w-7xl px-6">

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl"
                    >

                        <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">

                            PERFORMANCE MARKETING IN ROHTAK

                        </span>

                        <h1 className="mt-8 text-5xl font-bold leading-tight md:text-6xl">

                            Performance Marketing
                            <span className="block text-cyan-300">
                                in Rohtak.
                            </span>

                        </h1>

                        <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300">

                            Google Ads, Meta Ads, SEO and social media campaigns
                            designed to bring your business calls, enquiries and
                            revenue — not just likes.

                        </p>

                        <div className="mt-10 flex flex-wrap gap-5">

                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-3 rounded-full bg-cyan-500 px-7 py-4 font-semibold text-slate-900 transition hover:scale-105"
                            >
                                Get A Free Marketing Audit

                                <ArrowRight size={18} />
                            </Link>

                            <a
                                href="https://wa.me/919817048962"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-7 py-4 font-semibold backdrop-blur transition hover:bg-white/10"
                            >
                                <MessageCircle size={20} />

                                WhatsApp Us
                            </a>

                        </div>

                    </motion.div>

                </div>

            </section>

            {/* FEATURED */}

            <section className="py-24">

                <div className="mx-auto max-w-7xl px-6">

                    <div className="rounded-[36px] bg-linear-to-r from-blue-700 to-cyan-600 p-10 text-white shadow-2xl lg:p-16">

                        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">

                            <div>

                                <span className="text-sm uppercase tracking-[0.3em]">

                                    PERFORMANCE MARKETING

                                </span>

                                <h2 className="mt-5 text-4xl font-bold">

                                    Every Rupee Tied To a Result.

                                </h2>

                                <p className="mt-6 text-lg leading-8 text-blue-50">

                                    We build campaigns that answer one question:
                                    did this bring the business a customer?
                                    Calls, WhatsApp enquiries, form fills and
                                    walk-ins — tracked and reported honestly.

                                </p>

                                <Link
                                    to="/contact"
                                    className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 font-semibold text-blue-700"
                                >

                                    Plan Your Campaign

                                    <ArrowRight size={18} />

                                </Link>

                            </div>

                            <div className="rounded-[28px] bg-white/10 p-8 backdrop-blur">

                                <div className="space-y-5">

                                    {[
                                        "Google Ads setup & management",
                                        "Facebook & Instagram Ads",
                                        "SEO & AI search (GEO) optimization",
                                        "Landing pages & lead forms",
                                        "Call & WhatsApp tracking",
                                        "Monthly performance reports",
                                    ].map((item) => (

                                        <div
                                            key={item}
                                            className="flex items-center gap-3"
                                        >

                                            <CheckCircle2 className="text-cyan-200" />

                                            {item}

                                        </div>

                                    ))}

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* SERVICES */}

            <section className="bg-slate-50 py-24">

                <div className="mx-auto max-w-7xl px-6">

                    <div className="text-center max-w-3xl mx-auto">

                        <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">

                            MARKETING SERVICES

                        </span>

                        <h2 className="mt-5 text-4xl font-bold text-slate-900">

                            Everything Your Marketing Needs

                        </h2>

                    </div>

                    <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

                        {services.map((item) => {

                            const Icon = item.icon;

                            return (

                                <div
                                    key={item.title}
                                    className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-xl"
                                >

                                    <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-cyan-100">

                                        <Icon className="text-cyan-700" size={30} />

                                    </div>

                                    <h3 className="mt-6 text-xl font-bold text-slate-900">

                                        {item.title}

                                    </h3>

                                    <p className="mt-3 leading-7 text-slate-600">

                                        {item.description}

                                    </p>

                                </div>

                            );

                        })}

                    </div>

                </div>

            </section>

            {/* PROCESS */}

            <section className="py-24">

                <div className="mx-auto max-w-7xl px-6">

                    <div className="text-center">

                        <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">

                            HOW WE WORK

                        </span>

                        <h2 className="mt-5 text-4xl font-bold text-slate-900">

                            From Click To Customer

                        </h2>

                    </div>

                    <div className="mt-16 grid gap-6 md:grid-cols-5">

                        {process.map((step, index) => (

                            <div
                                key={step.title}
                                className="rounded-[28px] bg-white p-8 shadow-md"
                            >

                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-600 font-bold text-white">

                                    {index + 1}

                                </div>

                                <h3 className="mt-5 text-lg font-bold text-slate-900">

                                    {step.title}

                                </h3>

                                <p className="mt-2 text-sm leading-6 text-slate-600">

                                    {step.desc}

                                </p>

                            </div>

                        ))}

                    </div>

                </div>

            </section>

            {/* WHY US */}

            <section className="bg-slate-50 py-24">

                <div className="mx-auto max-w-7xl px-6">

                    <div className="grid gap-14 lg:grid-cols-2 lg:items-center">

                        <div>

                            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">

                                WHY FIRST SIGNAL DIGITAL

                            </span>

                            <h2 className="mt-5 text-4xl font-bold text-slate-900">

                                Marketing Runs On Evidence, Not Excuses.

                            </h2>

                            <p className="mt-6 text-lg leading-8 text-slate-600">

                                Your marketing budget deserves to bring customers.
                                We combine paid ads, search visibility and strong
                                creative — with an in-house studio that keeps
                                your content on-brand and always fresh.

                            </p>

                            <div className="mt-10 flex flex-wrap gap-4">

                                {channels.map((c) => {

                                    const Icon = c.icon;

                                    return (

                                        <div
                                            key={c.title}
                                            className="flex items-center gap-3 rounded-full border border-slate-200 bg-white px-5 py-3 shadow-sm"
                                        >

                                            <Icon className="text-cyan-600" />

                                            <span className="font-semibold">

                                                {c.title}

                                            </span>

                                        </div>

                                    );

                                })}

                            </div>

                        </div>

                        <div className="grid gap-6 sm:grid-cols-2">

                            {benefits.map((item) => {

                                const Icon = item.icon;

                                return (

                                    <div
                                        key={item.title}
                                        className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-xl"
                                    >

                                        <Icon className="text-cyan-600" size={28} />

                                        <h3 className="mt-5 text-lg font-bold text-slate-900">

                                            {item.title}

                                        </h3>

                                        <p className="mt-2 text-sm leading-6 text-slate-600">

                                            {item.desc}

                                        </p>

                                    </div>

                                );

                            })}

                        </div>

                    </div>

                </div>

            </section>

            {/* FAQ */}

            <section className="py-24">

                <div className="mx-auto max-w-4xl px-6">

                    <div className="text-center">

                        <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">

                            QUESTIONS

                        </span>

                        <h2 className="mt-5 text-4xl font-bold text-slate-900">

                            Before You Start

                        </h2>

                    </div>

                    <div className="mt-12 space-y-4">

                        {faqs.map((item) => (

                            <details
                                key={item.q}
                                className="group rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm"
                            >

                                <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-slate-900">

                                    {item.q}

                                    <span className="ml-4 text-cyan-600 transition group-open:rotate-45">

                                        +

                                    </span>

                                </summary>

                                <p className="mt-4 leading-7 text-slate-600">

                                    {item.a}

                                </p>

                            </details>

                        ))}

                    </div>

                </div>

            </section>

            {/* CTA */}

            <section className="bg-blue-950 py-24 text-white">

                <div className="mx-auto max-w-4xl px-6 text-center">

                    <h2 className="text-4xl font-bold">

                        Ready To Bring Real Customers?

                    </h2>

                    <p className="mt-6 text-lg leading-8 text-slate-300">

                        Tell us about your business and we will map the right
                        marketing mix — free, no strings attached.

                    </p>

                    <div className="mt-10 flex flex-wrap justify-center gap-5">

                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-3 rounded-full bg-cyan-500 px-8 py-4 font-semibold text-slate-900 transition hover:scale-105"
                        >

                            Start Your Project

                            <ArrowRight size={18} />

                        </Link>

                        <a
                            href="https://wa.me/919817048962"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-8 py-4 font-semibold backdrop-blur transition hover:bg-white/10"
                        >

                            <MessageCircle size={20} />

                            Chat On WhatsApp
                        </a>

                    </div>

                </div>

            </section>

        </>
    );
}