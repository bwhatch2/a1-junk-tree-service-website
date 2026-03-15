/*
  HOT TUB REMOVAL — Dedicated Service Page
  URL: /hot-tub-removal
*/

import { useEffect } from "react";
import { Link } from "wouter";
import { PHONE, PHONE_LINK, BUSINESS_NAME, PLACEHOLDER_IMG, CTA_BG_IMG } from "@/lib/services-data";
import { Phone, ArrowRight, Clock, Star, Shield, DollarSign, CheckCircle, ChevronRight } from "lucide-react";

const relatedServices = [
  { slug: "pool-removal", title: "Above Ground Pool Removal" },
  { slug: "deck-removal", title: "Deck Demolition & Removal" },
  { slug: "light-demolition", title: "Light Demolition" },
  { slug: "appliance-removal", title: "Appliance Removal" },
];

export default function HotTubRemoval() {
  useEffect(() => {
    document.title = "Hot Tub Removal Omaha | A1 Junk Removal and Tree Service";
    const metaDesc = document.querySelector('meta[name="description"]');
    const content = "Professional hot tub removal in Omaha. A1 Junk Removal dismantles and hauls spas, hot tubs & jacuzzis. Fully insured. 40-60% less. Call (402) 612-2373.";
    if (metaDesc) { metaDesc.setAttribute("content", content); } else { const meta = document.createElement("meta"); meta.name = "description"; meta.content = content; document.head.appendChild(meta); }
  }, []);

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Service", "name": "Hot Tub Removal Omaha", "description": "Professional hot tub and spa removal services in Omaha, NE. Dismantling and hauling for residential properties.", "provider": { "@type": "LocalBusiness", "name": BUSINESS_NAME, "telephone": PHONE, "url": "https://a1junkremovalandtreeserviceofomaha.com" }, "areaServed": [{ "@type": "City", "name": "Omaha", "addressRegion": "NE" }, { "@type": "City", "name": "Millard", "addressRegion": "NE" }, { "@type": "City", "name": "Ralston", "addressRegion": "NE" }] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Can you remove a hot tub from a deck or an indoor room?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We specialize in in-place dismantling. Whether it's recessed into a deck or sitting in a basement, we have the tools to cut it down and get it out safely." } }, { "@type": "Question", "name": "Do I need to drain it first?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. For the safety of our crew and to prevent damage to your lawn, we ask that the tub be fully drained at least 24 hours before we arrive." } }, { "@type": "Question", "name": "Where does the hot tub go?", "acceptedAnswer": { "@type": "Answer", "text": "We take the shell and insulation to local facilities and ensure all metal components and pumps are taken to recycling centers." } }, { "@type": "Question", "name": "How do you charge for hot tub removal?", "acceptedAnswer": { "@type": "Answer", "text": "We provide a straightforward, honest quote based on the size of the tub and the complexity of the removal. Our pricing is always an honest value for our neighbors." } }] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://a1junkremovalandtreeserviceofomaha.com/" }, { "@type": "ListItem", "position": 2, "name": "Junk Removal", "item": "https://a1junkremovalandtreeserviceofomaha.com/junk-removal" }, { "@type": "ListItem", "position": 3, "name": "Hot Tub Removal", "item": "https://a1junkremovalandtreeserviceofomaha.com/hot-tub-removal" }] }) }} />

      <div className="bg-gray-50 border-b border-gray-200"><div className="container py-3"><nav className="flex items-center gap-2 text-sm text-gray-500"><Link href="/" className="hover:text-[#0A1628]">Home</Link><span>/</span><Link href="/junk-removal" className="hover:text-[#0A1628]">Junk Removal</Link><span>/</span><span className="text-[#0A1628] font-medium">Hot Tub Removal</span></nav></div></div>

      <section className="relative py-16 lg:py-24 bg-[#0A1628] overflow-hidden">
        <div className="absolute inset-0 opacity-20"><img src={PLACEHOLDER_IMG} alt="" className="w-full h-full object-cover" /></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628] via-[#0A1628]/80 to-transparent" />
        <div className="container relative z-10"><div className="max-w-3xl">
          <div className="inline-block bg-[#E8611A]/20 text-[#E8611A] px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Specialized Removal</div>
          <h1 className="font-display text-4xl lg:text-6xl text-white font-bold mb-4 uppercase">Hot Tub Removal in Omaha</h1>
          <p className="text-white/90 text-xl lg:text-2xl font-semibold mb-8">Professional Dismantling and Hauling for Spas and Hot Tubs</p>
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
        <p>An old, non-working hot tub isn't just taking up space on your deck—it's a magnet for pests and a liability for your property in Omaha, Millard, or Ralston. <strong>A1 Junk Removal and Tree Service</strong> specializes in Hot Tub Removal, taking the stress and physical strain out of getting rid of these massive, bulky assets. Our crew is out in the field every day, equipped with the specialized saws and dollies needed to dismantle a spa in place and haul it off your property in one visit.</p>

        <p>Most homeowners quickly realize that you can't just "drag" a hot tub to the curb. They weigh between 500 and 1,000 pounds and are often wired into your home's electrical system. Because we are a local, hard-working outfit, we handle the entire teardown. We don't leave a mess behind, and we ensure your <Link href="/deck-removal" className="text-[#E8611A] font-semibold hover:underline">deck or patio</Link> is ready for its next use.</p>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">Our Specialized Removal Process</h2>

        <div className="space-y-4 not-prose">
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Electrical and Plumbing Check</h3><p className="text-gray-600 mt-1">We ensure that the power has been disconnected and the water is drained before we begin the dismantling process in Douglas County.</p></div></div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Sectional Dismantling</h3><p className="text-gray-600 mt-1">In tight residential areas like Papillion or La Vista, we use high-powered saws to cut the acrylic or fiberglass shell into manageable sections, ensuring we can move them through gates and walkways without damaging your home.</p></div></div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Frame and Cabinetry Removal</h3><p className="text-gray-600 mt-1">We break down the wooden or synthetic outer cabinets and the heavy internal framing, loading every piece into our trucks.</p></div></div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Pump and Mechanical Hauling</h3><p className="text-gray-600 mt-1">We remove and recycle the heavy internal pumps, heaters, and control systems.</p></div></div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Cover and Accessory Disposal</h3><p className="text-gray-600 mt-1">We haul away the heavy, water-logged spa covers and steps that are often left behind by other crews.</p></div></div>
        </div>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">Insured, Experienced, and Affordable</h2>
        <p>In Omaha, a lot of general laborers will say they can "move a hot tub," but without the right equipment and insurance, they risk damaging your property or getting injured. We are an honest, local business that is fully insured and experienced in technical removals. Our rates are consistently cheaper than the national franchises because we don't have the corporate markup. We show up on time, work hard, and provide a reliable service that saves you a weekend of back-breaking labor. If your <Link href="/pool-removal" className="text-[#E8611A] font-semibold hover:underline">above ground pool</Link> needs to go too, we handle that in the same visit.</p>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6 not-prose">
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">Can you remove a hot tub from a deck or an indoor room?</h3><p className="text-gray-600">Yes. We specialize in "in-place" dismantling. Whether it's recessed into a deck in Elkhorn or sitting in a basement in Bellevue, we have the tools to cut it down and get it out safely.</p></div>
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">Do I need to drain it first?</h3><p className="text-gray-600">Yes. For the safety of our crew and to prevent damage to your lawn, we ask that the tub be fully drained at least 24 hours before we arrive.</p></div>
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">Where does the hot tub go?</h3><p className="text-gray-600">We take the shell and insulation to local Omaha facilities and ensure all metal components and pumps are taken to recycling centers.</p></div>
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">How do you charge for hot tub removal?</h3><p className="text-gray-600">We provide a straightforward, honest quote based on the size of the tub and the complexity of the removal. Our pricing is always an honest value for our neighbors.</p></div>
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
          <h2 className="font-display text-3xl lg:text-5xl text-white font-bold mb-4">OLD HOT TUB TAKING UP SPACE?</h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">Get a free estimate for professional hot tub removal in Omaha. We dismantle and haul it away in one visit.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={PHONE_LINK} className="inline-flex items-center justify-center gap-2 bg-[#E8611A] text-white px-8 py-4 rounded font-bold text-lg transition-colors"><Phone className="w-5 h-5" /> CALL {PHONE}</a>
            <Link href="/free-estimate" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded font-bold text-lg hover:bg-white/10 transition-colors">REQUEST ONLINE ESTIMATE</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
