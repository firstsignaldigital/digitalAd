import { motion } from "framer-motion";
import {
    ArrowRight,
    MapPin,
    Phone,
    MessageCircle,
    Search,
    MousePointerClick,
    Globe,
    BrainCircuit,
} from "lucide-react";
import { Link } from "react-router-dom";

const localServices = [
    {
        icon: Search,
        title: "SEO Services",
        desc: "Technical and local SEO that helps Rohtak businesses get found on Google and AI search.",
        url: "/services/seo",
    },
    {
        icon: MousePointerClick,
        title: "Google Ads",
        desc: "Search and display campaigns that bring qualified enquiries and calls.",
        url: "/services/google-ads",
    },
    {
        icon: Globe,
        title: "Websites & Portals",
        desc: "Fast, responsive and SEO-ready websites built for businesses in Rohtak and beyond.",
        url: "/services/website-development",
    },
    {
        icon: BrainCircuit,
        title: "AI & Automation",
        desc: "AI assistants, chatbots and workflow automation for smaller teams.",
        url: "/services/ai-solutions",
    },
];

export default function RohtakSection() {
    return (
        <section className="relative overflow-hidden bg-white py-28">

            {/* Background Decoration */}

            <div className="absolute inset-0">

                <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-100/40 blur-3xl" />

                <div className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-cyan-100/40 blur-3xl" />

            </div>

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

                <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

                    {/* LEFT: Local narrative */}

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >

                        <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">

                            <MapPin size={16} />

                            LOCAL EXPERTISE

                        </span>

                        <h2 className="mt-6 text-4xl font-bold leading-tight text-slate-900">

                            Digital Marketing &amp; Technology Services

                            <span className="block text-blue-700">

                                in Rohtak

                            </span>

                        </h2>

                        <p className="mt-6 text-lg leading-8 text-slate-600">

                            As a digital marketing agency in Rohtak, we work with
                            businesses and institutions in the city and across
                            Haryana who want a partner that combines digital
                            marketing, technology and media under one roof. From
                            a salon, clinic, school or retailer to a growing
                            company launching its own software product, we plan
                            and deliver solutions around your goals.

                        </p>

                        <p className="mt-4 text-lg leading-8 text-slate-600">

                            Being based in Rohtak means you can meet us, call us
                            or message us directly — while clients across India
                            work with us remotely through clear communication
                            and transparent reporting.

                        </p>

                        <div className="mt-10 flex flex-wrap gap-5">

                            <Link
                                to="/services"
                                className="inline-flex items-center gap-3 rounded-full bg-blue-600 px-7 py-4 font-semibold text-white transition hover:bg-blue-700"
                            >

                                Explore All Services

                                <ArrowRight size={18} />

                            </Link>

                            <a
                                href="tel:+919817048962"
                                className="inline-flex items-center gap-3 rounded-full border border-slate-300 px-7 py-4 font-semibold text-slate-700 transition hover:bg-slate-100"
                            >

                                <Phone size={18} />

                                +91 98170 48962

                            </a>

                        </div>

                    </motion.div>

                    {/* RIGHT: Service cards */}

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="grid gap-6 sm:grid-cols-2"
                    >

                        {localServices.map((item) => {

                            const Icon = item.icon;

                            return (

                                <Link
                                    key={item.title}
                                    to={item.url}
                                    className="group rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
                                >

                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-100">

                                        <Icon className="text-cyan-700" size={26} />

                                    </div>

                                    <h3 className="mt-6 text-lg font-bold text-slate-900">

                                        {item.title}

                                    </h3>

                                    <p className="mt-3 text-sm leading-6 text-slate-600">

                                        {item.desc}

                                    </p>

                                    <span className="mt-5 inline-flex items-center gap-2 font-semibold text-blue-700 transition group-hover:gap-3">

                                        Explore {item.title}

                                        <ArrowRight size={16} />

                                    </span>

                                </Link>

                            );

                        })}

                    </motion.div>

                </div>

                {/* CTA strip */}

                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mt-20 rounded-[36px] bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 p-10 text-center text-white lg:p-14"
                >

                    <h3 className="text-3xl font-bold lg:text-4xl">

                        Looking for a Digital Partner in Rohtak?

                    </h3>

                    <p className="mx-auto mt-5 max-w-3xl text-lg text-blue-100">

                        Describe your project on a free call, on WhatsApp or
                        through the contact form — we'll tell you honestly what
                        will help your business grow.

                    </p>

                    <div className="mt-10 flex flex-wrap justify-center gap-5">

                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-semibold text-blue-700 transition hover:scale-105"
                        >

                            Start Your Project

                            <ArrowRight size={18} />

                        </Link>

                        <a
                            href="https://wa.me/919817048962"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 rounded-full border border-white/40 px-8 py-4 font-semibold transition hover:bg-white/10"
                        >

                            <MessageCircle size={18} />

                            WhatsApp Us

                        </a>

                    </div>

                </motion.div>

            </div>

        </section>
    );
}