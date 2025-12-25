import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GuidePageTemplate from '@/components/GuidePageTemplate';
import guides from '@/data/guides.json';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
    return guides.map((g) => ({
        question: g.slug,
    }));
}

export default function GuidePage({ params }: { params: { question: string } }) {
    const guideData = guides.find((g) => g.slug === params.question);

    if (!guideData) {
        notFound();
    }

    return (
        <main>
            <Header />
            <GuidePageTemplate {...guideData} />
            <Footer />
        </main>
    );
}
