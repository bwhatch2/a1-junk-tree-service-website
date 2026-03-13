import { useEffect } from "react";
import { Link } from "wouter";
import { PHONE, PHONE_LINK } from "@/lib/services-data";
import { Phone, HelpCircle } from "lucide-react";

export default function FAQ() {
  useEffect(() => {
    document.title = "FAQ | A1 Junk Removal and Tree Service | Omaha NE";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Frequently asked questions about A1 Junk Removal and Tree Service in Omaha. Get answers about pricing, services, scheduling, and more.");
  }, []);

  return (
    <div>
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-[#0A1628]">Home</Link>
            <span>/</span>
            <span className="text-[#0A1628] font-medium">FAQ</span>
          </nav>
        </div>
      </div>

      <section className="py-16 lg:py-20">
        <div className="container max-w-3xl">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-[#E8611A]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <HelpCircle className="w-8 h-8 text-[#E8611A]" />
            </div>
            <h1 className="font-display text-4xl lg:text-5xl text-[#0A1628] font-bold mb-4">
              FREQUENTLY ASKED QUESTIONS
            </h1>
            <p className="text-gray-600 text-lg">
              Got questions? We've got answers. If you don't see what you're looking for, give us a call.
            </p>
          </div>

          {/* FAQ Content Placeholder */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 text-center">
            <p className="text-gray-500 text-lg mb-4">
              FAQ content coming soon. Bryan's curated FAQ list will be added here.
            </p>
            <p className="text-gray-400 text-sm">
              This page is ready for your curated FAQ content. Each question will be displayed
              in an accordion format optimized for Google's featured snippets and SGE.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-12 bg-[#0A1628] rounded-xl p-8 text-center">
            <h2 className="font-display text-2xl text-white font-bold mb-2">
              STILL HAVE QUESTIONS?
            </h2>
            <p className="text-white/70 mb-6">Call Bryan directly — he's happy to help.</p>
            <a
              href={PHONE_LINK}
              className="inline-flex items-center gap-2 bg-[#E8611A] text-white px-8 py-3 rounded font-bold"
            >
              <Phone className="w-5 h-5" /> CALL {PHONE}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
