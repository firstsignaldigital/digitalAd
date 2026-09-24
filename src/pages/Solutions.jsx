import { motion } from "framer-motion";
import {
    ArrowRight,
    Cloud,
    Monitor,
    Smartphone,
    Cpu,
} from "lucide-react";
import { Link } from "react-router-dom";

import SEO from "/src/components/SEO";
import keywordMap from "/src/data/keywordMap";
import solutions, { implementationProcess } from "/src/data/solutions";
import services from "/src/data/servicesDetail";
import SolutionCard from "/src/components/solutions/SolutionCard";
import ServiceCard from "/src/components/ui/ServiceCard";

const categoryOrder = [
    "Business Systems",
    "Industry Solutions",
    "Business Operations",
];

const technologies = [
    "React",
    "Next.js",
    "Flutter",
    "React Native",
    "Node.js",
    "Python",
    "FastAPI",
    "Laravel",
    "PostgreSQL",
    "MongoDB",
    "AWS",
    "Azure",
];

const deployment = [
    {
        icon: Cloud,
        title: "Cloud SaaS",
    },
    {
        icon: Monitor,
        title: "On-Premise",
    },
    {
        icon: Smartphone,
        title: "Mobile Apps",
    },
    {
        icon: Cpu,
        title: "AI Enabled",
    },
];

const relatedServices = ["software-development", "ai-solutions", "website-development", "mobile-app-development"]
    .map((slug) => services[slug])
    .filter(Boolean);

