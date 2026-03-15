/*
  YARD WASTE REMOVAL — Dedicated Service Page
  URL: /yard-waste-removal
*/

import { useEffect } from "react";
import { Link } from "wouter";
import { PHONE, PHONE_LINK, BUSINESS_NAME, PLACEHOLDER_IMG, CTA_BG_IMG } from "@/lib/services-data";
import { Phone, ArrowRight, Clock, Star, Shield, DollarSign, CheckCircle, ChevronRight } from "lucide-react";

const relatedServices = [
  { slug: "storm-debris-cleanup", title: "Storm Debris Cleanup" },
  { slug: "bulk-trash-pickup", title: "Bulk Trash Pickup" },
  { slug: "construction-debris", title: "Construction Debris Removal" },
  { slug: "residential-junk-removal", title: "Residential Junk Removal" },
];

export default function YardWasteRemoval() {
  useEffect(() => {
    document.title = "Yard Waste Removal Omaha | A1 Junk Removal and Tree Service";
    const metaDesc = document.querySelector('meta[name="description"]');
    const content = "Yard waste removal in Omaha. A1 Junk Removal hauls away branches, brush, leaves, grass clippings, and landscape debris. Locally owned. Call (402) 612-2373.";
    if (metaDesc) { metaDesc.setAttribute("content", content); } else { const meta = document.createElement("meta"); meta.name = "description"; meta.content = content; document.head.appendChild(meta); }
  }, []);

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Service", "name": "Yard Waste Removal Omaha", "description": "Yard waste removal services in Omaha, NE. Hauling of branches, brush, leaves, grass clippings, and landscape debris.", "provider": { "@type": "LocalBusiness", "name": BUSINESS_NAME, "telephone": PHONE, "url": "https://a1junkremovalandtreeserviceofomaha.com" }, "areaServed": [{ "@type": "City", "name": "Omaha", "addressRegion": "NE" }, { "@type": "City", "name": "Papillion", "addressRegion": "NE" }, { "@type": "City", "name": "Millard", "addressRegion": "NE" }] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "What counts as yard waste?", "acceptedAnswer": { "@type": "Answer", "text": "Branches, brush, leaves, grass clippings, weeds, garden debris, old mulch, landscape timbers, and small stumps. Basically anything organic that came from your yard. We also take non-organic yard items like old edging, broken pots, and landscape fabric." } }, { "@type": "Question", "name": "Can you haul away a large brush pile?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. We handle brush piles of all sizes, from a small stack of trimmings to a massive pile from a full property clearing. We load it by hand or with equipment depending on the size." } }, { "@type": "Question", "name": "Do you offer regular yard waste pickup?", "acceptedAnswer": { "@type": "Answer", "text": "We primarily work on a per-job basis, but if you need regular pickups — say after weekly lawn maintenance — we can set up a recurring schedule that works for you." } }, { "@type": "Question", "name": "Is yard waste removal cheaper than renting a dumpster?", "acceptedAnswer": { "@type": "Answer", "text": "For most residential jobs, yes. A dumpster rental comes with delivery fees, daily rental charges, and weight limits. With us, you get a flat price that includes all the labor, loading, and hauling." } }] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://a1junkremovalandtreeserviceofomaha.com/" }, { "@type": "ListItem", "position": 2, "name": "Junk Removal", "item": "https://a1junkremovalandtreeserviceofomaha.com/junk-removal" }, { "@type": "ListItem", "position": 3, "name": "Yard Waste Removal", "item": "https://a1junkremovalandtreeserviceofomaha.com/yard-waste-removal" }] }) }} />

      <div className="bg-gray-50 border-b border-gray-200"><div className="container py-3"><nav className="flex items-center gap-2 text-sm text-gray-500"><Link href="/" className="hover:text-[#0A1628]">Home</Link><span>/</span><Link href="/junk-removal" className="hover:text-[#0A1628]">Junk Removal</Link><span>/</span><span className="text-[#0A1628] font-medium">Yard Waste Removal</span></nav></div></div>

      <section className="relative py-16 lg:py-24 bg-[#0A1628] overflow-hidden">
        <div className="absolute inset-0 opacity-20"><img src={PLACEHOLDER_IMG} alt="" className="w-full h-full object-cover" /></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628] via-[#0A1628]/80 to-transparent" />
        <div className="container relative z-10"><div className="max-w-3xl">
          <div className="inline-block bg-[#E8611A]/20 text-[#E8611A] px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Yard & Materials</div>
          <h1 className="font-display text-4xl lg:text-6xl text-white font-bold mb-4 uppercase">Yard Waste Removal in Omaha</h1>
          <p className="text-white/90 text-xl lg:text-2xl font-semibold mb-8">Branches, Brush, Leaves, and Landscape Debris — Gone</p>
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
        <p>You spent the weekend trimming trees, pulling weeds, and cutting back overgrown bushes. Now there's a pile of branches and bags of yard waste sitting in the driveway and the city won't pick it up until next month — if they pick it up at all. <strong>A1 Junk Removal and Tree Service</strong> handles yard waste removal across the Omaha metro. We load up the branches, the brush, the bags of leaves, and everything else your yard project generated, and we haul it all away the same day.</p>

        <p>We work in neighborhoods across Papillion, Millard, and the greater Omaha area every week. Yard waste is one of our most common calls, especially in spring and fall when everybody's doing cleanup at the same time and the city's yard waste program is backed up for weeks. Instead of waiting or making ten trips to the dump in your pickup, one call to us and it's handled.</p>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">Yard Waste We Haul Away</h2>

        <div className="space-y-4 not-prose">
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Branches and Brush</h3><p className="text-gray-600 mt-1">Tree limbs, hedge trimmings, shrub clippings, and brush piles of any size. We load it all by hand and haul it to a composting or green waste facility.</p></div></div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Leaves and Grass Clippings</h3><p className="text-gray-600 mt-1">Bagged or loose, we take it all. Fall leaf cleanup generates mountains of waste — we'll clear the bags from your curb or rake and load from the yard directly.</p></div></div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Old Mulch and Soil</h3><p className="text-gray-600 mt-1">Spent mulch from garden beds, dirt from landscaping projects, and sod you've pulled up. We haul the heavy stuff so you don't have to.</p></div></div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Landscape Materials</h3><p className="text-gray-600 mt-1">Old edging, landscape timbers, broken pavers, rotted railroad ties, and landscape fabric. The non-organic stuff that accumulates during yard renovations.</p></div></div>
        </div>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">When the City Program Isn't Enough</h2>
        <p>Omaha's yard waste collection has limits — specific bag counts, branch length restrictions, and seasonal schedules that don't always line up with when you actually do the work. If you've done a major cleanup, a tree trimming project, or a full landscape renovation, you're going to generate more waste than the city program can handle in one pickup. That's where we come in. We don't have bag limits or branch length rules. If it fits on the truck, it goes. And if it doesn't fit in one load, we'll make a second trip. For jobs that also involve <Link href="/storm-debris-cleanup" className="text-[#E8611A] font-semibold hover:underline">storm debris</Link>, we can handle the whole thing at once.</p>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">Partnering with Landscapers and Contractors</h2>
        <p>We work with landscaping crews and contractors across the metro who need yard waste hauled away after a job. If you're a landscaper who doesn't want to make dump runs, or a contractor who just finished a grading project and has a pile of sod and dirt to get rid of, give us a call. We can show up at the end of your job, load everything, and be gone before your client gets home. It's a clean handoff that saves you time and keeps your crew focused on the next job instead of sitting in line at the transfer station.</p>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6 not-prose">
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">What counts as yard waste?</h3><p className="text-gray-600">Branches, brush, leaves, grass clippings, weeds, garden debris, old mulch, landscape timbers, and small stumps. Basically anything organic that came from your yard. We also take non-organic yard items like old edging, broken pots, and landscape fabric.</p></div>
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">Can you haul away a large brush pile?</h3><p className="text-gray-600">Absolutely. We handle brush piles of all sizes, from a small stack of trimmings to a massive pile from a full property clearing. We load it by hand or with equipment depending on the size.</p></div>
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">Do you offer regular yard waste pickup?</h3><p className="text-gray-600">We primarily work on a per-job basis, but if you need regular pickups — say after weekly lawn maintenance — we can set up a recurring schedule that works for you.</p></div>
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">Is yard waste removal cheaper than renting a dumpster?</h3><p className="text-gray-600">For most residential jobs, yes. A dumpster rental comes with delivery fees, daily rental charges, and weight limits. With us, you get a flat price that includes all the labor, loading, and hauling.</p></div>
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
          <h2 className="font-display text-3xl lg:text-5xl text-white font-bold mb-4">YARD WASTE PILING UP?</h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">Get a free estimate for yard waste removal in Omaha. We load it, haul it, and your yard is clean again.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={PHONE_LINK} className="inline-flex items-center justify-center gap-2 bg-[#E8611A] text-white px-8 py-4 rounded font-bold text-lg transition-colors"><Phone className="w-5 h-5" /> CALL {PHONE}</a>
            <Link href="/free-estimate" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded font-bold text-lg hover:bg-white/10 transition-colors">REQUEST ONLINE ESTIMATE</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
