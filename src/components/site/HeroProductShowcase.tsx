import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { products as allProducts, type Product } from "@/data/products";

type Slide = {
  productSlugs: string[]; // first is primary
  headline: string;
  photo: string; // unsplash url
  gradient: string; // tailwind/inline gradient overlay
  focus?: string; // object-position
};

const u = (id: string) =>
  `https://images.unsplash.com/photo-${id}?w=1600&q=85&auto=format&fit=crop`;

const slides: Slide[] = [
  {
    productSlugs: ["triple-strength-omega-3"],
    headline: "Active Lives Deserve Premium Nutrition",
    photo: u("1571019613454-1cb2f99b2d8b"),
    gradient:
      "linear-gradient(90deg, rgba(26,61,50,0.72) 0%, rgba(26,61,50,0.35) 45%, rgba(26,61,50,0) 75%)",
  },
  {
    productSlugs: ["ashwagandha-1300mg"],
    headline: "Find Your Calm in Every Capsule",
    photo: u("1544367595-24991e40f6a7"),
    gradient:
      "linear-gradient(90deg, rgba(45,26,58,0.70) 0%, rgba(45,26,58,0.30) 50%, rgba(45,26,58,0) 80%)",
  },
  {
    productSlugs: ["elderberry-vitc-zinc"],
    headline: "Shield Your Body with Triple Power",
    photo: u("1606787619248-f301830a5a57"),
    gradient:
      "linear-gradient(90deg, rgba(13,40,54,0.68) 0%, rgba(13,40,54,0.30) 50%, rgba(13,40,54,0) 80%)",
  },
  {
    productSlugs: ["skin-whitening"],
    headline: "Radiant Skin Starts Within Your Cells",
    photo: u("1580489944761-15a19d654956"),
    gradient:
      "linear-gradient(90deg, rgba(42,18,24,0.65) 0%, rgba(42,18,24,0.25) 50%, rgba(42,18,24,0) 80%)",
  },
  {
    productSlugs: ["fat-burner", "maca-1900mg"],
    headline: "Fuel Your Performance Naturally",
    photo: u("1534438327779-4b4d626b5739"),
    gradient:
      "linear-gradient(90deg, rgba(20,30,20,0.70) 0%, rgba(20,30,20,0.30) 50%, rgba(20,30,20,0) 80%)",
  },
];

const AUTOPLAY_MS = 5000;

function ProductOverlayCard({ product }: { product: Product }) {
  return (
    <Link
      to="/products/$slug"
      params={{ slug: product.slug }}
      className="group flex items-center gap-3 rounded-2xl bg-background/95 p-3 pr-4 shadow-xl ring-1 ring-border backdrop-blur transition-all hover:-translate-y-0.5 hover:shadow-2xl"
    >
      <div className="h-[60px] w-[60px] shrink-0 overflow-hidden rounded-xl bg-cream">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-contain p-1"
        />
      </div>
      <div className="min-w-0">
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gold">
          {product.category}
        </p>
        <p
          className="truncate font-serif text-foreground"
          style={{ fontSize: "17px", lineHeight: 1.15 }}
        >
          {product.name}
        </p>
        <p className="mt-0.5 inline-flex items-center gap-1 text-[11px] font-medium text-primary">
          View full details
          <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
        </p>
      </div>
    </Link>
  );
}

export function HeroProductShowcase() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % slides.length),
      AUTOPLAY_MS,
    );
    return () => clearInterval(id);
  }, [paused]);

  const go = (dir: 1 | -1) =>
    setIndex((i) => (i + dir + slides.length) % slides.length);

  const current = slides[index];
  const currentProducts = current.productSlugs
    .map((s) => allProducts.find((p) => p.slug === s))
    .filter(Boolean) as Product[];

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative mx-auto aspect-[4/5] max-w-md overflow-hidden rounded-3xl shadow-2xl ring-1 ring-border/40 sm:aspect-[5/6]">
        {slides.map((s, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-[800ms] ease-out ${
              i === index ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
          >
            <img
              src={s.photo}
              alt=""
              className="h-full w-full object-cover"
              style={{ objectPosition: s.focus ?? "center" }}
              loading={i === 0 ? "eager" : "lazy"}
            />
            <div
              className="absolute inset-0"
              style={{ background: s.gradient }}
            />
          </div>
        ))}

        {/* Headline */}
        <div className="absolute inset-x-0 top-0 p-6 sm:p-8">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gold drop-shadow">
            {currentProducts[0]?.category}
          </p>
          <h2
            key={`h-${index}`}
            className="fade-in-up mt-2 max-w-[18ch] font-serif text-2xl leading-tight text-cream drop-shadow-lg sm:text-3xl"
          >
            {current.headline}
          </h2>
        </div>

        {/* Product overlay cards bottom-right */}
        <div className="absolute inset-x-4 bottom-4 flex flex-col items-end gap-2 sm:inset-auto sm:bottom-5 sm:right-5 sm:max-w-[78%]">
          {currentProducts.map((p) => (
            <div key={p.slug} className="w-full sm:w-[280px]">
              <ProductOverlayCard product={p} />
            </div>
          ))}
        </div>
      </div>

      {/* Prev / Next */}
      <button
        aria-label="Previous slide"
        onClick={() => go(-1)}
        className="absolute bottom-[-1.25rem] left-1/2 z-10 -translate-x-[2.25rem] rounded-full bg-background p-2 text-foreground shadow-md ring-1 ring-border transition-all hover:bg-primary hover:text-primary-foreground"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        aria-label="Next slide"
        onClick={() => go(1)}
        className="absolute bottom-[-1.25rem] left-1/2 z-10 translate-x-[0.25rem] rounded-full bg-background p-2 text-foreground shadow-md ring-1 ring-border transition-all hover:bg-primary hover:text-primary-foreground"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Dots */}
      <div className="mt-10 flex items-center justify-center gap-1.5">
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === index ? "w-8 bg-primary" : "w-2 bg-foreground/20"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
