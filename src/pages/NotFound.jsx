import { motion } from "framer-motion";
import {
    Compass,
    ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

import SEO from "/src/components/SEO";

export default function NotFound() {
    return (
        <>
            <SEO
                route="/404"
                title="Page Not Found | First Signal Digital"
                description="The page you were looking for could not be found. Explore our services or contact First Signal Digital for help."
                robots="noindex, follow"
            />

            <section className="bg-linear-to-br from-blue-950 via-blue-900 to-blue-800 pt-40 pb-28 text-white">

                <div className="mx-auto max-w-4xl px-6 text-center">

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >

                        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-3xl bg-cyan-500/15 text-cyan-300">

                            <Compass size={46} />

                        </div>

                        <p className="mt-10 text-6xl font-black text-cyan-300 md:text-8xl">
                            404
                        </p>

                        <h1 className="mt-6 text-4xl font-bold md:text-5xl">
                            Page Not Found
                        </h1>

                        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                            The page you are looking for doesn't exist or has
                            moved. Let's get you back on track.
                        </p>

                        <div className="mt-12 flex flex-wrap justify-center gap-5">

                            <Link
                                to="/"
                                className="inline-flex items-center gap-3 rounded-full bg-cyan-500 px-8 py-4 font-semibold text-slate-900 transition hover:scale-105"
                            >
                                Back to Home
                                <ArrowRight size={18} />
                            </Link>

                            <Link
                                to="/services"
                                className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-8 py-4 font-semibold backdrop-blur transition hover:bg-white/10"
                            >
                                Explore Services
                            </Link>

                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-8 py-4 font-semibold backdrop-blur transition hover:bg-white/10"
                            >
                                Contact Us
                            </Link>

                        </div>

                    </motion.div>

                </div>

            </section>
        </>
    );
}