// src/components/layout/Breadcrumb.tsx
import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/seo";
import { BRAND } from "@/lib/constants";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  const allItems = [{ label: "Home", href: "/" }, ...items];
  const schemaItems = allItems.map((item) => ({
    name: item.label,
    url: `${BRAND.url}${item.href}`,
  }));

  return (
    <>
      <JsonLd data={breadcrumbSchema(schemaItems)} />
      <nav aria-label="Breadcrumb" className="py-4">
        <ol className="flex flex-wrap items-center gap-1.5 text-sm text-gray-500">
          {allItems.map((item, i) => (
            <li key={item.href} className="flex items-center gap-1.5">
              {i > 0 && (
                <svg
                  className="h-3.5 w-3.5 text-gray-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M9 6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
              {i === allItems.length - 1 ? (
                <span className="text-teal-700 font-medium" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="hover:text-orange-500 transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
