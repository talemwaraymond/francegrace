import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles } from "lucide-react";
import { productsQueryOptions } from "@/lib/queries";
import { productImage } from "@/data/imageMap";
import type { ProductDTO } from "@/lib/types";

type Slide = {
  productSlugs: string[];
  headline: string;
  eyebrow: string;
  photo: string;
  focus?: string;
  tone: { from: string; via?: string; accent: string };
};

const u = (id: string) =>
  `https://images.unsplash.com/photo-${id}?w=1600&q=85&auto=format&fit=crop`;

const slides: Slide[] = [
  { productSlugs: ["triple-strength-omega-3"], eyebrow: "Heart & Brain", headline: "Active lives deserve premium nutrition.", photo: u("1538805060514-97d9cc17730c"), focus: "center 30%", tone: { from: "rgba(26,61,50,0.78)", accent: "rgba(26,61,50,0.10)" } },
  { productSlugs: ["ashwagandha-1300mg"], eyebrow: "Stress & Sleep", headline: "Find your calm in every capsule.", photo: u("1506126613408-eca07ce68773"), focus: "center 35%", tone: { from: "rgba(45,26,58,0.78)", accent: "rgba(45,26,58,0.10)" } },
  { productSlugs: ["elderberry-vitc-zinc"], eyebrow: "Immune Support", headline: "Shield your body with triple power.", photo: u("1488459716781-31db52582fe9"), focus: "center 40%", tone: { from: "rgba(13,40,54,0.76)", accent: "rgba(13,40,54,0.08)" } },
  { productSlugs: ["skin-whitening"], eyebrow: "Beauty & Skin", headline: "Radiant skin starts within your cells.", photo: u("1531123897727-8f129e1688ce"), focus: "center 25%", tone: { from: "rgba(58,28,38,0.72)", accent: "rgba(58,28,38,0.10)" } },
  { productSlugs: ["fat-burner", "maca-1900mg"], eyebrow: "Fitness & Performance", headline: "Fuel your performance naturally.", photo: u("1518611012118-696072aa579a"), focus: "center 30%", tone: { from: "rgba(20,30,20,0.78)", accent: "rgba(20,30,20,0.10)" } },
];

const AUTOPLAY_MS = 5000;

function ProductCardOverlay({ product }: { product: ProductDTO }) {
  return (
    <Link to="/products/$slug" params={{ slug: product.slug }} className="group flex items-center gap-3 rounded-2xl bg-background/95 p-2.5 pr-4 shadow-2xl ring-1 ring-border/60 backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-background">
      <div className="h-[60px] w-[60px] shrink-0 overflow-hidden rounded-xl bg-cream">
        <img src={productImage(product.image_key)} alt={product.name} className="h-full w-full object-contain p-1.5" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gold">{product.category}</p>
        <p className="truncate font-serif text-foreground" style={{ fontSize: "16px", lineHeight: 1.15 }}>{product.name}</p>
        <p className="mt-0.5 inline-flex items-center gap-1 text-[11px] font-medium text-primary">View full details<ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" /></p>
      </div>
    </Link>
  );
}

export function HeroProductShowcase() {
  const { data: allProducts } = useSuspenseQuery(productsQueryOptions);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused]);

  const go = (dir: 1 | -1) => setIndex((i) => (i + dir + slides.length) % slides.length);
  const current = slides[index];
  const currentProducts = current.productSlugs.map((s) => allProducts.find((p) => p.slug === s)).filter(Boolean) as ProductDTO[];

  return (
    <div className="relative" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl bg-emerald-deep shadow-2xl ring-1 ring-border/40">
        {slides.map((s, i) => (
          <div key={i} className={`absolute inset-0 transition-opacity duration-[800ms] ease-out ${i === index ? "opacity-100" : "pointer-events-none opacity-0"}`} aria-hidden={i !== index}>
            <img src={s.photo} alt="" className="h-full w-full object-cover" style={{ objectPosition: s.focus ?? "center" }} loading={i === 0 ? "eager" : "lazy"} />
            <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, ${s.tone.from} 0%, ${s.tone.accent} 32%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.15) 70%, rgba(0,0,0,0.75) 100%)` }} />
          </div>
        ))}
        <div className="absolute inset-x-0 top-0 p-6 sm:p-7">
          <div key={`eb-${index}`} className="fade-in-up inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 backdrop-blur-sm ring-1 ring-white/25">
            <Sparkles className="h-3 w-3 text-gold" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-cream">{current.eyebrow}</span>
          </div>
          <h2 key={`h-${index}`} className="fade-in-up mt-3 max-w-[14ch] font-serif text-[26px] leading-[1.1] text-cream drop-shadow-lg sm:text-3xl">{current.headline}</h2>
        </div>
        <div className="absolute inset-x-3 bottom-3 sm:inset-x-4 sm:bottom-4">
          <div key={`pc-${index}`} className="fade-in-up flex flex-col gap-2">
            {currentProducts.map((p) => <ProductCardOverlay key={p.slug} product={p} />)}
          </div>
        </div>
        <div className="absolute right-4 top-6 rounded-full bg-black/30 px-2.5 py-1 text-[11px] font-medium text-cream backdrop-blur-sm">
          <span className="tabular-nums">{String(index + 1).padStart(2, "0")}</span>
          <span className="mx-1 opacity-50">/</span>
          <span className="tabular-nums opacity-70">{String(slides.length).padStart(2, "0")}</span>
        </div>
      </div>
      <div className="mt-5 flex items-center justify-center gap-4">
        <button aria-label="Previous slide" onClick={() => go(-1)} className="rounded-full bg-background p-2 text-foreground shadow-md ring-1 ring-border transition-all hover:bg-primary hover:text-primary-foreground"><ChevronLeft className="h-4 w-4" /></button>
        <div className="flex items-center gap-1.5">
          {slides.map((_, i) => (
            <button key={i} aria-label={`Go to slide ${i + 1}`} onClick={() => setIndex(i)} className={`h-1.5 rounded-full transition-all duration-500 ${i === index ? "w-8 bg-primary" : "w-2 bg-foreground/25 hover:bg-foreground/50"}`} />
          ))}
        </div>
        <button aria-label="Next slide" onClick={() => go(1)} className="rounded-full bg-background p-2 text-foreground shadow-md ring-1 ring-border transition-all hover:bg-primary hover:text-primary-foreground"><ChevronRight className="h-4 w-4" /></button>
      </div>
    </div>
  );
}
