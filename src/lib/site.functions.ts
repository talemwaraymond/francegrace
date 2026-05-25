import { createServerFn } from "@tanstack/react-start";
import { supabaseAdmin } from "@/integrations/supabase/client.server";
import type { ProductDTO, BlogPostDTO, SiteSettingsDTO } from "./types";

export const listProducts = createServerFn({ method: "GET" }).handler(
  async (): Promise<ProductDTO[]> => {
    const { data, error } = await supabaseAdmin
      .from("products")
      .select("*")
      .eq("status", "active")
      .order("display_order", { ascending: true });
    if (error) throw new Error(error.message);
    return (data ?? []) as unknown as ProductDTO[];
  },
);

export const listAllPosts = createServerFn({ method: "GET" }).handler(
  async (): Promise<BlogPostDTO[]> => {
    const { data, error } = await supabaseAdmin
      .from("blog_posts")
      .select("*")
      .eq("status", "published")
      .order("published_at", { ascending: false });
    if (error) throw new Error(error.message);
    return (data ?? []) as unknown as BlogPostDTO[];
  },
);

export const getSiteSettings = createServerFn({ method: "GET" }).handler(
  async (): Promise<SiteSettingsDTO> => {
    const { data, error } = await supabaseAdmin.from("site_settings").select("key,value");
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
