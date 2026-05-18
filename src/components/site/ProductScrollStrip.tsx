import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { products as allProducts, type Product } from "@/data/products";
import { ProductDetailPanel } from "./ProductDetailPanel";

const FEATURED_SLUGS = [
  "elderberry-vitc-zinc",
  "triple-strength-omega-3",
  "skin-whitening",
  "triple-magnesium-complex",
  "magnesium-glycinate-quercetin",
  "ashwagandha-1300mg",
  "fat-burner",
  "maca-1900mg",
  "uric-acid-cleanse",
];

const CATEGORY_TINT: Record<string, string> = {
  "Immune Support": "from-amber-100 to-orange-50",
  "Heart & Brain": "from-sky-100 to-blue-50",
  "Beauty & Skin": "from-rose-100 to-amber-50",
  "Stress & Sleep": "from-violet-100 to-indigo-50",
  "Fitness & Performance": "from-rose-100 to-orange-50",
  "Joint & Mobility": "from-emerald-100 to-teal-50",
  "Detox & Cleanse": "from-emerald-100 to-lime-50",
  "Thyroid & Metabolism": "from-teal-100 to-cyan-50",
};

export function ProductScrollStrip({
  openSlug,
  setOpenSlug,
}: {
  openSlug: string | null;
  setOpenSlug: (s: string | null) => void;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [, setTick] = useState(0); // re-render on scroll-button availability

  const products = FEATURED_SLUGS.map((s) =>
    allProducts.find((p) => p.slug === s),
  ).filter(Boolean) as Product[];

  const open = openSlug
    ? products.find((p) => p.slug === openSlug) ?? null
    : null;

  const scrollBy = (dir: 1 | -1) => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = 280;
    el.scrollBy({ left: dir * cardWidth * 1.5, behavior: "smooth" });
  };

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Our Collection
          </span>
          <h2 className="mt-2 font-serif text-3xl md:text-4xl">
            Our Collection — <span className="italic text-muted-foreground">click any product</span>
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => scrollBy(-1)}
            aria-label="Scroll left"
            className="rounded-full border border-border bg-card p-2.5 text-foreground shadow-sm transition-all hover:bg-primary hover:text-primary-foreground"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={() => scrollBy(1)}
            aria-label="Scroll right"
            className="rounded-full border border-border bg-card p-2.5 text-foreground shadow-sm transition-all hover:bg-primary hover:text-primary-foreground"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        onScroll={() => setTick((t) => t + 1)}
        className="-mx-4 mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-4 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {products.map((p) => {
          const active = openSlug === p.slug;
          return (
            <button
              key={p.slug}
              onClick={() => setOpenSlug(active ? null : p.slug)}
              aria-expanded={active}
              aria-controls={`detail-${p.slug}`}
              className={`group flex w-[260px] shrink-0 snap-start flex-col overflow-hidden rounded-2xl border bg-card text-left transition-all hover:-translate-y-1 hover:shadow-xl ${
                active
                  ? "border-primary shadow-2xl ring-2 ring-primary/30"
                  : "border-border hover:border-primary/40"
              }`}
            >
              <div
                className={`flex aspect-square items-center justify-center overflow-hidden bg-gradient-to-br ${
                  CATEGORY_TINT[p.category] ?? "from-muted to-cream"
                } p-5`}
              >
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-4">
                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
                  {p.category}
                </span>
                <h3 className="mt-1.5 font-serif text-lg leading-tight text-foreground">
                  {p.name}
                </h3>
                <p className="mt-1.5 line-clamp-1 text-xs text-muted-foreground">{p.short}</p>
                <div className="mt-3 flex flex-wrap gap-1">
                  {p.benefits.slice(0, 3).map((b) => (
                    <span
                      key={b}
                      className="rounded-full bg-accent px-2 py-0.5 text-[10px] font-medium text-accent-foreground"
                    >
                      {b}
                    </span>
                  ))}
                </div>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-primary">
                  {active ? "Hide details" : "View details"}
                  <ArrowRight
                    className={`h-3 w-3 transition-transform ${
                      active ? "rotate-90" : "group-hover:translate-x-0.5"
                    }`}
                  />
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {open && <ProductDetailPanel product={open} onClose={() => setOpenSlug(null)} />}
    </section>
  );
}
