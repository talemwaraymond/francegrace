import { QueryClientProvider, queryOptions, QueryClient } from "@tanstack/react-query";
import { Link, createRootRouteWithContext, useRouter, Outlet, HeadContent, Scripts, createFileRoute, lazyRouteComponent, notFound, createRouter } from "@tanstack/react-router";
import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { X, Menu, Mail } from "lucide-react";
import { s as supabaseAdmin } from "./client.server-U_pH-Evd.js";
import { T as TSS_SERVER_FUNCTION, g as getServerFnById, c as createServerFn } from "./server-Bb_yri05.js";
const appCss = "/assets/styles-nQPwHISZ.css";
function Logo({ className = "" }) {
  return /* @__PURE__ */ jsxs("span", { className: `font-serif text-2xl tracking-tight ${className}`, children: [
    /* @__PURE__ */ jsx("span", { className: "text-foreground", children: "Frances" }),
    /* @__PURE__ */ jsx("span", { className: "italic text-gold", children: "hgrace" })
  ] });
}
const navLinks = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/about", label: "About" },
  { to: "/blog", label: "Blog" }
];
function Header() {
  const [open, setOpen] = useState(false);
  return /* @__PURE__ */ jsxs("header", { className: "sticky top-0 z-40 w-full border-b border-border/60 bg-background/85 backdrop-blur-md", children: [
    /* @__PURE__ */ jsxs("div", { className: "mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsx(Link, { to: "/", className: "flex items-center", onClick: () => setOpen(false), children: /* @__PURE__ */ jsx(Logo, {}) }),
      /* @__PURE__ */ jsx("nav", { className: "hidden items-center gap-8 md:flex", children: navLinks.map((l) => /* @__PURE__ */ jsx(
        Link,
        {
          to: l.to,
          className: "text-sm font-medium text-foreground/80 transition-colors hover:text-primary",
          activeProps: { className: "text-primary" },
          activeOptions: l.to === "/" ? { exact: true } : void 0,
          children: l.label
        },
        l.label
      )) }),
      /* @__PURE__ */ jsx(
        "button",
        {
          className: "md:hidden",
          "aria-label": "Toggle menu",
          onClick: () => setOpen((v) => !v),
          children: open ? /* @__PURE__ */ jsx(X, { className: "h-6 w-6" }) : /* @__PURE__ */ jsx(Menu, { className: "h-6 w-6" })
        }
      )
    ] }),
    open && /* @__PURE__ */ jsx("div", { className: "border-t border-border/60 bg-background md:hidden", children: /* @__PURE__ */ jsx("div", { className: "space-y-1 px-4 py-4", children: navLinks.map((l) => /* @__PURE__ */ jsx(
      Link,
      {
        to: l.to,
        onClick: () => setOpen(false),
        className: "block rounded-md px-3 py-2 text-base font-medium text-foreground/80 hover:bg-accent hover:text-primary",
        children: l.label
      },
      l.label
    )) }) })
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsx("footer", { className: "mt-24 border-t border-border/60 bg-emerald-deep text-cream", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-10 md:grid-cols-4", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(Logo, { className: "!text-cream" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 max-w-xs text-sm text-cream/70", children: "Wellness backed by nature and science. Premium supplements crafted with intention." })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "font-sans text-sm font-semibold uppercase tracking-wider text-gold", children: "Products" }),
        /* @__PURE__ */ jsxs("ul", { className: "mt-4 space-y-2 text-sm text-cream/80", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/products", className: "hover:text-gold", children: "All Products" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/products", className: "hover:text-gold", children: "Immune Support" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/products", className: "hover:text-gold", children: "Heart & Brain" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/products", className: "hover:text-gold", children: "Stress & Sleep" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "font-sans text-sm font-semibold uppercase tracking-wider text-gold", children: "Company" }),
        /* @__PURE__ */ jsxs("ul", { className: "mt-4 space-y-2 text-sm text-cream/80", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/about", className: "hover:text-gold", children: "About Us" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/blog", className: "hover:text-gold", children: "Journal" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/distributor", className: "hover:text-gold", children: "Become a Distributor" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "font-sans text-sm font-semibold uppercase tracking-wider text-gold", children: "Contact" }),
        /* @__PURE__ */ jsx("ul", { className: "mt-4 space-y-3 text-sm text-cream/80", children: /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ jsx(Mail, { className: "mt-0.5 h-4 w-4 text-gold" }),
          /* @__PURE__ */ jsx("span", { children: "franceshgrace123@gmail.com" })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-12 border-t border-cream/15 pt-8", children: [
      /* @__PURE__ */ jsx("p", { className: "text-xs italic text-cream/60", children: "These statements have not been evaluated by health authorities. These products are not intended to diagnose, treat, cure, or prevent any disease." }),
      /* @__PURE__ */ jsxs("p", { className: "mt-4 flex flex-wrap items-center justify-between gap-2 text-xs text-cream/50", children: [
        /* @__PURE__ */ jsxs("span", { children: [
          "© ",
          (/* @__PURE__ */ new Date()).getFullYear(),
          " Franceshgrace. All rights reserved."
        ] }),
        /* @__PURE__ */ jsx(Link, { to: "/admin/login", className: "text-cream/50 hover:text-gold", children: "Admin Sign In" })
      ] })
    ] })
  ] }) });
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$h = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Franceshgrace — Premium Wellness, Crafted with Intention" },
      {
        name: "description",
        content: "Premium wellness supplements crafted with carefully selected ingredients and modern formulations. Wellness backed by nature and science."
      },
      { name: "author", content: "Franceshgrace" },
      { property: "og:title", content: "Franceshgrace — Premium Wellness, Crafted with Intention" },
      {
        property: "og:description",
        content: "Premium wellness supplements crafted with carefully selected ingredients and modern formulations. Wellness backed by nature and science."
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      {
        name: "twitter:title",
        content: "Franceshgrace — Premium Wellness, Crafted with Intention"
      },
      {
        name: "twitter:description",
        content: "Premium wellness supplements crafted with carefully selected ingredients and modern formulations. Wellness backed by nature and science."
      },
      {
        property: "og:image",
        content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/f24c1bd8-42de-409b-babe-0c7983040e69/id-preview-5c9b848b--a8e40a25-5257-43d7-bc0f-e1cd8c8f2f0e.lovable.app-1778602568148.png"
      },
      {
        name: "twitter:image",
        content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/f24c1bd8-42de-409b-babe-0c7983040e69/id-preview-5c9b848b--a8e40a25-5257-43d7-bc0f-e1cd8c8f2f0e.lovable.app-1778602568148.png"
      }
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$h.useRouteContext();
  const router2 = useRouter();
  const pathname = router2.state.location.pathname;
  const isAdmin = pathname.startsWith("/admin");
  return /* @__PURE__ */ jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxs("div", { className: "flex min-h-screen flex-col", children: [
    !isAdmin && /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx("main", { className: "flex-1", children: /* @__PURE__ */ jsx(Outlet, {}) }),
    !isAdmin && /* @__PURE__ */ jsx(Footer, {})
  ] }) });
}
const BASE_URL = "https://www.franceshgrace.com";
const Route$g = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const [{ data: products }, { data: posts }] = await Promise.all([
          supabaseAdmin.from("products").select("slug").eq("status", "active"),
          supabaseAdmin.from("blog_posts").select("slug").eq("status", "published")
        ]);
        const staticPaths = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/products", changefreq: "weekly", priority: "0.9" },
          { path: "/about", changefreq: "monthly", priority: "0.7" },
          { path: "/distributor", changefreq: "monthly", priority: "0.8" },
          { path: "/blog", changefreq: "weekly", priority: "0.8" }
        ];
        const productEntries = (products ?? []).map((p) => ({ path: `/products/${p.slug}`, changefreq: "monthly", priority: "0.7" }));
        const postEntries = (posts ?? []).map((p) => ({ path: `/blog/${p.slug}`, changefreq: "monthly", priority: "0.6" }));
        const all = [...staticPaths, ...productEntries, ...postEntries];
        const urls = all.map((e) => `  <url>
    <loc>${BASE_URL}${e.path}</loc>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`);
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`
        ].join("\n");
        return new Response(xml, { headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" } });
      }
    }
  }
});
const $$splitComponentImporter$f = () => import("./products-BFsOu0JM.js");
const Route$f = createFileRoute("/products")({
  component: lazyRouteComponent($$splitComponentImporter$f, "component")
});
const $$splitComponentImporter$e = () => import("./distributor-BTL6RAtv.js");
const Route$e = createFileRoute("/distributor")({
  head: () => ({
    meta: [{
      title: "Become a Distributor — Franceshgrace"
    }, {
      name: "description",
      content: "Partner with Franceshgrace to distribute premium wellness supplements. Submit your inquiry to join our distributor network."
    }, {
      property: "og:title",
      content: "Become a Distributor — Franceshgrace"
    }, {
      property: "og:description",
      content: "Partner with Franceshgrace to distribute premium wellness supplements worldwide."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$e, "component")
});
const $$splitComponentImporter$d = () => import("./blog-BFsOu0JM.js");
const Route$d = createFileRoute("/blog")({
  component: lazyRouteComponent($$splitComponentImporter$d, "component")
});
const $$splitComponentImporter$c = () => import("./admin-ZIKb8_w0.js");
const Route$c = createFileRoute("/admin")({
  component: lazyRouteComponent($$splitComponentImporter$c, "component")
});
const $$splitComponentImporter$b = () => import("./about-B1klKTyj.js");
const Route$b = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "About — Franceshgrace"
    }, {
      name: "description",
      content: "Franceshgrace creates premium wellness supplements with carefully selected ingredients and modern formulations. Learn our story, mission, and values."
    }, {
      property: "og:title",
      content: "About Franceshgrace"
    }, {
      property: "og:description",
      content: "Wellness backed by nature and science."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$b, "component")
});
var createSsrRpc = (functionId) => {
  const url = "/_serverFn/" + functionId;
  const serverFnMeta = { id: functionId };
  const fn = async (...args) => {
    return (await getServerFnById(functionId))(...args);
  };
  return Object.assign(fn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true
  });
};
const listProducts = createServerFn({
  method: "GET"
}).handler(createSsrRpc("5ec86421f189f70d7a53075ba78df152a48270aa94407204b735354175292e29"));
const listAllPosts = createServerFn({
  method: "GET"
}).handler(createSsrRpc("ca7e2bd154d77c12a17264afa30aa48314900b775d8bdb0a8976453fa88e496f"));
const getSiteSettings = createServerFn({
  method: "GET"
}).handler(createSsrRpc("36a1cf28a37967f9e0eef611fa85aaa6d30a5671277d978cd195a2d3633dc431"));
const productsQueryOptions = queryOptions({
  queryKey: ["products"],
  queryFn: () => listProducts(),
  staleTime: 6e4
});
const postsQueryOptions = queryOptions({
  queryKey: ["posts"],
  queryFn: () => listAllPosts(),
  staleTime: 6e4
});
queryOptions({
  queryKey: ["settings"],
  queryFn: () => getSiteSettings(),
  staleTime: 5 * 6e4
});
const $$splitComponentImporter$a = () => import("./index-BxLblK69.js");
const $$splitErrorComponentImporter$4 = () => import("./index-CSlBQ6Ud.js");
const Route$a = createFileRoute("/")({
  loader: async ({
    context
  }) => {
    await Promise.all([context.queryClient.ensureQueryData(productsQueryOptions), context.queryClient.ensureQueryData(postsQueryOptions)]);
  },
  head: () => ({
    meta: [{
      title: "Franceshgrace — Premium Wellness Supplements | Natural & Science-Backed"
    }, {
      name: "description",
      content: "Franceshgrace (FSG) offers premium wellness supplements including Omega-3, Ashwagandha, Magnesium, Elderberry and more. Trusted wellness brand across Africa. Shop now at franceshgrace.com"
    }, {
      name: "keywords",
      content: "Franceshgrace, FSG supplements, wellness supplements Uganda, Ashwagandha capsules Africa, Omega-3 supplements, Magnesium complex, premium supplements Africa"
    }, {
      property: "og:title",
      content: "Franceshgrace — Premium Wellness Supplements"
    }, {
      property: "og:description",
      content: "Premium nutritional supplements designed to support immunity, vitality, beauty, performance and overall wellness."
    }, {
      property: "og:url",
      content: "https://www.franceshgrace.com/"
    }, {
      property: "og:type",
      content: "website"
    }],
    links: [{
      rel: "canonical",
      href: "https://www.franceshgrace.com/"
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Franceshgrace",
        alternateName: "FSG Wellness",
        url: "https://www.franceshgrace.com",
        description: "Premium wellness supplement brand offering science-backed nutritional supplements across Africa."
      })
    }]
  }),
  errorComponent: lazyRouteComponent($$splitErrorComponentImporter$4, "errorComponent"),
  component: lazyRouteComponent($$splitComponentImporter$a, "component")
});
const $$splitErrorComponentImporter$3 = () => import("./products.index-CYlQLW17.js");
const $$splitComponentImporter$9 = () => import("./products.index-Zarw0ckD.js");
const Route$9 = createFileRoute("/products/")({
  loader: ({
    context
  }) => context.queryClient.ensureQueryData(productsQueryOptions),
  head: () => ({
    meta: [{
      title: "FSG Products — Premium Wellness Supplements | Franceshgrace"
    }, {
      name: "description",
      content: "Browse all FSG wellness supplements — Omega-3, Elderberry, Ashwagandha, Magnesium, Fat Burner, Maca, Skin Whitening Caps and more. Quality formulations for daily wellness."
    }, {
      name: "keywords",
      content: "FSG products, Franceshgrace supplements, wellness supplements, Ashwagandha, Omega-3, Magnesium, Elderberry"
    }, {
      property: "og:title",
      content: "FSG Products — Premium Wellness Supplements"
    }, {
      property: "og:description",
      content: "Browse all FSG wellness supplements designed for daily wellness."
    }, {
      property: "og:url",
      content: "https://www.franceshgrace.com/products"
    }],
    links: [{
      rel: "canonical",
      href: "https://www.franceshgrace.com/products"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$9, "component"),
  errorComponent: lazyRouteComponent($$splitErrorComponentImporter$3, "errorComponent")
});
const $$splitComponentImporter$8 = () => import("./blog.index-CTdekaCc.js");
const $$splitErrorComponentImporter$2 = () => import("./blog.index-Dvn1Bxk2.js");
const Route$8 = createFileRoute("/blog/")({
  loader: ({
    context
  }) => context.queryClient.ensureQueryData(postsQueryOptions),
  head: () => ({
    meta: [{
      title: "Journal — Franceshgrace Wellness Articles"
    }, {
      name: "description",
      content: "Articles on wellness, supplementation, and the science behind Franceshgrace formulas — Omega-3, Ashwagandha, Magnesium and more."
    }, {
      property: "og:title",
      content: "Franceshgrace Journal"
    }, {
      property: "og:description",
      content: "Notes on nature, science, and everyday wellness."
    }, {
      property: "og:url",
      content: "https://www.franceshgrace.com/blog"
    }],
    links: [{
      rel: "canonical",
      href: "https://www.franceshgrace.com/blog"
    }]
  }),
  errorComponent: lazyRouteComponent($$splitErrorComponentImporter$2, "errorComponent"),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./admin.index-DUNuKhLn.js");
const Route$7 = createFileRoute("/admin/")({
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const productsQO = queryOptions({
  queryKey: ["products"],
  queryFn: () => listProducts(),
  staleTime: 6e4
});
const $$splitComponentImporter$6 = () => import("./products._slug-BOkhd3tu.js");
const $$splitErrorComponentImporter$1 = () => import("./products._slug-CSlBQ6Ud.js");
const $$splitNotFoundComponentImporter$1 = () => import("./products._slug-pAg-g9SC.js");
const Route$6 = createFileRoute("/products/$slug")({
  loader: async ({
    context,
    params
  }) => {
    const products = await context.queryClient.ensureQueryData(productsQO);
    const product = products.find((p) => p.slug === params.slug);
    if (!product) throw notFound();
    return {
      product
    };
  },
  head: ({
    loaderData,
    params
  }) => {
    const p = loaderData?.product;
    if (!p) return {
      meta: [{
        title: "Product not found — Franceshgrace"
      }]
    };
    const url = `https://www.franceshgrace.com/products/${params.slug}`;
    return {
      meta: [{
        title: `${p.name} — Franceshgrace`
      }, {
        name: "description",
        content: p.short
      }, {
        property: "og:title",
        content: `${p.name} — Franceshgrace`
      }, {
        property: "og:description",
        content: p.short
      }, {
        property: "og:url",
        content: url
      }, {
        property: "og:type",
        content: "product"
      }],
      links: [{
        rel: "canonical",
        href: url
      }],
      scripts: [{
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: p.name,
          description: p.short,
          brand: {
            "@type": "Brand",
            name: "Franceshgrace"
          },
          category: p.category
        })
      }]
    };
  },
  notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter$1, "notFoundComponent"),
  errorComponent: lazyRouteComponent($$splitErrorComponentImporter$1, "errorComponent"),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./blog._slug-TexqMfjt.js");
