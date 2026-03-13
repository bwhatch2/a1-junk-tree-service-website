/*
  HOMEPAGE — A1 Junk Removal and Tree Service
  Design: "Omaha Grit" — Bold Local Pride
  Primary: Junk Removal | Secondary: Tree Service
*/

import { useEffect } from "react";
import { Link } from "wouter";
import {
  serviceCategories,
  serviceAreas,
  PHONE,
  PHONE_LINK,
  HERO_JUNK_IMG,
  HERO_TREE_IMG,
  ABOUT_TEAM_IMG,
  BEFORE_AFTER_IMG,
  CTA_BG_IMG,
  PLACEHOLDER_IMG,
  BUSINESS_NAME,
} from "@/lib/services-data";
import {
  Phone,
  ArrowRight,
  Star,
  Shield,
  Clock,
  DollarSign,
  MapPin,
  CheckCircle,
  Truck,
  TreePine,
} from "lucide-react";

export default function Home() {
  useEffect(() => {
    document.title = "A1 Junk Removal and Tree Service | Omaha NE | (402) 612-2373";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Omaha's trusted junk removal and tree service. 40-60% less than national companies. 253+ five-star reviews. Same-day service. Call (402) 612-2373 for a free estimate.");
  }, []);

  const junkCategories = serviceCategories.filter(c => c.slug !== "tree-service");
  const treeCategory = serviceCategories.find(c => c.slug === "tree-service");
  const topJunkServices = junkCategories.flatMap(c => c.services).slice(0, 6);

  return (
    <div>
      {/* ─── HERO ─── */}
      <section className="relative min-h-[85vh] flex items-center bg-[#0A1628] overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_JUNK_IMG} alt="A1 Junk Removal crew" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628] via-[#0A1628]/70 to-transparent" />
        </div>
        <div className="container relative z-10 py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-yellow-400/20 text-yellow-400 px-4 py-1.5 rounded-full text-sm font-bold mb-6">
              <Star className="w-4 h-4 fill-yellow-400" />
              253+ Five-Star Google Reviews
            </div>
            <h1 className="font-display text-5xl lg:text-7xl text-white font-bold leading-[1.05] mb-6">
              OMAHA'S JUNK REMOVAL<br />
              <span className="text-[#7A9E7E]">&amp; TREE SERVICE</span>
            </h1>
            <p className="text-white/80 text-xl lg:text-2xl leading-relaxed mb-4 max-w-2xl">
              Locally owned. 40-60% less than the national guys.
              Same-day service available.
            </p>
            <p className="text-white/60 text-base mb-8">
              Call Bryan directly — no call centers, no runaround.
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

      {/* ─── TRUST BAR ─── */}
      <section className="bg-white border-b border-gray-200 py-6">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              { icon: Star, label: "4.9/5 Google Rating", sublabel: "253+ Reviews" },
              { icon: Clock, label: "Same Day Service", sublabel: "Call by noon" },
              { icon: Shield, label: "Fully Licensed", sublabel: "& Insured" },
              { icon: MapPin, label: "Local Omaha", sublabel: "Owned & Operated" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <item.icon className="w-6 h-6 text-[#E8611A]" />
                <div>
                  <p className="font-bold text-[#0A1628] text-sm">{item.label}</p>
                  <p className="text-gray-500 text-xs">{item.sublabel}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DUAL SERVICE CARDS ─── */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-[#E8611A] font-bold text-sm uppercase tracking-wider mb-2">Two Services, One Call</p>
            <h2 className="font-display text-3xl lg:text-5xl text-[#0A1628] font-bold">
              WHAT WE DO
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Junk Removal Card */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-[2/1] overflow-hidden">
                <img src={HERO_JUNK_IMG} alt="Junk removal service" className="w-full h-full object-cover" />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#E8611A]/10 rounded-lg flex items-center justify-center">
                    <Truck className="w-5 h-5 text-[#E8611A]" />
                  </div>
                  <h3 className="font-display text-2xl text-[#0A1628] font-bold">JUNK REMOVAL</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  From a single appliance to a full estate cleanout, we haul it all. Over 75 specialized
                  services for homes and businesses across the Omaha metro.
                </p>
                <ul className="space-y-2 mb-6">
                  {topJunkServices.slice(0, 4).map((svc) => (
                    <li key={svc.slug} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-[#E8611A]" />
                      {svc.h1.replace(" in Omaha", "")}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-[#E8611A] font-bold hover:underline"
                >
                  View All 75+ Services <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Tree Service Card */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-[2/1] overflow-hidden">
                <img src={HERO_TREE_IMG} alt="Tree service" className="w-full h-full object-cover" />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#7A9E7E]/10 rounded-lg flex items-center justify-center">
                    <TreePine className="w-5 h-5 text-[#7A9E7E]" />
                  </div>
                  <h3 className="font-display text-2xl text-[#0A1628] font-bold">TREE SERVICE</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  From trimming and pruning to full tree removal and stump grinding, we keep your
                  property safe and looking great. Same honest pricing, same hard work.
                </p>
                <ul className="space-y-2 mb-6">
                  {treeCategory?.services.slice(0, 4).map((svc) => (
                    <li key={svc.slug} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-[#7A9E7E]" />
                      {svc.h1.replace(" in Omaha", "")}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/tree-service"
                  className="inline-flex items-center gap-2 text-[#7A9E7E] font-bold hover:underline"
                >
                  View All Tree Services <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ─── */}
      <section className="py-16 lg:py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src={ABOUT_TEAM_IMG}
                alt="A1 team at work"
                className="rounded-xl shadow-2xl w-full"
              />
              {/* Floating review card */}
              <div className="absolute -bottom-6 -right-4 lg:-right-8 bg-white rounded-xl shadow-xl p-4 max-w-[260px] border border-gray-100">
                <div className="flex gap-0.5 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm italic">
                  "Bryan and his crew were amazing. Fast, fair price, and they cleaned up everything."
                </p>
                <p className="text-gray-400 text-xs mt-2">— Mike R., Papillion</p>
              </div>
            </div>
            <div>
              <p className="text-[#E8611A] font-bold text-sm uppercase tracking-wider mb-2">Why Choose A1</p>
              <h2 className="font-display text-3xl lg:text-4xl text-[#0A1628] font-bold mb-8">
                WE'RE NOT THE BIG GUYS.<br />WE'RE THE BETTER GUYS.
              </h2>
              <div className="space-y-6">
                {[
                  { icon: DollarSign, title: "40-60% Less Than National Companies", desc: "No franchise fees, no call center overhead. You pay for the work, not the brand name." },
                  { icon: Clock, title: "Same-Day Service Available", desc: "Call in the morning, we can be there by afternoon. We work fast because we respect your time." },
                  { icon: Shield, title: "Fully Licensed & Insured", desc: "Your property is protected. We carry full insurance so you never have to worry." },
                  { icon: Star, title: "253+ Five-Star Reviews", desc: "Real reviews from real customers across the Omaha metro. We earn every single one." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 bg-[#E8611A]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-[#E8611A]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#0A1628] mb-1">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── BEFORE / AFTER ─── */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-10">
            <p className="text-[#E8611A] font-bold text-sm uppercase tracking-wider mb-2">Results You Can See</p>
            <h2 className="font-display text-3xl lg:text-4xl text-[#0A1628] font-bold">
              BEFORE &amp; AFTER
            </h2>
          </div>
          <div className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-xl">
            <img
              src={BEFORE_AFTER_IMG}
              alt="Before and after junk removal"
              className="w-full"
            />
          </div>
          <p className="text-center text-gray-500 text-sm mt-4">
            Full estate cleanout — completed in one day
          </p>
        </div>
      </section>

      {/* ─── REVIEWS ─── */}
      <section className="py-16 lg:py-20">
        <div className="container">
          <div className="text-center mb-12">
            <div className="flex justify-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <h2 className="font-display text-3xl lg:text-4xl text-[#0A1628] font-bold mb-2">
              WHAT OUR CUSTOMERS SAY
            </h2>
            <p className="text-gray-600">253+ five-star reviews and counting</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Mike R.", loc: "Papillion", text: "Called Bryan on a Monday morning, and he had a crew at my house by noon. They hauled away an old hot tub, a broken couch, and a garage full of junk. Price was way less than what 1-800-GOT-JUNK quoted me." },
              { name: "Sarah T.", loc: "Bellevue", text: "We used A1 for an estate cleanout after my mother passed. Bryan and his team were respectful, efficient, and thorough. They even swept the floors when they were done." },
              { name: "Dave K.", loc: "Elkhorn", text: "Had two big trees trimmed and a bunch of yard waste hauled off. One call, one crew, one bill. These guys are the real deal. Fair price and hard workers." },
            ].map((review, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4 leading-relaxed">"{review.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#0A1628] rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-[#0A1628] text-sm">{review.name}</p>
                    <p className="text-gray-500 text-xs">{review.loc}, NE</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/reviews"
              className="inline-flex items-center gap-2 text-[#E8611A] font-bold hover:underline"
            >
              Read All Reviews <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── SERVICE AREAS ─── */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-10">
            <p className="text-[#E8611A] font-bold text-sm uppercase tracking-wider mb-2">Serving the Metro</p>
            <h2 className="font-display text-3xl lg:text-4xl text-[#0A1628] font-bold">
              AREAS WE SERVE
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {serviceAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/service-areas/${area.slug}`}
                className="px-5 py-2.5 bg-white border border-gray-200 rounded-full text-gray-700 hover:border-[#E8611A] hover:text-[#E8611A] transition-colors font-medium text-sm"
              >
                {area.name}
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-500 text-sm mb-3">Not sure if we cover your area?</p>
            <a
              href={PHONE_LINK}
              className="inline-flex items-center gap-2 text-[#E8611A] font-bold hover:underline"
            >
              <Phone className="w-4 h-4" />
              Call us — we'll make it work
            </a>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="relative py-20 lg:py-28 bg-[#0A1628] overflow-hidden">
        <div className="absolute inset-0">
          <img src={CTA_BG_IMG} alt="" className="w-full h-full object-cover opacity-30" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-[#0A1628]/60 to-[#0A1628]/80" />
        <div className="container relative z-10 text-center">
          <h2 className="font-display text-4xl lg:text-6xl text-white font-bold mb-4">
            READY TO GET RID OF IT?
          </h2>
          <p className="text-white/70 text-xl mb-8 max-w-2xl mx-auto">
            Free estimates, no obligation. Call Bryan directly or request your estimate online.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={PHONE_LINK}
              className="inline-flex items-center justify-center gap-2 bg-[#E8611A] hover:bg-[#d4570f] text-white px-10 py-5 rounded font-bold text-xl transition-colors"
            >
              <Phone className="w-6 h-6" />
              CALL {PHONE}
            </a>
            <Link
              href="/free-estimate"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-10 py-5 rounded font-bold text-xl hover:bg-white/10 transition-colors"
            >
              REQUEST ONLINE ESTIMATE
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
