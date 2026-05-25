import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useSuspenseQuery } from "@tanstack/react-query";
import { Heart, Leaf, Brain, Moon, Sparkles, Dumbbell, Smile, ShieldCheck } from "lucide-react";
import { ProductCard } from "@/components/site/ProductCard";
import { productsQueryOptions } from "@/lib/queries";

export const Route = createFileRoute("/products/")({
  loader: ({ context }) => context.queryClient.ensureQueryData(productsQueryOptions),
  head: () => ({
    meta: [
      { title: "FSG Products — Premium Wellness Supplements | Franceshgrace" },
      { name: "description", content: "Browse all FSG wellness supplements — Omega-3, Elderberry, Ashwagandha, Magnesium, Fat Burner, Maca, Skin Whitening Caps and more. Quality formulations for daily wellness." },
      { name: "keywords", content: "FSG products, Franceshgrace supplements, wellness supplements, Ashwagandha, Omega-3, Magnesium, Elderberry" },
      { property: "og:title", content: "FSG Products — Premium Wellness Supplements" },
      { property: "og:description", content: "Browse all FSG wellness supplements designed for daily wellness." },
      { property: "og:url", content: "https://www.franceshgrace.com/products" },
    ],
    links: [{ rel: "canonical", href: "https://www.franceshgrace.com/products" }],
  }),
  component: ProductsPage,
  errorComponent: ({ error }) => { console.error(error); return <div className="mx-auto max-w-3xl px-4 py-24 text-center"><h1 className="font-serif text-3xl">Couldn't load products</h1><p className="mt-3 text-muted-foreground">Please refresh the page in a moment.</p></div>; },
});

const keyIngredients = [
  { icon: Heart, name: "Omega-3 (EPA & DHA)", desc: "Essential fatty acids for heart, brain, and joint wellness." },
  { icon: Leaf, name: "Elderberry Extract", desc: "Flavonoid-rich berry traditionally used for daily immune support." },
  { icon: Brain, name: "Ashwagandha", desc: "Adaptogenic herb for stress resilience, mood, and steady vitality." },
  { icon: Moon, name: "Magnesium Complex", desc: "Glycinate, citrate & malate for sleep, calm, and muscle recovery." },
  { icon: Sparkles, name: "L-Glutathione", desc: "Master antioxidant supporting skin radiance and cellular protection." },
  { icon: Dumbbell, name: "Organic Maca Root", desc: "Andean superfood used for stamina, vitality, and hormonal balance." },
  { icon: Smile, name: "Turmeric & Boswellia", desc: "Botanical pair traditionally used for joint comfort and mobility." },
  { icon: ShieldCheck, name: "Vitamin C & Zinc", desc: "Foundational nutrients that support immune cell function." },
];

function ProductsPage() {
  const { data: products } = useSuspenseQuery(productsQueryOptions);
  const categories = Array.from(new Set(products.map((p) => p.category)));
  const [active, setActive] = useState<string>("All");
  const filtered = active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <div>
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Products & Ingredients</span>
          <h1 className="mt-3 font-serif text-5xl md:text-6xl">Explore the collection</h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">Carefully formulated supplements, organised by the wellness goal they support — powered by science-backed botanicals, vitamins, and minerals.</p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <a href="#catalogue" className="rounded-full bg-primary px-5 py-2 font-medium text-primary-foreground hover:bg-emerald-deep">Browse Products</a>
            <a href="#ingredients" className="rounded-full border border-foreground/15 px-5 py-2 font-medium text-foreground hover:bg-foreground/5">Key Ingredients</a>
          </div>
        </div>
      </section>
      <section id="catalogue" className="mx-auto max-w-7xl px-4 pb-20 pt-10 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-2 border-b border-border pb-6">
          {(["All", ...categories]).map((c) => (
            <button key={c} onClick={() => setActive(c)} className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${active === c ? "bg-primary text-primary-foreground" : "bg-accent text-accent-foreground hover:bg-primary/10"}`}>{c}</button>
          ))}
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => <ProductCard key={p.slug} product={p} />)}
        </div>
      </section>
      <section id="ingredients" className="bg-cream scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Key Ingredients</span>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl">The building blocks of wellness.</h2>
            <p className="mt-4 text-muted-foreground">Every formula is built around ingredients with a long tradition of use and a modern evidence base.</p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {keyIngredients.map((i) => (
              <div key={i.name} className="rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-md">
                <i.icon className="h-7 w-7 text-primary" />
                <p className="mt-4 font-serif text-lg text-foreground">{i.name}</p>
                <p className="mt-2 text-sm text-muted-foreground">{i.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
