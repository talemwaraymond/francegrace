import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { ArrowLeft, Check } from "lucide-react";
import { postsQueryOptions } from "@/lib/queries";
import { productImage } from "@/data/imageMap";
import type { BlogPostDTO } from "@/lib/types";

export const Route = createFileRoute("/blog/$slug")({
  loader: async ({ context, params }) => {
    const posts = await context.queryClient.ensureQueryData(postsQueryOptions);
    const post = posts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData, params }) => {
    const p = loaderData?.post;
    if (!p) return { meta: [{ title: "Article not found — Franceshgrace" }] };
    const url = `https://www.franceshgrace.com/blog/${params.slug}`;
    return {
      meta: [
        { title: `${p.title} — Franceshgrace Journal` },
        { name: "description", content: p.excerpt },
        { property: "og:title", content: p.title },
        { property: "og:description", content: p.excerpt },
        { property: "og:url", content: url },
        { property: "og:type", content: "article" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [{
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: p.title,
          author: { "@type": "Organization", name: "Franceshgrace" },
          datePublished: p.published_at,
        }),
      }],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-4 py-24 text-center">
      <h1 className="font-serif text-4xl">Article not found</h1>
      <Link to="/blog" className="mt-6 inline-flex items-center gap-2 text-primary hover:underline"><ArrowLeft className="h-4 w-4" /> Back to journal</Link>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="mx-auto max-w-3xl px-4 py-24 text-center">
      <h1 className="font-serif text-3xl">Something went wrong</h1>
      <p className="mt-3 text-muted-foreground">{error.message}</p>
    </div>
  ),
  component: BlogDetail,
});

function BlogDetail() {
  const { data: posts } = useSuspenseQuery(postsQueryOptions);
  const { post } = Route.useLoaderData() as { post: BlogPostDTO };
  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);
  const img = productImage(post.image_key);

  return (
    <article>
      <section className="bg-cream">
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
          <Link to="/blog" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary"><ArrowLeft className="h-4 w-4" /> All articles</Link>
          <span className="mt-6 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary">{post.category}</span>
          <h1 className="mt-3 font-serif text-4xl leading-tight md:text-5xl">{post.title}</h1>
          <p className="mt-4 text-lg text-muted-foreground">{post.excerpt}</p>
          <p className="mt-4 text-xs text-muted-foreground">{new Date(post.published_at).toLocaleDateString(undefined, { month: "long", year: "numeric" })} · {post.read_minutes} min read</p>
        </div>
      </section>
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="-mt-6 overflow-hidden rounded-3xl bg-card shadow-lg">
          <img src={img} alt={`Franceshgrace ${post.title}`} className="h-auto w-full object-cover" />
        </div>
      </div>
      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="space-y-5 text-lg leading-relaxed text-foreground/85">
          {post.body.map((p, i) => <p key={i}>{p}</p>)}
        </div>
        {post.takeaways.length > 0 && (
          <div className="mt-12 rounded-2xl bg-emerald-deep p-8 text-cream">
            <h3 className="font-serif text-2xl text-gold">Key Takeaways</h3>
            <ul className="mt-5 space-y-3">
              {post.takeaways.map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold" />
                  <span className="text-cream/90">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        <p className="mt-8 text-sm italic text-muted-foreground">These statements have not been evaluated by health authorities. This article is for educational purposes only and is not intended to diagnose, treat, cure, or prevent any disease.</p>
      </section>
      {related.length > 0 && (
        <section className="bg-cream">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl md:text-4xl">Keep reading</h2>
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
              {related.map((r) => (
                <Link key={r.slug} to="/blog/$slug" params={{ slug: r.slug }} className="group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-lg">
                  <div className="aspect-[4/3] overflow-hidden bg-muted">
                    <img src={productImage(r.image_key)} alt={`Franceshgrace ${r.title}`} loading="lazy" className="h-full w-full object-cover transition-transform group-hover:scale-105" />
                  </div>
                  <div className="p-5">
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary">{r.category}</span>
                    <h3 className="mt-2 font-serif text-xl leading-snug">{r.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}
