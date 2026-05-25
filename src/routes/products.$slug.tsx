import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useSuspenseQuery, queryOptions } from "@tanstack/react-query";
import { Check, Leaf, ArrowLeft } from "lucide-react";
import { ProductCard } from "@/components/site/ProductCard";
import { listProducts } from "@/lib/site.functions";
import { productImage } from "@/data/imageMap";
import type { ProductDTO } from "@/lib/types";

const productsQO = queryOptions({
  queryKey: ["products"],
  queryFn: () => listProducts(),
  staleTime: 60_000,
});

export const Route = createFileRoute("/products/$slug")({
  loader: async ({ context, params }) => {
    const products = await context.queryClient.ensureQueryData(productsQO);
    const product = products.find((p) => p.slug === params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData, params }) => {
    const p = loaderData?.product;
    if (!p) return { meta: [{ title: "Product not found — Franceshgrace" }] };
    const url = `https://www.franceshgrace.com/products/${params.slug}`;
    return {
      meta: [
        { title: `${p.name} — Franceshgrace` },
        { name: "description", content: p.short },
        { property: "og:title", content: `${p.name} — Franceshgrace` },
        { property: "og:description", content: p.short },
        { property: "og:url", content: url },
        { property: "og:type", content: "product" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: p.name,
            description: p.short,
            brand: { "@type": "Brand", name: "Franceshgrace" },
            category: p.category,
          }),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-4 py-24 text-center">
      <h1 className="font-serif text-4xl">Product not found</h1>
      <Link to="/products" className="mt-6 inline-flex items-center gap-2 text-primary hover:underline"><ArrowLeft className="h-4 w-4" /> Back to all products</Link>
    </div>
  ),
  errorComponent: ({ error }) => {
    console.error(error);
    return (
      <div className="mx-auto max-w-3xl px-4 py-24 text-center">
        <h1 className="font-serif text-3xl">Something went wrong</h1>
        <p className="mt-3 text-muted-foreground">Please refresh the page in a moment.</p>
      </div>
    );
  },
  component: ProductDetail,
});

function ProductDetail() {
  const { data: products } = useSuspenseQuery(productsQO);
  const { product } = Route.useLoaderData() as { product: ProductDTO };
  const related = products.filter((p) => p.slug !== product.slug && p.category === product.category).slice(0, 3);
  const img = productImage(product.image_key);

  return (
    <div>
      <section className="bg-cream">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 py-12 sm:px-6 md:py-20 lg:grid-cols-2 lg:px-8">
          <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-accent to-cream p-6 shadow-lg">
            <img src={img} alt={`Franceshgrace ${product.name}`} className="mx-auto h-auto w-full max-w-md object-contain" />
          </div>
          <div className="flex flex-col justify-center">
            <Link to="/products" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary"><ArrowLeft className="h-4 w-4" /> All products</Link>
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
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl md:text-4xl">Overview</h2>
        <div className="mt-6 space-y-4 text-lg leading-relaxed text-foreground/80">
          {product.description.map((p, i) => <p key={i}>{p}</p>)}
        </div>
      </section>
      <section className="mx-auto max-w-3xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="rounded-2xl border-2 border-foreground bg-card p-6 shadow-sm">
          <h3 className="font-serif text-2xl uppercase tracking-tight">Supplement Facts</h3>
          <p className="mt-1 text-xs text-muted-foreground">Serving size: as directed</p>
          <div className="mt-4 border-t-4 border-double border-foreground" />
          <table className="w-full text-sm">
            <thead><tr className="border-b-2 border-foreground"><th className="py-2 text-left font-semibold">Ingredient</th><th className="py-2 text-right font-semibold">Amount Per Serving</th></tr></thead>
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
      {product.support && product.support.length > 0 && (
        <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl">How the Ingredients Support Your Wellness</h2>
          <div className="mt-8 space-y-6">
            {product.support.map((s) => (
              <div key={s.ingredient} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h3 className="font-serif text-xl text-primary">{s.ingredient}</h3>
                <p className="mt-2 text-foreground/80">{s.detail}</p>
                {s.bullets && (
                  <ul className="mt-3 grid grid-cols-1 gap-1.5 sm:grid-cols-2">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-foreground/80">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" /><span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>
      )}
      <section className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-emerald-deep p-8 text-cream">
          <h3 className="font-serif text-2xl text-gold">Suggested Use</h3>
          <p className="mt-3 text-cream/90">{product.use}</p>
        </div>
        <p className="mt-6 text-sm italic text-muted-foreground">These statements have not been evaluated by health authorities. This product is not intended to diagnose, treat, cure, or prevent any disease.</p>
      </section>
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
