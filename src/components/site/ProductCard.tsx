import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      to="/products/$slug"
      params={{ slug: product.slug }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
    >
      <div className="aspect-square overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <span className="text-xs font-medium uppercase tracking-wider text-primary">
          {product.category}
        </span>
        <h3 className="mt-2 font-serif text-xl leading-tight text-foreground">{product.name}</h3>
        <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{product.short}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {product.benefits.slice(0, 2).map((b) => (
            <span key={b} className="rounded-full bg-accent px-2.5 py-0.5 text-xs text-accent-foreground">
              {b}
            </span>
          ))}
        </div>
        <div className="mt-5 flex items-center gap-1.5 text-sm font-medium text-primary">
          View product <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
