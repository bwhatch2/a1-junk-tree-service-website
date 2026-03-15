/*
  TRASH HAULING — Dedicated Service Page
  URL: /trash-hauling
*/

import { useEffect } from "react";
import { Link } from "wouter";
import { PHONE, PHONE_LINK, BUSINESS_NAME, PLACEHOLDER_IMG, CTA_BG_IMG } from "@/lib/services-data";
import { Phone, ArrowRight, Clock, Star, Shield, DollarSign, CheckCircle, ChevronRight } from "lucide-react";

const relatedServices = [
  { slug: "bulk-trash-pickup", title: "Bulk Trash Pickup" },
  { slug: "same-day-junk-pickup", title: "Same-Day Junk Pickup" },
  { slug: "residential-junk-removal", title: "Residential Junk Removal" },
  { slug: "commercial-junk-removal", title: "Commercial Junk Removal" },
];

export default function TrashHauling() {
  useEffect(() => {
    document.title = "Trash Hauling Omaha | A1 Junk Removal and Tree Service";
    const metaDesc = document.querySelector('meta[name="description"]');
    const content = "Trash hauling services in Omaha. A1 Junk Removal hauls away garbage, debris, and waste that won't fit in your regular trash service. Call (402) 612-2373.";
    if (metaDesc) { metaDesc.setAttribute("content", content); } else { const meta = document.createElement("meta"); meta.name = "description"; meta.content = content; document.head.appendChild(meta); }
  }, []);

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Service", "name": "Trash Hauling Omaha", "description": "Trash hauling and garbage removal services in Omaha, NE. Hauling of excess garbage, debris, and waste that exceeds regular curbside trash pickup limits.", "provider": { "@type": "LocalBusiness", "name": BUSINESS_NAME, "telephone": PHONE, "url": "https://a1junkremovalandtreeserviceofomaha.com" }, "areaServed": [{ "@type": "City", "name": "Omaha", "addressRegion": "NE" }, { "@type": "City", "name": "Ralston", "addressRegion": "NE" }, { "@type": "City", "name": "La Vista", "addressRegion": "NE" }] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "What's the difference between trash hauling and junk removal?", "acceptedAnswer": { "@type": "Answer", "text": "They overlap a lot. Trash hauling typically refers to bagged garbage, loose debris, and waste materials. Junk removal includes larger items like furniture and appliances. We handle both — if you need it gone, we take it." } }, { "@type": "Question", "name": "Can you haul away construction trash?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Drywall scraps, lumber cutoffs, packaging materials, old fixtures, and general construction waste. If your contractor left a mess or you're doing a DIY project, we'll haul the debris away." } }, { "@type": "Question", "name": "Do you provide ongoing trash hauling for businesses?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. If your business generates more waste than your regular service handles, we can set up recurring pickups. Restaurants, retail stores, and offices that need extra capacity call us regularly." } }, { "@type": "Question", "name": "Is there a minimum amount for a pickup?", "acceptedAnswer": { "@type": "Answer", "text": "No strict minimum. We have a base rate for showing up, and the price goes up based on volume. Even if it's just a few bags and some boxes, it's worth calling for a quote rather than making multiple trips to the dump yourself." } }] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://a1junkremovalandtreeserviceofomaha.com/" }, { "@type": "ListItem", "position": 2, "name": "Junk Removal", "item": "https://a1junkremovalandtreeserviceofomaha.com/junk-removal" }, { "@type": "ListItem", "position": 3, "name": "Trash Hauling", "item": "https://a1junkremovalandtreeserviceofomaha.com/trash-hauling" }] }) }} />

      <div className="bg-gray-50 border-b border-gray-200"><div className="container py-3"><nav className="flex items-center gap-2 text-sm text-gray-500"><Link href="/" className="hover:text-[#0A1628]">Home</Link><span>/</span><Link href="/junk-removal" className="hover:text-[#0A1628]">Junk Removal</Link><span>/</span><span className="text-[#0A1628] font-medium">Trash Hauling</span></nav></div></div>

      <section className="relative py-16 lg:py-24 bg-[#0A1628] overflow-hidden">
        <div className="absolute inset-0 opacity-20"><img src={PLACEHOLDER_IMG} alt="" className="w-full h-full object-cover" /></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628] via-[#0A1628]/80 to-transparent" />
        <div className="container relative z-10"><div className="max-w-3xl">
          <div className="inline-block bg-[#E8611A]/20 text-[#E8611A] px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Hauling Services</div>
          <h1 className="font-display text-4xl lg:text-6xl text-white font-bold mb-4 uppercase">Garbage & Trash Hauling in Omaha</h1>
          <p className="text-white/90 text-xl lg:text-2xl font-semibold mb-8">Excess Trash, Debris, and Waste Hauled Away Fast</p>
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
        <p>Your regular trash service has limits — they take one can, maybe two, and anything that doesn't fit gets left at the curb. After a big cleanout, a renovation project, or a weekend of yard work, you've got way more trash than the weekly pickup can handle. Bags are piling up in the garage, there's a stack of broken-down boxes in the driveway, and the trash company won't touch any of it. <strong>A1 Junk Removal and Tree Service</strong> handles trash hauling across the Omaha metro. We come to you, load up all the excess garbage and debris, and take it away.</p>

        <p>We've hauled away mountains of trash after home renovation projects in Ralston, cleared out weeks of accumulated garbage from rental properties in La Vista, and picked up overflow trash for businesses across Omaha that generate more waste than their regular service can handle. Bagged, boxed, or loose — we load it all and take it to the dump so you don't have to.</p>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">When You Need Trash Hauling</h2>

        <div className="space-y-4 not-prose">
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Home Cleanout Overflow</h3><p className="text-gray-600 mt-1">You cleaned out the garage, attic, or basement and now there's more trash than your regular service will take. Bags of junk, broken items, and debris that needs to go.</p></div></div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Renovation and Remodel Waste</h3><p className="text-gray-600 mt-1">Drywall scraps, old flooring, torn-out cabinets, packaging from new materials, and all the miscellaneous waste a renovation generates. Too much for the trash can, not enough for a dumpster rental.</p></div></div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Business and Commercial Waste</h3><p className="text-gray-600 mt-1">Restaurants, retail stores, offices, and warehouses that generate more waste than their dumpster service covers. We handle the overflow so it doesn't pile up.</p></div></div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Event and Party Cleanup</h3><p className="text-gray-600 mt-1">The party's over but the trash is still here. Tables, chairs, decorations, food waste, and bags of garbage from events, cookouts, and gatherings that generated more waste than expected.</p></div></div>
        </div>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">Faster and Easier Than a Dump Run</h2>
        <p>You could load your truck or SUV, drive to the transfer station, wait in line, unload everything yourself, and drive back. Then do it again because it didn't all fit the first time. Or you could call us. We show up with a truck and crew, load everything in one trip, and handle the disposal. No loading your vehicle, no dump fees, no wasted Saturday. For most people, the cost of having us haul it is worth it just to avoid the hassle. And unlike a dumpster rental, there's no waiting for delivery and pickup — we come, we load, we leave. If you need a <Link href="/same-day-junk-pickup" className="text-[#E8611A] font-semibold hover:underline">same-day pickup</Link>, we can often accommodate that too.</p>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">Recurring Trash Hauling for Businesses</h2>
        <p>Some businesses need more than what their regular waste service provides. Whether it's a restaurant that fills its dumpster before the next pickup, a retail store dealing with seasonal packaging waste, or a warehouse that generates debris faster than it can be removed, we can set up recurring trash hauling on a schedule that works for you. Weekly, biweekly, or as-needed — we're flexible. It's a straightforward supplement to your existing waste service without the commitment of upgrading to a larger dumpster contract.</p>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6 not-prose">
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">What's the difference between trash hauling and junk removal?</h3><p className="text-gray-600">They overlap a lot. Trash hauling typically refers to bagged garbage, loose debris, and waste materials. Junk removal includes larger items like furniture and appliances. We handle both — if you need it gone, we take it.</p></div>
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">Can you haul away construction trash?</h3><p className="text-gray-600">Yes. Drywall scraps, lumber cutoffs, packaging materials, old fixtures, and general construction waste. If your contractor left a mess or you're doing a DIY project, we'll haul the debris away.</p></div>
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">Do you provide ongoing trash hauling for businesses?</h3><p className="text-gray-600">Yes. If your business generates more waste than your regular service handles, we can set up recurring pickups. Restaurants, retail stores, and offices that need extra capacity call us regularly.</p></div>
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">Is there a minimum amount for a pickup?</h3><p className="text-gray-600">No strict minimum. We have a base rate for showing up, and the price goes up based on volume. Even if it's just a few bags and some boxes, it's worth calling for a quote rather than making multiple trips to the dump yourself.</p></div>
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
          <h2 className="font-display text-3xl lg:text-5xl text-white font-bold mb-4">MORE TRASH THAN YOUR SERVICE CAN HANDLE?</h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">Get a free estimate for trash hauling in Omaha. We load it up and take it away — no dump runs, no hassle.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={PHONE_LINK} className="inline-flex items-center justify-center gap-2 bg-[#E8611A] text-white px-8 py-4 rounded font-bold text-lg transition-colors"><Phone className="w-5 h-5" /> CALL {PHONE}</a>
            <Link href="/free-estimate" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded font-bold text-lg hover:bg-white/10 transition-colors">REQUEST ONLINE ESTIMATE</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
