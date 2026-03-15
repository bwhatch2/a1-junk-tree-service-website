/*
  OFFICE FURNITURE REMOVAL — Dedicated Service Page
  URL: /office-furniture-removal
*/

import { useEffect } from "react";
import { Link } from "wouter";
import { PHONE, PHONE_LINK, BUSINESS_NAME, PLACEHOLDER_IMG, CTA_BG_IMG } from "@/lib/services-data";
import { Phone, ArrowRight, Clock, Star, Shield, DollarSign, CheckCircle, ChevronRight } from "lucide-react";

const relatedServices = [
  { slug: "commercial-junk-removal", title: "Commercial Junk Removal" },
  { slug: "e-waste-disposal", title: "E-Waste Disposal" },
  { slug: "property-cleanouts", title: "Property Cleanouts" },
  { slug: "furniture-removal", title: "Furniture Removal" },
];

export default function OfficeFurnitureRemoval() {
  useEffect(() => {
    document.title = "Office Furniture Removal Omaha | A1 Junk Removal and Tree Service";
    const metaDesc = document.querySelector('meta[name="description"]');
    const content = "Professional office furniture removal in Omaha. A1 Junk Removal hauls desks, chairs, cubicles & filing cabinets. Locally owned, 40-60% less. Call (402) 612-2373.";
    if (metaDesc) { metaDesc.setAttribute("content", content); } else { const meta = document.createElement("meta"); meta.name = "description"; meta.content = content; document.head.appendChild(meta); }
  }, []);

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Service", "name": "Office Furniture Removal Omaha", "description": "Professional office furniture removal and commercial hauling services in Omaha, NE.", "provider": { "@type": "LocalBusiness", "name": BUSINESS_NAME, "telephone": PHONE, "url": "https://a1junkremovalandtreeserviceofomaha.com" }, "areaServed": [{ "@type": "City", "name": "Omaha", "addressRegion": "NE" }, { "@type": "City", "name": "Gretna", "addressRegion": "NE" }, { "@type": "City", "name": "Millard", "addressRegion": "NE" }] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Can you handle a full-floor cleanout?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We have the truck capacity and the manpower to handle large-scale liquidations for offices of any size in Omaha." } }, { "@type": "Question", "name": "Do you dismantle the cubicles for me?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. We bring the tools needed to break down modular furniture and workstations so they can be hauled away efficiently." } }, { "@type": "Question", "name": "Do you donate usable office furniture?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. If the furniture is in good condition, we prioritize taking it to local Omaha non-profits and charities." } }, { "@type": "Question", "name": "Are you insured to work in a commercial building?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We carry full liability and workers' compensation insurance to ensure your company and your building are protected while we work." } }] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://a1junkremovalandtreeserviceofomaha.com/" }, { "@type": "ListItem", "position": 2, "name": "Junk Removal", "item": "https://a1junkremovalandtreeserviceofomaha.com/junk-removal" }, { "@type": "ListItem", "position": 3, "name": "Office Furniture Removal", "item": "https://a1junkremovalandtreeserviceofomaha.com/office-furniture-removal" }] }) }} />

      <div className="bg-gray-50 border-b border-gray-200"><div className="container py-3"><nav className="flex items-center gap-2 text-sm text-gray-500"><Link href="/" className="hover:text-[#0A1628]">Home</Link><span>/</span><Link href="/junk-removal" className="hover:text-[#0A1628]">Junk Removal</Link><span>/</span><span className="text-[#0A1628] font-medium">Office Furniture Removal</span></nav></div></div>

      <section className="relative py-16 lg:py-24 bg-[#0A1628] overflow-hidden">
        <div className="absolute inset-0 opacity-20"><img src={PLACEHOLDER_IMG} alt="" className="w-full h-full object-cover" /></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628] via-[#0A1628]/80 to-transparent" />
        <div className="container relative z-10"><div className="max-w-3xl">
          <div className="inline-block bg-[#E8611A]/20 text-[#E8611A] px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Commercial Services</div>
          <h1 className="font-display text-4xl lg:text-6xl text-white font-bold mb-4 uppercase">Office Furniture Removal in Omaha</h1>
          <p className="text-white/90 text-xl lg:text-2xl font-semibold mb-8">Professional Hauling and Liquidation for Local Businesses</p>
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
        <p>Upgrading your office or relocating your company in Omaha, Gretna, or Millard creates a mountain of leftover assets that can slow down your operation. <strong>A1 Junk Removal and Tree Service</strong> provides professional Office Furniture Removal tailored to the needs of business owners and property managers. Our crew is out in the field every day, working fast to clear out your old desks, chairs, and cubicles so you can get back to what matters—running your business.</p>

        <p>Office furniture is notoriously heavy and often requires specialized tools to dismantle. You shouldn't have to pull your employees off their actual jobs to move heavy filing cabinets or break down modular desks. Because we are an honest, local outfit, we provide a more flexible and reliable service than the national commercial haulers. Our rates are consistently cheaper than the big franchises, helping you manage your relocation budget without sacrificing quality.</p>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">Our Commercial Removal Services</h2>

        <div className="space-y-4 not-prose">
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Executive Desk and Table Removal</h3><p className="text-gray-600 mt-1">Safely hauling away heavy wood or metal desks and conference tables in Douglas County.</p></div></div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Office Chair and Guest Seating</h3><p className="text-gray-600 mt-1">Quick, bulk removal of task chairs and lobby furniture from Omaha office parks.</p></div></div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Filing Cabinet and Shelving Hauling</h3><p className="text-gray-600 mt-1">Moving heavy, steel storage units and library shelving in Sarpy County.</p></div></div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Cubicle and Partition Dismantling</h3><p className="text-gray-600 mt-1">Breaking down and hauling away modular office walls and workstations in Papillion.</p></div></div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Breakroom and Lobby Clearouts</h3><p className="text-gray-600 mt-1">Removing old refrigerators, tables, and couches from communal office spaces.</p></div></div>
        </div>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">Flexible Scheduling for Businesses</h2>
        <p>We understand that disruption equals lost revenue. We are on the trucks across Bellevue and the surrounding metro, which means we can often coordinate pickups before or after your standard business hours to minimize the impact on your staff. We are a local business that prides itself on being honest and hard-working. You deal with local pros who provide the documentation you need for your records and a clean-sweep finish for your workspace. If you also need <Link href="/e-waste-disposal" className="text-[#E8611A] font-semibold hover:underline">old electronics hauled away</Link> or a full <Link href="/commercial-junk-removal" className="text-[#E8611A] font-semibold hover:underline">commercial cleanout</Link>, we handle that too.</p>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6 not-prose">
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">Can you handle a full-floor cleanout?</h3><p className="text-gray-600">Yes. We have the truck capacity and the manpower to handle large-scale liquidations for offices of any size in Omaha.</p></div>
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">Do you dismantle the cubicles for me?</h3><p className="text-gray-600">Absolutely. We bring the tools needed to break down modular furniture and workstations so they can be hauled away efficiently.</p></div>
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">Do you donate usable office furniture?</h3><p className="text-gray-600">Yes. If the furniture is in good condition, we prioritize taking it to local Omaha non-profits and charities.</p></div>
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">Are you insured to work in a commercial building?</h3><p className="text-gray-600">Yes. We carry full liability and workers' compensation insurance to ensure your company and your building are protected while we work.</p></div>
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
          <h2 className="font-display text-3xl lg:text-5xl text-white font-bold mb-4">CLEARING OUT YOUR OFFICE?</h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">Get a free estimate for professional office furniture removal in Omaha. We dismantle, load, and haul it all away.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={PHONE_LINK} className="inline-flex items-center justify-center gap-2 bg-[#E8611A] text-white px-8 py-4 rounded font-bold text-lg transition-colors"><Phone className="w-5 h-5" /> CALL {PHONE}</a>
            <Link href="/free-estimate" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded font-bold text-lg hover:bg-white/10 transition-colors">REQUEST ONLINE ESTIMATE</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
