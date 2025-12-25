import React from 'react';
import Link from 'next/link';
import { Phone, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';
import SchemaOrg from '@/components/SchemaOrg';

interface ServicePageTemplateProps {
    service: string;
    location?: string;
    problem: string;
    solution: string;
    features: string[];
    process: string[];
    faqs: { q: string; a: string }[];
}

const ServicePageTemplate: React.FC<ServicePageTemplateProps> = ({
    service,
    location = "Greater Houston",
    problem,
    solution,
    features,
    process,
    faqs
}) => {
    return (
        <div className="bg-brand-dark min-h-screen">
            <SchemaOrg type="Service" data={{ service, location, problem }} />
            <SchemaOrg type="FAQPage" data={faqs} />

            {/* Header Section */}
            <header className="container mx-auto px-6 pt-40 pb-20 border-b border-white/5">
                <div className="max-w-4xl animate-in fade-in slide-in-from-bottom-5 duration-700">
                    <div className="text-brand-gold text-xs font-bold uppercase tracking-widest mb-4">
                        Professional Roofing Services
                    </div>
                    <h1 className="text-5xl md:text-7xl font-heading font-black text-white leading-tight mb-8 tracking-tighter">
                        {service} in <span className="text-brand-gold">{location}</span>
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">
                        1st Choice Roofing & Construction provides detailed, factual assessments and expert {service.toLowerCase()} throughout {location}. Headquartered in <Link href="/locations/tomball-tx" className="text-brand-gold hover:underline">Tomball</Link>, we are licensed and insured for your peace of mind.
                    </p>
                </div>
            </header>

            <main className="container mx-auto px-6 py-20 lg:py-32">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-24">
                    {/* Content Column */}
                    <div className="lg:col-span-2 space-y-24">
                        {/* High-Level Overview */}
                        <section className="space-y-12">
                            <div className="space-y-6">
                                <h2 className="text-3xl md:text-4xl font-heading font-black text-white leading-tight uppercase tracking-tighter">
                                    Our Approach to <span className="text-brand-gold">{service}</span>
                                </h2>
                                <p className="text-gray-300 text-lg leading-relaxed">
                                    {solution}
                                </p>
                            </div>

                            <div className="h-px w-full bg-gradient-to-r from-brand-gold/30 to-transparent" />

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {features.map((feature, i) => (
                                    <div key={i} className="flex items-start gap-4 p-5 bg-white/5 rounded-2xl border border-white/5 hover:border-brand-gold/20 transition-all">
                                        <div className="w-2 h-2 rounded-full bg-brand-gold shrink-0 mt-2 shadow-[0_0_8px_rgba(212,175,55,0.8)]" />
                                        <span className="text-white font-medium italic">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Process Section */}
                        <section>
                            <h2 className="text-3xl font-heading font-bold text-white mb-12 flex items-center gap-3">
                                <span className="w-8 h-[2px] bg-brand-gold shadow-[0_0_10px_rgba(212,175,55,0.5)]" />
                                Our 4-Step Process
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                {[
                                    { step: "Inspection", desc: "Thorough multi-point roof evaluation." },
                                    { step: "Assessment", desc: "Detailed breakdown of findings and needs." },
                                    { step: "Recommendation", desc: "Factual, honest advice on next steps." },
                                    { step: "Execution", desc: "Phased project management and completion." }
                                ].map((item, i) => (
                                    <div key={i} className="group p-6 bg-brand-slate/10 border border-brand-slate/20 rounded-2xl hover:border-brand-gold/30 transition-all text-center">
                                        <div className="text-xs font-black text-brand-gold/40 mb-2 uppercase tracking-widest">Step {i + 1}</div>
                                        <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-tighter">{item.step}</h4>
                                        <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* AEO FAQ Section */}
                        <section className="bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10">
                            <h2 className="text-3xl font-heading font-bold text-white mb-10">Frequently Asked Questions</h2>
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

                    {/* Sidebar CTA */}
                    <aside className="space-y-8">
                        <div className="sticky top-32 bg-brand-gold p-8 rounded-3xl text-brand-dark shadow-[20px_20px_60px_rgba(212,175,55,0.1)]">
                            <h3 className="text-2xl font-black mb-4 leading-tight uppercase tracking-tight">Factual Roof Assessment</h3>
                            <p className="text-brand-dark/80 mb-8 font-medium italic text-xs leading-relaxed">Our licensed experts provide honest recommendations based on site reality. Zero sales pressure.</p>
                            <div className="space-y-4">
                                <a
                                    href="tel:+18325550123"
                                    className="flex items-center justify-center gap-3 w-full py-5 bg-brand-dark text-white rounded-2xl font-black text-xl hover:scale-[1.02] active:scale-[0.98] transition-all shadow-2xl"
                                >
                                    <Phone className="w-6 h-6 fill-current" />
                                    (832) 555-0123
                                </a>
                                <div className="flex flex-col items-center gap-1 opacity-80">
                                    <p className="text-[10px] uppercase font-bold tracking-[.25em] text-brand-dark">Licensed • Insured • Local</p>
                                    <p className="text-[9px] uppercase font-medium tracking-[0.2em] text-brand-dark/60">Greater Houston & Tomball Service</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 bg-brand-slate/20 border border-brand-slate/30 rounded-3xl text-sm">
                            <h4 className="text-white font-bold mb-4 uppercase tracking-widest text-xs">Why 1st Choice?</h4>
                            <ul className="space-y-4 text-gray-400">
                                <li className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0 mt-1.5" />
                                    <span><strong>Full Liability Insurance</strong>: You are 100% protected.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0 mt-1.5" />
                                    <span><strong>Houston & Tomball Local</strong>: Our <Link href="/locations/tomball-tx" className="text-brand-gold hover:underline">Tomball HQ</Link> serves the entire region.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0 mt-1.5" />
                                    <span><strong>Factory Certified</strong>: Expert installation guaranteed.</span>
                                </li>
                            </ul>
                        </div>
                    </aside>
                </div>
            </main>
        </div>
    );
};

export default ServicePageTemplate;
