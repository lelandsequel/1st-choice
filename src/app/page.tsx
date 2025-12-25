import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight, ShieldCheck, Zap, Ruler, Clock, Phone } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
    return (
        <main className="min-h-screen">
            <Header />

            {/* Hero Section */}
            <section className="relative min-h-[95vh] flex items-center pt-28 pb-20 overflow-hidden bg-brand-dark">
                {/* Real Hero Background Image */}
                <div
                    className="absolute inset-0 z-0 opacity-40 mix-blend-luminosity grayscale hover:grayscale-0 transition-all duration-1000"
                    style={{
                        backgroundImage: 'url("/images/hero-roofing.png")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />

                {/* Gradient Overlays for Readability & Depth */}
                <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/80 to-transparent z-1" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark to-transparent z-1" />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-brand-gold text-[10px] font-black uppercase tracking-[0.25em] mb-8 animate-in fade-in slide-in-from-left-4 duration-500">
                            <ShieldCheck className="w-3 h-3" />
                            <span>Houston's Licensed & Insured Roofer</span>
                        </div>

                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading font-black text-white leading-[0.95] mb-12 tracking-tighter animate-in fade-in slide-in-from-bottom-6 duration-700">
                            Roofing <br />
                            <span className="text-brand-gold bg-gradient-to-r from-brand-gold to-brand-accent bg-clip-text text-transparent">Built on Trust.</span>
                        </h1>

                        <p className="text-lg md:text-2xl text-gray-300 mb-14 leading-relaxed max-w-2xl animate-in fade-in slide-in-from-bottom-8 duration-900">
                            1st Choice Roofing & Construction provides licensed, insured, and professional roofing services across <Link href="/locations/tomball-tx" className="text-brand-gold hover:underline decoration-brand-gold/30 underline-offset-4 font-bold">Tomball, TX</Link> and the Greater Houston area. We prioritize site safety and documentation on every project.
                        </p>

                        <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-10 duration-1000">
                            <div className="flex flex-col sm:flex-row gap-6">
                                <a
                                    href="tel:+18325550123"
                                    className="inline-flex items-center justify-center gap-3 bg-brand-gold hover:bg-brand-accent text-brand-dark px-12 py-6 rounded-2xl font-black text-2xl transition-all hover:scale-[1.03] active:scale-[0.97] shadow-[0_20px_50px_rgba(212,175,55,0.3)]"
                                >
                                    <Phone className="w-7 h-7 fill-current" />
                                    (832) 555-0123
                                </a>
                                <Link
                                    href="/services/roof-inspection"
                                    className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-10 py-6 rounded-2xl font-black text-2xl transition-all hover:bg-white/15"
                                >
                                    Free Inspection
                                    <ArrowRight className="w-6 h-6" />
                                </Link>
                            </div>

                            <div className="flex items-center gap-4 opacity-60">
                                <div className="h-px w-12 bg-brand-gold/40" />
                                <p className="text-[10px] uppercase font-black tracking-[0.4em] text-brand-gold">
                                    Fully Licensed & Insured • Houston & Tomball Local
                                </p>
                            </div>
                        </div>

                        {/* Quick Trust Signals */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mt-24 pt-16 border-t border-white/5 animate-in fade-in duration-1000 delay-500">
                            <div className="flex items-center gap-4 group">
                                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-brand-gold/10 transition-colors">
                                    <Zap className="w-5 h-5 text-brand-gold" />
                                </div>
                                <span className="text-[10px] uppercase font-black tracking-[0.2em] text-gray-400 group-hover:text-white transition-colors">Storm Response</span>
                            </div>
                            <div className="flex items-center gap-4 group">
                                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-brand-gold/10 transition-colors">
                                    <ShieldCheck className="w-5 h-5 text-brand-gold" />
                                </div>
                                <span className="text-[10px] uppercase font-black tracking-[0.2em] text-gray-400 group-hover:text-white transition-colors">Licensed & Insured</span>
                            </div>
                            <div className="flex items-center gap-4 group">
                                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-brand-gold/10 transition-colors">
                                    <Ruler className="w-5 h-5 text-brand-gold" />
                                </div>
                                <span className="text-[10px] uppercase font-black tracking-[0.2em] text-gray-400 group-hover:text-white transition-colors">Precision Work</span>
                            </div>
                            <div className="flex items-center gap-4 group">
                                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-brand-gold/10 transition-colors">
                                    <Clock className="w-5 h-5 text-brand-gold" />
                                </div>
                                <span className="text-[10px] uppercase font-black tracking-[0.2em] text-gray-400 group-hover:text-white transition-colors">On-Time Always</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
