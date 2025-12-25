import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LocationPageTemplate from '@/components/LocationPageTemplate';
import locations from '@/data/locations.json';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
    return locations.map((l) => ({
        city: l.slug,
    }));
}

export default function LocationPage({ params }: { params: { city: string } }) {
    const locationData = locations.find((l) => l.slug === params.city);

    if (!locationData) {
        notFound();
    }

    return (
        <main>
            <Header />
            <LocationPageTemplate {...locationData} />
            <Footer />
        </main>
    );
}
