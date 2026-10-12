import { networkMembers, parentOrganization, SITE_NAME, SITE_URL } from "../data/siteData";

const selfDomain = SITE_URL.replace(/^https?:\/\//, "");

const cards = [
    {
        name: SITE_NAME,
        role: "You are here",
        description:
            "Brand strategy, websites, mobile products, AI, automation, SaaS platforms and digital growth.",
        domain: selfDomain,
        current: true,
    },
    ...networkMembers.map((member) => ({
        name: member.name,
        role:
            member.name === "Veeraj Healthcare"
                ? "Healthcare group company"
                : member.name === parentOrganization.alternateName
                    ? "Parent company"
                    : "Group company",
        description: member.description,
        domain: member.url.replace(/^https?:\/\//, "").replace(/\/$/, ""),
        href: member.url,
        current: false,
    })),
];

export default function OurNetwork() {
    return (
        <section id="network" className="bg-slate-50 py-20">
            <div className="mx-auto max-w-7xl px-6">
                <div className="max-w-3xl">
                    <span className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">
                        Our Network
                    </span>
                    <h2 className="mt-4 text-3xl font-bold text-blue-950 sm:text-4xl">
                        One company across five specialist brands.
                    </h2>
                    <p className="mt-4 text-lg leading-8 text-slate-600">
                        First Signal Digital is part of the AD Media Network group, alongside
                        First Signal News, First Signal Music and Veeraj Healthcare.
                    </p>
                </div>

                <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {cards.map((card) => (
                        <article
                            key={card.name}
                            className={`flex flex-col rounded-3xl border p-7 transition ${
                                card.current
                                    ? "border-cyan-500/40 bg-white shadow-xl ring-1 ring-cyan-500/20"
                                    : "border-slate-200 bg-white hover:border-cyan-500/40 hover:shadow-lg"
                            }`}
                        >
                            <span className="text-xs font-semibold uppercase tracking-widest text-cyan-600">
                                {card.role}
                            </span>
                            <h3 className="mt-3 text-xl font-bold text-blue-950">
                                {card.name}
                            </h3>
                            <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
                                {card.description}
                            </p>
                            {card.current ? (
                                <span className="mt-6 text-sm font-semibold text-slate-400">
                                    {card.domain}
                                </span>
                            ) : (
                                <a
                                    href={card.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-700 transition hover:text-cyan-500"
                                >
                                    Visit {card.domain}
                                    <span aria-hidden="true">→</span>
                                </a>
                            )}
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
