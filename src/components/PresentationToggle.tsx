'use client';

import React from 'react';
import { Presentation as PresentationIcon, MousePointer2 } from 'lucide-react';
import { useView } from './ViewManager';

const PresentationToggle = () => {
    const { mode, setMode } = useView();

    return (
        <div className="fixed top-36 left-1/2 -translate-x-1/2 z-[60] flex items-center gap-1 p-1 bg-brand-dark/95 backdrop-blur-md border border-brand-gold/20 rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
            <button
                onClick={() => setMode('site')}
                className={`flex items-center gap-2 px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${mode === 'site'
                    ? 'bg-brand-gold text-brand-dark shadow-lg shadow-brand-gold/20'
                    : 'text-gray-400 hover:text-white'
                    }`}
            >
                <MousePointer2 className="w-3" />
                Website
            </button>
            <button
                onClick={() => setMode('presentation')}
                className={`flex items-center gap-2 px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${mode === 'presentation'
                    ? 'bg-brand-gold text-brand-dark shadow-lg shadow-brand-gold/20'
                    : 'text-gray-400 hover:text-white'
                    }`}
            >
                <PresentationIcon className="w-3" />
                Strategy Deck
            </button>
        </div>
    );
};

export default PresentationToggle;
