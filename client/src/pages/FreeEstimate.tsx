import { useEffect, useState } from "react";
import { Link } from "wouter";
import { PHONE, PHONE_LINK, EMAIL, BUSINESS_NAME } from "@/lib/services-data";
import { Phone, Mail, Clock, MapPin, CheckCircle, Send, Loader2 } from "lucide-react";
import { toast } from "sonner";

export default function FreeEstimate() {
  useEffect(() => {
    document.title = "Free Estimate | A1 Junk Removal and Tree Service | Omaha NE";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Get a free estimate from A1 Junk Removal and Tree Service in Omaha. No obligation, no pressure. Call (402) 612-2373 or fill out our online form.");
  }, []);

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });

      if (response.ok) {
        setSubmitted(true);
        toast.success("Thank you! We'll get back to you shortly.");
      } else {
        toast.error("Something went wrong. Please try again or call us directly.");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again or call us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-[#0A1628]">Home</Link>
            <span>/</span>
            <span className="text-[#0A1628] font-medium">Free Estimate</span>
          </nav>
        </div>
      </div>

      <section className="py-16 lg:py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h1 className="font-display text-4xl lg:text-5xl text-[#0A1628] font-bold mb-4">
                GET YOUR FREE ESTIMATE
              </h1>
              <p className="text-gray-600 text-lg mb-8">
                Tell us what you need and we'll give you an honest price. No obligation, no pressure.
                Most estimates are provided within a few hours.
              </p>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                  <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h2 className="font-display text-2xl text-[#0A1628] font-bold mb-2">
                    THANK YOU!
                  </h2>
                  <p className="text-gray-600">
                    We've received your request and will get back to you shortly. For faster service,
                    call Bryan directly at <a href={PHONE_LINK} className="text-[#E8611A] font-bold">{PHONE}</a>.
                  </p>
                </div>
              ) : (
                <form
                  name="free-estimate"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <input type="hidden" name="form-name" value="free-estimate" />
                  <p className="hidden">
                    <label>Don't fill this out if you're human: <input name="bot-field" /></label>
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                      <input type="text" name="name" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E8611A] focus:border-transparent outline-none" placeholder="Your name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                      <input type="tel" name="phone" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E8611A] focus:border-transparent outline-none" placeholder="(402) 555-0000" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input type="email" name="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E8611A] focus:border-transparent outline-none" placeholder="you@email.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Service Needed *</label>
                    <select name="service" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E8611A] focus:border-transparent outline-none bg-white">
                      <option value="">Select a service</option>
                      <option value="junk-removal">Junk Removal</option>
                      <option value="cleanout">Cleanout Service</option>
                      <option value="construction">Construction Debris</option>
                      <option value="appliance">Appliance Removal</option>
                      <option value="furniture">Furniture Removal</option>
                      <option value="tree-removal">Tree Removal</option>
                      <option value="tree-trimming">Tree Trimming</option>
                      <option value="stump-grinding">Stump Grinding</option>
                      <option value="demolition">Demolition</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Address / Location</label>
                    <input type="text" name="address" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E8611A] focus:border-transparent outline-none" placeholder="Street address or general area" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Tell Us About Your Project *</label>
                    <textarea name="message" required rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E8611A] focus:border-transparent outline-none resize-none" placeholder="Describe what you need removed, how much there is, and any access issues we should know about..." />
                  </div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-[#E8611A] hover:bg-[#d4570f] text-white py-4 rounded-lg font-bold text-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        SENDING...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        SUBMIT REQUEST
                      </>
                    )}
                  </button>
                  <p className="text-gray-400 text-xs text-center">
                    By submitting, you agree to be contacted about your estimate. We never share your information.
                  </p>
                </form>
              )}
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-6">
              <div className="bg-[#0A1628] rounded-xl p-8 text-white">
                <h2 className="font-display text-2xl font-bold mb-6">
                  PREFER TO CALL?
                </h2>
                <p className="text-white/70 mb-6">
                  Talk to Bryan directly. He can usually give you a ballpark price right over the phone.
                </p>
                <a
                  href={PHONE_LINK}
                  className="flex items-center justify-center gap-2 bg-[#E8611A] text-white py-4 rounded-lg font-bold text-xl mb-4"
                >
                  <Phone className="w-6 h-6" />
                  {PHONE}
                </a>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3 text-white/70">
                    <Mail className="w-4 h-4" />
                    <a href={`mailto:${EMAIL}`} className="hover:text-white">{EMAIL}</a>
                  </div>
                  <div className="flex items-center gap-3 text-white/70">
                    <Clock className="w-4 h-4" />
                    <span>Open 7 Days a Week</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/70">
                    <MapPin className="w-4 h-4" />
                    <span>Serving Omaha &amp; Surrounding Areas</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-display text-lg text-[#0A1628] font-bold mb-4">
                  WHAT TO EXPECT
                </h3>
                <div className="space-y-4">
                  {[
                    { step: "1", title: "Tell Us What You Need", desc: "Call or fill out the form with details about your project." },
                    { step: "2", title: "Get Your Free Estimate", desc: "We'll give you an honest, no-obligation price." },
                    { step: "3", title: "We Get It Done", desc: "Schedule a time and we'll show up, do the work, and clean up." },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-3">
                      <div className="w-8 h-8 bg-[#E8611A] text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="font-bold text-[#0A1628] text-sm">{item.title}</h4>
                        <p className="text-gray-600 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
