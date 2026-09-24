import { Link } from "react-router-dom";
import {
    MapPin,
    Phone,
    Mail,
    ChevronRight,
} from "lucide-react";

import SocialLinks from "../common/SocialLinks";

const quickLinks = [
    { title: "Home", url: "/" },
    { title: "About Us", url: "/about" },
    { title: "Capabilities", url: "/services" },
    { title: "Platforms", url: "/solutions" },
    { title: "Media Studio", url: "/studio" },
    { title: "Industries", url: "/" },
    { title: "Contact", url: "/contact" },
];

const capabilities = [
    { label: "Artificial Intelligence", url: "/services/ai-solutions" },
    { label: "Software Development", url: "/services/software-development" },
    { label: "Web Development", url: "/services/website-development" },
    { label: "Mobile Applications", url: "/services/mobile-app-development" },
    { label: "Digital Marketing", url: "/marketing" },
    { label: "Media Production", url: "/services/media-production" },
];

const platforms = [
    { label: "Attendance SaaS", url: "/solutions/hrms" },
    { label: "CRM Solutions", url: "/solutions/crm" },
    { label: "HRMS", url: "/solutions/hrms" },
    { label: "Custom ERP", url: "/solutions/erp" },
    { label: "Business Automation", url: "/solutions" },
    { label: "AI Assistants", url: "/services/ai-solutions" },
];

