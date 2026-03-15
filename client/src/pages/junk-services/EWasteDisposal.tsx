/*
  E-WASTE DISPOSAL — Dedicated Service Page
  URL: /e-waste-disposal
*/

import { useEffect } from "react";
import { Link } from "wouter";
import { PHONE, PHONE_LINK, BUSINESS_NAME, PLACEHOLDER_IMG, CTA_BG_IMG } from "@/lib/services-data";
import { Phone, ArrowRight, Clock, Star, Shield, DollarSign, CheckCircle, ChevronRight } from "lucide-react";

const relatedServices = [
  { slug: "tv-removal", title: "Television Removal" },
  { slug: "appliance-removal", title: "Appliance Removal" },
  { slug: "office-furniture-removal", title: "Office Furniture Removal" },
  { slug: "commercial-junk-removal", title: "Commercial Junk Removal" },
];

export default function EWasteDisposal() {
  useEffect(() => {
    document.title = "E-Waste Disposal Omaha | A1 Junk Removal and Tree Service";
    const metaDesc = document.querySelector('meta[name="description"]');
    const content = "E-waste disposal in Omaha. A1 Junk Removal picks up old computers, monitors, printers, and electronics for proper recycling. Call (402) 612-2373.";
    if (metaDesc) { metaDesc.setAttribute("content", content); } else { const meta = document.createElement("meta"); meta.name = "description"; meta.content = content; document.head.appendChild(meta); }
  }, []);

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Service", "name": "E-Waste Disposal Omaha", "description": "Electronic waste disposal and recycling in Omaha, NE. Pickup and proper disposal of computers, monitors, printers, and other electronic equipment.", "provider": { "@type": "LocalBusiness", "name": BUSINESS_NAME, "telephone": PHONE, "url": "https://a1junkremovalandtreeserviceofomaha.com" }, "areaServed": [{ "@type": "City", "name": "Omaha", "addressRegion": "NE" }, { "@type": "City", "name": "Elkhorn", "addressRegion": "NE" }, { "@type": "City", "name": "Bellevue", "addressRegion": "NE" }] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Can you wipe data from my old computers before disposal?", "acceptedAnswer": { "@type": "Answer", "text": "We recommend wiping or removing hard drives before we pick up computers. If you need help, we can remove the hard drives on site so you can destroy them yourself. The recycling facilities we use also follow data destruction protocols." } }, { "@type": "Question", "name": "Is it illegal to throw electronics in the regular trash?", "acceptedAnswer": { "@type": "Answer", "text": "Nebraska doesn't have a statewide e-waste ban, but many electronics contain hazardous materials like lead, mercury, and cadmium that shouldn't go to the landfill. Proper recycling is the responsible choice and keeps those materials out of the ground." } }, { "@type": "Question", "name": "Do you pick up e-waste from businesses?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We handle office cleanouts with large volumes of electronics — old computers, monitors, printers, servers, networking equipment, and phone systems. We can provide documentation of proper disposal if needed." } }, { "@type": "Question", "name": "What electronics can't you take?", "acceptedAnswer": { "@type": "Answer", "text": "We take virtually all consumer and office electronics. The only items we can't handle are those containing radioactive materials or certain industrial equipment. Standard household and office electronics are no problem." } }] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://a1junkremovalandtreeserviceofomaha.com/" }, { "@type": "ListItem", "position": 2, "name": "Junk Removal", "item": "https://a1junkremovalandtreeserviceofomaha.com/junk-removal" }, { "@type": "ListItem", "position": 3, "name": "E-Waste Disposal", "item": "https://a1junkremovalandtreeserviceofomaha.com/e-waste-disposal" }] }) }} />

      <div className="bg-gray-50 border-b border-gray-200"><div className="container py-3"><nav className="flex items-center gap-2 text-sm text-gray-500"><Link href="/" className="hover:text-[#0A1628]">Home</Link><span>/</span><Link href="/junk-removal" className="hover:text-[#0A1628]">Junk Removal</Link><span>/</span><span className="text-[#0A1628] font-medium">E-Waste Disposal</span></nav></div></div>

      <section className="relative py-16 lg:py-24 bg-[#0A1628] overflow-hidden">
        <div className="absolute inset-0 opacity-20"><img src={PLACEHOLDER_IMG} alt="" className="w-full h-full object-cover" /></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628] via-[#0A1628]/80 to-transparent" />
        <div className="container relative z-10"><div className="max-w-3xl">
          <div className="inline-block bg-[#E8611A]/20 text-[#E8611A] px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Specialty Disposal</div>
          <h1 className="font-display text-4xl lg:text-6xl text-white font-bold mb-4 uppercase">E-Waste Disposal & Electronics Recycling in Omaha</h1>
          <p className="text-white/90 text-xl lg:text-2xl font-semibold mb-8">Old Electronics Picked Up and Sent to Certified Recyclers</p>
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
        <p>There's a closet full of old laptops, a garage shelf stacked with dead printers, and a box of tangled cables that's been sitting in the basement since 2015. You can't throw electronics in the trash, the recycling drop-off is only open on the third Saturday of the month, and you're not driving across town with a carload of old monitors. <strong>A1 Junk Removal and Tree Service</strong> handles e-waste pickup and disposal across the Omaha metro. We come to you, collect all the old electronics, and take them to certified recycling facilities.</p>

        <p>We've picked up boxes of old office equipment from businesses in Elkhorn, cleared out garages full of outdated electronics in Bellevue, and hauled away everything from CRT monitors to broken gaming consoles across Omaha. If it plugs in or runs on batteries and you don't want it anymore, we'll take it.</p>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">Electronics We Pick Up</h2>

        <div className="space-y-4 not-prose">
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Computers and Laptops</h3><p className="text-gray-600 mt-1">Desktop towers, laptops, tablets, keyboards, mice, and all the peripherals that go with them. We also take servers and networking equipment from office cleanouts.</p></div></div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Monitors and Televisions</h3><p className="text-gray-600 mt-1">LCD monitors, LED screens, and old CRT monitors and TVs. CRTs contain lead and need special handling — we make sure they go to the right facility. See our <Link href="/tv-removal" className="text-[#E8611A] font-semibold hover:underline">TV removal page</Link> for details.</p></div></div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Printers, Copiers, and Scanners</h3><p className="text-gray-600 mt-1">Inkjet printers, laser printers, multifunction copiers, fax machines, and scanners. Office equipment that's been replaced and is taking up space.</p></div></div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Cables, Batteries, and Small Electronics</h3><p className="text-gray-600 mt-1">Power cords, USB cables, chargers, old cell phones, routers, modems, game consoles, and the drawer full of random electronics everyone has.</p></div></div>
        </div>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">Why Electronics Need Proper Disposal</h2>
        <p>Electronics contain materials that don't belong in a landfill. Circuit boards have lead solder. CRT monitors contain pounds of lead in the glass. Batteries have lithium, cadmium, and other heavy metals. LCD screens contain mercury in the backlighting. When these materials end up in a landfill, they can leach into groundwater over time. Proper recycling breaks electronics down into component materials — metals, plastics, glass — that can be recovered and reused. We take everything to certified facilities that handle the disassembly and material recovery properly.</p>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">Business and Office E-Waste Cleanouts</h2>
        <p>Offices accumulate electronics fast. Every few years there's a new round of computers, and the old ones end up in a storage closet. Add in printers, monitors, phone systems, and networking equipment, and you've got a room full of outdated technology. We handle bulk e-waste pickups for businesses — we'll clear the whole room, sort everything for recycling, and provide disposal documentation if you need it for compliance. If the office also has <Link href="/office-furniture-removal" className="text-[#E8611A] font-semibold hover:underline">old furniture</Link> that needs to go, we can take that in the same trip.</p>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6 not-prose">
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">Can you wipe data from my old computers before disposal?</h3><p className="text-gray-600">We recommend wiping or removing hard drives before we pick up computers. If you need help, we can remove the hard drives on site so you can destroy them yourself. The recycling facilities we use also follow data destruction protocols.</p></div>
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">Is it illegal to throw electronics in the regular trash?</h3><p className="text-gray-600">Nebraska doesn't have a statewide e-waste ban, but many electronics contain hazardous materials like lead, mercury, and cadmium that shouldn't go to the landfill. Proper recycling is the responsible choice and keeps those materials out of the ground.</p></div>
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">Do you pick up e-waste from businesses?</h3><p className="text-gray-600">Yes. We handle office cleanouts with large volumes of electronics — old computers, monitors, printers, servers, networking equipment, and phone systems. We can provide documentation of proper disposal if needed.</p></div>
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">What electronics can't you take?</h3><p className="text-gray-600">We take virtually all consumer and office electronics. The only items we can't handle are those containing radioactive materials or certain industrial equipment. Standard household and office electronics are no problem.</p></div>
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
          <h2 className="font-display text-3xl lg:text-5xl text-white font-bold mb-4">OLD ELECTRONICS PILING UP?</h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">Get a free estimate for e-waste pickup and recycling in Omaha. We collect it all and send it to certified recyclers.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={PHONE_LINK} className="inline-flex items-center justify-center gap-2 bg-[#E8611A] text-white px-8 py-4 rounded font-bold text-lg transition-colors"><Phone className="w-5 h-5" /> CALL {PHONE}</a>
            <Link href="/free-estimate" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded font-bold text-lg hover:bg-white/10 transition-colors">REQUEST ONLINE ESTIMATE</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