export default function Solutions() {
    const kw = keywordMap["/solutions"];
    return (
        <>
            <SEO
                route="/solutions"
                title={kw.title}
                description={kw.metaDescription}
            />

            {/* HERO */}

            <section className="bg-linear-to-br from-blue-950 via-blue-900 to-blue-800 pt-36 pb-24 text-white">

                <div className="mx-auto max-w-7xl px-6">

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: .6 }}
                        className="max-w-4xl"
                    >

                        <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">

                            PLATFORMS & SAAS SOLUTIONS

                        </span>

                        <h1 className="mt-8 text-5xl font-bold md:text-6xl">

                            Business Software
                            <span className="block text-cyan-300">
                                Solutions.
                            </span>

                        </h1>

                        <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300">

                            We design, build and support software platforms —
                            CRM, ERP, HRMS, school ERP, hospital systems,
                            dashboards and more — tailored to the way your
                            business actually works. Based in Rohtak, Haryana,
                            and serving clients across India.

                        </p>

                        <div className="mt-10 flex flex-wrap gap-5">

                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-3 rounded-full bg-cyan-500 px-7 py-4 font-semibold text-slate-900 transition hover:scale-105"
                            >

                                Discuss Your Solution

                                <ArrowRight size={18} />

                            </Link>

                            <Link
                                to="/services/software-development"
                                className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-7 py-4 font-semibold backdrop-blur transition hover:bg-white/10"
                            >

                                Software Engineering

                                <ArrowRight size={18} />

                            </Link>

                        </div>

                    </motion.div>

                </div>

            </section>

            {/* SOLUTION CATEGORIES */}

            {categoryOrder.map((category) => {

                const items = Object.values(solutions).filter(
                    (solution) => solution.category === category
                );

                if (items.length === 0) {
                    return null;
                }

                return (

                    <section
                        key={category}
                        className="bg-white py-24"
                    >

                        <div className="mx-auto max-w-7xl px-6">

                            <div className="text-center max-w-3xl mx-auto">

                                <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">

                                    {category.toUpperCase()}

                                </span>

                                <h2 className="mt-5 text-4xl font-bold text-slate-900">

                                    {category}

                                </h2>

                            </div>

                            <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

                                {items.map((solution) => (

                                    <SolutionCard
                                        key={solution.slug}
                                        title={solution.name}
                                        icon={solution.icon}
                                        category={solution.category}
                                        description={solution.short}
                                        to={`/solutions/${solution.slug}`}
                                    />

                                ))}

                            </div>

                        </div>

                    </section>

                );

            })}

            {/* HOW SOLUTIONS ARE DEVELOPED */}

            <section className="bg-slate-50 py-24">

                <div className="mx-auto max-w-7xl px-6">

                    <div className="text-center max-w-3xl mx-auto">

                        <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">

                            HOW SOLUTIONS ARE BUILT

                        </span>

                        <h2 className="mt-5 text-4xl font-bold text-slate-900">

                            From Discovery To Ongoing Support

                        </h2>

                        <p className="mt-6 text-lg leading-8 text-slate-600">

                            Every platform is scoped around your business first.
                            One team designs, builds, launches and supports it
                            end to end.

                        </p>

                    </div>

                    <div className="mt-16 grid gap-6 md:grid-cols-3">

                        {implementationProcess.map((step, index) => (

                            <div
                                key={step}
                                className="rounded-[28px] bg-white p-8 shadow-md"
                            >

                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-600 font-bold text-white">
                                    {index + 1}
                                </div>

                                <h3 className="mt-5 font-semibold text-slate-900">
                                    {step}
                                </h3>

                            </div>

                        ))}

                    </div>

                </div>

            </section>

            {/* TECHNOLOGY + DEPLOYMENT */}

            <section className="py-24">

                <div className="mx-auto max-w-7xl px-6">

                    <div className="grid gap-14 lg:grid-cols-2">

                        <div>

                            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">

                                TECHNOLOGY STACK

                            </span>

                            <h2 className="mt-5 text-4xl font-bold text-slate-900">

                                Modern Technologies For Modern Businesses

                            </h2>

                            <div className="mt-10 flex flex-wrap gap-4">

                                {technologies.map((tech) => (

                                    <span
                                        key={tech}
                                        className="rounded-full bg-slate-100 px-5 py-3 font-medium"
                                    >

                                        {tech}

                                    </span>

                                ))}

                            </div>

                        </div>

                        <div className="grid gap-6 sm:grid-cols-2">

                            {deployment.map((item) => {

                                const Icon = item.icon;

                                return (

                                    <div
                                        key={item.title}
                                        className="rounded-[28px] border bg-white p-8 shadow-sm"
                                    >

                                        <Icon className="text-cyan-600" />

                                        <h3 className="mt-6 text-xl font-bold text-slate-900">

                                            {item.title}

                                        </h3>

                                    </div>

                                );

                            })}

                        </div>

                    </div>

                </div>

            </section>

            {/* RELATED SERVICES */}

            <section className="bg-slate-50 py-24">

                <div className="mx-auto max-w-7xl px-6">

                    <div className="text-center max-w-3xl mx-auto">

                        <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">

                            WE ALSO OFFER

                        </span>

                        <h2 className="mt-5 text-4xl font-bold text-slate-900">

                            Related Services

                        </h2>

                        <p className="mt-6 text-lg leading-8 text-slate-600">

                            Platforms are only part of the journey. Our services
                            cover the software, websites, AI and marketing that
                            surround your product.

                        </p>

                    </div>

                    <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

                        {relatedServices.map((item) => (

                            <ServiceCard
                                key={item.slug}
                                title={item.name}
                                icon={item.icon}
                                description={item.short}
                                to={`/services/${item.slug}`}
                            />

                        ))}

                    </div>

                </div>

            </section>

            {/* CTA */}

            <section className="bg-blue-950 py-24 text-white">

                <div className="mx-auto max-w-4xl px-6 text-center">

                    <h2 className="text-4xl font-bold">

                        Need A Platform Built For Your Business?

                    </h2>

                    <p className="mt-6 text-lg leading-8 text-slate-300">

                        We design, build and maintain enterprise-grade SaaS
                        platforms tailored to your unique business processes.

                    </p>

                    <Link
                        to="/contact"
                        className="mt-10 inline-flex items-center gap-3 rounded-full bg-cyan-500 px-8 py-4 font-semibold text-slate-900 transition hover:scale-105"
                    >
                        Let's Talk

                        <ArrowRight size={18} />
                    </Link>

                </div>

            </section>

        </>
    );
}