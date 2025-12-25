import React from 'react';

interface SchemaOrgProps {
    type: 'LocalBusiness' | 'RoofingContractor' | 'FAQPage' | 'Service';
    data: any;
}

const SchemaOrg: React.FC<SchemaOrgProps> = ({ type, data }) => {
    let jsonLd: any = {
        "@context": "https://schema.org",
    };

    if (type === 'RoofingContractor') {
        jsonLd = {
            ...jsonLd,
            "@type": "RoofingContractor",
            "name": "1st Choice Roofing & Construction",
            "image": "https://1stchoiceroofs.com/logo.png",
            "@id": "https://1stchoiceroofs.com",
            "url": "https://1stchoiceroofs.com",
            "telephone": "+18325550123",
            "priceRange": "$$",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Main St",
                "addressLocality": "Tomball",
                "addressRegion": "TX",
                "postalCode": "77375",
                "addressCountry": "US"
            },
            "geo": {
                "@type": "GeoCoordinates",
                "latitude": 30.0975,
                "longitude": -95.6161
            },
            "serviceArea": [
                { "@type": "City", "name": "Tomball, TX" },
                { "@type": "City", "name": "Spring, TX" },
                { "@type": "City", "name": "The Woodlands, TX" },
                { "@type": "City", "name": "Houston, TX" },
                { "@type": "State", "name": "TX" }
            ],
            "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday"
                ],
                "opens": "07:00",
                "closes": "19:00"
            },
            ...data
        };
    } else if (type === 'FAQPage') {
        jsonLd = {
            ...jsonLd,
            "@type": "FAQPage",
            "mainEntity": data.map((faq: { q: string; a: string }) => ({
                "@type": "Question",
                "name": faq.q,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.a
                }
            }))
        };
    } else if (type === 'Service') {
        jsonLd = {
            ...jsonLd,
            "@type": "Service",
            "serviceType": data.service,
            "provider": {
                "@type": "LocalBusiness",
                "name": "1st Choice Roofing & Construction"
            },
            "areaServed": {
                "@type": "City",
                "name": data.location || "Tomball, TX"
            },
            "description": data.problem
        };
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
};

export default SchemaOrg;
