import { useState, useEffect, useRef } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import navLinks from "/src/data/navLinks";
import servicesMenu from "/src/data/servicesMenu";
import solutionsMenu from "/src/data/solutionsMenu";

const offerMenus = {
    "/services": {
        label: "Services",
        data: servicesMenu,
        menuId: "services-mega-menu",
        mobileId: "mobile-services-menu",
    },
    "/solutions": {
        label: "Solutions",
        data: solutionsMenu,
        menuId: "solutions-mega-menu",
        mobileId: "mobile-solutions-menu",
    },
};

function MenuPanel({ menu, onNavigate }) {
    return (
        <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-xl">
            <div className="grid gap-8 sm:grid-cols-3">
                {menu.categories.map((category) => {
                    const Icon = category.icon;
                    const items = category.services ?? category.solutions ?? [];

                    return (
                        <div key={category.title}>
                            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-blue-700">
                                <Icon size={16} />
                                {category.title}
                            </p>

                            <ul className="mt-5 space-y-3">
                                {items.map((item) => (
                                    <li key={item.label}>
                                        <Link
                                            to={item.url}
                                            onClick={onNavigate}
                                            className="text-slate-700 transition hover:text-blue-700"
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    );
                })}
            </div>

            <div className="mt-8 flex justify-end border-t border-slate-100 pt-6">
                <Link
                    to={menu.viewAll.url}
                    onClick={onNavigate}
                    className="inline-flex items-center gap-2 rounded-full bg-blue-700 px-6 py-3 font-semibold text-white transition hover:bg-blue-800"
                >
                    {menu.viewAll.label}
                    <ArrowRight size={18} />
                </Link>
            </div>
        </div>
    );
}

function MobileMenuPanel({ menu, onNavigate }) {
    return (
        <div className="mt-4 space-y-6 border-l-2 border-cyan-100 pl-4">
            {menu.categories.map((category) => {
                const items = category.services ?? category.solutions ?? [];

                return (
                <div key={category.title}>
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-700">
                        {category.title}
                    </p>

                    <ul className="mt-3 space-y-1">
                        {items.map((item) => (
                            <li key={item.label}>
                                <Link
                                    to={item.url}
                                    onClick={onNavigate}
                                    className="block py-1.5 text-base font-medium text-slate-600 transition hover:text-blue-700"
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                );
            })}

            <Link
                to={menu.viewAll.url}
                onClick={onNavigate}
                className="inline-flex items-center gap-2 rounded-full bg-blue-700 px-6 py-3 font-semibold text-white transition"
            >
                {menu.viewAll.label}
                <ArrowRight size={18} />
            </Link>
        </div>
    );
}

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [openMenu, setOpenMenu] = useState(null);
    const [mobileOpenMenu, setMobileOpenMenu] = useState(null);

    const desktopNavRef = useRef(null);
    const location = useLocation();

    // Close menus on navigation
    useEffect(() => {
        setOpenMenu(null);
        setMobileOpen(false);
        setMobileOpenMenu(null);
    }, [location.pathname, location.hash]);

    // Close mega menu on outside click / Escape
    useEffect(() => {
        if (!openMenu) {
            return;
        }

        const handlePointerDown = (event) => {
            if (
                desktopNavRef.current &&
                !desktopNavRef.current.contains(event.target)
            ) {
                setOpenMenu(null);
            }
        };

        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                setOpenMenu(null);
            }
        };

        document.addEventListener("mousedown", handlePointerDown);
        document.addEventListener("touchstart", handlePointerDown);
        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("mousedown", handlePointerDown);
            document.removeEventListener("touchstart", handlePointerDown);
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [openMenu]);

    const toggleMenu = (path) => {
        setOpenMenu((current) => (current === path ? null : path));
    };

    return (
        <>
            <header className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur shadow-md">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}

                        <NavLink to="/" className="flex items-center gap-3">

                            <img src="/logo.jpeg" alt="First Signal Digital logo" width="48" height="48" className="h-12 w-12 rounded-lg object-contain" />

                            <div>

                                <p className="font-bold text-xl text-slate-900 leading-none">
                                    First Signal Digital
                                </p>

                                <p className="text-xs text-slate-500">
                                    Digital Transformation & Media Solutions
                                </p>

                            </div>

                        </NavLink>

                        {/* Desktop */}

                        <nav
                            ref={desktopNavRef}
                            className="hidden lg:flex items-center gap-8"
                        >

                            {navLinks.map((item) =>
                                offerMenus[item.path] ? (
                                    <div
                                        key={item.path}
                                        className="relative"
                                    >
                                        <button
                                            type="button"
                                            onClick={() => toggleMenu(item.path)}
                                            aria-expanded={openMenu === item.path}
                                            aria-haspopup="true"
                                            aria-controls={offerMenus[item.path].menuId}
                                            className={`flex items-center gap-1 font-medium transition ${
                                                (location.pathname === item.path ||
                                                    location.pathname.startsWith(`${item.path}/`)) ||
                                                openMenu === item.path
                                                    ? "text-blue-700"
                                                    : "text-slate-700 hover:text-blue-700"
                                            }`}
                                        >
                                            {item.title}
                                            <ChevronDown
                                                size={16}
                                                className={`transition-transform ${openMenu === item.path ? "rotate-180" : ""}`}
                                            />
                                        </button>

                                        <AnimatePresence>
                                            {openMenu === item.path && (
                                                <motion.div
                                                    id={offerMenus[item.path].menuId}
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: 10 }}
                                                    transition={{ duration: 0.18 }}
                                                    className="absolute left-1/2 top-full mt-3 w-[min(760px,calc(100vw-4rem))] -translate-x-1/2"
                                                >
                                                    <MenuPanel
                                                        menu={offerMenus[item.path].data}
                                                        onNavigate={() => setOpenMenu(null)}
                                                    />
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ) : (
                                    <NavLink
                                        key={item.path}
                                        to={item.path}
                                        onClick={() => setOpenMenu(null)}
                                        className={({ isActive }) =>
                                            `font-medium transition ${
                                                isActive
                                                    ? "text-blue-700"
                                                    : "text-slate-700 hover:text-blue-700"
                                            }`
                                        }
                                    >
                                        {item.title}
                                    </NavLink>
                                )
                            )}

                        </nav>

                        {/* CTA */}

                        <div className="hidden lg:block">

                            <Link to="/contact" className="rounded-full bg-blue-700 hover:bg-blue-800 px-6 py-3 text-white font-semibold transition">

                                Book Consultation

                            </Link>

                        </div>

                        {/* Mobile */}

                        <button
                            className="lg:hidden"
                            onClick={() => setMobileOpen(true)}
                            aria-label="Open menu"
                        >
                            <Menu size={30} />
                        </button>

                    </div>
                </div>
            </header>

            <AnimatePresence>

                {mobileOpen && (

                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ duration: .30 }}
                        className="fixed inset-0 bg-white z-50"
                    >

                        <div className="flex justify-between items-center px-6 h-20 border-b">

                            <p className="font-bold text-xl">
                                First Signal Digital
                            </p>

                            <button
                                onClick={() => setMobileOpen(false)}
                                aria-label="Close menu"
                            >
                                <X size={30} />
                            </button>

                        </div>

                        <div className="flex flex-col p-8 gap-6 overflow-y-auto max-h-full">

                            {navLinks.map((item) =>
                                offerMenus[item.path] ? (
                                    <div key={item.path}>
                                        <button
                                            type="button"
                                            onClick={() =>
                                                setMobileOpenMenu((current) =>
                                                    current === item.path
                                                        ? null
                                                        : item.path
                                                )
                                            }
                                            aria-expanded={mobileOpenMenu === item.path}
                                            aria-controls={offerMenus[item.path].mobileId}
                                            className="flex w-full items-center justify-between text-xl font-semibold text-slate-800"
                                        >
                                            {item.title}
                                            <ChevronDown
                                                size={22}
                                                className={`transition-transform ${mobileOpenMenu === item.path ? "rotate-180" : ""}`}
                                            />
                                        </button>

                                        <AnimatePresence>
                                            {mobileOpenMenu === item.path && (
                                                <motion.div
                                                    id={offerMenus[item.path].mobileId}
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.25 }}
                                                    className="overflow-hidden"
                                                >
                                                    <MobileMenuPanel
                                                        menu={offerMenus[item.path].data}
                                                        onNavigate={() => setMobileOpen(false)}
                                                    />
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ) : (
                                    <NavLink
                                        key={item.path}
                                        to={item.path}
                                        onClick={() => setMobileOpen(false)}
                                        className={({ isActive }) =>
                                            `text-xl font-semibold ${
                                                isActive
                                                    ? "text-blue-700"
                                                    : "text-slate-800"
                                            }`
                                        }
                                    >
                                        {item.title}
                                    </NavLink>
                                )
                            )}

                            <Link to="/contact" onClick={() => setMobileOpen(false)} className="mt-4 block bg-blue-700 text-white rounded-full py-4 text-center font-semibold">

                                Book Consultation

                            </Link>

                        </div>

                    </motion.div>

                )}

            </AnimatePresence>

        </>
    );
}