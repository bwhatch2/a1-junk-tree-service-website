/*
  BASEMENT CLEANOUT — Dedicated Service Page
  URL: /basement-cleanout
*/

import { useEffect } from "react";
import { Link } from "wouter";
import { PHONE, PHONE_LINK, BUSINESS_NAME, PLACEHOLDER_IMG, CTA_BG_IMG } from "@/lib/services-data";
import { Phone, ArrowRight, Clock, Star, Shield, DollarSign, CheckCircle, ChevronRight } from "lucide-react";

const relatedServices = [
  { slug: "attic-cleanout", title: "Attic Cleanout" },
  { slug: "garage-cleanout", title: "Garage Cleanout" },
  { slug: "house-cleanout-services", title: "House Cleanout Services" },
  { slug: "appliance-removal", title: "Appliance Removal" },
];

export default function BasementCleanout() {
  useEffect(() => {
    document.title = "Basement Cleanout Omaha | A1 Junk Removal and Tree Service";
    const metaDesc = document.querySelector('meta[name="description"]');
    const content = "Basement cleanout services in Omaha. A1 Junk Removal clears out old furniture, boxes, appliances, and years of accumulated junk from your basement. Call (402) 612-2373.";
    if (metaDesc) { metaDesc.setAttribute("content", content); } else { const meta = document.createElement("meta"); meta.name = "description"; meta.content = content; document.head.appendChild(meta); }
  }, []);

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Service", "name": "Basement Cleanout Omaha", "description": "Basement cleanout and junk removal services in Omaha, NE. Clearing old furniture, storage items, appliances, and debris from basements.", "provider": { "@type": "LocalBusiness", "name": BUSINESS_NAME, "telephone": PHONE, "url": "https://a1junkremovalandtreeserviceofomaha.com" }, "areaServed": [{ "@type": "City", "name": "Omaha", "addressRegion": "NE" }, { "@type": "City", "name": "Bellevue", "addressRegion": "NE" }, { "@type": "City", "name": "Papillion", "addressRegion": "NE" }] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Can you carry heavy items up narrow basement stairs?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. That's the majority of basement cleanout work. Old couches, chest freezers, water heaters, pool tables — we carry it all up the stairs by hand. We protect the walls and railings during the process." } }, { "@type": "Question", "name": "What if my basement flooded and everything is water-damaged?", "acceptedAnswer": { "@type": "Answer", "text": "We handle post-flood cleanouts regularly. Water-damaged furniture, soggy boxes, ruined carpet, and warped shelving — we clear it all out. For mold remediation, you'll want a specialist, but we handle the junk removal side." } }, { "@type": "Question", "name": "Do you clean the basement after removing everything?", "acceptedAnswer": { "@type": "Answer", "text": "We remove all the items and debris, and we sweep up as we go. We don't do deep cleaning or pressure washing, but we leave the space clear and broom-clean so it's ready for whatever you have planned." } }, { "@type": "Question", "name": "How much does a basement cleanout cost?", "acceptedAnswer": { "@type": "Answer", "text": "It depends on how much is down there. A basement with a few pieces of furniture and some boxes is very affordable. A fully packed basement with heavy items takes more time and truck space. We give you a firm price before we start." } }] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://a1junkremovalandtreeserviceofomaha.com/" }, { "@type": "ListItem", "position": 2, "name": "Junk Removal", "item": "https://a1junkremovalandtreeserviceofomaha.com/junk-removal" }, { "@type": "ListItem", "position": 3, "name": "Basement Cleanout", "item": "https://a1junkremovalandtreeserviceofomaha.com/basement-cleanout" }] }) }} />

      <div className="bg-gray-50 border-b border-gray-200"><div className="container py-3"><nav className="flex items-center gap-2 text-sm text-gray-500"><Link href="/" className="hover:text-[#0A1628]">Home</Link><span>/</span><Link href="/junk-removal" className="hover:text-[#0A1628]">Junk Removal</Link><span>/</span><span className="text-[#0A1628] font-medium">Basement Cleanout</span></nav></div></div>

      <section className="relative py-16 lg:py-24 bg-[#0A1628] overflow-hidden">
        <div className="absolute inset-0 opacity-20"><img src={PLACEHOLDER_IMG} alt="" className="w-full h-full object-cover" /></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628] via-[#0A1628]/80 to-transparent" />
        <div className="container relative z-10"><div className="max-w-3xl">
          <div className="inline-block bg-[#E8611A]/20 text-[#E8611A] px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Cleanout Services</div>
          <h1 className="font-display text-4xl lg:text-6xl text-white font-bold mb-4 uppercase">Basement Cleanout Services in Omaha</h1>
          <p className="text-white/90 text-xl lg:text-2xl font-semibold mb-8">Everything Carried Up the Stairs and Hauled Away</p>
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
        <p>The basement started as extra storage. Then it became the place where everything goes to be forgotten — old furniture, holiday decorations, boxes from three moves ago, a treadmill nobody uses, and a chest freezer that stopped working in 2019. Now you can barely walk through it. <strong>A1 Junk Removal and Tree Service</strong> handles basement cleanouts across the Omaha metro. We carry everything up the stairs, load it on the truck, and haul it away. You get your basement back.</p>

        <p>We've cleared out basements in Bellevue packed wall-to-wall with 20 years of storage, hauled water-damaged furniture out of flooded basements in Papillion, and emptied finished basements in Omaha where the previous homeowner left everything behind. No matter how much is down there or how heavy it is, we get it out.</p>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">Common Basement Junk We Remove</h2>

        <div className="space-y-4 not-prose">
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Old Furniture and Mattresses</h3><p className="text-gray-600 mt-1">Couches, recliners, entertainment centers, old bed frames, and mattresses that got moved downstairs when the new ones arrived and never left.</p></div></div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Appliances and Exercise Equipment</h3><p className="text-gray-600 mt-1">Chest freezers, old washers and dryers, dehumidifiers, water heaters, treadmills, ellipticals, and weight benches. The heavy stuff that's the hardest to get up the stairs.</p></div></div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Boxes, Bins, and General Storage</h3><p className="text-gray-600 mt-1">Cardboard boxes, plastic totes, old toys, books, records, tools, paint cans, and the random accumulation that builds up over years.</p></div></div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Flood and Water Damage Debris</h3><p className="text-gray-600 mt-1">Waterlogged carpet, warped drywall, swollen particleboard furniture, and soggy boxes from sewer backups or heavy rain flooding.</p></div></div>
        </div>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">The Stairs Are Our Problem, Not Yours</h2>
        <p>The hardest part of any basement cleanout is the stairs. Narrow, steep, with a turn at the bottom — that's the standard Omaha basement staircase. Getting a sectional couch or a 300-pound chest freezer up those stairs takes technique, not just strength. Our crew does this every day. We use furniture straps, appliance dollies, and careful coordination to get heavy items up and out without damaging your walls, railings, or floors. You don't need to help. You don't even need to be there if you don't want to — just tell us what goes and we'll handle the rest.</p>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">Post-Flood Basement Clearing</h2>
        <p>Omaha gets its share of heavy rain, and basements take the hit. When a sewer backs up or water comes in through the foundation, everything down there gets ruined — carpet, furniture, stored boxes, drywall. Once the water recedes and you've dealt with the immediate cleanup, there's still a basement full of damaged stuff that needs to go. We haul out all the water-damaged items, tear out ruined carpet and pad, and clear the space so restoration work can begin. If the whole house needs clearing after a major event, we also handle full <Link href="/house-cleanout-services" className="text-[#E8611A] font-semibold hover:underline">house cleanout services</Link>.</p>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6 not-prose">
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">Can you carry heavy items up narrow basement stairs?</h3><p className="text-gray-600">Yes. That's the majority of basement cleanout work. Old couches, chest freezers, water heaters, pool tables — we carry it all up the stairs by hand. We protect the walls and railings during the process.</p></div>
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">What if my basement flooded and everything is water-damaged?</h3><p className="text-gray-600">We handle post-flood cleanouts regularly. Water-damaged furniture, soggy boxes, ruined carpet, and warped shelving — we clear it all out. For mold remediation, you'll want a specialist, but we handle the junk removal side.</p></div>
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">Do you clean the basement after removing everything?</h3><p className="text-gray-600">We remove all the items and debris, and we sweep up as we go. We don't do deep cleaning or pressure washing, but we leave the space clear and broom-clean so it's ready for whatever you have planned.</p></div>
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">How much does a basement cleanout cost?</h3><p className="text-gray-600">It depends on how much is down there. A basement with a few pieces of furniture and some boxes is very affordable. A fully packed basement with heavy items takes more time and truck space. We give you a firm price before we start.</p></div>
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
          <h2 className="font-display text-3xl lg:text-5xl text-white font-bold mb-4">BASEMENT PACKED WITH JUNK?</h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">Get a free estimate for basement cleanout services in Omaha. We carry everything up the stairs and haul it away.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={PHONE_LINK} className="inline-flex items-center justify-center gap-2 bg-[#E8611A] text-white px-8 py-4 rounded font-bold text-lg transition-colors"><Phone className="w-5 h-5" /> CALL {PHONE}</a>
            <Link href="/free-estimate" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded font-bold text-lg hover:bg-white/10 transition-colors">REQUEST ONLINE ESTIMATE</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
