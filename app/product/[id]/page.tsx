import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Phone, ArrowLeft } from "lucide-react";
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
  return {
    title: product.name,
    description: product.description,
    alternates: { canonical: `${BRAND.baseUrl}/product/${product.id}` },
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
            category: category?.name ?? product.category,
            material: product.details.material,
            image: `${BRAND.baseUrl}${product.image}`,
            brand: { "@type": "Brand", name: BRAND.name },
          }),
        }}
      />
      <div className="pt-28 md:pt-36 pb-12 md:pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <Link
            href={`/category/${product.category}`}
            className="inline-flex items-center gap-1 text-sm text-fg-muted hover:text-accent transition-colors mb-6"
          >
            <ArrowLeft size={14} />
            Back to {category?.name ?? product.category}
          </Link>

          <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
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

            <div className="flex flex-col">
              <p className="text-accent font-medium tracking-widest uppercase text-sm mb-3">
                {category?.name}
              </p>
              <h1 className="font-display text-3xl md:text-4xl text-fg mb-4">
                {product.name}
              </h1>
              <p className="text-fg-muted text-lg mb-8">{product.description}</p>

              <div className="bg-bg-soft rounded-xl p-5 mb-8">
                <h2 className="font-medium text-fg mb-3">Details</h2>
                <ul className="space-y-1.5 text-fg-muted">
                  <li>• Material: {product.details.material}</li>
                  <li>• Dimensions: {product.details.dimensions}</li>
                  {product.details.care && (
                    <li>• Care: {product.details.care}</li>
                  )}
                </ul>
              </div>

              <div className="bg-dark rounded-xl p-6 text-white">
                <p className="font-display text-xl mb-1">Wholesale pricing</p>
                <p className="text-white/70 text-sm mb-5">
                  Prices depend on quantity. Message us for today&apos;s quote.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={`https://wa.me/${BRAND.whatsapp}?text=Hello! Im interested in the ${product.name} (wholesale).`}
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

              <p className="mt-6 text-sm text-fg-muted">
                Min. wholesale order available. We ship across India — shipping
                quote included in your price.
              </p>
            </div>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="py-12 md:py-16 bg-bg-soft">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="font-display text-2xl md:text-3xl text-fg mb-8">
              You may also like
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