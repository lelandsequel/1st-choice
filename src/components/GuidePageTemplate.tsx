import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, CheckCircle2, Phone } from 'lucide-react';

interface GuidePageTemplateProps {
    question: string;
    shortAnswer: string;
    detailedExplanation: string;
    bulletPoints: string[];
    relatedService: string;
}

const GuidePageTemplate: React.FC<GuidePageTemplateProps> = ({
    question,
    shortAnswer,
    detailedExplanation,
    bulletPoints,
    relatedService
}) => {
    return (
        <div className="bg-brand-dark min-h-screen">
            <header className="container mx-auto px-6 pt-40 pb-20 border-b border-white/5 text-center">
                <Link href="/roofing-guides" className="inline-flex items-center gap-2 text-brand-gold text-[10px] font-black uppercase tracking-[0.3em] mb-12 hover:translate-x-[-4px] transition-transform">
                    <ArrowLeft className="w-4 h-4" />
                    Roofing Education Series
                </Link>
                <h1 className="text-5xl md:text-7xl font-heading font-black text-white leading-[1.1] mb-16 tracking-tighter">
                    {question}
                </h1>

                {/* Short Answer Box */}
                <div className="max-w-4xl mx-auto p-1 bg-gradient-to-br from-brand-gold/40 via-brand-gold/5 to-transparent rounded-[2.5rem] shadow-[0_30px_60px_rgba(0,0,0,0.4)]">
                    <div className="bg-brand-dark p-10 md:p-14 rounded-[2.4rem] text-left">
                        <div className="flex items-center gap-3 text-brand-gold font-bold mb-6 text-[10px] uppercase tracking-[0.2em]">
                            <CheckCircle2 className="w-5 h-5" />
                            Expert Quick Answer
                        </div>
                        <p className="text-2xl md:text-4xl text-white font-medium leading-[1.3] tracking-tight">
                            {shortAnswer}
                        </p>
                    </div>
                </div>
            </header>

            <main className="container mx-auto px-6 py-20 lg:py-32 max-w-4xl">
                <div className="space-y-24">
                    <section className="prose prose-invert max-w-none">
                        <h2 className="text-2xl md:text-3xl font-black text-white mb-8 uppercase tracking-tighter">Detailed Explanation</h2>
                        <div className="text-gray-300 text-lg leading-relaxed space-y-6">
                            {detailedExplanation}
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl md:text-3xl font-black text-white mb-12 flex items-center gap-4">
                            <span className="w-12 h-[2px] bg-brand-gold" />
                            Key Considerations
                        </h2>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {bulletPoints.map((point, i) => (
                                <li key={i} className="flex items-start gap-4 p-6 bg-white/5 border border-white/5 rounded-2xl hover:border-brand-gold/20 transition-all">
                                    <CheckCircle2 className="w-6 h-6 text-brand-gold shrink-0 mt-0.5" />
                                    <span className="text-gray-300 font-medium leading-relaxed">{point}</span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Soft Contextual CTA */}
                    <div className="mt-24 p-12 bg-white/5 border border-white/10 rounded-[2.5rem] text-center space-y-8">
                        <p className="text-gray-400 text-lg font-medium italic leading-relaxed max-w-2xl mx-auto">
                            "Need a specific assessment for your property? Our licensed experts provide factual, documentation-based inspections across Greater Houston."
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
                            <a
                                href="tel:+18325550123"
                                className="inline-flex items-center gap-2 text-brand-gold font-black uppercase tracking-[0.2em] text-[10px] hover:text-white transition-colors border-b border-brand-gold/20 pb-1"
                            >
                                Speak with a Specialist
                                <ArrowRight className="w-4 h-4" />
                            </a>
                            <Link
                                href={`/services/${relatedService}`}
                                className="inline-flex items-center gap-2 text-white/40 font-black uppercase tracking-[0.2em] text-[10px] hover:text-white transition-colors"
                            >
                                View {relatedService.replace(/-/g, ' ')}
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default GuidePageTemplate;
