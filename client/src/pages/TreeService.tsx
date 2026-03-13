/*
  TREE SERVICE HUB PAGE
  Lists all tree services. Secondary focus of the business.
  Uses sage green (#7A9E7E) accent color.
*/

import { useEffect } from "react";
import { Link } from "wouter";
import { serviceCategories, PHONE, PHONE_LINK, HERO_TREE_IMG, CTA_BG_IMG } from "@/lib/services-data";
import { ArrowRight, Phone, TreePine, CheckCircle } from "lucide-react";

export default function TreeServiceHub() {
  useEffect(() => {
    document.title = "Tree Service Omaha | Tree Trimming & Removal | A1 Tree Service";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Professional tree service in Omaha. A1 offers tree removal, trimming, stump grinding, and emergency service. Locally owned, fully insured. Call (402) 612-2373.");
  }, []);

  const treeCategory = serviceCategories.find(c => c.slug === "tree-service");
  if (!treeCategory) return null;

  return (
    <div>
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-[#0A1628]">Home</Link>
            <span>/</span>
            <span className="text-[#0A1628] font-medium">Tree Service</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="relative py-16 lg:py-24 bg-[#0A1628] overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img src={HERO_TREE_IMG} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628] via-[#0A1628]/80 to-transparent" />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#7A9E7E]/20 text-[#7A9E7E] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
              <TreePine className="w-3.5 h-3.5" />
              Professional Tree Care
            </div>
            <h1 className="font-display text-4xl lg:text-6xl text-white font-bold mb-6">
              TREE SERVICE IN OMAHA
            </h1>
            <p className="text-white/80 text-lg lg:text-xl leading-relaxed mb-8">
              From trimming and pruning to full tree removal and stump grinding, we keep your
              property safe and looking great. Locally owned, fully insured, and always a fair price.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/free-estimate"
                className="inline-flex items-center justify-center gap-2 bg-[#7A9E7E] hover:bg-[#6b8e6f] text-white px-8 py-4 rounded font-bold text-lg transition-colors"
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

      {/* Services Grid */}
      <section className="py-16 lg:py-20">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-[#7A9E7E] font-bold text-sm uppercase tracking-wider mb-2">Our Tree Services</p>
            <h2 className="font-display text-3xl lg:text-4xl text-[#0A1628] font-bold">
              COMPLETE TREE CARE
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {treeCategory.services.map((svc) => (
              <Link
                key={svc.slug}
                href={`/tree-service/${svc.slug}`}
                className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-[#7A9E7E] hover:shadow-lg transition-all"
              >
                <div className="aspect-video bg-gray-100 overflow-hidden">
                  <img
                    src={svc.slug === "tree-removal" || svc.slug === "tree-trimming" ? HERO_TREE_IMG : `https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=400&fit=crop`}
                    alt={svc.h1}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl text-[#0A1628] font-bold mb-2 group-hover:text-[#7A9E7E] transition-colors">
                    {svc.h1.replace(" in Omaha", "")}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{svc.shortDescription}</p>
                  <span className="inline-flex items-center gap-1 text-[#7A9E7E] font-semibold text-sm">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us for Trees */}
      <section className="py-16 bg-[#f8faf8]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-display text-3xl lg:text-4xl text-[#0A1628] font-bold mb-4">
              WHY CHOOSE A1 FOR TREE SERVICE?
            </h2>
            <p className="text-gray-600 text-lg">
              We bring the same honest pricing and hard work to tree service that we're known for in junk removal.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "Fully licensed and insured for tree work",
              "Same-day emergency response available",
              "We clean up and haul away ALL debris",
              "Honest, upfront pricing — no surprises",
              "Locally owned — Bryan is always a phone call away",
              "We handle everything from trimming to full removal",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4">
                <CheckCircle className="w-5 h-5 text-[#7A9E7E] mt-0.5 flex-shrink-0" />
                <p className="text-gray-700">{item}</p>
              </div>
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
            NEED A TREE TAKEN CARE OF?
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            Free estimates on all tree work. Call Bryan directly or request your estimate online.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={PHONE_LINK}
              className="inline-flex items-center justify-center gap-2 bg-[#7A9E7E] text-white px-8 py-4 rounded font-bold text-lg transition-colors"
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
