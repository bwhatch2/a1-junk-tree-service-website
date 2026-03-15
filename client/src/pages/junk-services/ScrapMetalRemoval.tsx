/*
  SCRAP METAL REMOVAL — Dedicated Service Page
  URL: /scrap-metal-removal
*/

import { useEffect } from "react";
import { Link } from "wouter";
import { PHONE, PHONE_LINK, BUSINESS_NAME, PLACEHOLDER_IMG, CTA_BG_IMG } from "@/lib/services-data";
import { Phone, ArrowRight, Clock, Star, Shield, DollarSign, CheckCircle, ChevronRight } from "lucide-react";

const relatedServices = [
  { slug: "appliance-removal", title: "Appliance Removal" },
  { slug: "construction-debris", title: "Construction Debris Removal" },
  { slug: "light-demolition", title: "Light Demolition Services" },
  { slug: "commercial-junk-removal", title: "Commercial Junk Removal" },
];

export default function ScrapMetalRemoval() {
  useEffect(() => {
    document.title = "Scrap Metal Removal Omaha | A1 Junk Removal and Tree Service";
    const metaDesc = document.querySelector('meta[name="description"]');
    const content = "Scrap metal removal in Omaha. A1 Junk Removal hauls away old appliances, car parts, fencing, pipes, and metal debris. Recycled responsibly. Call (402) 612-2373.";
    if (metaDesc) { metaDesc.setAttribute("content", content); } else { const meta = document.createElement("meta"); meta.name = "description"; meta.content = content; document.head.appendChild(meta); }
  }, []);

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Service", "name": "Scrap Metal Removal Omaha", "description": "Scrap metal removal and recycling services in Omaha, NE. Hauling of old appliances, car parts, fencing, pipes, and metal debris.", "provider": { "@type": "LocalBusiness", "name": BUSINESS_NAME, "telephone": PHONE, "url": "https://a1junkremovalandtreeserviceofomaha.com" }, "areaServed": [{ "@type": "City", "name": "Omaha", "addressRegion": "NE" }, { "@type": "City", "name": "Bellevue", "addressRegion": "NE" }, { "@type": "City", "name": "La Vista", "addressRegion": "NE" }] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "What types of scrap metal do you pick up?", "acceptedAnswer": { "@type": "Answer", "text": "We take steel, iron, aluminum, copper, brass, and mixed metals. That includes old appliances, car parts, pipes, fencing, shelving, bed frames, grills, and just about any other metal item you want gone." } }, { "@type": "Question", "name": "Do I get paid for my scrap metal?", "acceptedAnswer": { "@type": "Answer", "text": "Our service is junk removal, not scrap buying. The scrap value of your metal helps offset disposal costs, which keeps your removal price lower. For large quantities of clean, sorted metal, the scrap value may reduce your cost significantly." } }, { "@type": "Question", "name": "Can you pick up a car or vehicle for scrap?", "acceptedAnswer": { "@type": "Answer", "text": "We don't handle whole vehicles, but we do pick up car parts — engines, transmissions, body panels, rims, and other automotive metal. For whole vehicle removal, we can point you to a local service." } }, { "@type": "Question", "name": "Do you pick up scrap metal from job sites?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We work with contractors and property managers who need metal debris cleared from construction sites, renovation projects, and demolition jobs. We can schedule regular pickups or one-time cleanouts." } }] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://a1junkremovalandtreeserviceofomaha.com/" }, { "@type": "ListItem", "position": 2, "name": "Junk Removal", "item": "https://a1junkremovalandtreeserviceofomaha.com/junk-removal" }, { "@type": "ListItem", "position": 3, "name": "Scrap Metal Removal", "item": "https://a1junkremovalandtreeserviceofomaha.com/scrap-metal-removal" }] }) }} />

      <div className="bg-gray-50 border-b border-gray-200"><div className="container py-3"><nav className="flex items-center gap-2 text-sm text-gray-500"><Link href="/" className="hover:text-[#0A1628]">Home</Link><span>/</span><Link href="/junk-removal" className="hover:text-[#0A1628]">Junk Removal</Link><span>/</span><span className="text-[#0A1628] font-medium">Scrap Metal Removal</span></nav></div></div>

      <section className="relative py-16 lg:py-24 bg-[#0A1628] overflow-hidden">
        <div className="absolute inset-0 opacity-20"><img src={PLACEHOLDER_IMG} alt="" className="w-full h-full object-cover" /></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628] via-[#0A1628]/80 to-transparent" />
        <div className="container relative z-10"><div className="max-w-3xl">
          <div className="inline-block bg-[#E8611A]/20 text-[#E8611A] px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Yard & Materials</div>
          <h1 className="font-display text-4xl lg:text-6xl text-white font-bold mb-4 uppercase">Scrap Metal Removal in Omaha</h1>
          <p className="text-white/90 text-xl lg:text-2xl font-semibold mb-8">We Haul the Metal, You Get Your Space Back</p>
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
        <p>Old water heaters, rusty chain-link fencing, a pile of pipes from a plumbing job, car parts that have been sitting in the garage since the Clinton administration — scrap metal accumulates in garages, basements, yards, and job sites all over the Omaha metro. <strong>A1 Junk Removal and Tree Service</strong> picks up scrap metal from homes and businesses across Bellevue, La Vista, and the greater Omaha area. We load it, haul it, and take it straight to a recycling facility where it gets processed properly instead of sitting in your yard rusting.</p>

        <p>We're not a scrap yard — we're a junk removal service that handles metal along with everything else. The difference is that we come to you. You don't have to load a trailer, sort your metals, or wait in line at the recycler. We show up, grab the metal, and it's gone. The scrap value of the material helps offset your removal cost, which means metal-heavy loads are often cheaper than you'd expect.</p>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">Common Scrap Metal We Pick Up</h2>

        <div className="space-y-4 not-prose">
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Appliances and HVAC Equipment</h3><p className="text-gray-600 mt-1">Old water heaters, furnaces, AC units, washers, dryers, and refrigerators. These are heavy on steel and copper, which makes them prime recycling candidates.</p></div></div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Fencing and Structural Metal</h3><p className="text-gray-600 mt-1">Chain-link fencing, wrought iron, steel posts, metal gates, and rebar. We pull it up, cut it down, and load it on the truck.</p></div></div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Automotive Parts and Shop Scrap</h3><p className="text-gray-600 mt-1">Engines, transmissions, exhaust systems, rims, body panels, and miscellaneous shop metal. If you're cleaning out a garage or workshop, we'll take the metal pile.</p></div></div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Construction and Renovation Scrap</h3><p className="text-gray-600 mt-1">Pipes, ductwork, conduit, steel studs, metal roofing, and demolition debris. Contractors call us to clear metal from job sites so they can keep working.</p></div></div>
        </div>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">How Scrap Value Affects Your Price</h2>
        <p>Metal has real value at the recycler. Steel, aluminum, copper, and brass all have per-pound prices that fluctuate with the market. When your load is heavy on recyclable metal, the scrap value helps offset the cost of removal. That means a pile of old appliances or a stack of steel fencing is often cheaper to haul away than the same volume of mixed household junk. We factor the scrap value into your quote, so you're getting the benefit without having to sort, load, and drive to the scrap yard yourself. If you've also got <Link href="/appliance-removal" className="text-[#E8611A] font-semibold hover:underline">old appliances</Link> mixed in with the scrap, we handle it all in one trip.</p>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">Job Site and Commercial Pickup</h2>
        <p>Contractors, property managers, and business owners across the Omaha metro call us to clear metal from renovation projects, demolition sites, and facility cleanouts. If you're tearing out old plumbing, replacing HVAC equipment, or demolishing a structure, the metal debris adds up fast. We can do one-time pickups or set up a recurring schedule for ongoing projects. Our crew loads everything — you don't need to stage it or sort it. We separate ferrous from non-ferrous at the recycling facility. For larger projects that also involve <Link href="/construction-debris" className="text-[#E8611A] font-semibold hover:underline">general construction debris</Link>, we can handle the full cleanout.</p>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6 not-prose">
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">What types of scrap metal do you pick up?</h3><p className="text-gray-600">We take steel, iron, aluminum, copper, brass, and mixed metals. That includes old appliances, car parts, pipes, fencing, shelving, bed frames, grills, and just about any other metal item you want gone.</p></div>
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">Do I get paid for my scrap metal?</h3><p className="text-gray-600">Our service is junk removal, not scrap buying. The scrap value of your metal helps offset disposal costs, which keeps your removal price lower. For large quantities of clean, sorted metal, the scrap value may reduce your cost significantly.</p></div>
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">Can you pick up a car or vehicle for scrap?</h3><p className="text-gray-600">We don't handle whole vehicles, but we do pick up car parts — engines, transmissions, body panels, rims, and other automotive metal. For whole vehicle removal, we can point you to a local service.</p></div>
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">Do you pick up scrap metal from job sites?</h3><p className="text-gray-600">Yes. We work with contractors and property managers who need metal debris cleared from construction sites, renovation projects, and demolition jobs. We can schedule regular pickups or one-time cleanouts.</p></div>
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
          <h2 className="font-display text-3xl lg:text-5xl text-white font-bold mb-4">GOT SCRAP METAL TO GET RID OF?</h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">Get a free estimate for scrap metal removal in Omaha. We pick it up, haul it away, and recycle it responsibly.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={PHONE_LINK} className="inline-flex items-center justify-center gap-2 bg-[#E8611A] text-white px-8 py-4 rounded font-bold text-lg transition-colors"><Phone className="w-5 h-5" /> CALL {PHONE}</a>
            <Link href="/free-estimate" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded font-bold text-lg hover:bg-white/10 transition-colors">REQUEST ONLINE ESTIMATE</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
