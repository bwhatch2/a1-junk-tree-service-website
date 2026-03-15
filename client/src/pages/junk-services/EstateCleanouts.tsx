/*
  ESTATE CLEANOUTS — Dedicated Service Page
  URL: /estate-cleanouts
*/

import { useEffect } from "react";
import { Link } from "wouter";
import { PHONE, PHONE_LINK, BUSINESS_NAME, PLACEHOLDER_IMG, CTA_BG_IMG } from "@/lib/services-data";
import { Phone, ArrowRight, Clock, Star, Shield, DollarSign, CheckCircle, ChevronRight } from "lucide-react";

const relatedServices = [
  { slug: "house-cleanout-services", title: "House Cleanout Services" },
  { slug: "hoarder-cleanup", title: "Hoarder Cleanup Services" },
  { slug: "foreclosure-cleanouts", title: "Foreclosure Cleanouts" },
  { slug: "furniture-removal", title: "Furniture Removal" },
];

export default function EstateCleanouts() {
  useEffect(() => {
    document.title = "Estate Cleanout Omaha | A1 Junk Removal and Tree Service";
    const metaDesc = document.querySelector('meta[name="description"]');
    const content = "Estate cleanout services in Omaha. A1 Junk Removal clears out entire homes after a loved one passes, helping families during difficult transitions. Call (402) 612-2373.";
    if (metaDesc) { metaDesc.setAttribute("content", content); } else { const meta = document.createElement("meta"); meta.name = "description"; meta.content = content; document.head.appendChild(meta); }
  }, []);

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Service", "name": "Estate Cleanout Omaha", "description": "Estate cleanout services in Omaha, NE. Complete clearing of homes after a loved one passes, including furniture, personal belongings, and household items.", "provider": { "@type": "LocalBusiness", "name": BUSINESS_NAME, "telephone": PHONE, "url": "https://a1junkremovalandtreeserviceofomaha.com" }, "areaServed": [{ "@type": "City", "name": "Omaha", "addressRegion": "NE" }, { "@type": "City", "name": "Gretna", "addressRegion": "NE" }, { "@type": "City", "name": "Ralston", "addressRegion": "NE" }] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "How soon can you start an estate cleanout?", "acceptedAnswer": { "@type": "Answer", "text": "We can usually start within a day or two of your call. If you need more time to go through personal items first, we work on your timeline. There's no rush — we schedule around what works for the family." } }, { "@type": "Question", "name": "Will you be careful with personal items and keepsakes?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. We understand these are someone's belongings. If you want to walk through the home first and tag items to keep, we'll work around those. If we find photos, documents, or anything that looks personal or valuable during the cleanout, we set it aside for you." } }, { "@type": "Question", "name": "Can you handle a home that hasn't been cleaned out in decades?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We've cleared homes where the owner lived for 40+ years and never threw anything away. Packed rooms, full basements, garages stacked to the ceiling — we've seen it all and we handle it with care and efficiency." } }, { "@type": "Question", "name": "Do you donate usable items?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Furniture, clothing, and household items in good condition can be donated to local organizations. We sort as we go and set aside items that are suitable for donation rather than disposal." } }] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://a1junkremovalandtreeserviceofomaha.com/" }, { "@type": "ListItem", "position": 2, "name": "Junk Removal", "item": "https://a1junkremovalandtreeserviceofomaha.com/junk-removal" }, { "@type": "ListItem", "position": 3, "name": "Estate Cleanouts", "item": "https://a1junkremovalandtreeserviceofomaha.com/estate-cleanouts" }] }) }} />

      <div className="bg-gray-50 border-b border-gray-200"><div className="container py-3"><nav className="flex items-center gap-2 text-sm text-gray-500"><Link href="/" className="hover:text-[#0A1628]">Home</Link><span>/</span><Link href="/junk-removal" className="hover:text-[#0A1628]">Junk Removal</Link><span>/</span><span className="text-[#0A1628] font-medium">Estate Cleanouts</span></nav></div></div>

      <section className="relative py-16 lg:py-24 bg-[#0A1628] overflow-hidden">
        <div className="absolute inset-0 opacity-20"><img src={PLACEHOLDER_IMG} alt="" className="w-full h-full object-cover" /></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628] via-[#0A1628]/80 to-transparent" />
        <div className="container relative z-10"><div className="max-w-3xl">
          <div className="inline-block bg-[#E8611A]/20 text-[#E8611A] px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Cleanout Services</div>
          <h1 className="font-display text-4xl lg:text-6xl text-white font-bold mb-4 uppercase">Estate Cleanout Services in Omaha</h1>
          <p className="text-white/90 text-xl lg:text-2xl font-semibold mb-8">Compassionate, Thorough Clearing of a Loved One's Home</p>
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
        <p>Losing a family member is hard enough without having to figure out what to do with an entire house full of their belongings. The furniture, the clothes, the kitchen full of dishes, the garage packed with tools, the closets and drawers and cabinets — it all needs to be sorted, removed, and dealt with, usually on a timeline because the house needs to be sold or the lease is ending. <strong>A1 Junk Removal and Tree Service</strong> handles estate cleanouts across the Omaha metro. We work with families to clear the home respectfully and efficiently, so you can focus on what matters instead of logistics.</p>

        <p>We've helped families clear homes in Gretna where a parent lived for 40 years, emptied houses in Ralston for out-of-state families who couldn't be there to do it themselves, and handled estate cleanouts across Omaha for attorneys and estate executors managing the process. Every situation is different, and we treat each one with the care it deserves.</p>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">What an Estate Cleanout Involves</h2>

        <div className="space-y-4 not-prose">
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Furniture and Large Items</h3><p className="text-gray-600 mt-1">Beds, dressers, couches, dining sets, recliners, bookshelves, and all the large furniture throughout the home. We carry everything out regardless of weight or location.</p></div></div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Personal Belongings and Household Items</h3><p className="text-gray-600 mt-1">Clothing, kitchenware, linens, books, decorations, and the everyday items that fill a home. We sort through everything carefully and set aside anything the family wants to keep.</p></div></div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Garage, Basement, and Attic Contents</h3><p className="text-gray-600 mt-1">Tools, storage boxes, holiday decorations, old appliances, and decades of accumulated items from every storage space in the house.</p></div></div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Appliances and Outdoor Items</h3><p className="text-gray-600 mt-1">Refrigerators, washers, dryers, lawn mowers, patio furniture, grills, and other items inside and outside the home that need to be removed.</p></div></div>
        </div>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">We Work at the Family's Pace</h2>
        <p>Some families need the house cleared in a day because closing is next week. Others need a few weeks to go through things room by room, keeping what matters and calling us in stages to haul away the rest. We work either way. If you want to walk through the home first and tag everything you want to keep, we'll work around those items. If you want us to handle the entire process and just set aside anything that looks personal or valuable, we can do that too. We've worked with families who were there the whole time and families who handed us the keys and asked us to take care of it. Both approaches work fine.</p>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">Donation and Responsible Disposal</h2>
        <p>Not everything from an estate cleanout goes to the landfill. Furniture in good condition, clothing, kitchen items, and household goods can be donated to local organizations. We sort as we go and separate items that are suitable for donation. Metals go to recycling. Electronics go to e-waste facilities. We try to divert as much as possible from the landfill, both because it's the right thing to do and because many families feel better knowing that usable items are going to people who need them rather than a dump.</p>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6 not-prose">
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">How soon can you start an estate cleanout?</h3><p className="text-gray-600">We can usually start within a day or two of your call. If you need more time to go through personal items first, we work on your timeline. There's no rush — we schedule around what works for the family.</p></div>
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">Will you be careful with personal items and keepsakes?</h3><p className="text-gray-600">Absolutely. We understand these are someone's belongings. If you want to walk through the home first and tag items to keep, we'll work around those. If we find photos, documents, or anything that looks personal or valuable during the cleanout, we set it aside for you.</p></div>
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">Can you handle a home that hasn't been cleaned out in decades?</h3><p className="text-gray-600">Yes. We've cleared homes where the owner lived for 40+ years and never threw anything away. Packed rooms, full basements, garages stacked to the ceiling — we've seen it all and we handle it with care and efficiency.</p></div>
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">Do you donate usable items?</h3><p className="text-gray-600">Yes. Furniture, clothing, and household items in good condition can be donated to local organizations. We sort as we go and set aside items that are suitable for donation rather than disposal.</p></div>
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
          <h2 className="font-display text-3xl lg:text-5xl text-white font-bold mb-4">NEED HELP CLEARING A LOVED ONE'S HOME?</h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">Get a free estimate for estate cleanout services in Omaha. We handle the heavy lifting so you can focus on your family.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={PHONE_LINK} className="inline-flex items-center justify-center gap-2 bg-[#E8611A] text-white px-8 py-4 rounded font-bold text-lg transition-colors"><Phone className="w-5 h-5" /> CALL {PHONE}</a>
            <Link href="/free-estimate" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded font-bold text-lg hover:bg-white/10 transition-colors">REQUEST ONLINE ESTIMATE</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
