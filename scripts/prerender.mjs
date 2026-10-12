import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import { render } from "../dist-ssr/entry-server.js";

const rootDir = join(dirname(fileURLToPath(import.meta.url)), "..");
const distDir = join(rootDir, "dist");

// Keep this in sync with the <Route> list in src/App.jsx.
const ROUTES = [
    "/",
    "/snapshot",
    "/about",
    "/services",
    "/solutions",
    "/solutions/crm",
    "/solutions/erp",
    "/solutions/hrms",
    "/solutions/dashboards",
    "/solutions/education-management",
    "/solutions/hospital-management",
    "/solutions/appointment-booking",
    "/solutions/inventory-management",
    "/solutions/billing-and-pos",
    "/solutions/business-compliance",
    "/marketing",
    "/studio",
    "/contact",
    "/services/seo",
    "/services/google-ads",
    "/services/social-media-marketing",
    "/services/lead-generation",
    "/services/branding",
    "/services/website-development",
    "/services/software-development",
    "/services/mobile-app-development",
    "/services/ai-solutions",
    "/services/media-production",
    "/services/cloud-solutions",
    "/services/database-solutions",
    "/services/cyber-security",
    "/services/digital-transformation",
    "/privacy-policy",
    "/terms",
];

// A path that matches no route, so the SPA's catch-all renders the 404 page.
const NOT_FOUND_ROUTE = "/this-route-does-not-exist";

function assetTagsFromClientHtml(clientHtml) {
    // The client build injects the hashed entry script, chunk preloads and
    // stylesheet right after the <!--app-head--> marker in <head>.
    const match = clientHtml.match(/<!--app-head-->([\s\S]*?)<\/head>/);
    if (!match) {
        throw new Error("Could not find the <!--app-head--> marker in dist/index.html.");
    }
    return match[1].trim();
}

function withClientAssets(documentHtml, assetTags) {
    return documentHtml.replace("</head>", `${assetTags}</head>`);
}

async function writeRouteHtml(route, page) {
    if (route === "/") {
        await writeFile(join(distDir, "index.html"), page);
        return;
    }

    // Flat files (about.html, services/seo.html) paired with Vercel's
    // `cleanUrls` so the extensionless URLs (/about, /services/seo) that are
    // used in canonicals and the sitemap resolve to the prerendered HTML.
    const outFile = join(distDir, `${route.replace(/^\/+/, "")}.html`);
    await mkdir(dirname(outFile), { recursive: true });
    await writeFile(outFile, page);
}

async function main() {
    const clientHtml = await readFile(join(distDir, "index.html"), "utf8");
    const assetTags = assetTagsFromClientHtml(clientHtml);

    for (const route of ROUTES) {
        const { html } = await render(route);
        await writeRouteHtml(route, withClientAssets(html, assetTags));
        console.log(`prerendered ${route}`);
    }

    const { html: notFoundHtml } = await render(NOT_FOUND_ROUTE);
    await writeFile(join(distDir, "404.html"), withClientAssets(notFoundHtml, assetTags));
    console.log("prerendered 404");

    console.log(`Done. ${ROUTES.length + 1} static pages written.`);
}

main().catch((error) => {
    console.error("Prerender failed:", error);
    process.exit(1);
});
