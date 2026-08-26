import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
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
    title: `${category.name} Wholesale in Ludhiana`,
    description: category.seoDescription,
    keywords: [category.name, "stole manufacturer Ludhiana", "wholesale Ludhiana Punjab"],
    alternates: { canonical: `${BRAND.baseUrl}/category/${category.slug}` },
    openGraph: {
      title: `${category.name} | Ganesh Shawl Emporium`,
      description: category.seoDescription,
      url: `${BRAND.baseUrl}/category/${category.slug}`,
      type: "website",
    },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  const items = getProductsByCategory(slug);
  const categoryUrl = `${BRAND.baseUrl}/category/${category.slug}`;
  const categorySchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        name: category.name,
        description: category.description,
        url: categoryUrl,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: BRAND.baseUrl },
          { "@type": "ListItem", position: 2, name: category.name, item: categoryUrl },
        ],
      },
    ],
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(categorySchema) }}
      />
      <section className="pt-24 md:pt-36 pb-12 md:pb-16 bg-bg-soft">
        <div className="container mx-auto px-4 md:px-6">
          <nav aria-label="Breadcrumb" className="text-sm text-fg-muted mb-4">
            <ol className="flex flex-wrap items-center gap-1.5">
              <li>
                <Link href="/" className="hover:text-accent transition-colors">Home</Link>
              </li>
              <ChevronRight size={14} className="text-fg/30" />
              <li className="text-fg" aria-current="page">{category.name}</li>
            </ol>
          </nav>
          <p className="text-accent font-medium tracking-widest uppercase text-sm mb-3">
            Manufacturer & Wholesaler in Ludhiana, Punjab
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
                Request the current collection
              </h2>
              <p className="text-fg-muted mb-8">
                Our current {category.name.toLowerCase()} catalogue is available
                on request. Call or WhatsApp us for available designs, colours,
                wholesale prices, and delivery details.
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
      <section className="pb-10">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-display text-xl text-fg mb-4">
            Browse our other collections
          </h2>
          <div className="flex flex-wrap gap-3">
            {categories
              .filter((c) => c.slug !== slug)
              .map((c) => (
                <Link
                  key={c.slug}
                  href={`/category/${c.slug}`}
                  className="px-4 py-2 rounded-full border border-fg/20 text-sm text-fg hover:border-accent hover:text-accent transition-colors"
                >
                  {c.name}
                </Link>
              ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </div>
  );
}
