/*
  EXERCISE EQUIPMENT REMOVAL — Dedicated Service Page
  URL: /exercise-equipment-removal
*/

import { useEffect } from "react";
import { Link } from "wouter";
import { PHONE, PHONE_LINK, BUSINESS_NAME, PLACEHOLDER_IMG, CTA_BG_IMG } from "@/lib/services-data";
import { Phone, ArrowRight, Clock, Star, Shield, DollarSign, CheckCircle, ChevronRight } from "lucide-react";

const relatedServices = [
  { slug: "basement-cleanout", title: "Basement Cleanout" },
  { slug: "hot-tub-removal", title: "Hot Tub Removal" },
  { slug: "residential-junk-removal", title: "Residential Junk Removal" },
  { slug: "scrap-metal-removal", title: "Scrap Metal Removal" },
];

export default function ExerciseEquipmentRemoval() {
  useEffect(() => {
    document.title = "Exercise Equipment Removal Omaha | A1 Junk Removal and Tree Service";
    const metaDesc = document.querySelector('meta[name="description"]');
    const content = "Exercise equipment removal in Omaha. A1 Junk Removal picks up treadmills, ellipticals, weight machines, and home gym equipment from any room. Call (402) 612-2373.";
    if (metaDesc) { metaDesc.setAttribute("content", content); } else { const meta = document.createElement("meta"); meta.name = "description"; meta.content = content; document.head.appendChild(meta); }
  }, []);

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Service", "name": "Exercise Equipment Removal Omaha", "description": "Exercise equipment removal in Omaha, NE. Pickup and hauling of treadmills, ellipticals, weight machines, stationary bikes, and home gym equipment.", "provider": { "@type": "LocalBusiness", "name": BUSINESS_NAME, "telephone": PHONE, "url": "https://a1junkremovalandtreeserviceofomaha.com" }, "areaServed": [{ "@type": "City", "name": "Omaha", "addressRegion": "NE" }, { "@type": "City", "name": "Bennington", "addressRegion": "NE" }, { "@type": "City", "name": "Papillion", "addressRegion": "NE" }] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Can you get a treadmill out of my basement?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Basement treadmill removal is one of our most common calls. We tilt the treadmill, carry it up the stairs, and load it on the truck. If it won't fit through the stairwell, we can partially disassemble it to get it out." } }, { "@type": "Question", "name": "Do you disassemble home gym equipment?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Multi-station home gyms, squat racks, and cable machines often need to be partially taken apart to get through doorways. We bring the tools and handle the disassembly as part of the removal." } }, { "@type": "Question", "name": "How heavy is too heavy?", "acceptedAnswer": { "@type": "Answer", "text": "Nothing is too heavy for our crew. Commercial-grade treadmills can weigh 300-400 pounds, multi-station gyms can be 500+, and we've moved them all. We use dollies, straps, and teamwork to handle the weight safely." } }, { "@type": "Question", "name": "What do you do with old exercise equipment?", "acceptedAnswer": { "@type": "Answer", "text": "Equipment in working condition can be donated. Broken equipment gets recycled — the steel frames go to scrap metal recycling and the motors and electronics are handled separately. We divert as much as possible from the landfill." } }] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://a1junkremovalandtreeserviceofomaha.com/" }, { "@type": "ListItem", "position": 2, "name": "Junk Removal", "item": "https://a1junkremovalandtreeserviceofomaha.com/junk-removal" }, { "@type": "ListItem", "position": 3, "name": "Exercise Equipment Removal", "item": "https://a1junkremovalandtreeserviceofomaha.com/exercise-equipment-removal" }] }) }} />

      <div className="bg-gray-50 border-b border-gray-200"><div className="container py-3"><nav className="flex items-center gap-2 text-sm text-gray-500"><Link href="/" className="hover:text-[#0A1628]">Home</Link><span>/</span><Link href="/junk-removal" className="hover:text-[#0A1628]">Junk Removal</Link><span>/</span><span className="text-[#0A1628] font-medium">Exercise Equipment Removal</span></nav></div></div>

      <section className="relative py-16 lg:py-24 bg-[#0A1628] overflow-hidden">
        <div className="absolute inset-0 opacity-20"><img src={PLACEHOLDER_IMG} alt="" className="w-full h-full object-cover" /></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628] via-[#0A1628]/80 to-transparent" />
        <div className="container relative z-10"><div className="max-w-3xl">
          <div className="inline-block bg-[#E8611A]/20 text-[#E8611A] px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Item Removal</div>
          <h1 className="font-display text-4xl lg:text-6xl text-white font-bold mb-4 uppercase">Exercise Equipment Removal in Omaha</h1>
          <p className="text-white/90 text-xl lg:text-2xl font-semibold mb-8">Treadmills, Ellipticals, and Home Gyms Hauled Away</p>
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
        <p>January's resolution lasted until February, and now there's a 300-pound treadmill in the basement that hasn't been used since. Or maybe the home gym that seemed like a great idea five years ago has turned into the world's most expensive coat rack. Either way, exercise equipment is heavy, awkward, and nearly impossible to get rid of on your own. <strong>A1 Junk Removal and Tree Service</strong> handles exercise equipment removal across the Omaha metro. We come to wherever the equipment is — basement, spare bedroom, garage — and haul it out.</p>

        <p>We've carried treadmills up narrow basement stairs in Bennington, disassembled multi-station home gyms in Papillion, and hauled away everything from rowing machines to full squat rack setups across Omaha. The equipment is always heavier than people expect, and it's always in the most inconvenient spot in the house. That's fine — we deal with it every day.</p>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">Equipment We Remove</h2>

        <div className="space-y-4 not-prose">
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Treadmills and Ellipticals</h3><p className="text-gray-600 mt-1">The most common call we get. Motorized treadmills weigh 200-350 pounds and always seem to end up in the basement. Ellipticals are lighter but just as awkward to move through doorways.</p></div></div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Multi-Station Home Gyms</h3><p className="text-gray-600 mt-1">Bowflex, Total Gym, Weider, and similar all-in-one machines. These usually need to be partially disassembled to fit through doorways. We bring the tools.</p></div></div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Free Weights and Weight Benches</h3><p className="text-gray-600 mt-1">Dumbbells, barbells, weight plates, squat racks, power cages, and weight benches. Iron is heavy — a full set of plates can weigh hundreds of pounds. We load it all.</p></div></div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Stationary Bikes and Rowing Machines</h3><p className="text-gray-600 mt-1">Spin bikes, recumbent bikes, Pelotons, and rowing machines. Lighter than treadmills but still too heavy and bulky for most people to deal with alone.</p></div></div>
        </div>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">The Basement Problem</h2>
        <p>Here's how it usually goes: the treadmill got delivered, the delivery guys carried it downstairs, and it's been there ever since. Now it's broken or unused and you need it gone — but it weighs 300 pounds and the basement stairs have a turn at the bottom. This is one of our most common jobs. We use furniture straps, appliance dollies, and careful coordination to get heavy equipment up narrow basement stairs without damaging your walls or railings. If a piece truly won't fit through the stairwell assembled, we disassemble it in the basement and carry it out in pieces. Either way, it's leaving your house. If the <Link href="/basement-cleanout" className="text-[#E8611A] font-semibold hover:underline">basement</Link> has other stuff that needs to go while we're there, we'll take that too.</p>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">Recycling and Donation</h2>
        <p>Exercise equipment that still works can be donated. Equipment that's broken gets recycled — the steel frames go to scrap metal, the motors and electronics are handled separately, and the plastic components go to appropriate recycling. A lot of exercise equipment is mostly steel, which makes it highly recyclable. We sort everything and make sure as little as possible ends up in the landfill.</p>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6 not-prose">
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">Can you get a treadmill out of my basement?</h3><p className="text-gray-600">Yes. Basement treadmill removal is one of our most common calls. We tilt the treadmill, carry it up the stairs, and load it on the truck. If it won't fit through the stairwell, we can partially disassemble it to get it out.</p></div>
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">Do you disassemble home gym equipment?</h3><p className="text-gray-600">Yes. Multi-station home gyms, squat racks, and cable machines often need to be partially taken apart to get through doorways. We bring the tools and handle the disassembly as part of the removal.</p></div>
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">How heavy is too heavy?</h3><p className="text-gray-600">Nothing is too heavy for our crew. Commercial-grade treadmills can weigh 300-400 pounds, multi-station gyms can be 500+, and we've moved them all. We use dollies, straps, and teamwork to handle the weight safely.</p></div>
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">What do you do with old exercise equipment?</h3><p className="text-gray-600">Equipment in working condition can be donated. Broken equipment gets recycled — the steel frames go to scrap metal recycling and the motors and electronics are handled separately. We divert as much as possible from the landfill.</p></div>
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
          <h2 className="font-display text-3xl lg:text-5xl text-white font-bold mb-4">HOME GYM COLLECTING DUST?</h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">Get a free estimate for exercise equipment removal in Omaha. We carry it out and haul it away — no matter how heavy.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={PHONE_LINK} className="inline-flex items-center justify-center gap-2 bg-[#E8611A] text-white px-8 py-4 rounded font-bold text-lg transition-colors"><Phone className="w-5 h-5" /> CALL {PHONE}</a>
            <Link href="/free-estimate" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded font-bold text-lg hover:bg-white/10 transition-colors">REQUEST ONLINE ESTIMATE</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
