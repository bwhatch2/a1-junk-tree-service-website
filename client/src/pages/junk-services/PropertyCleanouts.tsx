/*
  PROPERTY CLEANOUT SERVICES — Dedicated Service Page
  URL: /property-cleanouts
*/

import { useEffect } from "react";
import { Link } from "wouter";
import { PHONE, PHONE_LINK, BUSINESS_NAME, PLACEHOLDER_IMG, CTA_BG_IMG } from "@/lib/services-data";
import { Phone, ArrowRight, Clock, Star, Shield, DollarSign, CheckCircle, ChevronRight } from "lucide-react";

const relatedServices = [
  { slug: "estate-cleanouts", title: "Estate Cleanout Services" },
  { slug: "foreclosure-cleanouts", title: "Foreclosure Cleanouts" },
  { slug: "garage-cleanout", title: "Garage Cleanout" },
  { slug: "hoarder-cleanup", title: "Hoarder House Cleanup" },
];

export default function PropertyCleanouts() {
  useEffect(() => {
    document.title = "Property Cleanout Services Omaha | A1 Junk Removal and Tree Service";
    const metaDesc = document.querySelector('meta[name="description"]');
    const content = "Full-service property cleanouts in Omaha. A1 Junk Removal clears out entire homes, rentals, and commercial spaces. Locally owned. Call (402) 612-2373 for a free estimate.";
    if (metaDesc) { metaDesc.setAttribute("content", content); } else { const meta = document.createElement("meta"); meta.name = "description"; meta.content = content; document.head.appendChild(meta); }
  }, []);

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Service", "name": "Property Cleanout Services Omaha", "description": "Complete property cleanout services in Omaha, NE. Full clearing of homes, rental units, and commercial properties.", "provider": { "@type": "LocalBusiness", "name": BUSINESS_NAME, "telephone": PHONE, "url": "https://a1junkremovalandtreeserviceofomaha.com" }, "areaServed": [{ "@type": "City", "name": "Omaha", "addressRegion": "NE" }, { "@type": "City", "name": "La Vista", "addressRegion": "NE" }, { "@type": "City", "name": "Ralston", "addressRegion": "NE" }] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "How long does a full property cleanout take?", "acceptedAnswer": { "@type": "Answer", "text": "It depends on the size of the property and how much stuff is inside. A small apartment can be cleared in a few hours. A full house packed floor to ceiling might take a full day or two. We'll give you a time estimate after the walkthrough." } }, { "@type": "Question", "name": "Do you separate items for donation?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. If there are usable items like furniture, clothing, or household goods, we'll set them aside for donation to local organizations. We don't just throw everything in the truck without looking at it." } }, { "@type": "Question", "name": "Can you clean out a property if I'm not local?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. We work with a lot of out-of-state families handling estates and property sales remotely. We can coordinate everything by phone and send you photos when the job is done." } }, { "@type": "Question", "name": "Do you handle the cleaning after the cleanout?", "acceptedAnswer": { "@type": "Answer", "text": "We focus on removing all the items and debris. We leave the space broom-swept and clear. For deep cleaning like carpet shampooing or sanitizing, we can refer you to a local cleaning service we trust." } }] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://a1junkremovalandtreeserviceofomaha.com/" }, { "@type": "ListItem", "position": 2, "name": "Junk Removal", "item": "https://a1junkremovalandtreeserviceofomaha.com/junk-removal" }, { "@type": "ListItem", "position": 3, "name": "Property Cleanouts", "item": "https://a1junkremovalandtreeserviceofomaha.com/property-cleanouts" }] }) }} />

      <div className="bg-gray-50 border-b border-gray-200"><div className="container py-3"><nav className="flex items-center gap-2 text-sm text-gray-500"><Link href="/" className="hover:text-[#0A1628]">Home</Link><span>/</span><Link href="/junk-removal" className="hover:text-[#0A1628]">Junk Removal</Link><span>/</span><span className="text-[#0A1628] font-medium">Property Cleanouts</span></nav></div></div>

      <section className="relative py-16 lg:py-24 bg-[#0A1628] overflow-hidden">
        <div className="absolute inset-0 opacity-20"><img src={PLACEHOLDER_IMG} alt="" className="w-full h-full object-cover" /></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628] via-[#0A1628]/80 to-transparent" />
        <div className="container relative z-10"><div className="max-w-3xl">
          <div className="inline-block bg-[#E8611A]/20 text-[#E8611A] px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Cleanout Services</div>
          <h1 className="font-display text-4xl lg:text-6xl text-white font-bold mb-4 uppercase">Property Cleanout Services in Omaha</h1>
          <p className="text-white/90 text-xl lg:text-2xl font-semibold mb-8">Complete Clearing of Homes, Rentals, and Commercial Spaces</p>
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
        <p>Sometimes you need an entire property emptied out — not just a room, not just a few items, but everything. <strong>A1 Junk Removal and Tree Service</strong> provides full property cleanout services across the Omaha metro. Whether it's a rental unit between tenants, a house that's been sitting untouched for years, or a commercial space that needs to be gutted before a new lease, we clear it all out. Every room, every closet, every corner of the garage.</p>

        <p>We work with homeowners in La Vista dealing with decades of accumulated stuff, landlords in Ralston turning over rental units, and real estate agents across Douglas County who need a property show-ready before listing. A property cleanout is one of those jobs that looks simple until you're standing in the middle of it surrounded by furniture, boxes, old appliances, and bags of who-knows-what. That's when you call us.</p>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">Types of Properties We Clear</h2>

        <div className="space-y-4 not-prose">
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Single-Family Homes</h3><p className="text-gray-600 mt-1">Full house cleanouts including furniture, personal belongings, appliances, garage contents, and yard debris. We go room by room until the place is empty.</p></div></div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Rental Units and Apartments</h3><p className="text-gray-600 mt-1">Fast turnaround for landlords and property managers. We remove everything tenants left behind so you can get the unit back on the market.</p></div></div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Commercial and Retail Spaces</h3><p className="text-gray-600 mt-1">Office furniture, fixtures, inventory, shelving, signage — we clear out commercial properties for new tenants, renovations, or closures.</p></div></div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Storage Units and Garages</h3><p className="text-gray-600 mt-1">Those spaces that started as "temporary storage" five years ago. We empty them completely and haul everything away.</p></div></div>
        </div>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">How a Property Cleanout Works</h2>
        <p>We start with a walkthrough. We need to see the property, understand the scope, and give you an honest price before any work begins. Once you approve the estimate, we schedule the cleanout — often within a day or two. Our crew works through the property systematically, sorting as we go. Usable items get set aside for donation. Recyclables get separated. Everything else gets loaded and hauled to proper disposal. We leave the space broom-swept and cleared out. If the property also has an <Link href="/estate-cleanouts" className="text-[#E8611A] font-semibold hover:underline">estate situation</Link> where you need us to be careful with certain items, we handle that with respect.</p>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">Working with Out-of-State Families</h2>
        <p>A lot of our property cleanout clients aren't local. They've inherited a house, or they're managing a property sale from another state, and they can't be here to oversee the work. We get it. We coordinate everything by phone, send photos before and after, and make sure you know exactly what's happening at every step. You don't need to fly in to empty out a house — that's what we're here for. If the property also needs <Link href="/appliance-removal" className="text-[#E8611A] font-semibold hover:underline">old appliances hauled out</Link>, we handle that as part of the same job.</p>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6 not-prose">
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">How long does a full property cleanout take?</h3><p className="text-gray-600">It depends on the size of the property and how much stuff is inside. A small apartment can be cleared in a few hours. A full house packed floor to ceiling might take a full day or two. We'll give you a time estimate after the walkthrough.</p></div>
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">Do you separate items for donation?</h3><p className="text-gray-600">Yes. If there are usable items like furniture, clothing, or household goods, we'll set them aside for donation to local organizations. We don't just throw everything in the truck without looking at it.</p></div>
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">Can you clean out a property if I'm not local?</h3><p className="text-gray-600">Absolutely. We work with a lot of out-of-state families handling estates and property sales remotely. We can coordinate everything by phone and send you photos when the job is done.</p></div>
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">Do you handle the cleaning after the cleanout?</h3><p className="text-gray-600">We focus on removing all the items and debris. We leave the space broom-swept and clear. For deep cleaning like carpet shampooing or sanitizing, we can refer you to a local cleaning service we trust.</p></div>
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
          <h2 className="font-display text-3xl lg:text-5xl text-white font-bold mb-4">NEED A PROPERTY CLEARED OUT?</h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">Get a free estimate for full property cleanout services in Omaha. We handle every room, every item, every trip to disposal.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={PHONE_LINK} className="inline-flex items-center justify-center gap-2 bg-[#E8611A] text-white px-8 py-4 rounded font-bold text-lg transition-colors"><Phone className="w-5 h-5" /> CALL {PHONE}</a>
            <Link href="/free-estimate" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded font-bold text-lg hover:bg-white/10 transition-colors">REQUEST ONLINE ESTIMATE</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
