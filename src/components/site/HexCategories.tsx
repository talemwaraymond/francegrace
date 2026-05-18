import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ShieldCheck, Heart, Smile, Moon, Flame, Bone, ArrowRight } from "lucide-react";

type Hex = {
  key: string;
  name: string;
  desc: string;
  icon: typeof ShieldCheck;
};

const HEXES: Hex[] = [
  {
    key: "immune",
    name: "Immune Support",
    desc: "Daily defenses for resilience year-round — elderberry, vitamin C, zinc, and astragalus.",
    icon: ShieldCheck,
  },
  {
    key: "heart-brain",
    name: "Heart & Brain",
    desc: "Omega-3 and cognitive-support formulas for cardiovascular and mental clarity.",
    icon: Heart,
  },
  {
    key: "beauty",
    name: "Beauty & Skin",
    desc: "Glutathione, collagen-friendly botanicals and antioxidants for radiance from within.",
    icon: Smile,
  },
  {
    key: "stress",
    name: "Stress & Sleep",
    desc: "Ashwagandha, magnesium and adaptogens for calm, deep sleep and steady mood.",
    icon: Moon,
  },
  {
    key: "fitness",
    name: "Fitness & Performance",
    desc: "Thermogenic blends, maca and amino acids to fuel active routines and recovery.",
    icon: Flame,
  },
  {
    key: "joint",
    name: "Joint & Mobility",
    desc: "Botanical and mineral support for joint comfort, mobility and long-term wellness.",
    icon: Bone,
  },
];

export function HexCategories() {
  const [active, setActive] = useState<Hex>(HEXES[0]);

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* LEFT — dynamic text */}
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Browse by Goal
          </span>
          <h2 className="mt-3 font-serif text-4xl leading-tight md:text-5xl">Our Categories</h2>
          <p className="mt-4 max-w-md text-muted-foreground">
            Hover or tap a category to discover the wellness focus areas behind every
            Franceshgrace formula.
          </p>

          <div
            key={active.key}
            className="fade-in-up mt-10 rounded-3xl border border-border bg-card p-6 md:p-8"
          >
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <active.icon className="h-5 w-5" />
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-primary">
                {active.name}
              </span>
            </div>
            <h3 className="mt-4 font-serif text-3xl leading-tight text-foreground md:text-4xl">
              {active.name}
            </h3>
            <p className="mt-3 font-serif text-lg italic leading-relaxed text-muted-foreground">
              "{active.desc}"
            </p>
            <Link
              to="/products"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
            >
              Explore {active.name.toLowerCase()} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* RIGHT — honeycomb */}
        <div className="flex justify-center">
          <div className="grid grid-cols-2 gap-x-3 gap-y-0">
            {HEXES.map((h, i) => {
              const isActive = active.key === h.key;
              // odd columns (i%2===1) shift down for honeycomb stagger
              const offset = i % 2 === 1 ? "mt-12" : "";
              return (
                <button
                  key={h.key}
                  onMouseEnter={() => setActive(h)}
                  onFocus={() => setActive(h)}
                  onClick={() => setActive(h)}
                  aria-label={h.name}
                  className={`group relative h-36 w-32 sm:h-44 sm:w-40 ${offset} transition-transform hover:-translate-y-1 focus:outline-none`}
                >
                  <div
                    className={`absolute inset-0 transition-colors duration-300 ${
                      isActive
                        ? "bg-emerald-deep text-cream shadow-xl"
                        : "bg-muted text-foreground/70 group-hover:bg-emerald-deep group-hover:text-cream"
                    }`}
                    style={{
                      clipPath:
                        "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                    }}
                  />
                  <div className="relative flex h-full w-full flex-col items-center justify-center gap-2 px-4 text-center">
                    <h.icon
                      className={`h-7 w-7 transition-colors ${
                        isActive ? "text-gold" : "text-foreground/70 group-hover:text-gold"
                      }`}
                      strokeWidth={1.7}
                    />
                    <span
                      className={`text-[10px] font-semibold uppercase leading-tight tracking-wider transition-colors ${
                        isActive ? "text-cream" : "text-foreground/80 group-hover:text-cream"
                      }`}
                    >
                      {h.name}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
