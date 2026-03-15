/*
  SAME-DAY JUNK PICKUP — Dedicated Service Page
  URL: /same-day-junk-pickup
*/

import { useEffect } from "react";
import { Link } from "wouter";
import { PHONE, PHONE_LINK, BUSINESS_NAME, PLACEHOLDER_IMG, CTA_BG_IMG } from "@/lib/services-data";
import { Phone, ArrowRight, Clock, Star, Shield, DollarSign, CheckCircle, ChevronRight } from "lucide-react";

const relatedServices = [
  { slug: "residential-junk-removal", title: "Residential Junk Removal" },
  { slug: "bulk-trash-pickup", title: "Bulk Trash Pickup" },
  { slug: "commercial-junk-removal", title: "Commercial Junk Removal" },
  { slug: "trash-hauling", title: "Garbage & Trash Hauling" },
];

export default function SameDayJunkPickup() {
  useEffect(() => {
    document.title = "Same-Day Junk Pickup Omaha | A1 Junk Removal and Tree Service";
    const metaDesc = document.querySelector('meta[name="description"]');
    const content = "Same-day junk pickup in Omaha. A1 Junk Removal picks up furniture, appliances, yard waste, and more — often within hours. Locally owned. Call (402) 612-2373.";
    if (metaDesc) { metaDesc.setAttribute("content", content); } else { const meta = document.createElement("meta"); meta.name = "description"; meta.content = content; document.head.appendChild(meta); }
  }, []);

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Service", "name": "Same-Day Junk Pickup Omaha", "description": "Same-day junk pickup service in Omaha, NE. Fast removal of furniture, appliances, yard waste, and household junk.", "provider": { "@type": "LocalBusiness", "name": BUSINESS_NAME, "telephone": PHONE, "url": "https://a1junkremovalandtreeserviceofomaha.com" }, "areaServed": [{ "@type": "City", "name": "Omaha", "addressRegion": "NE" }, { "@type": "City", "name": "Elkhorn", "addressRegion": "NE" }, { "@type": "City", "name": "Papillion", "addressRegion": "NE" }] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "How quickly can you pick up my junk today?", "acceptedAnswer": { "@type": "Answer", "text": "It depends on our schedule, but we can often be at your door within a couple of hours of your call. If the morning is booked, we'll usually have an afternoon slot open. Call early for the best availability." } }, { "@type": "Question", "name": "Is same-day pickup more expensive than scheduling ahead?", "acceptedAnswer": { "@type": "Answer", "text": "No. We charge the same rates whether you book a week in advance or call us that morning. The price is based on the volume of junk, not the timing." } }, { "@type": "Question", "name": "What if I'm not sure exactly what I need picked up?", "acceptedAnswer": { "@type": "Answer", "text": "That's fine. Our crew will do a quick walkthrough when we arrive, show you a price based on what we see, and you decide what goes. No commitment until you say yes." } }, { "@type": "Question", "name": "Do you pick up junk on weekends?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We operate seven days a week, including Saturdays and Sundays. Weekend same-day availability depends on the schedule, but we do our best to fit you in." } }] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://a1junkremovalandtreeserviceofomaha.com/" }, { "@type": "ListItem", "position": 2, "name": "Junk Removal", "item": "https://a1junkremovalandtreeserviceofomaha.com/junk-removal" }, { "@type": "ListItem", "position": 3, "name": "Same-Day Junk Pickup", "item": "https://a1junkremovalandtreeserviceofomaha.com/same-day-junk-pickup" }] }) }} />

      <div className="bg-gray-50 border-b border-gray-200"><div className="container py-3"><nav className="flex items-center gap-2 text-sm text-gray-500"><Link href="/" className="hover:text-[#0A1628]">Home</Link><span>/</span><Link href="/junk-removal" className="hover:text-[#0A1628]">Junk Removal</Link><span>/</span><span className="text-[#0A1628] font-medium">Same-Day Junk Pickup</span></nav></div></div>

      <section className="relative py-16 lg:py-24 bg-[#0A1628] overflow-hidden">
        <div className="absolute inset-0 opacity-20"><img src={PLACEHOLDER_IMG} alt="" className="w-full h-full object-cover" /></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628] via-[#0A1628]/80 to-transparent" />
        <div className="container relative z-10"><div className="max-w-3xl">
          <div className="inline-block bg-[#E8611A]/20 text-[#E8611A] px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Fast Service</div>
          <h1 className="font-display text-4xl lg:text-6xl text-white font-bold mb-4 uppercase">Same-Day Junk Pickup in Omaha</h1>
          <p className="text-white/90 text-xl lg:text-2xl font-semibold mb-8">Call in the Morning, We're at Your Door by Afternoon</p>
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
        <p>You don't always have the luxury of planning a junk removal a week out. Sometimes the landlord needs the apartment cleared by tomorrow. Sometimes you're standing in the garage on a Saturday morning and you've finally had enough. <strong>A1 Junk Removal and Tree Service</strong> offers same-day junk pickup across the Omaha metro — call us in the morning and we'll do everything we can to be at your door that same day. No waiting around for a scheduled appointment three days from now.</p>

        <p>We run trucks across Omaha, Elkhorn, and Papillion every day of the week. Because we're local and not routing calls through a national dispatch center, we can pivot fast. If a job wraps up early or a cancellation opens a slot, we fill it with the next caller. That's how we get to people the same day more often than not. The big franchise companies can't do that — they're booking you into a system that doesn't care if you need it done today.</p>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">What We Pick Up on Short Notice</h2>

        <div className="space-y-4 not-prose">
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Furniture and Mattresses</h3><p className="text-gray-600 mt-1">Couches, recliners, bed frames, dressers, mattresses — the stuff that's too big for your car and too heavy to wrestle to the curb alone.</p></div></div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Appliances</h3><p className="text-gray-600 mt-1">Old fridges, washers, dryers, dishwashers, window AC units. We disconnect and haul them out, even from basements and upper floors.</p></div></div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Yard Debris and Outdoor Junk</h3><p className="text-gray-600 mt-1">Brush piles, broken fencing, old patio furniture, bags of leaves. If a storm just came through or you spent the morning cleaning up, we'll come grab it.</p></div></div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Garage and Basement Loads</h3><p className="text-gray-600 mt-1">Boxes, old tools, broken equipment, holiday junk you'll never use again. Point to the pile and we'll make it disappear.</p></div></div>
        </div>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">How Same-Day Pickup Works</h2>
        <p>Call or text us. Tell us roughly what you need hauled and where you're located. If we have availability — and most days we do — we'll give you a time window and head your way. When we arrive, we do a quick look at the items, give you a firm price, and start loading once you say go. The whole thing usually takes less than an hour for a standard pickup. You don't need to be home the entire time if the items are accessible — plenty of our customers in West Omaha leave stuff in the driveway or garage and we handle it while they're at work. For bigger jobs like a <Link href="/garage-cleanout" className="text-[#E8611A] font-semibold hover:underline">full garage cleanout</Link>, we may need a bit more time, but we'll tell you that upfront.</p>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">Why Local Means Faster</h2>
        <p>The national junk removal franchises route your call to a booking center that schedules you into the next available slot — which might be two or three days out. We answer our own phone. Bryan and the crew know the Omaha metro inside and out, so there's no wasted drive time between jobs. If we finish a pickup in Millard at 11 AM and you call from Ralston at 11:15, we can be there by noon. That kind of flexibility only works when you're local, and it's one of the biggest reasons people call us instead of the big names. If you've got a <Link href="/bulk-trash-pickup" className="text-[#E8611A] font-semibold hover:underline">bulk load of trash</Link> that needs to go today, we're built for exactly that.</p>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6 not-prose">
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">How quickly can you pick up my junk today?</h3><p className="text-gray-600">It depends on our schedule, but we can often be at your door within a couple of hours of your call. If the morning is booked, we'll usually have an afternoon slot open. Call early for the best availability.</p></div>
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">Is same-day pickup more expensive than scheduling ahead?</h3><p className="text-gray-600">No. We charge the same rates whether you book a week in advance or call us that morning. The price is based on the volume of junk, not the timing.</p></div>
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">What if I'm not sure exactly what I need picked up?</h3><p className="text-gray-600">That's fine. Our crew will do a quick walkthrough when we arrive, show you a price based on what we see, and you decide what goes. No commitment until you say yes.</p></div>
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">Do you pick up junk on weekends?</h3><p className="text-gray-600">Yes. We operate seven days a week, including Saturdays and Sundays. Weekend same-day availability depends on the schedule, but we do our best to fit you in.</p></div>
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
          <h2 className="font-display text-3xl lg:text-5xl text-white font-bold mb-4">NEED IT GONE TODAY?</h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">Call now for same-day junk pickup in Omaha. We'll get to you as fast as we can — usually the same day you call.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={PHONE_LINK} className="inline-flex items-center justify-center gap-2 bg-[#E8611A] text-white px-8 py-4 rounded font-bold text-lg transition-colors"><Phone className="w-5 h-5" /> CALL {PHONE}</a>
            <Link href="/free-estimate" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded font-bold text-lg hover:bg-white/10 transition-colors">REQUEST ONLINE ESTIMATE</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
