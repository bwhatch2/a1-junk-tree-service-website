/*
  ATTIC CLEANOUT — Dedicated Service Page
  URL: /attic-cleanout
*/

import { useEffect } from "react";
import { Link } from "wouter";
import { PHONE, PHONE_LINK, BUSINESS_NAME, PLACEHOLDER_IMG, CTA_BG_IMG } from "@/lib/services-data";
import { Phone, ArrowRight, Clock, Star, Shield, DollarSign, CheckCircle, ChevronRight } from "lucide-react";

const relatedServices = [
  { slug: "basement-cleanout", title: "Basement Cleanout" },
  { slug: "garage-cleanout", title: "Garage Cleanout" },
  { slug: "house-cleanout-services", title: "House Cleanout Services" },
  { slug: "estate-cleanouts", title: "Estate Cleanout Services" },
];

export default function AtticCleanout() {
  useEffect(() => {
    document.title = "Attic Cleanout Omaha | A1 Junk Removal and Tree Service";
    const metaDesc = document.querySelector('meta[name="description"]');
    const content = "Attic cleanout services in Omaha. A1 Junk Removal clears out old boxes, furniture, insulation, and decades of stored junk from your attic. Call (402) 612-2373.";
    if (metaDesc) { metaDesc.setAttribute("content", content); } else { const meta = document.createElement("meta"); meta.name = "description"; meta.content = content; document.head.appendChild(meta); }
  }, []);

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Service", "name": "Attic Cleanout Omaha", "description": "Attic cleanout and junk removal services in Omaha, NE. Clearing stored items, old furniture, boxes, and debris from attic spaces.", "provider": { "@type": "LocalBusiness", "name": BUSINESS_NAME, "telephone": PHONE, "url": "https://a1junkremovalandtreeserviceofomaha.com" }, "areaServed": [{ "@type": "City", "name": "Omaha", "addressRegion": "NE" }, { "@type": "City", "name": "Millard", "addressRegion": "NE" }, { "@type": "City", "name": "Ralston", "addressRegion": "NE" }] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Can you access my attic if it only has a pull-down ladder?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Most attics in Omaha have pull-down ladders or small access hatches. Our crew works through whatever access point you have. We carry items down carefully and protect the area below the opening." } }, { "@type": "Question", "name": "Do you remove old insulation during an attic cleanout?", "acceptedAnswer": { "@type": "Answer", "text": "We can remove fiberglass batt insulation as part of the cleanout. For blown-in insulation removal, that typically requires specialized vacuum equipment, which we can discuss during the estimate." } }, { "@type": "Question", "name": "How long does an attic cleanout take?", "acceptedAnswer": { "@type": "Answer", "text": "Most attic cleanouts take 2-4 hours depending on how much is stored up there and how accessible the space is. Attics packed floor to ceiling with decades of storage take longer." } }, { "@type": "Question", "name": "What if I'm not sure what's up there?", "acceptedAnswer": { "@type": "Answer", "text": "That's more common than you'd think. We'll go through everything with you or on your behalf. If we find anything that looks valuable or personal, we set it aside for you to review before we haul anything away." } }] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://a1junkremovalandtreeserviceofomaha.com/" }, { "@type": "ListItem", "position": 2, "name": "Junk Removal", "item": "https://a1junkremovalandtreeserviceofomaha.com/junk-removal" }, { "@type": "ListItem", "position": 3, "name": "Attic Cleanout", "item": "https://a1junkremovalandtreeserviceofomaha.com/attic-cleanout" }] }) }} />

      <div className="bg-gray-50 border-b border-gray-200"><div className="container py-3"><nav className="flex items-center gap-2 text-sm text-gray-500"><Link href="/" className="hover:text-[#0A1628]">Home</Link><span>/</span><Link href="/junk-removal" className="hover:text-[#0A1628]">Junk Removal</Link><span>/</span><span className="text-[#0A1628] font-medium">Attic Cleanout</span></nav></div></div>

      <section className="relative py-16 lg:py-24 bg-[#0A1628] overflow-hidden">
        <div className="absolute inset-0 opacity-20"><img src={PLACEHOLDER_IMG} alt="" className="w-full h-full object-cover" /></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628] via-[#0A1628]/80 to-transparent" />
        <div className="container relative z-10"><div className="max-w-3xl">
          <div className="inline-block bg-[#E8611A]/20 text-[#E8611A] px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Cleanout Services</div>
          <h1 className="font-display text-4xl lg:text-6xl text-white font-bold mb-4 uppercase">Attic Cleanout Services in Omaha</h1>
          <p className="text-white/90 text-xl lg:text-2xl font-semibold mb-8">Decades of Stored Junk Cleared Out and Hauled Away</p>
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
        <p>Nobody wants to go up in the attic. It's hot in the summer, freezing in the winter, and whatever's up there has been sitting untouched since the Clinton administration. Christmas decorations you stopped using ten years ago, boxes from your last move that never got unpacked, old luggage, baby clothes your kids outgrew two decades ago — it all piles up. <strong>A1 Junk Removal and Tree Service</strong> handles attic cleanouts across the Omaha metro. We go up there, bring everything down, and haul it away so you can actually use the space again.</p>

        <p>We've cleared out attics in older homes in Millard where the previous owner left 30 years of accumulation behind, and we've cleaned out attics in Ralston for families getting ready to sell. Some attics have a few boxes. Others have so much stuff crammed in that you can't see the floor. We handle both.</p>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">What Accumulates in Attics</h2>

        <div className="space-y-4 not-prose">
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Boxes and Storage Containers</h3><p className="text-gray-600 mt-1">Cardboard boxes, plastic bins, and old suitcases full of things you forgot you owned. The stuff that gets shoved up there during every move and never comes back down.</p></div></div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Old Furniture and Décor</h3><p className="text-gray-600 mt-1">Lamps, picture frames, old chairs, holiday decorations, artificial Christmas trees, and furniture that got replaced but never thrown out.</p></div></div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Clothing, Books, and Personal Items</h3><p className="text-gray-600 mt-1">Bags of old clothes, stacks of magazines, yearbooks, photo albums, and personal keepsakes. We set aside anything that looks important for you to review.</p></div></div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Old Insulation and Debris</h3><p className="text-gray-600 mt-1">Fiberglass batts that have fallen apart, rodent-damaged insulation, old ductwork, and general debris that's accumulated over the years.</p></div></div>
        </div>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">Working in Difficult Attic Spaces</h2>
        <p>Attics aren't built for comfort. Low ceilings, exposed rafters, no lighting, limited flooring, and access through a pull-down ladder or a small hatch in a closet ceiling. Our crew works in these conditions regularly. We bring our own lighting, move carefully across joists, and hand items down through the access point one load at a time. For attics with walk-up staircases, the process is faster, but we still take care not to damage walls or railings on the way down. If the attic has items that are too large to fit through the access hatch, we disassemble them up there and bring them down in pieces.</p>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">Clearing the Attic Before a Home Sale</h2>
        <p>If you're selling your house, the attic needs to be empty for inspections and showings. Buyers and inspectors want to see the roof structure, insulation condition, and HVAC equipment — not your collection of old National Geographics. We clear everything out quickly so your home is show-ready. If you're doing a full cleanout of the house, we can handle the <Link href="/basement-cleanout" className="text-[#E8611A] font-semibold hover:underline">basement</Link> and <Link href="/garage-cleanout" className="text-[#E8611A] font-semibold hover:underline">garage</Link> at the same time and get the whole house cleared in one visit.</p>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6 not-prose">
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">Can you access my attic if it only has a pull-down ladder?</h3><p className="text-gray-600">Yes. Most attics in Omaha have pull-down ladders or small access hatches. Our crew works through whatever access point you have. We carry items down carefully and protect the area below the opening.</p></div>
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">Do you remove old insulation during an attic cleanout?</h3><p className="text-gray-600">We can remove fiberglass batt insulation as part of the cleanout. For blown-in insulation removal, that typically requires specialized vacuum equipment, which we can discuss during the estimate.</p></div>
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">How long does an attic cleanout take?</h3><p className="text-gray-600">Most attic cleanouts take 2-4 hours depending on how much is stored up there and how accessible the space is. Attics packed floor to ceiling with decades of storage take longer.</p></div>
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">What if I'm not sure what's up there?</h3><p className="text-gray-600">That's more common than you'd think. We'll go through everything with you or on your behalf. If we find anything that looks valuable or personal, we set it aside for you to review before we haul anything away.</p></div>
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
          <h2 className="font-display text-3xl lg:text-5xl text-white font-bold mb-4">ATTIC FULL OF STUFF YOU'LL NEVER USE?</h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">Get a free estimate for attic cleanout services in Omaha. We go up, bring it all down, and haul it away.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={PHONE_LINK} className="inline-flex items-center justify-center gap-2 bg-[#E8611A] text-white px-8 py-4 rounded font-bold text-lg transition-colors"><Phone className="w-5 h-5" /> CALL {PHONE}</a>
            <Link href="/free-estimate" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded font-bold text-lg hover:bg-white/10 transition-colors">REQUEST ONLINE ESTIMATE</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
