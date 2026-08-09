import React from "react";
import { Phone, Mail, MapPin, Instagram, MessageCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { BRAND, categories } from "../data/product";

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/brand/logo.png"
                alt="Ganesh Shawl Emporium"
                width={64}
                height={48}
                className="h-14 w-auto"
              />
              <h3 className="font-display text-xl">{BRAND.name}</h3>
            </div>
            <p className="text-white/70 mb-6 max-w-md">
              Handcrafted shawls, stoles, and knitted wear from the Ludhiana
              looms. Wholesale &amp; bulk orders for retailers across India.
            </p>
            <div className="flex gap-4">
              <a
                href={BRAND.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={22} />
              </a>
              <a
                href={`https://wa.me/${BRAND.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-accent transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={22} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display text-lg mb-4">Collections</h3>
            <ul className="space-y-2 text-white/70">
              {categories.map((c) => (
                <li key={c.slug}>
                  <Link href={`/category/${c.slug}`} className="hover:text-accent transition-colors">
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg mb-4">Contact</h3>
            <ul className="space-y-3 text-white/70">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-accent mt-0.5 flex-shrink-0" />
                <span>
                  {BRAND.phone1}
                  <br />
                  {BRAND.phone2}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-accent mt-0.5 flex-shrink-0" />
                <span>info@ganeshshawls.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-accent mt-0.5 flex-shrink-0" />
                <span>{BRAND.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center text-white/50 text-sm">
          <p>© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;