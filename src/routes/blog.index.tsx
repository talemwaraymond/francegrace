import { createFileRoute, Link } from "@tanstack/react-router";
import { posts } from "@/data/posts";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Journal — Franceshgrace" },
      {
        name: "description",
        content:
          "Articles on wellness, supplementation, and the science behind Franceshgrace formulas.",
      },
      { property: "og:title", content: "Franceshgrace Journal" },
      { property: "og:description", content: "Notes on nature, science, and everyday wellness." },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  const [feature, ...rest] = posts;
  return (
    <div>
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Journal
          </span>
          <h1 className="mt-3 font-serif text-5xl md:text-6xl">Wellness, explained.</h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Notes on the ingredients, science, and rituals behind feeling better day to day.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <Link
          to="/blog/$slug"
          params={{ slug: feature.slug }}
          className="group grid grid-cols-1 overflow-hidden rounded-3xl border border-border bg-card transition-shadow hover:shadow-lg lg:grid-cols-2"
        >
          <div className="aspect-[4/3] overflow-hidden bg-muted lg:aspect-auto">
            <img
              src={feature.image}
              alt={feature.title}
              className="h-full w-full object-cover transition-transform group-hover:scale-105"
            />
          </div>
          <div className="flex flex-col justify-center p-8 md:p-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              {feature.category}
            </span>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl">{feature.title}</h2>
            <p className="mt-4 text-muted-foreground">{feature.excerpt}</p>
            <p className="mt-6 text-xs text-muted-foreground">
              {feature.date} · {feature.readMinutes} min read
            </p>
          </div>
        </Link>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((p) => (
            <Link
              key={p.slug}
              to="/blog/$slug"
              params={{ slug: p.slug }}
              className="group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                  {p.category}
                </span>
                <h3 className="mt-2 font-serif text-xl leading-snug">{p.title}</h3>
                <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{p.excerpt}</p>
                <p className="mt-4 text-xs text-muted-foreground">{p.date}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
