import { jsxs, jsx } from "react/jsx-runtime";
import { b as productsQO, R as Route } from "./router-Cgia5wh0.js";
import { Link } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { ArrowLeft, Check, Leaf } from "lucide-react";
import { P as ProductCard } from "./ProductCard-Zi26W_aa.js";
import { p as productImage } from "./imageMap-BG_U8qCp.js";
import "react";
import "./client.server-U_pH-Evd.js";
import "@supabase/supabase-js";
import "./server-Bb_yri05.js";
import "node:async_hooks";
import "h3-v2";
import "@tanstack/router-core";
import "seroval";
import "@tanstack/history";
import "@tanstack/router-core/ssr/client";
import "@tanstack/router-core/ssr/server";
import "@tanstack/react-router/ssr/server";
import "./product-ashwagandha-anxiety-stress-BkE5b1v-.js";
function ProductDetail() {
  const {
    data: products
  } = useSuspenseQuery(productsQO);
  const {
    product
  } = Route.useLoaderData();
  const related = products.filter((p) => p.slug !== product.slug && p.category === product.category).slice(0, 3);
  const img = productImage(product.image_key);
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("section", { className: "bg-cream", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 py-12 sm:px-6 md:py-20 lg:grid-cols-2 lg:px-8", children: [
      /* @__PURE__ */ jsx("div", { className: "overflow-hidden rounded-3xl bg-gradient-to-br from-accent to-cream p-6 shadow-lg", children: /* @__PURE__ */ jsx("img", { src: img, alt: `Franceshgrace ${product.name}`, className: "mx-auto h-auto w-full max-w-md object-contain" }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-center", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/products", className: "inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary", children: [
          /* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4" }),
          " All products"
        ] }),
        /* @__PURE__ */ jsx("span", { className: "mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary", children: product.category }),
        /* @__PURE__ */ jsx("h1", { className: "mt-3 font-serif text-4xl leading-tight md:text-5xl", children: product.name }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-lg text-muted-foreground", children: product.tagline }),
        /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-foreground/70", children: product.size }),
        /* @__PURE__ */ jsx("div", { className: "mt-6 flex flex-wrap gap-2", children: product.benefits.map((b) => /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1.5 text-sm text-primary", children: [
          /* @__PURE__ */ jsx(Check, { className: "h-3.5 w-3.5" }),
          " ",
          b
        ] }, b)) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-serif text-3xl md:text-4xl", children: "Overview" }),
      /* @__PURE__ */ jsx("div", { className: "mt-6 space-y-4 text-lg leading-relaxed text-foreground/80", children: product.description.map((p, i) => /* @__PURE__ */ jsx("p", { children: p }, i)) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "mx-auto max-w-3xl px-4 pb-16 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border-2 border-foreground bg-card p-6 shadow-sm", children: [
      /* @__PURE__ */ jsx("h3", { className: "font-serif text-2xl uppercase tracking-tight", children: "Supplement Facts" }),
      /* @__PURE__ */ jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: "Serving size: as directed" }),
      /* @__PURE__ */ jsx("div", { className: "mt-4 border-t-4 border-double border-foreground" }),
      /* @__PURE__ */ jsxs("table", { className: "w-full text-sm", children: [
        /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "border-b-2 border-foreground", children: [
          /* @__PURE__ */ jsx("th", { className: "py-2 text-left font-semibold", children: "Ingredient" }),
          /* @__PURE__ */ jsx("th", { className: "py-2 text-right font-semibold", children: "Amount Per Serving" })
        ] }) }),
        /* @__PURE__ */ jsx("tbody", { children: product.facts.map((f, i) => /* @__PURE__ */ jsxs("tr", { className: i % 2 ? "bg-accent/40" : "", children: [
          /* @__PURE__ */ jsx("td", { className: "py-2.5 pl-1", children: f.label }),
          /* @__PURE__ */ jsx("td", { className: "py-2.5 pr-1 text-right font-medium", children: f.value })
        ] }, i)) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-cream", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-serif text-3xl md:text-4xl", children: "Key Ingredients" }),
      /* @__PURE__ */ jsx("div", { className: "mt-8 grid grid-cols-1 gap-5 md:grid-cols-3", children: product.ingredients.map((ing) => /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-border bg-card p-6 shadow-sm", children: [
        /* @__PURE__ */ jsx(Leaf, { className: "h-6 w-6 text-primary" }),
        /* @__PURE__ */ jsx("h3", { className: "mt-3 font-serif text-xl", children: ing.name }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: ing.description })
      ] }, ing.name)) })
    ] }) }),
    product.support && product.support.length > 0 && /* @__PURE__ */ jsxs("section", { className: "mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-serif text-3xl md:text-4xl", children: "How the Ingredients Support Your Wellness" }),
      /* @__PURE__ */ jsx("div", { className: "mt-8 space-y-6", children: product.support.map((s) => /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-border bg-card p-6 shadow-sm", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-serif text-xl text-primary", children: s.ingredient }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-foreground/80", children: s.detail }),
        s.bullets && /* @__PURE__ */ jsx("ul", { className: "mt-3 grid grid-cols-1 gap-1.5 sm:grid-cols-2", children: s.bullets.map((b) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-sm text-foreground/80", children: [
          /* @__PURE__ */ jsx(Check, { className: "mt-0.5 h-4 w-4 shrink-0 text-primary" }),
          /* @__PURE__ */ jsx("span", { children: b })
        ] }, b)) })
      ] }, s.ingredient)) })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "mx-auto max-w-4xl px-4 pb-16 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "rounded-2xl bg-emerald-deep p-8 text-cream", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-serif text-2xl text-gold", children: "Suggested Use" }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-cream/90", children: product.use })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-6 text-sm italic text-muted-foreground", children: "These statements have not been evaluated by health authorities. This product is not intended to diagnose, treat, cure, or prevent any disease." })
    ] }),
    related.length > 0 && /* @__PURE__ */ jsx("section", { className: "bg-cream", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-serif text-3xl md:text-4xl", children: "You may also like" }),
      /* @__PURE__ */ jsx("div", { className: "mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3", children: related.map((p) => /* @__PURE__ */ jsx(ProductCard, { product: p }, p.slug)) })
    ] }) })
  ] });
}
export {
  ProductDetail as component
};
