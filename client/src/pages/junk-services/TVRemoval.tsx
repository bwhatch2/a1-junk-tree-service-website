/*
  TELEVISION REMOVAL — Dedicated Service Page
  URL: /tv-removal
*/

import { useEffect } from "react";
import { Link } from "wouter";
import { PHONE, PHONE_LINK, BUSINESS_NAME, PLACEHOLDER_IMG, CTA_BG_IMG } from "@/lib/services-data";
import { Phone, ArrowRight, Clock, Star, Shield, DollarSign, CheckCircle, ChevronRight } from "lucide-react";

const relatedServices = [
  { slug: "e-waste-disposal", title: "E-Waste Disposal & Recycling" },
  { slug: "appliance-removal", title: "Appliance Removal" },
  { slug: "furniture-removal", title: "Furniture Removal" },
  { slug: "residential-junk-removal", title: "Residential Junk Removal" },
];

export default function TVRemoval() {
  useEffect(() => {
    document.title = "TV Removal Omaha | A1 Junk Removal and Tree Service";
    const metaDesc = document.querySelector('meta[name="description"]');
    const content = "TV removal and disposal in Omaha. A1 Junk Removal hauls away old TVs, CRT monitors, flat screens, and projection sets. Proper recycling. Call (402) 612-2373.";
    if (metaDesc) { metaDesc.setAttribute("content", content); } else { const meta = document.createElement("meta"); meta.name = "description"; meta.content = content; document.head.appendChild(meta); }
  }, []);

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Service", "name": "Television Removal Omaha", "description": "TV removal and disposal services in Omaha, NE. Hauling and recycling of CRT TVs, flat screens, projection TVs, and monitors.", "provider": { "@type": "LocalBusiness", "name": BUSINESS_NAME, "telephone": PHONE, "url": "https://a1junkremovalandtreeserviceofomaha.com" }, "areaServed": [{ "@type": "City", "name": "Omaha", "addressRegion": "NE" }, { "@type": "City", "name": "Bellevue", "addressRegion": "NE" }, { "@type": "City", "name": "Gretna", "addressRegion": "NE" }] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Can I put an old TV in the trash?", "acceptedAnswer": { "@type": "Answer", "text": "In most cases, no. TVs contain hazardous materials like lead, mercury, and cadmium that make them illegal to throw in regular trash in many areas. They need to go to an electronics recycling facility, which is where we take them." } }, { "@type": "Question", "name": "Do you remove TVs that are mounted on the wall?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We'll take the TV off the mount and remove the mounting bracket from the wall. We can patch the holes if you'd like, or just take the TV and bracket and leave the wall as-is." } }, { "@type": "Question", "name": "How much does it cost to have a TV removed?", "acceptedAnswer": { "@type": "Answer", "text": "A single TV pickup is one of our most affordable services. If you've got other items to go at the same time, we can bundle them together for a better overall price." } }, { "@type": "Question", "name": "Do you take old CRT TVs?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. CRT TVs are actually the ones we get called about most because they're heavy, bulky, and nobody wants to deal with them. We haul them out and take them to proper electronics recycling." } }] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://a1junkremovalandtreeserviceofomaha.com/" }, { "@type": "ListItem", "position": 2, "name": "Junk Removal", "item": "https://a1junkremovalandtreeserviceofomaha.com/junk-removal" }, { "@type": "ListItem", "position": 3, "name": "Television Removal", "item": "https://a1junkremovalandtreeserviceofomaha.com/tv-removal" }] }) }} />

      <div className="bg-gray-50 border-b border-gray-200"><div className="container py-3"><nav className="flex items-center gap-2 text-sm text-gray-500"><Link href="/" className="hover:text-[#0A1628]">Home</Link><span>/</span><Link href="/junk-removal" className="hover:text-[#0A1628]">Junk Removal</Link><span>/</span><span className="text-[#0A1628] font-medium">Television Removal</span></nav></div></div>

      <section className="relative py-16 lg:py-24 bg-[#0A1628] overflow-hidden">
        <div className="absolute inset-0 opacity-20"><img src={PLACEHOLDER_IMG} alt="" className="w-full h-full object-cover" /></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628] via-[#0A1628]/80 to-transparent" />
        <div className="container relative z-10"><div className="max-w-3xl">
          <div className="inline-block bg-[#E8611A]/20 text-[#E8611A] px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Item Removal</div>
          <h1 className="font-display text-4xl lg:text-6xl text-white font-bold mb-4 uppercase">Television Removal in Omaha</h1>
          <p className="text-white/90 text-xl lg:text-2xl font-semibold mb-8">Old TVs Hauled Away and Recycled the Right Way</p>
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
        <p>Old televisions are one of those things that end up sitting in a basement or garage for years because nobody knows what to do with them. You can't put them in the trash. Goodwill doesn't want your 2004 rear-projection TV. And that CRT from the '90s weighs 80 pounds and is full of lead. <strong>A1 Junk Removal and Tree Service</strong> handles TV removal across the Omaha metro — we pick up the set, haul it away, and make sure it gets to an electronics recycling facility where the hazardous materials are handled properly.</p>

        <p>We've carried old tube TVs out of basements in Bellevue, unbolted wall-mounted flat screens in Gretna, and loaded up entire entertainment centers — TV included — from living rooms across Omaha. Whether it's one TV or a stack of old monitors from an office upgrade, we take them all.</p>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">Types of TVs We Haul Away</h2>

        <div className="space-y-4 not-prose">
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">CRT Televisions</h3><p className="text-gray-600 mt-1">The big, heavy tube TVs from the '80s and '90s. These are the ones everybody has sitting in the basement because they're too heavy to move and too toxic to trash. We get them out.</p></div></div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Rear-Projection TVs</h3><p className="text-gray-600 mt-1">Those massive projection sets from the early 2000s that seemed like a great idea at the time. They're awkward, fragile, and take up half a room. We haul them out carefully.</p></div></div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Flat Screen and LED TVs</h3><p className="text-gray-600 mt-1">Broken, outdated, or replaced flat screens. We'll take them off the wall mount if needed and remove the bracket too.</p></div></div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Computer Monitors</h3><p className="text-gray-600 mt-1">Old CRT monitors, LCD screens, and broken displays. If you're upgrading your home office or clearing out a business, we take monitors along with the TVs.</p></div></div>
        </div>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">Why TVs Can't Go in the Trash</h2>
        <p>Televisions — especially older CRT models — contain hazardous materials that make them classified as electronic waste. A single CRT can contain four to eight pounds of lead in the glass alone, plus cadmium, mercury, and other heavy metals in the circuit boards. When these materials end up in a landfill, they leach into the soil and groundwater. That's why Nebraska and most states have regulations around TV disposal. When we pick up your old TV, it goes to a certified electronics recycling facility where the glass, metals, plastics, and circuit boards are separated and processed safely. If you've got <Link href="/e-waste-disposal" className="text-[#E8611A] font-semibold hover:underline">other electronics that need recycling</Link> — computers, printers, old stereo equipment — we can take everything in one trip.</p>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">Bundling TV Removal with Other Items</h2>
        <p>A single TV pickup is quick and affordable, but you'll get the best value if you've got other items to go at the same time. Most people who call about a TV also have a few other things they've been meaning to get rid of — an old entertainment center, a broken recliner, some boxes from the garage. We price based on the total volume in the truck, so adding a few more items to a TV pickup barely changes the cost. It's a good opportunity to knock out everything at once instead of calling us back next month for the <Link href="/furniture-removal" className="text-[#E8611A] font-semibold hover:underline">furniture you've been meaning to get rid of</Link>.</p>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6 not-prose">
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">Can I put an old TV in the trash?</h3><p className="text-gray-600">In most cases, no. TVs contain hazardous materials like lead, mercury, and cadmium that make them illegal to throw in regular trash in many areas. They need to go to an electronics recycling facility, which is where we take them.</p></div>
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">Do you remove TVs that are mounted on the wall?</h3><p className="text-gray-600">Yes. We'll take the TV off the mount and remove the mounting bracket from the wall. We can patch the holes if you'd like, or just take the TV and bracket and leave the wall as-is.</p></div>
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">How much does it cost to have a TV removed?</h3><p className="text-gray-600">A single TV pickup is one of our most affordable services. If you've got other items to go at the same time, we can bundle them together for a better overall price.</p></div>
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">Do you take old CRT TVs?</h3><p className="text-gray-600">Absolutely. CRT TVs are actually the ones we get called about most because they're heavy, bulky, and nobody wants to deal with them. We haul them out and take them to proper electronics recycling.</p></div>
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
          <h2 className="font-display text-3xl lg:text-5xl text-white font-bold mb-4">OLD TV TAKING UP SPACE?</h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">Get a free estimate for TV removal in Omaha. We pick it up, haul it out, and recycle it properly.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={PHONE_LINK} className="inline-flex items-center justify-center gap-2 bg-[#E8611A] text-white px-8 py-4 rounded font-bold text-lg transition-colors"><Phone className="w-5 h-5" /> CALL {PHONE}</a>
            <Link href="/free-estimate" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded font-bold text-lg hover:bg-white/10 transition-colors">REQUEST ONLINE ESTIMATE</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
