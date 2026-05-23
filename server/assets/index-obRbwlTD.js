import { Q as reactExports, H as jsxRuntimeExports } from "./server-ufRaRBaD.js";
import { b as createLucideIcon, d as products, L as Link, X } from "./router-Cpm7GH_Y.js";
import { a as Sparkles, S as ShieldCheck } from "./sparkles-CsLuUbFa.js";
import { A as ArrowRight } from "./arrow-right-fjkY8Pxo.js";
import { C as Check } from "./check-C4ppLcWQ.js";
import { S as Send } from "./send-CTtknBm_.js";
import { L as Leaf } from "./leaf-D9dtvhNk.js";
import { H as Heart, B as Brain, M as Moon, D as Dumbbell, S as Smile } from "./smile-yhklJVWf.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$5 = [
  [
    "path",
    {
      d: "M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z",
      key: "w610uw"
    }
  ]
];
const Bone = createLucideIcon("bone", __iconNode$5);
const __iconNode$4 = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]];
const ChevronLeft = createLucideIcon("chevron-left", __iconNode$4);
const __iconNode$3 = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]];
const ChevronRight = createLucideIcon("chevron-right", __iconNode$3);
const __iconNode$2 = [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
];
const ExternalLink = createLucideIcon("external-link", __iconNode$2);
const __iconNode$1 = [
  [
    "path",
    {
      d: "M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",
      key: "1slcih"
    }
  ]
];
const Flame = createLucideIcon("flame", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "M14 9.536V7a4 4 0 0 1 4-4h1.5a.5.5 0 0 1 .5.5V5a4 4 0 0 1-4 4 4 4 0 0 0-4 4c0 2 1 3 1 5a5 5 0 0 1-1 3",
      key: "139s4v"
    }
  ],
  ["path", { d: "M4 9a5 5 0 0 1 8 4 5 5 0 0 1-8-4", key: "1dlkgp" }],
  ["path", { d: "M5 21h14", key: "11awu3" }]
];
const Sprout = createLucideIcon("sprout", __iconNode);
const u = (id) => `https://images.unsplash.com/photo-${id}?w=1600&q=85&auto=format&fit=crop`;
const slides = [
  {
    productSlugs: ["triple-strength-omega-3"],
    eyebrow: "Heart & Brain",
    headline: "Active lives deserve premium nutrition.",
    // Couple jogging outdoors
    photo: u("1538805060514-97d9cc17730c"),
    focus: "center 30%",
    tone: { from: "rgba(26,61,50,0.78)", accent: "rgba(26,61,50,0.10)" }
  },
  {
    productSlugs: ["ashwagandha-1300mg"],
    eyebrow: "Stress & Sleep",
    headline: "Find your calm in every capsule.",
    // Woman meditating, peaceful
    photo: u("1506126613408-eca07ce68773"),
    focus: "center 35%",
    tone: { from: "rgba(45,26,58,0.78)", accent: "rgba(45,26,58,0.10)" }
  },
  {
    productSlugs: ["elderberry-vitc-zinc"],
    eyebrow: "Immune Support",
    headline: "Shield your body with triple power.",
    // Woman at fresh market with produce
    photo: u("1488459716781-31db52582fe9"),
    focus: "center 40%",
    tone: { from: "rgba(13,40,54,0.76)", accent: "rgba(13,40,54,0.08)" }
  },
  {
    productSlugs: ["skin-whitening"],
    eyebrow: "Beauty & Skin",
    headline: "Radiant skin starts within your cells.",
    // Black woman, natural glowing skin
    photo: u("1531123897727-8f129e1688ce"),
    focus: "center 25%",
    tone: { from: "rgba(58,28,38,0.72)", accent: "rgba(58,28,38,0.10)" }
  },
  {
    productSlugs: ["fat-burner", "maca-1900mg"],
    eyebrow: "Fitness & Performance",
    headline: "Fuel your performance naturally.",
    // Athletic training
    photo: u("1518611012118-696072aa579a"),
    focus: "center 30%",
    tone: { from: "rgba(20,30,20,0.78)", accent: "rgba(20,30,20,0.10)" }
  }
];
const AUTOPLAY_MS = 5e3;
function ProductCardOverlay({ product }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Link,
    {
      to: "/products/$slug",
      params: { slug: product.slug },
      className: "group flex items-center gap-3 rounded-2xl bg-background/95 p-2.5 pr-4 shadow-2xl ring-1 ring-border/60 backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-background",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-[60px] w-[60px] shrink-0 overflow-hidden rounded-xl bg-cream", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: product.image,
            alt: product.name,
            className: "h-full w-full object-contain p-1.5"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-semibold uppercase tracking-[0.18em] text-gold", children: product.category }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "truncate font-serif text-foreground",
              style: { fontSize: "16px", lineHeight: 1.15 },
              children: product.name
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-0.5 inline-flex items-center gap-1 text-[11px] font-medium text-primary", children: [
            "View full details",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3 w-3 transition-transform group-hover:translate-x-0.5" })
          ] })
        ] })
      ]
    }
  );
}
function HeroProductShowcase() {
  const [index, setIndex] = reactExports.useState(0);
  const [paused, setPaused] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (paused) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % slides.length),
      AUTOPLAY_MS
    );
    return () => clearInterval(id);
  }, [paused]);
  const go = (dir) => setIndex((i) => (i + dir + slides.length) % slides.length);
  const current = slides[index];
  const currentProducts = current.productSlugs.map((s) => products.find((p) => p.slug === s)).filter(Boolean);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "relative",
      onMouseEnter: () => setPaused(true),
      onMouseLeave: () => setPaused(false),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl bg-emerald-deep shadow-2xl ring-1 ring-border/40", children: [
          slides.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: `absolute inset-0 transition-opacity duration-[800ms] ease-out ${i === index ? "opacity-100" : "pointer-events-none opacity-0"}`,
              "aria-hidden": i !== index,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: s.photo,
                    alt: "",
                    className: "h-full w-full object-cover",
                    style: { objectPosition: s.focus ?? "center" },
                    loading: i === 0 ? "eager" : "lazy"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "absolute inset-0",
                    style: {
                      background: `linear-gradient(180deg, ${s.tone.from} 0%, ${s.tone.accent} 32%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.15) 70%, rgba(0,0,0,0.75) 100%)`
                    }
                  }
                )
              ]
            },
            i
          )),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-x-0 top-0 p-6 sm:p-7", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "fade-in-up inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 backdrop-blur-sm ring-1 ring-white/25",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3 w-3 text-gold" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-semibold uppercase tracking-[0.22em] text-cream", children: current.eyebrow })
                ]
              },
              `eb-${index}`
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h2",
              {
                className: "fade-in-up mt-3 max-w-[14ch] font-serif text-[26px] leading-[1.1] text-cream drop-shadow-lg sm:text-3xl",
                children: current.headline
              },
              `h-${index}`
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-3 bottom-3 sm:inset-x-4 sm:bottom-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "fade-in-up flex flex-col gap-2",
              children: currentProducts.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCardOverlay, { product: p }, p.slug))
            },
            `pc-${index}`
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute right-4 top-6 rounded-full bg-black/30 px-2.5 py-1 text-[11px] font-medium text-cream backdrop-blur-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tabular-nums", children: String(index + 1).padStart(2, "0") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-1 opacity-50", children: "/" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tabular-nums opacity-70", children: String(slides.length).padStart(2, "0") })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex items-center justify-center gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              "aria-label": "Previous slide",
              onClick: () => go(-1),
              className: "rounded-full bg-background p-2 text-foreground shadow-md ring-1 ring-border transition-all hover:bg-primary hover:text-primary-foreground",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "h-4 w-4" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1.5", children: slides.map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              "aria-label": `Go to slide ${i + 1}`,
              onClick: () => setIndex(i),
              className: `h-1.5 rounded-full transition-all duration-500 ${i === index ? "w-8 bg-primary" : "w-2 bg-foreground/25 hover:bg-foreground/50"}`
            },
            i
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              "aria-label": "Next slide",
              onClick: () => go(1),
              className: "rounded-full bg-background p-2 text-foreground shadow-md ring-1 ring-border transition-all hover:bg-primary hover:text-primary-foreground",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-4 w-4" })
            }
          )
        ] })
      ]
    }
  );
}
const WA = "https://wa.me/8619566806560";
function ProductDetailPanel({
  product,
  onClose
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      id: `detail-${product.slug}`,
      className: "fade-in-up mt-6 overflow-hidden rounded-3xl border border-border bg-card shadow-xl ring-1 ring-border/50",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-0 md:grid-cols-[280px,1fr]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative flex items-center justify-center bg-gradient-to-br from-accent via-cream to-amber-50 p-6 md:p-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: product.image,
            alt: product.name,
            className: "h-auto max-h-[280px] w-full max-w-[220px] object-contain drop-shadow-lg"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative p-6 md:p-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: onClose,
              "aria-label": "Close details",
              className: "absolute right-4 top-4 rounded-full bg-muted p-1.5 text-foreground/70 transition-colors hover:bg-foreground hover:text-background",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-semibold uppercase tracking-[0.22em] text-primary", children: product.category }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2 font-serif text-2xl leading-tight text-foreground md:text-3xl", children: product.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm italic text-muted-foreground", children: product.tagline }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground", children: product.description.map((d, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: d }, i)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-serif text-base text-foreground", children: "Key Benefits" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2", children: product.benefits.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "li",
              {
                className: "flex items-start gap-2 rounded-lg border border-border/60 bg-muted/40 px-3 py-2 text-sm text-foreground",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "mt-0.5 h-4 w-4 shrink-0 text-primary" }),
                  b
                ]
              },
              b
            )) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 overflow-hidden rounded-lg border-2 border-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-foreground px-4 py-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-serif text-base font-bold uppercase tracking-wide text-background", children: "Supplement Facts" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] uppercase tracking-wider text-background/80", children: [
                "Serving Size: ",
                product.size
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full border-collapse text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b-2 border-foreground bg-muted", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-1.5 text-left text-[11px] font-semibold uppercase tracking-wider text-foreground", children: "Ingredient" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-1.5 text-right text-[11px] font-semibold uppercase tracking-wider text-foreground", children: "Amount" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: product.facts.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "tr",
                {
                  className: `border-b border-border ${i % 2 ? "bg-muted/40" : ""}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-1.5 text-foreground", children: f.label }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-1.5 text-right font-medium tabular-nums text-foreground", children: f.value })
                  ]
                },
                f.label + i
              )) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 rounded-lg bg-emerald-deep/5 p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-wider text-primary", children: "Suggested Use" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-foreground", children: product.use })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: `${WA}?text=${encodeURIComponent(`Hello Franceshgrace, I'd like more info on ${product.name}.`)}`,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:bg-emerald-deep hover:shadow-md",
                children: [
                  "Send Inquiry for This Product ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-4 w-4" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: "/products/$slug",
                params: { slug: product.slug },
                className: "inline-flex items-center gap-2 rounded-full border border-foreground/15 px-5 py-2.5 text-sm font-medium text-foreground hover:bg-foreground/5",
                children: [
                  "Full product page ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "h-3.5 w-3.5" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-[11px] italic leading-relaxed text-muted-foreground", children: "These statements have not been evaluated by health authorities. This product is not intended to diagnose, treat, cure, or prevent any disease." })
        ] })
      ] })
    }
  );
}
const FEATURED_SLUGS = [
  "elderberry-vitc-zinc",
  "triple-strength-omega-3",
  "skin-whitening",
  "triple-magnesium-complex",
  "magnesium-glycinate-quercetin",
  "ashwagandha-1300mg",
  "fat-burner",
  "maca-1900mg",
  "uric-acid-cleanse"
];
const CATEGORY_TINT = {
  "Immune Support": "from-amber-100 to-orange-50",
  "Heart & Brain": "from-sky-100 to-blue-50",
  "Beauty & Skin": "from-rose-100 to-amber-50",
  "Stress & Sleep": "from-violet-100 to-indigo-50",
  "Fitness & Performance": "from-rose-100 to-orange-50",
  "Joint & Mobility": "from-emerald-100 to-teal-50",
  "Detox & Cleanse": "from-emerald-100 to-lime-50",
  "Thyroid & Metabolism": "from-teal-100 to-cyan-50"
};
function ProductScrollStrip({
  openSlug,
  setOpenSlug
}) {
  const scrollRef = reactExports.useRef(null);
  const [, setTick] = reactExports.useState(0);
  const products$1 = FEATURED_SLUGS.map(
    (s) => products.find((p) => p.slug === s)
  ).filter(Boolean);
  const open = openSlug ? products$1.find((p) => p.slug === openSlug) ?? null : null;
  const scrollBy = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = 280;
    el.scrollBy({ left: dir * cardWidth * 1.5, behavior: "smooth" });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-end justify-between gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold uppercase tracking-[0.2em] text-primary", children: "Our Collection" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-2 font-serif text-3xl md:text-4xl", children: [
          "Our Collection — ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-muted-foreground", children: "click any product" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => scrollBy(-1),
            "aria-label": "Scroll left",
            className: "rounded-full border border-border bg-card p-2.5 text-foreground shadow-sm transition-all hover:bg-primary hover:text-primary-foreground",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "h-4 w-4" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => scrollBy(1),
            "aria-label": "Scroll right",
            className: "rounded-full border border-border bg-card p-2.5 text-foreground shadow-sm transition-all hover:bg-primary hover:text-primary-foreground",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-4 w-4" })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        ref: scrollRef,
        onScroll: () => setTick((t) => t + 1),
        className: "-mx-4 mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-4 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
        children: products$1.map((p) => {
          const active = openSlug === p.slug;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => setOpenSlug(active ? null : p.slug),
              "aria-expanded": active,
              "aria-controls": `detail-${p.slug}`,
              className: `group flex w-[260px] shrink-0 snap-start flex-col overflow-hidden rounded-2xl border bg-card text-left transition-all hover:-translate-y-1 hover:shadow-xl ${active ? "border-primary shadow-2xl ring-2 ring-primary/30" : "border-border hover:border-primary/40"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: `flex aspect-square items-center justify-center overflow-hidden bg-gradient-to-br ${CATEGORY_TINT[p.category] ?? "from-muted to-cream"} p-5`,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "img",
                      {
                        src: p.image,
                        alt: p.name,
                        loading: "lazy",
                        className: "h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-col p-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-semibold uppercase tracking-[0.18em] text-primary", children: p.category }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-1.5 font-serif text-lg leading-tight text-foreground", children: p.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 line-clamp-1 text-xs text-muted-foreground", children: p.short }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 flex flex-wrap gap-1", children: p.benefits.slice(0, 3).map((b) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "rounded-full bg-accent px-2 py-0.5 text-[10px] font-medium text-accent-foreground",
                      children: b
                    },
                    b
                  )) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mt-3 inline-flex items-center gap-1 text-xs font-medium text-primary", children: [
                    active ? "Hide details" : "View details",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      ArrowRight,
                      {
                        className: `h-3 w-3 transition-transform ${active ? "rotate-90" : "group-hover:translate-x-0.5"}`
                      }
                    )
                  ] })
                ] })
              ]
            },
            p.slug
          );
        })
      }
    ),
    open && /* @__PURE__ */ jsxRuntimeExports.jsx(ProductDetailPanel, { product: open, onClose: () => setOpenSlug(null) })
  ] });
}
const TILE_SLUGS = [
  { slug: "elderberry-vitc-zinc", icon: Leaf, tint: "bg-amber-100 text-amber-800" },
  { slug: "triple-strength-omega-3", icon: Heart, tint: "bg-sky-100 text-sky-800" },
  { slug: "ashwagandha-1300mg", icon: Brain, tint: "bg-violet-100 text-violet-800" },
  { slug: "triple-magnesium-complex", icon: Moon, tint: "bg-indigo-100 text-indigo-800" },
  { slug: "skin-whitening", icon: Sparkles, tint: "bg-rose-100 text-rose-800" },
  { slug: "fat-burner", icon: Dumbbell, tint: "bg-orange-100 text-orange-800" }
];
function LifestyleSection({
  openSlug,
  setOpenSlug
}) {
  const open = openSlug ? products.find((p) => p.slug === openSlug) : null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-cream", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 overflow-hidden rounded-3xl shadow-xl lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex min-h-[420px] flex-col justify-between bg-emerald-deep p-10 text-cream lg:p-14", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            "aria-hidden": true,
            className: "pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gold/15 blur-3xl"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            "aria-hidden": true,
            className: "pointer-events-none absolute -bottom-24 -left-12 h-72 w-72 rounded-full bg-cream/5 blur-3xl"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-auto mt-2 flex h-48 w-48 items-center justify-center rounded-full bg-gradient-to-br from-cream/15 to-transparent ring-1 ring-cream/25", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-32 w-32 items-center justify-center rounded-full bg-cream/10 ring-1 ring-cream/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sprout, { className: "h-14 w-14 text-gold", strokeWidth: 1.5 }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-semibold uppercase tracking-[0.25em] text-gold", children: "Brand Philosophy" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-3 font-serif text-3xl leading-tight md:text-4xl", children: [
            "Nature Meets ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-gold", children: "Modern Science." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-md text-sm leading-relaxed text-cream/80", children: "Every formula begins with botanicals trusted for generations, then is refined with modern nutritional research. We make wellness that fits everyday life — honest, effective, and crafted with intention." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card p-6 sm:p-8 lg:p-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-semibold uppercase tracking-[0.22em] text-primary", children: "Quick Browse" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-1 font-serif text-2xl text-foreground md:text-3xl", children: "Top picks across wellness" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 grid grid-cols-2 gap-3 sm:gap-4", children: TILE_SLUGS.map(({ slug, icon: Icon, tint }) => {
          const p = products.find((pp) => pp.slug === slug);
          if (!p) return null;
          const active = openSlug === slug;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => setOpenSlug(active ? null : slug),
              "aria-expanded": active,
              className: `group flex items-start gap-3 rounded-2xl border p-3 text-left transition-all hover:-translate-y-0.5 hover:shadow-md sm:p-4 ${active ? "border-primary bg-primary/5 shadow-md" : "border-border bg-background"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: `flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${tint}`,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "min-w-0 flex-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-[10px] font-semibold uppercase tracking-[0.18em] text-primary", children: p.category }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-0.5 block truncate font-serif text-sm leading-tight text-foreground sm:text-base", children: p.name.replace("FSG ", "") })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  ArrowRight,
                  {
                    className: `h-4 w-4 shrink-0 text-primary transition-transform ${active ? "rotate-90" : "group-hover:translate-x-0.5"}`
                  }
                )
              ]
            },
            slug
          );
        }) })
      ] })
    ] }),
    open && /* @__PURE__ */ jsxRuntimeExports.jsx(ProductDetailPanel, { product: open, onClose: () => setOpenSlug(null) })
  ] }) });
}
const HEXES = [
  {
    key: "immune",
    name: "Immune Support",
    desc: "Daily defenses for resilience year-round — elderberry, vitamin C, zinc, and astragalus.",
    icon: ShieldCheck
  },
  {
    key: "heart-brain",
    name: "Heart & Brain",
    desc: "Omega-3 and cognitive-support formulas for cardiovascular and mental clarity.",
    icon: Heart
  },
  {
    key: "beauty",
    name: "Beauty & Skin",
    desc: "Glutathione, collagen-friendly botanicals and antioxidants for radiance from within.",
    icon: Smile
  },
  {
    key: "stress",
    name: "Stress & Sleep",
    desc: "Ashwagandha, magnesium and adaptogens for calm, deep sleep and steady mood.",
    icon: Moon
  },
  {
    key: "fitness",
    name: "Fitness & Performance",
    desc: "Thermogenic blends, maca and amino acids to fuel active routines and recovery.",
    icon: Flame
  },
  {
    key: "joint",
    name: "Joint & Mobility",
    desc: "Botanical and mineral support for joint comfort, mobility and long-term wellness.",
    icon: Bone
  }
];
function HexCategories() {
  const [active, setActive] = reactExports.useState(HEXES[0]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold uppercase tracking-[0.2em] text-primary", children: "Browse by Goal" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-serif text-4xl leading-tight md:text-5xl", children: "Our Categories" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-md text-muted-foreground", children: "Hover or tap a category to discover the wellness focus areas behind every Franceshgrace formula." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "fade-in-up mt-10 rounded-3xl border border-border bg-card p-6 md:p-8",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(active.icon, { className: "h-5 w-5" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-semibold uppercase tracking-[0.22em] text-primary", children: active.name })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 font-serif text-3xl leading-tight text-foreground md:text-4xl", children: active.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 font-serif text-lg italic leading-relaxed text-muted-foreground", children: [
              '"',
              active.desc,
              '"'
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: "/products",
                className: "mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline",
                children: [
                  "Explore ",
                  active.name.toLowerCase(),
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
                ]
              }
            )
          ]
        },
        active.key
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-x-3 gap-y-0", children: HEXES.map((h, i) => {
      const isActive = active.key === h.key;
      const offset = i % 2 === 1 ? "mt-12" : "";
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onMouseEnter: () => setActive(h),
          onFocus: () => setActive(h),
          onClick: () => setActive(h),
          "aria-label": h.name,
          className: `group relative h-36 w-32 sm:h-44 sm:w-40 ${offset} transition-transform hover:-translate-y-1 focus:outline-none`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: `absolute inset-0 transition-colors duration-300 ${isActive ? "bg-emerald-deep text-cream shadow-xl" : "bg-muted text-foreground/70 group-hover:bg-emerald-deep group-hover:text-cream"}`,
                style: {
                  clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)"
                }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex h-full w-full flex-col items-center justify-center gap-2 px-4 text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                h.icon,
                {
                  className: `h-7 w-7 transition-colors ${isActive ? "text-gold" : "text-foreground/70 group-hover:text-gold"}`,
                  strokeWidth: 1.7
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: `text-[10px] font-semibold uppercase leading-tight tracking-wider transition-colors ${isActive ? "text-cream" : "text-foreground/80 group-hover:text-cream"}`,
                  children: h.name
                }
              )
            ] })
          ]
        },
        h.key
      );
    }) }) })
  ] }) });
}
const stats = [{
  value: "10+",
  label: "Product Formulas"
}, {
  value: "30+",
  label: "Wellness Categories"
}, {
  value: "100%",
  label: "Quality Assured"
}];
function HomePage() {
  const [openSlug, setOpenSlug] = reactExports.useState(null);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative overflow-hidden bg-cream", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-2 lg:gap-16 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fade-in-up", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Leaf, { className: "h-4 w-4" }),
          " Wellness Backed by Nature & Science"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-6 font-serif text-5xl leading-[1.05] text-balance sm:text-6xl md:text-7xl", children: [
          "Premium wellness, ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-gold", children: "crafted" }),
          " with intention."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-xl text-lg text-muted-foreground", children: "Carefully selected ingredients, modern formulations, and a commitment to quality — for everyday people who care how they feel." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/products", className: "inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:bg-emerald-deep hover:shadow-md", children: [
            "Explore Products ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/about", className: "inline-flex items-center rounded-full border border-foreground/15 bg-transparent px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5", children: "Our Story" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(HeroProductShowcase, {})
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-primary text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto grid max-w-7xl grid-cols-2 gap-y-8 px-4 py-10 sm:px-6 md:grid-cols-4 lg:px-8", children: stats.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-serif text-3xl text-gold md:text-4xl", children: s.value }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-cream/80", children: s.label })
    ] }, s.label)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ProductScrollStrip, { openSlug, setOpenSlug }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(LifestyleSection, { openSlug, setOpenSlug }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(HexCategories, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold uppercase tracking-[0.2em] text-primary", children: "Journal" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-serif text-4xl md:text-5xl", children: "Wellness, explained." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/blog", className: "hidden text-sm font-medium text-primary hover:underline md:inline-flex", children: "View all →" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid grid-cols-1 gap-6 md:grid-cols-3", children: [{
        slug: "omega-3-and-cardiovascular-wellness",
        t: "The Science Behind Omega-3 and Cardiovascular Wellness",
        c: "Heart & Brain",
        img: products[1].image
      }, {
        slug: "ashwagandha-modern-stress",
        t: "Ashwagandha: Nature's Answer to Modern Stress",
        c: "Stress & Sleep",
        img: products[5].image
      }, {
        slug: "magnesium-deep-sleep",
        t: "Magnesium and the Science of Deep, Restorative Sleep",
        c: "Stress & Sleep",
        img: products[3].image
      }].map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/blog/$slug", params: {
        slug: b.slug
      }, className: "group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-lg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/3] overflow-hidden bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: b.img, alt: b.t, loading: "lazy", className: "h-full w-full object-cover transition-transform group-hover:scale-105" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold uppercase tracking-wider text-primary", children: b.c }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2 font-serif text-xl leading-snug", children: b.t })
        ] })
      ] }, b.slug)) })
    ] })
  ] });
}
export {
  HomePage as component
};
