/*
  CONSTRUCTION DEBRIS REMOVAL — Dedicated Service Page
  URL: /construction-debris
*/

import { useEffect } from "react";
import { Link } from "wouter";
import { PHONE, PHONE_LINK, BUSINESS_NAME, PLACEHOLDER_IMG, CTA_BG_IMG } from "@/lib/services-data";
import { Phone, ArrowRight, Clock, Star, Shield, DollarSign, CheckCircle, ChevronRight } from "lucide-react";

const relatedServices = [
  { slug: "concrete-removal", title: "Concrete Removal" },
  { slug: "light-demolition", title: "Light Demolition Services" },
  { slug: "commercial-junk-removal", title: "Commercial Junk Removal" },
  { slug: "trash-hauling", title: "Garbage & Trash Hauling" },
];

export default function ConstructionDebris() {
  useEffect(() => {
    document.title = "Construction Debris Removal Omaha | A1 Junk Removal and Tree Service";
    const metaDesc = document.querySelector('meta[name="description"]');
    const content = "Construction debris removal in Omaha. A1 Junk Removal hauls away drywall, lumber, roofing, tile, and renovation waste from job sites. Call (402) 612-2373.";
    if (metaDesc) { metaDesc.setAttribute("content", content); } else { const meta = document.createElement("meta"); meta.name = "description"; meta.content = content; document.head.appendChild(meta); }
  }, []);

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Service", "name": "Construction Debris Removal Omaha", "description": "Construction debris removal and hauling in Omaha, NE. Drywall, lumber, roofing materials, tile, and renovation waste cleared from job sites.", "provider": { "@type": "LocalBusiness", "name": BUSINESS_NAME, "telephone": PHONE, "url": "https://a1junkremovalandtreeserviceofomaha.com" }, "areaServed": [{ "@type": "City", "name": "Omaha", "addressRegion": "NE" }, { "@type": "City", "name": "Papillion", "addressRegion": "NE" }, { "@type": "City", "name": "Gretna", "addressRegion": "NE" }] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Can you remove debris while the project is still in progress?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We do mid-project cleanups all the time. If debris is piling up and getting in the way of the next phase of work, we'll come clear it out so your crew can keep moving." } }, { "@type": "Question", "name": "Is this cheaper than renting a dumpster?", "acceptedAnswer": { "@type": "Answer", "text": "Often yes, especially for smaller projects. With a dumpster, you pay for delivery, pickup, rental days, weight overage fees, and you have to load it yourself. With us, we do all the loading and hauling for one price." } }, { "@type": "Question", "name": "What construction materials can't you take?", "acceptedAnswer": { "@type": "Answer", "text": "We can't haul hazardous materials like asbestos, lead paint debris, or chemical waste. Those require licensed hazmat disposal. Everything else — drywall, lumber, roofing, tile, concrete, metal — we take it all." } }, { "@type": "Question", "name": "Can you do recurring pickups from a job site?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. For longer projects, we can set up weekly or bi-weekly pickups to keep the site clean. Just let us know your schedule and we'll work around it." } }] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://a1junkremovalandtreeserviceofomaha.com/" }, { "@type": "ListItem", "position": 2, "name": "Junk Removal", "item": "https://a1junkremovalandtreeserviceofomaha.com/junk-removal" }, { "@type": "ListItem", "position": 3, "name": "Construction Debris", "item": "https://a1junkremovalandtreeserviceofomaha.com/construction-debris" }] }) }} />

      <div className="bg-gray-50 border-b border-gray-200"><div className="container py-3"><nav className="flex items-center gap-2 text-sm text-gray-500"><Link href="/" className="hover:text-[#0A1628]">Home</Link><span>/</span><Link href="/junk-removal" className="hover:text-[#0A1628]">Junk Removal</Link><span>/</span><span className="text-[#0A1628] font-medium">Construction Debris</span></nav></div></div>

      <section className="relative py-16 lg:py-24 bg-[#0A1628] overflow-hidden">
        <div className="absolute inset-0 opacity-20"><img src={PLACEHOLDER_IMG} alt="" className="w-full h-full object-cover" /></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628] via-[#0A1628]/80 to-transparent" />
        <div className="container relative z-10"><div className="max-w-3xl">
          <div className="inline-block bg-[#E8611A]/20 text-[#E8611A] px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Hauling Services</div>
          <h1 className="font-display text-4xl lg:text-6xl text-white font-bold mb-4 uppercase">Construction Debris Removal in Omaha</h1>
          <p className="text-white/90 text-xl lg:text-2xl font-semibold mb-8">Job Site Waste Loaded Up and Hauled Off</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/free-estimate" className="inline-flex items-center justify-center gap-2 bg-[#E8611A] hover:bg-[#d4570f] text-white px-8 py-4 rounded font-bold text-lg transition-colors">GET YOUR FREE ESTIMATE <ArrowRight className="w-5 h-5" /></Link>
            <a href={PHONE_LINK} className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded font-bold text-lg hover:bg-white/10 transition-colors"><Phone className="w-5 h-5" /> CALL {PHONE}</a>
          </div>
        </div></div>
      </section>

      <section className="py-8 bg-white border-b border-gray-200"><div className="container"><div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="flex items-center gap-3"><Star className="w-8 h-8 text-[#E8611A]" /><div><p className="font-bold text-[#0A1628]">253+ Reviews</p><p className="text-sm text-gray-500">4.9 Star Average</p></div></div>
        <div className="flex items-center gap-3"><DollarSign className="w-8 h-8 text-[#E8611A]" /><div><p className="font-bold text-[#0A1628]">40-60% Less</p><p className="text-sm text-gray-500">Than National Companies</p></div></div>
        <div className="flex items-center gap-3"><Clock className="w-8 h-8 text-[#E8611A]" /><div><p className="font-bold text-[#0A1628]">7 Days a Week</p><p className="text-sm text-gray-500">Same-Day Available</p></div></div>
        <div className="flex items-center gap-3"><Shield className="w-8 h-8 text-[#E8611A]" /><div><p className="font-bold text-[#0A1628]">Locally Owned</p><p className="text-sm text-gray-500">Serving Omaha Metro</p></div></div>
      </div></div></section>

      <section className="py-16 lg:py-20"><div className="container"><div className="max-w-3xl mx-auto"><div className="prose prose-lg max-w-none text-gray-700">
        <p>Renovation projects create a lot of waste. The old kitchen cabinets are in a pile in the driveway. There's a stack of torn-out drywall in the garage. Roofing shingles, broken tile, scrap lumber, and bags of plaster dust are everywhere. <strong>A1 Junk Removal and Tree Service</strong> handles construction debris removal across the Omaha metro. We come to the job site, load everything up, and haul it away — whether it's a single truckload from a bathroom remodel or multiple loads from a full gut renovation.</p>

        <p>We've hauled debris from kitchen remodels in Papillion, cleared roofing tear-off waste in Gretna, and done recurring cleanups on new construction sites across Omaha. Contractors call us when the debris is piling up faster than they can work around it, and homeowners call us when their DIY project generated way more waste than they expected.</p>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">Materials We Haul from Job Sites</h2>

        <div className="space-y-4 not-prose">
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Drywall and Plaster</h3><p className="text-gray-600 mt-1">Torn-out drywall sheets, plaster debris, joint compound dust, and old wall materials from demolition and renovation work.</p></div></div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Lumber, Framing, and Trim</h3><p className="text-gray-600 mt-1">Old studs, joists, plywood, OSB, baseboards, crown molding, and scrap wood from framing and finish work.</p></div></div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Roofing and Siding</h3><p className="text-gray-600 mt-1">Asphalt shingles, underlayment, flashing, old siding panels, fascia boards, and gutters from roof replacements and exterior work.</p></div></div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Tile, Flooring, and Fixtures</h3><p className="text-gray-600 mt-1">Ceramic tile, vinyl flooring, carpet, old cabinets, countertops, sinks, toilets, and other fixtures pulled during remodels.</p></div></div>
        </div>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">A Faster Alternative to Dumpster Rental</h2>
        <p>For a lot of renovation projects, renting a dumpster sounds like the obvious choice — until you factor in the delivery fee, the daily rental charge, the weight limits, the overage fees, and the fact that you have to load it yourself. For small to mid-size projects, hiring us is often cheaper and always easier. We show up, we load everything, and we're gone. No dumpster sitting in your driveway for a week, no permits needed for street placement, and no surprise fees when the weight comes in over the limit. For larger projects that generate debris continuously over weeks, we can set up recurring pickups to keep the site clean without a permanent dumpster.</p>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">Working with Contractors and Homeowners</h2>
        <p>We work with both. Contractors call us for mid-project cleanups and final site clearing. Homeowners call us when their weekend project turned into a bigger mess than they planned. Either way, we show up on time, load fast, and get out of the way so the work can continue. If the project also involves tearing out <Link href="/concrete-removal" className="text-[#E8611A] font-semibold hover:underline">concrete</Link> or doing <Link href="/light-demolition" className="text-[#E8611A] font-semibold hover:underline">light demolition</Link>, we can handle that too — same crew, same visit.</p>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6 not-prose">
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">Can you remove debris while the project is still in progress?</h3><p className="text-gray-600">Yes. We do mid-project cleanups all the time. If debris is piling up and getting in the way of the next phase of work, we'll come clear it out so your crew can keep moving.</p></div>
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">Is this cheaper than renting a dumpster?</h3><p className="text-gray-600">Often yes, especially for smaller projects. With a dumpster, you pay for delivery, pickup, rental days, weight overage fees, and you have to load it yourself. With us, we do all the loading and hauling for one price.</p></div>
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">What construction materials can't you take?</h3><p className="text-gray-600">We can't haul hazardous materials like asbestos, lead paint debris, or chemical waste. Those require licensed hazmat disposal. Everything else — drywall, lumber, roofing, tile, concrete, metal — we take it all.</p></div>
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">Can you do recurring pickups from a job site?</h3><p className="text-gray-600">Absolutely. For longer projects, we can set up weekly or bi-weekly pickups to keep the site clean. Just let us know your schedule and we'll work around it.</p></div>
        </div>
      </div></div></div></section>

      <section className="py-12 bg-gray-50 border-t border-gray-200"><div className="container">
        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mb-8 text-center">Related Services</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {relatedServices.map((svc) => (<Link key={svc.slug} href={`/${svc.slug}`} className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 hover:border-[#E8611A] hover:shadow-md transition-all group"><span className="font-semibold text-[#0A1628] group-hover:text-[#E8611A] transition-colors">{svc.title}</span><ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-[#E8611A] transition-colors" /></Link>))}
        </div>
      </div></section>

      <section className="relative py-20 bg-[#0A1628] overflow-hidden">
        <div className="absolute inset-0 opacity-30"><img src={CTA_BG_IMG} alt="" className="w-full h-full object-cover" /></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628] via-[#0A1628]/80 to-transparent" />
        <div className="container relative z-10 text-center">
          <h2 className="font-display text-3xl lg:text-5xl text-white font-bold mb-4">JOB SITE PILING UP WITH DEBRIS?</h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">Get a free estimate for construction debris removal in Omaha. We load it up and haul it away so the work can continue.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={PHONE_LINK} className="inline-flex items-center justify-center gap-2 bg-[#E8611A] text-white px-8 py-4 rounded font-bold text-lg transition-colors"><Phone className="w-5 h-5" /> CALL {PHONE}</a>
            <Link href="/free-estimate" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded font-bold text-lg hover:bg-white/10 transition-colors">REQUEST ONLINE ESTIMATE</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
