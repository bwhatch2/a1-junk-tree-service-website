import { useEffect } from "react";
import { Link } from "wouter";
import { BUSINESS_NAME, EMAIL } from "@/lib/services-data";

export default function PrivacyPolicy() {
  useEffect(() => {
    document.title = "Privacy Policy | A1 Junk Removal and Tree Service";
  }, []);

  return (
    <div>
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-[#0A1628]">Home</Link>
            <span>/</span>
            <span className="text-[#0A1628] font-medium">Privacy Policy</span>
          </nav>
        </div>
      </div>
      <section className="py-16 lg:py-20">
        <div className="container max-w-3xl prose prose-lg">
          <h1 className="font-display text-4xl text-[#0A1628] font-bold">Privacy Policy</h1>
          <p>Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</p>
          <p>{BUSINESS_NAME} ("we", "us", or "our") operates the website. This page informs you of our policies regarding the collection, use, and disclosure of personal information when you use our website.</p>
          <h2>Information We Collect</h2>
          <p>We collect information you provide directly to us, such as when you fill out our estimate request form, contact us, or apply for a job. This may include your name, phone number, email address, and project details.</p>
          <h2>How We Use Your Information</h2>
          <p>We use the information we collect to respond to your inquiries, provide estimates, schedule services, and improve our website and services.</p>
          <h2>Information Sharing</h2>
          <p>We do not sell, trade, or rent your personal information to third parties. We may share information with service providers who assist us in operating our website or conducting our business.</p>
          <h2>Contact Us</h2>
          <p>If you have questions about this Privacy Policy, please contact us at <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.</p>
        </div>
      </section>
    </div>
  );
}
