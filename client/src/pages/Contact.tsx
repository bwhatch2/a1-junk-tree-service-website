import { useEffect } from "react";
import { Link } from "wouter";
import { PHONE, PHONE_LINK, EMAIL, BUSINESS_NAME } from "@/lib/services-data";
import { Phone, Mail, Clock, MapPin } from "lucide-react";

export default function Contact() {
  useEffect(() => {
    document.title = "Contact Us | A1 Junk Removal and Tree Service | Omaha NE";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Contact A1 Junk Removal and Tree Service in Omaha. Call (402) 612-2373 or email us. Open 7 days a week. Free estimates available.");
  }, []);

  return (
    <div>
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-[#0A1628]">Home</Link>
            <span>/</span>
            <span className="text-[#0A1628] font-medium">Contact Us</span>
          </nav>
        </div>
      </div>

      <section className="py-16 lg:py-20">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="font-display text-4xl lg:text-5xl text-[#0A1628] font-bold mb-4">
              CONTACT US
            </h1>
            <p className="text-gray-600 text-lg">
              Have a question or need a quote? We're here to help. The fastest way to reach us is by phone —
              you'll talk directly to Bryan, the owner.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Phone */}
            <a
              href={PHONE_LINK}
              className="group bg-white border-2 border-gray-200 hover:border-[#E8611A] rounded-xl p-8 text-center transition-all hover:shadow-lg"
            >
              <div className="w-16 h-16 bg-[#E8611A]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#E8611A]/20 transition-colors">
                <Phone className="w-8 h-8 text-[#E8611A]" />
              </div>
              <h2 className="font-display text-2xl text-[#0A1628] font-bold mb-2">CALL US</h2>
              <p className="text-[#E8611A] font-bold text-xl mb-2">{PHONE}</p>
              <p className="text-gray-500 text-sm">Talk directly to Bryan, the owner</p>
            </a>

            {/* Email */}
            <a
              href={`mailto:${EMAIL}`}
              className="group bg-white border-2 border-gray-200 hover:border-[#E8611A] rounded-xl p-8 text-center transition-all hover:shadow-lg"
            >
              <div className="w-16 h-16 bg-[#E8611A]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#E8611A]/20 transition-colors">
                <Mail className="w-8 h-8 text-[#E8611A]" />
              </div>
              <h2 className="font-display text-2xl text-[#0A1628] font-bold mb-2">EMAIL US</h2>
              <p className="text-[#E8611A] font-bold text-lg mb-2">{EMAIL}</p>
              <p className="text-gray-500 text-sm">We'll get back to you within 24 hours</p>
            </a>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Hours */}
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-[#E8611A]" />
                <h2 className="font-display text-xl text-[#0A1628] font-bold">HOURS</h2>
              </div>
              <div className="space-y-2 text-gray-700">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-semibold">7:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-semibold">8:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-semibold">By Appointment</span>
                </div>
              </div>
            </div>

            {/* Service Area */}
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-[#E8611A]" />
                <h2 className="font-display text-xl text-[#0A1628] font-bold">SERVICE AREA</h2>
              </div>
              <p className="text-gray-700 mb-4">
                We serve the entire Omaha metropolitan area including Bellevue, Papillion, La Vista,
                Ralston, Elkhorn, Gretna, Bennington, Council Bluffs, and more.
              </p>
              <Link href="/service-areas" className="text-[#E8611A] font-semibold text-sm hover:underline">
                View All Service Areas →
              </Link>
            </div>
          </div>

          {/* Free Estimate CTA */}
          <div className="mt-12 bg-[#0A1628] rounded-xl p-8 text-center">
            <h2 className="font-display text-2xl text-white font-bold mb-2">
              NEED A FREE ESTIMATE?
            </h2>
            <p className="text-white/70 mb-6">
              Fill out our online form and we'll get back to you with an honest price.
            </p>
            <Link
              href="/free-estimate"
              className="inline-flex items-center gap-2 bg-[#E8611A] text-white px-8 py-3 rounded font-bold"
            >
              GET YOUR FREE ESTIMATE
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
