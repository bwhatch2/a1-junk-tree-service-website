/*
  STORAGE UNIT CLEANOUT — Dedicated Service Page
  URL: /storage-unit-cleanout
*/

import { useEffect } from "react";
import { Link } from "wouter";
import { PHONE, PHONE_LINK, BUSINESS_NAME, PLACEHOLDER_IMG, CTA_BG_IMG } from "@/lib/services-data";
import { Phone, ArrowRight, Clock, Star, Shield, DollarSign, CheckCircle, ChevronRight } from "lucide-react";

const relatedServices = [
  { slug: "garage-cleanout", title: "Garage Cleanout" },
  { slug: "property-cleanouts", title: "Property Cleanout Services" },
  { slug: "estate-cleanouts", title: "Estate Cleanout Services" },
  { slug: "residential-junk-removal", title: "Residential Junk Removal" },
];

export default function StorageUnitCleanout() {
  useEffect(() => {
    document.title = "Storage Unit Cleanout Omaha | A1 Junk Removal and Tree Service";
    const metaDesc = document.querySelector('meta[name="description"]');
    const content = "Storage unit cleanout in Omaha. A1 Junk Removal empties your storage unit fast — furniture, boxes, and everything inside. Locally owned, 40-60% less. Call (402) 612-2373.";
    if (metaDesc) { metaDesc.setAttribute("content", content); } else { const meta = document.createElement("meta"); meta.name = "description"; meta.content = content; document.head.appendChild(meta); }
  }, []);

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Service", "name": "Storage Unit Cleanout Omaha", "description": "Storage unit cleanout services in Omaha, NE. Complete emptying and hauling of storage unit contents.", "provider": { "@type": "LocalBusiness", "name": BUSINESS_NAME, "telephone": PHONE, "url": "https://a1junkremovalandtreeserviceofomaha.com" }, "areaServed": [{ "@type": "City", "name": "Omaha", "addressRegion": "NE" }, { "@type": "City", "name": "La Vista", "addressRegion": "NE" }, { "@type": "City", "name": "Bellevue", "addressRegion": "NE" }] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Do I need to be at the storage unit when you clean it out?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, you'll need to be there to unlock the unit and let us know if there's anything you want to keep. Once you've pointed out what stays and what goes, you can leave and we'll handle the rest." } }, { "@type": "Question", "name": "Can you clean out a unit that's completely packed?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. We've emptied units that were stacked floor to ceiling with no room to walk in. We work through it systematically, pulling everything out and sorting as we go." } }, { "@type": "Question", "name": "How long does a storage unit cleanout take?", "acceptedAnswer": { "@type": "Answer", "text": "A standard 10x10 unit usually takes about an hour. Larger units or ones that are packed tight can take two to three hours. We'll give you a time estimate before we start." } }, { "@type": "Question", "name": "Will you donate usable items from my storage unit?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. If there are items in good condition — furniture, household goods, clothing — we'll separate them for donation to local organizations instead of sending everything to the landfill." } }] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://a1junkremovalandtreeserviceofomaha.com/" }, { "@type": "ListItem", "position": 2, "name": "Junk Removal", "item": "https://a1junkremovalandtreeserviceofomaha.com/junk-removal" }, { "@type": "ListItem", "position": 3, "name": "Storage Unit Cleanout", "item": "https://a1junkremovalandtreeserviceofomaha.com/storage-unit-cleanout" }] }) }} />

      <div className="bg-gray-50 border-b border-gray-200"><div className="container py-3"><nav className="flex items-center gap-2 text-sm text-gray-500"><Link href="/" className="hover:text-[#0A1628]">Home</Link><span>/</span><Link href="/junk-removal" className="hover:text-[#0A1628]">Junk Removal</Link><span>/</span><span className="text-[#0A1628] font-medium">Storage Unit Cleanout</span></nav></div></div>

      <section className="relative py-16 lg:py-24 bg-[#0A1628] overflow-hidden">
        <div className="absolute inset-0 opacity-20"><img src={PLACEHOLDER_IMG} alt="" className="w-full h-full object-cover" /></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628] via-[#0A1628]/80 to-transparent" />
        <div className="container relative z-10"><div className="max-w-3xl">
          <div className="inline-block bg-[#E8611A]/20 text-[#E8611A] px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Cleanout Services</div>
          <h1 className="font-display text-4xl lg:text-6xl text-white font-bold mb-4 uppercase">Storage Unit Cleanout in Omaha</h1>
          <p className="text-white/90 text-xl lg:text-2xl font-semibold mb-8">Stop Paying Rent on Stuff You Don't Need</p>
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
        <p>That storage unit was supposed to be temporary. A few months while you figured out what to do with everything after the move, the divorce, the estate. Now it's been two years and you're paying $150 a month to store stuff you haven't looked at since you locked the door. <strong>A1 Junk Removal and Tree Service</strong> cleans out storage units across the Omaha metro so you can stop throwing money at a padlock and get on with your life.</p>

        <p>We work at storage facilities all over La Vista, Bellevue, and the greater Omaha area. Our crew meets you at the unit, you tell us what stays and what goes, and we empty the thing out. Furniture, boxes, old electronics, holiday decorations, bags of clothes — whatever's in there, we load it up and haul it away. Most units take an hour or two, and then you're done. No more monthly bill, no more guilt every time you drive past the place.</p>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">What's Typically Inside a Storage Unit</h2>

        <div className="space-y-4 not-prose">
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Furniture That Didn't Fit</h3><p className="text-gray-600 mt-1">Couches, dining tables, bed frames, dressers — the stuff that was "too good to throw away" but never made it into the new place. We haul it all.</p></div></div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Boxes of Personal Items</h3><p className="text-gray-600 mt-1">Clothes, books, kitchenware, photo albums, kids' toys. We'll give you time to pull out anything you want to keep before we start loading.</p></div></div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Appliances and Electronics</h3><p className="text-gray-600 mt-1">Old TVs, microwaves, space heaters, printers. Electronics get taken to proper recycling — we don't just dump them.</p></div></div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Seasonal and Miscellaneous Items</h3><p className="text-gray-600 mt-1">Christmas trees, camping gear, sports equipment, tools. The random stuff that accumulates when you keep telling yourself you'll sort through it later.</p></div></div>
        </div>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">The Math on Keeping a Storage Unit</h2>
        <p>At $100-200 a month, a storage unit costs you $1,200 to $2,400 a year. After two or three years, you've spent more on rent than the contents are worth. Most people know this but keep putting off the cleanout because they don't want to deal with it. That's where we come in. One phone call, one appointment, and the unit is empty. The money you save in the first two months of cancelled rent usually covers what we charge to clean it out. If you're also dealing with a <Link href="/garage-cleanout" className="text-[#E8611A] font-semibold hover:underline">garage that needs clearing</Link>, we can handle both in the same day.</p>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">Handling Estate and Inherited Units</h2>
        <p>A lot of our storage unit cleanouts come from families dealing with a loved one's belongings. Someone passes away and the family discovers they've been paying for a unit nobody knew about, or the family knows about it but nobody has the time or energy to go through it. We handle these jobs with care. We'll go through the unit with you — or on your behalf if you're out of state — and separate anything that looks valuable or personal before hauling the rest. If the estate also involves a <Link href="/house-cleanout-services" className="text-[#E8611A] font-semibold hover:underline">full house cleanout</Link>, we can coordinate both jobs together.</p>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6 not-prose">
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">Do I need to be at the storage unit when you clean it out?</h3><p className="text-gray-600">Yes, you'll need to be there to unlock the unit and let us know if there's anything you want to keep. Once you've pointed out what stays and what goes, you can leave and we'll handle the rest.</p></div>
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">Can you clean out a unit that's completely packed?</h3><p className="text-gray-600">Absolutely. We've emptied units that were stacked floor to ceiling with no room to walk in. We work through it systematically, pulling everything out and sorting as we go.</p></div>
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">How long does a storage unit cleanout take?</h3><p className="text-gray-600">A standard 10x10 unit usually takes about an hour. Larger units or ones that are packed tight can take two to three hours. We'll give you a time estimate before we start.</p></div>
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">Will you donate usable items from my storage unit?</h3><p className="text-gray-600">Yes. If there are items in good condition — furniture, household goods, clothing — we'll separate them for donation to local organizations instead of sending everything to the landfill.</p></div>
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
          <h2 className="font-display text-3xl lg:text-5xl text-white font-bold mb-4">DONE PAYING FOR STORAGE?</h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">Get a free estimate for storage unit cleanout in Omaha. We empty the unit, haul everything away, and save you months of rent.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={PHONE_LINK} className="inline-flex items-center justify-center gap-2 bg-[#E8611A] text-white px-8 py-4 rounded font-bold text-lg transition-colors"><Phone className="w-5 h-5" /> CALL {PHONE}</a>
            <Link href="/free-estimate" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded font-bold text-lg hover:bg-white/10 transition-colors">REQUEST ONLINE ESTIMATE</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
