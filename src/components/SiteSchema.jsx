import { Helmet } from "react-helmet-async";

const SITE_URL = "https://www.firstsignaldigital.com";

const siteName = "First Signal Digital";

const businessJsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteName,
    url: SITE_URL,
    telephone: "+919817048962",
    email: "info@admedianetwork.in",
    logo: `${SITE_URL}/logo.jpeg`,
    image: `${SITE_URL}/logo.jpeg`,
    address: {
        "@type": "PostalAddress",
        streetAddress: "Old ITI, Plot No. 110, Jagdish Colony",
        addressLocality: "Rohtak",
        addressRegion: "Haryana",
        postalCode: "124001",
        addressCountry: "IN",
    },
    areaServed: [
        { "@type": "City", name: "Rohtak" },
        { "@type": "State", name: "Haryana" },
        { "@type": "Country", name: "India" },
    ],
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
    sameAs: [
        "https://www.facebook.com/firstsignaldigital/",
        "https://www.instagram.com/firstsignaldigital8/",
    ],
});

const organizationJsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteName,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.jpeg`,
    contactPoint: {
        "@type": "ContactPoint",
        telephone: "+919817048962",
        contactType: "customer service",
        email: "info@admedianetwork.in",
        areaServed: "IN",
        availableLanguage: ["en", "hi"],
    },
});

export default function SiteSchema() {
    return (
        <Helmet>
            <script type="application/ld+json">
                {businessJsonLd}
            </script>
            <script type="application/ld+json">
                {organizationJsonLd}
            </script>
        </Helmet>
    );
}