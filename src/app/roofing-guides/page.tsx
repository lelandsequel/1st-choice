import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import guides from '@/data/guides.json';
import { BookOpen, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function GuidesPage() {
    return (
        <main className="min-h-screen bg-brand-dark">
            <Header />

            <header className="container mx-auto px-6 pt-40 pb-20 border-b border-white/5">
                <div className="max-w-4xl">
                    <div className="text-brand-gold text-xs font-bold uppercase tracking-widest mb-4">
                        Roofing Education
                    </div>
                    <h1 className="text-5xl md:text-7xl font-heading font-black text-white leading-tight mb-8 tracking-tighter">
                        Roofing <span className="text-brand-gold">Guides</span>
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">
                        Our education series provides factual, documentation-based answers to the most common roofing questions. We believe informed homeowners make the best decisions for their property.
                    </p>
                </div>
            </header>

            <section className="container mx-auto px-6 py-20 lg:py-32">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {guides.map((g) => (
                        <Link
                            key={g.slug}
                            href={`/roofing-guides/${g.slug}`}
                            className="group p-10 bg-white/5 border border-white/5 rounded-[2.5rem] hover:border-brand-gold/30 transition-all flex flex-col items-start"
                        >
                            <div className="flex items-center gap-3 text-brand-gold font-bold mb-6 text-[10px] uppercase tracking-[0.2em]">
                                <CheckCircle2 className="w-4 h-4" />
                                Expert Insight
                            </div>
                            <h3 className="text-3xl font-black text-white mb-6 leading-tight group-hover:text-brand-gold transition-colors tracking-tighter">
                                {g.question}
                            </h3>
                            <p className="text-gray-400 mb-10 line-clamp-2 italic">
                                "{g.shortAnswer}"
                            </p>
                            <div className="mt-auto flex items-center gap-2 text-white font-black text-xs uppercase tracking-widest border-b border-white/20 pb-1">
                                Read Full Guide
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
