import { useEffect } from "react";
import { Link } from "wouter";
import { BUSINESS_NAME, EMAIL } from "@/lib/services-data";

export default function TermsOfService() {
  useEffect(() => {
    document.title = "Terms of Service | A1 Junk Removal and Tree Service";
  }, []);

  return (
    <div>
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-[#0A1628]">Home</Link>
            <span>/</span>
            <span className="text-[#0A1628] font-medium">Terms of Service</span>
          </nav>
        </div>
      </div>
      <section className="py-16 lg:py-20">
        <div className="container max-w-3xl prose prose-lg">
          <h1 className="font-display text-4xl text-[#0A1628] font-bold">Terms of Service</h1>
          <p>Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</p>
          <p>By using the {BUSINESS_NAME} website, you agree to these terms of service.</p>
          <h2>Services</h2>
          <p>We provide junk removal and tree services in the Omaha metropolitan area. All services are subject to availability and scheduling. Estimates provided are non-binding until confirmed.</p>
          <h2>Limitation of Liability</h2>
          <p>The information on this website is provided "as is" without warranty of any kind. We are not liable for any damages arising from the use of this website.</p>
          <h2>Contact</h2>
          <p>For questions about these terms, contact us at <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.</p>
        </div>
      </section>
    </div>
  );
}
