import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { categories, products, BRAND } from "@/data/product";
import ProductCard from "@/components/ProductCard";
import CtaBand from "@/components/CtaBand";

export default function Home() {
  const featured = products.slice(0, 4);

  return (
    <div>
      {/* Hero */}
      <section className="relative -mt-16 pt-28 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.07] texture-divider" />
        <div className="container relative mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
              Ludhiana · Est. the old way
            </p>
            <h1 className="font-display text-4xl md:text-6xl leading-tight text-fg mb-6">
              Weave a winter that feels handmade.
            </h1>
            <p className="text-fg-muted text-lg max-w-md mb-8">
              Shawls, stoles, and knitted wear from the Ludhiana looms. Wholesale
              and bulk orders for retailers across India — call for a quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/category/knitted-stoles"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-accent text-white font-medium hover:bg-accent/90 transition-colors"
              >
                Shop the collection
                <ArrowRight size={18} />
              </Link>
              <a
                href={`tel:${BRAND.phone1.replace(/\s/g, "")}`}
                className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-fg/20 text-fg font-medium hover:bg-white transition-colors"
              >
                Call {BRAND.phone1}
              </a>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/images/hero/feature-1.jpg"
              alt="Handcrafted knitted stoles at Ganesh Shawl Emporium"
              width={1086}
              height={1448}
              priority
              className="rounded-2xl object-cover w-full shadow-xl"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-bg-soft py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl text-fg mb-3">
              Our looms
            </h2>
            <p className="text-fg-muted max-w-2xl mx-auto">
              Three collections, one weaving tradition.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((c) => (
              <Link
                key={c.slug}
                href={`/category/${c.slug}`}
                className="group block bg-white rounded-xl p-8 border border-line hover:border-accent/40 hover:shadow-lg transition-all"
              >
                <p className="text-accent font-medium tracking-widest uppercase text-xs mb-3">
                  Collection
                </p>
                <h3 className="font-display text-2xl text-fg mb-2">{c.name}</h3>
                <p className="text-fg-muted mb-4">{c.tagline}</p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-accent group-hover:gap-2 transition-all">
                  View collection <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="font-display text-3xl md:text-4xl text-fg mb-3">
                Knitted, newly arrived
              </h2>
              <p className="text-fg-muted max-w-xl">
                Fresh wraps from this season&apos;s wool. Every piece hand-finished.
              </p>
            </div>
            <Link
              href="/category/knitted-stoles"
              className="hidden md:inline-flex items-center gap-1 text-sm font-medium text-accent hover:gap-2 transition-all"
            >
              View all <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {featured.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </div>
  );
}