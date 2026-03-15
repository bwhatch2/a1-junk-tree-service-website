/*
  PLAYGROUND & SWING SET REMOVAL — Dedicated Service Page
  URL: /swing-set-removal
*/

import { useEffect } from "react";
import { Link } from "wouter";
import { PHONE, PHONE_LINK, BUSINESS_NAME, PLACEHOLDER_IMG, CTA_BG_IMG } from "@/lib/services-data";
import { Phone, ArrowRight, Clock, Star, Shield, DollarSign, CheckCircle, ChevronRight } from "lucide-react";

const relatedServices = [
  { slug: "deck-removal", title: "Deck Demolition & Removal" },
  { slug: "fence-removal", title: "Fence Removal" },
  { slug: "pool-removal", title: "Above Ground Pool Removal" },
  { slug: "yard-waste-removal", title: "Yard Waste Removal" },
];

export default function SwingSetRemoval() {
  useEffect(() => {
    document.title = "Playground & Swing Set Removal Omaha | A1 Junk Removal and Tree Service";
    const metaDesc = document.querySelector('meta[name="description"]');
    const content = "Professional swing set and playground equipment removal in Omaha. A1 Junk Removal dismantles and hauls away wooden and metal play structures. Call (402) 612-2373.";
    if (metaDesc) { metaDesc.setAttribute("content", content); } else { const meta = document.createElement("meta"); meta.name = "description"; meta.content = content; document.head.appendChild(meta); }
  }, []);

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Service", "name": "Playground & Swing Set Removal Omaha", "description": "Professional playground and swing set removal services in Omaha, NE. Complete disassembly and hauling of wooden and metal play structures.", "provider": { "@type": "LocalBusiness", "name": BUSINESS_NAME, "telephone": PHONE, "url": "https://a1junkremovalandtreeserviceofomaha.com" }, "areaServed": [{ "@type": "City", "name": "Omaha", "addressRegion": "NE" }, { "@type": "City", "name": "Gretna", "addressRegion": "NE" }, { "@type": "City", "name": "Elkhorn", "addressRegion": "NE" }] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "How long does it take to remove a swing set?", "acceptedAnswer": { "@type": "Answer", "text": "Most standard metal or wooden swing sets take our crew about 1-2 hours to fully disassemble and load. Larger playground structures with multiple platforms and slides can take 2-4 hours depending on the build." } }, { "@type": "Question", "name": "Do you remove the concrete footings too?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. If the posts were set in concrete, we dig out the footings and haul them away so you're left with a clean yard. We can also fill the holes with topsoil if you'd like." } }, { "@type": "Question", "name": "Can you remove a swing set that's partially rotted or falling apart?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. Rotted and deteriorating structures are actually the majority of what we remove. We work carefully to break them down without scattering debris across your yard." } }, { "@type": "Question", "name": "What do you do with the materials after removal?", "acceptedAnswer": { "@type": "Answer", "text": "Metal components get recycled. Treated lumber goes to proper disposal. If any parts are still in good shape, we'll work to donate them when possible." } }] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://a1junkremovalandtreeserviceofomaha.com/" }, { "@type": "ListItem", "position": 2, "name": "Junk Removal", "item": "https://a1junkremovalandtreeserviceofomaha.com/junk-removal" }, { "@type": "ListItem", "position": 3, "name": "Swing Set Removal", "item": "https://a1junkremovalandtreeserviceofomaha.com/swing-set-removal" }] }) }} />

      <div className="bg-gray-50 border-b border-gray-200"><div className="container py-3"><nav className="flex items-center gap-2 text-sm text-gray-500"><Link href="/" className="hover:text-[#0A1628]">Home</Link><span>/</span><Link href="/junk-removal" className="hover:text-[#0A1628]">Junk Removal</Link><span>/</span><span className="text-[#0A1628] font-medium">Swing Set Removal</span></nav></div></div>

      <section className="relative py-16 lg:py-24 bg-[#0A1628] overflow-hidden">
        <div className="absolute inset-0 opacity-20"><img src={PLACEHOLDER_IMG} alt="" className="w-full h-full object-cover" /></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628] via-[#0A1628]/80 to-transparent" />
        <div className="container relative z-10"><div className="max-w-3xl">
          <div className="inline-block bg-[#E8611A]/20 text-[#E8611A] px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Outdoor Structure Removal</div>
          <h1 className="font-display text-4xl lg:text-6xl text-white font-bold mb-4 uppercase">Playground & Swing Set Removal in Omaha</h1>
          <p className="text-white/90 text-xl lg:text-2xl font-semibold mb-8">Full Disassembly and Hauling for Wooden and Metal Play Structures</p>
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
        <p>The kids grew up, the wood is rotting, and that swing set in the backyard has turned into an eyesore and a liability. <strong>A1 Junk Removal and Tree Service</strong> handles playground and swing set removal across the Omaha metro. We disassemble the entire structure, pull the posts out of the ground — concrete footings and all — and haul everything away in one trip. No rental dumpster sitting in your driveway for a week, no pile of lumber you have to figure out how to get rid of.</p>

        <p>We've torn down swing sets in backyards across Elkhorn, Gretna, and West Omaha. Some are basic A-frame metal sets that come apart in under an hour. Others are those big wooden playgrounds with platforms, rock walls, slides, and rope bridges that take a full morning. Either way, our crew shows up with the right tools — reciprocating saws, impact drivers, pry bars — and breaks it down piece by piece.</p>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">What We Take Down</h2>

        <div className="space-y-4 not-prose">
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Metal Swing Sets</h3><p className="text-gray-600 mt-1">Standard A-frame sets, tube steel structures, and chain-link swings. We unbolt, cut, and load them fast.</p></div></div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Wooden Playground Structures</h3><p className="text-gray-600 mt-1">Multi-level play sets with slides, climbing walls, and canopies. These are the big jobs — pressure-treated lumber, lag bolts, and concrete footings. We handle all of it.</p></div></div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Trampolines</h3><p className="text-gray-600 mt-1">Frame, springs, mat, safety net — we disassemble and remove the whole thing. No more rusty trampoline frame taking up half the yard.</p></div></div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Concrete Footings and Ground Anchors</h3><p className="text-gray-600 mt-1">We dig out the concrete bases, remove ground anchors, and can fill the holes with topsoil so your yard is ready for whatever comes next.</p></div></div>
        </div>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">When It's Time to Take It Down</h2>
        <p>Most wooden play structures have a lifespan of 10-15 years before the lumber starts to split, warp, and rot. Once the wood gets soft enough that you can push a screwdriver into it, the structure isn't safe anymore. Rusty bolts, wobbly platforms, and splintered handrails are all signs it's time. We see a lot of homeowners in the Millard area who bought houses with old play sets already in the yard — the previous owners' kids outgrew them years ago, and now they're just taking up space. If you're also looking to clear out an old <Link href="/deck-removal" className="text-[#E8611A] font-semibold hover:underline">deck that's seen better days</Link>, we can handle both in the same visit.</p>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">What Happens to the Materials</h2>
        <p>Metal frames and hardware get taken to a local recycling facility. Treated lumber has to go to proper disposal since it can't be burned or composted — the chemicals in pressure-treated wood make that a health hazard. If any components are still in solid shape — like a plastic slide or a set of chains — we'll try to get them to someone who can use them. We're not just dumping everything in a landfill. If you've got an old <Link href="/fence-removal" className="text-[#E8611A] font-semibold hover:underline">fence that needs to come down</Link> at the same time, we can knock that out too and save you a second trip.</p>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6 not-prose">
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">How long does it take to remove a swing set?</h3><p className="text-gray-600">Most standard metal or wooden swing sets take our crew about 1-2 hours to fully disassemble and load. Larger playground structures with multiple platforms and slides can take 2-4 hours depending on the build.</p></div>
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">Do you remove the concrete footings too?</h3><p className="text-gray-600">Yes. If the posts were set in concrete, we dig out the footings and haul them away so you're left with a clean yard. We can also fill the holes with topsoil if you'd like.</p></div>
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">Can you remove a swing set that's partially rotted or falling apart?</h3><p className="text-gray-600">Absolutely. Rotted and deteriorating structures are actually the majority of what we remove. We work carefully to break them down without scattering debris across your yard.</p></div>
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">What do you do with the materials after removal?</h3><p className="text-gray-600">Metal components get recycled. Treated lumber goes to proper disposal. If any parts are still in good shape, we'll work to donate them when possible.</p></div>
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
          <h2 className="font-display text-3xl lg:text-5xl text-white font-bold mb-4">READY TO RECLAIM YOUR BACKYARD?</h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">Get a free estimate for swing set and playground removal in Omaha. We handle the teardown, the hauling, and the cleanup.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={PHONE_LINK} className="inline-flex items-center justify-center gap-2 bg-[#E8611A] text-white px-8 py-4 rounded font-bold text-lg transition-colors"><Phone className="w-5 h-5" /> CALL {PHONE}</a>
            <Link href="/free-estimate" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded font-bold text-lg hover:bg-white/10 transition-colors">REQUEST ONLINE ESTIMATE</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
