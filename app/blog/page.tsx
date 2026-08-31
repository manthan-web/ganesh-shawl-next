import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import Image from "next/image";
import { blogs } from "@/data/blogs";
import { BRAND } from "@/data/product";

export const metadata: Metadata = {
  title: "Shawl & Stole Guides: Blog",
  description:
    "Practical guides on shawls, stoles, scarves and winter wear — sizes, fabrics, styling and buying tips, written by a Ludhiana shawl manufacturer.",
  alternates: { canonical: `${BRAND.baseUrl}/blog` },
  openGraph: {
    title: "Shawl & Stole Guides: Blog | Ganesh Shawl Emporium",
    description:
      "Practical guides on shawls, stoles, scarves and winter wear, written by a Ludhiana shawl manufacturer.",
    url: `${BRAND.baseUrl}/blog`,
    type: "website",
  },
};

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

export default function BlogIndexPage() {
  return (
    <div>
      <section className="pt-24 md:pt-36 pb-12 md:pb-16 bg-bg-soft">
        <div className="container mx-auto px-4 md:px-6">
          <p className="text-accent font-medium tracking-widest uppercase text-sm mb-3">
            Guides from the loom
          </p>
          <h1 className="font-display text-4xl md:text-5xl text-fg mb-4">
            Blog
          </h1>
          <p className="text-fg-muted max-w-2xl text-lg">
            Shawls, stoles, scarves and winter wear explained — sizes, fabrics,
            styling and buying tips from people who manufacture them.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group rounded-2xl border border-line bg-white overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 md:p-6">
                  <p className="flex items-center gap-1.5 text-xs text-fg-muted mb-2">
                    <CalendarDays size={13} />
                    {formatDate(post.date)}
                  </p>
                  <h2 className="font-display text-xl text-fg mb-2 group-hover:text-accent transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm text-fg-muted mb-4">
                    {post.metaDescription}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-accent">
                    Read article
                    <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
