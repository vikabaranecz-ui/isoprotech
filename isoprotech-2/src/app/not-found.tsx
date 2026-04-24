// src/app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <span className="text-7xl font-black text-orange-400/20 block mb-4">404</span>
        <h1 className="text-2xl font-extrabold text-teal-800 mb-3">
          Pagina niet gevonden
        </h1>
        <p className="text-gray-600 mb-8">
          Deze pagina bestaat niet of is verplaatst. Gebruik het menu of ga
          terug naar de homepagina.
        </p>
        <Link href="/" className="btn-primary">
          Terug naar home
        </Link>
      </div>
    </section>
  );
}
