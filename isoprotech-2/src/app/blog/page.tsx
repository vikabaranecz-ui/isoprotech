// src/app/blog/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/content/blog";
import { BRAND } from "@/lib/constants";
import { Breadcrumb } from "@/components/layout/Breadcrumb";

export const metadata: Metadata = {
  title: "Blog — Tips & Advies over Isolatie",
  description: "Tips, advies en nieuws over dakisolatie, gevelisolatie, crepi, premies en energiebesparing. ISOPROTECH Blog.",
  alternates: { canonical: `${BRAND.url}/blog` },
};

export default function BlogPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-teal-800 to-teal-600 py-28">
        <div className="container-wide text-center max-w-3xl mx-auto">
          <span className="mb-4 inline-block rounded-full bg-orange-400/15 border border-orange-400/20 px-5 py-2 text-sm font-semibold text-orange-300">
            Blog
          </span>
          <h1 className="text-4xl font-extrabold text-white md:text-5xl mb-6">
            Tips, advies en nieuws
          </h1>
          <p className="text-lg text-white/60">
            Blijf op de hoogte van de laatste trends, premies en technische
            inzichten rond dak- en gevelisolatie in België.
          </p>
        </div>
      </section>

      <div className="container-wide">
        <Breadcrumb items={[{ label: "Blog", href: "/blog" }]} />
      </div>

      <section className="container-wide py-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="card-hover group block overflow-hidden"
            >
              <div className="relative h-52">
                <Image
                  src={post.photo.src}
                  alt={post.photo.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width:640px)100vw,(max-width:1024px)50vw,33vw"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-bold text-orange-400 bg-orange-400/10 px-2.5 py-1 rounded-md">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-400">{post.readTime}</span>
                </div>
                <h2 className="font-bold text-teal-800 leading-snug group-hover:text-orange-400 transition-colors mb-2">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {post.excerpt}
                </p>
                <span className="mt-4 inline-block text-sm font-semibold text-orange-400">
                  Lees meer →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
