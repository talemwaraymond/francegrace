import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { supabaseAdmin } from "@/integrations/supabase/client.server";

const BASE_URL = "https://www.franceshgrace.com";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const [{ data: products }, { data: posts }] = await Promise.all([
          supabaseAdmin.from("products").select("slug").eq("status", "active"),
          supabaseAdmin.from("blog_posts").select("slug").eq("status", "published"),
        ]);
        const staticPaths = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/products", changefreq: "weekly", priority: "0.9" },
          { path: "/about", changefreq: "monthly", priority: "0.7" },
          { path: "/distributor", changefreq: "monthly", priority: "0.8" },
          { path: "/blog", changefreq: "weekly", priority: "0.8" },
        ];
        const productEntries = (products ?? []).map((p) => ({ path: `/products/${p.slug}`, changefreq: "monthly", priority: "0.7" }));
        const postEntries = (posts ?? []).map((p) => ({ path: `/blog/${p.slug}`, changefreq: "monthly", priority: "0.6" }));
        const all = [...staticPaths, ...productEntries, ...postEntries];
        const urls = all.map((e) => `  <url>\n    <loc>${BASE_URL}${e.path}</loc>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`);
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");
        return new Response(xml, { headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" } });
      },
    },
  },
});
