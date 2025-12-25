import React from 'react';
import { ExternalLink, Tag } from 'lucide-react';

interface ProjectProps {
    project: {
        title: string;
        category: string;
        description: string;
        images: string[];
        details: {
            materials: string[];
            features: string[];
        };
    };
}

const ProjectCard: React.FC<ProjectProps> = ({ project }) => {
    return (
        <div className="group relative bg-brand-dark border border-white/10 rounded-[2.5rem] overflow-hidden transition-all hover:border-brand-gold/30 hover:shadow-[0_20px_50px_rgba(212,175,55,0.1)]">
            {/* Image Container */}
            <div className="relative aspect-[4/3] overflow-hidden">
                <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-60" />

                {/* Category Badge */}
                <div className="absolute top-6 left-6 px-4 py-1.5 rounded-full bg-brand-dark/80 backdrop-blur-md border border-white/10 flex items-center gap-2">
                    <Tag className="w-3 h-3 text-brand-gold" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-white">
                        {project.category}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-8">
                <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter group-hover:text-brand-gold transition-colors">
                    {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-8 line-clamp-2">
                    {project.description}
                </p>

                {/* Details Summary */}
                <div className="flex flex-wrap gap-2 mb-8">
                    {project.details.materials.slice(0, 2).map((material, idx) => (
                        <span key={idx} className="text-[9px] font-bold uppercase tracking-widest text-brand-gold/60 border border-brand-gold/20 px-2 py-1 rounded">
                            {material}
                        </span>
                    ))}
                </div>

                <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">
                        {project.details.features.length} Premium Features
                    </span>
                    <div className="flex items-center gap-2 text-brand-gold font-bold text-xs uppercase tracking-widest group-hover:translate-x-1 transition-transform">
                        View Project
                        <ExternalLink className="w-4 h-4" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
