import { useEffect, lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "/src/components/layout/Navbar";
import Footer from "/src/components/layout/Footer";
import FloatingSocials from "/src/components/common/FloatingSocials";
import SiteSchema from "/src/components/SiteSchema";

import Home from "./pages/Home";
import Contact from "./pages/Contact";

const NotFound = lazy(() => import("./pages/NotFound"));
const About = lazy(() => import("/src/pages/About"));
const Services = lazy(() => import("/src/pages/Services"));
const Solutions = lazy(() => import("/src/pages/Solutions"));
const Marketing = lazy(() => import("/src/pages/Marketing"));
const Studio = lazy(() => import("/src/pages/Studio"));
const BusinessSnapshot = lazy(() => import("./pages/BusinessSnapshot"));

const ServiceSEO = lazy(() => import("./pages/services/SEO"));
const ServiceGoogleAds = lazy(() => import("./pages/services/GoogleAds"));
const ServiceSocialMediaMarketing = lazy(() => import("./pages/services/SocialMediaMarketing"));
const ServiceLeadGeneration = lazy(() => import("./pages/services/LeadGeneration"));
const ServiceBranding = lazy(() => import("./pages/services/Branding"));
const ServiceWebsiteDevelopment = lazy(() => import("./pages/services/WebsiteDevelopment"));
const ServiceSoftwareDevelopment = lazy(() => import("./pages/services/SoftwareDevelopment"));
const ServiceMobileAppDevelopment = lazy(() => import("./pages/services/MobileAppDevelopment"));
const ServiceAISolutions = lazy(() => import("./pages/services/AISolutions"));
const ServiceMediaProduction = lazy(() => import("./pages/services/MediaProduction"));
const ServiceCloudSolutions = lazy(() => import("./pages/services/CloudSolutions"));
const ServiceDatabaseSolutions = lazy(() => import("./pages/services/DatabaseSolutions"));
const ServiceCyberSecurity = lazy(() => import("./pages/services/CyberSecurity"));
const ServiceDigitalTransformation = lazy(() => import("./pages/services/DigitalTransformation"));

const PrivacyPolicy = lazy(() => import("/src/pages/PrivacyPolicy"));
const Terms = lazy(() => import("/src/pages/Terms"));

const SolutionCRM = lazy(() => import("./pages/solutions/CRMSolutions"));
const SolutionERP = lazy(() => import("./pages/solutions/ERPSolutions"));
const SolutionHRMS = lazy(() => import("./pages/solutions/HRMSSolutions"));
const SolutionDashboards = lazy(() => import("./pages/solutions/DashboardSolutions"));
const SolutionEducation = lazy(() => import("./pages/solutions/EducationManagementSolutions"));
const SolutionHospital = lazy(() => import("./pages/solutions/HospitalManagementSolutions"));
const SolutionAppointment = lazy(() => import("./pages/solutions/AppointmentBookingSolutions"));
const SolutionInventory = lazy(() => import("./pages/solutions/InventoryManagementSolutions"));
const SolutionBillingAndPos = lazy(() => import("./pages/solutions/BillingAndPosSolutions"));
const SolutionCompliance = lazy(() => import("./pages/solutions/BusinessComplianceSolutions"));

function RouteFallback() {
    return (
        <div className="flex min-h-[60vh] items-center justify-center bg-white">
            <div className="flex items-center gap-3 text-slate-500">
                <span className="h-6 w-6 animate-spin rounded-full border-2 border-slate-200 border-t-blue-700" />
                <span className="font-medium">Loading…</span>
            </div>
        </div>
    );
}

function ScrollToTopAndHash() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const id = hash.slice(1);
            const el = document.getElementById(id);

            if (el) {
                const timer = setTimeout(() => {
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                }, 100);

                return () => clearTimeout(timer);
            }
        }

        window.scrollTo(0, 0);
    }, [pathname, hash]);

    return null;
}

export default function App() {
    return (
        <>
            <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-blue-700 focus:px-5 focus:py-3 focus:font-semibold focus:text-white"
            >
                Skip to content
            </a>

            <ScrollToTopAndHash />

            <SiteSchema />

            <Navbar />

            <FloatingSocials />

            <main id="main-content">
                <Suspense fallback={<RouteFallback />}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/snapshot" element={<BusinessSnapshot />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/solutions" element={<Solutions />} />
                        <Route path="/solutions/crm" element={<SolutionCRM />} />
                        <Route path="/solutions/erp" element={<SolutionERP />} />
                        <Route path="/solutions/hrms" element={<SolutionHRMS />} />
                        <Route path="/solutions/dashboards" element={<SolutionDashboards />} />
                        <Route path="/solutions/education-management" element={<SolutionEducation />} />
                        <Route path="/solutions/hospital-management" element={<SolutionHospital />} />
                        <Route path="/solutions/appointment-booking" element={<SolutionAppointment />} />
                        <Route path="/solutions/inventory-management" element={<SolutionInventory />} />
                        <Route path="/solutions/billing-and-pos" element={<SolutionBillingAndPos />} />
                        <Route path="/solutions/business-compliance" element={<SolutionCompliance />} />
                        <Route path="/marketing" element={<Marketing />} />
                        <Route path="/studio" element={<Studio />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/services/seo" element={<ServiceSEO />} />
                        <Route path="/services/google-ads" element={<ServiceGoogleAds />} />
                        <Route path="/services/social-media-marketing" element={<ServiceSocialMediaMarketing />} />
                        <Route path="/services/lead-generation" element={<ServiceLeadGeneration />} />
                        <Route path="/services/branding" element={<ServiceBranding />} />
                        <Route path="/services/website-development" element={<ServiceWebsiteDevelopment />} />
                        <Route path="/services/software-development" element={<ServiceSoftwareDevelopment />} />
                        <Route path="/services/mobile-app-development" element={<ServiceMobileAppDevelopment />} />
                        <Route path="/services/ai-solutions" element={<ServiceAISolutions />} />
                        <Route path="/services/media-production" element={<ServiceMediaProduction />} />
                        <Route path="/services/cloud-solutions" element={<ServiceCloudSolutions />} />
                        <Route path="/services/database-solutions" element={<ServiceDatabaseSolutions />} />
                        <Route path="/services/cyber-security" element={<ServiceCyberSecurity />} />
                        <Route path="/services/digital-transformation" element={<ServiceDigitalTransformation />} />
                        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                        <Route path="/terms" element={<Terms />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Suspense>
            </main>

            <Footer />
        </>
    );
}