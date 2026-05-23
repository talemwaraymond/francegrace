import { Q as reactExports, H as jsxRuntimeExports } from "./server-ufRaRBaD.js";
import { d as products, c as categories } from "./router-Cpm7GH_Y.js";
import { P as ProductCard } from "./ProductCard-DALl3VgC.js";
import { H as Heart, B as Brain, M as Moon, D as Dumbbell, S as Smile } from "./smile-yhklJVWf.js";
import { L as Leaf } from "./leaf-D9dtvhNk.js";
import { a as Sparkles, S as ShieldCheck } from "./sparkles-CsLuUbFa.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./arrow-right-fjkY8Pxo.js";
const keyIngredients = [{
  icon: Heart,
  name: "Omega-3 (EPA & DHA)",
  desc: "Essential fatty acids for heart, brain, and joint wellness."
}, {
  icon: Leaf,
  name: "Elderberry Extract",
  desc: "Flavonoid-rich berry traditionally used for daily immune support."
}, {
  icon: Brain,
  name: "Ashwagandha",
  desc: "Adaptogenic herb for stress resilience, mood, and steady vitality."
}, {
  icon: Moon,
  name: "Magnesium Complex",
  desc: "Glycinate, citrate & malate for sleep, calm, and muscle recovery."
}, {
  icon: Sparkles,
  name: "L-Glutathione",
  desc: "Master antioxidant supporting skin radiance and cellular protection."
}, {
  icon: Dumbbell,
  name: "Organic Maca Root",
  desc: "Andean superfood used for stamina, vitality, and hormonal balance."
}, {
  icon: Smile,
  name: "Turmeric & Boswellia",
  desc: "Botanical pair traditionally used for joint comfort and mobility."
}, {
  icon: ShieldCheck,
  name: "Vitamin C & Zinc",
  desc: "Foundational nutrients that support immune cell function."
}];
function ProductsPage() {
  const [active, setActive] = reactExports.useState("All");
  const filtered = active === "All" ? products : products.filter((p) => p.category === active);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-cream", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold uppercase tracking-[0.2em] text-primary", children: "Products & Ingredients" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-3 font-serif text-5xl md:text-6xl", children: "Explore the collection" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-2xl text-muted-foreground", children: "Nine carefully formulated supplements, organised by the wellness goal they support — powered by science-backed botanicals, vitamins, and minerals." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap gap-3 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#catalogue", className: "rounded-full bg-primary px-5 py-2 font-medium text-primary-foreground hover:bg-emerald-deep", children: "Browse Products" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#ingredients", className: "rounded-full border border-foreground/15 px-5 py-2 font-medium text-foreground hover:bg-foreground/5", children: "Key Ingredients" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "catalogue", className: "mx-auto max-w-7xl px-4 pb-20 pt-10 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 border-b border-border pb-6", children: ["All", ...categories].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setActive(c), className: `rounded-full px-4 py-2 text-sm font-medium transition-colors ${active === c ? "bg-primary text-primary-foreground" : "bg-accent text-accent-foreground hover:bg-primary/10"}`, children: c }, c)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3", children: filtered.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { product: p }, p.slug)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "ingredients", className: "bg-cream scroll-mt-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold uppercase tracking-[0.2em] text-primary", children: "Key Ingredients" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-serif text-4xl md:text-5xl", children: "The building blocks of wellness." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "Every formula is built around ingredients with a long tradition of use and a modern evidence base. Here are the headliners you'll find across our range." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4", children: keyIngredients.map((i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-md", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(i.icon, { className: "h-7 w-7 text-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 font-serif text-lg text-foreground", children: i.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: i.desc })
      ] }, i.name)) })
    ] }) })
  ] });
}
export {
  ProductsPage as component
};
