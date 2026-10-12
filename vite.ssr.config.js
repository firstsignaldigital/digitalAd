import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Separate build used only at deploy time: it bundles the app for Node so the
// prerender step can render every route to static HTML. The normal
// `vite build` (client bundle) still drives the browser experience.
export default defineConfig({
    plugins: [
        react(),
        tailwindcss(),
    ],
    build: {
        ssr: "src/ssr/entry-server.jsx",
        outDir: "dist-ssr",
        emptyOutDir: true,
        minify: false,
        sourcemap: false,
    },
});
