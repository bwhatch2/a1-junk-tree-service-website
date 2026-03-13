import { useEffect, useState } from "react";
import { Link } from "wouter";
import { PHONE, PHONE_LINK } from "@/lib/services-data";
import { Phone, HelpCircle, ChevronDown, Search } from "lucide-react";
import { BreadcrumbSchema, FAQSchema } from "@/components/StructuredData";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqData: FAQItem[] = [
  // Services & Capabilities
  {
    category: "Services & Capabilities",
    question: "What types of junk removal services do you offer in Omaha?",
    answer: "We provide full-service junk removal in Omaha, handling everything from household clutter to construction debris. We handle everything—you don't lift a finger!",
  },
  {
    category: "Services & Capabilities",
    question: "Do you specialize in specific types of cleanouts, like estate cleanouts?",
    answer: "Yes! We are Omaha's specialists in estate cleanouts, providing a respectful and thorough service during sensitive times. Bryan (owner) and the team (Nick, Winston) handle the entire process with care, ensuring the property is cleared efficiently and left in professional condition. We are known for being easy to work with and handling every detail so you don't have to.",
  },
  {
    category: "Services & Capabilities",
    question: "Do you take construction debris after a home remodel?",
    answer: "We certainly do. We offer efficient construction debris removal as part of our junk removal Omaha services. We'll leave your site clean and ready.",
  },
  {
    category: "Services & Capabilities",
    question: "Will you remove a hot tub or a shed if it needs to be dismantled first?",
    answer: "Yes! We have the tools to dismantle and remove hot tubs and sheds. Bryan and the team handle the entire process from start to finish!",
  },
  {
    category: "Services & Capabilities",
    question: "Do you handle \"e-waste\" like old tube TVs, printers, and computers?",
    answer: "Yes, we responsibly dispose of e-waste. We prioritize recycling and donating electronics to keep hazardous materials out of Omaha landfills.",
  },
  {
    category: "Services & Capabilities",
    question: "Do you offer garage cleanouts in Omaha?",
    answer: "Yes, we specialize in junk removal in Omaha for garages. We'll clear out years of clutter and leave your space clean and organized.",
  },
  {
    category: "Services & Capabilities",
    question: "Can you help with a basement cleanout?",
    answer: "Definitely! Basements are a specialty. We'll handle all the heavy lifting and stairs, providing a truly hassle-free experience.",
  },
  {
    category: "Services & Capabilities",
    question: "Can you help with furniture removal and disposal?",
    answer: "Absolutely! We handle all types of furniture removal, ensuring items are recycled or donated whenever possible. We handle everything!",
  },
  {
    category: "Services & Capabilities",
    question: "Do you provide appliance removal services?",
    answer: "Yes, we safely remove and dispose of old appliances. Our team ensures they are handled responsibly, often through specialized recycling programs.",
  },
  {
    category: "Services & Capabilities",
    question: "Do you handle yard waste removal, like branches and brush?",
    answer: "Yes, we provide thorough yard waste removal. Our team will quickly clear out any organic debris, making it easy to work with us for all your needs.",
  },
  {
    category: "Services & Capabilities",
    question: "Do you offer commercial junk removal for businesses?",
    answer: "Yes, we provide professional commercial junk removal services in Omaha. We're known for good communication and reliable, efficient service.",
  },
  {
    category: "Services & Capabilities",
    question: "Can you help with a foreclosure cleanout?",
    answer: "Yes, we provide thorough foreclosure cleanouts. We'll quickly clear the property and leave it broom-clean, making it easy to work with us.",
  },
  {
    category: "Services & Capabilities",
    question: "Do you offer hoarder cleanout services?",
    answer: "Yes, we provide compassionate and efficient hoarder cleanouts. We handle the entire process, ensuring a hassle-free experience for everyone involved.",
  },
  {
    category: "Services & Capabilities",
    question: "Can you remove old office furniture and equipment?",
    answer: "Definitely! We handle all types of office cleanouts, ensuring that electronics are recycled and furniture is donated whenever possible.",
  },
  {
    category: "Services & Capabilities",
    question: "Do you provide property management cleanout services?",
    answer: "Yes, we work closely with property managers for quick tenant turnarounds. We're known for our same-day junk hauling and reliability.",
  },
  {
    category: "Services & Capabilities",
    question: "Can you help with a storage unit cleanout?",
    answer: "Absolutely! Just meet us at the facility, and we handle everything. We'll clear the unit and haul it all away in one trip.",
  },
  {
    category: "Services & Capabilities",
    question: "Can you remove furniture from a basement or an attic with narrow stairs?",
    answer: "Absolutely. Our team is experienced with tight spaces. We handle everything, including the heavy lifting up or down narrow stairs.",
  },
  {
    category: "Services & Capabilities",
    question: "Do you provide commercial junk removal for offices or warehouses?",
    answer: "Yes, we offer full-service commercial junk removal in Omaha. We're reliable, efficient, and known for good communication with business owners.",
  },
  // Pricing & Estimates
  {
    category: "Pricing & Estimates",
    question: "What is your approach to pricing? Is it fair and upfront?",
    answer: "We provide fair and upfront pricing with free, no-obligation estimates. You'll get a clear quote before any work begins—no hidden fees.",
  },
  {
    category: "Pricing & Estimates",
    question: "Are there extra fees for heavy materials like concrete, dirt, or roofing shingles?",
    answer: "We provide fair and upfront pricing for heavy materials. Since these require special handling and disposal, we'll give you a clear quote before we start.",
  },
  {
    category: "Pricing & Estimates",
    question: "Do you provide free estimates for junk removal?",
    answer: "Absolutely! We offer free, no-obligation estimates. Our fair and upfront pricing ensures you know the cost before we start.",
  },
  {
    category: "Pricing & Estimates",
    question: "How much does a full truckload of junk removal cost in Omaha?",
    answer: "Pricing is based on volume. We provide fair and upfront pricing with free estimates. A full truckload is our best value for large cleanouts!",
  },
  {
    category: "Pricing & Estimates",
    question: "Do you offer \"single-item\" pricing for things like a couch or refrigerator?",
    answer: "Yes! We have specific rates for single-item pickups. It's an easy way to clear out one or two bulky items quickly.",
  },
  {
    category: "Pricing & Estimates",
    question: "Is there a minimum labor fee even for small pickups?",
    answer: "We have a standard minimum load fee to cover our team's time and disposal. We'll always give you a clear, upfront quote before we arrive.",
  },
  {
    category: "Pricing & Estimates",
    question: "How do you calculate your prices—by weight or by volume in the truck?",
    answer: "We primarily price by volume (how much space it takes in the truck). This ensures fair and upfront pricing that is easy for you to understand.",
  },
  {
    category: "Pricing & Estimates",
    question: "How can I get a free estimate for my junk removal project?",
    answer: "It's easy! You can call us directly or book online. We'll provide a fair and upfront pricing estimate with no obligation.",
  },
  // Scheduling & Process
  {
    category: "Scheduling & Process",
    question: "Can I get same-day junk hauling if my need is urgent?",
    answer: "Absolutely. We offer same-day junk hauling in Omaha for urgent needs. Call us to see if we have a crew available right now!",
  },
  {
    category: "Scheduling & Process",
    question: "How easy is it to work with A1 Junk Removal, from booking to completion?",
    answer: "We make it easy to work with us! From quick booking to the final sweep-up, our process is frictionless and professional.",
  },
  {
    category: "Scheduling & Process",
    question: "Can you do \"curbside pickup\" if I leave the items on my driveway?",
    answer: "We do! Curbside pickup is a great, easy option. Just leave your items on the driveway, and we'll handle the rest—no need for you to be home!",
  },
  {
    category: "Scheduling & Process",
    question: "What can I expect regarding communication throughout the junk removal process?",
    answer: "Expect good communication every step of the way. We provide arrival updates and clear progress reports so you're never in the dark.",
  },
  {
    category: "Scheduling & Process",
    question: "Do I need to be home for you to give me an estimate or pick up the junk?",
    answer: "Not necessarily! For curbside or outdoor items, we can provide an estimate and haul it away while you're at work. We make it easy to work with us.",
  },
  {
    category: "Scheduling & Process",
    question: "Do I need to prepare anything before your team arrives, or do they handle everything?",
    answer: "No prep needed—we handle everything! Just point to the junk, and our team does all the heavy lifting, loading, and hauling.",
  },
  {
    category: "Scheduling & Process",
    question: "Will you clean up the area (sweeping/raking) after the junk is removed?",
    answer: "Absolutely. We believe in a job well done. We'll sweep or rake the area after the haul-out to ensure your space is left clean and professional.",
  },
  {
    category: "Scheduling & Process",
    question: "How quickly can you typically schedule a junk removal appointment?",
    answer: "We often have availability within 24-48 hours, and we even offer same-day junk hauling when possible. Just give us a call!",
  },
  {
    category: "Scheduling & Process",
    question: "Can I schedule a junk removal appointment online?",
    answer: "Yes, our online booking is quick and easy. You can also call us directly for a more personal touch and immediate scheduling.",
  },
  // Trust & Company Info
  {
    category: "Trust & Company Info",
    question: "Who will be coming to my home for the junk removal service?",
    answer: "You'll meet me, Bryan (the owner), or one of our local crew members like Nick or Winston. We're a local team, not a call center!",
  },
  {
    category: "Trust & Company Info",
    question: "Are you a locally owned and operated business in Omaha?",
    answer: "Yes, A1 Junk Removal is 100% locally owned by me, Bryan. We take pride in serving our Omaha neighbors with a personal touch.",
  },
  {
    category: "Trust & Company Info",
    question: "What makes A1 Junk Removal different from national franchises?",
    answer: "We offer a more personal, easy-to-work-with experience. You'll often see me, Bryan, on-site, ensuring the highest quality service.",
  },
  {
    category: "Trust & Company Info",
    question: "Do you have insurance and proper licensing?",
    answer: "Yes, A1 Junk Removal is fully insured and licensed for your peace of mind. We prioritize safety and professionalism in everything we do.",
  },
  {
    category: "Trust & Company Info",
    question: "What areas around Omaha do you serve?",
    answer: "We serve the entire Omaha metro area and surrounding communities. We're your local choice for reliable junk removal in Omaha.",
  },
  {
    category: "Trust & Company Info",
    question: "What do you do with the items—do you recycle or donate them, or does it all go to the landfill?",
    answer: "We prioritize the planet and our community. A1 recycles and donates usable items to local Omaha charities to keep as much as possible out of landfills.",
  },
  // Special Items & Restrictions
  {
    category: "Special Items & Restrictions",
    question: "Do you take hazardous materials like old paint, car batteries, or chemicals?",
    answer: "For safety, we cannot haul hazardous waste. However, we can often point you to local Omaha facilities that recycle these materials properly.",
  },
  {
    category: "Special Items & Restrictions",
    question: "Can you remove old tires, and is there an extra disposal fee for them?",
    answer: "Yes, we can remove tires! Because they require special processing to recycle, there is a small additional disposal fee per tire.",
  },
  {
    category: "Special Items & Restrictions",
    question: "Do you handle \"hoarding\" cleanouts or extremely cluttered estates?",
    answer: "Yes, we specialize in large-scale estate cleanouts and hoarding situations. Bryan and the team handle these with extreme care and professionalism.",
  },
  {
    category: "Special Items & Restrictions",
    question: "Do you offer dumpster rental alternatives if I want to load it myself?",
    answer: "We focus on full-service junk removal where we handle everything for you. It's often faster and easier than a dumpster rental since we do the labor!",
  },
];

