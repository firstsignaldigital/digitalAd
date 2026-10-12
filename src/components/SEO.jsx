import { Helmet } from "react-helmet-async";

const SITE_URL = "https://www.firstsignaldigital.com";

export default function SEO({
    route,
    title,
    description,
    canonical,
    robots = "index, follow",
    ogTitle,
    ogDescription,
    ogUrl,
    ogImage = `${SITE_URL}/logo.jpeg`,
    ogType = "website",
    ogSiteName = "First Signal Digital",
    ogLocale = "en_IN",
    twitterCard = "summary_large_image",
    twitterTitle,
    twitterDescription,
    breadcrumbs,
    faq,
}) {
    const url = canonical || `${SITE_URL}${route}`;

    const image = ogImage;

    const breadcrumbJsonLd = breadcrumbs && breadcrumbs.length
        ? JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: breadcrumbs.map((item, index) => ({
                  "@type": "ListItem",
                  position: index + 1,
                  name: item.name,
                  item: item.path.startsWith("http")
                      ? item.path
                      : `${SITE_URL}${item.path}`,
              })),
          })
        : null;

    const faqJsonLd = faq && faq.length
        ? JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faq.map((item) => ({
                  "@type": "Question",
                  name: item.q,
                  acceptedAnswer: {
                      "@type": "Answer",
                      text: item.a,
                  },
              })),
          })
        : null;

    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={url} />
            <meta name="robots" content={robots} />
            <meta property="og:title" content={ogTitle || title} />
            <meta property="og:description" content={ogDescription || description} />
            <meta property="og:url" content={ogUrl || url} />
            <meta property="og:type" content={ogType} />
            <meta property="og:site_name" content={ogSiteName} />
            <meta property="og:locale" content={ogLocale} />
            <meta property="og:image" content={image} />
            <meta property="og:image:alt" content="First Signal Digital logo" />
            <meta name="twitter:card" content={twitterCard} />
            <meta name="twitter:title" content={twitterTitle || title} />
            <meta name="twitter:description" content={twitterDescription || description} />
            <meta name="twitter:image" content={image} />
            {breadcrumbJsonLd && (
                <script type="application/ld+json">
                    {breadcrumbJsonLd}
                </script>
            )}
            {faqJsonLd && (
                <script type="application/ld+json">
                    {faqJsonLd}
                </script>
            )}
        </Helmet>
    );
}