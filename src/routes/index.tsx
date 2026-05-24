import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { useSuspenseQuery } from "@tanstack/react-query";
import { ArrowRight, Leaf } from "lucide-react";
import { HeroProductShowcase } from "@/components/site/HeroProductShowcase";
import { ProductScrollStrip } from "@/components/site/ProductScrollStrip";
import { LifestyleSection } from "@/components/site/LifestyleSection";
import { HexCategories } from "@/components/site/HexCategories";
import { productsQueryOptions, postsQueryOptions } from "@/lib/queries";
import { productImage } from "@/data/imageMap";

export const Route = createFileRoute("/")({
  loader: async ({ context }) => {
    await Promise.all([
      context.queryClient.ensureQueryData(productsQueryOptions),
      context.queryClient.ensureQueryData(postsQueryOptions),
    ]);
  },
  head: () => ({
    meta: [
      { title: "Franceshgrace — Premium Wellness Supplements | Natural & Science-Backed" },
      { name: "description", content: "Franceshgrace (FSG) offers premium wellness supplements including Omega-3, Ashwagandha, Magnesium, Elderberry and more. Trusted wellness brand across Africa. Shop now at franceshgrace.com" },
      { name: "keywords", content: "Franceshgrace, FSG supplements, wellness supplements Uganda, Ashwagandha capsules Africa, Omega-3 supplements, Magnesium complex, premium supplements Africa" },
      { property: "og:title", content: "Franceshgrace — Premium Wellness Supplements" },
      { property: "og:description", content: "Premium nutritional supplements designed to support immunity, vitality, beauty, performance and overall wellness." },
      { property: "og:url", content: "https://www.franceshgrace.com/" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://www.franceshgrace.com/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Franceshgrace",
        alternateName: "FSG Wellness",
        url: "https://www.franceshgrace.com",
        description: "Premium wellness supplement brand offering science-backed nutritional supplements across Africa.",
      }),
    }],
  }),
  errorComponent: ({ error }) => <div className="mx-auto max-w-3xl px-4 py-24 text-center"><h1 className="font-serif text-3xl">Something went wrong</h1><p className="mt-3 text-muted-foreground">{error.message}</p></div>,
  component: HomePage,
});

const stats = [
  { value: "30+", label: "Product Formulas" },
  { value: "8", label: "Wellness Categories" },
  { value: "100%", label: "Quality Assured" },
];

function HomePage() {
  const { data: posts } = useSuspenseQuery(postsQueryOptions);
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const featuredPosts = posts.slice(0, 3);

  return (
    <div>
      <section className="relative overflow-hidden bg-cream">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div className="fade-in-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
              <Leaf className="h-4 w-4" /> Wellness Backed by Nature & Science
            </span>
            <h1 className="mt-6 font-serif text-5xl leading-[1.05] text-balance sm:text-6xl md:text-7xl">
              Premium wellness, <span className="italic text-gold">crafted</span> with intention.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">Carefully selected ingredients, modern formulations, and a commitment to quality — for everyday people who care how they feel.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/products" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:bg-emerald-deep hover:shadow-md">Explore Products <ArrowRight className="h-4 w-4" /></Link>
              <Link to="/about" className="inline-flex items-center rounded-full border border-foreground/15 bg-transparent px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5">Our Story</Link>
            </div>
          </div>
          <HeroProductShowcase />
        </div>
      </section>
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-8 px-4 py-10 sm:px-6 md:grid-cols-3 lg:px-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-serif text-3xl text-gold md:text-4xl">{s.value}</p>
              <p className="mt-1 text-sm text-cream/80">{s.label}</p>
            </div>
          ))}
        </div>
      </section>
      <ProductScrollStrip openSlug={openSlug} setOpenSlug={setOpenSlug} />
      <LifestyleSection openSlug={openSlug} setOpenSlug={setOpenSlug} />
      <HexCategories />
      {featuredPosts.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Journal</span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl">Wellness, explained.</h2>
            </div>
            <Link to="/blog" className="hidden text-sm font-medium text-primary hover:underline md:inline-flex">View all →</Link>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {featuredPosts.map((b) => (
              <Link key={b.slug} to="/blog/$slug" params={{ slug: b.slug }} className="group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-lg">
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img src={productImage(b.image_key)} alt={`Franceshgrace ${b.title}`} loading="lazy" className="h-full w-full object-cover transition-transform group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">{b.category}</span>
                  <h3 className="mt-2 font-serif text-xl leading-snug">{b.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
