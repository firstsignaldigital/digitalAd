import { GTM_ID } from "../data/siteData";

const CONSENT_KEY = "fsd_analytics_consent";

/**
 * Initialises Google Tag Manager. The GA4 measurement tag (G-LTV9BF92FD) lives
 * *inside* the GTM container, so this only loads GTM — do not also add a direct
 * gtag.js on the page, or visits will be counted twice.
 *
 * Consent Mode defaults are set before GTM loads so the tag respects them.
 * Analytics storage defaults to granted (no consent banner on this site yet);
 * set localStorage["fsd_analytics_consent"] = "denied" to opt out.
 */
export function initializeMeasurement() {
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag() {
    window.dataLayer.push(arguments);
  };

  const choice = window.localStorage.getItem(CONSENT_KEY);
  window.gtag("consent", "default", {
    analytics_storage: choice === "denied" ? "denied" : "granted",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    wait_for_update: 500,
  });

  if (!/^GTM-[A-Z0-9]+$/.test(GTM_ID)) return;

  window.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(GTM_ID)}`;
  document.head.appendChild(script);
}
