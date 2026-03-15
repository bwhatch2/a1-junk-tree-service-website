/*
  APPLIANCE REMOVAL — Dedicated Service Page
  URL: /appliance-removal
*/

import { useEffect } from "react";
import { Link } from "wouter";
import { PHONE, PHONE_LINK, BUSINESS_NAME, PLACEHOLDER_IMG, CTA_BG_IMG } from "@/lib/services-data";
import { Phone, ArrowRight, Clock, Star, Shield, DollarSign, CheckCircle, ChevronRight } from "lucide-react";

const relatedServices = [
  { slug: "refrigerator-removal", title: "Refrigerator Removal" },
  { slug: "scrap-metal-removal", title: "Scrap Metal Removal" },
  { slug: "residential-junk-removal", title: "Residential Junk Removal" },
  { slug: "e-waste-disposal", title: "E-Waste Disposal & Recycling" },
];

export default function ApplianceRemoval() {
  useEffect(() => {
    document.title = "Appliance Removal Omaha | A1 Junk Removal and Tree Service";
    const metaDesc = document.querySelector('meta[name="description"]');
    const content = "Appliance removal in Omaha. A1 Junk Removal hauls away old refrigerators, washers, dryers, stoves, dishwashers, and more. Recycled responsibly. Call (402) 612-2373.";
    if (metaDesc) { metaDesc.setAttribute("content", content); } else { const meta = document.createElement("meta"); meta.name = "description"; meta.content = content; document.head.appendChild(meta); }
  }, []);

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Service", "name": "Appliance Removal Omaha", "description": "Appliance removal and recycling services in Omaha, NE. Hauling of refrigerators, washers, dryers, stoves, dishwashers, and other household appliances.", "provider": { "@type": "LocalBusiness", "name": BUSINESS_NAME, "telephone": PHONE, "url": "https://a1junkremovalandtreeserviceofomaha.com" }, "areaServed": [{ "@type": "City", "name": "Omaha", "addressRegion": "NE" }, { "@type": "City", "name": "Papillion", "addressRegion": "NE" }, { "@type": "City", "name": "Elkhorn", "addressRegion": "NE" }] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Do you disconnect appliances before removing them?", "acceptedAnswer": { "@type": "Answer", "text": "We disconnect standard appliances like washers, dryers, and refrigerators. For gas appliances, we recommend having the gas line capped by a licensed plumber before we arrive, though we can disconnect the appliance from the line if it's already been shut off." } }, { "@type": "Question", "name": "Can you remove appliances from the basement?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We haul appliances up from basements all the time. Old chest freezers, water heaters, and washers that have been down there for decades — we carry them up the stairs and out to the truck." } }, { "@type": "Question", "name": "What happens to the old appliances?", "acceptedAnswer": { "@type": "Answer", "text": "Appliances are primarily steel, copper, and aluminum, which are all recyclable. We take them to recycling facilities where the metals are recovered. Refrigerants from cooling appliances are handled according to EPA regulations." } }, { "@type": "Question", "name": "How much does appliance removal cost?", "acceptedAnswer": { "@type": "Answer", "text": "A single appliance is one of our most affordable pickups. If you've got multiple appliances or other items to go at the same time, we bundle everything together for a better price. We always quote before we start." } }] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://a1junkremovalandtreeserviceofomaha.com/" }, { "@type": "ListItem", "position": 2, "name": "Junk Removal", "item": "https://a1junkremovalandtreeserviceofomaha.com/junk-removal" }, { "@type": "ListItem", "position": 3, "name": "Appliance Removal", "item": "https://a1junkremovalandtreeserviceofomaha.com/appliance-removal" }] }) }} />

      <div className="bg-gray-50 border-b border-gray-200"><div className="container py-3"><nav className="flex items-center gap-2 text-sm text-gray-500"><Link href="/" className="hover:text-[#0A1628]">Home</Link><span>/</span><Link href="/junk-removal" className="hover:text-[#0A1628]">Junk Removal</Link><span>/</span><span className="text-[#0A1628] font-medium">Appliance Removal</span></nav></div></div>

      <section className="relative py-16 lg:py-24 bg-[#0A1628] overflow-hidden">
        <div className="absolute inset-0 opacity-20"><img src={PLACEHOLDER_IMG} alt="" className="w-full h-full object-cover" /></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628] via-[#0A1628]/80 to-transparent" />
        <div className="container relative z-10"><div className="max-w-3xl">
          <div className="inline-block bg-[#E8611A]/20 text-[#E8611A] px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Item Removal</div>
          <h1 className="font-display text-4xl lg:text-6xl text-white font-bold mb-4 uppercase">Appliance Removal in Omaha</h1>
          <p className="text-white/90 text-xl lg:text-2xl font-semibold mb-8">Old Appliances Disconnected, Hauled Out, and Recycled</p>
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
        <p>The new washer showed up this morning and the delivery guys left the old one sitting in the middle of the laundry room. Or maybe the fridge in the garage finally died and it's been sitting there unplugged for six months. Either way, old appliances are heavy, awkward, and a pain to get rid of on your own. <strong>A1 Junk Removal and Tree Service</strong> handles appliance removal across the Omaha metro. We disconnect it, carry it out, load it on the truck, and take it to a recycling facility. You don't have to lift a finger.</p>

        <p>We've hauled chest freezers out of basements in Papillion, carried double-door refrigerators down narrow hallways in Elkhorn, and loaded up entire kitchens worth of old appliances during remodels across Omaha. One appliance or ten — we handle it all.</p>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">Appliances We Haul Away</h2>

        <div className="space-y-4 not-prose">
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Refrigerators and Freezers</h3><p className="text-gray-600 mt-1">Full-size fridges, side-by-sides, chest freezers, mini fridges, and stand-alone ice makers. We handle the refrigerant properly per EPA guidelines. For details, see our <Link href="/refrigerator-removal" className="text-[#E8611A] font-semibold hover:underline">dedicated refrigerator removal page</Link>.</p></div></div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Washers and Dryers</h3><p className="text-gray-600 mt-1">Top-loaders, front-loaders, stackable units, and standalone dryers. We disconnect the water lines and dryer vents and haul them out.</p></div></div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Stoves, Ovens, and Ranges</h3><p className="text-gray-600 mt-1">Electric and gas ranges, wall ovens, and cooktops. For gas appliances, we ask that the gas line be shut off before we arrive.</p></div></div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Water Heaters, Dishwashers, and More</h3><p className="text-gray-600 mt-1">Water heaters (tank and tankless), dishwashers, garbage disposals, window AC units, dehumidifiers, and any other household appliance taking up space.</p></div></div>
        </div>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">Getting Appliances Out of Tight Spots</h2>
        <p>Appliances end up in the worst possible places. The chest freezer that went into the basement 20 years ago when the stairs were wider. The washer wedged into a closet-sized laundry room. The water heater in a crawl space that barely fits a person, let alone a 150-pound tank. We deal with all of it. Our crew knows how to navigate tight doorways, steep stairs, and awkward angles without damaging your home. We use appliance dollies, furniture straps, and good old-fashioned muscle to get heavy units out safely. If we need to remove a door from its hinges to fit something through, we do that and put it back when we're done.</p>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">Where Your Old Appliances Go</h2>
        <p>Household appliances are made primarily of steel, with copper wiring, aluminum components, and sometimes cast iron. All of that is recyclable. When we pick up your old appliance, it goes to a metal recycling facility where the materials are recovered and reprocessed. Refrigerators and freezers go through an additional step where the refrigerant is captured and disposed of according to EPA regulations — you can't just dump Freon into the atmosphere. The recycling value of appliances actually helps keep removal costs down, since the scrap metal offsets disposal fees. If you've got other metal items to go along with the appliances, check out our <Link href="/scrap-metal-removal" className="text-[#E8611A] font-semibold hover:underline">scrap metal removal service</Link>.</p>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6 not-prose">
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">Do you disconnect appliances before removing them?</h3><p className="text-gray-600">We disconnect standard appliances like washers, dryers, and refrigerators. For gas appliances, we recommend having the gas line capped by a licensed plumber before we arrive, though we can disconnect the appliance from the line if it's already been shut off.</p></div>
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">Can you remove appliances from the basement?</h3><p className="text-gray-600">Yes. We haul appliances up from basements all the time. Old chest freezers, water heaters, and washers that have been down there for decades — we carry them up the stairs and out to the truck.</p></div>
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">What happens to the old appliances?</h3><p className="text-gray-600">Appliances are primarily steel, copper, and aluminum, which are all recyclable. We take them to recycling facilities where the metals are recovered. Refrigerants from cooling appliances are handled according to EPA regulations.</p></div>
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">How much does appliance removal cost?</h3><p className="text-gray-600">A single appliance is one of our most affordable pickups. If you've got multiple appliances or other items to go at the same time, we bundle everything together for a better price. We always quote before we start.</p></div>
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
          <h2 className="font-display text-3xl lg:text-5xl text-white font-bold mb-4">OLD APPLIANCE TAKING UP SPACE?</h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">Get a free estimate for appliance removal in Omaha. We disconnect it, haul it out, and recycle it properly.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={PHONE_LINK} className="inline-flex items-center justify-center gap-2 bg-[#E8611A] text-white px-8 py-4 rounded font-bold text-lg transition-colors"><Phone className="w-5 h-5" /> CALL {PHONE}</a>
            <Link href="/free-estimate" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded font-bold text-lg hover:bg-white/10 transition-colors">REQUEST ONLINE ESTIMATE</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
