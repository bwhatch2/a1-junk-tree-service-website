/*
  HOUSE CLEANOUT SERVICES — Dedicated Service Page
  URL: /house-cleanout-services
*/

import { useEffect } from "react";
import { Link } from "wouter";
import { PHONE, PHONE_LINK, BUSINESS_NAME, PLACEHOLDER_IMG, CTA_BG_IMG } from "@/lib/services-data";
import { Phone, ArrowRight, Clock, Star, Shield, DollarSign, CheckCircle, ChevronRight } from "lucide-react";

const relatedServices = [
  { slug: "property-cleanouts", title: "Property Cleanout Services" },
  { slug: "estate-cleanouts", title: "Estate Cleanout Services" },
  { slug: "hoarder-cleanup", title: "Hoarder House Cleanup" },
  { slug: "basement-cleanout", title: "Basement Cleanout" },
];

export default function HouseCleanoutServices() {
  useEffect(() => {
    document.title = "House Cleanout Services Omaha | A1 Junk Removal and Tree Service";
    const metaDesc = document.querySelector('meta[name="description"]');
    const content = "House cleanout services in Omaha. A1 Junk Removal empties entire homes room by room — furniture, junk, and everything left behind. Locally owned. Call (402) 612-2373.";
    if (metaDesc) { metaDesc.setAttribute("content", content); } else { const meta = document.createElement("meta"); meta.name = "description"; meta.content = content; document.head.appendChild(meta); }
  }, []);

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Service", "name": "House Cleanout Services Omaha", "description": "Complete house cleanout services in Omaha, NE. Room-by-room clearing of furniture, belongings, appliances, and debris.", "provider": { "@type": "LocalBusiness", "name": BUSINESS_NAME, "telephone": PHONE, "url": "https://a1junkremovalandtreeserviceofomaha.com" }, "areaServed": [{ "@type": "City", "name": "Omaha", "addressRegion": "NE" }, { "@type": "City", "name": "Gretna", "addressRegion": "NE" }, { "@type": "City", "name": "Ralston", "addressRegion": "NE" }] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "How is a house cleanout different from regular junk removal?", "acceptedAnswer": { "@type": "Answer", "text": "Regular junk removal is usually a few specific items — a couch, some boxes, an old appliance. A house cleanout means we're clearing the entire home, room by room, top to bottom. It's a bigger job that requires more planning and usually takes a full day." } }, { "@type": "Question", "name": "Do you clean the house after removing everything?", "acceptedAnswer": { "@type": "Answer", "text": "We leave the house broom-swept and cleared out. For deep cleaning like carpet shampooing, window washing, or sanitizing, we can refer you to a trusted local cleaning company." } }, { "@type": "Question", "name": "Can you save specific items during the cleanout?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. Walk through with us before we start and point out anything you want to keep. We'll set those items aside and only remove what you've approved." } }, { "@type": "Question", "name": "How much does a full house cleanout cost?", "acceptedAnswer": { "@type": "Answer", "text": "It depends on the size of the house and how much is inside. A small two-bedroom might be a few hundred dollars. A large home packed floor to ceiling will cost more. We always give you a price before we start so there are no surprises." } }] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://a1junkremovalandtreeserviceofomaha.com/" }, { "@type": "ListItem", "position": 2, "name": "Junk Removal", "item": "https://a1junkremovalandtreeserviceofomaha.com/junk-removal" }, { "@type": "ListItem", "position": 3, "name": "House Cleanout Services", "item": "https://a1junkremovalandtreeserviceofomaha.com/house-cleanout-services" }] }) }} />

      <div className="bg-gray-50 border-b border-gray-200"><div className="container py-3"><nav className="flex items-center gap-2 text-sm text-gray-500"><Link href="/" className="hover:text-[#0A1628]">Home</Link><span>/</span><Link href="/junk-removal" className="hover:text-[#0A1628]">Junk Removal</Link><span>/</span><span className="text-[#0A1628] font-medium">House Cleanout Services</span></nav></div></div>

      <section className="relative py-16 lg:py-24 bg-[#0A1628] overflow-hidden">
        <div className="absolute inset-0 opacity-20"><img src={PLACEHOLDER_IMG} alt="" className="w-full h-full object-cover" /></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628] via-[#0A1628]/80 to-transparent" />
        <div className="container relative z-10"><div className="max-w-3xl">
          <div className="inline-block bg-[#E8611A]/20 text-[#E8611A] px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Cleanout Services</div>
          <h1 className="font-display text-4xl lg:text-6xl text-white font-bold mb-4 uppercase">House Cleanout Services in Omaha</h1>
          <p className="text-white/90 text-xl lg:text-2xl font-semibold mb-8">Every Room Emptied, Every Item Hauled Away</p>
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
        <p>A house cleanout is the big one. It's not a couch and a few boxes — it's every room, every closet, the attic, the basement, the garage, and sometimes the yard too. <strong>A1 Junk Removal and Tree Service</strong> handles complete house cleanouts across the Omaha metro for families selling a home, dealing with an inheritance, or just starting fresh after years of accumulation. We go room by room until the place is empty.</p>

        <p>We've cleaned out houses in Gretna where the owners were downsizing after 30 years, homes in Ralston where tenants left everything behind, and properties across Douglas County that sat vacant for months before anyone dealt with what was inside. Every house is different, but the process is the same — we walk through it with you, agree on what goes, and then our crew gets to work.</p>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">Rooms and Areas We Clear</h2>

        <div className="space-y-4 not-prose">
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Bedrooms and Living Areas</h3><p className="text-gray-600 mt-1">Furniture, mattresses, clothing, curtains, lamps, wall art — everything that makes a room lived-in gets removed and hauled out.</p></div></div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Kitchen and Bathrooms</h3><p className="text-gray-600 mt-1">Appliances, dishes, cookware, cleaning supplies, bathroom cabinets full of old products. We clear the counters, the cabinets, and everything in between.</p></div></div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Attic and Basement</h3><p className="text-gray-600 mt-1">The places where things go to be forgotten. Boxes stacked to the rafters, old furniture, holiday decorations, broken equipment. We haul it all out.</p></div></div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Garage, Shed, and Yard</h3><p className="text-gray-600 mt-1">Tools, lawn equipment, paint cans, lumber scraps, outdoor furniture, and anything else cluttering up the exterior spaces.</p></div></div>
        </div>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">Preparing a Home for Sale</h2>
        <p>Real estate agents call us regularly because a cluttered house doesn't sell. Buyers can't see past the mess, and staging a home that's full of someone else's belongings is impossible. A full house cleanout gets the property to a blank slate — empty rooms, clean floors, and nothing left behind to distract potential buyers. We've worked with agents across Sarpy County who need a house cleared in a tight timeframe before listing, and we consistently deliver. If the house also has a <Link href="/hoarder-cleanup" className="text-[#E8611A] font-semibold hover:underline">hoarding situation</Link>, we have experience handling those with extra care and discretion.</p>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">Sorting, Donating, and Disposing</h2>
        <p>We don't just throw everything into the truck without looking at it. During a house cleanout, we sort as we go. Furniture and household items in good condition get set aside for donation to local charities. Electronics and appliances go to recycling. Anything with personal value — photos, documents, jewelry — gets flagged and set aside for you. The rest goes to proper disposal. This approach keeps costs down because we're diverting volume from the landfill, and it means your loved one's belongings are handled with respect, not just dumped. For a related service, check out our <Link href="/estate-cleanouts" className="text-[#E8611A] font-semibold hover:underline">estate cleanout services</Link> if you're managing an inheritance.</p>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6 not-prose">
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">How is a house cleanout different from regular junk removal?</h3><p className="text-gray-600">Regular junk removal is usually a few specific items — a couch, some boxes, an old appliance. A house cleanout means we're clearing the entire home, room by room, top to bottom. It's a bigger job that requires more planning and usually takes a full day.</p></div>
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">Do you clean the house after removing everything?</h3><p className="text-gray-600">We leave the house broom-swept and cleared out. For deep cleaning like carpet shampooing, window washing, or sanitizing, we can refer you to a trusted local cleaning company.</p></div>
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">Can you save specific items during the cleanout?</h3><p className="text-gray-600">Absolutely. Walk through with us before we start and point out anything you want to keep. We'll set those items aside and only remove what you've approved.</p></div>
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">How much does a full house cleanout cost?</h3><p className="text-gray-600">It depends on the size of the house and how much is inside. A small two-bedroom might be a few hundred dollars. A large home packed floor to ceiling will cost more. We always give you a price before we start so there are no surprises.</p></div>
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
          <h2 className="font-display text-3xl lg:text-5xl text-white font-bold mb-4">NEED AN ENTIRE HOUSE CLEARED OUT?</h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">Get a free estimate for house cleanout services in Omaha. We go room by room until every item is gone.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={PHONE_LINK} className="inline-flex items-center justify-center gap-2 bg-[#E8611A] text-white px-8 py-4 rounded font-bold text-lg transition-colors"><Phone className="w-5 h-5" /> CALL {PHONE}</a>
            <Link href="/free-estimate" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded font-bold text-lg hover:bg-white/10 transition-colors">REQUEST ONLINE ESTIMATE</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
