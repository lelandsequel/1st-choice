import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ShieldCheck, Target, Users, Award, CheckCircle2 } from 'lucide-react';

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-brand-dark">
            <Header />

            <section className="pt-40 pb-24">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="text-center mb-20 animate-in fade-in slide-in-from-top-5 duration-700">
                        <div className="text-brand-gold text-xs font-bold uppercase tracking-widest mb-4">Our History</div>
                        <h1 className="text-5xl md:text-7xl font-heading font-black text-white mb-8">
                            Local Excellence <br />
                            <span className="text-brand-gold underline decoration-white/10 underline-offset-8">Since Day One.</span>
                        </h1>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed italic">
                            1st Choice Roofing & Construction was founded on a simple principle: treat every home as if it were our own.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-heading font-bold text-white flex items-center gap-3">
                                <Target className="w-8 h-8 text-brand-gold" />
                                Safety & Standards
                            </h2>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                1st Choice Roofing & Construction operates with a strict focus on OSHA-compliant safety protocols and site cleanliness. We follow industry-standard installation practices and use high-grade materials from established manufacturers to ensure project durability.
                            </p>
                        </div>
                        <div className="space-y-6">
                            <h2 className="text-3xl font-heading font-bold text-white flex items-center gap-3">
                                <ShieldCheck className="w-8 h-8 text-brand-gold" />
                                Inspection Philosophy
                            </h2>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                Our 100% no-obligation inspection protocol is designed to provide homeowners with a factual, documented assessment of their property. We provide honest recommendations based on current roof condition, helping you make informed decisions without sales pressure.
                            </p>
                        </div>
                    </div>

                    <div className="p-12 md:p-20 bg-brand-slate/10 border border-brand-slate/20 rounded-[3rem] shadow-inner relative overflow-hidden">
                        <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-gold/5 blur-[100px] -mb-32 -mr-32" />

                        <h3 className="text-center text-2xl font-black text-white uppercase tracking-widest mb-16">The 1st Choice Value</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                            {[
                                { title: "Local Expertise", desc: "Based in Tomball, we understand the specific challenges of the Texas coastal climate." },
                                { title: "Certified Crews", desc: "Our installers are factory-trained and follow strict safety protocols on every job site." },
                                { title: "No-Bullshit Policy", desc: "Honest estimates, no surprise fees, and clear communication from start to finish." }
                            ].map((value, i) => (
                                <div key={i} className="space-y-4">
                                    <div className="w-12 h-[2px] bg-brand-gold mb-6" />
                                    <h4 className="text-white font-bold text-lg uppercase tracking-wider">{value.title}</h4>
                                    <p className="text-gray-400 text-sm leading-relaxed">{value.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-32 text-center">
                        <h4 className="text-xl font-bold text-white mb-10 flex items-center justify-center gap-3 uppercase tracking-[0.2em] opacity-50">
                            <Award className="w-6 h-6" />
                            Trusted Community Partner
                        </h4>
                        <div className="flex flex-wrap justify-center gap-12 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                            {/* Placeholders for partner logos */}
                            <div className="font-heading font-black text-2xl tracking-tighter italic">MASTER-TECH</div>
                            <div className="font-heading font-black text-2xl tracking-tighter italic">ELITE-INSURE</div>
                            <div className="font-heading font-black text-2xl tracking-tighter italic">STORM-SECURE</div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
