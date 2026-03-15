/*
  COUCH & SOFA REMOVAL — Dedicated Service Page
  URL: /couch-sofa-removal
*/

import { useEffect } from "react";
import { Link } from "wouter";
import { PHONE, PHONE_LINK, BUSINESS_NAME, PLACEHOLDER_IMG, CTA_BG_IMG } from "@/lib/services-data";
import { Phone, ArrowRight, Clock, Star, Shield, DollarSign, CheckCircle, ChevronRight } from "lucide-react";

const relatedServices = [
  { slug: "furniture-removal", title: "Furniture Removal" },
  { slug: "mattress-disposal", title: "Mattress Disposal" },
  { slug: "residential-junk-removal", title: "Residential Junk Removal" },
  { slug: "bulk-trash-pickup", title: "Bulk Trash Pickup" },
];

export default function CouchSofaRemoval() {
  useEffect(() => {
    document.title = "Couch & Sofa Removal Omaha | A1 Junk Removal and Tree Service";
    const metaDesc = document.querySelector('meta[name="description"]');
    const content = "Couch and sofa removal in Omaha. A1 Junk Removal picks up old couches, sectionals, loveseats, and recliners from anywhere in your home. Call (402) 612-2373.";
    if (metaDesc) { metaDesc.setAttribute("content", content); } else { const meta = document.createElement("meta"); meta.name = "description"; meta.content = content; document.head.appendChild(meta); }
  }, []);

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Service", "name": "Couch & Sofa Removal Omaha", "description": "Couch and sofa removal services in Omaha, NE. Pickup and hauling of old couches, sectionals, loveseats, recliners, and sleeper sofas.", "provider": { "@type": "LocalBusiness", "name": BUSINESS_NAME, "telephone": PHONE, "url": "https://a1junkremovalandtreeserviceofomaha.com" }, "areaServed": [{ "@type": "City", "name": "Omaha", "addressRegion": "NE" }, { "@type": "City", "name": "Ralston", "addressRegion": "NE" }, { "@type": "City", "name": "La Vista", "addressRegion": "NE" }] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Can you get a couch out of a tight basement?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. If it went down there, we'll get it out. Sometimes that means tilting, rotating, and maneuvering through tight stairwells. If it truly won't fit, we can cut it apart and carry it out in pieces." } }, { "@type": "Question", "name": "Do you take the cushions and pillows too?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We take the whole thing — frame, cushions, throw pillows, slipcovers, everything. You don't need to separate anything. Just show us the couch and we handle the rest." } }, { "@type": "Question", "name": "What if my couch is too heavy for me to move to the curb?", "acceptedAnswer": { "@type": "Answer", "text": "That's exactly why we exist. We come inside, pick it up from whatever room it's in, carry it out, and load it on the truck. You don't need to move it at all." } }, { "@type": "Question", "name": "Can you take multiple pieces of furniture at once?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. Most couch pickups include other items too — a loveseat, a recliner, end tables, a coffee table. We take it all in one trip and you save money compared to separate pickups." } }] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://a1junkremovalandtreeserviceofomaha.com/" }, { "@type": "ListItem", "position": 2, "name": "Junk Removal", "item": "https://a1junkremovalandtreeserviceofomaha.com/junk-removal" }, { "@type": "ListItem", "position": 3, "name": "Couch & Sofa Removal", "item": "https://a1junkremovalandtreeserviceofomaha.com/couch-sofa-removal" }] }) }} />

      <div className="bg-gray-50 border-b border-gray-200"><div className="container py-3"><nav className="flex items-center gap-2 text-sm text-gray-500"><Link href="/" className="hover:text-[#0A1628]">Home</Link><span>/</span><Link href="/junk-removal" className="hover:text-[#0A1628]">Junk Removal</Link><span>/</span><span className="text-[#0A1628] font-medium">Couch & Sofa Removal</span></nav></div></div>

      <section className="relative py-16 lg:py-24 bg-[#0A1628] overflow-hidden">
        <div className="absolute inset-0 opacity-20"><img src={PLACEHOLDER_IMG} alt="" className="w-full h-full object-cover" /></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628] via-[#0A1628]/80 to-transparent" />
        <div className="container relative z-10"><div className="max-w-3xl">
          <div className="inline-block bg-[#E8611A]/20 text-[#E8611A] px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Item Removal</div>
          <h1 className="font-display text-4xl lg:text-6xl text-white font-bold mb-4 uppercase">Couch & Sofa Removal in Omaha</h1>
          <p className="text-white/90 text-xl lg:text-2xl font-semibold mb-8">Old Couches Picked Up from Any Room and Hauled Away</p>
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
        <p>The new couch is on the way and the old one needs to go — but it weighs 200 pounds, it barely fit through the door when you bought it, and the city trash service won't touch it. <strong>A1 Junk Removal and Tree Service</strong> handles couch and sofa removal across the Omaha metro. We come inside, pick it up from whatever room it's in, navigate it through your hallways and doorways, and load it on the truck. Done.</p>

        <p>We've carried sectionals out of finished basements in Ralston, hauled sleeper sofas down three flights of apartment stairs in La Vista, and picked up couches from front porches across Omaha where they'd been sitting since the last failed attempt to get rid of them. If it's a couch and you want it gone, we'll get it out.</p>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">Types of Couches and Sofas We Remove</h2>

        <div className="space-y-4 not-prose">
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Standard Sofas and Loveseats</h3><p className="text-gray-600 mt-1">Three-seaters, two-seaters, and everything in between. Fabric, leather, microfiber — the material doesn't matter to us.</p></div></div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Sectional Sofas</h3><p className="text-gray-600 mt-1">L-shaped, U-shaped, and modular sectionals. We separate the sections and carry each piece out individually. These are one of our most common pickups.</p></div></div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Sleeper Sofas and Futons</h3><p className="text-gray-600 mt-1">Sleeper sofas with the fold-out mattress inside are some of the heaviest pieces of furniture in a home. We handle them all the time — the extra weight doesn't slow us down.</p></div></div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Recliners and Oversized Chairs</h3><p className="text-gray-600 mt-1">Power recliners, rocker recliners, and oversized armchairs. Some of these are surprisingly heavy, especially the motorized ones with built-in mechanisms.</p></div></div>
        </div>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">Getting Couches Out of Difficult Spots</h2>
        <p>Couches are one of the most awkward things to move. They're long, heavy, and shaped in a way that makes doorways and stairwells a nightmare. The couch that went into the basement rec room ten years ago somehow doesn't fit back through the doorway now. The sectional in the upstairs bonus room has to go down a tight staircase with a 90-degree turn. We deal with this every day. Our crew knows how to tilt, rotate, and maneuver large furniture through tight spaces. If a couch genuinely won't fit through the path — which happens sometimes with older homes and basement stairwells — we can cut it apart on site and carry it out in pieces. Either way, it's leaving your house.</p>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">More Than Just the Couch</h2>
        <p>Most people who call about a couch have other things that need to go too. The matching loveseat, the old coffee table, a couple of end tables, maybe a <Link href="/mattress-disposal" className="text-[#E8611A] font-semibold hover:underline">mattress</Link> from the guest room. We take it all in one trip. There's no need to schedule separate pickups for each item — just point at everything that needs to go and we'll load it up. The more you add, the better the value, since we price by the truckload rather than per item. If you're replacing a whole room's worth of <Link href="/furniture-removal" className="text-[#E8611A] font-semibold hover:underline">furniture</Link>, we can clear it all out in one visit.</p>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6 not-prose">
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">Can you get a couch out of a tight basement?</h3><p className="text-gray-600">Yes. If it went down there, we'll get it out. Sometimes that means tilting, rotating, and maneuvering through tight stairwells. If it truly won't fit, we can cut it apart and carry it out in pieces.</p></div>
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">Do you take the cushions and pillows too?</h3><p className="text-gray-600">Yes. We take the whole thing — frame, cushions, throw pillows, slipcovers, everything. You don't need to separate anything. Just show us the couch and we handle the rest.</p></div>
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">What if my couch is too heavy for me to move to the curb?</h3><p className="text-gray-600">That's exactly why we exist. We come inside, pick it up from whatever room it's in, carry it out, and load it on the truck. You don't need to move it at all.</p></div>
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">Can you take multiple pieces of furniture at once?</h3><p className="text-gray-600">Absolutely. Most couch pickups include other items too — a loveseat, a recliner, end tables, a coffee table. We take it all in one trip and you save money compared to separate pickups.</p></div>
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
          <h2 className="font-display text-3xl lg:text-5xl text-white font-bold mb-4">OLD COUCH NEEDS TO GO?</h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">Get a free estimate for couch and sofa removal in Omaha. We pick it up from any room and haul it away.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={PHONE_LINK} className="inline-flex items-center justify-center gap-2 bg-[#E8611A] text-white px-8 py-4 rounded font-bold text-lg transition-colors"><Phone className="w-5 h-5" /> CALL {PHONE}</a>
            <Link href="/free-estimate" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded font-bold text-lg hover:bg-white/10 transition-colors">REQUEST ONLINE ESTIMATE</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
