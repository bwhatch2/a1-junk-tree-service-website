/*
  PIANO REMOVAL — Dedicated Service Page
  URL: /piano-removal
*/

import { useEffect } from "react";
import { Link } from "wouter";
import { PHONE, PHONE_LINK, BUSINESS_NAME, PLACEHOLDER_IMG, CTA_BG_IMG } from "@/lib/services-data";
import { Phone, ArrowRight, Clock, Star, Shield, DollarSign, CheckCircle, ChevronRight } from "lucide-react";

const relatedServices = [
  { slug: "furniture-removal", title: "Furniture Removal" },
  { slug: "exercise-equipment-removal", title: "Exercise Equipment Removal" },
  { slug: "appliance-removal", title: "Appliance Removal" },
  { slug: "residential-junk-removal", title: "Residential Junk Removal" },
];

export default function PianoRemoval() {
  useEffect(() => {
    document.title = "Piano Removal Omaha | A1 Junk Removal and Tree Service";
    const metaDesc = document.querySelector('meta[name="description"]');
    const content = "Professional piano removal in Omaha. A1 Junk Removal safely moves and hauls away upright pianos, baby grands, and organs. Locally owned, insured. Call (402) 612-2373.";
    if (metaDesc) { metaDesc.setAttribute("content", content); } else { const meta = document.createElement("meta"); meta.name = "description"; meta.content = content; document.head.appendChild(meta); }
  }, []);

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Service", "name": "Piano Removal Omaha", "description": "Professional piano removal and disposal services in Omaha, NE. Safe hauling for upright pianos, baby grands, spinets, and organs.", "provider": { "@type": "LocalBusiness", "name": BUSINESS_NAME, "telephone": PHONE, "url": "https://a1junkremovalandtreeserviceofomaha.com" }, "areaServed": [{ "@type": "City", "name": "Omaha", "addressRegion": "NE" }, { "@type": "City", "name": "Bellevue", "addressRegion": "NE" }, { "@type": "City", "name": "Papillion", "addressRegion": "NE" }] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "How heavy is a typical piano?", "acceptedAnswer": { "@type": "Answer", "text": "An upright piano usually weighs between 300 and 500 pounds. A baby grand can weigh 500 to 600 pounds or more. Either way, our crew has the equipment and experience to handle it safely." } }, { "@type": "Question", "name": "Can you remove a piano from a second floor or basement?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We've moved pianos down narrow staircases, through tight doorways, and up from basements across Omaha. We assess the path beforehand so there are no surprises on moving day." } }, { "@type": "Question", "name": "What happens to the piano after you take it?", "acceptedAnswer": { "@type": "Answer", "text": "If the piano is still in playable condition, we'll work to donate it to a local school, church, or community organization. If it's beyond repair, we break it down and recycle the metal hardware, strings, and frame." } }, { "@type": "Question", "name": "Do I need to do anything to prepare the piano before you arrive?", "acceptedAnswer": { "@type": "Answer", "text": "Just clear a path from the piano to the nearest exit. We handle everything else, including protecting your floors and doorframes during the move." } }] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://a1junkremovalandtreeserviceofomaha.com/" }, { "@type": "ListItem", "position": 2, "name": "Junk Removal", "item": "https://a1junkremovalandtreeserviceofomaha.com/junk-removal" }, { "@type": "ListItem", "position": 3, "name": "Piano Removal", "item": "https://a1junkremovalandtreeserviceofomaha.com/piano-removal" }] }) }} />

      <div className="bg-gray-50 border-b border-gray-200"><div className="container py-3"><nav className="flex items-center gap-2 text-sm text-gray-500"><Link href="/" className="hover:text-[#0A1628]">Home</Link><span>/</span><Link href="/junk-removal" className="hover:text-[#0A1628]">Junk Removal</Link><span>/</span><span className="text-[#0A1628] font-medium">Piano Removal</span></nav></div></div>

      <section className="relative py-16 lg:py-24 bg-[#0A1628] overflow-hidden">
        <div className="absolute inset-0 opacity-20"><img src={PLACEHOLDER_IMG} alt="" className="w-full h-full object-cover" /></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628] via-[#0A1628]/80 to-transparent" />
        <div className="container relative z-10"><div className="max-w-3xl">
          <div className="inline-block bg-[#E8611A]/20 text-[#E8611A] px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Specialty Item Removal</div>
          <h1 className="font-display text-4xl lg:text-6xl text-white font-bold mb-4 uppercase">Piano Removal in Omaha</h1>
          <p className="text-white/90 text-xl lg:text-2xl font-semibold mb-8">Safe, Insured Hauling for Uprights, Baby Grands, and Organs</p>
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
        <p>Nobody wants to deal with moving a piano. They're awkward, incredibly heavy, and one wrong move can put a hole in your wall or send someone to the ER. <strong>A1 Junk Removal and Tree Service</strong> handles piano removal across the Omaha metro so you don't have to round up six friends and a prayer. Whether it's grandma's old upright that hasn't been tuned since the '90s or a baby grand that's been sitting in the corner collecting dust, our crew knows how to get it out of your house without tearing the place apart.</p>

        <p>We've hauled pianos out of living rooms in Bellevue, up from basements in Papillion, and through narrow hallways in Midtown Omaha. Every job is different, and that's why we do a walkthrough before we start — we figure out the best path, protect your floors and doorframes, and move the instrument out safely. This isn't something you want to hand off to a couple guys with a pickup truck. Pianos have cast iron frames, hundreds of pounds of tension in the strings, and they shift weight in ways that catch people off guard.</p>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">What We Handle</h2>

        <div className="space-y-4 not-prose">
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Upright and Spinet Pianos</h3><p className="text-gray-600 mt-1">The most common type we remove. Usually 300-500 pounds, often wedged into a corner or against a wall. We get them out clean.</p></div></div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Baby Grand and Grand Pianos</h3><p className="text-gray-600 mt-1">These require careful disassembly of the legs and lid before they can be moved. Our crew knows the process and has the right equipment.</p></div></div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Organs and Electric Keyboards</h3><p className="text-gray-600 mt-1">Old church organs and heavy electronic keyboards with built-in stands. We disconnect, disassemble, and haul them out.</p></div></div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"><CheckCircle className="w-6 h-6 text-[#E8611A] flex-shrink-0 mt-0.5" /><div><h3 className="font-bold text-[#0A1628] text-lg">Piano Benches and Accessories</h3><p className="text-gray-600 mt-1">We take the bench, the music stand, the sheet music cabinet — everything that goes with it, in one trip.</p></div></div>
        </div>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">Why Pianos Are Not a DIY Job</h2>
        <p>A standard upright piano has a cast iron plate inside that accounts for most of its weight. That weight isn't evenly distributed — the back is significantly heavier than the front. When you try to tip it onto a dolly without knowing that, things go sideways fast. We've seen the aftermath: gouged hardwood floors, cracked door frames, and strained backs. Our crew uses piano boards, heavy-duty straps, and proper technique to keep your home and your body intact. We're fully insured, so if something does happen, you're covered — which is more than you can say for the buddy-with-a-truck approach.</p>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">Donation and Responsible Disposal</h2>
        <p>Not every old piano is destined for the landfill. If yours is still in playable condition, we'll work to get it donated to a local school, church, or community center in the Omaha area. A lot of organizations need instruments but can't afford the delivery. If the piano is past its prime — cracked soundboard, rusted strings, broken hammers — we break it down and recycle the metal frame, hardware, and strings. The wood gets disposed of properly. Either way, we make sure it's handled the right way. If you've also got other <Link href="/furniture-removal" className="text-[#E8611A] font-semibold hover:underline">heavy furniture that needs to go</Link>, we can knock it all out in the same visit.</p>

        <h2 className="font-display text-2xl lg:text-3xl text-[#0A1628] font-bold mt-12 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6 not-prose">
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">How heavy is a typical piano?</h3><p className="text-gray-600">An upright piano usually weighs between 300 and 500 pounds. A baby grand can weigh 500 to 600 pounds or more. Either way, our crew has the equipment and experience to handle it safely.</p></div>
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">Can you remove a piano from a second floor or basement?</h3><p className="text-gray-600">Yes. We've moved pianos down narrow staircases, through tight doorways, and up from basements across Omaha. We assess the path beforehand so there are no surprises on moving day.</p></div>
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">What happens to the piano after you take it?</h3><p className="text-gray-600">If the piano is still in playable condition, we'll work to donate it to a local school, church, or community organization. If it's beyond repair, we break it down and recycle the metal hardware, strings, and frame.</p></div>
          <div className="border-b border-gray-200 pb-6"><h3 className="font-bold text-[#0A1628] text-lg mb-2">Do I need to do anything to prepare the piano before you arrive?</h3><p className="text-gray-600">Just clear a path from the piano to the nearest exit. We handle everything else, including protecting your floors and doorframes during the move.</p></div>
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
          <h2 className="font-display text-3xl lg:text-5xl text-white font-bold mb-4">GOT A PIANO THAT NEEDS TO GO?</h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">Get a free estimate for piano removal in Omaha. We handle the heavy lifting, the stairs, and the disposal.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={PHONE_LINK} className="inline-flex items-center justify-center gap-2 bg-[#E8611A] text-white px-8 py-4 rounded font-bold text-lg transition-colors"><Phone className="w-5 h-5" /> CALL {PHONE}</a>
            <Link href="/free-estimate" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded font-bold text-lg hover:bg-white/10 transition-colors">REQUEST ONLINE ESTIMATE</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
