/*
  JUNK REMOVAL HUB PAGE
  Lists all 40 junk removal services organized by category.
  Acts as the main "Junk Removal" landing page at /junk-removal.
*/

import { useEffect } from "react";
import { Link } from "wouter";
import {
  getJunkNavCategories,
  PHONE,
  PHONE_LINK,
  HERO_JUNK_IMG,
  CTA_BG_IMG,
} from "@/lib/services-data";
import { ArrowRight, Phone, Truck, Home, HardHat, Package, TreePine, Building } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  "General Junk Removal": Truck,
  "Cleanouts": Home,
  "Commercial": Building,
  "Item Removal": Package,
  "Demolition & Outdoor": HardHat,
  "Yard & Materials": TreePine,
};

export default function Services() {
  useEffect(() => {
    document.title = "Junk Removal Services Omaha | A1 Junk Removal and Tree Service";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "A1 Junk Removal offers 40 specialized junk removal services in Omaha. From residential cleanouts to construction debris, we handle it all. Call (402) 612-2373.");
  }, []);

  const junkCategories = getJunkNavCategories();

  return (
    <div>
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-[#0A1628]">Home</Link>
            <span>/</span>
            <span className="text-[#0A1628] font-medium">Junk Removal Services</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="relative py-16 lg:py-24 bg-[#0A1628] overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img src={HERO_JUNK_IMG} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628] via-[#0A1628]/80 to-transparent" />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl lg:text-6xl text-white font-bold mb-6">
              JUNK REMOVAL SERVICES IN OMAHA
            </h1>
            <p className="text-white/80 text-lg lg:text-xl leading-relaxed mb-8">
              40 specialized junk removal services. From a single appliance to a full estate
              cleanout, we handle it all. Locally owned, 40-60% less than the national companies.
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

      {/* Service Categories */}
      <section className="py-16 lg:py-20">
        <div className="container">
          {junkCategories.map((cat, idx) => {
            const Icon = iconMap[cat.name] || Truck;
            return (
              <div key={cat.name} className={`${idx > 0 ? "mt-16" : ""}`}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-[#E8611A]/10 rounded-lg flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#E8611A]" />
                  </div>
                  <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold">
                    {cat.name}
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {cat.services.map((svc) => (
                    <Link
                      key={svc.slug}
                      href={`/${svc.slug}`}
                      className="group flex items-start gap-3 p-4 bg-white border border-gray-200 rounded-lg hover:border-[#E8611A] hover:shadow-md transition-all"
                    >
                      <ArrowRight className="w-4 h-4 mt-1 text-gray-400 group-hover:text-[#E8611A] transition-colors flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-[#0A1628] group-hover:text-[#E8611A] transition-colors">
                          {svc.title}
                        </h3>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
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
            DON'T SEE YOUR ITEM LISTED?
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            We remove just about anything. If it's not on the list, give us a call and we'll figure it out.
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
