import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { supabaseAdmin } from "@/integrations/supabase/client.server";
import type { ProductDTO, BlogPostDTO, InquiryDTO } from "./types";

function checkAdmin(token: string | undefined) {
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected) throw new Error("ADMIN_PASSWORD not configured");
  if (!token || token !== expected) {
    throw new Error("Unauthorized");
  }
}

export const verifyAdmin = createServerFn({ method: "POST" })
  .inputValidator((input) =>
    z.object({ password: z.string().min(1).max(200) }).parse(input),
  )
  .handler(async ({ data }) => {
    if (data.password !== process.env.ADMIN_PASSWORD) {
      throw new Error("Invalid password");
    }
    return { ok: true };
  });

// ============== READS (admin sees all rows) ==============

export const adminListProducts = createServerFn({ method: "POST" })
  .inputValidator((input) => z.object({ token: z.string() }).parse(input))
  .handler(async ({ data }): Promise<ProductDTO[]> => {
    checkAdmin(data.token);
    const { data: rows, error } = await supabaseAdmin
      .from("products")
      .select("*")
      .order("display_order", { ascending: true });
    if (error) throw new Error(error.message);
    return (rows ?? []) as unknown as ProductDTO[];
  });

export const adminListPosts = createServerFn({ method: "POST" })
  .inputValidator((input) => z.object({ token: z.string() }).parse(input))
  .handler(async ({ data }): Promise<BlogPostDTO[]> => {
    checkAdmin(data.token);
    const { data: rows, error } = await supabaseAdmin
      .from("blog_posts")
      .select("*")
      .order("published_at", { ascending: false });
    if (error) throw new Error(error.message);
    return (rows ?? []) as unknown as BlogPostDTO[];
  });

export const adminListInquiries = createServerFn({ method: "POST" })
  .inputValidator((input) => z.object({ token: z.string() }).parse(input))
  .handler(async ({ data }): Promise<InquiryDTO[]> => {
    checkAdmin(data.token);
    const { data: rows, error } = await supabaseAdmin
      .from("inquiries")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) throw new Error(error.message);
    return (rows ?? []) as unknown as InquiryDTO[];
  });

export const adminStats = createServerFn({ method: "POST" })
  .inputValidator((input) => z.object({ token: z.string() }).parse(input))
  .handler(async ({ data }) => {
    checkAdmin(data.token);
    const [p, b, i] = await Promise.all([
      supabaseAdmin.from("products").select("id", { count: "exact", head: true }),
      supabaseAdmin.from("blog_posts").select("id", { count: "exact", head: true }),
      supabaseAdmin.from("inquiries").select("id", { count: "exact", head: true }),
    ]);
    return {
      products: p.count ?? 0,
      posts: b.count ?? 0,
      inquiries: i.count ?? 0,
      generated_at: new Date().toISOString(),
    };
  });

// ============== PRODUCT WRITES ==============

const ProductInput = z.object({
  slug: z.string().trim().min(1).max(200),
  name: z.string().trim().min(1).max(300),
  category: z.string().trim().min(1).max(100),
  short: z.string().max(500).default(""),
  tagline: z.string().max(300).default(""),
  size: z.string().max(200).default(""),
  description: z.array(z.string()).default([]),
  benefits: z.array(z.string()).default([]),
  facts: z.array(z.object({ label: z.string(), value: z.string() })).default([]),
  ingredients: z
    .array(z.object({ name: z.string(), description: z.string() }))
    .default([]),
  support: z
    .array(
      z.object({
        ingredient: z.string(),
        detail: z.string(),
        bullets: z.array(z.string()).optional(),
      }),
    )
    .default([]),
  use: z.string().max(500).default(""),
  image_key: z.string().max(200).default(""),
  status: z.enum(["active", "hidden"]).default("active"),
  featured_in_hero: z.boolean().default(false),
  display_order: z.number().int().default(0),
});

