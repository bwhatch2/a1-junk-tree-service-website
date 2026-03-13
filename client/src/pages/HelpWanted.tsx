import { useEffect } from "react";
import { Link } from "wouter";
import { PHONE, PHONE_LINK, EMAIL, BUSINESS_NAME } from "@/lib/services-data";
import { Phone, Mail, CheckCircle, Users } from "lucide-react";

export default function HelpWanted() {
  useEffect(() => {
    document.title = "Help Wanted | Jobs at A1 Junk Removal and Tree Service | Omaha NE";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "A1 Junk Removal and Tree Service is hiring in Omaha. Join our team — good pay, honest work, and a great crew. Call (402) 612-2373.");
  }, []);

  return (
    <div>
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-[#0A1628]">Home</Link>
            <span>/</span>
            <span className="text-[#0A1628] font-medium">Help Wanted</span>
          </nav>
        </div>
      </div>

      <section className="py-16 lg:py-20">
        <div className="container max-w-3xl">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-[#E8611A]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-[#E8611A]" />
            </div>
            <h1 className="font-display text-4xl lg:text-5xl text-[#0A1628] font-bold mb-4">
              JOIN OUR TEAM
            </h1>
            <p className="text-gray-600 text-lg">
              {BUSINESS_NAME} is growing and we're looking for hard-working people to join our crew.
              If you're reliable, not afraid of physical work, and want to be part of a team that
              treats you right — we want to hear from you.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-8 mb-8">
            <h2 className="font-display text-2xl text-[#0A1628] font-bold mb-4">
              WHAT WE'RE LOOKING FOR
            </h2>
            <div className="space-y-3">
              {[
                "Reliable and punctual — we start early and work hard",
                "Physically fit — this job involves heavy lifting",
                "Valid driver's license preferred",
                "Positive attitude and willingness to learn",
                "Experience in junk removal, moving, or tree work is a plus but not required",
                "Must be able to work outdoors in all weather conditions",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#E8611A] mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-8 mb-8">
            <h2 className="font-display text-2xl text-[#0A1628] font-bold mb-4">
              WHAT WE OFFER
            </h2>
            <div className="space-y-3">
              {[
                "Competitive pay — we pay well for hard work",
                "Consistent hours — we stay busy year-round",
                "A team that respects you",
                "Opportunity to grow with a growing company",
                "No corporate nonsense — just honest work",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#7A9E7E] mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#0A1628] rounded-xl p-8 text-center">
            <h2 className="font-display text-2xl text-white font-bold mb-2">
              INTERESTED?
            </h2>
            <p className="text-white/70 mb-6">
              Give Bryan a call or send us an email. Tell us a little about yourself and when you can start.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={PHONE_LINK}
                className="inline-flex items-center justify-center gap-2 bg-[#E8611A] text-white px-8 py-3 rounded font-bold"
              >
                <Phone className="w-5 h-5" /> CALL {PHONE}
              </a>
              <a
                href={`mailto:${EMAIL}?subject=Job Inquiry`}
                className="inline-flex items-center justify-center gap-2 border border-white text-white px-8 py-3 rounded font-bold hover:bg-white/10 transition-colors"
              >
                <Mail className="w-5 h-5" /> EMAIL US
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
