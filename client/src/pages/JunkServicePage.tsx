/*
  JUNK SERVICE PLACEHOLDER PAGE
  Clean placeholder layout for the 40 new root-level junk removal service pages.
  Each page has: title, breadcrumb, placeholder content area, and CTA.
  Content will be filled in over time.
*/

import { useEffect } from "react";
import { Link, useLocation } from "wouter";
import {
  junkServicePages,
  PHONE,
  PHONE_LINK,
  BUSINESS_NAME,
  PLACEHOLDER_IMG,
  CTA_BG_IMG,
} from "@/lib/services-data";
import { Phone, ArrowRight, Clock, Star, MapPin, Shield, DollarSign } from "lucide-react";

export default function JunkServicePage() {
  const [location] = useLocation();
  const slug = location.replace(/^\//, ""); // strip leading slash
  const service = junkServicePages.find((s) => s.slug === slug);

  useEffect(() => {
    if (service) {
      document.title = `${service.title} Omaha | ${BUSINESS_NAME}`;
      const metaDesc = document.querySelector('meta[name="description"]');
      const content = `${service.title} in Omaha, NE. ${BUSINESS_NAME} provides fast, affordable ${service.title.toLowerCase()}. Call ${PHONE} for a free estimate.`;
      if (metaDesc) {
        metaDesc.setAttribute("content", content);
      } else {
        const meta = document.createElement("meta");
        meta.name = "description";
        meta.content = content;
        document.head.appendChild(meta);
      }
    }
  }, [service]);

  if (!service) {
    return (
      <div className="py-20 text-center">
        <h1 className="font-display text-4xl text-[#0A1628] font-bold mb-4">Service Not Found</h1>
        <p className="text-gray-600 mb-6">The service you're looking for doesn't exist.</p>
        <Link href="/junk-removal" className="text-[#E8611A] font-semibold hover:underline">
          View All Junk Removal Services
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": `${service.title} Omaha`,
            "description": `Professional ${service.title.toLowerCase()} services in Omaha, NE. Fast, affordable, and locally owned.`,
            "provider": {
              "@type": "LocalBusiness",
              "name": BUSINESS_NAME,
              "telephone": PHONE,
              "url": "https://a1junkremovalandtreeserviceofomaha.com",
            },
            "areaServed": {
              "@type": "City",
              "name": "Omaha",
              "addressRegion": "NE",
            },
          }),
        }}
      />

      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://a1junkremovalandtreeserviceofomaha.com/" },
              { "@type": "ListItem", "position": 2, "name": "Junk Removal", "item": "https://a1junkremovalandtreeserviceofomaha.com/junk-removal" },
              { "@type": "ListItem", "position": 3, "name": service.title, "item": `https://a1junkremovalandtreeserviceofomaha.com/${service.slug}` },
            ],
          }),
        }}
      />

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-[#0A1628]">Home</Link>
            <span>/</span>
            <Link href="/junk-removal" className="hover:text-[#0A1628]">Junk Removal</Link>
            <span>/</span>
            <span className="text-[#0A1628] font-medium">{service.title}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="relative py-16 lg:py-24 bg-[#0A1628] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={PLACEHOLDER_IMG} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628] via-[#0A1628]/80 to-transparent" />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block bg-[#E8611A]/20 text-[#E8611A] px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              {service.category}
            </div>
            <h1 className="font-display text-4xl lg:text-6xl text-white font-bold mb-6 uppercase">
              {service.title} in Omaha
            </h1>
            <p className="text-white/80 text-lg lg:text-xl leading-relaxed mb-8">
              Professional {service.title.toLowerCase()} services in Omaha and surrounding areas.
              Locally owned, 40-60% less than the national companies. Call or text for a free estimate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/free-estimate"
                className="inline-flex items-center justify-center gap-2 bg-[#E8611A] hover:bg-[#d4570f] text-white px-8 py-4 rounded font-bold text-lg transition-colors"
              >
                GET YOUR FREE ESTIMATE
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href={PHONE_LINK}
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded font-bold text-lg hover:bg-white/10 transition-colors"
              >
                <Phone className="w-5 h-5" />
                CALL {PHONE}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-3">
              <Star className="w-8 h-8 text-[#E8611A]" />
              <div>
                <p className="font-bold text-[#0A1628]">253+ Reviews</p>
                <p className="text-sm text-gray-500">4.9 Star Average</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <DollarSign className="w-8 h-8 text-[#E8611A]" />
              <div>
                <p className="font-bold text-[#0A1628]">40-60% Less</p>
                <p className="text-sm text-gray-500">Than National Companies</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-8 h-8 text-[#E8611A]" />
              <div>
                <p className="font-bold text-[#0A1628]">7 Days a Week</p>
                <p className="text-sm text-gray-500">Same-Day Available</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Shield className="w-8 h-8 text-[#E8611A]" />
              <div>
                <p className="font-bold text-[#0A1628]">Locally Owned</p>
                <p className="text-sm text-gray-500">Serving Omaha Metro</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Placeholder Content Area */}
      <section className="py-16 lg:py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl lg:text-4xl text-[#0A1628] font-bold mb-6">
              {service.title} in Omaha, NE
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                When you need <strong>{service.title.toLowerCase()}</strong> in Omaha, <strong>{BUSINESS_NAME}</strong> is
                the team to call. We're a locally owned and operated company that handles jobs big and small across the
                Omaha metro area, including Bellevue, Papillion, La Vista, Elkhorn, Gretna, and Council Bluffs.
              </p>
              <p>
                Our crew shows up on time, works hard, and leaves your space clean. We've earned <strong>253+ five-star
                reviews</strong> by treating every customer's property like our own. And because we're local — not a
                national franchise — our prices are typically <strong>40-60% less</strong> than the big companies.
              </p>
              <p>
                Call or text <strong>{PHONE}</strong> for a free, no-obligation estimate. We're available 7 days a week.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 bg-[#0A1628] overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img src={CTA_BG_IMG} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628] via-[#0A1628]/80 to-transparent" />
        <div className="container relative z-10 text-center">
          <h2 className="font-display text-3xl lg:text-5xl text-white font-bold mb-4">
            READY TO GET RID OF IT?
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            Get a free estimate for {service.title.toLowerCase()} in Omaha. No hidden fees, no hassle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={PHONE_LINK}
              className="inline-flex items-center justify-center gap-2 bg-[#E8611A] text-white px-8 py-4 rounded font-bold text-lg transition-colors"
            >
              <Phone className="w-5 h-5" />
              CALL {PHONE}
            </a>
            <Link
              href="/free-estimate"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded font-bold text-lg hover:bg-white/10 transition-colors"
            >
              REQUEST ONLINE ESTIMATE
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
