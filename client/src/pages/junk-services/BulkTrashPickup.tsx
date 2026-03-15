/*
  BULK TRASH PICKUP — Dedicated Service Page
  URL: /bulk-trash-pickup
*/

import { useEffect } from "react";
import { Link } from "wouter";
import { PHONE, PHONE_LINK, BUSINESS_NAME, PLACEHOLDER_IMG, CTA_BG_IMG } from "@/lib/services-data";
import { Phone, ArrowRight, Clock, Star, Shield, DollarSign, CheckCircle, ChevronRight } from "lucide-react";

const relatedServices = [
  { slug: "trash-hauling", title: "Garbage & Trash Hauling" },
  { slug: "residential-junk-removal", title: "Residential Junk Removal" },
  { slug: "same-day-junk-pickup", title: "Same-Day Junk Pickup" },
  { slug: "yard-waste-removal", title: "Yard Waste Removal" },
];

export default function BulkTrashPickup() {
  useEffect(() => {
    document.title = "Bulk Trash Pickup Omaha | A1 Junk Removal and Tree Service";
    const metaDesc = document.querySelector('meta[name="description"]');
    const content = "Bulk trash pickup in Omaha. A1 Junk Removal hauls away large items, furniture, and oversized junk that won't fit in your regular trash. Call (402) 612-2373.";
    if (metaDesc) { metaDesc.setAttribute("content", content); } else { const meta = document.createElement("meta"); meta.name = "description"; meta.content = content; document.head.appendChild(meta); }
  }, []);

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Service", "name": "Bulk Trash Pickup Omaha", "description": "Bulk trash pickup and large item removal in Omaha, NE. Hauling oversized furniture, appliances, and junk that regular trash service won't take.", "provider": { "@type": "LocalBusiness", "name": BUSINESS_NAME, "telephone": PHONE, "url": "https://a1junkremovalandtreeserviceofomaha.com" }, "areaServed": [{ "@type": "City", "name": "Omaha", "addressRegion": "NE" }, { "@type": "City", "name": "La Vista", "addressRegion": "NE" }, { "@type": "City", "name": "Gretna", "addressRegion": "NE" }] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "What counts as bulk trash?", "acceptedAnswer": { "@type": "Answer", "text": "Anything too large or heavy for your regular curbside trash pickup. Furniture, mattresses, appliances, large boxes, carpet rolls, old grills, and similar oversized items all qualify as bulk trash." } }, { "@type": "Question", "name": "Can you pick up bulk items from inside my house?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Unlike city bulk pickup programs that require items at the curb, we come inside and carry items out from wherever they are — bedrooms, basements, garages, wherever." } }, { "@type": "Question", "name": "How is this different from the city's bulk pickup?", "acceptedAnswer": { "@type": "Answer", "text": "The city's program has limited pickup dates, item restrictions, and requires everything at the curb. We come on your schedule, take items from anywhere on the property, and handle things the city won't take." } }, { "@type": "Question", "name": "Can I combine bulk trash with other junk removal?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. Most of our bulk pickups include other items too. If you've got a couch, some boxes, and a pile of yard waste, we take it all in one trip." } }] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://a1junkremovalandtreeserviceofomaha.com/" }, { "@type": "ListItem", "position": 2, "name": "Junk Removal", "item": "https://a1junkremovalandtreeserviceofomaha.com/junk-removal" }, { "@type": "ListItem", "position": 3, "name": "Bulk Trash Pickup", "item": "https://a1junkremovalandtreeserviceofomaha.com/bulk-trash-pickup" }] }) }} />

      <div className="bg-gray-50 border-b border-gray-200"><div className="container py-3"><nav className="flex items-center gap-2 text-sm text-gray-500"><Link href="/" className="hover:text-[#0A1628]">Home</Link><span>/</span><Link href="/junk-removal" className="hover:text-[#0A1628]">Junk Removal</Link><span>/</span><span className="text-[#0A1628] font-medium">Bulk Trash Pickup</span></nav></div></div>

      <section className="relative py-16 lg:py-24 bg-[#0A1628] overflow-hidden">
        <div className="absolute inset-0 opacity-20"><img src={PLACEHOLDER_IMG} alt="" className="w-full h-full object-cover" /></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628] via-[#0A1628]/80 to-transparent" />
        <div className="container relative z-10"><div className="max-w-3xl">
          <div className="inline-block bg-[#E8611A]/20 text-[#E8611A] px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Hauling Services</div>
          <h1 className="font-display text-4xl lg:text-6xl text-white font-bold mb-4 uppercase">Bulk Trash Pickup in Omaha</h1>
          <p className="text-white/90 text-xl lg:text-2xl font-semibold mb-8">Large Items and Oversized Junk Hauled Away on Your Schedule</p>
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
        <p>You've got a pile of stuff that's too big for the trash can and the city's bulk pickup isn't for another three weeks — if they even take what you've got. Old furniture on the porch, a broken grill in the driveway, carpet rolls from the remodel, and a stack of boxes that won't fit in the bin. <strong>A1 Junk Removal and Tree Service</strong> handles bulk trash pickup across the Omaha metro. We come to you, load everything up, and haul it away — on your schedule, not the city's.</p>

        <p>We've picked up bulk items from driveways in La Vista, cleared out post-renovation debris from garages in Gretna, and hauled away piles of oversized junk that had been sitting curbside in Omaha neighborhoods for weeks because the regular trash service wouldn't touch it. If it's too big for the bin, call us.</p>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">Items We Pick Up as Bulk Trash</h2>

        <div className="space-y-4 not-prose">
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Furniture and Mattresses</h3><p className="text-gray-600 mt-1">Couches, recliners, dining tables, bed frames, dressers, desks, and mattresses. The big items that regular trash trucks drive right past.</p></div></div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Appliances and Electronics</h3><p className="text-gray-600 mt-1">Old refrigerators, washers, dryers, microwaves, TVs, and other large electronics that need special handling and recycling.</p></div></div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Renovation and Project Debris</h3><p className="text-gray-600 mt-1">Carpet rolls, old cabinets, drywall scraps, lumber, tile, and other leftovers from home improvement projects that pile up fast.</p></div></div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Outdoor Items and Yard Debris</h3><p className="text-gray-600 mt-1">Grills, patio furniture, swing sets, fencing, tree branches, and other outdoor items that are too large or heavy for curbside collection.</p></div></div>
        </div>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">Better Than Waiting for the City</h2>
        <p>Omaha's city bulk pickup program runs on a set schedule — usually once or twice a year per neighborhood. You have to wait for your designated week, drag everything to the curb yourself, and hope it meets their list of accepted items. If it doesn't, it sits there. We work on your timeline. Call today, and we can often be there the same day or the next morning. We pick up from anywhere on your property — inside the house, the garage, the backyard, wherever the stuff is. You don't have to drag a 200-pound couch to the curb and wait three weeks for someone to maybe pick it up.</p>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">Combining Bulk Pickup with Other Services</h2>
        <p>Most bulk pickups aren't just one item. You've got the old couch, but also some boxes in the garage, a broken shelf, and maybe a pile of <Link href="/yard-waste-removal" className="text-[#E8611A] font-semibold hover:underline">yard waste</Link> from last weekend's trimming. We take it all in one trip. There's no need to separate things into categories or schedule multiple pickups. Point at what needs to go, and we load it up. If you're doing a bigger cleanout — a whole <Link href="/garage-cleanout" className="text-[#E8611A] font-semibold hover:underline">garage</Link> or a room full of stuff — we handle that too. Same crew, same truck, one visit.</p>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6 not-prose">
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">What counts as bulk trash?</h3><p className="text-gray-600">Anything too large or heavy for your regular curbside trash pickup. Furniture, mattresses, appliances, large boxes, carpet rolls, old grills, and similar oversized items all qualify as bulk trash.</p></div>
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">Can you pick up bulk items from inside my house?</h3><p className="text-gray-600">Yes. Unlike city bulk pickup programs that require items at the curb, we come inside and carry items out from wherever they are — bedrooms, basements, garages, wherever.</p></div>
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">How is this different from the city's bulk pickup?</h3><p className="text-gray-600">The city's program has limited pickup dates, item restrictions, and requires everything at the curb. We come on your schedule, take items from anywhere on the property, and handle things the city won't take.</p></div>
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">Can I combine bulk trash with other junk removal?</h3><p className="text-gray-600">Absolutely. Most of our bulk pickups include other items too. If you've got a couch, some boxes, and a pile of yard waste, we take it all in one trip.</p></div>
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
          <h2 className="font-display text-3xl lg:text-5xl text-white font-bold mb-4">TOO BIG FOR THE TRASH CAN?</h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">Get a free estimate for bulk trash pickup in Omaha. We load it up and haul it away — no waiting for the city.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={PHONE_LINK} className="inline-flex items-center justify-center gap-2 bg-[#E8611A] text-white px-8 py-4 rounded font-bold text-lg transition-colors"><Phone className="w-5 h-5" /> CALL {PHONE}</a>
            <Link href="/free-estimate" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded font-bold text-lg hover:bg-white/10 transition-colors">REQUEST ONLINE ESTIMATE</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
