import { H as jsxRuntimeExports } from "./server-C80iBZg-.js";
import { a as Route, r as relatedPosts, L as Link } from "./router-BeAfsQ71.js";
import { A as ArrowLeft } from "./arrow-left-CbHVgLJ3.js";
import { C as Check } from "./check-BpZ1hf6J.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function BlogDetail() {
  const {
    post
  } = Route.useLoaderData();
  const related = relatedPosts(post.slug);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-cream", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl px-4 py-14 sm:px-6 md:py-20 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/blog", className: "inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4" }),
        " All articles"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-6 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary", children: post.category }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-3 font-serif text-4xl leading-tight md:text-5xl", children: post.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-lg text-muted-foreground", children: post.excerpt }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-4 text-xs text-muted-foreground", children: [
        post.date,
        " · ",
        post.readMinutes,
        " min read"
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-3xl px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "-mt-6 overflow-hidden rounded-3xl bg-card shadow-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: post.image, alt: post.title, className: "h-auto w-full object-cover" }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-5 text-lg leading-relaxed text-foreground/85", children: post.body.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: p }, i)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 rounded-2xl bg-emerald-deep p-8 text-cream", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-serif text-2xl text-gold", children: "Key Takeaways" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-5 space-y-3", children: post.takeaways.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "mt-0.5 h-5 w-5 flex-shrink-0 text-gold" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-cream/90", children: t })
        ] }, t)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 text-sm italic text-muted-foreground", children: "These statements have not been evaluated by health authorities. This article is for educational purposes only and is not intended to diagnose, treat, cure, or prevent any disease." })
    ] }),
    related.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-cream", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-3xl md:text-4xl", children: "Keep reading" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 grid grid-cols-1 gap-6 md:grid-cols-3", children: related.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/blog/$slug", params: {
        slug: r.slug
      }, className: "group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-lg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/3] overflow-hidden bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: r.image, alt: r.title, loading: "lazy", className: "h-full w-full object-cover transition-transform group-hover:scale-105" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold uppercase tracking-wider text-primary", children: r.category }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2 font-serif text-xl leading-snug", children: r.title })
        ] })
      ] }, r.slug)) })
    ] }) })
  ] });
}
export {
  BlogDetail as component
};
