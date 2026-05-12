import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Check, Leaf, Send, ArrowLeft } from "lucide-react";
import { getProduct, relatedProducts, type Product } from "@/data/products";
import { ProductCard } from "@/components/site/ProductCard";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }): { product: Product } => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.product;
    if (!p) return { meta: [{ title: "Product not found — Franceshgrace" }] };
    return {
      meta: [
        { title: `${p.name} — Franceshgrace` },
        { name: "description", content: p.short },
        { property: "og:title", content: `${p.name} — Franceshgrace` },
        { property: "og:description", content: p.short },
        { property: "og:image", content: p.image },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-4 py-24 text-center">
      <h1 className="font-serif text-4xl">Product not found</h1>
      <Link to="/products" className="mt-6 inline-flex items-center gap-2 text-primary hover:underline">
        <ArrowLeft className="h-4 w-4" /> Back to all products
      </Link>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="mx-auto max-w-3xl px-4 py-24 text-center">
      <h1 className="font-serif text-3xl">Something went wrong</h1>
      <p className="mt-3 text-muted-foreground">{error.message}</p>
    </div>
  ),
  component: ProductDetail,
});

function ProductDetail() {
  const { product } = Route.useLoaderData();
  const related = relatedProducts(product.slug, product.category);

  return (
    <div>
      {/* HERO */}
      <section className="bg-cream">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 py-12 sm:px-6 md:py-20 lg:grid-cols-2 lg:px-8">
          <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-accent to-cream p-6 shadow-lg">
            <img src={product.image} alt={product.name} className="mx-auto h-auto w-full max-w-md object-contain" />
          </div>
          <div className="flex flex-col justify-center">
            <Link to="/products" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary">
              <ArrowLeft className="h-4 w-4" /> All products
            </Link>
            <span className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">{product.category}</span>
            <h1 className="mt-3 font-serif text-4xl leading-tight md:text-5xl">{product.name}</h1>
            <p className="mt-4 text-lg text-muted-foreground">{product.tagline}</p>
            <p className="mt-1 text-sm text-foreground/70">{product.size}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {product.benefits.map((b) => (
                <span key={b} className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1.5 text-sm text-primary">
                  <Check className="h-3.5 w-3.5" /> {b}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/distributors" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-emerald-deep">
                Send Inquiry <Send className="h-4 w-4" />
              </Link>
              <a href="https://wa.me/10000000000" target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-full border border-foreground/15 px-6 py-3 text-sm font-medium hover:bg-foreground/5">
                WhatsApp Distributor
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl md:text-4xl">Overview</h2>
        <div className="mt-6 space-y-4 text-lg leading-relaxed text-foreground/80">
          {product.description.map((p, i) => <p key={i}>{p}</p>)}
        </div>
      </section>

      {/* SUPPLEMENT FACTS */}
      <section className="mx-auto max-w-3xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="rounded-2xl border-2 border-foreground bg-card p-6 shadow-sm">
          <h3 className="font-serif text-2xl uppercase tracking-tight">Supplement Facts</h3>
          <p className="mt-1 text-xs text-muted-foreground">Serving size: as directed</p>
          <div className="mt-4 border-t-4 border-double border-foreground" />
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-foreground">
                <th className="py-2 text-left font-semibold">Ingredient</th>
                <th className="py-2 text-right font-semibold">Amount Per Serving</th>
              </tr>
            </thead>
            <tbody>
              {product.facts.map((f, i) => (
                <tr key={i} className={i % 2 ? "bg-accent/40" : ""}>
                  <td className="py-2.5 pl-1">{f.label}</td>
                  <td className="py-2.5 pr-1 text-right font-medium">{f.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* KEY INGREDIENTS */}
      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl">Key Ingredients</h2>
          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
            {product.ingredients.map((ing) => (
              <div key={ing.name} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <Leaf className="h-6 w-6 text-primary" />
                <h3 className="mt-3 font-serif text-xl">{ing.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{ing.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl md:text-4xl">Key Benefits</h2>
        <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
          {product.benefits.map((b) => (
            <div key={b} className="flex items-center gap-3 rounded-xl border border-border bg-card p-4">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Check className="h-5 w-5" />
              </span>
              <span className="font-medium">{b}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SUGGESTED USE + DISCLAIMER */}
      <section className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-emerald-deep p-8 text-cream">
          <h3 className="font-serif text-2xl text-gold">Suggested Use</h3>
          <p className="mt-3 text-cream/90">{product.use}</p>
        </div>
        <p className="mt-6 text-sm italic text-muted-foreground">
          These statements have not been evaluated by health authorities. This product is not
          intended to diagnose, treat, cure, or prevent any disease.
        </p>
      </section>

      {/* RELATED */}
      {related.length > 0 && (
        <section className="bg-cream">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl md:text-4xl">You may also like</h2>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => <ProductCard key={p.slug} product={p} />)}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