export const adminUpsertProduct = createServerFn({ method: "POST" })
  .inputValidator((input) =>
    z.object({ token: z.string(), id: z.string().optional(), product: ProductInput }).parse(input),
  )
  .handler(async ({ data }) => {
    checkAdmin(data.token);
    if (data.id) {
      const { error } = await supabaseAdmin
        .from("products")
        .update(data.product)
        .eq("id", data.id);
      if (error) throw new Error(error.message);
    } else {
      const { error } = await supabaseAdmin.from("products").insert(data.product);
      if (error) throw new Error(error.message);
    }
    return { ok: true };
  });

export const adminDeleteProduct = createServerFn({ method: "POST" })
  .inputValidator((input) =>
    z.object({ token: z.string(), id: z.string() }).parse(input),
  )
  .handler(async ({ data }) => {
    checkAdmin(data.token);
    const { error } = await supabaseAdmin.from("products").delete().eq("id", data.id);
    if (error) throw new Error(error.message);
    return { ok: true };
  });

// ============== BLOG WRITES ==============

const PostInput = z.object({
  slug: z.string().trim().min(1).max(200),
  title: z.string().trim().min(1).max(300),
  category: z.string().trim().min(1).max(100),
  excerpt: z.string().max(500).default(""),
  body: z.array(z.string()).default([]),
  takeaways: z.array(z.string()).default([]),
  author: z.string().max(120).default("Franceshgrace"),
  image_key: z.string().max(200).default(""),
  read_minutes: z.number().int().min(1).max(60).default(4),
  status: z.enum(["draft", "published"]).default("published"),
  published_at: z.string().optional(),
});

export const adminUpsertPost = createServerFn({ method: "POST" })
  .inputValidator((input) =>
    z.object({ token: z.string(), id: z.string().optional(), post: PostInput }).parse(input),
  )
  .handler(async ({ data }) => {
    checkAdmin(data.token);
    if (data.id) {
      const { error } = await supabaseAdmin
        .from("blog_posts")
        .update(data.post)
        .eq("id", data.id);
      if (error) throw new Error(error.message);
    } else {
      const { error } = await supabaseAdmin.from("blog_posts").insert(data.post);
      if (error) throw new Error(error.message);
    }
    return { ok: true };
  });

export const adminDeletePost = createServerFn({ method: "POST" })
  .inputValidator((input) =>
    z.object({ token: z.string(), id: z.string() }).parse(input),
  )
  .handler(async ({ data }) => {
    checkAdmin(data.token);
    const { error } = await supabaseAdmin.from("blog_posts").delete().eq("id", data.id);
    if (error) throw new Error(error.message);
    return { ok: true };
  });

// ============== INQUIRIES ==============

export const adminMarkInquiry = createServerFn({ method: "POST" })
  .inputValidator((input) =>
    z.object({ token: z.string(), id: z.string(), is_read: z.boolean() }).parse(input),
  )
  .handler(async ({ data }) => {
    checkAdmin(data.token);
    const { error } = await supabaseAdmin
      .from("inquiries")
      .update({ is_read: data.is_read })
      .eq("id", data.id);
    if (error) throw new Error(error.message);
    return { ok: true };
  });

export const adminDeleteInquiry = createServerFn({ method: "POST" })
  .inputValidator((input) =>
    z.object({ token: z.string(), id: z.string() }).parse(input),
  )
  .handler(async ({ data }) => {
    checkAdmin(data.token);
    const { error } = await supabaseAdmin.from("inquiries").delete().eq("id", data.id);
    if (error) throw new Error(error.message);
    return { ok: true };
  });

// ============== SETTINGS ==============

export const adminUpdateSettings = createServerFn({ method: "POST" })
  .inputValidator((input) =>
    z
      .object({
        token: z.string(),
        settings: z.record(z.string(), z.string()),
      })
      .parse(input),
  )
  .handler(async ({ data }) => {
    checkAdmin(data.token);
    const rows = Object.entries(data.settings).map(([key, value]) => ({
      key,
      value,
      updated_at: new Date().toISOString(),
    }));
    const { error } = await supabaseAdmin
      .from("site_settings")
      .upsert(rows, { onConflict: "key" });
    if (error) throw new Error(error.message);
    return { ok: true };
  });
