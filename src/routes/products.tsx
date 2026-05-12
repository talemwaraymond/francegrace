import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { products, categories, type Category } from "@/data/products";
import { ProductCard } from "@/components/site/ProductCard";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Franceshgrace Premium Wellness" },
      { name: "description", content: "Browse the full range of Franceshgrace wellness supplements across immunity, heart & brain, stress, sleep, fitness, beauty, and joint health." },
      { property: "og:title", content: "Products — Franceshgrace" },
      { property: "og:description", content: "Premium wellness supplements across 6 wellness categories." },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  const [active, setActive] = useState<Category | "All">("All");
  const filtered = active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <div>
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">All Products</span>
          <h1 className="mt-3 font-serif text-5xl md:text-6xl">Explore the collection</h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Nine carefully formulated supplements, organised by the wellness goal they support.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-2 border-b border-border pb-6">
          {(["All", ...categories] as const).map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                active === c ? "bg-primary text-primary-foreground" : "bg-accent text-accent-foreground hover:bg-primary/10"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => <ProductCard key={p.slug} product={p} />)}
        </div>
      </section>
    </div>
  );
}
