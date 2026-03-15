/*
  FORECLOSURE CLEANOUTS — Dedicated Service Page
  URL: /foreclosure-cleanouts
*/

import { useEffect } from "react";
import { Link } from "wouter";
import { PHONE, PHONE_LINK, BUSINESS_NAME, PLACEHOLDER_IMG, CTA_BG_IMG } from "@/lib/services-data";
import { Phone, ArrowRight, Clock, Star, Shield, DollarSign, CheckCircle, ChevronRight } from "lucide-react";

const relatedServices = [
  { slug: "eviction-cleanouts", title: "Eviction Cleanouts" },
  { slug: "property-cleanouts", title: "Property Cleanout Services" },
  { slug: "house-cleanout-services", title: "House Cleanout Services" },
  { slug: "trash-hauling", title: "Garbage & Trash Hauling" },
];

export default function ForeclosureCleanouts() {
  useEffect(() => {
    document.title = "Foreclosure Cleanout Omaha | A1 Junk Removal and Tree Service";
    const metaDesc = document.querySelector('meta[name="description"]');
    const content = "Foreclosure cleanout services in Omaha. A1 Junk Removal clears abandoned belongings, debris, and trash from foreclosed properties for banks and investors. Call (402) 612-2373.";
    if (metaDesc) { metaDesc.setAttribute("content", content); } else { const meta = document.createElement("meta"); meta.name = "description"; meta.content = content; document.head.appendChild(meta); }
  }, []);

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Service", "name": "Foreclosure Cleanout Omaha", "description": "Foreclosure cleanout services in Omaha, NE. Complete clearing of foreclosed properties for banks, lenders, investors, and real estate agents.", "provider": { "@type": "LocalBusiness", "name": BUSINESS_NAME, "telephone": PHONE, "url": "https://a1junkremovalandtreeserviceofomaha.com" }, "areaServed": [{ "@type": "City", "name": "Omaha", "addressRegion": "NE" }, { "@type": "City", "name": "Bellevue", "addressRegion": "NE" }, { "@type": "City", "name": "La Vista", "addressRegion": "NE" }] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Do you work with banks and asset management companies?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We work with banks, lenders, asset management companies, REO agents, and real estate investors. We understand the documentation and timeline requirements that come with institutional clients." } }, { "@type": "Question", "name": "Can you provide before and after photos?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We photograph the property before we start and after we finish. This documentation is standard for bank-owned properties and helps with your records and reporting." } }, { "@type": "Question", "name": "How quickly can you clear a foreclosed property?", "acceptedAnswer": { "@type": "Answer", "text": "Most single-family foreclosure cleanouts are completed in one day. Larger properties or homes with extreme accumulation may take two days. We prioritize fast turnaround since these properties are often on tight timelines." } }, { "@type": "Question", "name": "Do you handle yard cleanup too?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Foreclosed properties often have overgrown yards, accumulated yard waste, and outdoor debris. We can clear the exterior along with the interior to get the property fully presentable." } }] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://a1junkremovalandtreeserviceofomaha.com/" }, { "@type": "ListItem", "position": 2, "name": "Junk Removal", "item": "https://a1junkremovalandtreeserviceofomaha.com/junk-removal" }, { "@type": "ListItem", "position": 3, "name": "Foreclosure Cleanouts", "item": "https://a1junkremovalandtreeserviceofomaha.com/foreclosure-cleanouts" }] }) }} />

      <div className="bg-gray-50 border-b border-gray-200"><div className="container py-3"><nav className="flex items-center gap-2 text-sm text-gray-500"><Link href="/" className="hover:text-[#0A1628]">Home</Link><span>/</span><Link href="/junk-removal" className="hover:text-[#0A1628]">Junk Removal</Link><span>/</span><span className="text-[#0A1628] font-medium">Foreclosure Cleanouts</span></nav></div></div>

      <section className="relative py-16 lg:py-24 bg-[#0A1628] overflow-hidden">
        <div className="absolute inset-0 opacity-20"><img src={PLACEHOLDER_IMG} alt="" className="w-full h-full object-cover" /></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628] via-[#0A1628]/80 to-transparent" />
        <div className="container relative z-10"><div className="max-w-3xl">
          <div className="inline-block bg-[#E8611A]/20 text-[#E8611A] px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Property Services</div>
          <h1 className="font-display text-4xl lg:text-6xl text-white font-bold mb-4 uppercase">Foreclosure Cleanout Services in Omaha</h1>
          <p className="text-white/90 text-xl lg:text-2xl font-semibold mb-8">Bank-Owned Properties Cleared and Market-Ready</p>
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
        <p>Foreclosed properties rarely get left in good shape. The previous owner walked away, and everything they didn't take is still inside — furniture, trash, personal belongings, sometimes damage from neglect or frustration. The yard is overgrown, the garage is full, and the property can't go on the market until it's cleared out. <strong>A1 Junk Removal and Tree Service</strong> handles foreclosure cleanouts across the Omaha metro for banks, lenders, asset management companies, REO agents, and real estate investors. We clear the property completely and leave it ready for inspection, listing, or renovation.</p>

        <p>We've cleared foreclosed homes in Bellevue that sat vacant for months with everything still inside, emptied properties in La Vista where the previous owner left rooms full of furniture and bags of trash, and handled multi-property cleanouts across Omaha for investment companies acquiring REO portfolios. Every foreclosure is different, but the goal is always the same — get the property empty and presentable as fast as possible.</p>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">What We Clear from Foreclosed Properties</h2>

        <div className="space-y-4 not-prose">
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Abandoned Furniture and Belongings</h3><p className="text-gray-600 mt-1">Beds, couches, dressers, tables, clothing, kitchenware, and everything the previous owner left behind. We clear every room from floor to ceiling.</p></div></div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Trash and Accumulated Debris</h3><p className="text-gray-600 mt-1">Bags of garbage, loose trash, food waste, and general debris that accumulates in vacant properties. Some foreclosures have months of neglect to deal with.</p></div></div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Garage, Basement, and Storage Areas</h3><p className="text-gray-600 mt-1">Tools, boxes, old appliances, holiday decorations, and everything stored in the garage, basement, attic, and outdoor sheds.</p></div></div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Yard Debris and Exterior Junk</h3><p className="text-gray-600 mt-1">Overgrown vegetation, fallen branches, old patio furniture, broken grills, and anything else cluttering the exterior that hurts curb appeal.</p></div></div>
        </div>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">Documentation and Professional Standards</h2>
        <p>Banks and asset management companies need documentation. We photograph the property before we start and after we finish, providing clear before-and-after records for your files. We can work from a scope of work provided by the asset manager, or we can walk the property with you and agree on exactly what needs to be done. We carry liability insurance, we show up when scheduled, and we complete the work within the agreed timeline. If you manage multiple properties, we can set up a standing arrangement where you send us the address and access information and we handle the rest.</p>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">Getting the Property Market-Ready</h2>
        <p>A foreclosure cleanout is usually just the first step. Once the property is empty, it typically needs repairs, painting, and cleaning before it can be listed. Our job is to get everything out so that work can begin. We leave the property broom-clean — all items removed, loose trash bagged and hauled, and the space ready for your contractors. If the property also needs <Link href="/yard-waste-removal" className="text-[#E8611A] font-semibold hover:underline">yard waste removal</Link> or exterior cleanup to improve curb appeal, we handle that in the same visit.</p>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6 not-prose">
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">Do you work with banks and asset management companies?</h3><p className="text-gray-600">Yes. We work with banks, lenders, asset management companies, REO agents, and real estate investors. We understand the documentation and timeline requirements that come with institutional clients.</p></div>
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">Can you provide before and after photos?</h3><p className="text-gray-600">Yes. We photograph the property before we start and after we finish. This documentation is standard for bank-owned properties and helps with your records and reporting.</p></div>
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">How quickly can you clear a foreclosed property?</h3><p className="text-gray-600">Most single-family foreclosure cleanouts are completed in one day. Larger properties or homes with extreme accumulation may take two days. We prioritize fast turnaround since these properties are often on tight timelines.</p></div>
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">Do you handle yard cleanup too?</h3><p className="text-gray-600">Yes. Foreclosed properties often have overgrown yards, accumulated yard waste, and outdoor debris. We can clear the exterior along with the interior to get the property fully presentable.</p></div>
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
          <h2 className="font-display text-3xl lg:text-5xl text-white font-bold mb-4">FORECLOSED PROPERTY NEEDS CLEARING?</h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">Get a free estimate for foreclosure cleanout services in Omaha. We clear the property fast so it can go to market.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={PHONE_LINK} className="inline-flex items-center justify-center gap-2 bg-[#E8611A] text-white px-8 py-4 rounded font-bold text-lg transition-colors"><Phone className="w-5 h-5" /> CALL {PHONE}</a>
            <Link href="/free-estimate" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded font-bold text-lg hover:bg-white/10 transition-colors">REQUEST ONLINE ESTIMATE</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
