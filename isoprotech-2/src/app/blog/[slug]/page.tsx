// src/app/blog/[slug]/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPostBySlug, getRelatedPosts } from "@/content/blog";
import { BRAND } from "@/lib/constants";
import { blogPostSchema } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumb } from "@/components/layout/Breadcrumb";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = getBlogPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: post.seo.title,
    description: post.seo.description,
    alternates: { canonical: `${BRAND.url}/blog/${post.slug}` },
    openGraph: {
      title: post.seo.title,
      description: post.seo.description,
      url: `${BRAND.url}/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default function BlogArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) notFound();

  const related = getRelatedPosts(post.slug);

  return (
    <>
      <JsonLd
        data={blogPostSchema({
          title: post.title,
          description: post.seo.description,
          url: `${BRAND.url}/blog/${post.slug}`,
          datePublished: post.date,
          image: post.photo.src,
        })}
      />

      {/* Hero */}
      <section className="relative min-h-[380px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={post.photo.src}
            alt={post.photo.alt}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-teal-900/75" />
        <div className="relative container-wide py-28 text-center max-w-3xl mx-auto">
          <span className="mb-4 inline-block rounded-full bg-orange-500/15 border border-orange-500/20 px-4 py-1.5 text-sm font-semibold text-orange-300">
            {post.category}
          </span>
          <h1 className="text-3xl font-extrabold text-white md:text-4xl leading-tight mb-4">
            {post.title}
          </h1>
          <p className="text-white/50 text-sm">
            {post.dateDisplay} — {post.readTime} leestijd
          </p>
        </div>
      </section>

      <div className="container-wide">
        <Breadcrumb
          items={[
            { label: "Blog", href: "/blog" },
            { label: post.title, href: `/blog/${post.slug}` },
          ]}
        />
      </div>

      {/* Article body */}
      <article className="container-narrow py-12">
        {post.body.map((block, i) => {
          if (block.type === "heading") {
            return (
              <h2
                key={i}
                className="text-xl font-extrabold text-teal-800 mt-10 mb-4"
              >
                {block.content}
              </h2>
            );
          }
          return (
            <p
              key={i}
              className="text-gray-600 text-[16.5px] leading-[1.85] mb-5"
            >
              {block.content}
            </p>
          );
        })}

        {/* Inline CTA */}
        <div className="mt-14 rounded-2xl bg-teal-800 p-8 md:p-10 text-center">
          <h3 className="text-xl font-extrabold text-white mb-3">
            Klaar om te starten?
          </h3>
          <p className="text-white/60 mb-6">
            Vraag een gratis inspectie en vrijblijvende offerte aan.
          </p>
          <Link href="/contact" className="btn-primary">
            Gratis offerte aanvragen
          </Link>
        </div>

        {/* Related articles */}
        {related.length > 0 && (
          <div className="mt-14 pt-10 border-t border-gray-100">
            <h3 className="text-lg font-extrabold text-teal-800 mb-6">
              Gerelateerde artikels
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {related.map((rp) => (
                <Link
                  key={rp.id}
                  href={`/blog/${rp.slug}`}
                  className="group block rounded-xl bg-stone-50 border border-gray-100 p-5 transition-all hover:border-orange-200 hover:shadow-sm"
                >
                  <span className="text-xs font-bold text-orange-500">
                    {rp.category}
                  </span>
                  <h4 className="mt-1 font-bold text-teal-800 group-hover:text-orange-500 transition-colors leading-snug">
                    {rp.title}
                  </h4>
                  <p className="mt-2 text-sm text-gray-500">{rp.readTime}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </>
  );
}
