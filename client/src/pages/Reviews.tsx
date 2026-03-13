import { useEffect } from "react";
import { Link } from "wouter";
import { PHONE, PHONE_LINK, CTA_BG_IMG } from "@/lib/services-data";
import { Phone, Star, ExternalLink } from "lucide-react";

const reviews = [
  { name: "Mike R.", location: "Papillion, NE", text: "Called Bryan on a Monday morning, and he had a crew at my house by noon. They hauled away an old hot tub, a broken couch, and a garage full of junk. Price was way less than what 1-800-GOT-JUNK quoted me.", rating: 5 },
  { name: "Sarah T.", location: "Bellevue, NE", text: "We used A1 for an estate cleanout after my mother passed. Bryan and his team were respectful, efficient, and thorough. They even swept the floors when they were done. Can't say enough good things.", rating: 5 },
  { name: "Dave K.", location: "Elkhorn, NE", text: "Had two big trees trimmed and a bunch of yard waste hauled off. One call, one crew, one bill. These guys are the real deal. Fair price and hard workers.", rating: 5 },
  { name: "Jennifer L.", location: "Omaha, NE", text: "Bryan gave us an honest quote over the phone and the final price was exactly what he said. No surprises. They removed a hot tub and an old shed in one trip. Incredible.", rating: 5 },
  { name: "Tom W.", location: "La Vista, NE", text: "I've used A1 three times now for different projects. Every time they show up on time, work fast, and leave the place spotless. I won't call anyone else.", rating: 5 },
  { name: "Lisa M.", location: "Ralston, NE", text: "Needed a basement cleanout before selling our house. A1 had it cleared out in a few hours. The realtor was impressed. Thank you Bryan!", rating: 5 },
  { name: "Chris P.", location: "Gretna, NE", text: "These guys hauled away a massive pile of construction debris from our remodel. Professional, fast, and way more affordable than renting a dumpster.", rating: 5 },
  { name: "Amanda H.", location: "Council Bluffs, IA", text: "I was worried they wouldn't come to Council Bluffs but Bryan said no problem. They were here the next morning. Removed an old swing set and a trampoline. Kids outgrew them years ago.", rating: 5 },
  { name: "Robert S.", location: "Bennington, NE", text: "Had a dead tree removed and the stump ground down. They cleaned up everything — you couldn't even tell a tree was there. Great job.", rating: 5 },
];

export default function Reviews() {
  useEffect(() => {
    document.title = "Reviews | A1 Junk Removal and Tree Service | Omaha NE";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Read 253+ five-star reviews for A1 Junk Removal and Tree Service in Omaha. See why customers trust us for junk removal and tree service.");
  }, []);

  return (
    <div>
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-[#0A1628]">Home</Link>
            <span>/</span>
            <span className="text-[#0A1628] font-medium">Reviews</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 lg:py-20 bg-[#0A1628]">
        <div className="container text-center">
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <h1 className="font-display text-4xl lg:text-6xl text-white font-bold mb-4">
            253+ FIVE-STAR REVIEWS
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">
            Don't take our word for it — hear from real customers across the Omaha metro who've trusted
            us with their junk removal and tree service needs.
          </p>
          <a
            href="https://www.google.com/search?q=A1+Junk+Removal+of+Omaha+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-[#0A1628] px-6 py-3 rounded font-bold hover:bg-gray-100 transition-colors"
          >
            See All Reviews on Google
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16 lg:py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex gap-0.5 mb-4">
                  {[...Array(review.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4 leading-relaxed">"{review.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#0A1628] rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-[#0A1628] text-sm">{review.name}</p>
                    <p className="text-gray-500 text-xs">{review.location}</p>
                  </div>
                </div>
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
            JOIN 253+ HAPPY CUSTOMERS
          </h2>
          <p className="text-white/70 text-lg mb-8">Get your free estimate today.</p>
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
