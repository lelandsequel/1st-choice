import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-brand-dark border-t border-brand-slate/30 pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Company Info */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-2">
                            <ShieldCheck className="w-8 h-8 text-brand-gold" />
                            <div className="flex flex-col leading-tight">
                                <span className="font-heading font-bold text-xl tracking-tight text-white uppercase">
                                    1st Choice
                                </span>
                                <span className="text-[10px] text-brand-gold tracking-[0.2em] font-medium uppercase">
                                    Roofing & Construction
                                </span>
                            </div>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            1st Choice Roofing & Construction provides professional roofing and construction services for homeowners and property managers in Tomball, TX and the Greater Houston Area. Trusted local expertise, licensed and insured.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Services</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><Link href="/projects" className="text-white font-black hover:text-brand-gold transition-colors">View Portfolio</Link></li>
                            <li><Link href="/services/roof-repair" className="hover:text-brand-gold">Roof Repair</Link></li>
                            <li><Link href="/services/roof-replacement" className="hover:text-brand-gold">Roof Replacement</Link></li>
                            <li><Link href="/services/roof-inspection" className="hover:text-brand-gold">Free Roof Inspection</Link></li>
                        </ul>
                    </div>

                    {/* Service Areas */}
                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Service Areas</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><Link href="/locations/tomball-tx" className="hover:text-brand-gold">Tomball, TX</Link></li>
                            <li><Link href="/locations/spring-tx" className="hover:text-brand-gold">Spring, TX</Link></li>
                            <li><Link href="/locations/the-woodlands-tx" className="hover:text-brand-gold">The Woodlands, TX</Link></li>
                            <li><Link href="/locations/houston-tx" className="hover:text-brand-gold">Houston, TX</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-6">
                        <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Headquarters</h4>
                        <div className="space-y-4 text-gray-400 text-sm">
                            <div className="font-bold text-white uppercase tracking-tight">1st Choice Roofing & Construction</div>
                            <div className="flex items-start gap-3">
                                <MapPin className="w-4 h-4 text-brand-gold shrink-0 mt-1" />
                                <address className="not-italic leading-relaxed">
                                    Tomball, TX 77375<br />
                                    Greater Houston Area
                                </address>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="w-4 h-4 text-brand-gold" />
                                <a href="tel:+18325550123" className="hover:text-brand-gold font-bold text-white">(832) 555-0123</a>
                            </div>
                            <div className="pt-4 border-t border-brand-slate/10">
                                <p className="text-[10px] uppercase font-bold tracking-widest text-gray-500">Service Area</p>
                                <p className="text-xs mt-2">Tomball, Spring, The Woodlands, Houston & Surrounding Greater Houston Area</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-brand-slate/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-gray-500 font-medium">
                    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                        <p>© {currentYear} 1st Choice Roofing & Construction.</p>
                        <p className="text-brand-gold/60 font-bold px-3 py-1 border border-brand-gold/20 rounded-full">Fully Licensed & Insured</p>
                    </div>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
