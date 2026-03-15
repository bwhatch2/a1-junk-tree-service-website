/*
  SHED DEMOLITION & REMOVAL — Dedicated Service Page
  URL: /shed-removal
*/

import { useEffect } from "react";
import { Link } from "wouter";
import { PHONE, PHONE_LINK, BUSINESS_NAME, PLACEHOLDER_IMG, CTA_BG_IMG } from "@/lib/services-data";
import { Phone, ArrowRight, Clock, Star, Shield, DollarSign, CheckCircle, ChevronRight } from "lucide-react";

const relatedServices = [
  { slug: "deck-removal", title: "Deck Demolition & Removal" },
  { slug: "fence-removal", title: "Fence Removal" },
  { slug: "light-demolition", title: "Light Demolition Services" },
  { slug: "swing-set-removal", title: "Swing Set Removal" },
];

export default function ShedRemoval() {
  useEffect(() => {
    document.title = "Shed Removal Omaha | A1 Junk Removal and Tree Service";
    const metaDesc = document.querySelector('meta[name="description"]');
    const content = "Shed demolition and removal in Omaha. A1 Junk Removal tears down and hauls away old sheds, outbuildings, and storage structures. Call (402) 612-2373.";
    if (metaDesc) { metaDesc.setAttribute("content", content); } else { const meta = document.createElement("meta"); meta.name = "description"; meta.content = content; document.head.appendChild(meta); }
  }, []);

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Service", "name": "Shed Demolition & Removal Omaha", "description": "Shed demolition and removal services in Omaha, NE. Complete teardown and hauling of wooden sheds, metal sheds, and storage buildings.", "provider": { "@type": "LocalBusiness", "name": BUSINESS_NAME, "telephone": PHONE, "url": "https://a1junkremovalandtreeserviceofomaha.com" }, "areaServed": [{ "@type": "City", "name": "Omaha", "addressRegion": "NE" }, { "@type": "City", "name": "Ralston", "addressRegion": "NE" }, { "@type": "City", "name": "Elkhorn", "addressRegion": "NE" }] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "How long does it take to demolish and remove a shed?", "acceptedAnswer": { "@type": "Answer", "text": "Most standard backyard sheds take our crew 2-4 hours to tear down, load up, and haul away. Larger sheds or ones with concrete foundations can take a full day." } }, { "@type": "Question", "name": "Do you remove the shed foundation too?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. If the shed sits on a concrete slab, pavers, or gravel pad, we can remove that as well. We'll break up the concrete, haul it away, and leave the area level." } }, { "@type": "Question", "name": "Do I need a permit to have my shed demolished?", "acceptedAnswer": { "@type": "Answer", "text": "In most Omaha neighborhoods, you don't need a permit to demolish a small accessory structure like a backyard shed. However, if you're in an HOA or historic district, it's worth checking first. We can help you figure that out." } }, { "@type": "Question", "name": "What if the shed still has stuff inside?", "acceptedAnswer": { "@type": "Answer", "text": "No problem. We'll clear out the contents first, then tear down the structure. If there are items you want to keep, just let us know before we start and we'll set them aside." } }] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://a1junkremovalandtreeserviceofomaha.com/" }, { "@type": "ListItem", "position": 2, "name": "Junk Removal", "item": "https://a1junkremovalandtreeserviceofomaha.com/junk-removal" }, { "@type": "ListItem", "position": 3, "name": "Shed Removal", "item": "https://a1junkremovalandtreeserviceofomaha.com/shed-removal" }] }) }} />

      <div className="bg-gray-50 border-b border-gray-200"><div className="container py-3"><nav className="flex items-center gap-2 text-sm text-gray-500"><Link href="/" className="hover:text-[#0A1628]">Home</Link><span>/</span><Link href="/junk-removal" className="hover:text-[#0A1628]">Junk Removal</Link><span>/</span><span className="text-[#0A1628] font-medium">Shed Removal</span></nav></div></div>

      <section className="relative py-16 lg:py-24 bg-[#0A1628] overflow-hidden">
        <div className="absolute inset-0 opacity-20"><img src={PLACEHOLDER_IMG} alt="" className="w-full h-full object-cover" /></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628] via-[#0A1628]/80 to-transparent" />
        <div className="container relative z-10"><div className="max-w-3xl">
          <div className="inline-block bg-[#E8611A]/20 text-[#E8611A] px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Demolition & Outdoor</div>
          <h1 className="font-display text-4xl lg:text-6xl text-white font-bold mb-4 uppercase">Shed Demolition & Removal in Omaha</h1>
          <p className="text-white/90 text-xl lg:text-2xl font-semibold mb-8">We Tear It Down, Load It Up, and Haul It Away</p>
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
        <p>That shed in the backyard has been leaning for two years. The door doesn't close, the roof leaks, and the only thing it's storing at this point is spiders and regret. <strong>A1 Junk Removal and Tree Service</strong> handles shed demolition and removal across the Omaha metro. We tear the whole thing down — walls, roof, floor, foundation — load it onto our truck, and haul it away. When we're done, you've got a clean patch of yard where the shed used to be.</p>

        <p>We've demolished wooden sheds in Ralston that were rotting from the ground up, pulled apart metal storage buildings in Elkhorn that were rusting through, and removed prefab plastic sheds across West Omaha that the wind had knocked off their foundations. Every shed is a little different, but the process is the same: we take it apart piece by piece, sort the materials for recycling, and leave your yard clean.</p>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">Types of Sheds We Demolish</h2>

        <div className="space-y-4 not-prose">
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Wooden Storage Sheds</h3><p className="text-gray-600 mt-1">The most common type. Framed with 2x4s, sheathed in plywood or T1-11 siding, with asphalt shingle roofs. We take them apart with reciprocating saws and pry bars.</p></div></div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Metal and Steel Sheds</h3><p className="text-gray-600 mt-1">Corrugated metal buildings, steel storage units, and prefab metal sheds. We cut them apart and the metal goes straight to recycling.</p></div></div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Plastic and Resin Sheds</h3><p className="text-gray-600 mt-1">Rubbermaid, Suncast, and similar prefab plastic sheds. These usually come apart faster since they're modular, but they still need to be hauled away.</p></div></div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Foundations and Slabs</h3><p className="text-gray-600 mt-1">Concrete slabs, paver pads, gravel beds, and pressure-treated skid foundations. We remove the base too so you're left with bare ground.</p></div></div>
        </div>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">The Demolition Process</h2>
        <p>We start by emptying the shed of everything inside — tools, lawn equipment, paint cans, whatever's been accumulating in there. Then we strip the roof, take down the walls, and pull apart the floor framing. Nails get pulled or cut, and we sort materials as we go — metal to recycling, clean wood to disposal, and any hazardous materials like old paint or chemicals get handled separately. If the shed sits on a concrete slab, we can break that up with a jackhammer and haul the pieces. The whole process is controlled and methodical — we're not just pushing it over with a truck. If you're also looking to take down an old <Link href="/deck-removal" className="text-[#E8611A] font-semibold hover:underline">deck</Link> or <Link href="/fence-removal" className="text-[#E8611A] font-semibold hover:underline">fence</Link>, we can handle all of it in the same visit.</p>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">After the Shed Is Gone</h2>
        <p>Once the shed and foundation are removed, we rake the area level and leave it clean. If you want topsoil or grass seed put down, we can discuss that as an add-on. A lot of homeowners use the reclaimed space for a new patio, a garden bed, or just more open yard. Whatever your plan is, we'll make sure the area is ready for it. The spot where a shed sat for ten years usually has compressed soil and dead grass, so a little prep work goes a long way toward making it look like the shed was never there.</p>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6 not-prose">
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">How long does it take to demolish and remove a shed?</h3><p className="text-gray-600">Most standard backyard sheds take our crew 2-4 hours to tear down, load up, and haul away. Larger sheds or ones with concrete foundations can take a full day.</p></div>
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">Do you remove the shed foundation too?</h3><p className="text-gray-600">Yes. If the shed sits on a concrete slab, pavers, or gravel pad, we can remove that as well. We'll break up the concrete, haul it away, and leave the area level.</p></div>
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">Do I need a permit to have my shed demolished?</h3><p className="text-gray-600">In most Omaha neighborhoods, you don't need a permit to demolish a small accessory structure like a backyard shed. However, if you're in an HOA or historic district, it's worth checking first. We can help you figure that out.</p></div>
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">What if the shed still has stuff inside?</h3><p className="text-gray-600">No problem. We'll clear out the contents first, then tear down the structure. If there are items you want to keep, just let us know before we start and we'll set them aside.</p></div>
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
          <h2 className="font-display text-3xl lg:text-5xl text-white font-bold mb-4">READY TO GET RID OF THAT OLD SHED?</h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">Get a free estimate for shed demolition and removal in Omaha. We tear it down, haul it off, and leave your yard clean.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={PHONE_LINK} className="inline-flex items-center justify-center gap-2 bg-[#E8611A] text-white px-8 py-4 rounded font-bold text-lg transition-colors"><Phone className="w-5 h-5" /> CALL {PHONE}</a>
            <Link href="/free-estimate" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded font-bold text-lg hover:bg-white/10 transition-colors">REQUEST ONLINE ESTIMATE</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
