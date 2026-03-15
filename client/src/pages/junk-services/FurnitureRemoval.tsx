/*
  FURNITURE REMOVAL — Dedicated Service Page
  URL: /furniture-removal
*/

import { useEffect } from "react";
import { Link } from "wouter";
import { PHONE, PHONE_LINK, BUSINESS_NAME, PLACEHOLDER_IMG, CTA_BG_IMG } from "@/lib/services-data";
import { Phone, ArrowRight, Clock, Star, Shield, DollarSign, CheckCircle, ChevronRight } from "lucide-react";

const relatedServices = [
  { slug: "couch-sofa-removal", title: "Couch & Sofa Removal" },
  { slug: "mattress-disposal", title: "Mattress Disposal" },
  { slug: "office-furniture-removal", title: "Office Furniture Removal" },
  { slug: "residential-junk-removal", title: "Residential Junk Removal" },
];

export default function FurnitureRemoval() {
  useEffect(() => {
    document.title = "Furniture Removal Omaha | A1 Junk Removal and Tree Service";
    const metaDesc = document.querySelector('meta[name="description"]');
    const content = "Furniture removal in Omaha. A1 Junk Removal picks up old dressers, tables, desks, bookshelves, and any unwanted furniture from your home. Call (402) 612-2373.";
    if (metaDesc) { metaDesc.setAttribute("content", content); } else { const meta = document.createElement("meta"); meta.name = "description"; meta.content = content; document.head.appendChild(meta); }
  }, []);

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Service", "name": "Furniture Removal Omaha", "description": "Furniture removal and hauling services in Omaha, NE. Pickup of old dressers, tables, desks, bookshelves, entertainment centers, and all types of household furniture.", "provider": { "@type": "LocalBusiness", "name": BUSINESS_NAME, "telephone": PHONE, "url": "https://a1junkremovalandtreeserviceofomaha.com" }, "areaServed": [{ "@type": "City", "name": "Omaha", "addressRegion": "NE" }, { "@type": "City", "name": "Millard", "addressRegion": "NE" }, { "@type": "City", "name": "Gretna", "addressRegion": "NE" }] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Do you pick up furniture from upstairs bedrooms?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We pick up furniture from any room in the house — upstairs bedrooms, basements, attics, wherever it is. We carry it out through whatever path is available and protect your walls and floors in the process." } }, { "@type": "Question", "name": "Can you take furniture that's falling apart?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. Broken, water-damaged, stained, or falling apart — we take it all. We're not picky about condition. If you want it gone, we'll haul it away." } }, { "@type": "Question", "name": "Do you donate furniture that's still in good shape?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Furniture in usable condition can be donated to local organizations. If you'd like us to donate rather than dispose of certain pieces, just let us know and we'll make sure they go to the right place." } }, { "@type": "Question", "name": "How much does furniture removal cost?", "acceptedAnswer": { "@type": "Answer", "text": "We price based on how much space the furniture takes up on our truck. A single dresser costs less than a whole bedroom set. We give you a firm price before we start — no surprises." } }] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://a1junkremovalandtreeserviceofomaha.com/" }, { "@type": "ListItem", "position": 2, "name": "Junk Removal", "item": "https://a1junkremovalandtreeserviceofomaha.com/junk-removal" }, { "@type": "ListItem", "position": 3, "name": "Furniture Removal", "item": "https://a1junkremovalandtreeserviceofomaha.com/furniture-removal" }] }) }} />

      <div className="bg-gray-50 border-b border-gray-200"><div className="container py-3"><nav className="flex items-center gap-2 text-sm text-gray-500"><Link href="/" className="hover:text-[#0A1628]">Home</Link><span>/</span><Link href="/junk-removal" className="hover:text-[#0A1628]">Junk Removal</Link><span>/</span><span className="text-[#0A1628] font-medium">Furniture Removal</span></nav></div></div>

      <section className="relative py-16 lg:py-24 bg-[#0A1628] overflow-hidden">
        <div className="absolute inset-0 opacity-20"><img src={PLACEHOLDER_IMG} alt="" className="w-full h-full object-cover" /></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628] via-[#0A1628]/80 to-transparent" />
        <div className="container relative z-10"><div className="max-w-3xl">
          <div className="inline-block bg-[#E8611A]/20 text-[#E8611A] px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Item Removal</div>
          <h1 className="font-display text-4xl lg:text-6xl text-white font-bold mb-4 uppercase">Furniture Removal & Hauling in Omaha</h1>
          <p className="text-white/90 text-xl lg:text-2xl font-semibold mb-8">Old Furniture Picked Up from Any Room and Hauled Away</p>
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
        <p>You replaced the bedroom set but the old dresser is still sitting in the hallway. The dining table from the 90s is in the garage because it wouldn't fit in the trash. The entertainment center that held the tube TV is now holding nothing, and the bookshelf in the spare room has been empty for a year. Old furniture is heavy, awkward, and impossible to get rid of through normal trash service. <strong>A1 Junk Removal and Tree Service</strong> handles furniture removal across the Omaha metro. We pick it up from whatever room it's in and haul it away.</p>

        <p>We've carried solid oak dressers down staircases in Millard, hauled dining sets out of homes in Gretna, and removed entire rooms of furniture across Omaha for families who were downsizing, redecorating, or just tired of looking at the same old stuff. One piece or a whole houseful — we take it all.</p>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">Furniture We Pick Up</h2>

        <div className="space-y-4 not-prose">
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Bedroom Furniture</h3><p className="text-gray-600 mt-1">Dressers, nightstands, bed frames, headboards, armoires, and vanities. Solid wood bedroom furniture is some of the heaviest stuff in the house — we handle it all.</p></div></div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Living Room and Dining Furniture</h3><p className="text-gray-600 mt-1">Entertainment centers, TV stands, coffee tables, end tables, dining tables, china cabinets, and buffets. See our <Link href="/couch-sofa-removal" className="text-[#E8611A] font-semibold hover:underline">couch removal page</Link> for sofas and recliners.</p></div></div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Desks, Bookshelves, and Storage</h3><p className="text-gray-600 mt-1">Computer desks, writing desks, bookshelves, filing cabinets, storage shelving, and curio cabinets. Home office furniture that's been replaced or is no longer needed.</p></div></div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Outdoor and Patio Furniture</h3><p className="text-gray-600 mt-1">Patio tables, chairs, umbrellas, outdoor benches, and weathered furniture that's been sitting on the deck or in the yard past its useful life.</p></div></div>
        </div>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">We Come to the Furniture</h2>
        <p>You don't need to drag anything to the curb or the garage. We come inside and pick up furniture from whatever room it's in — second-floor bedrooms, finished basements, tight hallways, wherever. Our crew knows how to navigate large furniture through doorways, around corners, and down staircases without damaging your walls or floors. If a piece is too large to fit through a doorway assembled, we can disassemble it on the spot and carry it out in sections. The whole point is that you don't have to do any of the heavy lifting.</p>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">Donation, Recycling, and Disposal</h2>
        <p>Furniture in good condition doesn't have to go to the landfill. We can donate usable pieces to local organizations that accept furniture. Items that are broken or damaged beyond use get disposed of properly — wood goes to appropriate waste facilities, metal hardware gets recycled, and we sort materials as we go. If you have specific pieces you'd like donated rather than trashed, just let us know and we'll make sure they get to the right place. If you're clearing out a whole room or doing a full <Link href="/house-cleanout-services" className="text-[#E8611A] font-semibold hover:underline">house cleanout</Link>, we handle everything in one visit.</p>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6 not-prose">
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">Do you pick up furniture from upstairs bedrooms?</h3><p className="text-gray-600">Yes. We pick up furniture from any room in the house — upstairs bedrooms, basements, attics, wherever it is. We carry it out through whatever path is available and protect your walls and floors in the process.</p></div>
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">Can you take furniture that's falling apart?</h3><p className="text-gray-600">Absolutely. Broken, water-damaged, stained, or falling apart — we take it all. We're not picky about condition. If you want it gone, we'll haul it away.</p></div>
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">Do you donate furniture that's still in good shape?</h3><p className="text-gray-600">Yes. Furniture in usable condition can be donated to local organizations. If you'd like us to donate rather than dispose of certain pieces, just let us know and we'll make sure they go to the right place.</p></div>
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">How much does furniture removal cost?</h3><p className="text-gray-600">We price based on how much space the furniture takes up on our truck. A single dresser costs less than a whole bedroom set. We give you a firm price before we start — no surprises.</p></div>
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
          <h2 className="font-display text-3xl lg:text-5xl text-white font-bold mb-4">OLD FURNITURE TAKING UP SPACE?</h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">Get a free estimate for furniture removal in Omaha. We pick it up from any room and haul it away.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={PHONE_LINK} className="inline-flex items-center justify-center gap-2 bg-[#E8611A] text-white px-8 py-4 rounded font-bold text-lg transition-colors"><Phone className="w-5 h-5" /> CALL {PHONE}</a>
            <Link href="/free-estimate" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded font-bold text-lg hover:bg-white/10 transition-colors">REQUEST ONLINE ESTIMATE</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
