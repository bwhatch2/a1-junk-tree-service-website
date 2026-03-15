/*
  REFRIGERATOR REMOVAL — Dedicated Service Page
  URL: /refrigerator-removal
*/

import { useEffect } from "react";
import { Link } from "wouter";
import { PHONE, PHONE_LINK, BUSINESS_NAME, PLACEHOLDER_IMG, CTA_BG_IMG } from "@/lib/services-data";
import { Phone, ArrowRight, Clock, Star, Shield, DollarSign, CheckCircle, ChevronRight } from "lucide-react";

const relatedServices = [
  { slug: "appliance-removal", title: "Appliance Removal" },
  { slug: "e-waste-disposal", title: "E-Waste Disposal" },
  { slug: "garage-cleanout", title: "Garage Cleanout" },
  { slug: "residential-junk-removal", title: "Residential Junk Removal" },
];

export default function RefrigeratorRemoval() {
  useEffect(() => {
    document.title = "Refrigerator Removal Omaha | A1 Junk Removal and Tree Service";
    const metaDesc = document.querySelector('meta[name="description"]');
    const content = "Professional refrigerator removal in Omaha. A1 Junk Removal hauls away old fridges, freezers, and mini-fridges with proper Freon handling. Call (402) 612-2373.";
    if (metaDesc) { metaDesc.setAttribute("content", content); } else { const meta = document.createElement("meta"); meta.name = "description"; meta.content = content; document.head.appendChild(meta); }
  }, []);

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Service", "name": "Refrigerator Removal Omaha", "description": "Professional refrigerator and freezer removal services in Omaha, NE. Safe hauling with proper refrigerant handling and disposal.", "provider": { "@type": "LocalBusiness", "name": BUSINESS_NAME, "telephone": PHONE, "url": "https://a1junkremovalandtreeserviceofomaha.com" }, "areaServed": [{ "@type": "City", "name": "Omaha", "addressRegion": "NE" }, { "@type": "City", "name": "Bennington", "addressRegion": "NE" }, { "@type": "City", "name": "Papillion", "addressRegion": "NE" }] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Can I just put my old refrigerator on the curb for trash pickup?", "acceptedAnswer": { "@type": "Answer", "text": "In most Omaha neighborhoods, no. The city won't take refrigerators in regular trash pickup because of the refrigerant inside. You'd need to schedule a special pickup or hire a junk removal service like us to handle it properly." } }, { "@type": "Question", "name": "What happens to the Freon in my old fridge?", "acceptedAnswer": { "@type": "Answer", "text": "Refrigerants like Freon have to be recovered by a certified technician before the unit can be recycled or disposed of. We make sure every refrigerator we haul goes to a facility that handles this correctly under EPA guidelines." } }, { "@type": "Question", "name": "Do you disconnect the refrigerator or do I need to do that first?", "acceptedAnswer": { "@type": "Answer", "text": "We handle the disconnection. Just make sure the water supply line to the ice maker is turned off if there is one. We'll pull the unit out, disconnect the power, and get it loaded." } }, { "@type": "Question", "name": "How much does refrigerator removal cost?", "acceptedAnswer": { "@type": "Answer", "text": "It depends on the size of the unit and where it's located in your home. A standard fridge in a kitchen is straightforward. A chest freezer in a basement with narrow stairs costs a bit more. We give you a price upfront before any work starts." } }] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://a1junkremovalandtreeserviceofomaha.com/" }, { "@type": "ListItem", "position": 2, "name": "Junk Removal", "item": "https://a1junkremovalandtreeserviceofomaha.com/junk-removal" }, { "@type": "ListItem", "position": 3, "name": "Refrigerator Removal", "item": "https://a1junkremovalandtreeserviceofomaha.com/refrigerator-removal" }] }) }} />

      <div className="bg-gray-50 border-b border-gray-200"><div className="container py-3"><nav className="flex items-center gap-2 text-sm text-gray-500"><Link href="/" className="hover:text-[#0A1628]">Home</Link><span>/</span><Link href="/junk-removal" className="hover:text-[#0A1628]">Junk Removal</Link><span>/</span><span className="text-[#0A1628] font-medium">Refrigerator Removal</span></nav></div></div>

      <section className="relative py-16 lg:py-24 bg-[#0A1628] overflow-hidden">
        <div className="absolute inset-0 opacity-20"><img src={PLACEHOLDER_IMG} alt="" className="w-full h-full object-cover" /></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628] via-[#0A1628]/80 to-transparent" />
        <div className="container relative z-10"><div className="max-w-3xl">
          <div className="inline-block bg-[#E8611A]/20 text-[#E8611A] px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Appliance Hauling</div>
          <h1 className="font-display text-4xl lg:text-6xl text-white font-bold mb-4 uppercase">Refrigerator Removal in Omaha</h1>
          <p className="text-white/90 text-xl lg:text-2xl font-semibold mb-8">Safe Hauling and Disposal for Fridges, Freezers, and Mini-Fridges</p>
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
        <p>Old refrigerators are one of those things you can't just drag to the curb and forget about. They're heavy, they're full of refrigerant that has to be handled properly, and most trash services won't touch them. <strong>A1 Junk Removal and Tree Service</strong> handles refrigerator removal across the Omaha metro — we pull the unit out of your kitchen, basement, or garage, load it on our truck, and make sure it's disposed of the right way.</p>

        <p>We've hauled fridges out of tight kitchens in Bennington, wrestled chest freezers up basement stairs in Papillion, and loaded commercial coolers from restaurants in downtown Omaha. Every fridge is different — some are wedged between cabinets with an inch of clearance on each side, others are sitting in a garage with a clear path to the driveway. Either way, we figure out the best approach and get it done without scratching your floors or dinging your walls.</p>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">What We Haul</h2>

        <div className="space-y-4 not-prose">
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Standard Refrigerators</h3><p className="text-gray-600 mt-1">Top-freezer, bottom-freezer, side-by-side, French door — whatever model you've got, we remove it. Most weigh between 200 and 350 pounds.</p></div></div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Chest and Upright Freezers</h3><p className="text-gray-600 mt-1">Standalone freezers from basements, garages, and utility rooms. These are often the hardest to move because of where they're located — narrow stairs, tight corners. We deal with it every day.</p></div></div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Mini-Fridges and Beverage Coolers</h3><p className="text-gray-600 mt-1">Dorm fridges, bar coolers, wine fridges. Smaller but still contain refrigerant that needs proper handling. We take them all.</p></div></div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Commercial Refrigeration Units</h3><p className="text-gray-600 mt-1">Walk-in cooler components, restaurant display cases, and commercial reach-in units. We work with business owners who are closing, renovating, or upgrading equipment.</p></div></div>
        </div>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">Why Refrigerators Require Special Disposal</h2>
        <p>Every refrigerator and freezer contains refrigerant — usually R-134a in newer models or R-12 (Freon) in older ones. Under EPA regulations, that refrigerant has to be recovered by a certified technician before the unit can be scrapped or recycled. You can't legally just dump a fridge at the landfill with the refrigerant still inside. On top of that, older units may contain foam insulation blown with ozone-depleting substances that also need to be handled carefully. When we pick up your fridge, we take it to a facility that does all of this properly. The steel, aluminum, copper, and plastic all get recycled. It's not just about getting rid of the thing — it's about getting rid of it the right way.</p>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">Getting It Out of Tight Spaces</h2>
        <p>The hardest part of most refrigerator removals isn't the weight — it's the location. Kitchens are designed to fit a fridge snugly between cabinets, which means there's barely any room to maneuver. Basement freezers are worse — narrow staircases, low ceilings, and a 300-pound box that doesn't bend. Our crew uses appliance dollies, moving straps, and floor protectors to get the unit out without tearing up your home. We've done enough of these across Omaha to know the tricks. If you've also got <Link href="/appliance-removal" className="text-[#E8611A] font-semibold hover:underline">other old appliances</Link> that need to go — a washer, dryer, or dishwasher — we can take everything in one trip and save you money.</p>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6 not-prose">
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">Can I just put my old refrigerator on the curb for trash pickup?</h3><p className="text-gray-600">In most Omaha neighborhoods, no. The city won't take refrigerators in regular trash pickup because of the refrigerant inside. You'd need to schedule a special pickup or hire a junk removal service like us to handle it properly.</p></div>
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">What happens to the Freon in my old fridge?</h3><p className="text-gray-600">Refrigerants like Freon have to be recovered by a certified technician before the unit can be recycled or disposed of. We make sure every refrigerator we haul goes to a facility that handles this correctly under EPA guidelines.</p></div>
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">Do you disconnect the refrigerator or do I need to do that first?</h3><p className="text-gray-600">We handle the disconnection. Just make sure the water supply line to the ice maker is turned off if there is one. We'll pull the unit out, disconnect the power, and get it loaded.</p></div>
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">How much does refrigerator removal cost?</h3><p className="text-gray-600">It depends on the size of the unit and where it's located in your home. A standard fridge in a kitchen is straightforward. A chest freezer in a basement with narrow stairs costs a bit more. We give you a price upfront before any work starts.</p></div>
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
          <h2 className="font-display text-3xl lg:text-5xl text-white font-bold mb-4">GOT AN OLD FRIDGE THAT NEEDS TO GO?</h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">Get a free estimate for refrigerator removal in Omaha. We handle the heavy lifting, the hauling, and the proper disposal.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={PHONE_LINK} className="inline-flex items-center justify-center gap-2 bg-[#E8611A] text-white px-8 py-4 rounded font-bold text-lg transition-colors"><Phone className="w-5 h-5" /> CALL {PHONE}</a>
            <Link href="/free-estimate" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded font-bold text-lg hover:bg-white/10 transition-colors">REQUEST ONLINE ESTIMATE</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
