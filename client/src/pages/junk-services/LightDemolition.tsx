/*
  LIGHT DEMOLITION SERVICES — Dedicated Service Page
  URL: /light-demolition
*/

import { useEffect } from "react";
import { Link } from "wouter";
import { PHONE, PHONE_LINK, BUSINESS_NAME, PLACEHOLDER_IMG, CTA_BG_IMG } from "@/lib/services-data";
import { Phone, ArrowRight, Clock, Star, Shield, DollarSign, CheckCircle, ChevronRight } from "lucide-react";

const relatedServices = [
  { slug: "shed-removal", title: "Shed Demolition & Removal" },
  { slug: "deck-removal", title: "Deck Demolition & Removal" },
  { slug: "fence-removal", title: "Fence Removal" },
  { slug: "construction-debris", title: "Construction Debris Removal" },
];

export default function LightDemolition() {
  useEffect(() => {
    document.title = "Light Demolition Services Omaha | A1 Junk Removal and Tree Service";
    const metaDesc = document.querySelector('meta[name="description"]');
    const content = "Light demolition services in Omaha. A1 Junk Removal tears down sheds, decks, playsets, fences & more. Fully insured, locally owned. Call (402) 612-2373.";
    if (metaDesc) { metaDesc.setAttribute("content", content); } else { const meta = document.createElement("meta"); meta.name = "description"; meta.content = content; document.head.appendChild(meta); }
  }, []);

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Service", "name": "Light Demolition Services Omaha", "description": "Light demolition services in Omaha, NE. Small structure tear-downs and site clearing for homeowners.", "provider": { "@type": "LocalBusiness", "name": BUSINESS_NAME, "telephone": PHONE, "url": "https://a1junkremovalandtreeserviceofomaha.com" }, "areaServed": [{ "@type": "City", "name": "Omaha", "addressRegion": "NE" }, { "@type": "City", "name": "Papillion", "addressRegion": "NE" }, { "@type": "City", "name": "Bennington", "addressRegion": "NE" }] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Are you insured for demolition work?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We carry full liability insurance to protect our crew and your property during any teardown project in Omaha." } }, { "@type": "Question", "name": "Do you provide the dumpsters?", "acceptedAnswer": { "@type": "Answer", "text": "We use our own heavy-duty trucks for hauling. This is often better for homeowners because it means the debris is gone immediately, rather than having a dumpster sit in your driveway for a week." } }, { "@type": "Question", "name": "Can you tear down a structure attached to my house?", "acceptedAnswer": { "@type": "Answer", "text": "We handle detached structures like sheds and playsets regularly. For structures attached to the home, like decks, we perform a site assessment to ensure the removal can be done without damaging the main building." } }, { "@type": "Question", "name": "How do you charge for demolition?", "acceptedAnswer": { "@type": "Answer", "text": "We provide an upfront, honest quote based on the size of the structure and the amount of debris that needs to be hauled. Our pricing is always competitive and transparent." } }] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://a1junkremovalandtreeserviceofomaha.com/" }, { "@type": "ListItem", "position": 2, "name": "Junk Removal", "item": "https://a1junkremovalandtreeserviceofomaha.com/junk-removal" }, { "@type": "ListItem", "position": 3, "name": "Light Demolition Services", "item": "https://a1junkremovalandtreeserviceofomaha.com/light-demolition" }] }) }} />

      <div className="bg-gray-50 border-b border-gray-200"><div className="container py-3"><nav className="flex items-center gap-2 text-sm text-gray-500"><Link href="/" className="hover:text-[#0A1628]">Home</Link><span>/</span><Link href="/junk-removal" className="hover:text-[#0A1628]">Junk Removal</Link><span>/</span><span className="text-[#0A1628] font-medium">Light Demolition Services</span></nav></div></div>

      <section className="relative py-16 lg:py-24 bg-[#0A1628] overflow-hidden">
        <div className="absolute inset-0 opacity-20"><img src={PLACEHOLDER_IMG} alt="" className="w-full h-full object-cover" /></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628] via-[#0A1628]/80 to-transparent" />
        <div className="container relative z-10"><div className="max-w-3xl">
          <div className="inline-block bg-[#E8611A]/20 text-[#E8611A] px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Demolition &amp; Outdoor</div>
          <h1 className="font-display text-4xl lg:text-6xl text-white font-bold mb-4 uppercase">Light Demolition Services in Omaha</h1>
          <p className="text-white/90 text-xl lg:text-2xl font-semibold mb-8">Small Structure Tear-Downs and Site Clearing for Homeowners</p>
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
        <p>When you need more than just junk hauling, but you aren't ready for a full-scale construction crew, <strong>A1 Junk Removal and Tree Service</strong> provides professional Light Demolition Services. We specialize in tearing down the small structures that clutter your property in Omaha, Papillion, and Bennington, from rotted sheds to old backyard playsets. Our crew is out in the field every day, providing an honest, hard-working service that saves you the cost and headache of a dumpster rental.</p>

        <p>Demolition is dangerous work that requires the right tools and a clear plan. We don't just "smash and grab." We provide a controlled teardown that protects your existing landscaping, fences, and your home's siding. Because we are locally owned and operated, we provide a more personal and reliable service than the national franchises. We handle the labor, the loading, and the hauling, leaving you with a clean, level site ready for your next project.</p>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">Our Light Demolition Capabilities</h2>

        <div className="space-y-4 not-prose">
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Shed and Outbuilding Demolition</h3><p className="text-gray-600 mt-1">Tearing down weathered wood or rusted metal sheds and pulling the concrete pads in Douglas County.</p></div></div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Deck and Patio Removal</h3><p className="text-gray-600 mt-1">Dismantling rotted wooden decks and breaking up old concrete or brick patios in Sarpy County.</p></div></div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Playground and Swing Set Removal</h3><p className="text-gray-600 mt-1">Safe teardown of heavy wooden or metal play structures, including pulling the ground anchors.</p></div></div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Fence and Retaining Wall Removal</h3><p className="text-gray-600 mt-1">Clearing out hundreds of feet of old fencing or crumbling landscape walls in Millard.</p></div></div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Interior Non-Structural Demo</h3><p className="text-gray-600 mt-1">Removing old kitchen cabinets, flooring, or non-load-bearing walls during a residential remodel in Elkhorn.</p></div></div>
        </div>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">The Hardest Working Crew in Omaha</h2>
        <p>Demolition generates a massive amount of heavy debris. Most junk companies won't do the actual teardown, and most demolition companies won't touch small residential jobs. We bridge that gap. We provide an all-in-one solution across Bellevue and Gretna. Our rates are consistently cheaper than the national franchises, and we provide an honest value for a hard day's work. We don't leave ruts in your lawn, and we don't leave piles of debris behind—we make sure every nail and scrap is hauled away. Need a <Link href="/shed-removal" className="text-[#E8611A] font-semibold hover:underline">shed torn down</Link> or an old <Link href="/fence-removal" className="text-[#E8611A] font-semibold hover:underline">fence ripped out</Link>? That's exactly what we do.</p>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6 not-prose">
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">Are you insured for demolition work?</h3><p className="text-gray-600">Yes. We carry full liability insurance to protect our crew and your property during any teardown project in Omaha.</p></div>
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">Do you provide the dumpsters?</h3><p className="text-gray-600">We use our own heavy-duty trucks for hauling. This is often better for homeowners because it means the debris is gone immediately, rather than having a dumpster sit in your driveway for a week.</p></div>
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">Can you tear down a structure attached to my house?</h3><p className="text-gray-600">We handle "detached" structures like sheds and playsets regularly. For structures attached to the home, like decks, we perform a site assessment to ensure the removal can be done without damaging the main building.</p></div>
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">How do you charge for demolition?</h3><p className="text-gray-600">We provide an upfront, honest quote based on the size of the structure and the amount of debris that needs to be hauled. Our pricing is always competitive and transparent.</p></div>
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
          <h2 className="font-display text-3xl lg:text-5xl text-white font-bold mb-4">NEED SOMETHING TORN DOWN?</h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">Get a free estimate for light demolition services in Omaha. We tear it down, load it up, and haul it away.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={PHONE_LINK} className="inline-flex items-center justify-center gap-2 bg-[#E8611A] text-white px-8 py-4 rounded font-bold text-lg transition-colors"><Phone className="w-5 h-5" /> CALL {PHONE}</a>
            <Link href="/free-estimate" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded font-bold text-lg hover:bg-white/10 transition-colors">REQUEST ONLINE ESTIMATE</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
