/*
  LANDSCAPING HUB PAGE
  Design: "Omaha Grit" — sage green (#7A9E7E) accents for landscaping
*/

import { Link } from "wouter";
import {
  serviceCategories,
  PHONE,
  PHONE_LINK,
  PLACEHOLDER_IMG,
} from "@/lib/services-data";
import { Phone, ArrowRight, Leaf } from "lucide-react";

export default function Landscaping() {
  const landscapingCategory = serviceCategories.find(
    (c) => c.slug === "landscaping"
  );

  if (!landscapingCategory) return null;

  return (
    <>
      {/* Hero */}
      <section className="bg-[#0A1628] py-16 lg:py-24">
        <div className="container">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded bg-[#7A9E7E]/20 flex items-center justify-center">
              <Leaf className="w-5 h-5 text-[#7A9E7E]" />
            </div>
            <span className="text-[#7A9E7E] font-display text-sm tracking-widest uppercase">
              Landscaping Services
            </span>
          </div>
          <h1 className="font-display text-4xl lg:text-6xl text-white font-bold mb-6">
            LANDSCAPING SERVICES<br />
            <span className="text-[#7A9E7E]">IN OMAHA</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mb-8 leading-relaxed">
            From lawn care and mowing to mulching, sod installation, and seasonal cleanups — 
            we keep your property looking its best year-round. Same crew, same quality, same fair pricing 
            you expect from A1.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/free-estimate"
              className="bg-[#7A9E7E] hover:bg-[#6a8e6e] text-white px-8 py-3 rounded font-bold transition-colors"
            >
              GET A FREE ESTIMATE
            </Link>
            <a
              href={PHONE_LINK}
              className="border-2 border-white/30 text-white px-8 py-3 rounded font-bold hover:bg-white/5 transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              CALL {PHONE}
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#0A1628] mb-4">
            OUR LANDSCAPING SERVICES
          </h2>
          <p className="text-gray-600 text-lg mb-12 max-w-2xl">
            We offer a full range of landscaping and lawn care services for residential and commercial 
            properties across the Omaha metro area.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {landscapingCategory.services.map((svc) => (
              <Link
                key={svc.slug}
                href={`/landscaping/${svc.slug}`}
                className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="aspect-video bg-gray-100 overflow-hidden">
                  <img
                    src={PLACEHOLDER_IMG}
                    alt={svc.h1}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-bold text-[#0A1628] mb-2 group-hover:text-[#7A9E7E] transition-colors">
                    {svc.h1.replace(" in Omaha", "")}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {svc.shortDescription}
                  </p>
                  <span className="text-[#7A9E7E] font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#7A9E7E] py-16">
        <div className="container text-center">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-4">
            READY FOR A BETTER-LOOKING YARD?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Get a free estimate on any landscaping service. We'll come out, take a look, and give you an honest price.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/free-estimate"
              className="bg-white text-[#7A9E7E] px-8 py-3 rounded font-bold hover:bg-gray-100 transition-colors"
            >
              GET YOUR FREE ESTIMATE
            </Link>
            <a
              href={PHONE_LINK}
              className="border-2 border-white text-white px-8 py-3 rounded font-bold hover:bg-white/10 transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              CALL {PHONE}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
