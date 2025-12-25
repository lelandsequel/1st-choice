import SchemaOrg from '@/components/SchemaOrg';
import { MapPin, ShieldCheck, CloudLightning, Phone } from 'lucide-react';

interface LocationPageTemplateProps {
    city: string;
    county: string;
    weatherInfo: string;
    serviceHighlights: string[];
    faqs: { q: string; a: string }[];
}

const LocationPageTemplate: React.FC<LocationPageTemplateProps> = ({
    city,
    county,
    weatherInfo,
    serviceHighlights,
    faqs
}) => {
    return (
        <div className="bg-brand-dark min-h-screen">
            <SchemaOrg type="RoofingContractor" data={{ address: { addressLocality: city, addressRegion: "TX" } }} />
            <SchemaOrg type="FAQPage" data={faqs} />

            <header className="container mx-auto px-6 pt-40 pb-20 border-b border-white/5">
                <div className="max-w-4xl">
                    <div className="text-brand-gold text-xs font-bold uppercase tracking-widest mb-4">
                        Local Roofing Experts
                    </div>
                    <h1 className="text-5xl md:text-7xl font-heading font-black text-white leading-tight mb-8 tracking-tighter">
                        {city === "Tomball" ? "Headquarters: Roofing in " : "Roofing Services in "}<span className="text-brand-gold">{city}, TX</span>
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">
                        1st Choice Roofing & Construction is a licensed and insured local roofing company proudly serving homeowners and property managers across {city} and {county} County.
                    </p>
                </div>
            </header>

            <main className="container mx-auto px-6 py-20 lg:py-32">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-24">
                    {/* Content Column */}
                    <div className="lg:col-span-2 space-y-24">
                        <section>
                            <h2 className="text-3xl font-heading font-bold text-white mb-8 flex items-center gap-3">
                                <span className="w-8 h-[2px] bg-brand-gold shadow-[0_0_10px_rgba(212,175,55,0.5)]" />
                                Southeast Texas Roofing Standards
                            </h2>
                            <div className="bg-brand-gold/5 border border-brand-gold/10 rounded-3xl p-10 mb-20 shadow-inner">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                    <div className="space-y-4">
                                        <h4 className="text-brand-gold font-bold uppercase tracking-[.2em] text-[10px]">Weather Context</h4>
                                        <p className="text-gray-300 text-sm leading-relaxed">
                                            {weatherInfo}
                                        </p>
                                    </div>
                                    <div className="space-y-4">
                                        <h4 className="text-brand-gold font-bold uppercase tracking-[.2em] text-[10px]">Recommended Materials</h4>
                                        <p className="text-gray-300 text-sm leading-relaxed italic border-l-2 border-brand-gold/20 pl-6">
                                            We recommend high-wind rated architectural shingles and impact-resistant underlayment to combat Southeast Texas storm patterns.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-3xl font-heading font-bold text-white mb-12 flex items-center gap-3">
                                <span className="w-8 h-[2px] bg-brand-gold shadow-[0_0_10px_rgba(212,175,55,0.5)]" />
                                Our 4-Step Local Process
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
                                {[
                                    { step: "Inspection", desc: "Detailed on-site roof check." },
                                    { step: "Assessment", desc: "Honest report of roof condition." },
                                    { step: "Recommendation", desc: "Clear advice based on facts." },
                                    { step: "Execution", desc: "Professional installation standards." }
                                ].map((item, i) => (
                                    <div key={i} className="group p-6 bg-brand-slate/10 border border-brand-slate/20 rounded-2xl hover:border-brand-gold/30 transition-all">
                                        <div className="text-xs font-black text-brand-gold/40 mb-2 uppercase tracking-widest">Step {i + 1}</div>
                                        <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-tighter">{item.step}</h4>
                                        <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
                                    </div>
                                ))}
                            </div>

                            <h2 className="text-3xl font-heading font-bold text-white mb-8 flex items-center gap-3">
                                <span className="w-8 h-[2px] bg-brand-gold shadow-[0_0_10px_rgba(212,175,55,0.5)]" />
                                Our Services in {city}
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {serviceHighlights.map((highlight, i) => (
                                    <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors">
                                        <h4 className="text-white font-bold mb-2">{highlight.split(':')[0]}</h4>
                                        <p className="text-gray-400 text-sm">{highlight.split(':')[1]}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10">
                            <h2 className="text-3xl font-heading font-bold text-white mb-10">{city} Roofing FAQs</h2>
                            <div className="space-y-8">
                                {faqs.map((faq, i) => (
                                    <div key={i} className="space-y-3">
                                        <h3 className="text-brand-gold font-bold text-lg">Q: {faq.q}</h3>
                                        <div className="text-gray-300 leading-relaxed">
                                            <strong>A:</strong> {faq.a}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    <aside className="space-y-8">
                        <div className="sticky top-32 bg-brand-slate/40 p-8 rounded-3xl border border-brand-slate/60 shadow-2xl">
                            <h3 className="text-white text-xl font-bold mb-6">Service Area Map</h3>
                            <div className="aspect-square bg-brand-dark rounded-xl flex items-center justify-center border border-white/5 text-gray-500 text-xs text-center p-4">
                                Interactive Map Placeholder<br />for {city}, Texas
                            </div>
                            <div className="mt-8 space-y-4">
                                <a
                                    href="tel:+18325550123"
                                    className="block w-full text-center py-5 bg-brand-dark text-white rounded-2xl font-black text-lg hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
                                >
                                    Schedule Inspection
                                </a>
                                <div className="flex flex-col items-center gap-1 opacity-60">
                                    <p className="text-center text-[10px] uppercase font-bold tracking-widest text-gray-400">
                                        Licensed & Insured Local Team
                                    </p>
                                    <p className="text-[9px] uppercase font-medium tracking-[0.2em] text-gray-500">Tomball • Houston • {city}</p>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </main>
        </div>
    );
};

export default LocationPageTemplate;