const $$splitErrorComponentImporter = () => import("./blog._slug-CSlBQ6Ud.js");
const $$splitNotFoundComponentImporter = () => import("./blog._slug-u-9IS50u.js");
const Route$5 = createFileRoute("/blog/$slug")({
  loader: async ({
    context,
    params
  }) => {
    const posts = await context.queryClient.ensureQueryData(postsQueryOptions);
    const post = posts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return {
      post
    };
  },
  head: ({
    loaderData,
    params
  }) => {
    const p = loaderData?.post;
    if (!p) return {
      meta: [{
        title: "Article not found — Franceshgrace"
      }]
    };
    const url = `https://www.franceshgrace.com/blog/${params.slug}`;
    return {
      meta: [{
        title: `${p.title} — Franceshgrace Journal`
      }, {
        name: "description",
        content: p.excerpt
      }, {
        property: "og:title",
        content: p.title
      }, {
        property: "og:description",
        content: p.excerpt
      }, {
        property: "og:url",
        content: url
      }, {
        property: "og:type",
        content: "article"
      }],
      links: [{
        rel: "canonical",
        href: url
      }],
      scripts: [{
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: p.title,
          author: {
            "@type": "Organization",
            name: "Franceshgrace"
          },
          datePublished: p.published_at
        })
      }]
    };
  },
  notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
  errorComponent: lazyRouteComponent($$splitErrorComponentImporter, "errorComponent"),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./admin.settings-BzgIQT68.js");
