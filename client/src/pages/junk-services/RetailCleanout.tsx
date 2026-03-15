/*
  RETAIL SPACE CLEANOUT — Dedicated Service Page
  URL: /retail-cleanout
*/

import { useEffect } from "react";
import { Link } from "wouter";
import { PHONE, PHONE_LINK, BUSINESS_NAME, PLACEHOLDER_IMG, CTA_BG_IMG } from "@/lib/services-data";
import { Phone, ArrowRight, Clock, Star, Shield, DollarSign, CheckCircle, ChevronRight } from "lucide-react";

const relatedServices = [
  { slug: "commercial-junk-removal", title: "Commercial Junk Removal" },
  { slug: "warehouse-cleanout", title: "Warehouse Cleanout" },
  { slug: "office-furniture-removal", title: "Office Furniture Removal" },
  { slug: "light-demolition", title: "Light Demolition Services" },
];

export default function RetailCleanout() {
  useEffect(() => {
    document.title = "Retail Space Cleanout Omaha | A1 Junk Removal and Tree Service";
    const metaDesc = document.querySelector('meta[name="description"]');
    const content = "Retail space cleanout in Omaha. A1 Junk Removal clears fixtures, shelving, signage, and inventory from stores and commercial spaces. Call (402) 612-2373.";
    if (metaDesc) { metaDesc.setAttribute("content", content); } else { const meta = document.createElement("meta"); meta.name = "description"; meta.content = content; document.head.appendChild(meta); }
  }, []);

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Service", "name": "Retail Space Cleanout Omaha", "description": "Retail space cleanout services in Omaha, NE. Removal of fixtures, shelving, signage, inventory, and debris from retail locations.", "provider": { "@type": "LocalBusiness", "name": BUSINESS_NAME, "telephone": PHONE, "url": "https://a1junkremovalandtreeserviceofomaha.com" }, "areaServed": [{ "@type": "City", "name": "Omaha", "addressRegion": "NE" }, { "@type": "City", "name": "Papillion", "addressRegion": "NE" }, { "@type": "City", "name": "La Vista", "addressRegion": "NE" }] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Can you clear out a retail space that still has fixtures bolted to the walls?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We remove wall-mounted shelving, display cases, counters, and other fixtures that are bolted or screwed in. We'll patch what we can and leave the space ready for the next tenant or renovation." } }, { "@type": "Question", "name": "Do you handle retail cleanouts on a tight deadline?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. We understand that lease deadlines don't wait. We can schedule crews for evenings and weekends and will work as fast as needed to get the space cleared on time." } }, { "@type": "Question", "name": "What happens to leftover inventory?", "acceptedAnswer": { "@type": "Answer", "text": "If there are usable products, we can work with you to donate them to local organizations. Anything that can't be donated gets disposed of properly. We don't just throw everything in a dumpster without sorting it." } }, { "@type": "Question", "name": "Can you remove flooring, counters, or built-in displays?", "acceptedAnswer": { "@type": "Answer", "text": "We can handle light demolition of non-structural elements like counters, built-in shelving, and some flooring. For major structural work, we'd recommend a general contractor, but we can clear everything else." } }] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://a1junkremovalandtreeserviceofomaha.com/" }, { "@type": "ListItem", "position": 2, "name": "Junk Removal", "item": "https://a1junkremovalandtreeserviceofomaha.com/junk-removal" }, { "@type": "ListItem", "position": 3, "name": "Retail Space Cleanout", "item": "https://a1junkremovalandtreeserviceofomaha.com/retail-cleanout" }] }) }} />

      <div className="bg-gray-50 border-b border-gray-200"><div className="container py-3"><nav className="flex items-center gap-2 text-sm text-gray-500"><Link href="/" className="hover:text-[#0A1628]">Home</Link><span>/</span><Link href="/junk-removal" className="hover:text-[#0A1628]">Junk Removal</Link><span>/</span><span className="text-[#0A1628] font-medium">Retail Space Cleanout</span></nav></div></div>

      <section className="relative py-16 lg:py-24 bg-[#0A1628] overflow-hidden">
        <div className="absolute inset-0 opacity-20"><img src={PLACEHOLDER_IMG} alt="" className="w-full h-full object-cover" /></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628] via-[#0A1628]/80 to-transparent" />
        <div className="container relative z-10"><div className="max-w-3xl">
          <div className="inline-block bg-[#E8611A]/20 text-[#E8611A] px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Commercial Services</div>
          <h1 className="font-display text-4xl lg:text-6xl text-white font-bold mb-4 uppercase">Retail Space Cleanout in Omaha</h1>
          <p className="text-white/90 text-xl lg:text-2xl font-semibold mb-8">Fixtures Out, Shelves Down, Space Ready for What's Next</p>
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
        <p>When a retail business closes, relocates, or a new tenant takes over, somebody has to deal with everything left behind — the shelving, the display cases, the signage, the back-room inventory, and all the random stuff that accumulates in a commercial space over the years. <strong>A1 Junk Removal and Tree Service</strong> handles retail space cleanouts across the Omaha metro. We strip the space down so it's ready for the next chapter, whether that's a new business moving in or a full renovation.</p>

        <p>We've cleared out storefronts in Papillion, strip mall units in La Vista, and standalone retail buildings across the Omaha area. Every retail cleanout is a little different — a clothing store has racks and mannequins, a restaurant has kitchen equipment and booths, a convenience store has coolers and shelving. We adapt to whatever the space throws at us and get it cleared on deadline.</p>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">What We Strip Out of Retail Spaces</h2>

        <div className="space-y-4 not-prose">
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Display Fixtures and Shelving</h3><p className="text-gray-600 mt-1">Gondola shelving, wall-mounted displays, glass cases, mannequins, clothing racks, and pegboard systems. We unbolt, disassemble, and haul it all.</p></div></div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Counters, Registers, and POS Equipment</h3><p className="text-gray-600 mt-1">Checkout counters, cash wraps, register stands, and point-of-sale hardware. We remove the built-in stuff that the previous tenant left bolted to the floor.</p></div></div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Signage and Branding Materials</h3><p className="text-gray-600 mt-1">Interior and exterior signs, window graphics, banners, menu boards, and promotional displays. We take down everything that identifies the previous business.</p></div></div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Back Room and Storage Areas</h3><p className="text-gray-600 mt-1">Old inventory, shipping supplies, break room furniture, filing cabinets, and the mountain of cardboard that every retail back room seems to accumulate.</p></div></div>
        </div>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">Meeting Lease Deadlines</h2>
        <p>The clock is almost always ticking on a retail cleanout. Landlords want the space turned over, new tenants need to start their build-out, and the old lease has a move-out deadline with penalties attached. We get that urgency. We can mobilize quickly, work evenings and weekends, and bring extra crew when the timeline is tight. We've done same-week cleanouts for property managers who needed a space emptied before the end of the month. If the cleanout also involves some <Link href="/light-demolition" className="text-[#E8611A] font-semibold hover:underline">light demolition work</Link> — tearing out non-structural walls, removing built-in counters, pulling up old flooring — we can handle that in the same visit.</p>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">What We Do with the Fixtures</h2>
        <p>A lot of retail fixtures still have value. Metal shelving, glass display cases, and commercial-grade equipment can often be resold or donated. We separate usable items from trash and route them accordingly. Metal goes to recycling. Fixtures in good shape go to resellers or donation. The rest goes to proper disposal. This sorting process helps keep your cleanout cost down and keeps usable materials in circulation. If you're also dealing with a <Link href="/warehouse-cleanout" className="text-[#E8611A] font-semibold hover:underline">warehouse or back-of-house space</Link> connected to the retail location, we can clear both in one project.</p>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6 not-prose">
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">Can you clear out a retail space that still has fixtures bolted to the walls?</h3><p className="text-gray-600">Yes. We remove wall-mounted shelving, display cases, counters, and other fixtures that are bolted or screwed in. We'll patch what we can and leave the space ready for the next tenant or renovation.</p></div>
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">Do you handle retail cleanouts on a tight deadline?</h3><p className="text-gray-600">Absolutely. We understand that lease deadlines don't wait. We can schedule crews for evenings and weekends and will work as fast as needed to get the space cleared on time.</p></div>
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">What happens to leftover inventory?</h3><p className="text-gray-600">If there are usable products, we can work with you to donate them to local organizations. Anything that can't be donated gets disposed of properly. We don't just throw everything in a dumpster without sorting it.</p></div>
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">Can you remove flooring, counters, or built-in displays?</h3><p className="text-gray-600">We can handle light demolition of non-structural elements like counters, built-in shelving, and some flooring. For major structural work, we'd recommend a general contractor, but we can clear everything else.</p></div>
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
          <h2 className="font-display text-3xl lg:text-5xl text-white font-bold mb-4">RETAIL SPACE NEEDS CLEARING?</h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">Get a free estimate for retail cleanout in Omaha. We strip the fixtures, haul the inventory, and leave the space ready for the next tenant.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={PHONE_LINK} className="inline-flex items-center justify-center gap-2 bg-[#E8611A] text-white px-8 py-4 rounded font-bold text-lg transition-colors"><Phone className="w-5 h-5" /> CALL {PHONE}</a>
            <Link href="/free-estimate" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded font-bold text-lg hover:bg-white/10 transition-colors">REQUEST ONLINE ESTIMATE</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
