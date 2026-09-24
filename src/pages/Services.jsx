import { motion } from "framer-motion";
import {
    ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

import SEO from "/src/components/SEO";
import { serviceList, deliveryProcess } from "/src/data/servicesDetail";
import keywordMap from "/src/data/keywordMap";

export default function Services() {
    const kw = keywordMap["/services"];
    return (
        <>
            <SEO
                route="/services"
                title={kw.title}
                description={kw.metaDescription}
            />

            {/* Hero */}
            <section className="bg-linear-to-br from-blue-950 via-blue-900 to-blue-800 pt-24 pb-16 md:pt-28 md:pb-20 lg:pt-36 lg:pb-24 text-white">
                <div className="mx-auto max-w-7xl px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl"
                    >
                        <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
                            OUR CAPABILITIES
                        </span>

                        <h1 className="mt-8 text-5xl font-bold md:text-6xl">
                            Digital Marketing
                            <span className="block text-cyan-300">
                                Services
                            </span>
                            in Rohtak.
                        </h1>

                        <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300">
                            First Signal Digital is a Rohtak-based agency
                            combining digital marketing services, AI, software
                            engineering, media production and creative design —
                            one team that helps organisations accelerate digital
                            transformation.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* All services */}
            <section className="py-24">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="text-center max-w-3xl mx-auto">
                        <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">
                            EXPLORE OUR SERVICES
                        </span>

                        <h2 className="mt-5 text-4xl font-bold text-slate-900">
                            Every Service Your Business Needs
                        </h2>

                        <p className="mt-6 text-lg leading-8 text-slate-600">
                            Choose a service to learn how we can help you
                            grow, automate and stand out.
                        </p>
                    </div>

                    <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {serviceList.map((service, index) => {
                            const Icon = service.icon;

                            return (
                                <motion.div
                                    key={service.slug}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: (index % 4) * 0.06 }}
                                >
                                    <Link
                                        to={`/services/${service.slug}`}
                                        className="group block h-full rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
                                    >
                                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-100">
                                            <Icon className="text-cyan-700" size={26} />
                                        </div>

                                        <h3 className="mt-6 text-lg font-bold text-slate-900">
                                            {service.name}
                                        </h3>

                                        <p className="mt-3 text-sm leading-6 text-slate-600">
                                            {service.short}
                                        </p>

                                        <span className="mt-5 inline-flex items-center gap-2 font-semibold text-blue-700 transition group-hover:gap-3">
                                            Explore {service.name}
                                            <ArrowRight size={16} />
                                        </span>
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="bg-slate-50 py-24">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="text-center">
                        <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">
                            OUR PROCESS
                        </span>

                        <h2 className="mt-5 text-4xl font-bold text-slate-900">
                            From Strategy to Success
                        </h2>
                    </div>

                    <div className="mt-16 grid gap-6 md:grid-cols-5">
                        {deliveryProcess.map((step, index) => (
                            <div
                                key={step}
                                className="rounded-[28px] bg-white p-8 text-center shadow-md"
                            >
                                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-cyan-600 font-bold text-white">
                                    {index + 1}
                                </div>

                                <h3 className="mt-5 font-semibold">
                                    {step}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-blue-950 py-24 text-white">
                <div className="mx-auto max-w-4xl px-6 text-center">
                    <h2 className="text-4xl font-bold">
                        Let's Build the Right Digital Solution for Your Business
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-slate-300">
                        Every business is unique. We create tailored technology,
                        media and marketing solutions aligned with your goals.
                    </p>

                    <div className="mt-10 flex flex-wrap justify-center gap-5">
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-3 rounded-full bg-cyan-500 px-8 py-4 font-semibold text-slate-900 transition hover:scale-105"
                        >
                            Start Your Project
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}