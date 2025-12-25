import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import services from '@/data/services.json';
import locations from '@/data/locations.json';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
    const params = [];
    for (const service of services) {
        for (const location of locations) {
            params.push({
                slug: `${service.slug}-${location.slug}`,
            });
        }
    }
    return params;
}

export default function ServiceLocationPage({ params }: { params: { slug: string } }) {
    // Find service and location based on slug (format: service-slug-location-slug)
    const service = services.find(s => params.slug.startsWith(s.slug));
    const location = locations.find(l => params.slug.endsWith(l.slug));

    if (!service || !location) {
        notFound();
    }

    // Combine data for the template
    const combinedData = {
        ...service,
        location: `${location.city}, TX`,
        problem: `${service.problem} For homeowners in ${location.city}, the local weather conditions often exacerbate these issues.`,
        faqs: [
            ...service.faqs,
            ...location.faqs
        ]
    };

    return (
        <main>
            <Header />
            <ServicePageTemplate {...combinedData} />
            <Footer />
        </main>
    );
}
