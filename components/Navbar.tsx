"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X, MessageCircle, ChevronDown } from "lucide-react";
import Image from "next/image";
import { BRAND, products } from "../data/product";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [stolesOpen, setStolesOpen] = useState(false);
  const [topPicksOpen, setTopPicksOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setStolesOpen(false);
    setTopPicksOpen(false);
  }, [pathname]);

  const knitProducts = products.slice(0, 5);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-bg/95 backdrop-blur-md shadow-sm border-b border-line"
          : "bg-bg/0"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <Image
              src="/images/brand/logo.png"
              alt="Ganesh Shawl Emporium"
              width={48}
              height={48}
              priority
              className="h-12 w-auto md:h-14"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-7">
            <Link
              href="/"
              className={`text-sm font-medium tracking-wide transition-colors ${
                pathname === "/"
                  ? "text-accent"
                  : "text-fg-muted hover:text-fg"
              }`}
            >
              Home
            </Link>
            <Link
              href="/category/shawls"
              className={`text-sm font-medium tracking-wide transition-colors ${
                pathname === "/category/shawls"
                  ? "text-accent"
                  : "text-fg-muted hover:text-fg"
              }`}
            >
              Shawls
            </Link>
            <div
              className="relative"
              onMouseEnter={() => setStolesOpen(true)}
              onMouseLeave={() => setStolesOpen(false)}
            >
              <button
                type="button"
                className="flex items-center gap-1 text-sm font-medium tracking-wide text-fg-muted hover:text-fg transition-colors"
                aria-expanded={stolesOpen}
                aria-haspopup="true"
              >
                Stoles
                <ChevronDown size={14} className={stolesOpen ? "rotate-180" : ""} />
              </button>
              {stolesOpen && (
                <div className="absolute left-0 top-full pt-3">
                  <div className="w-52 rounded-xl bg-white border border-line shadow-lg p-2">
                    <Link href="/category/stoles" className="block px-3 py-2 rounded-lg text-sm text-fg hover:bg-accent-soft transition-colors">
                      All Stoles
                    </Link>
                    <Link href="/category/knitted-stoles" className="flex items-center justify-between px-3 py-2 rounded-lg text-sm text-fg hover:bg-accent-soft transition-colors">
                      Knitted Stoles
                      <span className="text-[10px] uppercase tracking-wide text-accent">Bestseller</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <div
              className="relative"
              onMouseEnter={() => setTopPicksOpen(true)}
              onMouseLeave={() => setTopPicksOpen(false)}
            >
              <button
                type="button"
                className="flex items-center gap-1 text-sm font-medium tracking-wide text-fg-muted hover:text-fg transition-colors"
                aria-expanded={topPicksOpen}
                aria-haspopup="true"
              >
                Top Picks
                <ChevronDown
                  size={14}
                  className={`transition-transform ${
                    topPicksOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {topPicksOpen && (
                <div className="absolute right-0 top-full pt-3">
                  <div className="w-64 rounded-xl bg-white border border-line shadow-lg p-2">
                    {knitProducts.map((p) => (
                      <Link
                        key={p.id}
                        href={`/product/${p.id}`}
                        className="block px-3 py-2 rounded-lg text-sm text-fg hover:bg-accent-soft transition-colors"
                      >
                        {p.name}
                      </Link>
                    ))}
                    <Link
                      href="/category/knitted-stoles"
                      className="block px-3 py-2 rounded-lg text-sm font-medium text-accent hover:bg-accent-soft transition-colors"
                    >
                      View all knitted stoles →
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Desktop actions */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`https://wa.me/${BRAND.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-white text-sm font-medium hover:bg-accent/90 transition-colors"
            >
              <MessageCircle size={16} />
              Get a Quote
            </a>
            <a
              href={`tel:${BRAND.phone1.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-fg hover:text-accent transition-colors"
            >
              <Phone size={16} />
              {BRAND.phone1}
            </a>
          </div>

          {/* Mobile actions + button */}
          <div className="flex lg:hidden items-center gap-3">
            <a
              href={`https://wa.me/${BRAND.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 min-w-11 items-center justify-center gap-1.5 px-3 py-2 rounded-full bg-accent text-white text-sm font-medium"
              aria-label="WhatsApp"
            >
              <MessageCircle size={16} />
            </a>
            <button
              className="text-fg min-h-11 min-w-11 inline-flex items-center justify-center"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 p-5 rounded-xl bg-white border border-line shadow-lg max-h-[80vh] overflow-y-auto">
            <div className="flex flex-col gap-1">
              <Link
                href="/"
                className="px-3 py-2.5 rounded-lg font-medium text-fg hover:bg-accent-soft"
              >
                Home
              </Link>
              <Link
                href="/category/shawls"
                className="px-3 py-2.5 rounded-lg font-medium text-fg hover:bg-accent-soft"
              >
                Shawls
              </Link>
              <div className="rounded-lg">
                <button
                  type="button"
                  onClick={() => setStolesOpen(!stolesOpen)}
                  className="w-full min-h-11 px-3 py-2.5 rounded-lg flex items-center justify-between font-medium text-fg hover:bg-accent-soft"
                  aria-expanded={stolesOpen}
                >
                  Stoles
                  <ChevronDown size={18} className={stolesOpen ? "rotate-180" : ""} />
                </button>
                {stolesOpen && (
                  <div className="pl-3">
                    <Link href="/category/stoles" className="flex min-h-11 items-center px-3 py-2 rounded-lg text-sm text-fg-muted hover:bg-accent-soft">
                      All Stoles
                    </Link>
                    <Link href="/category/knitted-stoles" className="flex min-h-11 items-center justify-between px-3 py-2 rounded-lg text-sm text-fg-muted hover:bg-accent-soft">
                      Knitted Stoles
                      <span className="text-[10px] uppercase tracking-wide text-accent">Bestseller</span>
                    </Link>
                  </div>
                )}
              </div>

              <div className="mt-2 pt-2 border-t border-line">
                <p className="px-3 pb-2 text-xs font-medium uppercase tracking-widest text-fg-muted">
                  Top picks
                </p>
                {knitProducts.map((p) => (
                  <Link
                    key={p.id}
                    href={`/product/${p.id}`}
                    className="flex min-h-11 items-center px-3 py-2 rounded-lg text-sm text-fg-muted hover:bg-accent-soft hover:text-fg"
                  >
                    {p.name}
                  </Link>
                ))}
              </div>

              <div className="mt-3 pt-3 border-t border-line flex flex-col gap-2">
                <Link
                  href={`https://wa.me/${BRAND.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-accent text-white font-medium"
                >
                  <MessageCircle size={18} />
                  Get a Quote
                </Link>
                <a
                  href={`tel:${BRAND.phone1.replace(/\s/g, "")}`}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full border border-fg/15 text-fg font-medium"
                >
                  <Phone size={18} />
                  {BRAND.phone1}
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
