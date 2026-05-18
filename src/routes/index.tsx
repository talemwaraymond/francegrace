import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Leaf } from "lucide-react";
import { HeroProductShowcase } from "@/components/site/HeroProductShowcase";
import { ProductScrollStrip } from "@/components/site/ProductScrollStrip";
import { LifestyleSection } from "@/components/site/LifestyleSection";
import { HexCategories } from "@/components/site/HexCategories";
import { products } from "@/data/products";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Franceshgrace — Premium Wellness, Crafted with Intention" },
      { name: "description", content: "Premium wellness supplements with carefully selected ingredients and modern formulations. Wellness backed by nature and science." },
      { property: "og:title", content: "Franceshgrace — Premium Wellness, Crafted with Intention" },
      { property: "og:description", content: "Carefully selected ingredients, modern formulations, and a commitment to quality." },
    ],
  }),
  component: HomePage,
});

const stats = [
  { value: "10+", label: "Product Formulas" },
  { value: "30+", label: "Wellness Categories" },
  { value: "100%", label: "Quality Assured" },
];

function HomePage() {
  // Single shared "open product" state across both inline-panel sections.
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden bg-cream">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div className="fade-in-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
              <Leaf className="h-4 w-4" /> Wellness Backed by Nature & Science
            </span>
            <h1 className="mt-6 font-serif text-5xl leading-[1.05] text-balance sm:text-6xl md:text-7xl">
              Premium wellness, <span className="italic text-gold">crafted</span> with intention.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Carefully selected ingredients, modern formulations, and a commitment to quality —
              for everyday people who care how they feel.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/products" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:bg-emerald-deep hover:shadow-md">
                Explore Products <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/about" className="inline-flex items-center rounded-full border border-foreground/15 bg-transparent px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5">
                Our Story
              </Link>
            </div>
          </div>

          <HeroProductShowcase />
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-8 px-4 py-10 sm:px-6 md:grid-cols-4 lg:px-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-serif text-3xl text-gold md:text-4xl">{s.value}</p>
              <p className="mt-1 text-sm text-cream/80">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCT SCROLL STRIP */}
      <ProductScrollStrip openSlug={openSlug} setOpenSlug={setOpenSlug} />

      {/* LIFESTYLE FEATURE — replaces old Why section */}
      <LifestyleSection openSlug={openSlug} setOpenSlug={setOpenSlug} />

      {/* OUR CATEGORIES — honeycomb */}
      <HexCategories />

      {/* BLOG PREVIEW */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Journal</span>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl">Wellness, explained.</h2>
          </div>
          <Link to="/blog" className="hidden text-sm font-medium text-primary hover:underline md:inline-flex">
            View all →
          </Link>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            { slug: "omega-3-and-cardiovascular-wellness", t: "The Science Behind Omega-3 and Cardiovascular Wellness", c: "Heart & Brain", img: products[1].image },
            { slug: "ashwagandha-modern-stress", t: "Ashwagandha: Nature's Answer to Modern Stress", c: "Stress & Sleep", img: products[5].image },
            { slug: "magnesium-deep-sleep", t: "Magnesium and the Science of Deep, Restorative Sleep", c: "Stress & Sleep", img: products[3].image },
          ].map((b) => (
            <Link key={b.slug} to="/blog/$slug" params={{ slug: b.slug }} className="group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-lg">
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img src={b.img} alt={b.t} loading="lazy" className="h-full w-full object-cover transition-transform group-hover:scale-105" />
              </div>
              <div className="p-5">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">{b.c}</span>
                <h3 className="mt-2 font-serif text-xl leading-snug">{b.t}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
