import SEO from "/src/components/SEO";

export default function PrivacyPolicy() {
    return (
        <>
            <SEO
                route="/privacy-policy"
                title="Privacy Policy | First Signal Digital"
                description="Privacy policy for First Signal Digital covering how we collect, use and protect your information when you visit our website or contact us."
            />

            <section className="bg-linear-to-br from-blue-950 via-blue-900 to-blue-800 pt-24 pb-16 md:pt-28 md:pb-20 text-white">
                <div className="mx-auto max-w-4xl px-6">
                    <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
                        LEGAL
                    </span>

                    <h1 className="mt-8 text-5xl font-bold md:text-6xl">
                        Privacy Policy
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
                            Introduction
                        </h2>

                        <p className="mt-4">
                            First Signal Digital ("we", "our", "us") respects
                            your privacy. This policy explains what information
                            we collect through our website
                            (www.firstsignaldigital.com), how we use it, and the
                            choices you have.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-slate-900">
                            Information We Collect
                        </h2>

                        <p className="mt-4">
                            We collect information you provide directly, such as
                            your name, email address, phone number and message
                            when you fill in the contact form or reach out to us
                            by phone or WhatsApp. We also collect basic
                            analytics data such as pages visited, device type
                            and approximate location.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-slate-900">
                            How We Use Your Information
                        </h2>

                        <ul className="mt-4 list-disc space-y-2 pl-6">
                            <li>To respond to your enquiries and quotes.</li>
                            <li>To send project updates and service communications.</li>
                            <li>To improve our website and services.</li>
                            <li>To comply with legal obligations.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-slate-900">
                            Sharing of Information
                        </h2>

                        <p className="mt-4">
                            We do not sell your personal information. We may
                            share it with trusted service providers who assist
                            us in operating our website and communicating with
                            you, and when required by law.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-slate-900">
                            Cookies
                        </h2>

                        <p className="mt-4">
                            Our website may use cookies to understand how
                            visitors use the site and to improve the experience.
                            You can disable cookies through your browser
                            settings.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-slate-900">
                            Data Security
                        </h2>

                        <p className="mt-4">
                            We take reasonable technical and organisational
                            measures to protect your information from
                            unauthorised access, loss or misuse.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-slate-900">
                            Your Rights
                        </h2>

                        <p className="mt-4">
                            You may request access to, correction of, or
                            deletion of your personal information at any time by
                            contacting us.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-slate-900">
                            Contact Us
                        </h2>

                        <p className="mt-4">
                            For any privacy-related questions, contact us by
                            WhatsApp or phone at +91 98170 48962 or through the
                            contact page on this website.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}