/*
  SERVICE PAGE TEMPLATE
  Reusable component for all 75+ individual service pages.
  SEO-optimized with: unique H1, meta description, structured content,
  related services (internal linking), service area links, and CTAs.
*/

import { useEffect } from "react";
import { Link } from "wouter";
import {
  ServiceItem,
  getRelatedServices,
  PHONE,
  PHONE_LINK,
  PLACEHOLDER_IMG,
  CTA_BG_IMG,
  serviceAreas,
  BUSINESS_NAME,
} from "@/lib/services-data";
import {
  Phone,
  ArrowRight,
  CheckCircle,
  Star,
  MapPin,
  Clock,
  Shield,
  DollarSign,
} from "lucide-react";
import { ServiceSchema, BreadcrumbSchema } from "@/components/StructuredData";

interface ServicePageProps {
  service: ServiceItem;
  isTreeService?: boolean;
  serviceType?: "junk" | "tree" | "landscaping";
}

export default function ServicePage({ service, isTreeService = false, serviceType }: ServicePageProps) {
  const relatedServices = getRelatedServices(service.relatedSlugs);
  const resolvedType = serviceType || (isTreeService ? "tree" : "junk");
  const accentColor = resolvedType === "junk" ? "#E8611A" : "#7A9E7E";
  const basePath = resolvedType === "tree" ? "/tree-service" : resolvedType === "landscaping" ? "/landscaping" : "/services";

  // Set page title and meta
  useEffect(() => {
    document.title = service.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", service.metaDescription);
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = service.metaDescription;
      document.head.appendChild(meta);
    }
  }, [service]);

  const breadcrumbLabel = resolvedType === "tree" ? "Tree Service" : resolvedType === "landscaping" ? "Landscaping" : "Junk Removal";

  return (
    <div>
      <ServiceSchema service={service} />
      <BreadcrumbSchema items={[
        { name: "Home", url: "/" },
        { name: breadcrumbLabel, url: basePath },
        { name: service.h1.replace(" in Omaha", ""), url: `${basePath}/${service.slug}` },
      ]} />
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-[#0A1628]">Home</Link>
            <span>/</span>
            <Link href={basePath} className="hover:text-[#0A1628]">
              {resolvedType === "tree" ? "Tree Service" : resolvedType === "landscaping" ? "Landscaping" : "Junk Removal"}
            </Link>
            <span>/</span>
            <span className="text-[#0A1628] font-medium">{service.h1.replace(" in Omaha", "")}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-[#0A1628] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src={PLACEHOLDER_IMG}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4"
              style={{ backgroundColor: `${accentColor}20`, color: accentColor }}
            >
              {service.category}
            </div>
            <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl text-white font-bold mb-6">
              {service.h1}
            </h1>
            <p className="text-white/80 text-lg lg:text-xl leading-relaxed mb-8">
              {service.shortDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/free-estimate"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded font-bold text-lg transition-colors"
                style={{ backgroundColor: accentColor, color: "white" }}
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

      {/* Main Content */}
      <section className="py-16 lg:py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Content */}
            <div className="lg:col-span-2">
              <h2 className="font-display text-3xl text-[#0A1628] font-bold mb-6">
                {service.h1.replace("in Omaha", "— Done Right")}
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p>{service.description}</p>
                <p>
                  At {BUSINESS_NAME}, we're not a franchise and we don't have a call center.
                  When you call us, you talk to Bryan — the owner. We show up when we say we will,
                  charge a fair price, and get the job done right. That's how we've earned over 253
                  five-star reviews from customers across the Omaha metro.
                </p>
              </div>

              {/* Why Choose Us */}
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: DollarSign, title: "40-60% Less", desc: "Than national companies. No franchise fees." },
                  { icon: Clock, title: "Same-Day Service", desc: "Call in the morning, we can be there by afternoon." },
                  { icon: Shield, title: "Fully Insured", desc: "Licensed and insured for your peace of mind." },
                  { icon: Star, title: "253+ Reviews", desc: "Five-star rated on Google by real customers." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 p-4 bg-gray-50 rounded-lg">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${accentColor}15` }}
                    >
                      <item.icon className="w-5 h-5" style={{ color: accentColor }} />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#0A1628] text-sm">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Service Image Placeholder */}
              <div className="mt-10 bg-gray-100 rounded-xl overflow-hidden aspect-video flex items-center justify-center">
                <img
                  src={PLACEHOLDER_IMG}
                  alt={service.h1}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-xs text-gray-400 mt-2 italic">
                Photo needed: {service.photoNeeded}
              </p>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* CTA Card */}
              <div className="bg-[#0A1628] rounded-xl p-6 text-white">
                <h3 className="font-display text-xl font-bold mb-2">
                  Get a Free Estimate
                </h3>
                <p className="text-white/70 text-sm mb-4">
                  Tell us what you need and we'll give you an honest price. No obligation, no pressure.
                </p>
                <Link
                  href="/free-estimate"
                  className="block text-center py-3 rounded font-bold text-white mb-3 transition-colors"
                  style={{ backgroundColor: accentColor }}
                >
                  REQUEST ESTIMATE
                </Link>
                <a
                  href={PHONE_LINK}
                  className="block text-center py-3 rounded font-bold border border-white/30 text-white hover:bg-white/10 transition-colors"
                >
                  <Phone className="w-4 h-4 inline mr-2" />
                  {PHONE}
                </a>
              </div>

              {/* Related Services */}
              {relatedServices.length > 0 && (
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-display text-lg font-bold text-[#0A1628] mb-4">
                    Related Services
                  </h3>
                  <ul className="space-y-2">
                    {relatedServices.map((rs) => (
                      <li key={rs.slug}>
                        <Link
                          href={
                            rs.categorySlug === "tree-service"
                              ? `/tree-service/${rs.slug}`
                              : rs.categorySlug === "landscaping"
                                ? `/landscaping/${rs.slug}`
                                : `/services/${rs.slug}`
                          }
                          className="flex items-center gap-2 text-gray-700 hover:text-[#E8611A] text-sm transition-colors group"
                        >
                          <ArrowRight className="w-3 h-3 text-gray-400 group-hover:text-[#E8611A] transition-colors" />
                          {rs.h1.replace(" in Omaha", "")}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Service Areas */}
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="font-display text-lg font-bold text-[#0A1628] mb-4">
                  We Serve
                </h3>
                <div className="flex flex-wrap gap-2">
                  {serviceAreas.map((area) => (
                    <Link
                      key={area.slug}
                      href={`/service-areas/${area.slug}`}
                      className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs rounded-full transition-colors"
                    >
                      {area.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Review Snippet */}
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm italic mb-3">
                  "Bryan and his crew were amazing. Fast, fair price, and they cleaned up everything.
                  Highly recommend!"
                </p>
                <p className="text-gray-500 text-xs font-medium">— Google Review</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-[#0A1628] overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img src={CTA_BG_IMG} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628] via-[#0A1628]/80 to-transparent" />
        <div className="container relative z-10 text-center">
          <h2 className="font-display text-3xl lg:text-5xl text-white font-bold mb-4">
            READY TO GET STARTED?
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            Free estimates, no obligation. Call Bryan directly or request your estimate online.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={PHONE_LINK}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded font-bold text-lg text-white transition-colors"
              style={{ backgroundColor: accentColor }}
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
