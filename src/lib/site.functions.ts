import { createServerFn } from "@tanstack/react-start";
import { supabaseAdmin } from "@/integrations/supabase/client.server";
import type { ProductDTO, BlogPostDTO, SiteSettingsDTO } from "./types";
import { products as staticProducts } from "@/data/products";
import { posts as staticPosts } from "@/data/posts";

function fallbackProducts(): ProductDTO[] {
  return staticProducts.map((product, index) => ({
    id: product.slug,
    slug: product.slug,
    name: product.name,
    category: product.category,
    short: product.short,
    tagline: product.tagline,
    size: product.size,
    description: product.description,
    benefits: product.benefits,
    facts: product.facts,
    ingredients: product.ingredients,
    support: product.support ?? [],
    use: product.use,
    image_key: product.slug,
    status: "active",
    featured_in_hero: Boolean(product.featuredInHero),
    display_order: index,
  }));
}

function fallbackPosts(): BlogPostDTO[] {
  return staticPosts.map((post) => ({
    id: post.slug,
    slug: post.slug,
    title: post.title,
    category: post.category,
    excerpt: post.excerpt,
    body: post.body,
    takeaways: post.takeaways,
    author: "Franceshgrace",
    image_key: post.slug,
    read_minutes: post.readMinutes,
    status: "published",
    published_at: new Date(`${post.date} 1`).toISOString(),
  }));
}

export const listProducts = createServerFn({ method: "GET" }).handler(
  async (): Promise<ProductDTO[]> => {
    try {
      const { data, error } = await supabaseAdmin
        .from("products")
        .select("*")
        .eq("status", "active")
        .order("display_order", { ascending: true });
      if (error) throw new Error(error.message);
      return (data ?? []) as unknown as ProductDTO[];
    } catch (error) {
      if (process.env.GITHUB_PAGES === "true") return fallbackProducts();
      throw error;
    }
  },
);

export const listAllPosts = createServerFn({ method: "GET" }).handler(
  async (): Promise<BlogPostDTO[]> => {
    try {
      const { data, error } = await supabaseAdmin
        .from("blog_posts")
        .select("*")
        .eq("status", "published")
        .order("published_at", { ascending: false });
      if (error) throw new Error(error.message);
      return (data ?? []) as unknown as BlogPostDTO[];
    } catch (error) {
      if (process.env.GITHUB_PAGES === "true") return fallbackPosts();
      throw error;
    }
  },
);

export const getSiteSettings = createServerFn({ method: "GET" }).handler(
  async (): Promise<SiteSettingsDTO> => {
    const { data, error } = await supabaseAdmin
      .from("site_settings")
      .select("key,value");
    if (error) throw new Error(error.message);
    const map: Record<string, string> = {};
    (data ?? []).forEach((r) => (map[r.key] = r.value));
    return {
      contact_email: map.contact_email ?? "franceshgrace123@gmail.com",
      footer_disclaimer:
        map.footer_disclaimer ??
        "These statements have not been evaluated by health authorities.",
      instagram_url: map.instagram_url ?? "",
      facebook_url: map.facebook_url ?? "",
      linkedin_url: map.linkedin_url ?? "",
    };
  },
);
