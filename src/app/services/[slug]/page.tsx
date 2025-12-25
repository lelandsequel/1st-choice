import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import services from '@/data/services.json';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
    return services.map((s) => ({
        slug: s.slug,
    }));
}

export default function ServicePage({ params }: { params: { slug: string } }) {
    const serviceData = services.find((s) => s.slug === params.slug);

    if (!serviceData) {
        notFound();
    }

    return (
        <main>
            <Header />
            <ServicePageTemplate {...serviceData} />
            <Footer />
        </main>
    );
}
