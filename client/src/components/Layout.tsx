/*
  LAYOUT COMPONENT
  Design: "Omaha Grit" — Bold Local Pride
  - Deep navy (#0A1628) header/footer
  - Orange (#E8611A) accents for CTAs
  - Sage green (#7A9E7E) for tree service sections
  - Bebas Neue for display, Work Sans for body
  - Mega-menu navigation for 100+ services
  - Sticky mobile CTA bar
*/

import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import {
  serviceCategories,
  PHONE,
  PHONE_LINK,
  BUSINESS_NAME,
  FORMER_NAME,
  EMAIL,
  serviceAreas,
} from "@/lib/services-data";
import {
  Phone,
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  MapPin,
  Mail,
  Clock,
  Star,
} from "lucide-react";

// ─── TOP BAR ───
function TopBar() {
  return (
    <div className="bg-[#E8611A] text-white text-sm py-1.5">
      <div className="container flex justify-between items-center">
        <div className="flex items-center gap-2">
          <MapPin className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Serving Omaha &amp; Surrounding Areas</span>
          <span className="sm:hidden">Omaha &amp; Surrounding Areas</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2">
            <Clock className="w-3.5 h-3.5" />
            <span>7 Days a Week</span>
          </div>
          <a href={PHONE_LINK} className="flex items-center gap-1.5 font-semibold hover:text-white/90 transition-colors">
            <Phone className="w-3.5 h-3.5" />
            {PHONE}
          </a>
        </div>
      </div>
    </div>
  );
}

