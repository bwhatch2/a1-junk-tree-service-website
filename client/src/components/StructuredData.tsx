/*
  STRUCTURED DATA (JSON-LD) COMPONENTS
  Provides schema.org markup for:
  - LocalBusiness (site-wide)
  - Service (individual service pages)
  - FAQPage (FAQ page)
  - BreadcrumbList (all pages)
  - WebSite (homepage)
*/

import { ServiceItem, serviceAreas, PHONE, BUSINESS_NAME } from "@/lib/services-data";

// ─── LOCAL BUSINESS SCHEMA ───
// Used on homepage and all pages via Layout
export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://a1junkremovalandtreeservice.com/#business",
    name: BUSINESS_NAME,
    alternateName: "A1 Junk Removal of Omaha",
    description:
      "Omaha's trusted junk removal, tree service, and landscaping company. Locally owned and operated. 40-60% less than national companies. 253+ five-star reviews.",
    url: "https://a1junkremovalandtreeservice.com",
    telephone: PHONE,
    email: "a1aborservice@gmail.com",
    priceRange: "$$",
    image: "https://a1junkremovalandtreeservice.com/og-image.jpg",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Omaha",
      addressLocality: "Omaha",
      addressRegion: "NE",
      postalCode: "68104",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 41.2565,
      longitude: -95.9345,
    },
    areaServed: serviceAreas.map((area) => ({
      "@type": "City",
      name: `${area.name}, NE`,
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "253",
      bestRating: "5",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "07:00",
        closes: "20:00",
      },
    ],
    sameAs: [
      "https://www.google.com/maps/place/A1+Junk+Removal+and+Tree+Trimming",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services",
      itemListElement: [
        {
          "@type": "OfferCatalog",
          name: "Junk Removal Services",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Furniture Removal" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Appliance Removal" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Construction Debris Removal" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Estate Cleanout" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Hot Tub Removal" } },
          ],
        },
        {
          "@type": "OfferCatalog",
          name: "Tree Services",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Tree Trimming" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Tree Removal" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Stump Grinding" } },
          ],
        },
        {
          "@type": "OfferCatalog",
          name: "Landscaping Services",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Lawn Mowing" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mulching" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sod Installation" } },
          ],
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ─── WEBSITE SCHEMA ───
// Used on homepage only
export function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: BUSINESS_NAME,
    url: "https://a1junkremovalandtreeservice.com",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate:
          "https://a1junkremovalandtreeservice.com/services?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ─── SERVICE SCHEMA ───
// Used on individual service pages
export function ServiceSchema({ service }: { service: ServiceItem }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.h1,
    description: service.metaDescription,
    provider: {
      "@type": "LocalBusiness",
      "@id": "https://a1junkremovalandtreeservice.com/#business",
      name: BUSINESS_NAME,
    },
    areaServed: serviceAreas.map((area) => ({
      "@type": "City",
      name: `${area.name}, NE`,
    })),
    serviceType: service.category,
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "USD",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "253",
      bestRating: "5",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ─── BREADCRUMB SCHEMA ───
// Used on all pages
export function BreadcrumbSchema({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `https://a1junkremovalandtreeservice.com${item.url}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ─── FAQ SCHEMA ───
// Used on FAQ page
export function FAQSchema({
  faqs,
}: {
  faqs: { question: string; answer: string }[];
}) {
  if (faqs.length === 0) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
