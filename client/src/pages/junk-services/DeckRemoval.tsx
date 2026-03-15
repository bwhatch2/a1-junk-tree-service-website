/*
  DECK REMOVAL — Dedicated Service Page
  URL: /deck-removal
*/

import { useEffect } from "react";
import { Link } from "wouter";
import { PHONE, PHONE_LINK, BUSINESS_NAME, PLACEHOLDER_IMG, CTA_BG_IMG } from "@/lib/services-data";
import { Phone, ArrowRight, Clock, Star, Shield, DollarSign, CheckCircle, ChevronRight } from "lucide-react";

const relatedServices = [
  { slug: "shed-removal", title: "Shed Demolition & Removal" },
  { slug: "fence-removal", title: "Fence Removal" },
  { slug: "light-demolition", title: "Light Demolition Services" },
  { slug: "concrete-removal", title: "Concrete Removal" },
];

export default function DeckRemoval() {
  useEffect(() => {
    document.title = "Deck Removal Omaha | A1 Junk Removal and Tree Service";
    const metaDesc = document.querySelector('meta[name="description"]');
    const content = "Deck demolition and removal in Omaha. A1 Junk Removal tears down old wood and composite decks, hauls away the debris, and leaves your yard clean. Call (402) 612-2373.";
    if (metaDesc) { metaDesc.setAttribute("content", content); } else { const meta = document.createElement("meta"); meta.name = "description"; meta.content = content; document.head.appendChild(meta); }
  }, []);

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Service", "name": "Deck Demolition & Removal Omaha", "description": "Deck demolition and removal services in Omaha, NE. Complete teardown of wood and composite decks, including posts, railings, and concrete footings.", "provider": { "@type": "LocalBusiness", "name": BUSINESS_NAME, "telephone": PHONE, "url": "https://a1junkremovalandtreeserviceofomaha.com" }, "areaServed": [{ "@type": "City", "name": "Omaha", "addressRegion": "NE" }, { "@type": "City", "name": "Millard", "addressRegion": "NE" }, { "@type": "City", "name": "Papillion", "addressRegion": "NE" }] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "How long does it take to tear down a deck?", "acceptedAnswer": { "@type": "Answer", "text": "A standard 12x16 deck typically takes our crew half a day to demolish and haul away. Larger multi-level decks or decks with concrete footings can take a full day or more." } }, { "@type": "Question", "name": "Do you remove the deck posts and footings too?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We remove the deck boards, railings, framing, posts, and concrete footings. We dig out the footings and fill the holes so the yard is level when we're done." } }, { "@type": "Question", "name": "Do I need a permit to have my deck demolished?", "acceptedAnswer": { "@type": "Answer", "text": "In most cases, you don't need a permit to demolish a residential deck in Omaha. However, if you plan to build a new deck, you'll need a permit for the new construction. We handle the removal side — your contractor handles the permits for the rebuild." } }, { "@type": "Question", "name": "Can you remove just part of a deck?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. If only a section is rotted or damaged, we can remove that portion and leave the rest intact. We'll cut clean lines at the transition point so it looks intentional." } }] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://a1junkremovalandtreeserviceofomaha.com/" }, { "@type": "ListItem", "position": 2, "name": "Junk Removal", "item": "https://a1junkremovalandtreeserviceofomaha.com/junk-removal" }, { "@type": "ListItem", "position": 3, "name": "Deck Removal", "item": "https://a1junkremovalandtreeserviceofomaha.com/deck-removal" }] }) }} />

      <div className="bg-gray-50 border-b border-gray-200"><div className="container py-3"><nav className="flex items-center gap-2 text-sm text-gray-500"><Link href="/" className="hover:text-[#0A1628]">Home</Link><span>/</span><Link href="/junk-removal" className="hover:text-[#0A1628]">Junk Removal</Link><span>/</span><span className="text-[#0A1628] font-medium">Deck Removal</span></nav></div></div>

      <section className="relative py-16 lg:py-24 bg-[#0A1628] overflow-hidden">
        <div className="absolute inset-0 opacity-20"><img src={PLACEHOLDER_IMG} alt="" className="w-full h-full object-cover" /></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628] via-[#0A1628]/80 to-transparent" />
        <div className="container relative z-10"><div className="max-w-3xl">
          <div className="inline-block bg-[#E8611A]/20 text-[#E8611A] px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Demolition & Outdoor</div>
          <h1 className="font-display text-4xl lg:text-6xl text-white font-bold mb-4 uppercase">Deck Demolition & Removal in Omaha</h1>
          <p className="text-white/90 text-xl lg:text-2xl font-semibold mb-8">Old Decks Torn Down, Loaded Up, and Hauled Away</p>
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
        <p>The deck boards are soft, the railing wobbles when you lean on it, and you haven't actually used the deck in two years because you're not sure it's safe to stand on. Nebraska weather is brutal on outdoor wood — the freeze-thaw cycles crack boards, moisture rots the joists, and sun bleaches everything gray. <strong>A1 Junk Removal and Tree Service</strong> handles deck demolition and removal across the Omaha metro. We tear the whole thing down — boards, railings, framing, posts, and footings — and haul every piece away.</p>

        <p>We've demolished rotting pressure-treated decks in Millard, torn down multi-level composite decks in Papillion, and removed old ground-level platforms across West Omaha. Every deck is different — different size, different height, different condition — but the process is the same: controlled demolition, careful sorting, and a clean yard when we leave.</p>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">What Gets Removed</h2>

        <div className="space-y-4 not-prose">
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Deck Boards and Railings</h3><p className="text-gray-600 mt-1">All surface decking — pressure-treated lumber, cedar, composite, or whatever material the deck is made from. Railings, balusters, and cap rails all come off.</p></div></div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Joists, Beams, and Ledger Boards</h3><p className="text-gray-600 mt-1">The structural framing underneath — joists, rim boards, beams, and the ledger board attached to the house. We remove all the hardware and patch the siding where the ledger was bolted.</p></div></div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Posts and Concrete Footings</h3><p className="text-gray-600 mt-1">Support posts get cut or pulled, and the concrete footings get dug out. We fill the holes and level the ground so the yard is usable again.</p></div></div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Stairs, Landings, and Attached Structures</h3><p className="text-gray-600 mt-1">Deck stairs, intermediate landings, pergolas, and any built-in benches or planters that are part of the deck structure.</p></div></div>
        </div>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">How We Demolish a Deck</h2>
        <p>We start from the top and work down. Railings come off first, then deck boards get pried up or unscrewed. Once the surface is clear, we take apart the joist framing and remove the beams. Posts get cut at ground level or pulled out entirely depending on whether you want the footings removed. We use reciprocating saws, pry bars, and impact drivers — it's methodical work, not just smashing things apart. Nails and screws get pulled as we go so there's nothing sharp left in the yard. If you're also looking to take down a <Link href="/shed-removal" className="text-[#E8611A] font-semibold hover:underline">shed</Link> or <Link href="/fence-removal" className="text-[#E8611A] font-semibold hover:underline">fence</Link> at the same time, we can handle all of it in one visit.</p>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">After the Deck Is Gone</h2>
        <p>Once the deck and footings are removed, we rake the area clean and level the ground. The spot under an old deck is usually bare dirt, compacted soil, and whatever fell through the boards over the years. We clean all of that up. If you're planning to build a new deck, the area is ready for your contractor to start fresh. If you're reclaiming the space for a patio, garden, or just open yard, we leave it in good shape for whatever comes next.</p>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6 not-prose">
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">How long does it take to tear down a deck?</h3><p className="text-gray-600">A standard 12x16 deck typically takes our crew half a day to demolish and haul away. Larger multi-level decks or decks with concrete footings can take a full day or more.</p></div>
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">Do you remove the deck posts and footings too?</h3><p className="text-gray-600">Yes. We remove the deck boards, railings, framing, posts, and concrete footings. We dig out the footings and fill the holes so the yard is level when we're done.</p></div>
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">Do I need a permit to have my deck demolished?</h3><p className="text-gray-600">In most cases, you don't need a permit to demolish a residential deck in Omaha. However, if you plan to build a new deck, you'll need a permit for the new construction. We handle the removal side — your contractor handles the permits for the rebuild.</p></div>
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">Can you remove just part of a deck?</h3><p className="text-gray-600">Yes. If only a section is rotted or damaged, we can remove that portion and leave the rest intact. We'll cut clean lines at the transition point so it looks intentional.</p></div>
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
          <h2 className="font-display text-3xl lg:text-5xl text-white font-bold mb-4">DECK PAST ITS PRIME?</h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">Get a free estimate for deck demolition and removal in Omaha. We tear it down, haul it off, and leave your yard clean.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={PHONE_LINK} className="inline-flex items-center justify-center gap-2 bg-[#E8611A] text-white px-8 py-4 rounded font-bold text-lg transition-colors"><Phone className="w-5 h-5" /> CALL {PHONE}</a>
            <Link href="/free-estimate" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded font-bold text-lg hover:bg-white/10 transition-colors">REQUEST ONLINE ESTIMATE</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