// ─── MEGA MENU ───
function MegaMenu({
  type,
  isOpen,
  onClose,
}: {
  type: "junk" | "tree";
  isOpen: boolean;
  onClose: () => void;
}) {
  const menuRef = useRef<HTMLDivElement>(null);
  const junkCategories = serviceCategories.filter(
    (c) => c.slug !== "tree-service"
  );
  const treeCategory = serviceCategories.find((c) => c.slug === "tree-service");
  const categories = type === "junk" ? junkCategories : treeCategory ? [treeCategory] : [];

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        onClose();
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      ref={menuRef}
      className="absolute top-full left-0 right-0 bg-white shadow-2xl border-t-4 border-[#E8611A] z-50 animate-in fade-in slide-in-from-top-2 duration-200"
    >
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {categories.map((cat) => (
            <div key={cat.slug}>
              <Link
                href={type === "tree" ? "/tree-service" : `/services/${cat.slug}`}
                onClick={onClose}
                className="text-[#0A1628] font-bold text-sm uppercase tracking-wider mb-3 block hover:text-[#E8611A] transition-colors"
              >
                {cat.name}
              </Link>
              <ul className="space-y-1.5">
                {cat.services.map((svc) => (
                  <li key={svc.slug}>
                    <Link
                      href={
                        type === "tree"
                          ? `/tree-service/${svc.slug}`
                          : `/services/${svc.slug}`
                      }
                      onClick={onClose}
                      className="text-gray-600 hover:text-[#E8611A] text-sm transition-colors flex items-center gap-1 group"
                    >
                      <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#E8611A]" />
                      <span>{svc.h1.replace(" in Omaha", "").replace(" Service", "")}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-6 pt-6 border-t border-gray-200 flex items-center justify-between">
          <p className="text-gray-500 text-sm">
            {type === "junk"
              ? "Over 75 specialized junk removal services"
              : "Complete tree care for your property"}
          </p>
          <Link
            href={type === "junk" ? "/services" : "/tree-service"}
            onClick={onClose}
            className="text-[#E8611A] font-semibold text-sm hover:underline"
          >
            View All {type === "junk" ? "Junk Removal" : "Tree"} Services →
          </Link>
        </div>
      </div>
    </div>
  );
}

// ─── MOBILE MENU ───
function MobileMenu({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const junkCategories = serviceCategories.filter(
    (c) => c.slug !== "tree-service"
  );
  const treeCategory = serviceCategories.find((c) => c.slug === "tree-service");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#0A1628] overflow-y-auto">
      <div className="flex justify-between items-center p-4 border-b border-white/10">
        <span className="text-white font-bold text-lg font-display">
          A1 JUNK REMOVAL
        </span>
        <button onClick={onClose} className="text-white p-2">
          <X className="w-6 h-6" />
        </button>
      </div>
      <nav className="p-4 space-y-1">
        <Link
          href="/"
          onClick={onClose}
          className="block py-3 px-4 text-white text-lg font-medium hover:bg-white/5 rounded-lg"
        >
          Home
        </Link>

        {/* Junk Removal Section */}
        <div>
          <button
            onClick={() =>
              setExpandedCategory(
                expandedCategory === "junk" ? null : "junk"
              )
            }
            className="w-full flex justify-between items-center py-3 px-4 text-white text-lg font-medium hover:bg-white/5 rounded-lg"
          >
            Junk Removal
            <ChevronDown
              className={`w-5 h-5 transition-transform ${
                expandedCategory === "junk" ? "rotate-180" : ""
              }`}
            />
          </button>
          {expandedCategory === "junk" && (
            <div className="ml-4 space-y-1 mt-1">
              <Link
                href="/services"
                onClick={onClose}
                className="block py-2 px-4 text-[#E8611A] font-semibold text-sm"
              >
                View All Junk Services
              </Link>
              {junkCategories.map((cat) => (
                <div key={cat.slug} className="mb-2">
                  <p className="py-1 px-4 text-white/50 text-xs uppercase tracking-wider font-bold">
                    {cat.name}
                  </p>
                  {cat.services.slice(0, 5).map((svc) => (
                    <Link
                      key={svc.slug}
                      href={`/services/${svc.slug}`}
                      onClick={onClose}
                      className="block py-1.5 px-4 text-white/80 text-sm hover:text-[#E8611A]"
                    >
                      {svc.h1.replace(" in Omaha", "")}
                    </Link>
                  ))}
                  {cat.services.length > 5 && (
                    <Link
                      href="/services"
                      onClick={onClose}
                      className="block py-1.5 px-4 text-[#E8611A] text-xs"
                    >
                      + {cat.services.length - 5} more
                    </Link>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Tree Service Section */}
        <div>
          <button
            onClick={() =>
              setExpandedCategory(
                expandedCategory === "tree" ? null : "tree"
              )
            }
            className="w-full flex justify-between items-center py-3 px-4 text-white text-lg font-medium hover:bg-white/5 rounded-lg"
          >
            Tree Service
            <ChevronDown
              className={`w-5 h-5 transition-transform ${
                expandedCategory === "tree" ? "rotate-180" : ""
              }`}
            />
          </button>
          {expandedCategory === "tree" && treeCategory && (
            <div className="ml-4 space-y-1 mt-1">
              <Link
                href="/tree-service"
                onClick={onClose}
                className="block py-2 px-4 text-[#7A9E7E] font-semibold text-sm"
              >
                View All Tree Services
              </Link>
              {treeCategory.services.map((svc) => (
                <Link
                  key={svc.slug}
                  href={`/tree-service/${svc.slug}`}
                  onClick={onClose}
                  className="block py-1.5 px-4 text-white/80 text-sm hover:text-[#7A9E7E]"
                >
                  {svc.h1.replace(" in Omaha", "")}
                </Link>
              ))}
            </div>
          )}
        </div>

        <Link
          href="/service-areas"
          onClick={onClose}
          className="block py-3 px-4 text-white text-lg font-medium hover:bg-white/5 rounded-lg"
        >
          Service Areas
        </Link>
        <Link
          href="/reviews"
          onClick={onClose}
          className="block py-3 px-4 text-white text-lg font-medium hover:bg-white/5 rounded-lg"
        >
          Reviews
        </Link>
        <Link
          href="/about"
          onClick={onClose}
          className="block py-3 px-4 text-white text-lg font-medium hover:bg-white/5 rounded-lg"
        >
          About
        </Link>
        <Link
          href="/faq"
          onClick={onClose}
          className="block py-3 px-4 text-white text-lg font-medium hover:bg-white/5 rounded-lg"
        >
          FAQ
        </Link>
        <Link
          href="/contact"
          onClick={onClose}
          className="block py-3 px-4 text-white text-lg font-medium hover:bg-white/5 rounded-lg"
        >
          Contact
        </Link>

        <div className="pt-4 space-y-3">
          <a
            href={PHONE_LINK}
            className="flex items-center justify-center gap-2 bg-[#E8611A] text-white py-3 rounded-lg font-bold text-lg"
          >
            <Phone className="w-5 h-5" />
            CALL {PHONE}
          </a>
          <Link
            href="/free-estimate"
            onClick={onClose}
            className="flex items-center justify-center gap-2 border-2 border-white text-white py-3 rounded-lg font-bold text-lg"
          >
            FREE ESTIMATE
          </Link>
        </div>
      </nav>
    </div>
  );
}

// ─── HEADER ───
function Header() {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState<"junk" | "tree" | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mega menu on route change
  useEffect(() => {
    setMegaMenuOpen(null);
    setMobileOpen(false);
  }, [location]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/service-areas", label: "Service Areas" },
    { href: "/reviews", label: "Reviews" },
    { href: "/about", label: "About" },
  ];

  return (
    <header
      className={`sticky top-0 z-40 bg-[#0A1628] transition-shadow duration-300 ${
        scrolled ? "shadow-xl" : ""
      }`}
    >
      <div className="container flex items-center justify-between h-16 lg:h-18">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none">
          <span className="text-white font-display text-xl lg:text-2xl font-bold tracking-wide">
            A1 JUNK REMOVAL
          </span>
          <span className="text-[#7A9E7E] font-display text-xs lg:text-sm tracking-widest">
            &amp; TREE SERVICE
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.slice(0, 1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                location === link.href
                  ? "text-[#E8611A]"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Junk Removal Dropdown */}
          <button
            onMouseEnter={() => setMegaMenuOpen("junk")}
            onClick={() =>
              setMegaMenuOpen(megaMenuOpen === "junk" ? null : "junk")
            }
            className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors ${
              megaMenuOpen === "junk" || location.startsWith("/services")
                ? "text-[#E8611A]"
                : "text-white/80 hover:text-white"
            }`}
          >
            Junk Removal
            <ChevronDown
              className={`w-3.5 h-3.5 transition-transform ${
                megaMenuOpen === "junk" ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Tree Service Dropdown */}
          <button
            onMouseEnter={() => setMegaMenuOpen("tree")}
            onClick={() =>
              setMegaMenuOpen(megaMenuOpen === "tree" ? null : "tree")
            }
            className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors ${
              megaMenuOpen === "tree" || location.startsWith("/tree-service")
                ? "text-[#7A9E7E]"
                : "text-white/80 hover:text-white"
            }`}
          >
            Tree Service
            <ChevronDown
              className={`w-3.5 h-3.5 transition-transform ${
                megaMenuOpen === "tree" ? "rotate-180" : ""
              }`}
            />
          </button>

          {navLinks.slice(1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                location === link.href
                  ? "text-[#E8611A]"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/free-estimate"
            className="ml-3 bg-[#E8611A] hover:bg-[#d4570f] text-white px-5 py-2 rounded font-bold text-sm transition-colors"
          >
            FREE ESTIMATE
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(true)}
          className="lg:hidden text-white p-2"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mega Menu */}
      {megaMenuOpen && (
        <div onMouseLeave={() => setMegaMenuOpen(null)}>
          <MegaMenu
            type={megaMenuOpen}
            isOpen={true}
            onClose={() => setMegaMenuOpen(null)}
          />
        </div>
      )}

      {/* Mobile Menu */}
      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}

// ─── FOOTER ───
function Footer() {
  const junkCategories = serviceCategories.filter(
    (c) => c.slug !== "tree-service"
  );
  const treeCategory = serviceCategories.find((c) => c.slug === "tree-service");
  const topJunkServices = junkCategories.flatMap((c) => c.services).slice(0, 8);

  return (
    <footer className="bg-[#0A1628] text-white">
      {/* Main Footer */}
      <div className="container py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="block mb-4">
              <span className="font-display text-2xl font-bold block">
                A1 JUNK REMOVAL
              </span>
              <span className="font-display text-sm text-[#7A9E7E] tracking-widest">
                &amp; TREE SERVICE
              </span>
            </Link>
            <p className="text-white/50 text-xs italic mb-4">
              ({FORMER_NAME})
            </p>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Omaha's trusted local junk removal and tree service. Serving the
              metro area with honest pricing and hard work since day one.
            </p>
            <div className="space-y-2 text-sm">
              <a
                href={PHONE_LINK}
                className="flex items-center gap-2 text-white/80 hover:text-[#E8611A] transition-colors"
              >
                <Phone className="w-4 h-4" />
                {PHONE}
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-2 text-white/80 hover:text-[#E8611A] transition-colors"
              >
                <Mail className="w-4 h-4" />
                {EMAIL}
              </a>
              <div className="flex items-center gap-2 text-white/80">
                <Clock className="w-4 h-4" />
                Open 7 Days a Week
              </div>
            </div>
          </div>

          {/* Junk Removal Services */}
          <div>
            <h3 className="font-display text-lg font-bold mb-4 text-[#E8611A]">
              JUNK REMOVAL
            </h3>
            <ul className="space-y-2">
              {topJunkServices.map((svc) => (
                <li key={svc.slug}>
                  <Link
                    href={`/services/${svc.slug}`}
                    className="text-white/70 hover:text-white text-sm transition-colors"
                  >
                    {svc.h1.replace(" in Omaha", "")}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-[#E8611A] text-sm font-semibold hover:underline"
                >
                  View All Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Tree Services */}
          <div>
            <h3 className="font-display text-lg font-bold mb-4 text-[#7A9E7E]">
              TREE SERVICE
            </h3>
            <ul className="space-y-2">
              {treeCategory?.services.map((svc) => (
                <li key={svc.slug}>
                  <Link
                    href={`/tree-service/${svc.slug}`}
                    className="text-white/70 hover:text-white text-sm transition-colors"
                  >
                    {svc.h1.replace(" in Omaha", "")}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg font-bold mb-4">
              QUICK LINKS
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/free-estimate", label: "Free Estimate" },
                { href: "/service-areas", label: "Service Areas" },
                { href: "/reviews", label: "Reviews" },
                { href: "/about", label: "About Us" },
                { href: "/faq", label: "FAQ" },
                { href: "/help-wanted", label: "Help Wanted" },
                { href: "/contact", label: "Contact Us" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Service Areas in Footer */}
            <h3 className="font-display text-lg font-bold mt-6 mb-3">
              SERVICE AREAS
            </h3>
            <div className="flex flex-wrap gap-x-3 gap-y-1">
              {serviceAreas.slice(0, 8).map((area) => (
                <Link
                  key={area.slug}
                  href={`/service-areas/${area.slug}`}
                  className="text-white/50 hover:text-white text-xs transition-colors"
                >
                  {area.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container py-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-white/40">
          <p>
            © {new Date().getFullYear()} {BUSINESS_NAME}. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-white/70 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-white/70 transition-colors">
              Terms of Service
            </Link>
            <Link href="/sitemap" className="hover:text-white/70 transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── MOBILE STICKY CTA ───
function MobileStickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-[#0A1628] border-t border-white/10 p-2 flex gap-2">
      <a
        href={PHONE_LINK}
        className="flex-1 flex items-center justify-center gap-2 bg-[#E8611A] text-white py-3 rounded font-bold text-sm"
      >
        <Phone className="w-4 h-4" />
        CALL NOW
      </a>
      <Link
        href="/free-estimate"
        className="flex-1 flex items-center justify-center gap-2 border border-white text-white py-3 rounded font-bold text-sm"
      >
        FREE ESTIMATE
      </Link>
    </div>
  );
}

// ─── SCROLL TO TOP ON ROUTE CHANGE ───
function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
}

// ─── MAIN LAYOUT ───
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <TopBar />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <MobileStickyCTA />
    </div>
  );
}
