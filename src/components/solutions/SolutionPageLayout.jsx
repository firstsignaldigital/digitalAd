import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
    ArrowRight,
    CheckCircle2,
    ChevronRight,
    MessageCircle,
    MapPin,
    Layers,
    BarChart3,
    XCircle,
    Users,
} from "lucide-react";

import SEO from "/src/components/SEO";
import solutions, { implementationProcess } from "/src/data/solutions";
import services from "/src/data/servicesDetail";

export default function SolutionPageLayout({ solution }) {
    const Icon = solution.icon;

    const relatedSolutions = (solution.relatedSolutions || [])
        .map((slug) => solutions[slug])
        .filter(Boolean);

    const relatedServices = (solution.relatedServices || [])
        .map((slug) => services[slug])
        .filter(Boolean);

    const breadcrumbs = [
        { name: "Home", path: "/" },
        { name: "Solutions", path: "/solutions" },
        { name: solution.name, path: `/solutions/${solution.slug}` },
    ];

    return (
        <>
            <SEO
                route={`/solutions/${solution.slug}`}
                title={solution.metaTitle}
                description={solution.metaDescription}
                breadcrumbs={breadcrumbs}
                faq={solution.faqs || []}
            />

            {/* Hero */}
            <section className="bg-linear-to-br from-blue-950 via-blue-900 to-blue-800 pt-36 pb-24 text-white">

                <div className="mx-auto max-w-7xl px-6">

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl"
                    >

                        <nav
                            aria-label="Breadcrumb"
                            className="flex flex-wrap items-center gap-2 text-sm text-slate-300"
                        >
                            <Link to="/" className="transition hover:text-white">
                                Home
                            </Link>
                            <ChevronRight size={14} />
                            <Link
                                to="/solutions"
                                className="transition hover:text-white"
                            >
                                Solutions
                            </Link>
                            <ChevronRight size={14} />
                            <span className="text-cyan-300" aria-current="page">
                                {solution.name}
                            </span>
                        </nav>

                        <div className="mt-8 flex h-16 w-16 items-center justify-center rounded-3xl bg-cyan-500/10 text-cyan-300">
                            <Icon size={30} />
                        </div>

                        <h1 className="mt-8 text-5xl font-bold leading-tight md:text-6xl">
                            {solution.h1}
                        </h1>

                        <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300">
                            {solution.description}
                        </p>

                        <div className="mt-10 flex flex-wrap gap-5">
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-3 rounded-full bg-cyan-500 px-7 py-4 font-semibold text-slate-900 transition hover:scale-105"
                            >
                                Start Your Project
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

            {/* What the solution does */}
            <section className="bg-slate-50 py-24">

                <div className="mx-auto max-w-7xl px-6">

                    <div className="grid gap-14 lg:grid-cols-2 lg:items-center">

                        <div>

                            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">
                                WHAT THIS SOLUTION DOES
                            </span>

                            <h2 className="mt-5 text-4xl font-bold text-slate-900">
                                {solution.name} In Practice
                            </h2>

                            <p className="mt-6 text-lg leading-8 text-slate-600">
                                {solution.intro}
                            </p>

                            <Link
                                to="/contact"
                                className="mt-8 inline-flex items-center gap-3 rounded-full bg-blue-700 px-7 py-4 font-semibold text-white transition hover:bg-blue-800"
                            >
                                Discuss Your Requirements
                                <ArrowRight size={18} />
                            </Link>

                        </div>

                        <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-xl">

                            <h3 className="text-xl font-semibold text-slate-900">
                                What's Included
                            </h3>

                            <div className="mt-6 space-y-4">

                                {solution.features.map((item) => (

                                    <div
                                        key={item}
                                        className="flex items-center gap-3"
                                    >

                                        <CheckCircle2 className="text-cyan-600" size={20} />

                                        <span className="text-slate-700">
                                            {item}
                                        </span>

                                    </div>

                                ))}

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* Business problems it solves */}
            {solution.problems && solution.problems.length > 0 && (

                <section className="py-24">

                    <div className="mx-auto max-w-7xl px-6">

                        <div className="text-center max-w-3xl mx-auto">

                            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">
                                COMMON CHALLENGES
                            </span>

                            <h2 className="mt-5 text-4xl font-bold text-slate-900">
                                Business Problems This Solution Solves
                            </h2>

                            <p className="mt-6 text-lg leading-8 text-slate-600">
                                We build the solution around the problems your
                                team faces every day — so it delivers real
                                change, not just software.
                            </p>

                        </div>

                        <div className="mt-16 grid gap-6 md:grid-cols-3">

                            {solution.problems.map((problem) => (

                                <div
                                    key={problem}
                                    className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm"
                                >

                                    <XCircle className="text-red-400" size={28} />

                                    <p className="mt-5 leading-7 text-slate-700">
                                        {problem}
                                    </p>

                                </div>

                            ))}

                        </div>

                    </div>

                </section>

            )}

            {/* Use cases / who it is for */}
            <section className="bg-slate-50 py-24">

                <div className="mx-auto max-w-7xl px-6">

                    <div className="text-center max-w-3xl mx-auto">

                        <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">
                            USE CASES
                        </span>

                        <h2 className="mt-5 text-4xl font-bold text-slate-900">
                            Who It's Built For
                        </h2>

                    </div>

                    <div className="mt-16 grid gap-6 md:grid-cols-2">

                        {solution.useCases.map((item) => (

                            <div
                                key={item}
                                className="flex items-start gap-4 rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm"
                            >

                                <Users className="mt-1 shrink-0 text-cyan-600" size={22} />

                                <p className="leading-7 text-slate-700">
                                    {item}
                                </p>

                            </div>

                        ))}

                    </div>

                </div>

            </section>

            {/* Benefits */}
            <section className="py-24">

                <div className="mx-auto max-w-7xl px-6">

                    <div className="text-center max-w-3xl mx-auto">

                        <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">
                            WHY {solution.name.toUpperCase()}
                        </span>

                        <h2 className="mt-5 text-4xl font-bold text-slate-900">
                            Key Benefits
                        </h2>

                    </div>

                    <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

                        {solution.benefits.map((benefit) => (

                            <div
                                key={benefit}
                                className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm"
                            >

                                <CheckCircle2 className="text-cyan-600" size={28} />

                                <p className="mt-5 leading-7 text-slate-700">
                                    {benefit}
                                </p>

                            </div>

                        ))}

                    </div>

                </div>

            </section>

            {/* Implementation / process */}
            <section className="bg-slate-50 py-24">

                <div className="mx-auto max-w-7xl px-6">

                    <div className="text-center">

                        <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">
                            HOW IT'S BUILT
                        </span>

                        <h2 className="mt-5 text-4xl font-bold text-slate-900">
                            Implementation Process
                        </h2>

                        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                            From understanding your workflow to launch and
                            ongoing support — one team takes the solution end
                            to end.
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

            {/* Why First Signal Digital */}
            <section className="py-24">

                <div className="mx-auto max-w-7xl px-6">

                    <div className="text-center max-w-3xl mx-auto">

                        <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">
                            WHY FIRST SIGNAL DIGITAL
                        </span>

                        <h2 className="mt-5 text-4xl font-bold text-slate-900">
                            A Local Team That Builds End To End
                        </h2>

                        <p className="mt-6 text-lg leading-8 text-slate-600">
                            We're based in Rohtak, Haryana, and we design, build
                            and support solutions for clients across India.
                        </p>

                    </div>

                    <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

                        <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">

                            <MapPin className="text-cyan-600" size={28} />

                            <h3 className="mt-5 font-bold text-slate-900">
                                Based in Rohtak, Haryana
                            </h3>

                            <p className="mt-3 leading-7 text-slate-600">
                                A local team you can meet in person, with a
                                reach that extends across India.
                            </p>

                        </div>

                        <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">

                            <Layers className="text-cyan-600" size={28} />

                            <h3 className="mt-5 font-bold text-slate-900">
                                Strategy to Execution
                            </h3>

                            <p className="mt-3 leading-7 text-slate-600">
                                Marketing, technology and media under one roof
                                — no handoffs to third parties.
                            </p>

                        </div>

                        <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">

                            <MessageCircle className="text-cyan-600" size={28} />

                            <h3 className="mt-5 font-bold text-slate-900">
                                Direct Communication
                            </h3>

                            <p className="mt-3 leading-7 text-slate-600">
                                Chat or call us directly on WhatsApp or phone.
                                No middlemen, no delays.
                            </p>

                        </div>

                        <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">

                            <BarChart3 className="text-cyan-600" size={28} />

                            <h3 className="mt-5 font-bold text-slate-900">
                                Built Around Your Process
                            </h3>

                            <p className="mt-3 leading-7 text-slate-600">
                                Software designed around your workflow — not a
                                generic product you must adapt to.
                            </p>

                        </div>

                    </div>

                    <div className="mt-14 flex flex-wrap justify-center gap-5">

                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-3 rounded-full bg-blue-700 px-8 py-4 font-semibold text-white transition hover:bg-blue-800"
                        >
                            Get In Touch
                            <ArrowRight size={18} />
                        </Link>

                        <a
                            href="https://wa.me/919817048962"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 rounded-full border border-slate-300 px-8 py-4 font-semibold text-slate-700 transition hover:bg-slate-100"
                        >
                            <MessageCircle size={18} />
                            WhatsApp Us
                        </a>

                    </div>

                </div>

            </section>

            {/* FAQ */}
            {solution.faqs && solution.faqs.length > 0 && (

                <section className="bg-slate-50 py-24">

                    <div className="mx-auto max-w-4xl px-6">

                        <div className="text-center">

                            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">
                                QUESTIONS
                            </span>

                            <h2 className="mt-5 text-4xl font-bold text-slate-900">
                                Common Questions About {solution.name}
                            </h2>

                        </div>

                        <div className="mt-12 space-y-4">

                            {solution.faqs.map((item) => (

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

            )}

            {/* Related solutions */}
            {relatedSolutions.length > 0 && (

                <section className="py-24">

                    <div className="mx-auto max-w-7xl px-6">

                        <div className="text-center">

                            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">
                                EXPLORE MORE
                            </span>

                            <h2 className="mt-5 text-4xl font-bold text-slate-900">
                                Related Solutions
                            </h2>

                        </div>

                        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

                            {relatedSolutions.map((item) => {

                                const RelatedIcon = item.icon;

                                return (

                                    <Link
                                        key={item.slug}
                                        to={`/solutions/${item.slug}`}
                                        className="group rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
                                    >

                                        <RelatedIcon className="text-cyan-600" size={30} />

                                        <h3 className="mt-5 text-lg font-bold text-slate-900">
                                            {item.name}
                                        </h3>

                                        <p className="mt-3 text-sm leading-6 text-slate-600">
                                            {item.short}
                                        </p>

                                        <span className="mt-5 inline-flex items-center gap-2 font-semibold text-blue-700">
                                            Explore {item.name}
                                            <ArrowRight size={16} />
                                        </span>

                                    </Link>

                                );

                            })}

                        </div>

                    </div>

                </section>

            )}

            {/* Related services */}
            {relatedServices.length > 0 && (

                <section className="bg-slate-50 py-24">

                    <div className="mx-auto max-w-7xl px-6">

                        <div className="text-center">

                            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">
                                WE ALSO OFFER
                            </span>

                            <h2 className="mt-5 text-4xl font-bold text-slate-900">
                                Related Services
                            </h2>

                        </div>

                        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

                            {relatedServices.map((item) => {

                                const RelatedIcon = item.icon;

                                return (

                                    <Link
                                        key={item.slug}
                                        to={`/services/${item.slug}`}
                                        className="group rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
                                    >

                                        <RelatedIcon className="text-cyan-600" size={30} />

                                        <h3 className="mt-5 text-lg font-bold text-slate-900">
                                            {item.name}
                                        </h3>

                                        <p className="mt-3 text-sm leading-6 text-slate-600">
                                            {item.short}
                                        </p>

                                        <span className="mt-5 inline-flex items-center gap-2 font-semibold text-blue-700">
                                            Explore {item.name}
                                            <ArrowRight size={16} />
                                        </span>

                                    </Link>

                                );

                            })}

                        </div>

                    </div>

                </section>

            )}

            {/* CTA */}
            <section className="bg-blue-950 py-24 text-white">

                <div className="mx-auto max-w-4xl px-6 text-center">

                    <h2 className="text-4xl font-bold">
                        Ready To Build Your {solution.name}?
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-slate-300">
                        Tell us about your workflow and we will guide you on
                        the best way forward — free consultation, no strings
                        attached.
                    </p>

                    <div className="mt-10 flex flex-wrap justify-center gap-5">
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-3 rounded-full bg-cyan-500 px-8 py-4 font-semibold text-slate-900 transition hover:scale-105"
                        >
                            Get Started
                            <ArrowRight size={18} />
                        </Link>

                        <Link
                            to="/solutions"
                            className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-8 py-4 font-semibold backdrop-blur transition hover:bg-white/10"
                        >
                            View All Solutions
                        </Link>
                    </div>

                </div>

            </section>

        </>
    );
}