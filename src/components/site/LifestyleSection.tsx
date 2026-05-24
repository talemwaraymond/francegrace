import { useSuspenseQuery } from "@tanstack/react-query";
import { Heart, Leaf, Brain, Moon, Sparkles, Dumbbell, ArrowRight, Sprout } from "lucide-react";
import { productsQueryOptions } from "@/lib/queries";
import type { ProductDTO } from "@/lib/types";
import { ProductDetailPanel } from "./ProductDetailPanel";

const TILE_SLUGS: { slug: string; icon: typeof Heart; tint: string }[] = [
  { slug: "elderberry-vitc-zinc", icon: Leaf, tint: "bg-amber-100 text-amber-800" },
  { slug: "triple-strength-omega-3", icon: Heart, tint: "bg-sky-100 text-sky-800" },
  { slug: "ashwagandha-1300mg", icon: Brain, tint: "bg-violet-100 text-violet-800" },
  { slug: "triple-magnesium-complex", icon: Moon, tint: "bg-indigo-100 text-indigo-800" },
  { slug: "skin-whitening", icon: Sparkles, tint: "bg-rose-100 text-rose-800" },
  { slug: "fat-burner", icon: Dumbbell, tint: "bg-orange-100 text-orange-800" },
];

export function LifestyleSection({ openSlug, setOpenSlug }: { openSlug: string | null; setOpenSlug: (s: string | null) => void; }) {
  const { data: allProducts } = useSuspenseQuery(productsQueryOptions);
  const open = openSlug ? (allProducts.find((p) => p.slug === openSlug) as ProductDTO | undefined) : null;

  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 overflow-hidden rounded-3xl shadow-xl lg:grid-cols-2">
          <div className="relative flex min-h-[420px] flex-col justify-between bg-emerald-deep p-10 text-cream lg:p-14">
            <div aria-hidden className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gold/15 blur-3xl" />
            <div aria-hidden className="pointer-events-none absolute -bottom-24 -left-12 h-72 w-72 rounded-full bg-cream/5 blur-3xl" />
            <div className="relative mx-auto mt-2 flex h-48 w-48 items-center justify-center rounded-full bg-gradient-to-br from-cream/15 to-transparent ring-1 ring-cream/25">
              <div className="flex h-32 w-32 items-center justify-center rounded-full bg-cream/10 ring-1 ring-cream/30">
                <Sprout className="h-14 w-14 text-gold" strokeWidth={1.5} />
              </div>
            </div>
            <div className="relative mt-10">
              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-gold">Brand Philosophy</span>
              <h2 className="mt-3 font-serif text-3xl leading-tight md:text-4xl">Nature Meets <span className="italic text-gold">Modern Science.</span></h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-cream/80">Every formula begins with botanicals trusted for generations, then is refined with modern nutritional research. We make wellness that fits everyday life — honest, effective, and crafted with intention.</p>
            </div>
          </div>
          <div className="bg-card p-6 sm:p-8 lg:p-10">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-primary">Quick Browse</p>
            <h3 className="mt-1 font-serif text-2xl text-foreground md:text-3xl">Top picks across wellness</h3>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4">
              {TILE_SLUGS.map(({ slug, icon: Icon, tint }) => {
                const p = allProducts.find((pp) => pp.slug === slug);
                if (!p) return null;
                const active = openSlug === slug;
                return (
                  <button key={slug} onClick={() => setOpenSlug(active ? null : slug)} aria-expanded={active} className={`group flex items-start gap-3 rounded-2xl border p-3 text-left transition-all hover:-translate-y-0.5 hover:shadow-md sm:p-4 ${active ? "border-primary bg-primary/5 shadow-md" : "border-border bg-background"}`}>
                    <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${tint}`}><Icon className="h-5 w-5" /></span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">{p.category}</span>
                      <span className="mt-0.5 block truncate font-serif text-sm leading-tight text-foreground sm:text-base">{p.name.replace("FSG ", "")}</span>
                    </span>
                    <ArrowRight className={`h-4 w-4 shrink-0 text-primary transition-transform ${active ? "rotate-90" : "group-hover:translate-x-0.5"}`} />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
        {open && <ProductDetailPanel product={open} onClose={() => setOpenSlug(null)} />}
      </div>
    </section>
  );
}
