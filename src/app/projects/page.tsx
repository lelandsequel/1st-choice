'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import projectsData from '@/data/projects.json';

const ALL_CATEGORY = 'All';

export default function ProjectsPage() {
    const categories = [ALL_CATEGORY, ...Array.from(new Set(projectsData.map(p => p.category)))];
    const [activeCategory, setActiveCategory] = useState(ALL_CATEGORY);

    const filteredProjects = activeCategory === ALL_CATEGORY
        ? projectsData
        : projectsData.filter(p => p.category === activeCategory);

    return (
        <main className="min-h-screen bg-brand-dark">
            <Header />

            <header className="container mx-auto px-6 pt-40 pb-20 border-b border-white/5">
                <div className="max-w-4xl">
                    <div className="text-brand-gold text-xs font-bold uppercase tracking-widest mb-4">
                        Our Portfolio
                    </div>
                    <h1 className="text-5xl md:text-7xl font-heading font-black text-white leading-tight mb-8 tracking-tighter">
                        Craftsmanship in <br />
                        <span className="text-brand-gold">Every Detail.</span>
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">
                        Explore our completed projects across the Greater Houston area. From custom patio covers to high-performance roofing systems, we deliver precise results built to last.
                    </p>
                </div>
            </header>

            {/* Filter Bar */}
            <section className="sticky top-[80px] z-30 bg-brand-dark/80 backdrop-blur-md border-b border-white/5 py-6">
                <div className="container mx-auto px-6">
                    <div className="flex items-center gap-4 overflow-x-auto pb-4 md:pb-0 no-scrollbar">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`whitespace-nowrap px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all ${activeCategory === category
                                        ? 'bg-brand-gold text-brand-dark'
                                        : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            <section className="container mx-auto px-6 py-20 lg:py-32">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project) => (
                        <ProjectCard key={project.slug} project={project} />
                    ))}
                </div>

                {filteredProjects.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-gray-500 uppercase tracking-widest font-bold">No projects found in this category.</p>
                    </div>
                )}
            </section>

            <Footer />
        </main>
    );
}
