import { useEffect } from "react";
import { Link } from "wouter";
import { PHONE, PHONE_LINK, ABOUT_TEAM_IMG, CTA_BG_IMG, BUSINESS_NAME, FORMER_NAME } from "@/lib/services-data";
import { Phone, ArrowRight, Star, Shield, DollarSign, Clock, MapPin, Users } from "lucide-react";

export default function About() {
  useEffect(() => {
    document.title = "About Us | A1 Junk Removal and Tree Service | Omaha NE";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Learn about A1 Junk Removal and Tree Service in Omaha. Locally owned by Bryan, serving the metro with honest pricing and hard work. 253+ five-star reviews.");
  }, []);

  return (
    <div>
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-[#0A1628]">Home</Link>
            <span>/</span>
            <span className="text-[#0A1628] font-medium">About Us</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="relative py-16 lg:py-24 bg-[#0A1628] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={ABOUT_TEAM_IMG} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl lg:text-6xl text-white font-bold mb-6">
              ABOUT A1 JUNK REMOVAL &amp; TREE SERVICE
            </h1>
            <p className="text-white/80 text-lg lg:text-xl leading-relaxed">
              We're not a franchise. We're not a call center. We're a local Omaha business built on
              showing up, working hard, and charging a fair price.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 lg:py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#E8611A] font-bold text-sm uppercase tracking-wider mb-2">Our Story</p>
              <h2 className="font-display text-3xl lg:text-4xl text-[#0A1628] font-bold mb-6">
                LOCALLY OWNED. HARD WORKING. HONEST.
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  When you call A1, you talk to Bryan — the owner. That's how it's been since day one,
                  and that's how it's going to stay. We built this business the old-fashioned way: by
                  showing up when we say we will, doing the job right, and charging a fair price.
                </p>
                <p>
                  We started as A1 Junk Removal of Omaha, focused on hauling away junk for homes and
                  businesses across the metro. As our customers kept asking us to handle tree work too,
                  we expanded into tree trimming, removal, and stump grinding. Now we're {BUSINESS_NAME} —
                  two services, one call.
                </p>
                <p>
                  We're not the cheapest and we're not the most expensive. But we are 40-60% less than
                  the big national franchises, and we do better work. That's not marketing talk — that's
                  what our 253+ five-star reviews say.
                </p>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <img src={ABOUT_TEAM_IMG} alt="A1 Junk Removal team" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl lg:text-4xl text-[#0A1628] font-bold">
              WHAT WE STAND FOR
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: DollarSign, title: "Honest Pricing", desc: "We give you a price upfront and stick to it. No hidden fees, no bait-and-switch. What we quote is what you pay." },
              { icon: Clock, title: "We Show Up", desc: "When we say we'll be there at 9am, we're there at 9am. Reliability isn't a bonus — it's the bare minimum." },
              { icon: Shield, title: "Fully Insured", desc: "We carry full insurance so you never have to worry. Your property is protected, period." },
              { icon: Star, title: "Quality Work", desc: "We don't cut corners. When we leave, the job is done right and your property is clean." },
              { icon: MapPin, title: "Locally Owned", desc: "We live here, we work here, and we care about this community. Your money stays local." },
              { icon: Users, title: "Real People", desc: "No call centers, no automated systems. You talk to real people who care about getting the job done." },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-gray-200">
                <div className="w-12 h-12 bg-[#E8611A]/10 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-[#E8611A]" />
                </div>
                <h3 className="font-display text-xl text-[#0A1628] font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 bg-[#0A1628] overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img src={CTA_BG_IMG} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628] via-[#0A1628]/80 to-transparent" />
        <div className="container relative z-10 text-center">
          <h2 className="font-display text-3xl lg:text-5xl text-white font-bold mb-4">
            READY TO WORK WITH US?
          </h2>
          <p className="text-white/70 text-lg mb-8">Free estimates, no obligation.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={PHONE_LINK} className="inline-flex items-center justify-center gap-2 bg-[#E8611A] text-white px-8 py-4 rounded font-bold text-lg">
              <Phone className="w-5 h-5" /> CALL {PHONE}
            </a>
            <Link href="/free-estimate" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded font-bold text-lg hover:bg-white/10 transition-colors">
              REQUEST ONLINE ESTIMATE
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
