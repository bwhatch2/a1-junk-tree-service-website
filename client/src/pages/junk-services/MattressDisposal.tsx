/*
  MATTRESS DISPOSAL & RECYCLING — Dedicated Service Page
  URL: /mattress-disposal
*/

import { useEffect } from "react";
import { Link } from "wouter";
import { PHONE, PHONE_LINK, BUSINESS_NAME, PLACEHOLDER_IMG, CTA_BG_IMG } from "@/lib/services-data";
import { Phone, ArrowRight, Clock, Star, Shield, DollarSign, CheckCircle, ChevronRight } from "lucide-react";

const relatedServices = [
  { slug: "furniture-removal", title: "Furniture Removal" },
  { slug: "apartment-cleanouts", title: "Apartment Complex Junk Removal" },
  { slug: "residential-junk-removal", title: "Residential Junk Removal" },
  { slug: "bulk-trash-pickup", title: "Bulk Trash Pickup" },
];

export default function MattressDisposal() {
  useEffect(() => {
    document.title = "Mattress Disposal & Recycling Omaha | A1 Junk Removal and Tree Service";
    const metaDesc = document.querySelector('meta[name="description"]');
    const content = "Fast mattress disposal & recycling in Omaha. A1 Junk Removal picks up old beds, box springs & bed frames. Same-day available. Call (402) 612-2373.";
    if (metaDesc) { metaDesc.setAttribute("content", content); } else { const meta = document.createElement("meta"); meta.name = "description"; meta.content = content; document.head.appendChild(meta); }
  }, []);

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Service", "name": "Mattress Disposal & Recycling Omaha", "description": "Fast mattress disposal and recycling services in Omaha, NE. Pickup for beds, box springs, and bed frames.", "provider": { "@type": "LocalBusiness", "name": BUSINESS_NAME, "telephone": PHONE, "url": "https://a1junkremovalandtreeserviceofomaha.com" }, "areaServed": [{ "@type": "City", "name": "Omaha", "addressRegion": "NE" }, { "@type": "City", "name": "Millard", "addressRegion": "NE" }, { "@type": "City", "name": "Ralston", "addressRegion": "NE" }] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Can you take a mattress from a second-story bedroom?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We are experts at navigating tight corners and stairs. We handle the heavy lifting so you don't have to worry about your walls or your back." } }, { "@type": "Question", "name": "Do you take mattresses with bed bugs?", "acceptedAnswer": { "@type": "Answer", "text": "For the safety of our crew and other customers, we generally cannot take infested mattresses unless they have been professionally treated and are fully sealed in plastic." } }, { "@type": "Question", "name": "Is there an extra fee for recycling?", "acceptedAnswer": { "@type": "Answer", "text": "We provide an upfront, all-in quote that includes the labor and the disposal fees. We remain an honest value compared to the big national brands." } }, { "@type": "Question", "name": "Where do the mattresses go?", "acceptedAnswer": { "@type": "Answer", "text": "We take them to local Omaha facilities where they are processed for disposal or recycling, keeping as much as possible out of the landfill." } }] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://a1junkremovalandtreeserviceofomaha.com/" }, { "@type": "ListItem", "position": 2, "name": "Junk Removal", "item": "https://a1junkremovalandtreeserviceofomaha.com/junk-removal" }, { "@type": "ListItem", "position": 3, "name": "Mattress Disposal & Recycling", "item": "https://a1junkremovalandtreeserviceofomaha.com/mattress-disposal" }] }) }} />

      <div className="bg-gray-50 border-b border-gray-200"><div className="container py-3"><nav className="flex items-center gap-2 text-sm text-gray-500"><Link href="/" className="hover:text-[#0A1628]">Home</Link><span>/</span><Link href="/junk-removal" className="hover:text-[#0A1628]">Junk Removal</Link><span>/</span><span className="text-[#0A1628] font-medium">Mattress Disposal &amp; Recycling</span></nav></div></div>

      <section className="relative py-16 lg:py-24 bg-[#0A1628] overflow-hidden">
        <div className="absolute inset-0 opacity-20"><img src={PLACEHOLDER_IMG} alt="" className="w-full h-full object-cover" /></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628] via-[#0A1628]/80 to-transparent" />
        <div className="container relative z-10"><div className="max-w-3xl">
          <div className="inline-block bg-[#E8611A]/20 text-[#E8611A] px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Item Removal</div>
          <h1 className="font-display text-4xl lg:text-6xl text-white font-bold mb-4 uppercase">Mattress Disposal &amp; Recycling in Omaha</h1>
          <p className="text-white/90 text-xl lg:text-2xl font-semibold mb-8">Fast, Easy Pickup for Old Beds, Box Springs, and Bedding</p>
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
        <p>Getting an old mattress out of your house is a struggle that usually involves cramped hallways, steep stairs, and a lot of physical strain. <strong>A1 Junk Removal and Tree Service</strong> offers professional Mattress Disposal &amp; Recycling across the Omaha metro, including Millard, Ralston, and Papillion. Our crew is out in the field every day, providing a fast and reliable service that saves you the hassle of trying to fit a king-sized mattress into a small SUV.</p>

        <p>Most city trash services in Omaha have strict rules about mattresses—they often won't take them without a special tag, or they require you to wrap them in plastic and leave them at the curb for days. We provide a full-service experience. We go into your home, handle the heavy lifting, and ensure that your old bedding is disposed of responsibly. Because we are an honest, local business, our rates are consistently cheaper than the national franchises.</p>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">What We Haul and Recycle</h2>

        <div className="space-y-4 not-prose">
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">All Mattress Sizes</h3><p className="text-gray-600 mt-1">From Twin and Full to King and California King units in Douglas County.</p></div></div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Box Springs and Foundations</h3><p className="text-gray-600 mt-1">Hauling away the matching bases and metal supports.</p></div></div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Bed Frames and Headboards</h3><p className="text-gray-600 mt-1">Dismantling and removing heavy wooden or metal frames in Sarpy County.</p></div></div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Memory Foam and Hybrid Beds</h3><p className="text-gray-600 mt-1">Responsible disposal for modern mattresses that contain specialized foam and gel layers.</p></div></div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Commercial Bedding Removal</h3><p className="text-gray-600 mt-1">Providing bulk mattress disposal for local Omaha hotels, <Link href="/apartment-cleanouts" className="text-[#E8611A] font-semibold hover:underline">apartment complexes</Link>, and dormitories.</p></div></div>
        </div>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">Same-Day Pickup, Honest Pricing</h2>
        <p>In Omaha, you shouldn't have to wait for "bulky item day" to get your space back. We are on the trucks every day, which means we can often provide same-day or next-day pickup in Bellevue or La Vista. We pride ourselves on being an honest, hard-working outfit that treats your home with respect. We prioritize recycling all metal components from box springs and bed frames, and we ensure that all mattresses are taken to local facilities that follow proper disposal protocols. If you also have old <Link href="/furniture-removal" className="text-[#E8611A] font-semibold hover:underline">furniture that needs to go</Link>, we can handle that in the same trip.</p>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6 not-prose">
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">Can you take a mattress from a second-story bedroom?</h3><p className="text-gray-600">Yes. We are experts at navigating tight corners and stairs. We handle the heavy lifting so you don't have to worry about your walls or your back.</p></div>
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">Do you take mattresses with bed bugs?</h3><p className="text-gray-600">For the safety of our crew and other customers, we generally cannot take infested mattresses unless they have been professionally treated and are fully sealed in plastic.</p></div>
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">Is there an extra fee for recycling?</h3><p className="text-gray-600">We provide an upfront, all-in quote that includes the labor and the disposal fees. We remain an honest value compared to the big national brands.</p></div>
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">Where do the mattresses go?</h3><p className="text-gray-600">We take them to local Omaha facilities where they are processed for disposal or recycling, keeping as much as possible out of the landfill.</p></div>
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
          <h2 className="font-display text-3xl lg:text-5xl text-white font-bold mb-4">OLD MATTRESS TAKING UP SPACE?</h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">Get a free estimate for mattress disposal and recycling in Omaha. We pick it up from any room and haul it away.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={PHONE_LINK} className="inline-flex items-center justify-center gap-2 bg-[#E8611A] text-white px-8 py-4 rounded font-bold text-lg transition-colors"><Phone className="w-5 h-5" /> CALL {PHONE}</a>
            <Link href="/free-estimate" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded font-bold text-lg hover:bg-white/10 transition-colors">REQUEST ONLINE ESTIMATE</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
