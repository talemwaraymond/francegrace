import { X, Check, ExternalLink } from "lucide-react";
import { Link } from "@tanstack/react-router";
import type { Product } from "@/data/products";

export function ProductDetailPanel({
  product,
  onClose,
}: {
  product: Product;
  onClose: () => void;
}) {
  return (
    <div
      id={`detail-${product.slug}`}
      className="fade-in-up mt-6 overflow-hidden rounded-3xl border border-border bg-card shadow-xl ring-1 ring-border/50"
    >
      <div className="grid grid-cols-1 gap-0 md:grid-cols-[280px,1fr]">
        {/* Image rail */}
        <div className="relative flex items-center justify-center bg-gradient-to-br from-accent via-cream to-amber-50 p-6 md:p-8">
          <img
            src={product.image}
            alt={product.name}
            className="h-auto max-h-[280px] w-full max-w-[220px] object-contain drop-shadow-lg"
          />
        </div>

        {/* Content */}
        <div className="relative p-6 md:p-8">
          <button
            onClick={onClose}
            aria-label="Close details"
            className="absolute right-4 top-4 rounded-full bg-muted p-1.5 text-foreground/70 transition-colors hover:bg-foreground hover:text-background"
          >
            <X className="h-4 w-4" />
          </button>

          <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-primary">
            {product.category}
          </span>
          <h3 className="mt-2 font-serif text-2xl leading-tight text-foreground md:text-3xl">
            {product.name}
          </h3>
          <p className="mt-1 text-sm italic text-muted-foreground">{product.tagline}</p>

          <div className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
            {product.description.map((d, i) => (
              <p key={i}>{d}</p>
            ))}
          </div>

          {/* Benefits grid */}
          <div className="mt-6">
            <h4 className="font-serif text-base text-foreground">Key Benefits</h4>
            <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {product.benefits.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-2 rounded-lg border border-border/60 bg-muted/40 px-3 py-2 text-sm text-foreground"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {b}
                </li>
              ))}
            </ul>
          </div>

          {/* Supplement Facts — nutrition label styling */}
          <div className="mt-6 overflow-hidden rounded-lg border-2 border-foreground">
            <div className="bg-foreground px-4 py-2">
              <p className="font-serif text-base font-bold uppercase tracking-wide text-background">
                Supplement Facts
              </p>
              <p className="text-[10px] uppercase tracking-wider text-background/80">
                Serving Size: {product.size}
              </p>
            </div>
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-foreground bg-muted">
                  <th className="px-3 py-1.5 text-left text-[11px] font-semibold uppercase tracking-wider text-foreground">
                    Ingredient
                  </th>
                  <th className="px-3 py-1.5 text-right text-[11px] font-semibold uppercase tracking-wider text-foreground">
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody>
                {product.facts.map((f, i) => (
                  <tr
                    key={f.label + i}
                    className={`border-b border-border ${i % 2 ? "bg-muted/40" : ""}`}
                  >
                    <td className="px-3 py-1.5 text-foreground">{f.label}</td>
                    <td className="px-3 py-1.5 text-right font-medium tabular-nums text-foreground">
                      {f.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Suggested use */}
          <div className="mt-5 rounded-lg bg-emerald-deep/5 p-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">
              Suggested Use
            </p>
            <p className="mt-1 text-sm text-foreground">{product.use}</p>
          </div>

          {/* Actions */}
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/products/$slug"
              params={{ slug: product.slug }}
              className="inline-flex items-center gap-2 rounded-full border border-foreground/15 px-5 py-2.5 text-sm font-medium text-foreground hover:bg-foreground/5"
            >
              Full product page <ExternalLink className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Disclaimer */}
          <p className="mt-5 text-[11px] italic leading-relaxed text-muted-foreground">
            These statements have not been evaluated by health authorities. This product is not
            intended to diagnose, treat, cure, or prevent any disease.
          </p>
        </div>
      </div>
    </div>
  );
}
