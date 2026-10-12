import { Writable } from "node:stream";

import { renderToPipeableStream } from "react-dom/server";
import { MemoryRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import App from "../App";

const RENDER_TIMEOUT_MS = 30000;

/**
 * Server-render a single URL to a full HTML document string.
 *
 * The app is rendered inside <html><head/><body>, so React 19 hoists the
 * <title>/<meta>/<link> elements produced by react-helmet-async straight into
 * <head>. The client script/style tags are injected afterwards by
 * scripts/prerender.mjs using the asset names from the real client build.
 *
 * `renderToPipeableStream` + `onAllReady` is used (instead of
 * `renderToString`) so lazily-loaded route components inside <Suspense>
 * finish rendering before the markup is captured.
 */
export function render(url) {
    return new Promise((resolve, reject) => {
        let markup = "";
        let settled = false;

        const finish = (error) => {
            if (settled) return;
            settled = true;
            if (error) {
                reject(error);
                return;
            }
            resolve({ html: markup });
        };

        const { pipe, abort } = renderToPipeableStream(
            <html lang="en-IN">
                <head>
                    <meta charSet="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <meta name="theme-color" content="#081d42" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png" />
                    <link rel="icon" type="image/png" sizes="512x512" href="/favicon-512.png" />
                    <link rel="apple-touch-icon" sizes="180x180" href="/favicon-180.png" />
                </head>
                <body>
                    <div id="root">
                        <HelmetProvider>
                            <MemoryRouter initialEntries={[url]}>
                                <App />
                            </MemoryRouter>
                        </HelmetProvider>
                    </div>
                </body>
            </html>,
            {
                onAllReady() {
                    const sink = new Writable({
                        write(chunk, _encoding, callback) {
                            markup += chunk.toString();
                            callback();
                        },
                    });
                    sink.on("finish", () => finish());
                    sink.on("error", (error) => finish(error));
                    pipe(sink);
                },
                onError(error) {
                    finish(error);
                },
            }
        );

        setTimeout(() => {
            if (settled) return;
            abort();
            finish(new Error(`Prerender timed out for ${url}`));
        }, RENDER_TIMEOUT_MS).unref?.();
    });
}
