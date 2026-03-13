import { useEffect } from "react";
import { Link } from "wouter";
import { serviceAreas, PHONE, PHONE_LINK, CTA_BG_IMG } from "@/lib/services-data";
import { Phone, MapPin, ArrowRight } from "lucide-react";

export default function ServiceAreas() {
  useEffect(() => {
    document.title = "Service Areas | A1 Junk Removal and Tree Service | Omaha Metro";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "A1 Junk Removal and Tree Service serves Omaha, Bellevue, Papillion, La Vista, Ralston, Elkhorn, Gretna, Bennington, Council Bluffs, and more. Call (402) 612-2373.");
  }, []);

  return (
    <div>
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-[#0A1628]">Home</Link>
            <span>/</span>
            <span className="text-[#0A1628] font-medium">Service Areas</span>
          </nav>
        </div>
      </div>

      <section className="py-16 lg:py-20 bg-[#0A1628]">
        <div className="container text-center">
          <div className="w-16 h-16 bg-[#E8611A]/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <MapPin className="w-8 h-8 text-[#E8611A]" />
          </div>
          <h1 className="font-display text-4xl lg:text-6xl text-white font-bold mb-4">
            AREAS WE SERVE
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            We proudly serve the entire Omaha metropolitan area and surrounding communities.
            If you're not sure whether we cover your area, give us a call — we'll make it work.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/service-areas/${area.slug}`}
                className="group flex items-center gap-4 p-6 bg-white border border-gray-200 rounded-xl hover:border-[#E8611A] hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-[#E8611A]/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#E8611A]/20 transition-colors">
                  <MapPin className="w-6 h-6 text-[#E8611A]" />
                </div>
                <div className="flex-1">
                  <h2 className="font-display text-xl text-[#0A1628] font-bold group-hover:text-[#E8611A] transition-colors">
                    {area.name}
                  </h2>
                  <p className="text-gray-500 text-sm">{area.state}</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#E8611A] transition-colors" />
              </Link>
            ))}
          </div>

          <div className="mt-12 bg-gray-50 rounded-xl p-8 text-center">
            <h2 className="font-display text-2xl text-[#0A1628] font-bold mb-2">
              DON'T SEE YOUR AREA?
            </h2>
            <p className="text-gray-600 mb-6">
              We serve a wide radius around Omaha. Give us a call and we'll let you know if we can help.
            </p>
            <a
              href={PHONE_LINK}
              className="inline-flex items-center gap-2 bg-[#E8611A] text-white px-8 py-3 rounded font-bold"
            >
              <Phone className="w-5 h-5" /> CALL {PHONE}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
