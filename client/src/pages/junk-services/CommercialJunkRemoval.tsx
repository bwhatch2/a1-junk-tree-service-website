/*
  COMMERCIAL JUNK REMOVAL — Dedicated Service Page
  URL: /commercial-junk-removal
*/

import { useEffect } from "react";
import { Link } from "wouter";
import { PHONE, PHONE_LINK, BUSINESS_NAME, PLACEHOLDER_IMG, CTA_BG_IMG } from "@/lib/services-data";
import { Phone, ArrowRight, Clock, Star, Shield, DollarSign, CheckCircle, ChevronRight } from "lucide-react";

const relatedServices = [
  { slug: "office-furniture-removal", title: "Office Furniture Removal" },
  { slug: "warehouse-cleanout", title: "Warehouse Cleanout" },
  { slug: "retail-cleanout", title: "Retail Space Cleanout" },
  { slug: "construction-debris", title: "Construction Debris Removal" },
];

export default function CommercialJunkRemoval() {
  useEffect(() => {
    document.title = "Commercial Junk Removal Omaha | A1 Junk Removal and Tree Service";
    const metaDesc = document.querySelector('meta[name="description"]');
    const content = "Commercial junk removal in Omaha. A1 Junk Removal clears offices, warehouses, retail spaces, and commercial properties. Fast, affordable service. Call (402) 612-2373.";
    if (metaDesc) { metaDesc.setAttribute("content", content); } else { const meta = document.createElement("meta"); meta.name = "description"; meta.content = content; document.head.appendChild(meta); }
  }, []);

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Service", "name": "Commercial Junk Removal Omaha", "description": "Commercial junk removal services in Omaha, NE. Office cleanouts, warehouse clearing, retail space junk hauling, and business property cleanup.", "provider": { "@type": "LocalBusiness", "name": BUSINESS_NAME, "telephone": PHONE, "url": "https://a1junkremovalandtreeserviceofomaha.com" }, "areaServed": [{ "@type": "City", "name": "Omaha", "addressRegion": "NE" }, { "@type": "City", "name": "La Vista", "addressRegion": "NE" }, { "@type": "City", "name": "Bellevue", "addressRegion": "NE" }] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Can you work after hours or on weekends?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We work 7 days a week and can schedule pickups during evenings or weekends to avoid disrupting your business operations. Many of our commercial clients prefer after-hours service." } }, { "@type": "Question", "name": "Do you handle large-scale commercial cleanouts?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We've cleared entire office floors, warehouses, and retail spaces. For large jobs, we bring additional crew and trucks. We can also phase the work over multiple days if that works better for your schedule." } }, { "@type": "Question", "name": "Can you provide a certificate of disposal?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. If you need documentation for compliance, insurance, or record-keeping purposes, we can provide proof of proper disposal for the items we remove." } }, { "@type": "Question", "name": "Do you recycle commercial materials?", "acceptedAnswer": { "@type": "Answer", "text": "We sort and recycle as much as possible — metals, electronics, cardboard, and other recyclable materials. We can also coordinate with specialized recyclers for items like fluorescent bulbs or electronic equipment." } }] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://a1junkremovalandtreeserviceofomaha.com/" }, { "@type": "ListItem", "position": 2, "name": "Junk Removal", "item": "https://a1junkremovalandtreeserviceofomaha.com/junk-removal" }, { "@type": "ListItem", "position": 3, "name": "Commercial Junk Removal", "item": "https://a1junkremovalandtreeserviceofomaha.com/commercial-junk-removal" }] }) }} />

      <div className="bg-gray-50 border-b border-gray-200"><div className="container py-3"><nav className="flex items-center gap-2 text-sm text-gray-500"><Link href="/" className="hover:text-[#0A1628]">Home</Link><span>/</span><Link href="/junk-removal" className="hover:text-[#0A1628]">Junk Removal</Link><span>/</span><span className="text-[#0A1628] font-medium">Commercial Junk Removal</span></nav></div></div>

      <section className="relative py-16 lg:py-24 bg-[#0A1628] overflow-hidden">
        <div className="absolute inset-0 opacity-20"><img src={PLACEHOLDER_IMG} alt="" className="w-full h-full object-cover" /></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628] via-[#0A1628]/80 to-transparent" />
        <div className="container relative z-10"><div className="max-w-3xl">
          <div className="inline-block bg-[#E8611A]/20 text-[#E8611A] px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Commercial Services</div>
          <h1 className="font-display text-4xl lg:text-6xl text-white font-bold mb-4 uppercase">Commercial Junk Removal in Omaha</h1>
          <p className="text-white/90 text-xl lg:text-2xl font-semibold mb-8">Offices, Warehouses, and Business Properties Cleared Fast</p>
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
        <p>Your business has junk that needs to go. Maybe you're moving offices and there's a floor full of old desks and file cabinets. Maybe the warehouse has pallets of outdated inventory that's been sitting there for years. Or maybe you're renovating a retail space and need the old fixtures cleared out before the contractor starts. <strong>A1 Junk Removal and Tree Service</strong> handles commercial junk removal across the Omaha metro. We work around your business hours, move fast, and leave the space clean and ready for whatever comes next.</p>

        <p>We've cleared out office suites in downtown Omaha, emptied warehouses in La Vista, and hauled away old restaurant equipment from closed businesses in Bellevue. From a single truckload of old furniture to a multi-day cleanout of an entire commercial building, we have the crew and the trucks to handle it.</p>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">Commercial Properties We Service</h2>

        <div className="space-y-4 not-prose">
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Office Buildings and Suites</h3><p className="text-gray-600 mt-1">Desks, cubicles, chairs, file cabinets, conference tables, copiers, printers, and IT equipment. We clear individual offices or entire floors. See our <Link href="/office-furniture-removal" className="text-[#E8611A] font-semibold hover:underline">office furniture removal page</Link> for details.</p></div></div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Warehouses and Industrial Spaces</h3><p className="text-gray-600 mt-1">Pallets, racking, old inventory, packaging materials, machinery, and general warehouse debris. We handle large-volume jobs with the right equipment.</p></div></div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Retail Stores and Restaurants</h3><p className="text-gray-600 mt-1">Display fixtures, shelving, signage, kitchen equipment, booths, tables, and everything that needs to go when a business closes or remodels.</p></div></div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Construction and Renovation Sites</h3><p className="text-gray-600 mt-1">Demolition debris, old drywall, flooring, ceiling tiles, plumbing fixtures, and construction waste from commercial renovation projects.</p></div></div>
        </div>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">Working Around Your Business</h2>
        <p>We understand that a junk removal crew in the middle of your office during business hours isn't ideal. That's why we offer flexible scheduling — early mornings, evenings, weekends, whatever works for your operation. If you need us to work in phases so part of the building stays operational while we clear the rest, we can do that. If you need it all done overnight before the new tenant moves in Monday morning, we can do that too. We show up when we say we will, we work efficiently, and we don't leave a mess behind. Your building manager, landlord, or property management company won't have any complaints.</p>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">Disposal, Recycling, and Documentation</h2>
        <p>Commercial cleanouts generate a lot of material, and much of it is recyclable. Metal desks and file cabinets go to scrap recycling. Electronics go to certified e-waste processors. Cardboard and paper get recycled. We sort as we go and divert as much as possible from the landfill. If your business needs disposal documentation for compliance or insurance purposes, we can provide that. We keep records of where materials go and can give you a certificate of disposal if needed.</p>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6 not-prose">
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">Can you work after hours or on weekends?</h3><p className="text-gray-600">Yes. We work 7 days a week and can schedule pickups during evenings or weekends to avoid disrupting your business operations. Many of our commercial clients prefer after-hours service.</p></div>
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">Do you handle large-scale commercial cleanouts?</h3><p className="text-gray-600">Yes. We've cleared entire office floors, warehouses, and retail spaces. For large jobs, we bring additional crew and trucks. We can also phase the work over multiple days if that works better for your schedule.</p></div>
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">Can you provide a certificate of disposal?</h3><p className="text-gray-600">Yes. If you need documentation for compliance, insurance, or record-keeping purposes, we can provide proof of proper disposal for the items we remove.</p></div>
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">Do you recycle commercial materials?</h3><p className="text-gray-600">We sort and recycle as much as possible — metals, electronics, cardboard, and other recyclable materials. We can also coordinate with specialized recyclers for items like fluorescent bulbs or electronic equipment.</p></div>
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
          <h2 className="font-display text-3xl lg:text-5xl text-white font-bold mb-4">BUSINESS SPACE NEEDS CLEARING?</h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">Get a free estimate for commercial junk removal in Omaha. We work around your schedule and leave the space clean.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={PHONE_LINK} className="inline-flex items-center justify-center gap-2 bg-[#E8611A] text-white px-8 py-4 rounded font-bold text-lg transition-colors"><Phone className="w-5 h-5" /> CALL {PHONE}</a>
            <Link href="/free-estimate" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded font-bold text-lg hover:bg-white/10 transition-colors">REQUEST ONLINE ESTIMATE</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
