import Hero from "../sections/Hero";
import CapabilitiesSection from "../sections/CapabilitiesSection";
import WhyModernConcepts from "../sections/WhyModernConcepts";
import DigitalProductsSection from "../sections/DigitalProductsSection";
import IndustriesSection from "../sections/IndustriesSection";
import RohtakSection from "../sections/RohtakSection";
import MediaStudioSection from "../sections/MediaStudioSection";
import OurNetwork from "../components/OurNetwork";
import FooterCTA from "/src/components/layout/FooterCTA";
import SEO from "/src/components/SEO";
import keywordMap from "/src/data/keywordMap";

export default function Home() {
    const kw = keywordMap["/"];
    return (
        <>
            <SEO
                route="/"
                title={kw.title}
                description={kw.metaDescription}
            />

            <Hero />

            <CapabilitiesSection />

            <WhyModernConcepts />

            <DigitalProductsSection />

            <IndustriesSection />

            <RohtakSection />

            <MediaStudioSection />

            <OurNetwork />

            <FooterCTA/>
        </>
    );
}