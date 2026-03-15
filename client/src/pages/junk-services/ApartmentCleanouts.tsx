/*
  APARTMENT CLEANOUT & JUNK REMOVAL — Dedicated Service Page
  URL: /apartment-cleanouts
*/

import { useEffect } from "react";
import { Link } from "wouter";
import { PHONE, PHONE_LINK, BUSINESS_NAME, PLACEHOLDER_IMG, CTA_BG_IMG } from "@/lib/services-data";
import { Phone, ArrowRight, Clock, Star, Shield, DollarSign, CheckCircle, ChevronRight } from "lucide-react";

const relatedServices = [
  { slug: "eviction-cleanouts", title: "Eviction Cleanouts" },
  { slug: "property-cleanouts", title: "Property Cleanout Services" },
  { slug: "furniture-removal", title: "Furniture Removal" },
  { slug: "appliance-removal", title: "Appliance Removal" },
];

export default function ApartmentCleanouts() {
  useEffect(() => {
    document.title = "Apartment Cleanout Services Omaha | A1 Junk Removal and Tree Service";
    const metaDesc = document.querySelector('meta[name="description"]');
    const content = "Apartment cleanout services in Omaha. A1 Junk Removal handles tenant move-outs, unit turnovers, and full apartment clearing for property managers. Call (402) 612-2373.";
    if (metaDesc) { metaDesc.setAttribute("content", content); } else { const meta = document.createElement("meta"); meta.name = "description"; meta.content = content; document.head.appendChild(meta); }
  }, []);

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Service", "name": "Apartment Cleanout Services Omaha", "description": "Apartment cleanout and junk removal services in Omaha, NE. Tenant move-out clearing, unit turnovers, and full apartment junk hauling.", "provider": { "@type": "LocalBusiness", "name": BUSINESS_NAME, "telephone": PHONE, "url": "https://a1junkremovalandtreeserviceofomaha.com" }, "areaServed": [{ "@type": "City", "name": "Omaha", "addressRegion": "NE" }, { "@type": "City", "name": "Bellevue", "addressRegion": "NE" }, { "@type": "City", "name": "La Vista", "addressRegion": "NE" }] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "How fast can you turn around an apartment cleanout?", "acceptedAnswer": { "@type": "Answer", "text": "Most single-unit cleanouts are done the same day we arrive. For multi-unit jobs, we can typically clear 3-5 apartments per day depending on how much is inside. We schedule around your turnover timeline." } }, { "@type": "Question", "name": "Do you work with property management companies?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We work with property managers and landlords across the Omaha metro on a regular basis. We can set up a standing arrangement so you have a crew ready whenever a unit needs clearing." } }, { "@type": "Question", "name": "What if the tenant left behind appliances?", "acceptedAnswer": { "@type": "Answer", "text": "We take everything — refrigerators, stoves, microwaves, window AC units, washers, dryers. If it's in the apartment and you want it gone, we haul it out." } }, { "@type": "Question", "name": "Can you handle apartments on upper floors without elevators?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. We carry everything down the stairs by hand. Third floor walk-ups are a regular part of the job for us. We protect the walls and railings on the way down." } }] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://a1junkremovalandtreeserviceofomaha.com/" }, { "@type": "ListItem", "position": 2, "name": "Junk Removal", "item": "https://a1junkremovalandtreeserviceofomaha.com/junk-removal" }, { "@type": "ListItem", "position": 3, "name": "Apartment Cleanouts", "item": "https://a1junkremovalandtreeserviceofomaha.com/apartment-cleanouts" }] }) }} />

      <div className="bg-gray-50 border-b border-gray-200"><div className="container py-3"><nav className="flex items-center gap-2 text-sm text-gray-500"><Link href="/" className="hover:text-[#0A1628]">Home</Link><span>/</span><Link href="/junk-removal" className="hover:text-[#0A1628]">Junk Removal</Link><span>/</span><span className="text-[#0A1628] font-medium">Apartment Cleanouts</span></nav></div></div>

      <section className="relative py-16 lg:py-24 bg-[#0A1628] overflow-hidden">
        <div className="absolute inset-0 opacity-20"><img src={PLACEHOLDER_IMG} alt="" className="w-full h-full object-cover" /></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628] via-[#0A1628]/80 to-transparent" />
        <div className="container relative z-10"><div className="max-w-3xl">
          <div className="inline-block bg-[#E8611A]/20 text-[#E8611A] px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Cleanout Services</div>
          <h1 className="font-display text-4xl lg:text-6xl text-white font-bold mb-4 uppercase">Apartment Cleanout Services in Omaha</h1>
          <p className="text-white/90 text-xl lg:text-2xl font-semibold mb-8">Units Cleared, Turned Over, and Ready for the Next Tenant</p>
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
        <p>Tenants move out and leave everything behind — mattresses on the floor, bags of clothes in the closet, a refrigerator full of expired food, and enough random junk to fill a dumpster. If you manage apartments in Omaha, you already know the drill. <strong>A1 Junk Removal and Tree Service</strong> handles apartment cleanouts for property managers and landlords across the metro. We go unit by unit, clear everything out, and get the space ready for your maintenance crew to come in and do their thing.</p>

        <p>We've cleaned out apartments in complexes across Bellevue, La Vista, and every part of Omaha. Some units have a few bags of trash and an old couch. Others look like the tenant packed nothing and left everything they owned behind. Either way, we show up with the crew and the truck, and we don't leave until the unit is empty.</p>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">What Tenants Leave Behind</h2>

        <div className="space-y-4 not-prose">
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Furniture and Mattresses</h3><p className="text-gray-600 mt-1">Couches, bed frames, dressers, desks, dining tables, and mattresses. The big stuff that tenants decide isn't worth moving to their next place.</p></div></div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Appliances and Electronics</h3><p className="text-gray-600 mt-1">Microwaves, window AC units, old TVs, toasters, and sometimes full-size appliances if the unit wasn't furnished. We haul all of it.</p></div></div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Bags of Trash and Personal Items</h3><p className="text-gray-600 mt-1">Garbage bags, clothing, shoes, toiletries, kitchen supplies, and boxes of random stuff. The things people leave when they walk out in a hurry.</p></div></div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Balcony and Storage Unit Items</h3><p className="text-gray-600 mt-1">Patio furniture, grills, bikes, storage bins, and whatever else ended up on the balcony or in the assigned storage closet.</p></div></div>
        </div>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">Built for Property Managers</h2>
        <p>We understand that apartment turnovers run on a tight schedule. Every day a unit sits full of the last tenant's junk is a day you're not collecting rent. We work with property management companies across Omaha who need units cleared fast — often within 24-48 hours of the tenant vacating. We can handle single units or multi-unit turnovers where several apartments need clearing at once. If you manage a large complex and deal with this regularly, we can set up a standing arrangement so you've always got a crew available when you need one. For situations where a tenant was formally removed, check out our <Link href="/eviction-cleanouts" className="text-[#E8611A] font-semibold hover:underline">eviction cleanout services</Link> — same crew, same process, just a different starting point.</p>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">Navigating Stairs and Tight Spaces</h2>
        <p>Apartments aren't houses. The hallways are narrow, the stairwells are tight, and there's usually no freight elevator. We deal with this every day. Our crew carries furniture and appliances down three flights of stairs without damaging the walls, the railings, or the items (in case anything is being saved). We protect common areas during the cleanout and make sure we're not blocking other tenants' access. If the complex has specific rules about move-out hours or loading zones, we follow them. We've worked in enough apartment buildings across the metro to know how to get in and out without causing problems for your other residents.</p>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6 not-prose">
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">How fast can you turn around an apartment cleanout?</h3><p className="text-gray-600">Most single-unit cleanouts are done the same day we arrive. For multi-unit jobs, we can typically clear 3-5 apartments per day depending on how much is inside. We schedule around your turnover timeline.</p></div>
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">Do you work with property management companies?</h3><p className="text-gray-600">Yes. We work with property managers and landlords across the Omaha metro on a regular basis. We can set up a standing arrangement so you have a crew ready whenever a unit needs clearing.</p></div>
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">What if the tenant left behind appliances?</h3><p className="text-gray-600">We take everything — refrigerators, stoves, microwaves, window AC units, washers, dryers. If it's in the apartment and you want it gone, we haul it out.</p></div>
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">Can you handle apartments on upper floors without elevators?</h3><p className="text-gray-600">Absolutely. We carry everything down the stairs by hand. Third floor walk-ups are a regular part of the job for us. We protect the walls and railings on the way down.</p></div>
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
          <h2 className="font-display text-3xl lg:text-5xl text-white font-bold mb-4">TENANT LEFT EVERYTHING BEHIND?</h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">Get a free estimate for apartment cleanout services in Omaha. We clear the unit so you can get it back on the market.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={PHONE_LINK} className="inline-flex items-center justify-center gap-2 bg-[#E8611A] text-white px-8 py-4 rounded font-bold text-lg transition-colors"><Phone className="w-5 h-5" /> CALL {PHONE}</a>
            <Link href="/free-estimate" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded font-bold text-lg hover:bg-white/10 transition-colors">REQUEST ONLINE ESTIMATE</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
