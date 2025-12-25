import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, Clock, ShieldCheck } from 'lucide-react';

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-brand-dark">
            <Header />

            <section className="pt-40 pb-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                            <div>
                                <div className="text-brand-gold text-xs font-bold uppercase tracking-widest mb-4">Contact Us</div>
                                <h1 className="text-4xl md:text-5xl font-heading font-black text-white mb-8">
                                    Get Your <span className="text-brand-gold text-white underline decoration-brand-gold/30 underline-offset-8">Free Inspection</span> Today
                                </h1>
                                <p className="text-gray-400 text-lg mb-12 leading-relaxed">
                                    Whether you have storm damage, a persistent leak, or it's simply time for a new roof, our team is ready to provide a professional assessment and honest advice.
                                </p>

                                <div className="space-y-8">
                                    <div className="flex items-start gap-6 group">
                                        <div className="w-14 h-14 rounded-2xl bg-brand-gold flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                            <Phone className="w-6 h-6 text-brand-dark fill-current" />
                                        </div>
                                        <div>
                                            <div className="text-[10px] uppercase font-bold tracking-widest text-brand-gold mb-1">Call Us 24/7</div>
                                            <a href="tel:+18325550123" className="text-2xl font-black text-white hover:text-brand-gold transition-colors">(832) 555-0123</a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-6 group">
                                        <div className="w-14 h-14 rounded-2xl bg-brand-slate/20 border border-brand-slate/30 flex items-center justify-center shrink-0 shadow-lg">
                                            <Mail className="w-6 h-6 text-brand-gold" />
                                        </div>
                                        <div>
                                            <div className="text-[10px] uppercase font-bold tracking-widest text-gray-500 mb-1">Email Support</div>
                                            <a href="mailto:office@1stchoiceroofs.com" className="text-xl font-bold text-white hover:text-brand-gold transition-colors">office@1stchoiceroofs.com</a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-6 group">
                                        <div className="w-14 h-14 rounded-2xl bg-brand-slate/20 border border-brand-slate/30 flex items-center justify-center shrink-0 shadow-lg">
                                            <MapPin className="w-6 h-6 text-brand-gold" />
                                        </div>
                                        <div>
                                            <div className="text-[10px] uppercase font-bold tracking-widest text-gray-500 mb-1">Local Office</div>
                                            <p className="text-xl font-bold text-white">Tomball, TX<br />Greater Houston Area</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-16 p-8 bg-brand-gold/5 border border-brand-gold/20 rounded-3xl flex items-center gap-4">
                                    <ShieldCheck className="w-10 h-10 text-brand-gold shrink-0" />
                                    <p className="text-sm text-gray-300">
                                        <strong className="text-white">Fully Licensed & Insured.</strong> Your property is protected when you choose Houston's premier roofing experts.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-brand-slate/10 border border-brand-slate/20 p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
                                {/* Decorative background */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 blur-3xl -mr-16 -mt-16" />

                                <h2 className="text-2xl font-bold text-white mb-8">Service Hours</h2>
                                <div className="space-y-4">
                                    {[
                                        { day: "Monday - Friday", hours: "7:00 AM - 7:00 PM" },
                                        { day: "Saturday", hours: "8:00 AM - 4:00 PM" },
                                        { day: "Sunday", hours: "Emergency Response Only" }
                                    ].map((item, i) => (
                                        <div key={i} className="flex justify-between items-center py-4 border-b border-brand-slate/10 last:border-0 hover:bg-white/5 transition-all px-2 rounded-lg">
                                            <span className="text-white font-medium">{item.day}</span>
                                            <span className="text-brand-gold font-bold">{item.hours}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-12 space-y-4">
                                    <a
                                        href="tel:+18325550123"
                                        className="flex items-center justify-center gap-3 w-full py-5 bg-brand-gold text-brand-dark rounded-2xl font-black text-xl hover:bg-brand-accent transition-all shadow-[0_0_40px_rgba(212,175,55,0.2)]"
                                    >
                                        <Phone className="w-6 h-6 fill-current" />
                                        Call to Schedule
                                    </a>
                                    <p className="text-center text-xs text-gray-500 font-medium italic">
                                        Average response time for inspections is under 24 hours.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
