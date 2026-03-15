/*
  FENCE REMOVAL — Dedicated Service Page
  URL: /fence-removal
*/

import { useEffect } from "react";
import { Link } from "wouter";
import { PHONE, PHONE_LINK, BUSINESS_NAME, PLACEHOLDER_IMG, CTA_BG_IMG } from "@/lib/services-data";
import { Phone, ArrowRight, Clock, Star, Shield, DollarSign, CheckCircle, ChevronRight } from "lucide-react";

const relatedServices = [
  { slug: "deck-removal", title: "Deck Demolition & Removal" },
  { slug: "shed-removal", title: "Shed Demolition & Removal" },
  { slug: "concrete-removal", title: "Concrete Removal" },
  { slug: "light-demolition", title: "Light Demolition Services" },
];

export default function FenceRemoval() {
  useEffect(() => {
    document.title = "Fence Removal Omaha | A1 Junk Removal and Tree Service";
    const metaDesc = document.querySelector('meta[name="description"]');
    const content = "Fence removal in Omaha. A1 Junk Removal tears down and hauls away old wood, chain link, and vinyl fences including posts and concrete footings. Call (402) 612-2373.";
    if (metaDesc) { metaDesc.setAttribute("content", content); } else { const meta = document.createElement("meta"); meta.name = "description"; meta.content = content; document.head.appendChild(meta); }
  }, []);

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Service", "name": "Fence Removal Omaha", "description": "Fence removal services in Omaha, NE. Teardown and hauling of wood, chain link, vinyl, and metal fences including posts and concrete footings.", "provider": { "@type": "LocalBusiness", "name": BUSINESS_NAME, "telephone": PHONE, "url": "https://a1junkremovalandtreeserviceofomaha.com" }, "areaServed": [{ "@type": "City", "name": "Omaha", "addressRegion": "NE" }, { "@type": "City", "name": "Elkhorn", "addressRegion": "NE" }, { "@type": "City", "name": "Ralston", "addressRegion": "NE" }] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Do you remove the fence posts and concrete too?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We pull the posts and dig out the concrete footings. The holes get filled and the ground is leveled so your yard is ready for a new fence or just open space." } }, { "@type": "Question", "name": "How long does fence removal take?", "acceptedAnswer": { "@type": "Answer", "text": "A standard residential fence (100-200 linear feet) typically takes half a day. Larger properties or fences with deep concrete footings can take a full day. We'll give you a time estimate along with the price." } }, { "@type": "Question", "name": "Can you remove just part of a fence?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. If only one section is damaged or you want to open up part of the yard, we can remove specific sections and leave the rest standing. We'll cut clean lines at the transition points." } }, { "@type": "Question", "name": "What types of fences do you remove?", "acceptedAnswer": { "@type": "Answer", "text": "All types — wood privacy fences, chain link, vinyl/PVC, wrought iron, split rail, and metal panel fences. The material doesn't matter. If it's a fence and you want it gone, we'll take it down." } }] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://a1junkremovalandtreeserviceofomaha.com/" }, { "@type": "ListItem", "position": 2, "name": "Junk Removal", "item": "https://a1junkremovalandtreeserviceofomaha.com/junk-removal" }, { "@type": "ListItem", "position": 3, "name": "Fence Removal", "item": "https://a1junkremovalandtreeserviceofomaha.com/fence-removal" }] }) }} />

      <div className="bg-gray-50 border-b border-gray-200"><div className="container py-3"><nav className="flex items-center gap-2 text-sm text-gray-500"><Link href="/" className="hover:text-[#0A1628]">Home</Link><span>/</span><Link href="/junk-removal" className="hover:text-[#0A1628]">Junk Removal</Link><span>/</span><span className="text-[#0A1628] font-medium">Fence Removal</span></nav></div></div>

      <section className="relative py-16 lg:py-24 bg-[#0A1628] overflow-hidden">
        <div className="absolute inset-0 opacity-20"><img src={PLACEHOLDER_IMG} alt="" className="w-full h-full object-cover" /></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628] via-[#0A1628]/80 to-transparent" />
        <div className="container relative z-10"><div className="max-w-3xl">
          <div className="inline-block bg-[#E8611A]/20 text-[#E8611A] px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Demolition & Outdoor</div>
          <h1 className="font-display text-4xl lg:text-6xl text-white font-bold mb-4 uppercase">Fence Removal Services in Omaha</h1>
          <p className="text-white/90 text-xl lg:text-2xl font-semibold mb-8">Old Fences Torn Down, Posts Pulled, and Everything Hauled Away</p>
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
        <p>The fence is leaning, the boards are rotting, and half the pickets have blown off in the last windstorm. Or maybe the chain link fence from 1985 is an eyesore and you're finally replacing it. Either way, the old fence needs to come down before anything new goes up. <strong>A1 Junk Removal and Tree Service</strong> handles fence removal across the Omaha metro. We take down the panels, pull the posts, dig out the concrete footings, and haul everything away.</p>

        <p>We've torn down rotting privacy fences in Elkhorn, removed rusted chain link fencing in Ralston, and pulled out old split rail fences across West Omaha. Wood, metal, vinyl, chain link — the material doesn't change our approach. We take it all down, sort the materials for recycling, and leave your property line clean and ready for whatever comes next.</p>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">Types of Fences We Remove</h2>

        <div className="space-y-4 not-prose">
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Wood Privacy Fences</h3><p className="text-gray-600 mt-1">The most common fence in Omaha neighborhoods. Six-foot privacy fences with pressure-treated or cedar pickets, 4x4 posts, and 2x4 rails. We pull every board, rail, and post.</p></div></div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Chain Link Fences</h3><p className="text-gray-600 mt-1">Galvanized and vinyl-coated chain link with metal posts and top rails. We roll up the mesh, pull the posts, and remove the tension bars and hardware.</p></div></div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Vinyl and PVC Fences</h3><p className="text-gray-600 mt-1">White vinyl privacy fences and picket fences. The panels pop apart fairly easily, but the posts are still set in concrete and need to be dug out.</p></div></div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Wrought Iron and Metal Fences</h3><p className="text-gray-600 mt-1">Decorative iron fences, steel panel fences, and aluminum fencing. Metal fences are heavy but highly recyclable — the material goes straight to scrap recycling.</p></div></div>
        </div>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">Posts and Footings Come Out Too</h2>
        <p>Taking down the fence panels is the easy part. The real work is pulling the posts. Most fence posts in Omaha are set in concrete footings that go 2-3 feet deep. We dig around the footing, rock the post loose, and pull the whole thing — post and concrete — out of the ground. Then we fill the hole and tamp the soil level. If you're having a new fence installed, your fence company will appreciate starting with a clean slate instead of working around old post holes and buried concrete. If you also need an old <Link href="/deck-removal" className="text-[#E8611A] font-semibold hover:underline">deck</Link> or <Link href="/shed-removal" className="text-[#E8611A] font-semibold hover:underline">shed</Link> taken down, we can handle everything in the same visit.</p>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">Storm Damage Fence Removal</h2>
        <p>Omaha windstorms and ice storms knock down fences every year. When a section of your fence is on the ground or leaning into the neighbor's yard, you need it dealt with quickly. We can come out on short notice to remove storm-damaged fencing, clear the debris, and pull any broken posts. If the rest of the fence is still in good shape, we'll remove just the damaged sections and leave clean cut points for your fence company to tie into.</p>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6 not-prose">
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">Do you remove the fence posts and concrete too?</h3><p className="text-gray-600">Yes. We pull the posts and dig out the concrete footings. The holes get filled and the ground is leveled so your yard is ready for a new fence or just open space.</p></div>
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">How long does fence removal take?</h3><p className="text-gray-600">A standard residential fence (100-200 linear feet) typically takes half a day. Larger properties or fences with deep concrete footings can take a full day. We'll give you a time estimate along with the price.</p></div>
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">Can you remove just part of a fence?</h3><p className="text-gray-600">Yes. If only one section is damaged or you want to open up part of the yard, we can remove specific sections and leave the rest standing. We'll cut clean lines at the transition points.</p></div>
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">What types of fences do you remove?</h3><p className="text-gray-600">All types — wood privacy fences, chain link, vinyl/PVC, wrought iron, split rail, and metal panel fences. The material doesn't matter. If it's a fence and you want it gone, we'll take it down.</p></div>
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
          <h2 className="font-display text-3xl lg:text-5xl text-white font-bold mb-4">OLD FENCE NEEDS TO COME DOWN?</h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">Get a free estimate for fence removal in Omaha. We tear it down, pull the posts, and haul everything away.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={PHONE_LINK} className="inline-flex items-center justify-center gap-2 bg-[#E8611A] text-white px-8 py-4 rounded font-bold text-lg transition-colors"><Phone className="w-5 h-5" /> CALL {PHONE}</a>
            <Link href="/free-estimate" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded font-bold text-lg hover:bg-white/10 transition-colors">REQUEST ONLINE ESTIMATE</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
