'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X, Play, Info, Layers, Target, ShieldCheck, TrendingUp, MessageSquare } from 'lucide-react';
import slides from '@/data/presentation.json';
import { useView } from './ViewManager';

const Presentation = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const { setMode } = useView();

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
            if (e.key === 'ArrowLeft') prevSlide();
            if (e.key === 'Escape') setMode('site');
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const slide = slides[currentSlide];

    // Visual icons for slides based on keywords or ID
    const getIcon = (id: number) => {
        if (id === 1) return <Play className="w-12 h-12 text-brand-gold" />;
        if (id === 3) return <Layers className="w-12 h-12 text-brand-gold" />;
        if (id === 5) return <Target className="w-12 h-12 text-brand-gold" />;
        if (id === 14) return <ShieldCheck className="w-12 h-12 text-brand-gold" />;
        if (id === 16) return <TrendingUp className="w-12 h-12 text-brand-gold" />;
        return <Info className="w-12 h-12 text-brand-gold" />;
    };

    return (
        <div className="absolute inset-0 bg-[#0a0a0a] z-[110] flex flex-col items-center justify-start py-20 px-6 md:px-20 overflow-y-auto no-scrollbar font-sans">
            {/* Background Ambience */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_20%,rgba(212,175,55,0.08),transparent_70%)]" />
                <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-brand-gold/5 blur-[120px] rounded-full" />
                <div className="absolute -bottom-[10%] -right-[10%] w-[50%] h-[50%] bg-brand-gold/5 blur-[120px] rounded-full" />
            </div>

            {/* Header Controls */}
            <div className="max-w-7xl w-full flex items-center justify-between z-20 mb-12 shrink-0">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-brand-gold/20 border border-brand-gold/30 flex items-center justify-center shadow-lg shadow-brand-gold/10">
                        <span className="text-brand-gold font-black text-sm">{slide.id}</span>
                    </div>
                    <div className="flex flex-col">
                        <div className="text-[10px] uppercase font-black tracking-[0.4em] text-brand-gold/60">
                            Technical Strategy Deck
                        </div>
                        <div className="text-xs font-bold text-white uppercase tracking-wider">
                            C&L Strategy x 1st Choice
                        </div>
                    </div>
                </div>
                <button
                    onClick={() => setMode('site')}
                    className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all hover:scale-110 active:scale-95 group shadow-xl"
                    title="Return to Website (Esc)"
                >
                    <X className="w-6 h-6 text-gray-400 group-hover:text-white" />
                </button>
            </div>

            {/* Slide Content */}
            <div className="relative z-10 max-w-5xl w-full flex flex-col items-center animate-in fade-in slide-in-from-bottom-8 duration-700 pb-40">
                <div className="mb-8 p-6 rounded-3xl bg-brand-gold/5 border border-brand-gold/10 shadow-inner">
                    {getIcon(slide.id)}
                </div>

                <h2 className="text-4xl md:text-7xl font-heading font-black text-white text-center leading-[1.1] mb-12 tracking-tighter uppercase italic drop-shadow-2xl">
                    {slide.title}
                </h2>

                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light">
                            {slide.content}
                        </p>
                        {slide.emphasis && (
                            <div className="p-6 bg-brand-gold/10 border-l-4 border-brand-gold rounded-r-2xl">
                                <p className="text-brand-gold font-bold italic text-lg leading-relaxed">
                                    "{slide.emphasis}"
                                </p>
                            </div>
                        )}
                    </div>

                    {slide.bullets && (
                        <div className="space-y-4">
                            {slide.bullets.map((bullet, i) => (
                                <div key={i} className="flex items-start gap-4 p-5 bg-white/5 border border-white/5 rounded-2xl hover:border-brand-gold/30 transition-all hover:translate-x-2">
                                    <div className="w-6 h-6 rounded-full bg-brand-gold/20 flex items-center justify-center shrink-0 mt-1">
                                        <div className="w-2 h-2 bg-brand-gold rounded-full" />
                                    </div>
                                    <span className="text-white font-bold leading-relaxed">{bullet}</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {slide.footer && (
                    <div className="mt-20 px-8 py-3 rounded-full bg-brand-gold text-brand-dark font-black uppercase text-[10px] tracking-widest animate-pulse">
                        {slide.footer}
                    </div>
                )}
            </div>

            {/* Navigation & Progress */}
            <div className="fixed bottom-0 left-0 right-0 p-8 flex flex-col gap-6 z-20 bg-gradient-to-t from-brand-dark via-brand-dark/95 to-transparent">
                <div className="max-w-7xl mx-auto w-full">
                    <div className="h-1.5 bg-white/5 w-full rounded-full overflow-hidden mb-8 shadow-inner">
                        <div
                            className="h-full bg-brand-gold transition-all duration-700 ease-out shadow-[0_0_20px_rgba(212,175,55,0.4)]"
                            style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex gap-4">
                            <button
                                onClick={prevSlide}
                                className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-brand-gold hover:text-brand-dark transition-all disabled:opacity-20 shadow-xl"
                                disabled={currentSlide === 0}
                            >
                                <ChevronLeft className="w-8 h-8" />
                            </button>
                            <button
                                onClick={nextSlide}
                                className="p-5 rounded-2xl bg-brand-gold text-brand-dark border border-brand-gold hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-all active:scale-95 shadow-xl"
                            >
                                <ChevronRight className="w-8 h-8" />
                            </button>
                        </div>

                        <div className="flex flex-col items-center gap-1">
                            <div className="text-sm font-black tracking-[0.5em] text-white">
                                {currentSlide + 1} / {slides.length}
                            </div>
                            <div className="text-[10px] font-bold text-brand-gold/40 uppercase tracking-widest hidden md:block">
                                Slide Progress
                            </div>
                        </div>

                        <div className="flex items-center gap-3 text-brand-gold font-black text-[10px] uppercase tracking-[0.2em] bg-brand-gold/10 px-6 py-3 rounded-full border border-brand-gold/20 hidden lg:flex">
                            <MessageSquare className="w-4 h-4" />
                            Navigate with Arrows or Space
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Presentation;
