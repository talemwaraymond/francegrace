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
const InquirySchema = z.object({
  full_name: z.string().trim().min(1).max(120),
  company: z.string().trim().max(200).optional().default(""),
  country: z.string().trim().max(100).optional().default(""),
  email: z.string().trim().email().max(200),
  phone: z.string().trim().max(50).optional().default(""),
  product_interest: z.string().trim().max(200).optional().default(""),
  message: z.string().trim().min(1).max(2e3)
});
const submitInquiry_createServerFn_handler = createServerRpc({
  id: "ea4a58c1fca796a329d2985f8406ba6b2bc550b67755cccb8af5f03a8e563c51",
  name: "submitInquiry",
  filename: "src/lib/inquiry.functions.ts"
}, (opts) => submitInquiry.__executeServer(opts));
const submitInquiry = createServerFn({
  method: "POST"
}).inputValidator((input) => InquirySchema.parse(input)).handler(submitInquiry_createServerFn_handler, async ({
  data
}) => {
  const {
    error
  } = await supabaseAdmin.from("inquiries").insert(data);
  if (error) throw new Error(error.message);
  return {
    ok: true
  };
});
export {
  submitInquiry_createServerFn_handler
};
