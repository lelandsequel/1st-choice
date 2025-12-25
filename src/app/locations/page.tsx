import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import locations from '@/data/locations.json';
import { MapPin, ArrowRight, ShieldCheck } from 'lucide-react';

export default function LocationsPage() {
    return (
        <main className="min-h-screen bg-brand-dark">
            <Header />

            <header className="container mx-auto px-6 pt-40 pb-20 border-b border-white/5">
                <div className="max-w-4xl">
                    <div className="text-brand-gold text-xs font-bold uppercase tracking-widest mb-4">
                        Service Areas
                    </div>
                    <h1 className="text-5xl md:text-7xl font-heading font-black text-white leading-tight mb-8 tracking-tighter">
                        Local <span className="text-brand-gold">Expertise</span>
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">
                        We serve homeowners and businesses across Southeast Texas. Our headquarters in Tomball allows us to provide rapid, high-quality roofing services throughout the North Houston region.
                    </p>
                </div>
            </header>

            <section className="container mx-auto px-6 py-20 lg:py-32">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {locations.map((l) => (
                        <Link
                            key={l.slug}
                            href={`/locations/${l.slug}`}
                            className="group p-8 bg-brand-slate/10 border border-brand-slate/20 rounded-[2rem] hover:border-brand-gold/30 transition-all text-center"
                        >
                            <div className="w-16 h-16 rounded-full bg-brand-gold/10 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                                <MapPin className="w-8 h-8 text-brand-gold" />
                            </div>
                            <h3 className="text-2xl font-black text-white mb-2 uppercase tracking-tighter">
                                {l.city}, TX
                            </h3>
                            <p className="text-brand-gold/60 text-[10px] font-black uppercase tracking-[0.2em] mb-4">
                                {l.county} County
                            </p>
                            <div className="inline-flex items-center gap-2 text-white border-b border-white/10 pb-1 text-xs font-bold hover:text-brand-gold transition-colors">
                                View Local Standards
                                <ArrowRight className="w-4 h-4" />
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
