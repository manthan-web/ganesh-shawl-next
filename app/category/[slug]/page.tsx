import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { categories, getCategory, getProductsByCategory, BRAND } from "@/data/product";
import ProductCard from "@/components/ProductCard";
import CtaBand from "@/components/CtaBand";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) return {};
  return {
    title: category.name,
    description: category.description,
    alternates: { canonical: `${BRAND.baseUrl}/category/${category.slug}` },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  const items = getProductsByCategory(slug);

  return (
    <div>
      <section className="pt-28 md:pt-40 pb-12 md:pb-16 bg-bg-soft">
        <div className="container mx-auto px-4 md:px-6">
          <p className="text-accent font-medium tracking-widest uppercase text-sm mb-3">
            Collection
          </p>
          <h1 className="font-display text-4xl md:text-5xl text-fg mb-4">
            {category.name}
          </h1>
          <p className="text-fg-muted max-w-2xl text-lg">{category.description}</p>
        </div>
      </section>
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          {items.length > 0 ? (
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {items.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          ) : (
            <div className="max-w-xl mx-auto text-center py-16">
              <h2 className="font-display text-2xl text-fg mb-3">
                Photographs coming soon
              </h2>
              <p className="text-fg-muted mb-8">
                The {category.name.toLowerCase()} collection is on our looms.
                Call or WhatsApp us and we&apos;ll send current availability and
                wholesale prices right away.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3">
                <a
                  href={`https://wa.me/919872531240`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-accent text-white font-medium"
                >
                  WhatsApp for details
                </a>
                <a
                  href="tel:+919872531240"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-fg/20 text-fg font-medium"
                >
                  Call +91 9872531240
                </a>
              </div>
            </div>
          )}
        </div>
      </section>
      <CtaBand />
    </div>
  );
}