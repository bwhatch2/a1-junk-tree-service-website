/*
  RESIDENTIAL JUNK REMOVAL — Dedicated Service Page
  URL: /residential-junk-removal
*/

import { useEffect } from "react";
import { Link } from "wouter";
import { PHONE, PHONE_LINK, BUSINESS_NAME, PLACEHOLDER_IMG, CTA_BG_IMG } from "@/lib/services-data";
import { Phone, ArrowRight, Clock, Star, Shield, DollarSign, CheckCircle, ChevronRight } from "lucide-react";

const relatedServices = [
  { slug: "property-cleanouts", title: "Property Cleanout Services" },
  { slug: "garage-cleanout", title: "Garage Cleanout" },
  { slug: "furniture-removal", title: "Furniture Removal" },
  { slug: "appliance-removal", title: "Appliance Removal" },
];

export default function ResidentialJunkRemoval() {
  useEffect(() => {
    document.title = "Residential Junk Removal Omaha | A1 Junk Removal and Tree Service";
    const metaDesc = document.querySelector('meta[name="description"]');
    const content = "Residential junk removal in Omaha. A1 Junk Removal clears out furniture, appliances, yard waste, and household clutter. Locally owned, 40-60% less. Call (402) 612-2373.";
    if (metaDesc) { metaDesc.setAttribute("content", content); } else { const meta = document.createElement("meta"); meta.name = "description"; meta.content = content; document.head.appendChild(meta); }
  }, []);

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Service", "name": "Residential Junk Removal Omaha", "description": "Full-service residential junk removal in Omaha, NE. Furniture, appliances, yard waste, garage cleanouts, and household clutter removal.", "provider": { "@type": "LocalBusiness", "name": BUSINESS_NAME, "telephone": PHONE, "url": "https://a1junkremovalandtreeserviceofomaha.com" }, "areaServed": [{ "@type": "City", "name": "Omaha", "addressRegion": "NE" }, { "@type": "City", "name": "Millard", "addressRegion": "NE" }, { "@type": "City", "name": "Bellevue", "addressRegion": "NE" }] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "What counts as residential junk?", "acceptedAnswer": { "@type": "Answer", "text": "Pretty much anything in or around your house that you want gone. Old furniture, broken appliances, mattresses, electronics, boxes of stuff from the garage, yard debris — if it's in your home and you don't want it, we'll take it." } }, { "@type": "Question", "name": "Do I need to move everything to the curb before you arrive?", "acceptedAnswer": { "@type": "Answer", "text": "No. We come inside and get it. Point to what you want gone and we carry it out — from any room, any floor, including basements and attics. That's the whole point of hiring us instead of renting a dumpster." } }, { "@type": "Question", "name": "How do you price a residential junk removal job?", "acceptedAnswer": { "@type": "Answer", "text": "We base it on the volume of space your items take up in our truck. We give you a price before we start loading, and that price includes all the labor, hauling, and disposal fees. No surprises." } }, { "@type": "Question", "name": "Can you come the same day I call?", "acceptedAnswer": { "@type": "Answer", "text": "In many cases, yes. We offer same-day service when our schedule allows. If we can't make it the same day, we'll usually get you on the books within 24-48 hours." } }] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://a1junkremovalandtreeserviceofomaha.com/" }, { "@type": "ListItem", "position": 2, "name": "Junk Removal", "item": "https://a1junkremovalandtreeserviceofomaha.com/junk-removal" }, { "@type": "ListItem", "position": 3, "name": "Residential Junk Removal", "item": "https://a1junkremovalandtreeserviceofomaha.com/residential-junk-removal" }] }) }} />

      <div className="bg-gray-50 border-b border-gray-200"><div className="container py-3"><nav className="flex items-center gap-2 text-sm text-gray-500"><Link href="/" className="hover:text-[#0A1628]">Home</Link><span>/</span><Link href="/junk-removal" className="hover:text-[#0A1628]">Junk Removal</Link><span>/</span><span className="text-[#0A1628] font-medium">Residential Junk Removal</span></nav></div></div>

      <section className="relative py-16 lg:py-24 bg-[#0A1628] overflow-hidden">
        <div className="absolute inset-0 opacity-20"><img src={PLACEHOLDER_IMG} alt="" className="w-full h-full object-cover" /></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628] via-[#0A1628]/80 to-transparent" />
        <div className="container relative z-10"><div className="max-w-3xl">
          <div className="inline-block bg-[#E8611A]/20 text-[#E8611A] px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Home Services</div>
          <h1 className="font-display text-4xl lg:text-6xl text-white font-bold mb-4 uppercase">Residential Junk Removal in Omaha</h1>
          <p className="text-white/90 text-xl lg:text-2xl font-semibold mb-8">We Clear Out the Clutter So You Can Enjoy Your Home Again</p>
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
        <p>Stuff piles up. The garage hasn't had a car in it for three years. The basement looks like a storage unit. The kids moved out and left half their childhood behind. <strong>A1 Junk Removal and Tree Service</strong> provides residential junk removal across the Omaha metro for homeowners who are ready to take their space back. We come to your house, haul out whatever you point at, and leave the place looking like you actually live there instead of running a warehouse.</p>

        <p>Our crew works in neighborhoods across Millard, Bellevue, and West Omaha every single day. We've cleared out everything from a single couch to an entire house full of stuff that hadn't been touched in twenty years. The job is the same every time — we show up, we work hard, we load the truck, and we're gone. No drama, no hidden fees, no leaving a mess behind.</p>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">Common Residential Junk We Remove</h2>

        <div className="space-y-4 not-prose">
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Furniture and Household Items</h3><p className="text-gray-600 mt-1">Couches, recliners, dining sets, dressers, bookshelves, desks — anything you're done with. We carry it out from wherever it sits, even upstairs bedrooms and finished basements.</p></div></div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Appliances and Electronics</h3><p className="text-gray-600 mt-1">Old refrigerators, washers, dryers, TVs, computers, microwaves. We handle the heavy lifting and make sure everything is disposed of or recycled properly.</p></div></div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Garage and Basement Clutter</h3><p className="text-gray-600 mt-1">Boxes of old stuff, broken tools, holiday decorations you'll never use again, exercise equipment collecting dust. We clear the whole space if you want.</p></div></div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Yard Waste and Outdoor Junk</h3><p className="text-gray-600 mt-1">Brush piles, old fencing, broken patio furniture, landscape timbers, bags of leaves. If it's in your yard and you want it gone, it goes on the truck.</p></div></div>
        </div>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">The Difference Between Us and a Dumpster Rental</h2>
        <p>A lot of people think renting a dumpster is the cheaper option. Sometimes it is — if you've got a week to fill it yourself and you don't mind doing all the heavy lifting. But for most homeowners, hiring us ends up being faster, easier, and not much more expensive. With a dumpster, you're paying for the rental period, the delivery, the pickup, the disposal fees, and you're still the one carrying everything out to the driveway. With us, you point and we carry. We're in and out in a few hours, and the price we quote includes everything — labor, truck, hauling, and disposal. No permits needed, no dumpster sitting in your driveway for a week annoying the neighbors.</p>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">What Happens to Your Stuff</h2>
        <p>We don't just throw everything in a landfill. Usable furniture and household items get donated to local organizations when possible. Appliances and electronics go to recycling facilities. Scrap metal gets separated. We try to divert as much as we can from the dump because it's the right thing to do — and because disposal fees are expensive, so recycling actually helps us keep your price down. If you've got a <Link href="/garage-cleanout" className="text-[#E8611A] font-semibold hover:underline">garage that needs a full cleanout</Link> or a <Link href="/basement-cleanout" className="text-[#E8611A] font-semibold hover:underline">basement that's overdue for clearing</Link>, those are some of our most common residential jobs.</p>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6 not-prose">
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">What counts as residential junk?</h3><p className="text-gray-600">Pretty much anything in or around your house that you want gone. Old furniture, broken appliances, mattresses, electronics, boxes of stuff from the garage, yard debris — if it's in your home and you don't want it, we'll take it.</p></div>
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">Do I need to move everything to the curb before you arrive?</h3><p className="text-gray-600">No. We come inside and get it. Point to what you want gone and we carry it out — from any room, any floor, including basements and attics. That's the whole point of hiring us instead of renting a dumpster.</p></div>
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">How do you price a residential junk removal job?</h3><p className="text-gray-600">We base it on the volume of space your items take up in our truck. We give you a price before we start loading, and that price includes all the labor, hauling, and disposal fees. No surprises.</p></div>
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">Can you come the same day I call?</h3><p className="text-gray-600">In many cases, yes. We offer same-day service when our schedule allows. If we can't make it the same day, we'll usually get you on the books within 24-48 hours.</p></div>
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
          <h2 className="font-display text-3xl lg:text-5xl text-white font-bold mb-4">READY TO CLEAR THE CLUTTER?</h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">Get a free estimate for residential junk removal in Omaha. We do the heavy lifting, the hauling, and the disposal — you just point.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={PHONE_LINK} className="inline-flex items-center justify-center gap-2 bg-[#E8611A] text-white px-8 py-4 rounded font-bold text-lg transition-colors"><Phone className="w-5 h-5" /> CALL {PHONE}</a>
            <Link href="/free-estimate" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded font-bold text-lg hover:bg-white/10 transition-colors">REQUEST ONLINE ESTIMATE</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
