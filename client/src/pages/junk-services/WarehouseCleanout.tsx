/*
  WAREHOUSE CLEANOUT — Dedicated Service Page
  URL: /warehouse-cleanout
*/

import { useEffect } from "react";
import { Link } from "wouter";
import { PHONE, PHONE_LINK, BUSINESS_NAME, PLACEHOLDER_IMG, CTA_BG_IMG } from "@/lib/services-data";
import { Phone, ArrowRight, Clock, Star, Shield, DollarSign, CheckCircle, ChevronRight } from "lucide-react";

const relatedServices = [
  { slug: "commercial-junk-removal", title: "Commercial Junk Removal" },
  { slug: "retail-cleanout", title: "Retail Space Cleanout" },
  { slug: "office-furniture-removal", title: "Office Furniture Removal" },
  { slug: "construction-debris", title: "Construction Debris Removal" },
];

export default function WarehouseCleanout() {
  useEffect(() => {
    document.title = "Warehouse Cleanout Omaha | A1 Junk Removal and Tree Service";
    const metaDesc = document.querySelector('meta[name="description"]');
    const content = "Warehouse cleanout services in Omaha. A1 Junk Removal clears shelving, pallets, old inventory, and equipment from commercial spaces. Call (402) 612-2373.";
    if (metaDesc) { metaDesc.setAttribute("content", content); } else { const meta = document.createElement("meta"); meta.name = "description"; meta.content = content; document.head.appendChild(meta); }
  }, []);

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Service", "name": "Warehouse Cleanout Omaha", "description": "Commercial warehouse cleanout services in Omaha, NE. Removal of shelving, pallets, inventory, equipment, and debris from warehouse spaces.", "provider": { "@type": "LocalBusiness", "name": BUSINESS_NAME, "telephone": PHONE, "url": "https://a1junkremovalandtreeserviceofomaha.com" }, "areaServed": [{ "@type": "City", "name": "Omaha", "addressRegion": "NE" }, { "@type": "City", "name": "Elkhorn", "addressRegion": "NE" }, { "@type": "City", "name": "Millard", "addressRegion": "NE" }] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Can you handle a large warehouse with heavy equipment still inside?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We've cleared warehouses with industrial shelving, pallet racking, heavy machinery components, and thousands of pounds of old inventory. We bring the right crew and equipment for the scale of the job." } }, { "@type": "Question", "name": "Do you work around our business hours?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. We can schedule warehouse cleanouts during evenings, weekends, or whenever works best for your operations. We'll work around your schedule, not the other way around." } }, { "@type": "Question", "name": "What do you do with the scrap metal from shelving and racking?", "acceptedAnswer": { "@type": "Answer", "text": "Metal shelving, racking, and other scrap gets taken to a recycling facility. This helps offset disposal costs and keeps usable materials out of the landfill." } }, { "@type": "Question", "name": "How do you price a warehouse cleanout?", "acceptedAnswer": { "@type": "Answer", "text": "We base it on the volume of material, the type of items being removed, and the labor involved. We'll walk the space with you and give you a firm quote before any work begins." } }] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://a1junkremovalandtreeserviceofomaha.com/" }, { "@type": "ListItem", "position": 2, "name": "Junk Removal", "item": "https://a1junkremovalandtreeserviceofomaha.com/junk-removal" }, { "@type": "ListItem", "position": 3, "name": "Warehouse Cleanout", "item": "https://a1junkremovalandtreeserviceofomaha.com/warehouse-cleanout" }] }) }} />

      <div className="bg-gray-50 border-b border-gray-200"><div className="container py-3"><nav className="flex items-center gap-2 text-sm text-gray-500"><Link href="/" className="hover:text-[#0A1628]">Home</Link><span>/</span><Link href="/junk-removal" className="hover:text-[#0A1628]">Junk Removal</Link><span>/</span><span className="text-[#0A1628] font-medium">Warehouse Cleanout</span></nav></div></div>

      <section className="relative py-16 lg:py-24 bg-[#0A1628] overflow-hidden">
        <div className="absolute inset-0 opacity-20"><img src={PLACEHOLDER_IMG} alt="" className="w-full h-full object-cover" /></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628] via-[#0A1628]/80 to-transparent" />
        <div className="container relative z-10"><div className="max-w-3xl">
          <div className="inline-block bg-[#E8611A]/20 text-[#E8611A] px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Commercial Services</div>
          <h1 className="font-display text-4xl lg:text-6xl text-white font-bold mb-4 uppercase">Warehouse Cleanout in Omaha</h1>
          <p className="text-white/90 text-xl lg:text-2xl font-semibold mb-8">Clear the Floor So You Can Move Forward</p>
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
        <p>Warehouses accumulate junk at an industrial scale. Old pallet racking nobody uses, damaged inventory that never got written off, broken equipment shoved into a corner three years ago, and enough cardboard to fill a swimming pool. <strong>A1 Junk Removal and Tree Service</strong> provides warehouse cleanout services across the Omaha metro for businesses that need their floor space back. Whether you're closing a facility, preparing for a new tenant, or just clearing out years of accumulated clutter, we handle the heavy lifting.</p>

        <p>We've worked in warehouses and industrial spaces across Elkhorn, Millard, and the Omaha business corridors. Some jobs are a few truckloads of old shelving and pallets. Others are full-scale cleanouts where we're removing everything from the dock doors to the back wall. Either way, we show up with the crew and equipment to get it done on your timeline.</p>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">What We Remove from Warehouses</h2>

        <div className="space-y-4 not-prose">
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Shelving and Pallet Racking</h3><p className="text-gray-600 mt-1">Steel shelving units, pallet racking systems, wire decking, and industrial storage fixtures. We disassemble and haul it all — metal gets recycled.</p></div></div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Old Inventory and Packaging</h3><p className="text-gray-600 mt-1">Unsold product, damaged goods, pallets of returns, shrink wrap, cardboard, and packing materials that have been piling up for months.</p></div></div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Office Areas Within the Warehouse</h3><p className="text-gray-600 mt-1">Desks, filing cabinets, computers, printers, break room furniture. Most warehouses have a front office section that needs clearing too.</p></div></div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Equipment and Fixtures</h3><p className="text-gray-600 mt-1">Conveyor components, workbenches, tool cabinets, compressors, and other equipment that's no longer in service. We handle the disconnection and removal.</p></div></div>
        </div>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">Working on Your Schedule</h2>
        <p>We understand that a warehouse cleanout can't always happen during business hours. If your operation is still running in part of the building, we'll work around it. We can schedule crews for evenings, weekends, or phased cleanouts where we clear one section at a time. We've done multi-day cleanouts for businesses that needed to keep shipping from one side of the building while we cleared the other. The goal is to get your space back without disrupting your business. If you've also got <Link href="/office-furniture-removal" className="text-[#E8611A] font-semibold hover:underline">office furniture that needs to go</Link>, we'll handle that as part of the same project.</p>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">Recycling and Responsible Disposal</h2>
        <p>Warehouse cleanouts generate a lot of recyclable material — steel, aluminum, cardboard, pallets, and electronics. We separate everything we can and route it to the appropriate recycling facilities. Metal shelving and racking alone can account for thousands of pounds of recyclable steel. Cardboard and pallets get baled or taken to recycling centers. This isn't just good for the environment — it helps keep your cost down because we're paying less in landfill fees. For jobs that also involve <Link href="/construction-debris" className="text-[#E8611A] font-semibold hover:underline">construction debris from a renovation</Link>, we can handle both the cleanout and the demo waste in one project.</p>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6 not-prose">
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">Can you handle a large warehouse with heavy equipment still inside?</h3><p className="text-gray-600">Yes. We've cleared warehouses with industrial shelving, pallet racking, heavy machinery components, and thousands of pounds of old inventory. We bring the right crew and equipment for the scale of the job.</p></div>
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">Do you work around our business hours?</h3><p className="text-gray-600">Absolutely. We can schedule warehouse cleanouts during evenings, weekends, or whenever works best for your operations. We'll work around your schedule, not the other way around.</p></div>
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">What do you do with the scrap metal from shelving and racking?</h3><p className="text-gray-600">Metal shelving, racking, and other scrap gets taken to a recycling facility. This helps offset disposal costs and keeps usable materials out of the landfill.</p></div>
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">How do you price a warehouse cleanout?</h3><p className="text-gray-600">We base it on the volume of material, the type of items being removed, and the labor involved. We'll walk the space with you and give you a firm quote before any work begins.</p></div>
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
          <h2 className="font-display text-3xl lg:text-5xl text-white font-bold mb-4">WAREHOUSE NEEDS CLEARING?</h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">Get a free estimate for warehouse cleanout in Omaha. We handle the shelving, the inventory, the equipment, and everything else.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={PHONE_LINK} className="inline-flex items-center justify-center gap-2 bg-[#E8611A] text-white px-8 py-4 rounded font-bold text-lg transition-colors"><Phone className="w-5 h-5" /> CALL {PHONE}</a>
            <Link href="/free-estimate" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded font-bold text-lg hover:bg-white/10 transition-colors">REQUEST ONLINE ESTIMATE</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