export default function Footer() {
    return (
        <footer className="bg-blue-950 text-slate-300">

            {/* Main Footer */}

            <div className="mx-auto max-w-7xl px-6 py-20">

                <div className="grid gap-14 lg:grid-cols-12">

                    {/* ====================================================== */}
                    {/* Company */}
                    {/* ====================================================== */}

                    <div className="lg:col-span-4">

                        <Link
                            to="/"
                            className="inline-flex items-center gap-3"
                        >

                            {/* Replace with your SVG logo */}

                            <img src="/logo.jpeg" alt="First Signal Digital logo" width="56" height="56" className="h-14 w-14 rounded-2xl object-contain" />

                            <div>

                                <h2 className="text-2xl font-bold text-white">

                                    First Signal Digital

                                </h2>

                                <p className="text-sm text-cyan-300">

                                    Digital Marketing, Technology &amp;
                                    Media Services

                                </p>

                            </div>

                        </Link>

                        <p className="mt-8 max-w-md leading-8">

                            We help businesses accelerate growth through
                            Artificial Intelligence, enterprise software,
                            SaaS platforms, mobile applications, creative
                            media, branding and digital marketing.

                        </p>

                        <a
                            href="https://maps.app.goo.gl/omJBEWd6Qf1aykSq7"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-8 inline-flex items-center gap-3 text-sm font-semibold text-cyan-300 transition hover:text-cyan-200"
                        >

                            <MapPin size={18} />

                            Rohtak, Haryana 124001

                        </a>

                        <div className="mt-10">

                            <SocialLinks
                                size="sm"
                            />

                        </div>

                    </div>

                    {/* ====================================================== */}
                    {/* Quick Links */}
                    {/* ====================================================== */}

                    <div className="lg:col-span-2">

                        <h3 className="text-lg font-semibold text-white">

                            Company

                        </h3>

                        <ul className="mt-8 space-y-4">

                            {quickLinks.map((item) => (

                                <li key={item.title}>

                                    <Link
                                        to={item.url}
                                        className="group flex items-center gap-2 transition hover:text-white"
                                    >

                                        <ChevronRight
                                            size={16}
                                            className="transition group-hover:translate-x-1"
                                        />

                                        {item.title}

                                    </Link>

                                </li>

                            ))}

                        </ul>

                    </div>

                    {/* ====================================================== */}
                    {/* Capabilities */}
                    {/* ====================================================== */}

                    <div className="lg:col-span-3">

                        <h3 className="text-lg font-semibold text-white">

                            Core Capabilities

                        </h3>

                        <ul className="mt-8 space-y-4">

                            {capabilities.map((item) => (
                                typeof item === "string" ? (
                                    <li
                                        key={item}
                                        className="flex items-center gap-2"
                                    >
                                        <ChevronRight
                                            size={16}
                                            className="text-cyan-400"
                                        />
                                        {item}
                                    </li>
                                ) : (
                                    <li key={item.label}>
                                        <Link
                                            to={item.url}
                                            className="group flex items-center gap-2 transition hover:text-white"
                                        >
                                            <ChevronRight
                                                size={16}
                                                className="text-cyan-400"
                                            />
                                            {item.label}
                                        </Link>
                                    </li>
                                )
                            ))}

                        </ul>

                    </div>

                    {/* ====================================================== */}
                    {/* Products */}
                    {/* ====================================================== */}

                    <div className="lg:col-span-3">

                        <h3 className="text-lg font-semibold text-white">

                            SaaS Platforms

                        </h3>

                        <ul className="mt-8 space-y-4">

                            {platforms.map((item) => (

                                <li
                                    key={item.label}
                                >

                                    <Link
                                        to={item.url}
                                        className="group flex items-center gap-2 transition hover:text-white"
                                    >

                                        <ChevronRight
                                            size={16}
                                            className="text-cyan-400"
                                        />

                                        {item.label}

                                    </Link>

                                </li>

                            ))}

                        </ul>

                    </div>

                </div>

                {/* Divider */}

                <div className="my-16 h-px bg-white/10" />

                {/* Contact Strip */}

                <div className="grid gap-8 md:grid-cols-3">

                    <a
                        href="https://maps.app.goo.gl/omJBEWd6Qf1aykSq7"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-start gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-cyan-500/40 hover:bg-white/10"
                    >

                        <div className="rounded-2xl bg-cyan-500/10 p-3">

                            <MapPin
                                className="text-cyan-400"
                                size={22}
                            />

                        </div>

                        <div>

                            <h4 className="font-semibold text-white">

                                Visit Our Office

                            </h4>

                            <p className="mt-2 text-sm leading-7">

                                First Signal Digital

                                <br />

                                Old ITI, Plot No.110

                                <br />

                                Jagdish Colony

                                <br />

                                Rohtak, Haryana 124001

                            </p>

                        </div>

                    </a>

                    <a
                        href="tel:+919817048962"
                        className="group flex items-center gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-cyan-500/40 hover:bg-white/10"
                    >

                        <div className="rounded-2xl bg-cyan-500/10 p-3">

                            <Phone
                                className="text-cyan-400"
                                size={22}
                            />

                        </div>

                        <div>

                            <h4 className="font-semibold text-white">

                                Call Us

                            </h4>

                            <p className="mt-2">

                                +91 98170 48962

                            </p>

                        </div>

                    </a>

                    <a
                        href="mailto:info@admedianetwork.in"
                        className="group flex items-center gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-cyan-500/40 hover:bg-white/10"
                    >

                        <div className="rounded-2xl bg-cyan-500/10 p-3">

                            <Mail
                                className="text-cyan-400"
                                size={22}
                            />

                        </div>

                        <div>

                            <h4 className="font-semibold text-white">

                                Email Us

                            </h4>

                            <p className="mt-2">

                                info@admedianetwork.in

                            </p>

                        </div>

                    </a>

                </div>


                {/* ====================================================== */}
                {/* Bottom Footer */}
                {/* ====================================================== */}

                <div className="mt-16 border-t border-white/10 pt-8">

                    <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

                        {/* Copyright */}

                        <div>

                            <p className="text-sm text-slate-400">

                                © {new Date().getFullYear()} First Signal Digital.
                                All rights reserved.

                            </p>

                            <p className="mt-2 text-sm text-slate-500">

                                Digital Transformation & Media Solutions
                                crafted with technology and creativity in India.

                            </p>

                        </div>


                        {/* Legal */}

                        <div className="flex flex-wrap gap-6 text-sm">

                            <Link
                                to="/privacy-policy"
                                className="transition hover:text-white"
                            >

                                Privacy Policy

                            </Link>


                            <Link
                                to="/terms"
                                className="transition hover:text-white"
                            >

                                Terms & Conditions

                            </Link>


                            <Link
                                to="/contact"
                                className="transition hover:text-white"
                            >

                                Contact

                            </Link>

                        </div>

                    </div>

                </div>


            </div>


            {/* ========================================================== */}
            {/* Floating Back To Top */}
            {/* ========================================================== */}

            <button

                onClick={() =>
                    window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                    })
                }

                aria-label="Back to top"

                className="
                    fixed
                    bottom-6
                    right-6
                    z-50
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    bg-cyan-500
                    text-slate-900
                    shadow-xl
                    transition
                    hover:-translate-y-1
                    hover:bg-cyan-400
                "

            >

                ↑

            </button>


        </footer>
    );
}