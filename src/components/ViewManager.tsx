'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

type ViewMode = 'site' | 'presentation';

interface ViewContextType {
    mode: ViewMode;
    setMode: (mode: ViewMode) => void;
}

const ViewContext = createContext<ViewContextType | undefined>(undefined);

export const ViewProvider = ({ children }: { children: ReactNode }) => {
    const [mode, setMode] = useState<ViewMode>('site');

    return (
        <ViewContext.Provider value={{ mode, setMode }}>
            {children}
        </ViewContext.Provider>
    );
};

export const useView = () => {
    const context = useContext(ViewContext);
    if (context === undefined) {
        throw new Error('useView must be used within a ViewProvider');
    }
    return context;
};

interface ViewManagerProps {
    site: React.ReactNode;
    presentation: React.ReactNode;
}

export const ViewManager = ({ site, presentation }: ViewManagerProps) => {
    const { mode } = useView();

    return (
        <div className="relative min-h-screen bg-brand-dark">
            <div className={`transition-all duration-700 ease-in-out ${mode === 'site' ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                {site}
            </div>
            <div className={`fixed inset-0 transition-all duration-700 ease-in-out ${mode === 'presentation' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
                {presentation}
            </div>
        </div>
    );
};
