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
} from "lucide-react";

import SEO from "/src/components/SEO";
import services from "/src/data/servicesDetail";

export default function ServicePageLayout({ service }) {
    const Icon = service.icon;

    const related = (service.related || [])
        .map((slug) => services[slug])
        .filter(Boolean);

    const breadcrumbs = [
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
        { name: service.name, path: `/services/${service.slug}` },
    ];

    return (
        <>
            <SEO
                route={`/services/${service.slug}`}
                title={service.metaTitle}
                description={service.metaDescription}
                breadcrumbs={breadcrumbs}
                faq={service.faqs || []}
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

                        {/* Breadcrumb */}
                        <nav
                            aria-label="Breadcrumb"
                            className="flex flex-wrap items-center gap-2 text-sm text-slate-300"
                        >
                            <Link to="/" className="transition hover:text-white">
                                Home
                            </Link>
                            <ChevronRight size={14} />
                            <Link to="/services" className="transition hover:text-white">
                                Services
                            </Link>
                            <ChevronRight size={14} />
                            <span className="text-cyan-300" aria-current="page">
                                {service.name}
                            </span>
                        </nav>

                        <div className="mt-8 flex h-16 w-16 items-center justify-center rounded-3xl bg-cyan-500/10 text-cyan-300">
                            <Icon size={30} />
                        </div>

                        <h1 className="mt-8 text-5xl font-bold leading-tight md:text-6xl">
                            {service.h1}
                        </h1>

                        <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300">
                            {service.description}
                        </p>

                        <div className="mt-10 flex flex-wrap gap-5">
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-3 rounded-full bg-cyan-500 px-7 py-4 font-semibold text-slate-900 transition hover:scale-105"
                            >
                                Get Started
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

            {/* What we provide */}
            <section className="bg-slate-50 py-24">

                <div className="mx-auto max-w-7xl px-6">

                    <div className="grid gap-14 lg:grid-cols-2 lg:items-center">

                        <div>

                            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">
                                WHAT WE PROVIDE
                            </span>

                            <h2 className="mt-5 text-4xl font-bold text-slate-900">
                                {service.name} Delivered End To End
                            </h2>

                            <p className="mt-6 text-lg leading-8 text-slate-600">
                                We handle everything from strategy to execution,
                                with the same quality standards and reporting
                                you expect from First Signal Digital.
                            </p>

                            <Link
                                to="/contact"
                                className="mt-8 inline-flex items-center gap-3 rounded-full bg-blue-700 px-7 py-4 font-semibold text-white transition hover:bg-blue-800"
                            >
                                Discuss Your Project
                                <ArrowRight size={18} />
                            </Link>

                        </div>

                        <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-xl">

                            <h3 className="text-xl font-semibold text-slate-900">
                                Included In This Service
                            </h3>

                            <div className="mt-6 space-y-4">

                                {service.offerings.map((item) => (

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

            {/* Problems this service solves */}
            {service.problems && service.problems.length > 0 && (

                <section className="py-24">

                    <div className="mx-auto max-w-7xl px-6">

                        <div className="text-center max-w-3xl mx-auto">

                            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">
                                COMMON CHALLENGES
                            </span>

                            <h2 className="mt-5 text-4xl font-bold text-slate-900">
                                Problems {service.name} Helps You Solve
                            </h2>

                            <p className="mt-6 text-lg leading-8 text-slate-600">
                                We start by fixing what's holding your business
                                back, so the growth you want comes from a
                                stronger foundation.
                            </p>

                        </div>

                        <div className="mt-16 grid gap-6 md:grid-cols-3">

                            {service.problems.map((problem) => (

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

            {/* Benefits */}
            <section className="py-24">

                <div className="mx-auto max-w-7xl px-6">

                    <div className="text-center max-w-3xl mx-auto">

                        <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">
                            WHY {service.name}
                        </span>

                        <h2 className="mt-5 text-4xl font-bold text-slate-900">
                            Key Benefits
                        </h2>

                    </div>

                    <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

                        {service.benefits.map((benefit) => (

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

            {/* Process */}
            <section className="py-24">

                <div className="mx-auto max-w-7xl px-6">

                    <div className="text-center">

                        <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">
                            HOW WE WORK
                        </span>

                        <h2 className="mt-5 text-4xl font-bold text-slate-900">
                            Our Delivery Process
                        </h2>

                    </div>

                    <div className="mt-16 grid gap-6 md:grid-cols-3 lg:grid-cols-5">

                        {service.process.map((step, index) => (

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

            {/* Who this is for */}
            <section className="bg-slate-50 py-24">

                <div className="mx-auto max-w-7xl px-6">

                    <div className="grid gap-14 lg:grid-cols-2 lg:items-center">

                        <div>

                            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">
                                WHO IT'S FOR
                            </span>

                            <h2 className="mt-5 text-4xl font-bold text-slate-900">
                                This Service Is Built For
                            </h2>

                            <p className="mt-6 text-lg leading-8 text-slate-600">
                                {service.name} works best for businesses that
                                want practical results and a team that
                                communicates directly.
                            </p>

                            <Link
                                to="/contact"
                                className="mt-8 inline-flex items-center gap-3 rounded-full bg-blue-700 px-7 py-4 font-semibold text-white transition hover:bg-blue-800"
                            >
                                Talk To Our Team
                                <ArrowRight size={18} />
                            </Link>

                        </div>

                        <div className="space-y-5">

                            {service.audience.map((item) => (

                                <div
                                    key={item}
                                    className="flex items-start gap-4 rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm"
                                >

                                    <CheckCircle2 className="mt-1 shrink-0 text-cyan-600" size={22} />

                                    <p className="leading-7 text-slate-700">
                                        {item}
                                    </p>

                                </div>

                            ))}

                        </div>

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
                            A Local Team, End To End
                        </h2>

                        <p className="mt-6 text-lg leading-8 text-slate-600">
                            We're based in Rohtak, Haryana, and we deliver
                            services for clients across India.
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
                                Transparent Reporting
                            </h3>

                            <p className="mt-3 leading-7 text-slate-600">
                                Clear reports tied to enquiries, calls and
                                business outcomes.
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

            {/* Technologies */}
            {service.technologies && service.technologies.length > 0 && (

                <section className="bg-slate-50 py-24">

                    <div className="mx-auto max-w-7xl px-6 text-center">

                        <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">
                            WHAT WE USE
                        </span>

                        <h2 className="mt-5 text-4xl font-bold text-slate-900">
                            Technologies & Tools
                        </h2>

                        <div className="mt-12 flex flex-wrap justify-center gap-4">

                            {service.technologies.map((tech) => (

                                <span
                                    key={tech}
                                    className="rounded-full border border-slate-300 bg-white px-6 py-3 font-medium shadow-sm"
                                >
                                    {tech}
                                </span>

                            ))}

                        </div>

                    </div>

                </section>

            )}

            {/* FAQ */}
            {service.faqs && service.faqs.length > 0 && (

                <section className="py-24">

                    <div className="mx-auto max-w-4xl px-6">

                        <div className="text-center">

                            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">
                                QUESTIONS
                            </span>

                            <h2 className="mt-5 text-4xl font-bold text-slate-900">
                                Common Questions
                            </h2>

                        </div>

                        <div className="mt-12 space-y-4">

                            {service.faqs.map((item) => (

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

            {/* Related services */}
            {related.length > 0 && (

                <section className="bg-slate-50 py-24">

                    <div className="mx-auto max-w-7xl px-6">

                        <div className="text-center">

                            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">
                                EXPLORE MORE
                            </span>

                            <h2 className="mt-5 text-4xl font-bold text-slate-900">
                                Related Services
                            </h2>

                        </div>

                        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

                            {related.map((item) => {

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
                        Ready To Get Started?
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-slate-300">
                        Tell us about your project and we will guide you on
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
                            to="/services"
                            className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-8 py-4 font-semibold backdrop-blur transition hover:bg-white/10"
                        >
                            View All Services
                        </Link>
                    </div>

                </div>

            </section>

        </>
    );
}