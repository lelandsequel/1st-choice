import React from 'react';
import { Phone } from 'lucide-react';

const MobileStickyCTA = () => {
    return (
        <div className="fixed bottom-0 left-0 w-full z-[100] md:hidden p-4 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none">
            <div className="pointer-events-auto">
                <a
                    href="tel:+18325550123"
                    className="flex items-center justify-between gap-4 bg-brand-gold hover:bg-brand-accent text-brand-dark px-6 py-4 rounded-2xl font-bold shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-all active:scale-[0.98]"
                >
                    <div className="flex flex-col items-start leading-tight">
                        <span className="text-[10px] uppercase tracking-wider opacity-80 font-black">Call Our Experts</span>
                        <span className="text-lg">Free Roof Inspection</span>
                    </div>
                    <div className="bg-brand-dark text-brand-gold p-2 rounded-lg">
                        <Phone className="w-6 h-6 fill-current" />
                    </div>
                </a>
            </div>
        </div>
    );
};

export default MobileStickyCTA;
