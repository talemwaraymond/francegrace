import { createFileRoute } from "@tanstack/react-router";
import { products } from "@/data/products";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Journal — Franceshgrace" },
      { name: "description", content: "Articles on wellness, supplementation, and the science behind Franceshgrace formulas." },
      { property: "og:title", content: "Franceshgrace Journal" },
      { property: "og:description", content: "Notes on nature, science, and everyday wellness." },
    ],
  }),
  component: BlogPage,
});

const posts = [
  { title: "The Science Behind Omega-3 and Cardiovascular Wellness", category: "Heart & Brain", excerpt: "How EPA and DHA work together to support heart, brain, and joint wellness — and what research tells us about effective dosing.", img: products[1].image, date: "May 2026" },
  { title: "Ashwagandha: Nature's Answer to Modern Stress", category: "Stress & Sleep", excerpt: "An adaptogen used for thousands of years, ashwagandha is having a modern moment. Here's why.", img: products[5].image, date: "May 2026" },
  { title: "Magnesium and the Science of Deep, Restorative Sleep", category: "Stress & Sleep", excerpt: "Three forms of magnesium, three different roles in your nightly recovery cycle.", img: products[3].image, date: "Apr 2026" },
  { title: "Daily Immune Support: What the Research Says", category: "Immune Support", excerpt: "Vitamin C, zinc, and elderberry — small daily habits that compound over time.", img: products[0].image, date: "Apr 2026" },
  { title: "Skin Wellness from Within: The Role of Nutrition", category: "Beauty & Skin", excerpt: "Glutathione, vitamin C, and the antioxidant network that keeps skin glowing.", img: products[2].image, date: "Mar 2026" },
  { title: "Joint Health Tips: Natural Support for Active Lifestyles", category: "Joint & Mobility", excerpt: "Boswellia, turmeric, and tart cherry — botanicals for moving comfortably for life.", img: products[8].image, date: "Mar 2026" },
];

function BlogPage() {
  const [feature, ...rest] = posts;
  return (
    <div>
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Journal</span>
          <h1 className="mt-3 font-serif text-5xl md:text-6xl">Wellness, explained.</h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Notes on the ingredients, science, and rituals behind feeling better day to day.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <article className="grid grid-cols-1 overflow-hidden rounded-3xl border border-border bg-card lg:grid-cols-2">
          <div className="aspect-[4/3] bg-muted lg:aspect-auto">
            <img src={feature.img} alt={feature.title} className="h-full w-full object-cover" />
          </div>
          <div className="flex flex-col justify-center p-8 md:p-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">{feature.category}</span>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl">{feature.title}</h2>
            <p className="mt-4 text-muted-foreground">{feature.excerpt}</p>
            <p className="mt-6 text-xs text-muted-foreground">{feature.date} · 5 min read</p>
          </div>
        </article>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((p) => (
            <article key={p.title} className="group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-lg">
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img src={p.img} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform group-hover:scale-105" />
              </div>
              <div className="p-5">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">{p.category}</span>
                <h3 className="mt-2 font-serif text-xl leading-snug">{p.title}</h3>
                <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{p.excerpt}</p>
                <p className="mt-4 text-xs text-muted-foreground">{p.date}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
