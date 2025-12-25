import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import services from '@/data/services.json';
import { ArrowRight, ShieldCheck, Zap, Ruler, Clock } from 'lucide-react';

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-brand-dark">
            <Header />

            <header className="container mx-auto px-6 pt-40 pb-20 border-b border-white/5">
                <div className="max-w-4xl">
                    <div className="text-brand-gold text-xs font-bold uppercase tracking-widest mb-4">
                        Expert Solutions
                    </div>
                    <h1 className="text-5xl md:text-7xl font-heading font-black text-white leading-tight mb-8 tracking-tighter">
                        Our Roofing <span className="text-brand-gold">Services</span>
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">
                        1st Choice Roofing & Construction provides licensed, insured, and professional roofing services across the Greater Houston area. From minor leaks to full replacements, we deliver factual assessments and quality workmanship.
                    </p>
                </div>
            </header>

            <section className="container mx-auto px-6 py-20 lg:py-32">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((s) => (
                        <Link
                            key={s.slug}
                            href={`/services/${s.slug}`}
                            className="group p-8 bg-white/5 border border-white/5 rounded-[2rem] hover:border-brand-gold/30 transition-all hover:translate-y-[-4px]"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-brand-gold/10 flex items-center justify-center mb-6 group-hover:bg-brand-gold transition-colors">
                                <ShieldCheck className="w-6 h-6 text-brand-gold group-hover:text-brand-dark transition-colors" />
                            </div>
                            <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter">
                                {s.service}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-8">
                                {s.problem.substring(0, 120)}...
                            </p>
                            <div className="flex items-center gap-2 text-brand-gold font-bold text-xs uppercase tracking-widest">
                                Learn More
                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
