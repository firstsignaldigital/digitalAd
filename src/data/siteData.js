export const SITE_URL = (
  import.meta.env.VITE_SITE_URL || "https://www.firstsignaldigital.com"
).replace(/\/$/, "");

export const SITE_NAME = "First Signal Digital";

/**
 * This entity — First Signal Digital.
 * Geo coordinates are intentionally NOT set: no trusted coordinates exist in
 * this repository and they must not be invented. Add `geo` once verified.
 */
export const organization = {
  name: "First Signal Digital",
  phone: "+91 98170 48962",
  phoneInternational: "+919817048962",
  email: "info@admedianetwork.in",
  address: {
    street: "Old ITI, Plot No. 110, Jagdish Colony",
    locality: "Rohtak",
    region: "Haryana",
    postalCode: "124001",
    country: "IN",
  },
  geo: null,
};

/**
 * The parent company. First Signal Digital is a division of Aryadahiya Media
 * Network Pvt. Ltd. (AD Media Network). The `@id` is the canonical identifier
 * used by the parent site so the whole group resolves to one connected entity.
 */
export const parentOrganization = {
  name: "Aryadahiya Media Network Pvt. Ltd.",
  alternateName: "AD Media Network",
  url: "https://www.admedianetwork.in",
  id: "https://www.admedianetwork.in/#organization",
};

export const areaServed = [
  { "@type": "City", name: "Rohtak" },
  { "@type": "State", name: "Haryana" },
  { "@type": "Country", name: "India" },
];

/**
 * Verified official social profiles for First Signal Digital.
 * Owner-confirmed URLs only — no placeholders, no guessing.
 */
export const socialProfiles = {
  firstSignalDigital: [
    { network: "Facebook", url: "https://www.facebook.com/firstsignaldigital/" },
    { network: "Instagram", url: "https://www.instagram.com/firstsignaldigital/" },
    { network: "X", url: "https://x.com/1stsignldigital" },
    { network: "YouTube", url: "https://www.youtube.com/@FirstsignalDigital" },
  ],
};

/**
 * The confirmed company network (sister brands under the same parent company).
 * Used for entity `sameAs`/`department` links and on-site interlinking.
 */
export const networkMembers = [
  {
    name: "AD Media Network",
    url: "https://www.admedianetwork.in",
    description: "The parent company — news, music and digital media based in Rohtak, Haryana.",
  },
  {
    name: "First Signal News",
    url: "https://firstsignalmedia.com",
    description: "News, editorial, video, live production, podcasts, interviews and brand partnerships.",
  },
  {
    name: "First Signal Music",
    url: "https://www.admedianetwork.in/music",
    description: "Song production, studio recording, mixing, mastering, music videos and artist launch support.",
  },
  {
    name: "Veeraj Healthcare",
    url: "https://www.veerajhealthcare.com",
    description: "A healthcare company in the same AD Media Network group.",
  },
];
