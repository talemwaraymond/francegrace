import { c as createServerRpc } from "./createServerRpc-CoWn6ets.js";
import { z } from "zod";
import { s as supabaseAdmin } from "./client.server-U_pH-Evd.js";
import { c as createServerFn } from "./server-Bb_yri05.js";
import "@supabase/supabase-js";
import "node:async_hooks";
import "h3-v2";
import "@tanstack/router-core";
import "seroval";
import "@tanstack/history";
import "@tanstack/router-core/ssr/client";
import "@tanstack/router-core/ssr/server";
import "react";
import "@tanstack/react-router";
import "react/jsx-runtime";
import "@tanstack/react-router/ssr/server";
function checkAdmin(token) {
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected) throw new Error("ADMIN_PASSWORD not configured");
  if (!token || token !== expected) {
    throw new Error("Unauthorized");
  }
}
const verifyAdmin_createServerFn_handler = createServerRpc({
  id: "1f15d2a65f64def84430f13cdf174f0419c053b323a2e32dd43a2c3f365f6488",
  name: "verifyAdmin",
  filename: "src/lib/admin.functions.ts"
}, (opts) => verifyAdmin.__executeServer(opts));
const verifyAdmin = createServerFn({
  method: "POST"
}).inputValidator((input) => z.object({
  password: z.string().min(1).max(200)
}).parse(input)).handler(verifyAdmin_createServerFn_handler, async ({
  data
}) => {
  if (data.password !== process.env.ADMIN_PASSWORD) {
    throw new Error("Invalid password");
  }
  return {
    ok: true
  };
});
const adminListProducts_createServerFn_handler = createServerRpc({
  id: "9932f7d91182148199cbc8b49e99aa83ab2855e0f2166e0d0e38e6c091b587df",
  name: "adminListProducts",
  filename: "src/lib/admin.functions.ts"
}, (opts) => adminListProducts.__executeServer(opts));
const adminListProducts = createServerFn({
  method: "POST"
}).inputValidator((input) => z.object({
  token: z.string()
}).parse(input)).handler(adminListProducts_createServerFn_handler, async ({
  data
}) => {
  checkAdmin(data.token);
  const {
    data: rows,
    error
  } = await supabaseAdmin.from("products").select("*").order("display_order", {
    ascending: true
  });
  if (error) throw new Error(error.message);
  return rows ?? [];
});
const adminListPosts_createServerFn_handler = createServerRpc({
  id: "c36083dfd2f49d453c7629b8a868d6b2b5a7c9fc0ff160379cfd2d3adcba24b4",
  name: "adminListPosts",
  filename: "src/lib/admin.functions.ts"
}, (opts) => adminListPosts.__executeServer(opts));
const adminListPosts = createServerFn({
  method: "POST"
}).inputValidator((input) => z.object({
  token: z.string()
}).parse(input)).handler(adminListPosts_createServerFn_handler, async ({
  data
}) => {
  checkAdmin(data.token);
  const {
    data: rows,
    error
  } = await supabaseAdmin.from("blog_posts").select("*").order("published_at", {
    ascending: false
  });
  if (error) throw new Error(error.message);
  return rows ?? [];
});
const adminListInquiries_createServerFn_handler = createServerRpc({
  id: "4c43e3cfba445d5ea11b75e2ce5b3c2a2e72781caf96b818b2440dba1777826e",
  name: "adminListInquiries",
  filename: "src/lib/admin.functions.ts"
}, (opts) => adminListInquiries.__executeServer(opts));
const adminListInquiries = createServerFn({
  method: "POST"
}).inputValidator((input) => z.object({
  token: z.string()
}).parse(input)).handler(adminListInquiries_createServerFn_handler, async ({
  data
}) => {
  checkAdmin(data.token);
  const {
    data: rows,
    error
  } = await supabaseAdmin.from("inquiries").select("*").order("created_at", {
    ascending: false
  });
  if (error) throw new Error(error.message);
  return rows ?? [];
});
const adminStats_createServerFn_handler = createServerRpc({
  id: "fc54988025651b0d207f9ef4346d9f0fe848ff17785294a4a080cffaee281f4f",
  name: "adminStats",
  filename: "src/lib/admin.functions.ts"
}, (opts) => adminStats.__executeServer(opts));
const adminStats = createServerFn({
  method: "POST"
}).inputValidator((input) => z.object({
  token: z.string()
}).parse(input)).handler(adminStats_createServerFn_handler, async ({
  data
}) => {
  checkAdmin(data.token);
  const [p, b, i] = await Promise.all([supabaseAdmin.from("products").select("id", {
    count: "exact",
    head: true
  }), supabaseAdmin.from("blog_posts").select("id", {
    count: "exact",
    head: true
  }), supabaseAdmin.from("inquiries").select("id", {
    count: "exact",
    head: true
  })]);
  return {
    products: p.count ?? 0,
    posts: b.count ?? 0,
    inquiries: i.count ?? 0,
    generated_at: (/* @__PURE__ */ new Date()).toISOString()
  };
});
const ProductInput = z.object({
  slug: z.string().trim().min(1).max(200),
  name: z.string().trim().min(1).max(300),
  category: z.string().trim().min(1).max(100),
  short: z.string().max(500).default(""),
  tagline: z.string().max(300).default(""),
  size: z.string().max(200).default(""),
  description: z.array(z.string()).default([]),
  benefits: z.array(z.string()).default([]),
  facts: z.array(z.object({
    label: z.string(),
    value: z.string()
  })).default([]),
  ingredients: z.array(z.object({
    name: z.string(),
    description: z.string()
  })).default([]),
  support: z.array(z.object({
    ingredient: z.string(),
    detail: z.string(),
    bullets: z.array(z.string()).optional()
  })).default([]),
  use: z.string().max(500).default(""),
  image_key: z.string().max(200).default(""),
  status: z.enum(["active", "hidden"]).default("active"),
  featured_in_hero: z.boolean().default(false),
  display_order: z.number().int().default(0)
});
const adminUpsertProduct_createServerFn_handler = createServerRpc({
  id: "8552c7bea139694beea39d17e69f323a972d63fd26947a65dd6b49554eb191c8",
  name: "adminUpsertProduct",
  filename: "src/lib/admin.functions.ts"
}, (opts) => adminUpsertProduct.__executeServer(opts));
const adminUpsertProduct = createServerFn({
  method: "POST"
}).inputValidator((input) => z.object({
  token: z.string(),
  id: z.string().optional(),
  product: ProductInput
}).parse(input)).handler(adminUpsertProduct_createServerFn_handler, async ({
  data
}) => {
  checkAdmin(data.token);
  if (data.id) {
    const {
      error
    } = await supabaseAdmin.from("products").update(data.product).eq("id", data.id);
    if (error) throw new Error(error.message);
  } else {
    const {
      error
    } = await supabaseAdmin.from("products").insert(data.product);
    if (error) throw new Error(error.message);
  }
  return {
    ok: true
  };
});
const adminDeleteProduct_createServerFn_handler = createServerRpc({
  id: "0ddf57ac23192120a1e98e48f57343c6fe83e8a1ddcf5df54be83354a1f768ad",
  name: "adminDeleteProduct",
  filename: "src/lib/admin.functions.ts"
}, (opts) => adminDeleteProduct.__executeServer(opts));
const adminDeleteProduct = createServerFn({
  method: "POST"
}).inputValidator((input) => z.object({
  token: z.string(),
  id: z.string()
}).parse(input)).handler(adminDeleteProduct_createServerFn_handler, async ({
  data
}) => {
  checkAdmin(data.token);
  const {
    error
  } = await supabaseAdmin.from("products").delete().eq("id", data.id);
  if (error) throw new Error(error.message);
  return {
    ok: true
  };
});
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
  published_at: z.string().optional()
});
const adminUpsertPost_createServerFn_handler = createServerRpc({
  id: "ad25067aac02edfbbef739e707988bc188b8eedd0ff973f2468774a4919f719f",
  name: "adminUpsertPost",
  filename: "src/lib/admin.functions.ts"
}, (opts) => adminUpsertPost.__executeServer(opts));
const adminUpsertPost = createServerFn({
  method: "POST"
}).inputValidator((input) => z.object({
  token: z.string(),
  id: z.string().optional(),
  post: PostInput
}).parse(input)).handler(adminUpsertPost_createServerFn_handler, async ({
  data
}) => {
  checkAdmin(data.token);
  if (data.id) {
    const {
      error
    } = await supabaseAdmin.from("blog_posts").update(data.post).eq("id", data.id);
    if (error) throw new Error(error.message);
  } else {
    const {
      error
    } = await supabaseAdmin.from("blog_posts").insert(data.post);
    if (error) throw new Error(error.message);
  }
  return {
    ok: true
  };
});
const adminDeletePost_createServerFn_handler = createServerRpc({
  id: "706974d253749a4b207ea9f45681167b7d9acb69ae04a29b711b2519d6b957f5",
  name: "adminDeletePost",
  filename: "src/lib/admin.functions.ts"
}, (opts) => adminDeletePost.__executeServer(opts));
const adminDeletePost = createServerFn({
  method: "POST"
}).inputValidator((input) => z.object({
  token: z.string(),
  id: z.string()
}).parse(input)).handler(adminDeletePost_createServerFn_handler, async ({
  data
}) => {
  checkAdmin(data.token);
  const {
    error
  } = await supabaseAdmin.from("blog_posts").delete().eq("id", data.id);
  if (error) throw new Error(error.message);
  return {
    ok: true
  };
});
const adminMarkInquiry_createServerFn_handler = createServerRpc({
  id: "0adf0947a980888514a3ecbe23ed20828668f11d84176da48515d9bf0a01b558",
  name: "adminMarkInquiry",
  filename: "src/lib/admin.functions.ts"
}, (opts) => adminMarkInquiry.__executeServer(opts));
const adminMarkInquiry = createServerFn({
  method: "POST"
}).inputValidator((input) => z.object({
  token: z.string(),
  id: z.string(),
  is_read: z.boolean()
}).parse(input)).handler(adminMarkInquiry_createServerFn_handler, async ({
  data
}) => {
  checkAdmin(data.token);
  const {
    error
  } = await supabaseAdmin.from("inquiries").update({
    is_read: data.is_read
  }).eq("id", data.id);
  if (error) throw new Error(error.message);
  return {
    ok: true
  };
});
const adminDeleteInquiry_createServerFn_handler = createServerRpc({
  id: "4e9a5336a43316bdf43f9a54072c33c6e990dafa61d6bcc86c348713e8ffa297",
  name: "adminDeleteInquiry",
  filename: "src/lib/admin.functions.ts"
}, (opts) => adminDeleteInquiry.__executeServer(opts));
const adminDeleteInquiry = createServerFn({
  method: "POST"
}).inputValidator((input) => z.object({
  token: z.string(),
  id: z.string()
}).parse(input)).handler(adminDeleteInquiry_createServerFn_handler, async ({
  data
}) => {
  checkAdmin(data.token);
  const {
    error
  } = await supabaseAdmin.from("inquiries").delete().eq("id", data.id);
  if (error) throw new Error(error.message);
  return {
    ok: true
  };
});
const adminUpdateSettings_createServerFn_handler = createServerRpc({
  id: "e078a971dab9be475414606cb4b44659a840b7f88ab7bd2113fd0b66f57db84a",
  name: "adminUpdateSettings",
  filename: "src/lib/admin.functions.ts"
}, (opts) => adminUpdateSettings.__executeServer(opts));
const adminUpdateSettings = createServerFn({
  method: "POST"
}).inputValidator((input) => z.object({
  token: z.string(),
  settings: z.record(z.string(), z.string())
}).parse(input)).handler(adminUpdateSettings_createServerFn_handler, async ({
  data
}) => {
  checkAdmin(data.token);
  const rows = Object.entries(data.settings).map(([key, value]) => ({
    key,
    value,
    updated_at: (/* @__PURE__ */ new Date()).toISOString()
  }));
  const {
    error
  } = await supabaseAdmin.from("site_settings").upsert(rows, {
    onConflict: "key"
  });
  if (error) throw new Error(error.message);
  return {
    ok: true
  };
});
export {
  adminDeleteInquiry_createServerFn_handler,
  adminDeletePost_createServerFn_handler,
  adminDeleteProduct_createServerFn_handler,
  adminListInquiries_createServerFn_handler,
  adminListPosts_createServerFn_handler,
  adminListProducts_createServerFn_handler,
  adminMarkInquiry_createServerFn_handler,
  adminStats_createServerFn_handler,
  adminUpdateSettings_createServerFn_handler,
  adminUpsertPost_createServerFn_handler,
  adminUpsertProduct_createServerFn_handler,
  verifyAdmin_createServerFn_handler
};
