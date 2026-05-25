import { createFileRoute, Link } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { postsQueryOptions } from "@/lib/queries";
import { productImage } from "@/data/imageMap";

export const Route = createFileRoute("/blog/")({
  loader: ({ context }) => context.queryClient.ensureQueryData(postsQueryOptions),
  head: () => ({
    meta: [
      { title: "Journal — Franceshgrace Wellness Articles" },
      { name: "description", content: "Articles on wellness, supplementation, and the science behind Franceshgrace formulas — Omega-3, Ashwagandha, Magnesium and more." },
      { property: "og:title", content: "Franceshgrace Journal" },
      { property: "og:description", content: "Notes on nature, science, and everyday wellness." },
      { property: "og:url", content: "https://www.franceshgrace.com/blog" },
    ],
    links: [{ rel: "canonical", href: "https://www.franceshgrace.com/blog" }],
  }),
  errorComponent: ({ error }) => { console.error(error); return <div className="mx-auto max-w-3xl px-4 py-24 text-center"><h1 className="font-serif text-3xl">Couldn't load articles</h1><p className="mt-3 text-muted-foreground">Please refresh the page in a moment.</p></div>; },
  component: BlogPage,
});

function BlogPage() {
  const { data: posts } = useSuspenseQuery(postsQueryOptions);
  if (posts.length === 0) {
    return <div className="mx-auto max-w-3xl px-4 py-24 text-center"><h1 className="font-serif text-3xl">Articles coming soon</h1></div>;
  }
  const [feature, ...rest] = posts;
  return (
    <div>
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Journal</span>
          <h1 className="mt-3 font-serif text-5xl md:text-6xl">Wellness, explained.</h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">Notes on the ingredients, science, and rituals behind feeling better day to day.</p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <Link to="/blog/$slug" params={() => ({ slug: feature.slug })} className="group grid grid-cols-1 overflow-hidden rounded-3xl border border-border bg-card transition-shadow hover:shadow-lg lg:grid-cols-2">
          <div className="aspect-[4/3] overflow-hidden bg-muted lg:aspect-auto">
            <img src={productImage(feature.image_key)} alt={`Franceshgrace article: ${feature.title}`} className="h-full w-full object-cover transition-transform group-hover:scale-105" />
          </div>
          <div className="flex flex-col justify-center p-8 md:p-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">{feature.category}</span>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl">{feature.title}</h2>
            <p className="mt-4 text-muted-foreground">{feature.excerpt}</p>
            <p className="mt-6 text-xs text-muted-foreground">{new Date(feature.published_at).toLocaleDateString(undefined, { month: "long", year: "numeric" })} · {feature.read_minutes} min read</p>
          </div>
        </Link>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((p) => (
            <Link key={p.slug} to="/blog/$slug" params={() => ({ slug: p.slug })} className="group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-lg">
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img src={productImage(p.image_key)} alt={`Franceshgrace article: ${p.title}`} loading="lazy" className="h-full w-full object-cover transition-transform group-hover:scale-105" />
              </div>
              <div className="p-5">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">{p.category}</span>
                <h3 className="mt-2 font-serif text-xl leading-snug">{p.title}</h3>
                <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{p.excerpt}</p>
                <p className="mt-4 text-xs text-muted-foreground">{new Date(p.published_at).toLocaleDateString(undefined, { month: "long", year: "numeric" })}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
