import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    const domain = 'https://1stchoiceroofs.com';

    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: [
                '/api/',
                '/_next/',
                '/static/',
            ],
        },
        sitemap: `${domain}/sitemap.xml`,
    };
}
