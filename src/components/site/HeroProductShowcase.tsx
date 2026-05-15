import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { products } from "@/data/products";

const AUTOPLAY_MS = 4500;

export function HeroProductShowcase() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % products.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused]);

  const go = (dir: 1 | -1) =>
    setIndex((i) => (i + dir + products.length) % products.length);

  const current = products[index];
  const headlineFact = current.facts[0];

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Stage */}
      <div className="relative mx-auto aspect-[4/5] max-w-md overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-50 via-cream to-amber-50 shadow-2xl ring-1 ring-border/40">
        {products.map((p, i) => (
          <img
            key={p.slug}
            src={p.image}
            alt={p.name}
            width={1024}
            height={1280}
            className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-out ${
              i === index
                ? "scale-100 opacity-100"
                : "pointer-events-none scale-105 opacity-0"
            }`}
          />
        ))}

        {/* Subtle gradient at the bottom for label readability */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/15 to-transparent" />

        {/* Bottom-floating product name + arrow */}
        <Link
          to="/products/$slug"
          params={{ slug: current.slug }}
          className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-3 rounded-2xl bg-background/85 px-4 py-3 shadow-lg ring-1 ring-border backdrop-blur transition-all hover:bg-background"
        >
          <div className="min-w-0">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
              {current.category}
            </p>
            <p className="truncate font-serif text-sm text-foreground">
              {current.name}
            </p>
          </div>
          <ChevronRight className="h-5 w-5 shrink-0 text-primary" />
        </Link>
      </div>

      {/* Floating badge — top-left (animated by key) */}
      {headlineFact && (
        <div
          key={`top-${current.slug}`}
          className="fade-in-up absolute -left-2 top-10 rounded-2xl bg-card px-4 py-3 shadow-lg ring-1 ring-border md:-left-8"
        >
          <p className="text-xs uppercase tracking-wider text-muted-foreground">
            {headlineFact.label}
          </p>
          <p className="font-serif text-2xl text-foreground">
            {headlineFact.value}
          </p>
        </div>
      )}

      {/* Floating badge — bottom-right */}
      <div
        key={`btm-${current.slug}`}
        className="fade-in-up absolute -right-2 bottom-24 rounded-2xl bg-card px-4 py-3 shadow-lg ring-1 ring-border md:-right-8"
      >
        <p className="text-xs uppercase tracking-wider text-muted-foreground">
          Quality Assured
        </p>
        <p className="font-serif text-base text-foreground">
          GMP · {current.size}
        </p>
      </div>

      {/* Prev / Next */}
      <button
        aria-label="Previous product"
        onClick={() => go(-1)}
        className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-background/90 p-2 text-foreground shadow-md ring-1 ring-border transition-all hover:bg-background md:-left-4"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        aria-label="Next product"
        onClick={() => go(1)}
        className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-background/90 p-2 text-foreground shadow-md ring-1 ring-border transition-all hover:bg-background md:-right-4"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Thumbnail rail */}
      <div className="mt-6 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {products.map((p, i) => (
          <button
            key={p.slug}
            onClick={() => setIndex(i)}
            aria-label={`View ${p.name}`}
            className={`relative h-14 w-14 shrink-0 overflow-hidden rounded-xl ring-2 transition-all ${
              i === index
                ? "ring-primary"
                : "opacity-60 ring-transparent hover:opacity-100"
            }`}
          >
            <img src={p.image} alt="" className="h-full w-full object-cover" />
          </button>
        ))}
      </div>

      {/* Progress dots */}
      <div className="mt-4 flex items-center justify-center gap-1.5">
        {products.map((p, i) => (
          <span
            key={p.slug}
            className={`h-1 rounded-full transition-all duration-500 ${
              i === index ? "w-8 bg-primary" : "w-2 bg-foreground/20"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
