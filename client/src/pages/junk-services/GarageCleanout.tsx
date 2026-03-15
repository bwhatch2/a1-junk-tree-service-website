/*
  GARAGE CLEANOUT — Dedicated Service Page
  URL: /garage-cleanout
*/

import { useEffect } from "react";
import { Link } from "wouter";
import { PHONE, PHONE_LINK, BUSINESS_NAME, PLACEHOLDER_IMG, CTA_BG_IMG } from "@/lib/services-data";
import { Phone, ArrowRight, Clock, Star, Shield, DollarSign, CheckCircle, ChevronRight } from "lucide-react";

const relatedServices = [
  { slug: "attic-cleanout", title: "Attic Cleanout" },
  { slug: "basement-cleanout", title: "Basement Cleanout" },
  { slug: "residential-junk-removal", title: "Residential Junk Removal" },
  { slug: "bulk-trash-pickup", title: "Bulk Trash Pickup" },
];

export default function GarageCleanout() {
  useEffect(() => {
    document.title = "Garage Cleanout Omaha | A1 Junk Removal and Tree Service";
    const metaDesc = document.querySelector('meta[name="description"]');
    const content = "Garage cleanout services in Omaha. A1 Junk Removal clears out years of accumulated junk, old tools, and clutter so you can actually park in your garage. Call (402) 612-2373.";
    if (metaDesc) { metaDesc.setAttribute("content", content); } else { const meta = document.createElement("meta"); meta.name = "description"; meta.content = content; document.head.appendChild(meta); }
  }, []);

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Service", "name": "Garage Cleanout Omaha", "description": "Garage cleanout services in Omaha, NE. Complete clearing of garages including old tools, storage boxes, broken equipment, and years of accumulated clutter.", "provider": { "@type": "LocalBusiness", "name": BUSINESS_NAME, "telephone": PHONE, "url": "https://a1junkremovalandtreeserviceofomaha.com" }, "areaServed": [{ "@type": "City", "name": "Omaha", "addressRegion": "NE" }, { "@type": "City", "name": "Papillion", "addressRegion": "NE" }, { "@type": "City", "name": "Bennington", "addressRegion": "NE" }] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Do I need to sort everything before you come?", "acceptedAnswer": { "@type": "Answer", "text": "No. If you want to pull out items you're keeping, great. But if you want us to take everything, just point to what stays and we'll remove the rest. We sort recyclables, donations, and trash as we load." } }, { "@type": "Question", "name": "Can you take old paint and chemicals?", "acceptedAnswer": { "@type": "Answer", "text": "We can't take hazardous materials like paint, solvents, pesticides, or motor oil. The City of Omaha has household hazardous waste collection events for those items. We take everything else in the garage." } }, { "@type": "Question", "name": "How long does a garage cleanout take?", "acceptedAnswer": { "@type": "Answer", "text": "A typical two-car garage cleanout takes 1-3 hours depending on how packed it is. We've done garages you could barely walk into and had them cleared in half a day." } }, { "@type": "Question", "name": "Will you sweep the garage floor when you're done?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Once everything is loaded, we sweep the floor and leave the space clean and ready to use. You'll actually be able to park your car in there again." } }] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://a1junkremovalandtreeserviceofomaha.com/" }, { "@type": "ListItem", "position": 2, "name": "Junk Removal", "item": "https://a1junkremovalandtreeserviceofomaha.com/junk-removal" }, { "@type": "ListItem", "position": 3, "name": "Garage Cleanout", "item": "https://a1junkremovalandtreeserviceofomaha.com/garage-cleanout" }] }) }} />

      <div className="bg-gray-50 border-b border-gray-200"><div className="container py-3"><nav className="flex items-center gap-2 text-sm text-gray-500"><Link href="/" className="hover:text-[#0A1628]">Home</Link><span>/</span><Link href="/junk-removal" className="hover:text-[#0A1628]">Junk Removal</Link><span>/</span><span className="text-[#0A1628] font-medium">Garage Cleanout</span></nav></div></div>

      <section className="relative py-16 lg:py-24 bg-[#0A1628] overflow-hidden">
        <div className="absolute inset-0 opacity-20"><img src={PLACEHOLDER_IMG} alt="" className="w-full h-full object-cover" /></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628] via-[#0A1628]/80 to-transparent" />
        <div className="container relative z-10"><div className="max-w-3xl">
          <div className="inline-block bg-[#E8611A]/20 text-[#E8611A] px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Cleanout Services</div>
          <h1 className="font-display text-4xl lg:text-6xl text-white font-bold mb-4 uppercase">Garage Cleanout Services in Omaha</h1>
          <p className="text-white/90 text-xl lg:text-2xl font-semibold mb-8">Years of Clutter Cleared So You Can Park Your Car Again</p>
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
        <p>The garage was supposed to be for cars. Instead, it's a storage unit you pay a mortgage on. There's a lawn mower from 2008, three broken folding chairs, a stack of cardboard boxes you haven't opened since you moved in, a kid's bike with flat tires, and a shelf full of half-empty paint cans. You can't park in there, you can barely walk through it, and every time you open the garage door you think about dealing with it — then close the door and forget about it for another month. <strong>A1 Junk Removal and Tree Service</strong> handles garage cleanouts across the Omaha metro. We come in, clear it all out, and leave you with an actual usable garage.</p>

        <p>We've cleaned out garages in Papillion that hadn't been organized in 15 years, cleared two-car garages in Bennington that were packed wall to wall, and hauled away everything from broken power tools to old furniture that got banished to the garage years ago. If you can't park in your garage, we can fix that in a few hours.</p>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">What Accumulates in Garages</h2>

        <div className="space-y-4 not-prose">
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Old Tools and Equipment</h3><p className="text-gray-600 mt-1">Broken lawn mowers, dead string trimmers, rusty hand tools, old workbenches, and power tools that haven't worked in years. We take it all, working or not.</p></div></div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Storage Boxes and Bins</h3><p className="text-gray-600 mt-1">Cardboard boxes from the last move, plastic storage bins full of things you forgot about, old holiday decorations, and boxes of stuff that got put in the garage "temporarily" five years ago.</p></div></div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Sports Gear and Kids' Stuff</h3><p className="text-gray-600 mt-1">Outgrown bikes, broken scooters, deflated basketballs, old skis, camping gear that's seen better days, and toys the kids haven't touched in years.</p></div></div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Furniture and Appliances</h3><p className="text-gray-600 mt-1">Old couches, spare refrigerators, broken shelving units, and furniture that got moved to the garage when it was replaced inside the house. It's been out there ever since.</p></div></div>
        </div>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">How a Garage Cleanout Works</h2>
        <p>You don't need to sort, organize, or drag anything out ahead of time. When we arrive, you walk through the garage with us and point out anything you want to keep. Everything else goes on the truck. We work section by section, clearing shelves, pulling items off the walls, and loading everything efficiently. Metal items go to scrap recycling, usable items can be donated, and the rest goes to proper disposal. When we're done, we sweep the garage floor and leave the space clean. The whole process usually takes 1-3 hours for a standard two-car garage. If you also want the <Link href="/attic-cleanout" className="text-[#E8611A] font-semibold hover:underline">attic</Link> or <Link href="/basement-cleanout" className="text-[#E8611A] font-semibold hover:underline">basement</Link> cleared while we're there, we can do it all in one visit.</p>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">Moving and Downsizing Garage Cleanouts</h2>
        <p>If you're selling your house or downsizing, the garage is usually the last thing anyone wants to deal with. It's where everything that didn't have a place ended up, and now it all needs to go. We handle pre-move garage cleanouts regularly — you keep what's coming with you, and we take everything else. It's faster and cheaper than renting a dumpster and doing it yourself, and you don't have to make multiple trips to the dump.</p>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6 not-prose">
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">Do I need to sort everything before you come?</h3><p className="text-gray-600">No. If you want to pull out items you're keeping, great. But if you want us to take everything, just point to what stays and we'll remove the rest. We sort recyclables, donations, and trash as we load.</p></div>
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">Can you take old paint and chemicals?</h3><p className="text-gray-600">We can't take hazardous materials like paint, solvents, pesticides, or motor oil. The City of Omaha has household hazardous waste collection events for those items. We take everything else in the garage.</p></div>
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">How long does a garage cleanout take?</h3><p className="text-gray-600">A typical two-car garage cleanout takes 1-3 hours depending on how packed it is. We've done garages you could barely walk into and had them cleared in half a day.</p></div>
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">Will you sweep the garage floor when you're done?</h3><p className="text-gray-600">Yes. Once everything is loaded, we sweep the floor and leave the space clean and ready to use. You'll actually be able to park your car in there again.</p></div>
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
          <h2 className="font-display text-3xl lg:text-5xl text-white font-bold mb-4">READY TO ACTUALLY USE YOUR GARAGE?</h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">Get a free estimate for garage cleanout services in Omaha. We clear the clutter and leave you with usable space.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={PHONE_LINK} className="inline-flex items-center justify-center gap-2 bg-[#E8611A] text-white px-8 py-4 rounded font-bold text-lg transition-colors"><Phone className="w-5 h-5" /> CALL {PHONE}</a>
            <Link href="/free-estimate" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded font-bold text-lg hover:bg-white/10 transition-colors">REQUEST ONLINE ESTIMATE</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
