/*
  EVICTION CLEANOUTS — Dedicated Service Page
  URL: /eviction-cleanouts
*/

import { useEffect } from "react";
import { Link } from "wouter";
import { PHONE, PHONE_LINK, BUSINESS_NAME, PLACEHOLDER_IMG, CTA_BG_IMG } from "@/lib/services-data";
import { Phone, ArrowRight, Clock, Star, Shield, DollarSign, CheckCircle, ChevronRight } from "lucide-react";

const relatedServices = [
  { slug: "foreclosure-cleanouts", title: "Foreclosure Cleanouts" },
  { slug: "apartment-cleanouts", title: "Apartment Cleanouts" },
  { slug: "property-cleanouts", title: "Property Cleanout Services" },
  { slug: "trash-hauling", title: "Garbage & Trash Hauling" },
];

export default function EvictionCleanouts() {
  useEffect(() => {
    document.title = "Eviction Cleanout Omaha | A1 Junk Removal and Tree Service";
    const metaDesc = document.querySelector('meta[name="description"]');
    const content = "Eviction cleanout services in Omaha. A1 Junk Removal clears abandoned belongings, trash, and debris from rental properties fast. Call (402) 612-2373.";
    if (metaDesc) { metaDesc.setAttribute("content", content); } else { const meta = document.createElement("meta"); meta.name = "description"; meta.content = content; document.head.appendChild(meta); }
  }, []);

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Service", "name": "Eviction Cleanout Omaha", "description": "Eviction cleanout services in Omaha, NE. Fast clearing of abandoned belongings, furniture, trash, and debris from rental properties after tenant eviction.", "provider": { "@type": "LocalBusiness", "name": BUSINESS_NAME, "telephone": PHONE, "url": "https://a1junkremovalandtreeserviceofomaha.com" }, "areaServed": [{ "@type": "City", "name": "Omaha", "addressRegion": "NE" }, { "@type": "City", "name": "La Vista", "addressRegion": "NE" }, { "@type": "City", "name": "Millard", "addressRegion": "NE" }] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "How fast can you clear an eviction property?", "acceptedAnswer": { "@type": "Answer", "text": "Most single-unit eviction cleanouts are done in one day. We understand that every day the unit sits empty costs you money, so we prioritize fast turnaround. Call us and we can usually be there within 24-48 hours." } }, { "@type": "Question", "name": "Do you handle the legal storage requirements for abandoned property?", "acceptedAnswer": { "@type": "Answer", "text": "We handle the physical removal. Nebraska law has specific requirements about storing abandoned property after an eviction. We recommend consulting with your attorney about the holding period. Once you're legally clear to dispose of items, we take it from there." } }, { "@type": "Question", "name": "Can you clean multiple units at once?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. If you manage multiple properties or an apartment complex with several units that need clearing, we can handle them in sequence or bring additional crew to work multiple units simultaneously." } }, { "@type": "Question", "name": "Do you also do minor repairs or just removal?", "acceptedAnswer": { "@type": "Answer", "text": "We focus on junk removal and cleanout. We'll remove all the abandoned items, bag up loose trash, and leave the unit broom-clean. For repairs, painting, and deep cleaning, you'll want to bring in your maintenance team or contractors after we're done." } }] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://a1junkremovalandtreeserviceofomaha.com/" }, { "@type": "ListItem", "position": 2, "name": "Junk Removal", "item": "https://a1junkremovalandtreeserviceofomaha.com/junk-removal" }, { "@type": "ListItem", "position": 3, "name": "Eviction Cleanouts", "item": "https://a1junkremovalandtreeserviceofomaha.com/eviction-cleanouts" }] }) }} />

      <div className="bg-gray-50 border-b border-gray-200"><div className="container py-3"><nav className="flex items-center gap-2 text-sm text-gray-500"><Link href="/" className="hover:text-[#0A1628]">Home</Link><span>/</span><Link href="/junk-removal" className="hover:text-[#0A1628]">Junk Removal</Link><span>/</span><span className="text-[#0A1628] font-medium">Eviction Cleanouts</span></nav></div></div>

      <section className="relative py-16 lg:py-24 bg-[#0A1628] overflow-hidden">
        <div className="absolute inset-0 opacity-20"><img src={PLACEHOLDER_IMG} alt="" className="w-full h-full object-cover" /></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628] via-[#0A1628]/80 to-transparent" />
        <div className="container relative z-10"><div className="max-w-3xl">
          <div className="inline-block bg-[#E8611A]/20 text-[#E8611A] px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Property Services</div>
          <h1 className="font-display text-4xl lg:text-6xl text-white font-bold mb-4 uppercase">Eviction Cleanout Services in Omaha</h1>
          <p className="text-white/90 text-xl lg:text-2xl font-semibold mb-8">Rental Properties Cleared Fast So You Can Re-Rent</p>
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
        <p>The tenant is gone but their stuff isn't. Broken furniture in the living room, bags of trash in the kitchen, clothes scattered across the bedrooms, and who knows what's in the basement. Every day that unit sits full of someone else's junk is a day you're not collecting rent. <strong>A1 Junk Removal and Tree Service</strong> handles eviction cleanouts across the Omaha metro. We come in, clear everything out, and leave the unit broom-clean so your maintenance team can start turning it around.</p>

        <p>We've cleared eviction properties for landlords in La Vista, emptied trashed apartments in Millard, and handled multi-unit cleanouts for property management companies across Omaha. We've seen everything from units that were left mostly clean to units that look like they were abandoned mid-move with everything still inside. We handle all of it.</p>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">What Gets Left Behind</h2>

        <div className="space-y-4 not-prose">
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Furniture and Mattresses</h3><p className="text-gray-600 mt-1">Couches, beds, dressers, tables, chairs, and mattresses. Sometimes entire rooms of furniture are left behind because the tenant couldn't or didn't bother to move it.</p></div></div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Trash and Household Debris</h3><p className="text-gray-600 mt-1">Bags of garbage, loose trash, food waste, cleaning supplies, and general debris scattered throughout the unit. Some units have weeks of accumulated trash.</p></div></div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Clothing and Personal Items</h3><p className="text-gray-600 mt-1">Closets full of clothes, shoes, personal care items, and miscellaneous belongings left in drawers and cabinets throughout the unit.</p></div></div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Appliances and Electronics</h3><p className="text-gray-600 mt-1">Microwaves, small appliances, old TVs, gaming consoles, and other electronics that were left behind. We haul it all out.</p></div></div>
        </div>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">Speed Matters for Landlords</h2>
        <p>We get it — vacancy costs money. Every day that unit isn't rented is lost income, plus you're still paying the mortgage, insurance, and taxes on it. That's why we prioritize fast turnaround on eviction cleanouts. Call us today and we can typically be there within 24-48 hours. Most single-unit cleanouts are done in one day. We come in with enough crew to move fast, clear everything out, bag up loose trash, and leave the unit ready for your painters, cleaners, or maintenance crew to start the turnover process.</p>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">Working with Property Managers</h2>
        <p>If you manage multiple properties, you know eviction cleanouts are an ongoing part of the business. We work with several property management companies in Omaha and can set up a standing relationship where you call us whenever a unit needs clearing. We know the drill — show up on time, clear the unit completely, leave it broom-clean, and send you the invoice. No surprises, no delays. If you also need <Link href="/apartment-cleanouts" className="text-[#E8611A] font-semibold hover:underline">apartment cleanouts</Link> for units where tenants moved out and left stuff behind (not eviction situations), we handle those the same way.</p>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6 not-prose">
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">How fast can you clear an eviction property?</h3><p className="text-gray-600">Most single-unit eviction cleanouts are done in one day. We understand that every day the unit sits empty costs you money, so we prioritize fast turnaround. Call us and we can usually be there within 24-48 hours.</p></div>
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">Do you handle the legal storage requirements for abandoned property?</h3><p className="text-gray-600">We handle the physical removal. Nebraska law has specific requirements about storing abandoned property after an eviction. We recommend consulting with your attorney about the holding period. Once you're legally clear to dispose of items, we take it from there.</p></div>
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">Can you clean multiple units at once?</h3><p className="text-gray-600">Yes. If you manage multiple properties or an apartment complex with several units that need clearing, we can handle them in sequence or bring additional crew to work multiple units simultaneously.</p></div>
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">Do you also do minor repairs or just removal?</h3><p className="text-gray-600">We focus on junk removal and cleanout. We'll remove all the abandoned items, bag up loose trash, and leave the unit broom-clean. For repairs, painting, and deep cleaning, you'll want to bring in your maintenance team or contractors after we're done.</p></div>
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
          <h2 className="font-display text-3xl lg:text-5xl text-white font-bold mb-4">TENANT LEFT A MESS BEHIND?</h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">Get a free estimate for eviction cleanout services in Omaha. We clear the unit fast so you can start the turnover.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={PHONE_LINK} className="inline-flex items-center justify-center gap-2 bg-[#E8611A] text-white px-8 py-4 rounded font-bold text-lg transition-colors"><Phone className="w-5 h-5" /> CALL {PHONE}</a>
            <Link href="/free-estimate" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded font-bold text-lg hover:bg-white/10 transition-colors">REQUEST ONLINE ESTIMATE</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
