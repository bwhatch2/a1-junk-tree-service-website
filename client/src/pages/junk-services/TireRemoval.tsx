/*
  TIRE REMOVAL & DISPOSAL — Dedicated Service Page
  URL: /tire-removal
*/

import { useEffect } from "react";
import { Link } from "wouter";
import { PHONE, PHONE_LINK, BUSINESS_NAME, PLACEHOLDER_IMG, CTA_BG_IMG } from "@/lib/services-data";
import { Phone, ArrowRight, Clock, Star, Shield, DollarSign, CheckCircle, ChevronRight } from "lucide-react";

const relatedServices = [
  { slug: "bulk-trash-pickup", title: "Bulk Trash Pickup" },
  { slug: "scrap-metal-removal", title: "Scrap Metal Removal" },
  { slug: "residential-junk-removal", title: "Residential Junk Removal" },
  { slug: "commercial-junk-removal", title: "Commercial Junk Removal" },
];

export default function TireRemoval() {
  useEffect(() => {
    document.title = "Tire Removal & Disposal Omaha | A1 Junk Removal and Tree Service";
    const metaDesc = document.querySelector('meta[name="description"]');
    const content = "Tire removal and disposal in Omaha. A1 Junk Removal picks up old tires from homes, garages, and properties. Proper recycling included. Call (402) 612-2373.";
    if (metaDesc) { metaDesc.setAttribute("content", content); } else { const meta = document.createElement("meta"); meta.name = "description"; meta.content = content; document.head.appendChild(meta); }
  }, []);

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Service", "name": "Tire Removal & Disposal Omaha", "description": "Tire removal and disposal services in Omaha, NE. Pickup and recycling of old car tires, truck tires, and tire piles from residential and commercial properties.", "provider": { "@type": "LocalBusiness", "name": BUSINESS_NAME, "telephone": PHONE, "url": "https://a1junkremovalandtreeserviceofomaha.com" }, "areaServed": [{ "@type": "City", "name": "Omaha", "addressRegion": "NE" }, { "@type": "City", "name": "Gretna", "addressRegion": "NE" }, { "@type": "City", "name": "Bennington", "addressRegion": "NE" }] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Can I throw old tires in the trash?", "acceptedAnswer": { "@type": "Answer", "text": "No. Tires are banned from landfills in Nebraska and most states because they don't decompose, they trap methane gas, and they create breeding grounds for mosquitoes. They need to go to a licensed tire recycling facility, which is where we take them." } }, { "@type": "Question", "name": "How many tires can you pick up at once?", "acceptedAnswer": { "@type": "Answer", "text": "As many as you've got. We handle everything from a few tires in a garage to large piles on rural properties. If the volume is significant, we'll bring the right size truck or make multiple trips." } }, { "@type": "Question", "name": "Do you pick up tires with rims still on them?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We take tires with or without rims. The rims actually have scrap metal value, which can help offset the disposal cost of the tires." } }, { "@type": "Question", "name": "What does tire disposal cost?", "acceptedAnswer": { "@type": "Answer", "text": "It depends on the quantity and type of tires. A few passenger car tires are very affordable. Larger quantities or oversized tires like tractor or semi tires cost more due to higher recycling fees. We give you a price upfront before we start." } }] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://a1junkremovalandtreeserviceofomaha.com/" }, { "@type": "ListItem", "position": 2, "name": "Junk Removal", "item": "https://a1junkremovalandtreeserviceofomaha.com/junk-removal" }, { "@type": "ListItem", "position": 3, "name": "Tire Removal", "item": "https://a1junkremovalandtreeserviceofomaha.com/tire-removal" }] }) }} />

      <div className="bg-gray-50 border-b border-gray-200"><div className="container py-3"><nav className="flex items-center gap-2 text-sm text-gray-500"><Link href="/" className="hover:text-[#0A1628]">Home</Link><span>/</span><Link href="/junk-removal" className="hover:text-[#0A1628]">Junk Removal</Link><span>/</span><span className="text-[#0A1628] font-medium">Tire Removal</span></nav></div></div>

      <section className="relative py-16 lg:py-24 bg-[#0A1628] overflow-hidden">
        <div className="absolute inset-0 opacity-20"><img src={PLACEHOLDER_IMG} alt="" className="w-full h-full object-cover" /></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628] via-[#0A1628]/80 to-transparent" />
        <div className="container relative z-10"><div className="max-w-3xl">
          <div className="inline-block bg-[#E8611A]/20 text-[#E8611A] px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Yard & Materials</div>
          <h1 className="font-display text-4xl lg:text-6xl text-white font-bold mb-4 uppercase">Tire Removal & Disposal in Omaha</h1>
          <p className="text-white/90 text-xl lg:text-2xl font-semibold mb-8">Old Tires Picked Up, Hauled Away, and Recycled</p>
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
        <p>Old tires are one of the most annoying things to get rid of. You can't put them in the trash. The city won't take them at the curb. Most donation centers don't want them. And they've been stacking up in your garage or along the side of your house for months — maybe years. <strong>A1 Junk Removal and Tree Service</strong> handles tire removal across the Omaha metro. We pick up old tires from homes, garages, farms, and commercial properties, and we take them to a licensed tire recycling facility where they're processed properly.</p>

        <p>We've hauled tires from garages in Gretna where a homeowner had a dozen old sets stacked against the wall, cleared tire piles from rural properties outside Bennington, and picked up commercial quantities from auto shops and fleet operations across Douglas County. Whether it's four tires or four hundred, we have the capacity to handle it.</p>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">Types of Tires We Remove</h2>

        <div className="space-y-4 not-prose">
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Passenger Car and Light Truck Tires</h3><p className="text-gray-600 mt-1">The most common type we pick up. Old sets from tire changes, worn-out all-seasons, winter tires you'll never use again. With or without rims.</p></div></div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">SUV and Truck Tires</h3><p className="text-gray-600 mt-1">Larger, heavier tires from SUVs, full-size trucks, and off-road vehicles. These take up more space and weigh more, but we handle them all the time.</p></div></div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Commercial and Semi Tires</h3><p className="text-gray-600 mt-1">Large commercial vehicle tires, semi-truck tires, and trailer tires. These have higher recycling fees due to their size, but we handle the logistics.</p></div></div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Lawn, ATV, and Specialty Tires</h3><p className="text-gray-600 mt-1">Riding mower tires, ATV tires, wheelbarrow tires, and other small specialty tires. We take them all — no tire is too small or too odd.</p></div></div>
        </div>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">Why Tires Need Special Disposal</h2>
        <p>Tires are banned from landfills in Nebraska for good reason. They don't decompose — a tire can sit in a landfill for hundreds of years without breaking down. When piled up, they trap heat and methane, creating fire hazards that are nearly impossible to extinguish once ignited. Tire fires can burn for months and release toxic chemicals into the air and groundwater. On top of that, standing water inside discarded tires creates ideal breeding conditions for mosquitoes, which is a public health concern. Licensed tire recyclers shred the rubber and process it into products like playground surfaces, rubberized asphalt, and fuel for industrial furnaces. When we pick up your tires, that's where they go — not a landfill, not a ditch, not a burn pile.</p>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">Clearing Tire Accumulation from Properties</h2>
        <p>Some properties have years of tire accumulation — especially rural lots, rental properties, and former auto shops. We've cleared properties with dozens or even hundreds of tires piled up over time. If you're a property manager dealing with a tenant who left tires behind, or a homeowner who inherited a property with a tire problem, we can get the whole pile cleared in one visit. We bring the right size truck for the job and load everything ourselves. If the property also has other junk that needs to go — old <Link href="/scrap-metal-removal" className="text-[#E8611A] font-semibold hover:underline">scrap metal</Link>, <Link href="/bulk-trash-pickup" className="text-[#E8611A] font-semibold hover:underline">bulk trash</Link>, or general debris — we'll handle it all at once.</p>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6 not-prose">
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">Can I throw old tires in the trash?</h3><p className="text-gray-600">No. Tires are banned from landfills in Nebraska and most states because they don't decompose, they trap methane gas, and they create breeding grounds for mosquitoes. They need to go to a licensed tire recycling facility, which is where we take them.</p></div>
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">How many tires can you pick up at once?</h3><p className="text-gray-600">As many as you've got. We handle everything from a few tires in a garage to large piles on rural properties. If the volume is significant, we'll bring the right size truck or make multiple trips.</p></div>
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">Do you pick up tires with rims still on them?</h3><p className="text-gray-600">Yes. We take tires with or without rims. The rims actually have scrap metal value, which can help offset the disposal cost of the tires.</p></div>
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">What does tire disposal cost?</h3><p className="text-gray-600">It depends on the quantity and type of tires. A few passenger car tires are very affordable. Larger quantities or oversized tires like tractor or semi tires cost more due to higher recycling fees. We give you a price upfront before we start.</p></div>
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
          <h2 className="font-display text-3xl lg:text-5xl text-white font-bold mb-4">OLD TIRES PILING UP?</h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">Get a free estimate for tire removal in Omaha. We pick them up, haul them away, and recycle them properly.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={PHONE_LINK} className="inline-flex items-center justify-center gap-2 bg-[#E8611A] text-white px-8 py-4 rounded font-bold text-lg transition-colors"><Phone className="w-5 h-5" /> CALL {PHONE}</a>
            <Link href="/free-estimate" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded font-bold text-lg hover:bg-white/10 transition-colors">REQUEST ONLINE ESTIMATE</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