const Route$4 = createFileRoute("/admin/settings")({
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./admin.products-FJJDzfsO.js");
const Route$3 = createFileRoute("/admin/products")({
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./admin.login-790WgAMg.js");
const Route$2 = createFileRoute("/admin/login")({
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./admin.inquiries-DxUdXvtd.js");
const Route$1 = createFileRoute("/admin/inquiries")({
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./admin.blog-lY0awR3E.js");
const Route = createFileRoute("/admin/blog")({
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const SitemapDotxmlRoute = Route$g.update({
  id: "/sitemap.xml",
  path: "/sitemap.xml",
  getParentRoute: () => Route$h
});
const ProductsRoute = Route$f.update({
  id: "/products",
  path: "/products",
  getParentRoute: () => Route$h
});
const DistributorRoute = Route$e.update({
  id: "/distributor",
  path: "/distributor",
  getParentRoute: () => Route$h
});
const BlogRoute = Route$d.update({
  id: "/blog",
  path: "/blog",
  getParentRoute: () => Route$h
});
const AdminRoute = Route$c.update({
  id: "/admin",
  path: "/admin",
  getParentRoute: () => Route$h
});
const AboutRoute = Route$b.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$h
});
const IndexRoute = Route$a.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$h
});
const ProductsIndexRoute = Route$9.update({
  id: "/",
  path: "/",
  getParentRoute: () => ProductsRoute
});
const BlogIndexRoute = Route$8.update({
  id: "/",
  path: "/",
  getParentRoute: () => BlogRoute
});
const AdminIndexRoute = Route$7.update({
  id: "/",
  path: "/",
  getParentRoute: () => AdminRoute
});
const ProductsSlugRoute = Route$6.update({
  id: "/$slug",
  path: "/$slug",
  getParentRoute: () => ProductsRoute
});
const BlogSlugRoute = Route$5.update({
  id: "/$slug",
  path: "/$slug",
  getParentRoute: () => BlogRoute
});
const AdminSettingsRoute = Route$4.update({
  id: "/settings",
  path: "/settings",
  getParentRoute: () => AdminRoute
});
const AdminProductsRoute = Route$3.update({
  id: "/products",
  path: "/products",
  getParentRoute: () => AdminRoute
});
const AdminLoginRoute = Route$2.update({
  id: "/login",
  path: "/login",
  getParentRoute: () => AdminRoute
});
const AdminInquiriesRoute = Route$1.update({
  id: "/inquiries",
  path: "/inquiries",
  getParentRoute: () => AdminRoute
});
const AdminBlogRoute = Route.update({
  id: "/blog",
  path: "/blog",
  getParentRoute: () => AdminRoute
});
const AdminRouteChildren = {
  AdminBlogRoute,
  AdminInquiriesRoute,
  AdminLoginRoute,
  AdminProductsRoute,
  AdminSettingsRoute,
  AdminIndexRoute
};
const AdminRouteWithChildren = AdminRoute._addFileChildren(AdminRouteChildren);
const BlogRouteChildren = {
  BlogSlugRoute,
  BlogIndexRoute
};
const BlogRouteWithChildren = BlogRoute._addFileChildren(BlogRouteChildren);
const ProductsRouteChildren = {
  ProductsSlugRoute,
  ProductsIndexRoute
};
const ProductsRouteWithChildren = ProductsRoute._addFileChildren(
  ProductsRouteChildren
);
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  AdminRoute: AdminRouteWithChildren,
  BlogRoute: BlogRouteWithChildren,
  DistributorRoute,
  ProductsRoute: ProductsRouteWithChildren,
  SitemapDotxmlRoute
};
const routeTree = Route$h._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Route$6 as R,
  postsQueryOptions as a,
  productsQO as b,
  createSsrRpc as c,
  Route$5 as d,
  getSiteSettings as g,
  productsQueryOptions as p,
  router as r
};
