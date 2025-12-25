import { MetadataRoute } from 'next';
import services from '@/data/services.json';
import locations from '@/data/locations.json';
import guides from '@/data/guides.json';

export default function sitemap(): MetadataRoute.Sitemap {
    const domain = 'https://1stchoiceroofs.com';

    const corePages = [
        '',
        '/services',
        '/locations',
        '/roofing-guides',
        '/about',
        '/contact',
    ].map(route => ({
        url: `${domain}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    const servicePages = services.map(s => ({
        url: `${domain}/services/${s.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    const locationPages = locations.map(l => ({
        url: `${domain}/locations/${l.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    const guidePages = guides.map(g => ({
        url: `${domain}/roofing-guides/${g.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.6,
    }));

    // Add pSEO pages (Service + Location)
    const pseoPages = [];
    for (const s of services) {
        for (const l of locations) {
            pseoPages.push({
                url: `${domain}/${s.slug}-${l.slug}`,
                lastModified: new Date(),
                changeFrequency: 'monthly' as const,
                priority: 0.5,
            });
        }
    }

    return [...corePages, ...servicePages, ...locationPages, ...guidePages, ...pseoPages];
}
