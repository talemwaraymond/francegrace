import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Heart, Leaf, Brain, Moon, Sparkles, Dumbbell, Smile, ShieldCheck } from "lucide-react";
import { products, categories, type Category } from "@/data/products";
import { ProductCard } from "@/components/site/ProductCard";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products & Ingredients — Franceshgrace Premium Wellness" },
      {
        name: "description",
        content:
          "Browse the full range of Franceshgrace wellness supplements and the science-backed ingredients inside them.",
      },
      { property: "og:title", content: "Products & Ingredients — Franceshgrace" },
      {
        property: "og:description",
        content:
          "Premium wellness supplements and the carefully selected ingredients that power them.",
      },
    ],
  }),
  component: ProductsPage,
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
  const [active, setActive] = useState<Category | "All">("All");
  const filtered = active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <div>
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Products & Ingredients
          </span>
          <h1 className="mt-3 font-serif text-5xl md:text-6xl">Explore the collection</h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Nine carefully formulated supplements, organised by the wellness goal they support —
            powered by science-backed botanicals, vitamins, and minerals.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <a
              href="#catalogue"
              className="rounded-full bg-primary px-5 py-2 font-medium text-primary-foreground hover:bg-emerald-deep"
            >
              Browse Products
            </a>
            <a
              href="#ingredients"
              className="rounded-full border border-foreground/15 px-5 py-2 font-medium text-foreground hover:bg-foreground/5"
            >
              Key Ingredients
            </a>
          </div>
        </div>
      </section>

      <section id="catalogue" className="mx-auto max-w-7xl px-4 pb-20 pt-10 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-2 border-b border-border pb-6">
          {(["All", ...categories] as const).map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                active === c
                  ? "bg-primary text-primary-foreground"
                  : "bg-accent text-accent-foreground hover:bg-primary/10"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      <section id="ingredients" className="bg-cream scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Key Ingredients
            </span>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl">
              The building blocks of wellness.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Every formula is built around ingredients with a long tradition of use and a modern
              evidence base. Here are the headliners you'll find across our range.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {keyIngredients.map((i) => (
              <div
                key={i.name}
                className="rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-md"
              >
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
