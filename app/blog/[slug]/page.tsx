import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { CalendarDays, ChevronRight, User } from "lucide-react";
import { blogs, getBlog } from "@/data/blogs";
import { BRAND, categories } from "@/data/product";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return blogs.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlog(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.metaDescription,
    keywords: post.keywords,
    alternates: { canonical: `${BRAND.baseUrl}/blog/${post.slug}` },
    openGraph: {
      title: `${post.title} | Ganesh Shawl Emporium`,
      description: post.metaDescription,
      url: `${BRAND.baseUrl}/blog/${post.slug}`,
      type: "article",
      images: [
        {
          url: `${BRAND.baseUrl}${post.image}`,
        },
      ],
    },
  };
}

function renderInline(text: string) {
  const nodes: React.ReactNode[] = [];
  const regex = /\[([^\]]+)\]\((\/[^)]+)\)/g;
  let last = 0;
  let key = 0;
  let match: RegExpExecArray | null;
  while ((match = regex.exec(text)) !== null) {
    if (match.index > last) {
      nodes.push(text.slice(last, match.index));
    }
    nodes.push(
      <Link
        key={key++}
        href={match[2]}
        className="text-accent font-medium hover:underline transition-colors"
      >
        {match[1]}
      </Link>,
    );
    last = match.index + match[0].length;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlog(slug);
  if (!post) notFound();

  const postUrl = `${BRAND.baseUrl}/blog/${post.slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        headline: post.title,
        description: post.metaDescription,
        image: `${BRAND.baseUrl}${post.image}`,
        datePublished: post.date,
        dateModified: post.date,
        author: { "@type": "Organization", name: BRAND.name },
        publisher: { "@type": "Organization", name: BRAND.name },
        mainEntityOfPage: postUrl,
        keywords: post.keywords.join(", "),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: BRAND.baseUrl },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${BRAND.baseUrl}/blog` },
          { "@type": "ListItem", position: 3, name: post.title, item: postUrl },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: post.faqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      },
    ],
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <section className="pt-24 md:pt-36 pb-10 md:pb-14 bg-bg-soft">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <nav aria-label="Breadcrumb" className="text-sm text-fg-muted mb-6">
            <ol className="flex flex-wrap items-center gap-1.5">
              <li>
                <Link href="/" className="hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <ChevronRight size={14} className="text-fg/30" />
              <li>
                <Link href="/blog" className="hover:text-accent transition-colors">
                  Blog
                </Link>
              </li>
              <ChevronRight size={14} className="text-fg/30" />
              <li className="text-fg" aria-current="page">
                {post.title}
              </li>
            </ol>
          </nav>
          <h1 className="font-display text-3xl md:text-5xl text-fg mb-5">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-fg-muted mb-8">
            <span className="flex items-center gap-1.5">
              <CalendarDays size={14} />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-1.5">
              <User size={14} />
              {post.author}
            </span>
          </div>
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden">
            <Image
              src={post.image}
              alt={post.imageAlt}
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <article className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          {post.intro.map((p, i) => (
            <p key={i} className="text-lg text-fg-muted leading-relaxed mb-6">
              {renderInline(p)}
            </p>
          ))}

          {post.sections.map((section) => (
            <section key={section.heading} className="mt-10">
              <h2 className="font-display text-2xl md:text-3xl text-fg mb-4">
                {section.heading}
              </h2>
              {section.paragraphs?.map((p, i) => (
                <p key={i} className="text-fg-muted leading-relaxed mb-4">
                  {renderInline(p)}
                </p>
              ))}
              {section.table && (
                <div className="overflow-x-auto rounded-xl border border-line my-6">
                  <table className="w-full text-sm min-w-[640px]">
                    <thead>
                      <tr className="bg-bg-soft text-left">
                        {section.table.headers.map((h) => (
                          <th
                            key={h}
                            className="px-4 py-3 font-semibold text-fg border-b border-line"
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {section.table.rows.map((row, ri) => (
                        <tr key={ri} className="border-b border-line last:border-0">
                          {row.map((cell, ci) => (
                            <td
                              key={ci}
                              className={`px-4 py-3 align-top ${
                                ci === 0 ? "font-medium text-fg" : "text-fg-muted"
                              }`}
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
              {section.bullets && (
                <ul className="space-y-3 mb-4">
                  {section.bullets.map((b, i) => (
                    <li key={i} className="flex gap-3 text-fg-muted leading-relaxed">
                      <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                      <span>{renderInline(b)}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          <section className="mt-14">
            <h2 className="font-display text-2xl md:text-3xl text-fg mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {post.faqs.map((f) => (
                <div
                  key={f.question}
                  className="rounded-xl border border-line bg-white p-5"
                >
                  <h3 className="font-medium text-fg mb-2">{f.question}</h3>
                  <p className="text-sm text-fg-muted leading-relaxed">
                    {f.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <div className="mt-14 pt-8 border-t border-line">
            <h2 className="font-display text-xl text-fg mb-4">
              Browse related collections
            </h2>
            <div className="flex flex-wrap gap-3">
              {categories.map((c) => (
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
        </div>
      </article>
    </div>
  );
}
