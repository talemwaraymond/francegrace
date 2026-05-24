import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { ArrowLeft, Check } from "lucide-react";
import { a as postsQueryOptions, d as Route } from "./router-Cgia5wh0.js";
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
function BlogDetail() {
  const {
    data: posts
  } = useSuspenseQuery(postsQueryOptions);
  const {
    post
  } = Route.useLoaderData();
  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);
  const img = productImage(post.image_key);
  return /* @__PURE__ */ jsxs("article", { children: [
    /* @__PURE__ */ jsx("section", { className: "bg-cream", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-3xl px-4 py-14 sm:px-6 md:py-20 lg:px-8", children: [
      /* @__PURE__ */ jsxs(Link, { to: "/blog", className: "inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary", children: [
        /* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4" }),
        " All articles"
      ] }),
      /* @__PURE__ */ jsx("span", { className: "mt-6 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary", children: post.category }),
      /* @__PURE__ */ jsx("h1", { className: "mt-3 font-serif text-4xl leading-tight md:text-5xl", children: post.title }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 text-lg text-muted-foreground", children: post.excerpt }),
      /* @__PURE__ */ jsxs("p", { className: "mt-4 text-xs text-muted-foreground", children: [
        new Date(post.published_at).toLocaleDateString(void 0, {
          month: "long",
          year: "numeric"
        }),
        " · ",
        post.read_minutes,
        " min read"
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-3xl px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx("div", { className: "-mt-6 overflow-hidden rounded-3xl bg-card shadow-lg", children: /* @__PURE__ */ jsx("img", { src: img, alt: `Franceshgrace ${post.title}`, className: "h-auto w-full object-cover" }) }) }),
    /* @__PURE__ */ jsxs("section", { className: "mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsx("div", { className: "space-y-5 text-lg leading-relaxed text-foreground/85", children: post.body.map((p, i) => /* @__PURE__ */ jsx("p", { children: p }, i)) }),
      post.takeaways.length > 0 && /* @__PURE__ */ jsxs("div", { className: "mt-12 rounded-2xl bg-emerald-deep p-8 text-cream", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-serif text-2xl text-gold", children: "Key Takeaways" }),
        /* @__PURE__ */ jsx("ul", { className: "mt-5 space-y-3", children: post.takeaways.map((t) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsx(Check, { className: "mt-0.5 h-5 w-5 flex-shrink-0 text-gold" }),
          /* @__PURE__ */ jsx("span", { className: "text-cream/90", children: t })
        ] }, t)) })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-8 text-sm italic text-muted-foreground", children: "These statements have not been evaluated by health authorities. This article is for educational purposes only and is not intended to diagnose, treat, cure, or prevent any disease." })
    ] }),
    related.length > 0 && /* @__PURE__ */ jsx("section", { className: "bg-cream", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-serif text-3xl md:text-4xl", children: "Keep reading" }),
      /* @__PURE__ */ jsx("div", { className: "mt-8 grid grid-cols-1 gap-6 md:grid-cols-3", children: related.map((r) => /* @__PURE__ */ jsxs(Link, { to: "/blog/$slug", params: {
        slug: r.slug
      }, className: "group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-lg", children: [
        /* @__PURE__ */ jsx("div", { className: "aspect-[4/3] overflow-hidden bg-muted", children: /* @__PURE__ */ jsx("img", { src: productImage(r.image_key), alt: `Franceshgrace ${r.title}`, loading: "lazy", className: "h-full w-full object-cover transition-transform group-hover:scale-105" }) }),
        /* @__PURE__ */ jsxs("div", { className: "p-5", children: [
          /* @__PURE__ */ jsx("span", { className: "text-xs font-semibold uppercase tracking-wider text-primary", children: r.category }),
          /* @__PURE__ */ jsx("h3", { className: "mt-2 font-serif text-xl leading-snug", children: r.title })
        ] })
      ] }, r.slug)) })
    ] }) })
  ] });
}
export {
  BlogDetail as component
};
