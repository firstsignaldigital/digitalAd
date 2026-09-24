import SEO from "/src/components/SEO";

export default function Terms() {
    return (
        <>
            <SEO
                route="/terms"
                title="Terms of Service | First Signal Digital"
                description="Terms and conditions for using the First Signal Digital website and engaging our digital marketing and technology services."
            />

            <section className="bg-linear-to-br from-blue-950 via-blue-900 to-blue-800 pt-24 pb-16 md:pt-28 md:pb-20 text-white">
                <div className="mx-auto max-w-4xl px-6">
                    <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
                        LEGAL
                    </span>

                    <h1 className="mt-8 text-5xl font-bold md:text-6xl">
                        Terms of Service
                    </h1>

                    <p className="mt-6 text-lg text-slate-300">
                        Last updated: September 2026
                    </p>
                </div>
            </section>

            <section className="mx-auto max-w-4xl px-6 py-16">
                <div className="space-y-10 text-slate-700 leading-8">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900">
                            Acceptance of Terms
                        </h2>

                        <p className="mt-4">
                            By accessing and using this website, you agree to
                            these terms. If you do not agree, please do not use
                            the website or our services.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-slate-900">
                            Our Services
                        </h2>

                        <p className="mt-4">
                            First Signal Digital provides digital marketing,
                            technology development, AI solutions, media
                            production and related services. Specific project
                            scope, timelines, deliverables and fees are agreed
                            separately in writing for each engagement.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-slate-900">
                            Website Content
                        </h2>

                        <p className="mt-4">
                            The content on this website is provided for general
                            information only. It does not constitute a binding
                            offer or professional advice. We may update content
                            without notice.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-slate-900">
                            Intellectual Property
                        </h2>

                        <p className="mt-4">
                            All content, branding, designs and code on this
                            website are the property of First Signal Digital and
                            may not be reproduced without written permission.
                            Deliverables created for you under a project are
                            owned as per the applicable agreement.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-slate-900">
                            Limitation of Liability
                        </h2>

                        <p className="mt-4">
                            The website is provided "as is" without warranties.
                            To the fullest extent permitted by law, we are not
                            liable for indirect or consequential damages arising
                            from your use of this website.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-slate-900">
                            Third-Party Links
                        </h2>

                        <p className="mt-4">
                            Our website may link to external sites. We are not
                            responsible for the content or practices of
                            third-party websites.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-slate-900">
                            Governing Law
                        </h2>

                        <p className="mt-4">
                            These terms are governed by the laws of India and
                            subject to the jurisdiction of the courts of Rohtak,
                            Haryana.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-slate-900">
                            Contact Us
                        </h2>

                        <p className="mt-4">
                            For questions about these terms, contact us by
                            WhatsApp or phone at +91 98170 48962 or through the
                            contact page on this website.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}