/*
  STORM DEBRIS & EMERGENCY CLEANUP — Dedicated Service Page
  URL: /storm-debris-cleanup
*/

import { useEffect } from "react";
import { Link } from "wouter";
import { PHONE, PHONE_LINK, BUSINESS_NAME, PLACEHOLDER_IMG, CTA_BG_IMG } from "@/lib/services-data";
import { Phone, ArrowRight, Clock, Star, Shield, DollarSign, CheckCircle, ChevronRight } from "lucide-react";

const relatedServices = [
  { slug: "yard-waste-removal", title: "Yard Waste Removal" },
  { slug: "light-demolition", title: "Light Demolition Services" },
  { slug: "fence-removal", title: "Fence Removal" },
  { slug: "deck-removal", title: "Deck Demolition & Removal" },
];

export default function StormDebrisCleanup() {
  useEffect(() => {
    document.title = "Storm Debris Cleanup Omaha | A1 Junk Removal and Tree Service";
    const metaDesc = document.querySelector('meta[name="description"]');
    const content = "Storm debris cleanup in Omaha. A1 Junk Removal clears fallen branches, damaged fencing, roofing materials, and storm wreckage fast. Call (402) 612-2373.";
    if (metaDesc) { metaDesc.setAttribute("content", content); } else { const meta = document.createElement("meta"); meta.name = "description"; meta.content = content; document.head.appendChild(meta); }
  }, []);

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Service", "name": "Storm Debris & Emergency Cleanup Omaha", "description": "Storm debris cleanup and emergency hauling services in Omaha, NE. Fast removal of fallen trees, branches, damaged structures, and storm wreckage.", "provider": { "@type": "LocalBusiness", "name": BUSINESS_NAME, "telephone": PHONE, "url": "https://a1junkremovalandtreeserviceofomaha.com" }, "areaServed": [{ "@type": "City", "name": "Omaha", "addressRegion": "NE" }, { "@type": "City", "name": "Millard", "addressRegion": "NE" }, { "@type": "City", "name": "Bennington", "addressRegion": "NE" }] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "How quickly can you respond after a storm?", "acceptedAnswer": { "@type": "Answer", "text": "We prioritize storm cleanup calls and can often respond within 24 hours of a major storm. For emergencies like trees blocking driveways or damaged structures posing safety hazards, we'll get there as fast as possible." } }, { "@type": "Question", "name": "Do you handle fallen trees or just the debris?", "acceptedAnswer": { "@type": "Answer", "text": "Both. We have a full tree service division, so we can cut up and remove fallen trees, grind the stumps, and haul away all the branches and debris. It's all one crew, one call." } }, { "@type": "Question", "name": "Will my homeowner's insurance cover storm cleanup?", "acceptedAnswer": { "@type": "Answer", "text": "In many cases, yes — especially if a tree fell on a structure or is blocking access to your home. We can provide detailed invoices and documentation to help with your insurance claim." } }, { "@type": "Question", "name": "Can you clean up storm damage to fences and decks?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We remove damaged fence sections, broken deck boards, and any structural debris caused by the storm. We handle the teardown and hauling so you can get straight to rebuilding." } }] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://a1junkremovalandtreeserviceofomaha.com/" }, { "@type": "ListItem", "position": 2, "name": "Junk Removal", "item": "https://a1junkremovalandtreeserviceofomaha.com/junk-removal" }, { "@type": "ListItem", "position": 3, "name": "Storm Debris Cleanup", "item": "https://a1junkremovalandtreeserviceofomaha.com/storm-debris-cleanup" }] }) }} />

      <div className="bg-gray-50 border-b border-gray-200"><div className="container py-3"><nav className="flex items-center gap-2 text-sm text-gray-500"><Link href="/" className="hover:text-[#0A1628]">Home</Link><span>/</span><Link href="/junk-removal" className="hover:text-[#0A1628]">Junk Removal</Link><span>/</span><span className="text-[#0A1628] font-medium">Storm Debris Cleanup</span></nav></div></div>

      <section className="relative py-16 lg:py-24 bg-[#0A1628] overflow-hidden">
        <div className="absolute inset-0 opacity-20"><img src={PLACEHOLDER_IMG} alt="" className="w-full h-full object-cover" /></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628] via-[#0A1628]/80 to-transparent" />
        <div className="container relative z-10"><div className="max-w-3xl">
          <div className="inline-block bg-[#E8611A]/20 text-[#E8611A] px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Emergency Services</div>
          <h1 className="font-display text-4xl lg:text-6xl text-white font-bold mb-4 uppercase">Storm Debris Cleanup in Omaha</h1>
          <p className="text-white/90 text-xl lg:text-2xl font-semibold mb-8">Fast Response When Mother Nature Makes a Mess</p>
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
        <p>Omaha weather doesn't mess around. Severe thunderstorms, straight-line winds, hail, and the occasional tornado can turn a tidy yard into a disaster zone overnight. <strong>A1 Junk Removal and Tree Service</strong> provides storm debris cleanup across the Omaha metro when you need it most. Fallen branches covering the driveway, a tree through the fence, shingles scattered across the lawn, siding ripped off the house — we clean it all up so you can start putting things back together.</p>

        <p>We've responded to storm damage across Millard, Bennington, and every corner of the metro after major weather events. Because we run both a junk removal operation and a full tree service, we're uniquely equipped to handle storm cleanup from start to finish — cutting up fallen trees, hauling away debris, and clearing damaged structures all in one call. You don't need to hire three different companies.</p>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">Storm Damage We Clean Up</h2>

        <div className="space-y-4 not-prose">
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Fallen Trees and Large Branches</h3><p className="text-gray-600 mt-1">Trees down in the yard, across the driveway, on the roof, or leaning on power lines. Our tree crew cuts them up and hauls everything away, including stump grinding if needed.</p></div></div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Roofing and Siding Debris</h3><p className="text-gray-600 mt-1">Shingles, gutters, fascia, vinyl siding, and insulation blown off by wind or hail. We gather it all up and haul it away so your roofer can get to work.</p></div></div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Damaged Fences and Structures</h3><p className="text-gray-600 mt-1">Fence panels knocked over by wind, pergolas collapsed, sheds damaged beyond repair. We tear down what's broken and haul the wreckage away.</p></div></div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Yard Debris and Scattered Materials</h3><p className="text-gray-600 mt-1">Branches, leaves, broken lawn furniture, kids' toys, trash cans, and anything else the wind scattered across your property. We do a thorough sweep of the entire yard.</p></div></div>
        </div>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">Tree Service and Junk Removal in One Call</h2>
        <p>Most storm cleanup requires both tree work and debris hauling, and most companies only do one or the other. You'd call a tree service to cut up the fallen tree, then call a junk removal company to haul the fence debris and roofing materials. With us, it's one crew, one call, one bill. Our team handles chainsaws and chippers for the tree work, then switches to loading the truck with everything else. That saves you time, money, and the headache of coordinating multiple contractors. If the storm took out a <Link href="/fence-removal" className="text-[#E8611A] font-semibold hover:underline">section of fence</Link> or damaged your <Link href="/deck-removal" className="text-[#E8611A] font-semibold hover:underline">deck</Link>, we'll tear down the damaged portions and haul them away as part of the same cleanup.</p>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">Working with Your Insurance</h2>
        <p>Storm damage cleanup is often covered by homeowner's insurance, especially when trees fall on structures or block access to your home. We provide detailed invoices with itemized descriptions of the work performed, which makes filing your claim straightforward. We've worked with homeowners across Douglas and Sarpy County who needed documentation for their insurance companies, and we know what adjusters are looking for. We're not insurance experts, but we'll give you everything you need on our end to make the process as smooth as possible.</p>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6 not-prose">
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">How quickly can you respond after a storm?</h3><p className="text-gray-600">We prioritize storm cleanup calls and can often respond within 24 hours of a major storm. For emergencies like trees blocking driveways or damaged structures posing safety hazards, we'll get there as fast as possible.</p></div>
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">Do you handle fallen trees or just the debris?</h3><p className="text-gray-600">Both. We have a full tree service division, so we can cut up and remove fallen trees, grind the stumps, and haul away all the branches and debris. It's all one crew, one call.</p></div>
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">Will my homeowner's insurance cover storm cleanup?</h3><p className="text-gray-600">In many cases, yes — especially if a tree fell on a structure or is blocking access to your home. We can provide detailed invoices and documentation to help with your insurance claim.</p></div>
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">Can you clean up storm damage to fences and decks?</h3><p className="text-gray-600">Yes. We remove damaged fence sections, broken deck boards, and any structural debris caused by the storm. We handle the teardown and hauling so you can get straight to rebuilding.</p></div>
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
          <h2 className="font-display text-3xl lg:text-5xl text-white font-bold mb-4">STORM HIT YOUR PROPERTY?</h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">Call now for fast storm debris cleanup in Omaha. We handle the trees, the debris, and the damaged structures — all in one call.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={PHONE_LINK} className="inline-flex items-center justify-center gap-2 bg-[#E8611A] text-white px-8 py-4 rounded font-bold text-lg transition-colors"><Phone className="w-5 h-5" /> CALL {PHONE}</a>
            <Link href="/free-estimate" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded font-bold text-lg hover:bg-white/10 transition-colors">REQUEST ONLINE ESTIMATE</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
