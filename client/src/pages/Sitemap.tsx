import { useEffect } from "react";
import { Link } from "wouter";
import { serviceCategories, serviceAreas } from "@/lib/services-data";

export default function SitemapPage() {
  useEffect(() => {
    document.title = "Sitemap | A1 Junk Removal and Tree Service";
  }, []);

  const junkCategories = serviceCategories.filter(c => c.slug !== "tree-service" && c.slug !== "landscaping");
  const treeCategory = serviceCategories.find(c => c.slug === "tree-service");
  const landscapingCategory = serviceCategories.find(c => c.slug === "landscaping");

  return (
    <div>
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-[#0A1628]">Home</Link>
            <span>/</span>
            <span className="text-[#0A1628] font-medium">Sitemap</span>
          </nav>
        </div>
      </div>

      <section className="py-16 lg:py-20">
        <div className="container">
          <h1 className="font-display text-4xl text-[#0A1628] font-bold mb-8">SITEMAP</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Main Pages */}
            <div>
              <h2 className="font-display text-xl text-[#0A1628] font-bold mb-4">Main Pages</h2>
              <ul className="space-y-2">
                {[
                  { href: "/", label: "Home" },
                  { href: "/services", label: "Junk Removal Services" },
                  { href: "/tree-service", label: "Tree Service" },
                  { href: "/landscaping", label: "Landscaping" },
                  { href: "/service-areas", label: "Service Areas" },
                  { href: "/reviews", label: "Reviews" },
                  { href: "/about", label: "About Us" },
                  { href: "/faq", label: "FAQ" },
                  { href: "/free-estimate", label: "Free Estimate" },
                  { href: "/contact", label: "Contact Us" },
                  { href: "/help-wanted", label: "Help Wanted" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-gray-700 hover:text-[#E8611A] text-sm transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service Areas */}
            <div>
              <h2 className="font-display text-xl text-[#0A1628] font-bold mb-4">Service Areas</h2>
              <ul className="space-y-2">
                {serviceAreas.map((area) => (
                  <li key={area.slug}>
                    <Link href={`/service-areas/${area.slug}`} className="text-gray-700 hover:text-[#E8611A] text-sm transition-colors">
                      {area.name}, {area.state}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tree Services */}
            <div>
              <h2 className="font-display text-xl text-[#7A9E7E] font-bold mb-4">Tree Services</h2>
              <ul className="space-y-2">
                {treeCategory?.services.map((svc) => (
                  <li key={svc.slug}>
                    <Link href={`/tree-service/${svc.slug}`} className="text-gray-700 hover:text-[#7A9E7E] text-sm transition-colors">
                      {svc.h1}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Landscaping Services */}
            <div>
              <h2 className="font-display text-xl text-[#7A9E7E] font-bold mb-4">Landscaping Services</h2>
              <ul className="space-y-2">
                {landscapingCategory?.services.map((svc) => (
                  <li key={svc.slug}>
                    <Link href={`/landscaping/${svc.slug}`} className="text-gray-700 hover:text-[#7A9E7E] text-sm transition-colors">
                      {svc.h1}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Junk Removal by Category */}
            {junkCategories.map((cat) => (
              <div key={cat.slug}>
                <h2 className="font-display text-xl text-[#E8611A] font-bold mb-4">{cat.name}</h2>
                <ul className="space-y-2">
                  {cat.services.map((svc) => (
                    <li key={svc.slug}>
                      <Link href={`/services/${svc.slug}`} className="text-gray-700 hover:text-[#E8611A] text-sm transition-colors">
                        {svc.h1}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
