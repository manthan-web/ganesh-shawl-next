import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Phone, ChevronRight, Package, Clock, Factory, IndianRupee } from "lucide-react";
import { products, getProduct, getCategory, BRAND } from "@/data/product";
import ProductCard from "@/components/ProductCard";
import CtaBand from "@/components/CtaBand";

interface Props {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return products.map((p) => ({ id: String(p.id) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = getProduct(Number(id));
  if (!product) return {};
  const seoName = product.name.replace(/ For Women$/, "");
  return {
    title: seoName,
    description: `${product.blurb} Wholesale supply from Ludhiana for retailers, boutiques, and online sellers across India.`,
    keywords: product.keywords,
    alternates: { canonical: `${BRAND.baseUrl}/product/${product.id}` },
    openGraph: {
      title: `${seoName} | ${BRAND.name}`,
      description: `${product.blurb} Wholesale supply from Ludhiana for retailers across India.`,
      url: `${BRAND.baseUrl}/product/${product.id}`,
      type: "website",
      images: [{ url: `${BRAND.baseUrl}${product.image}` }],
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { id } = await params;
  const product = getProduct(Number(id));
  if (!product) notFound();

  const category = getCategory(product.category);
  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const extraInfo = [
    { icon: Package, label: "MOQ", value: product.moq },
    { icon: Factory, label: "Production Capacity", value: product.productionCapacity },
    { icon: Clock, label: "Delivery Time", value: product.deliveryTime },
    { icon: IndianRupee, label: "Pricing", value: "Ask on WhatsApp — best wholesale rates" },
  ];

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: product.name,
            description: product.description,
            sku: product.itemCode,
            category: category?.name ?? product.category,
            url: `${BRAND.baseUrl}/product/${product.id}`,
            material: product.specs.find((s) => s.label === "Fabric")?.value,
            image: `${BRAND.baseUrl}${product.image}`,
            brand: { "@type": "Brand", name: BRAND.name },
            manufacturer: {
              "@type": "Organization",
              name: BRAND.name,
              address: { "@type": "PostalAddress", addressLocality: "Ludhiana", addressRegion: "Punjab", addressCountry: "IN" },
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: BRAND.baseUrl },
              { "@type": "ListItem", position: 2, name: category?.name ?? product.category, item: `${BRAND.baseUrl}/category/${product.category}` },
              { "@type": "ListItem", position: 3, name: product.name, item: `${BRAND.baseUrl}/product/${product.id}` },
            ],
          }),
        }}
      />

      <div className="pt-28 md:pt-36 pb-12 md:pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <nav aria-label="Breadcrumb" className="text-sm text-fg-muted mb-6">
            <ol className="flex flex-wrap items-center gap-1.5">
              <li>
                <Link href="/" className="hover:text-accent transition-colors">Home</Link>
              </li>
              <ChevronRight size={14} className="text-fg/30" />
              <li>
                <Link href={`/category/${product.category}`} className="hover:text-accent transition-colors">
                  {category?.name ?? product.category}
                </Link>
              </li>
              <ChevronRight size={14} className="text-fg/30" />
              <li className="text-fg" aria-current="page">{product.name}</li>
            </ol>
          </nav>

          <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
            <div>
              <div className="aspect-[3/4] relative rounded-2xl overflow-hidden bg-bg-soft shadow-sm">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <p className="mt-3 text-xs text-fg-muted text-center">
                Item Code: {product.itemCode}
              </p>
            </div>

            <div className="flex flex-col">
              <p className="text-accent font-medium tracking-widest uppercase text-sm mb-3">
                {category?.name} Manufacturer & Wholesaler
              </p>
              <h1 className="font-display text-3xl md:text-4xl text-fg mb-4">
                {product.name}
              </h1>
              <p className="text-fg-muted text-base leading-relaxed mb-8">
                {product.intro}
              </p>

              <div className="bg-dark rounded-xl p-6 text-white mb-8">
                <p className="font-display text-xl mb-1">Get Best Wholesale Quote</p>
                <p className="text-white/70 text-sm mb-5">
                  Direct from the factory floor. No middlemen, no retail markup —
                  we&apos;re a manufacturer in Ludhiana, Punjab.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={`https://wa.me/${BRAND.whatsapp}?text=Hello! I am interested in ${product.name} (${product.itemCode}) — please send wholesale details.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-accent text-white font-medium hover:bg-accent/90 transition-colors"
                  >
                    <MessageCircle size={18} />
                    Ask price on WhatsApp
                  </a>
                  <a
                    href={`tel:${BRAND.phone1.replace(/\s/g, "")}`}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-white/30 text-white font-medium hover:bg-white/10 transition-colors"
                  >
                    <Phone size={18} />
                    Call now
                  </a>
                </div>
              </div>

              <p className="mt-4 text-sm text-fg-muted">
                Min. wholesale order available. We ship across India — shipping
                quote included in your price.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 mt-14">
            <div className="lg:col-span-3 space-y-8">
              <section>
                <h2 className="font-display text-2xl text-fg mb-4">Product Details</h2>
                <div className="bg-bg-soft rounded-xl p-6">
                  <dl className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
                    {product.specs.map((s) => (
                      <div key={s.label} className="flex justify-between gap-4 border-b border-fg/10 pb-2.5">
                        <dt className="text-sm text-fg-muted">{s.label}</dt>
                        <dd className="text-sm text-fg font-medium text-right">{s.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </section>

              <section>
                <h2 className="font-display text-2xl text-fg mb-4">Product Description</h2>
                <div className="bg-bg-soft rounded-xl p-6">
                  <p className="text-fg-muted leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </section>

              <section>
                <h2 className="font-display text-2xl text-fg mb-4">हिंदी में विवरण</h2>
                <div className="bg-bg-soft rounded-xl p-6">
                  <p className="text-fg-muted leading-relaxed">
                    {product.hindi}
                  </p>
                </div>
              </section>
            </div>

            <aside className="lg:col-span-2">
              <h2 className="font-display text-2xl text-fg mb-4">Business Information</h2>
              <div className="bg-bg-soft rounded-xl p-6 space-y-5">
                {extraInfo.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-accent/10 text-accent flex items-center justify-center shrink-0">
                      <Icon size={18} />
                    </div>
                    <div>
                      <p className="text-sm text-fg-muted">{label}</p>
                      <p className="text-fg font-medium">{value}</p>
                    </div>
                  </div>
                ))}
                <div className="border-t border-fg/10 pt-5">
                  <p className="text-sm text-fg-muted mb-3">Packaging Details</p>
                  <p className="text-fg font-medium">{product.packaging}</p>
                </div>
              </div>

              <div className="bg-bg-soft rounded-xl p-6 mt-8">
                <h3 className="font-medium text-fg mb-2">Why buy from us?</h3>
                <ul className="space-y-2 text-sm text-fg-muted">
                  <li>• Manufacturer-direct wholesale prices</li>
                  <li>• Based in Ludhiana, Punjab — shawl capital of India</li>
                  <li>• 5,000+ stoles production capacity per month</li>
                  <li>• Shipment across India, retail-ready packaging</li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="py-12 md:py-16 bg-bg-soft">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="font-display text-2xl md:text-3xl text-fg mb-8">
              Similar {category?.name ?? "Products"}
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand />
    </div>
  );
}
