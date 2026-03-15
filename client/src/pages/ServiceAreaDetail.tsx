import { useEffect } from "react";
import { Link, useParams } from "wouter";
import { serviceAreas, serviceCategories, junkServicePages, PHONE, PHONE_LINK, CTA_BG_IMG, PLACEHOLDER_IMG, BUSINESS_NAME } from "@/lib/services-data";
import { Phone, ArrowRight, MapPin, Star, CheckCircle } from "lucide-react";

export default function ServiceAreaDetail() {
  const params = useParams<{ slug: string }>();
  const area = serviceAreas.find((a) => a.slug === params.slug);

  useEffect(() => {
    if (area) {
      document.title = `Junk Removal & Tree Service in ${area.name} | ${BUSINESS_NAME}`;
      const meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute("content", `A1 Junk Removal and Tree Service proudly serves ${area.name}, ${area.state}. Junk removal, tree trimming, cleanouts, and more. Call (402) 612-2373 for a free estimate.`);
    }
  }, [area]);

  if (!area) {
    return (
      <div className="py-20 text-center">
        <h1 className="font-display text-4xl text-[#0A1628] font-bold mb-4">Area Not Found</h1>
        <Link href="/service-areas" className="text-[#E8611A] font-semibold">View All Service Areas</Link>
      </div>
    );
  }

  const treeCategory = serviceCategories.find(c => c.slug === "tree-service");
  const topServices = junkServicePages.slice(0, 6);

  return (
    <div>
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-[#0A1628]">Home</Link>
            <span>/</span>
            <Link href="/service-areas" className="hover:text-[#0A1628]">Service Areas</Link>
            <span>/</span>
            <span className="text-[#0A1628] font-medium">{area.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="relative py-16 lg:py-24 bg-[#0A1628] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={PLACEHOLDER_IMG} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#E8611A]/20 text-[#E8611A] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
              <MapPin className="w-3.5 h-3.5" />
              Service Area
            </div>
            <h1 className="font-display text-4xl lg:text-6xl text-white font-bold mb-6">
              JUNK REMOVAL &amp; TREE SERVICE IN {area.name.toUpperCase()}
            </h1>
            <p className="text-white/80 text-lg lg:text-xl leading-relaxed mb-8">
              {BUSINESS_NAME} proudly serves {area.name}, {area.state} and the surrounding neighborhoods.
              Whether you need junk hauled away or trees trimmed, we're your local team. Same honest pricing,
              same hard work, same five-star service.
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

      {/* Services Available */}
      <section className="py-16 lg:py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Junk Removal */}
            <div>
              <h2 className="font-display text-2xl text-[#0A1628] font-bold mb-6 flex items-center gap-2">
                <span className="w-8 h-1 bg-[#E8611A] rounded-full" />
                Junk Removal in {area.name}
              </h2>
              <div className="space-y-3">
                {topServices.map((svc) => (
                  <Link
                    key={svc.slug}
                    href={`/${svc.slug}`}
                    className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
                  >
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#E8611A]" />
                    <span className="text-gray-700 group-hover:text-[#0A1628]">{svc.title} in {area.name}</span>
                  </Link>
                ))}
                <Link href="/junk-removal" className="block text-[#E8611A] font-semibold text-sm mt-4 hover:underline">
                  View All 40 Junk Removal Services →
                </Link>
              </div>
            </div>

            {/* Tree Service */}
            <div>
              <h2 className="font-display text-2xl text-[#0A1628] font-bold mb-6 flex items-center gap-2">
                <span className="w-8 h-1 bg-[#7A9E7E] rounded-full" />
                Tree Service in {area.name}
              </h2>
              <div className="space-y-3">
                {treeCategory?.services.map((svc) => (
                  <Link
                    key={svc.slug}
                    href={`/tree-service/${svc.slug}`}
                    className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
                  >
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#7A9E7E]" />
                    <span className="text-gray-700 group-hover:text-[#0A1628]">{svc.h1.replace(" in Omaha", ` in ${area.name}`)}</span>
                  </Link>
                ))}
                <Link href="/tree-service" className="block text-[#7A9E7E] font-semibold text-sm mt-4 hover:underline">
                  View All Tree Services →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="font-display text-3xl text-[#0A1628] font-bold mb-8 text-center">
            WHY {area.name.toUpperCase()} CHOOSES A1
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              "40-60% less than national franchises",
              "Same-day service available",
              "Locally owned — not a call center",
              "Fully licensed and insured",
              "253+ five-star Google reviews",
              "We clean up when we're done",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#E8611A] mt-0.5 flex-shrink-0" />
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Areas */}
      <section className="py-16">
        <div className="container">
          <h2 className="font-display text-2xl text-[#0A1628] font-bold mb-6">
            OTHER AREAS WE SERVE
          </h2>
          <div className="flex flex-wrap gap-3">
            {serviceAreas.filter(a => a.slug !== area.slug).map((otherArea) => (
              <Link
                key={otherArea.slug}
                href={`/service-areas/${otherArea.slug}`}
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full text-sm transition-colors"
              >
                {otherArea.name}
              </Link>
            ))}
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
            NEED SERVICE IN {area.name.toUpperCase()}?
          </h2>
          <p className="text-white/70 text-lg mb-8">Free estimates, no obligation.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={PHONE_LINK} className="inline-flex items-center justify-center gap-2 bg-[#E8611A] text-white px-8 py-4 rounded font-bold text-lg">
              <Phone className="w-5 h-5" /> CALL {PHONE}
            </a>
            <Link href="/free-estimate" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded font-bold text-lg hover:bg-white/10 transition-colors">
              REQUEST ONLINE ESTIMATE
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
