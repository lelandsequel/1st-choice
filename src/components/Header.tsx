'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, Menu, ShieldCheck, X } from 'lucide-react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-dark/90 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <ShieldCheck className="w-8 h-8 text-brand-gold group-hover:scale-110 transition-transform" />
                    <div className="flex flex-col leading-tight">
                        <span className="font-heading font-bold text-xl tracking-tight text-white uppercase" title="1st Choice Roofing & Construction">
                            1st Choice
                        </span>
                        <span className="text-[10px] text-brand-gold tracking-[0.2em] font-medium uppercase">
                            Roofing & Construction
                        </span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    <Link href="/services" className="text-sm font-medium hover:text-brand-gold transition-colors">Services</Link>
                    <Link href="/projects" className="text-sm font-medium hover:text-brand-gold transition-colors uppercase tracking-widest font-black text-xs">Projects</Link>
                    <Link href="/locations" className="text-sm font-medium hover:text-brand-gold transition-colors">Locations</Link>
                    <Link href="/roofing-guides" className="text-sm font-medium hover:text-brand-gold transition-colors">Guides</Link>
                    <Link href="/about" className="text-sm font-medium hover:text-brand-gold transition-colors">About</Link>
                </nav>

                <div className="flex items-center gap-4">
                    <a
                        href="tel:+18325550123"
                        className={`hidden sm:flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-sm transition-all ${isScrolled ? 'bg-brand-gold text-brand-dark hover:bg-brand-accent shadow-lg shadow-brand-gold/20' : 'bg-white/10 text-white hover:bg-white/20'}`}
                    >
                        <Phone className="w-4 h-4 fill-current" />
                        <span>(832) 555-0123</span>
                    </a>
                    <button className="md:hidden p-2 text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-brand-dark border-b border-white/10 p-6 animate-in slide-in-from-top-4 duration-300">
                    <nav className="flex flex-col gap-6">
                        <Link href="/services" className="text-lg font-bold" onClick={() => setIsMenuOpen(false)}>Services</Link>
                        <Link href="/projects" className="text-lg font-bold text-brand-gold" onClick={() => setIsMenuOpen(false)}>Projects</Link>
                        <Link href="/locations" className="text-lg font-bold" onClick={() => setIsMenuOpen(false)}>Locations</Link>
                        <Link href="/roofing-guides" className="text-lg font-bold" onClick={() => setIsMenuOpen(false)}>Guides</Link>
                        <Link href="/about" className="text-lg font-bold" onClick={() => setIsMenuOpen(false)}>About</Link>
                        <a href="tel:+18325550123" className="flex items-center justify-center gap-2 bg-brand-gold text-brand-dark py-4 rounded-xl font-bold">
                            <Phone className="w-4 h-4 fill-current" />
                            (832) 555-0123
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
