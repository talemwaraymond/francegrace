import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { a as postsQueryOptions } from "./router-Cgia5wh0.js";
import { p as productImage } from "./imageMap-BG_U8qCp.js";
import "react";
import "lucide-react";
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
function BlogPage() {
  const {
    data: posts
  } = useSuspenseQuery(postsQueryOptions);
  if (posts.length === 0) {
    return /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-3xl px-4 py-24 text-center", children: /* @__PURE__ */ jsx("h1", { className: "font-serif text-3xl", children: "Articles coming soon" }) });
  }
  const [feature, ...rest] = posts;
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("section", { className: "bg-cream", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8", children: [
      /* @__PURE__ */ jsx("span", { className: "text-xs font-semibold uppercase tracking-[0.2em] text-primary", children: "Journal" }),
      /* @__PURE__ */ jsx("h1", { className: "mt-3 font-serif text-5xl md:text-6xl", children: "Wellness, explained." }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 max-w-2xl text-muted-foreground", children: "Notes on the ingredients, science, and rituals behind feeling better day to day." })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs(Link, { to: "/blog/$slug", params: {
        slug: feature.slug
      }, className: "group grid grid-cols-1 overflow-hidden rounded-3xl border border-border bg-card transition-shadow hover:shadow-lg lg:grid-cols-2", children: [
        /* @__PURE__ */ jsx("div", { className: "aspect-[4/3] overflow-hidden bg-muted lg:aspect-auto", children: /* @__PURE__ */ jsx("img", { src: productImage(feature.image_key), alt: `Franceshgrace article: ${feature.title}`, className: "h-full w-full object-cover transition-transform group-hover:scale-105" }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-center p-8 md:p-12", children: [
          /* @__PURE__ */ jsx("span", { className: "text-xs font-semibold uppercase tracking-wider text-primary", children: feature.category }),
          /* @__PURE__ */ jsx("h2", { className: "mt-3 font-serif text-3xl md:text-4xl", children: feature.title }),
          /* @__PURE__ */ jsx("p", { className: "mt-4 text-muted-foreground", children: feature.excerpt }),
          /* @__PURE__ */ jsxs("p", { className: "mt-6 text-xs text-muted-foreground", children: [
            new Date(feature.published_at).toLocaleDateString(void 0, {
              month: "long",
              year: "numeric"
            }),
            " · ",
            feature.read_minutes,
            " min read"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3", children: rest.map((p) => /* @__PURE__ */ jsxs(Link, { to: "/blog/$slug", params: {
        slug: p.slug
      }, className: "group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-lg", children: [
        /* @__PURE__ */ jsx("div", { className: "aspect-[4/3] overflow-hidden bg-muted", children: /* @__PURE__ */ jsx("img", { src: productImage(p.image_key), alt: `Franceshgrace article: ${p.title}`, loading: "lazy", className: "h-full w-full object-cover transition-transform group-hover:scale-105" }) }),
        /* @__PURE__ */ jsxs("div", { className: "p-5", children: [
          /* @__PURE__ */ jsx("span", { className: "text-xs font-semibold uppercase tracking-wider text-primary", children: p.category }),
          /* @__PURE__ */ jsx("h3", { className: "mt-2 font-serif text-xl leading-snug", children: p.title }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 line-clamp-2 text-sm text-muted-foreground", children: p.excerpt }),
          /* @__PURE__ */ jsx("p", { className: "mt-4 text-xs text-muted-foreground", children: new Date(p.published_at).toLocaleDateString(void 0, {
            month: "long",
            year: "numeric"
          }) })
        ] })
      ] }, p.slug)) })
    ] })
  ] });
}
export {
  BlogPage as component
};
