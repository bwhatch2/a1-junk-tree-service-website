/*
  HOARDER HOUSE CLEANUP — Dedicated Service Page
  URL: /hoarder-cleanup
*/

import { useEffect } from "react";
import { Link } from "wouter";
import { PHONE, PHONE_LINK, BUSINESS_NAME, PLACEHOLDER_IMG, CTA_BG_IMG } from "@/lib/services-data";
import { Phone, ArrowRight, Clock, Star, Shield, DollarSign, CheckCircle, ChevronRight } from "lucide-react";

const relatedServices = [
  { slug: "estate-cleanouts", title: "Estate Cleanouts" },
  { slug: "property-cleanouts", title: "Property Cleanouts" },
  { slug: "appliance-removal", title: "Appliance Removal" },
  { slug: "e-waste-disposal", title: "E-Waste Disposal" },
];

export default function HoarderCleanup() {
  useEffect(() => {
    document.title = "Hoarder House Cleanup Omaha | A1 Junk Removal and Tree Service";
    const metaDesc = document.querySelector('meta[name="description"]');
    const content = "Compassionate, professional hoarder house cleanup in Omaha. A1 Junk Removal provides systematic clearing, sorting & hauling. Locally owned. Call (402) 612-2373.";
    if (metaDesc) { metaDesc.setAttribute("content", content); } else { const meta = document.createElement("meta"); meta.name = "description"; meta.content = content; document.head.appendChild(meta); }
  }, []);

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Service", "name": "Hoarder House Cleanup Omaha", "description": "Compassionate, professional hoarder house cleanup services in Omaha, NE. Systematic clearing, sorting, and hauling.", "provider": { "@type": "LocalBusiness", "name": BUSINESS_NAME, "telephone": PHONE, "url": "https://a1junkremovalandtreeserviceofomaha.com" }, "areaServed": [{ "@type": "City", "name": "Omaha", "addressRegion": "NE" }, { "@type": "City", "name": "Millard", "addressRegion": "NE" }, { "@type": "City", "name": "Elkhorn", "addressRegion": "NE" }] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "How long does a full hoarder cleanup take?", "acceptedAnswer": { "@type": "Answer", "text": "Every property is unique, but most large-scale cleanouts take between 2 and 5 full working days. We provide a clear timeline during our initial assessment." } }, { "@type": "Question", "name": "Are you discrete during the cleanup?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. We understand the privacy concerns of our clients. We work efficiently and professionally to minimize the impact on the neighborhood." } }, { "@type": "Question", "name": "Do you handle biohazardous materials?", "acceptedAnswer": { "@type": "Answer", "text": "We primarily focus on junk, debris, and household waste removal. If the property requires specialized hazmat or biohazard remediation, we can discuss the scope and coordinate the best path forward." } }, { "@type": "Question", "name": "What happens to the items that are cleared?", "acceptedAnswer": { "@type": "Answer", "text": "We prioritize responsible disposal. Usable items are donated to local Omaha charities, and we recycle as much metal, plastic, and paper as possible." } }] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://a1junkremovalandtreeserviceofomaha.com/" }, { "@type": "ListItem", "position": 2, "name": "Junk Removal", "item": "https://a1junkremovalandtreeserviceofomaha.com/junk-removal" }, { "@type": "ListItem", "position": 3, "name": "Hoarder House Cleanup", "item": "https://a1junkremovalandtreeserviceofomaha.com/hoarder-cleanup" }] }) }} />

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200"><div className="container py-3"><nav className="flex items-center gap-2 text-sm text-gray-500"><Link href="/" className="hover:text-[#0A1628]">Home</Link><span>/</span><Link href="/junk-removal" className="hover:text-[#0A1628]">Junk Removal</Link><span>/</span><span className="text-[#0A1628] font-medium">Hoarder House Cleanup</span></nav></div></div>

      {/* Hero */}
      <section className="relative py-16 lg:py-24 bg-[#0A1628] overflow-hidden">
        <div className="absolute inset-0 opacity-20"><img src={PLACEHOLDER_IMG} alt="" className="w-full h-full object-cover" /></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628] via-[#0A1628]/80 to-transparent" />
        <div className="container relative z-10"><div className="max-w-3xl">
          <div className="inline-block bg-[#E8611A]/20 text-[#E8611A] px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Cleanout Services</div>
          <h1 className="font-display text-4xl lg:text-6xl text-white font-bold mb-4 uppercase">Hoarder House Cleanup in Omaha</h1>
          <p className="text-white/90 text-xl lg:text-2xl font-semibold mb-8">Compassionate, Professional, and Discrete Full-Home Restoration</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/free-estimate" className="inline-flex items-center justify-center gap-2 bg-[#E8611A] hover:bg-[#d4570f] text-white px-8 py-4 rounded font-bold text-lg transition-colors">GET YOUR FREE ESTIMATE <ArrowRight className="w-5 h-5" /></Link>
            <a href={PHONE_LINK} className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded font-bold text-lg hover:bg-white/10 transition-colors"><Phone className="w-5 h-5" /> CALL {PHONE}</a>
          </div>
        </div></div>
      </section>

      {/* Trust Signals */}
      <section className="py-8 bg-white border-b border-gray-200"><div className="container"><div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="flex items-center gap-3"><Star className="w-8 h-8 text-[#E8611A]" /><div><p className="font-bold text-[#0A1628]">253+ Reviews</p><p className="text-sm text-gray-500">4.9 Star Average</p></div></div>
        <div className="flex items-center gap-3"><DollarSign className="w-8 h-8 text-[#E8611A]" /><div><p className="font-bold text-[#0A1628]">40-60% Less</p><p className="text-sm text-gray-500">Than National Companies</p></div></div>
        <div className="flex items-center gap-3"><Clock className="w-8 h-8 text-[#E8611A]" /><div><p className="font-bold text-[#0A1628]">7 Days a Week</p><p className="text-sm text-gray-500">Same-Day Available</p></div></div>
        <div className="flex items-center gap-3"><Shield className="w-8 h-8 text-[#E8611A]" /><div><p className="font-bold text-[#0A1628]">Locally Owned</p><p className="text-sm text-gray-500">Serving Omaha Metro</p></div></div>
      </div></div></section>

      {/* Main Content */}
      <section className="py-16 lg:py-20"><div className="container"><div className="max-w-3xl mx-auto"><div className="prose prose-lg max-w-none text-gray-700">
        <p>Cleaning out a hoarded property is a massive physical and emotional undertaking that requires more than just a junk truck—it requires a specialized strategy. <strong>A1 Junk Removal and Tree Service</strong> provides professional Hoarder House Cleanup throughout the Omaha metro, including Millard, Elkhorn, and Papillion. Our crew stays in the field every day, helping families, executors, and property owners navigate these complex situations with respect and efficiency.</p>

        <p>A hoarding situation often involves years of accumulation that can create structural risks, fire hazards, and health concerns. We don't just "toss everything"; we provide a systematic approach to clearing the property. Because we are a local, honest outfit, we understand the sensitivity required for these jobs. We work at a pace that is productive but respectful, ensuring that the property is returned to a safe, livable, or sellable condition without the corporate feel of a national franchise.</p>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">Our Systematic Cleanup Process</h2>

        <div className="space-y-4 not-prose">
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Safety Assessment and PPE</h3><p className="text-gray-600 mt-1">Before we begin, our crew evaluates the property in Douglas County for structural stability and potential biohazards. We utilize the proper personal protective equipment (PPE) to ensure a safe removal process.</p></div></div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Staged Clearing and Sorting</h3><p className="text-gray-600 mt-1">We work through the home room-by-room, carefully sorting through layers of debris to identify and set aside important documents, family heirlooms, and items of value.</p></div></div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Full-Scale Debris Hauling</h3><p className="text-gray-600 mt-1">We have the heavy-duty trucks to handle the massive volume of household junk, old furniture, and organic waste that often accumulates in these properties.</p></div></div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Appliance and E-Waste Removal</h3><p className="text-gray-600 mt-1">Hoarded homes often contain non-working refrigerators, stoves, and outdated electronics. We ensure these are hauled away and recycled according to Omaha environmental standards.</p></div></div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Exterior and Yard Restoration</h3><p className="text-gray-600 mt-1">As a hybrid tree and junk service, we can also clear out overgrown landscaping, fallen limbs, and outdoor clutter in Sarpy County to restore the property's curb appeal.</p></div></div>
        </div>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">Why Trust A1 Junk Removal and Tree Service?</h2>
        <p>In Omaha, many junk removal companies will walk away from a hoarding job because of the complexity. We lean into it. We provide an honest day's work for a fair price. Because we are locally owned, our rates are consistently cheaper than the national franchises, and we provide a level of personal accountability they can't match. We treat every home like it belongs to our own neighbor, providing a clean-sweep finish that helps families turn the page on a difficult chapter. If the property also has <Link href="/appliance-removal" className="text-[#E8611A] font-semibold hover:underline">old appliances</Link> or <Link href="/e-waste-disposal" className="text-[#E8611A] font-semibold hover:underline">outdated electronics</Link>, we handle those too.</p>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6 not-prose">
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">How long does a full hoarder cleanup take?</h3><p className="text-gray-600">Every property is unique, but most large-scale cleanouts in Bellevue or Gretna take between 2 and 5 full working days. We provide a clear timeline during our initial assessment.</p></div>
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">Are you discrete during the cleanup?</h3><p className="text-gray-600">Absolutely. We understand the privacy concerns of our clients. We work efficiently and professionally to minimize the impact on the neighborhood while we get the job done.</p></div>
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">Do you handle biohazardous materials?</h3><p className="text-gray-600">We primarily focus on junk, debris, and household waste removal. If the property requires specialized hazmat or biohazard remediation, we can discuss the scope and coordinate the best path forward.</p></div>
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">What happens to the items that are cleared?</h3><p className="text-gray-600">We prioritize responsible disposal. Usable items are donated to local Omaha charities, and we recycle as much metal, plastic, and paper as possible.</p></div>
        </div>
      </div></div></div></section>

      {/* Related Services */}
      <section className="py-12 bg-gray-50 border-t border-gray-200"><div className="container">
        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mb-8 text-center">Related Services</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {relatedServices.map((svc) => (<Link key={svc.slug} href={`/${svc.slug}`} className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 hover:border-[#E8611A] hover:shadow-md transition-all group"><span className="font-semibold text-[#0A1628] group-hover:text-[#E8611A] transition-colors">{svc.title}</span><ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-[#E8611A] transition-colors" /></Link>))}
        </div>
      </div></section>

      {/* CTA */}
      <section className="relative py-20 bg-[#0A1628] overflow-hidden">
        <div className="absolute inset-0 opacity-30"><img src={CTA_BG_IMG} alt="" className="w-full h-full object-cover" /></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628] via-[#0A1628]/80 to-transparent" />
        <div className="container relative z-10 text-center">
          <h2 className="font-display text-3xl lg:text-5xl text-white font-bold mb-4">NEED A HOARDING CLEANUP?</h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">Get a free, confidential estimate for hoarder house cleanup in Omaha. We handle the heavy lifting with respect and care.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={PHONE_LINK} className="inline-flex items-center justify-center gap-2 bg-[#E8611A] text-white px-8 py-4 rounded font-bold text-lg transition-colors"><Phone className="w-5 h-5" /> CALL {PHONE}</a>
            <Link href="/free-estimate" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded font-bold text-lg hover:bg-white/10 transition-colors">REQUEST ONLINE ESTIMATE</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
