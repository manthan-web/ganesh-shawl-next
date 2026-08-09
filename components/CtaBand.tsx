import React from "react";
import { MessageCircle, Phone } from "lucide-react";
import { BRAND } from "../data/product";

const CtaBand: React.FC<{ title?: string }> = ({
  title = "Want a wholesale price?",
}) => {
  return (
    <section className="bg-dark py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
          {title}
        </h2>
        <p className="text-white/70 max-w-2xl mx-auto mb-8">
          We supply retailers and bulk buyers across India. Prices vary with
          quantity — tell us what you need and we&apos;ll send you a quote.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`https://wa.me/${BRAND.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-white font-medium hover:bg-accent/90 transition-colors"
          >
            <MessageCircle size={18} />
            WhatsApp us
          </a>
          <a
            href={`tel:${BRAND.phone1.replace(/\s/g, "")}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/30 text-white font-medium hover:bg-white/10 transition-colors"
          >
            <Phone size={18} />
            {BRAND.phone1}
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaBand;