import { c as createSsrRpc } from "./router-Cgia5wh0.js";
import { z } from "zod";
import { c as createServerFn } from "./server-Bb_yri05.js";
const verifyAdmin = createServerFn({
  method: "POST"
}).inputValidator((input) => z.object({
  password: z.string().min(1).max(200)
}).parse(input)).handler(createSsrRpc("1f15d2a65f64def84430f13cdf174f0419c053b323a2e32dd43a2c3f365f6488"));
const adminListProducts = createServerFn({
  method: "POST"
}).inputValidator((input) => z.object({
  token: z.string()
}).parse(input)).handler(createSsrRpc("9932f7d91182148199cbc8b49e99aa83ab2855e0f2166e0d0e38e6c091b587df"));
const adminListPosts = createServerFn({
  method: "POST"
}).inputValidator((input) => z.object({
  token: z.string()
}).parse(input)).handler(createSsrRpc("c36083dfd2f49d453c7629b8a868d6b2b5a7c9fc0ff160379cfd2d3adcba24b4"));
const adminListInquiries = createServerFn({
  method: "POST"
}).inputValidator((input) => z.object({
  token: z.string()
}).parse(input)).handler(createSsrRpc("4c43e3cfba445d5ea11b75e2ce5b3c2a2e72781caf96b818b2440dba1777826e"));
const adminStats = createServerFn({
  method: "POST"
}).inputValidator((input) => z.object({
  token: z.string()
}).parse(input)).handler(createSsrRpc("fc54988025651b0d207f9ef4346d9f0fe848ff17785294a4a080cffaee281f4f"));
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
const adminUpsertProduct = createServerFn({
  method: "POST"
}).inputValidator((input) => z.object({
  token: z.string(),
  id: z.string().optional(),
  product: ProductInput
}).parse(input)).handler(createSsrRpc("8552c7bea139694beea39d17e69f323a972d63fd26947a65dd6b49554eb191c8"));
const adminDeleteProduct = createServerFn({
  method: "POST"
}).inputValidator((input) => z.object({
  token: z.string(),
  id: z.string()
}).parse(input)).handler(createSsrRpc("0ddf57ac23192120a1e98e48f57343c6fe83e8a1ddcf5df54be83354a1f768ad"));
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
const adminUpsertPost = createServerFn({
  method: "POST"
}).inputValidator((input) => z.object({
  token: z.string(),
  id: z.string().optional(),
  post: PostInput
}).parse(input)).handler(createSsrRpc("ad25067aac02edfbbef739e707988bc188b8eedd0ff973f2468774a4919f719f"));
const adminDeletePost = createServerFn({
  method: "POST"
}).inputValidator((input) => z.object({
  token: z.string(),
  id: z.string()
}).parse(input)).handler(createSsrRpc("706974d253749a4b207ea9f45681167b7d9acb69ae04a29b711b2519d6b957f5"));
const adminMarkInquiry = createServerFn({
  method: "POST"
}).inputValidator((input) => z.object({
  token: z.string(),
  id: z.string(),
  is_read: z.boolean()
}).parse(input)).handler(createSsrRpc("0adf0947a980888514a3ecbe23ed20828668f11d84176da48515d9bf0a01b558"));
const adminDeleteInquiry = createServerFn({
  method: "POST"
}).inputValidator((input) => z.object({
  token: z.string(),
  id: z.string()
}).parse(input)).handler(createSsrRpc("4e9a5336a43316bdf43f9a54072c33c6e990dafa61d6bcc86c348713e8ffa297"));
const adminUpdateSettings = createServerFn({
  method: "POST"
}).inputValidator((input) => z.object({
  token: z.string(),
  settings: z.record(z.string(), z.string())
}).parse(input)).handler(createSsrRpc("e078a971dab9be475414606cb4b44659a840b7f88ab7bd2113fd0b66f57db84a"));
export {
  adminStats as a,
  adminUpdateSettings as b,
  adminListProducts as c,
  adminUpsertProduct as d,
  adminDeleteProduct as e,
  adminListInquiries as f,
  adminMarkInquiry as g,
  adminDeleteInquiry as h,
  adminListPosts as i,
  adminUpsertPost as j,
  adminDeletePost as k,
  verifyAdmin as v
};
