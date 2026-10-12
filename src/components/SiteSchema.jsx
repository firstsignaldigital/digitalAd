import { Helmet } from "react-helmet-async";

import {
    SITE_URL,
    SITE_NAME,
    organization,
    parentOrganization,
    areaServed,
    socialProfiles,
} from "../data/siteData";

const organizationId = `${SITE_URL}/#organization`;
const websiteId = `${SITE_URL}/#website`;
const logo = `${SITE_URL}/logo.jpeg`;

const profiles = socialProfiles.firstSignalDigital.map((profile) => profile.url);

const jsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": ["Organization", "ProfessionalService"],
            "@id": organizationId,
            name: SITE_NAME,
            url: SITE_URL,
            logo,
            image: logo,
            description:
                "First Signal Digital delivers AI, enterprise software, websites, mobile apps, digital marketing and media production for growing businesses in India.",
            telephone: organization.phoneInternational,
            email: organization.email,
            address: {
                "@type": "PostalAddress",
                streetAddress: organization.address.street,
                addressLocality: organization.address.locality,
                addressRegion: organization.address.region,
                postalCode: organization.address.postalCode,
                addressCountry: organization.address.country,
            },
            contactPoint: {
                "@type": "ContactPoint",
                telephone: organization.phoneInternational,
                email: organization.email,
                contactType: "customer service",
                availableLanguage: ["English", "Hindi"],
            },
            openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                ],
                opens: "09:30",
                closes: "18:30",
            },
            areaServed,
            // Only official profile URLs for THIS entity belong in sameAs.
            sameAs: profiles,
            // Connects this division to the parent company entity so the whole
            // group resolves as one network.
            parentOrganization: { "@id": parentOrganization.id },
            ...(organization.geo ? { geo: organization.geo } : {}),
        },
        {
            "@type": "WebSite",
            "@id": websiteId,
            url: SITE_URL,
            name: SITE_NAME,
            publisher: { "@id": organizationId },
            inLanguage: "en-IN",
        },
    ],
});

export default function SiteSchema() {
    return (
        <Helmet>
            <script type="application/ld+json">
                {jsonLd}
            </script>
        </Helmet>
    );
}
