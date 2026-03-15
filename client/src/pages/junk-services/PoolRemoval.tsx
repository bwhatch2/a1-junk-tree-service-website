/*
  POOL REMOVAL — Dedicated Service Page
  URL: /pool-removal
*/

import { useEffect } from "react";
import { Link } from "wouter";
import { PHONE, PHONE_LINK, BUSINESS_NAME, PLACEHOLDER_IMG, CTA_BG_IMG } from "@/lib/services-data";
import { Phone, ArrowRight, Clock, Star, Shield, DollarSign, CheckCircle, ChevronRight } from "lucide-react";

const relatedServices = [
  { slug: "hot-tub-removal", title: "Hot Tub Removal" },
  { slug: "deck-removal", title: "Deck Demolition & Removal" },
  { slug: "concrete-removal", title: "Concrete Removal" },
  { slug: "light-demolition", title: "Light Demolition Services" },
];

export default function PoolRemoval() {
  useEffect(() => {
    document.title = "Pool Removal Omaha | A1 Junk Removal and Tree Service";
    const metaDesc = document.querySelector('meta[name="description"]');
    const content = "Above-ground pool removal in Omaha. A1 Junk Removal dismantles and hauls away old above-ground pools, liners, decking, and equipment. Call (402) 612-2373.";
    if (metaDesc) { metaDesc.setAttribute("content", content); } else { const meta = document.createElement("meta"); meta.name = "description"; meta.content = content; document.head.appendChild(meta); }
  }, []);

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Service", "name": "Pool Removal Omaha", "description": "Above-ground pool removal in Omaha, NE. Dismantling and hauling of above-ground pools, liners, decking, pumps, and associated equipment.", "provider": { "@type": "LocalBusiness", "name": BUSINESS_NAME, "telephone": PHONE, "url": "https://a1junkremovalandtreeserviceofomaha.com" }, "areaServed": [{ "@type": "City", "name": "Omaha", "addressRegion": "NE" }, { "@type": "City", "name": "Elkhorn", "addressRegion": "NE" }, { "@type": "City", "name": "Gretna", "addressRegion": "NE" }] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Do I need to drain the pool before you come?", "acceptedAnswer": { "@type": "Answer", "text": "Ideally, yes. Draining the pool ahead of time speeds up the removal process. If you can't drain it or don't have a way to, let us know and we can work with you on a solution." } }, { "@type": "Question", "name": "Do you remove in-ground pools?", "acceptedAnswer": { "@type": "Answer", "text": "We focus on above-ground pool removal. In-ground pool removal requires excavation equipment and is a different type of project. We can handle the above-ground structure, decking, and equipment." } }, { "@type": "Question", "name": "Can you remove the pool deck too?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. If there's a wooden deck or platform built around the pool, we can demolish and remove that along with the pool itself. See our deck removal page for more details." } }, { "@type": "Question", "name": "What happens to the pool materials?", "acceptedAnswer": { "@type": "Answer", "text": "The metal walls and framing go to scrap metal recycling. Liners and plastic components go to appropriate disposal. We sort everything and recycle what we can." } }] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://a1junkremovalandtreeserviceofomaha.com/" }, { "@type": "ListItem", "position": 2, "name": "Junk Removal", "item": "https://a1junkremovalandtreeserviceofomaha.com/junk-removal" }, { "@type": "ListItem", "position": 3, "name": "Pool Removal", "item": "https://a1junkremovalandtreeserviceofomaha.com/pool-removal" }] }) }} />

      <div className="bg-gray-50 border-b border-gray-200"><div className="container py-3"><nav className="flex items-center gap-2 text-sm text-gray-500"><Link href="/" className="hover:text-[#0A1628]">Home</Link><span>/</span><Link href="/junk-removal" className="hover:text-[#0A1628]">Junk Removal</Link><span>/</span><span className="text-[#0A1628] font-medium">Pool Removal</span></nav></div></div>

      <section className="relative py-16 lg:py-24 bg-[#0A1628] overflow-hidden">
        <div className="absolute inset-0 opacity-20"><img src={PLACEHOLDER_IMG} alt="" className="w-full h-full object-cover" /></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628] via-[#0A1628]/80 to-transparent" />
        <div className="container relative z-10"><div className="max-w-3xl">
          <div className="inline-block bg-[#E8611A]/20 text-[#E8611A] px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Demolition & Outdoor</div>
          <h1 className="font-display text-4xl lg:text-6xl text-white font-bold mb-4 uppercase">Above-Ground Pool Removal in Omaha</h1>
          <p className="text-white/90 text-xl lg:text-2xl font-semibold mb-8">Old Pools Dismantled, Hauled Away, and Your Yard Reclaimed</p>
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
        <p>The above-ground pool was fun for a few summers, but now the liner is torn, the walls are rusting, and it's been sitting empty in the backyard for two years. It's an eyesore, a safety hazard, and it's taking up half the yard. You can't exactly put it out with the recycling. <strong>A1 Junk Removal and Tree Service</strong> handles above-ground pool removal across the Omaha metro. We dismantle the pool, haul away all the materials, and give you your backyard back.</p>

        <p>We've taken apart rusted-out pools in Elkhorn, removed pool and deck combos in Gretna, and dismantled everything from small round pools to large oval setups across West Omaha. The pool walls, the liner, the pump and filter, the ladder, the surrounding deck — we take it all.</p>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">What Gets Removed</h2>

        <div className="space-y-4 not-prose">
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Pool Walls and Frame</h3><p className="text-gray-600 mt-1">Steel, aluminum, or resin walls and the support structure that holds them up. We disassemble the frame, cut or fold the wall panels, and load everything on the truck.</p></div></div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Liner, Padding, and Ground Cover</h3><p className="text-gray-600 mt-1">The vinyl liner, any foam padding underneath, and the ground cloth or sand base. We pull it all up so the area underneath is cleared.</p></div></div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Pump, Filter, and Equipment</h3><p className="text-gray-600 mt-1">The pump motor, sand or cartridge filter, hoses, skimmer, return jets, and all the plumbing that kept the pool running. We disconnect and remove everything.</p></div></div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Decking and Accessories</h3><p className="text-gray-600 mt-1">Wooden decks or platforms built around the pool, ladders, rails, solar covers, and any other accessories. If there's a <Link href="/deck-removal" className="text-[#E8611A] font-semibold hover:underline">deck</Link> surrounding the pool, we demolish and remove that too.</p></div></div>
        </div>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">The Dismantling Process</h2>
        <p>Above-ground pools aren't designed to come apart easily. The walls are held in place by a top rail system, and once the water pressure is gone, the structure can be unstable. We start by removing the top rails and uprights, then carefully take down the wall panels. Steel walls get cut into manageable sections for loading. The liner gets pulled out and rolled up. The base — whether it's sand, foam, or a combination — gets cleared. We work methodically to keep the process safe and efficient. Most above-ground pool removals take half a day to a full day depending on the size of the pool and whether there's surrounding decking.</p>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">Reclaiming Your Yard</h2>
        <p>Once the pool is gone, you'll have a significant amount of yard space back. The ground underneath will be compacted and may have a sand base that needs to be addressed if you want to grow grass. We remove the pool materials and leave the area as level as possible. If you want the sand removed or the area graded, let us know and we can discuss options. Many homeowners are surprised by how much yard they get back once that pool footprint is cleared — especially with the larger oval pools that can take up a 15x30-foot section of the yard.</p>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6 not-prose">
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">Do I need to drain the pool before you come?</h3><p className="text-gray-600">Ideally, yes. Draining the pool ahead of time speeds up the removal process. If you can't drain it or don't have a way to, let us know and we can work with you on a solution.</p></div>
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">Do you remove in-ground pools?</h3><p className="text-gray-600">We focus on above-ground pool removal. In-ground pool removal requires excavation equipment and is a different type of project. We can handle the above-ground structure, decking, and equipment.</p></div>
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">Can you remove the pool deck too?</h3><p className="text-gray-600">Yes. If there's a wooden deck or platform built around the pool, we can demolish and remove that along with the pool itself. See our deck removal page for more details.</p></div>
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">What happens to the pool materials?</h3><p className="text-gray-600">The metal walls and framing go to scrap metal recycling. Liners and plastic components go to appropriate disposal. We sort everything and recycle what we can.</p></div>
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
          <h2 className="font-display text-3xl lg:text-5xl text-white font-bold mb-4">OLD POOL RUINING YOUR BACKYARD?</h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">Get a free estimate for above-ground pool removal in Omaha. We dismantle it, haul it away, and give you your yard back.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={PHONE_LINK} className="inline-flex items-center justify-center gap-2 bg-[#E8611A] text-white px-8 py-4 rounded font-bold text-lg transition-colors"><Phone className="w-5 h-5" /> CALL {PHONE}</a>
            <Link href="/free-estimate" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded font-bold text-lg hover:bg-white/10 transition-colors">REQUEST ONLINE ESTIMATE</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