const categories = [
  "Services & Capabilities",
  "Pricing & Estimates",
  "Scheduling & Process",
  "Trust & Company Info",
  "Special Items & Restrictions",
];

function FAQAccordionItem({ item, isOpen, onToggle }: { item: FAQItem; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-[#0A1628] pr-4">{item.question}</span>
        <ChevronDown
          className={`w-5 h-5 text-[#E8611A] shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="px-5 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
          {item.answer}
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  useEffect(() => {
    document.title = "FAQ | A1 Junk Removal and Tree Service | Omaha NE";
    const meta = document.querySelector('meta[name="description"]');
    if (meta)
      meta.setAttribute(
        "content",
        "Frequently asked questions about A1 Junk Removal and Tree Service in Omaha. Get answers about pricing, services, scheduling, and more. Call (402) 612-2373."
      );
  }, []);

  const toggleItem = (index: number) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  const filteredFaqs = faqData.filter((faq) => {
    const matchesSearch =
      searchQuery === "" ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === null || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const faqsByCategory = categories
    .map((cat) => ({
      category: cat,
      items: filteredFaqs.filter((faq) => faq.category === cat),
    }))
    .filter((group) => group.items.length > 0);

  return (
    <div>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "FAQ", url: "/faq" },
        ]}
      />
      <FAQSchema faqs={faqData.map((f) => ({ question: f.question, answer: f.answer }))} />

      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-[#0A1628]">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#0A1628] font-medium">FAQ</span>
          </nav>
        </div>
      </div>

      <section className="py-16 lg:py-20">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-[#E8611A]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <HelpCircle className="w-8 h-8 text-[#E8611A]" />
            </div>
            <h1 className="font-display text-4xl lg:text-5xl text-[#0A1628] font-bold mb-4">
              FREQUENTLY ASKED QUESTIONS
            </h1>
            <p className="text-gray-600 text-lg">
              Got questions about junk removal, pricing, or scheduling? We've got answers.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative mb-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg text-[#0A1628] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E8611A]/30 focus:border-[#E8611A]"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 mb-10">
            <button
              onClick={() => setActiveCategory(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === null
                  ? "bg-[#E8611A] text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              All ({faqData.length})
            </button>
            {categories.map((cat) => {
              const count = faqData.filter((f) => f.category === cat).length;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === cat
                      ? "bg-[#E8611A] text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {cat} ({count})
                </button>
              );
            })}
          </div>

          {/* FAQ Accordion by Category */}
          {faqsByCategory.length > 0 ? (
            faqsByCategory.map((group) => (
              <div key={group.category} className="mb-10">
                <h2 className="font-display text-2xl text-[#0A1628] font-bold mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-[#E8611A] rounded-full" />
                  {group.category}
                </h2>
                <div className="space-y-3">
                  {group.items.map((item) => {
                    const globalIndex = faqData.indexOf(item);
                    return (
                      <FAQAccordionItem
                        key={globalIndex}
                        item={item}
                        isOpen={openItems.has(globalIndex)}
                        onToggle={() => toggleItem(globalIndex)}
                      />
                    );
                  })}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12 bg-gray-50 rounded-xl">
              <p className="text-gray-500 text-lg">No questions match your search. Try a different term.</p>
            </div>
          )}

          {/* CTA */}
          <div className="mt-12 bg-[#0A1628] rounded-xl p-8 text-center">
            <h2 className="font-display text-2xl text-white font-bold mb-2">
              STILL HAVE QUESTIONS?
            </h2>
            <p className="text-white/70 mb-6">
              Call Bryan directly — he's happy to help.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={PHONE_LINK}
                className="inline-flex items-center gap-2 bg-[#E8611A] text-white px-8 py-3 rounded font-bold hover:bg-[#d4550f] transition-colors"
              >
                <Phone className="w-5 h-5" /> CALL {PHONE}
              </a>
              <Link
                href="/free-estimate"
                className="inline-flex items-center gap-2 bg-white text-[#0A1628] px-8 py-3 rounded font-bold hover:bg-gray-100 transition-colors"
              >
                GET A FREE ESTIMATE
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
