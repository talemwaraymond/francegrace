import { jsxs, jsx } from "react/jsx-runtime";
import { useRouter } from "@tanstack/react-router";
import { u as useServerFn } from "./useServerFn-DL2oePlL.js";
import { useState } from "react";
import { c as createSsrRpc } from "./router-Cgia5wh0.js";
import { z } from "zod";
import { c as createServerFn } from "./server-Bb_yri05.js";
import { B as Button } from "./button-TjZkfKyC.js";
import { L as Label, I as Input } from "./label-4pBKAOFV.js";
import { T as Textarea } from "./textarea-DSyJ1nlY.js";
import "@tanstack/react-query";
import "lucide-react";
import "./client.server-U_pH-Evd.js";
import "@supabase/supabase-js";
import "node:async_hooks";
import "h3-v2";
import "@tanstack/router-core";
import "seroval";
import "@tanstack/history";
import "@tanstack/router-core/ssr/client";
import "@tanstack/router-core/ssr/server";
import "@tanstack/react-router/ssr/server";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./utils-H80jjgLf.js";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-label";
const InquirySchema = z.object({
  full_name: z.string().trim().min(1).max(120),
  company: z.string().trim().max(200).optional().default(""),
  country: z.string().trim().max(100).optional().default(""),
  email: z.string().trim().email().max(200),
  phone: z.string().trim().max(50).optional().default(""),
  product_interest: z.string().trim().max(200).optional().default(""),
  message: z.string().trim().min(1).max(2e3)
});
const submitInquiry = createServerFn({
  method: "POST"
}).inputValidator((input) => InquirySchema.parse(input)).handler(createSsrRpc("ea4a58c1fca796a329d2985f8406ba6b2bc550b67755cccb8af5f03a8e563c51"));
function DistributorPage() {
  const router = useRouter();
  const submit = useServerFn(submitInquiry);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState(null);
  async function onSubmit(e) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    const fd = new FormData(e.currentTarget);
    try {
      await submit({
        data: {
          full_name: String(fd.get("full_name") || ""),
          company: String(fd.get("company") || ""),
          country: String(fd.get("country") || ""),
          email: String(fd.get("email") || ""),
          phone: String(fd.get("phone") || ""),
          product_interest: String(fd.get("product_interest") || ""),
          message: String(fd.get("message") || "")
        }
      });
      setDone(true);
      router.invalidate();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not submit");
    } finally {
      setSubmitting(false);
    }
  }
  return /* @__PURE__ */ jsxs("section", { className: "mx-auto max-w-3xl px-4 py-20 sm:px-6", children: [
    /* @__PURE__ */ jsx("h1", { className: "font-display text-4xl sm:text-5xl tracking-tight", children: "Become a Distributor" }),
    /* @__PURE__ */ jsx("p", { className: "mt-4 text-muted-foreground", children: "Tell us about your business and we'll be in touch within 48 hours." }),
    done ? /* @__PURE__ */ jsxs("div", { className: "mt-10 rounded-lg border border-border bg-card p-8 text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold", children: "Thank you" }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-muted-foreground", children: "Your inquiry has been received. We'll reach out soon." })
    ] }) : /* @__PURE__ */ jsxs("form", { onSubmit, className: "mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2", children: [
      /* @__PURE__ */ jsxs("div", { className: "sm:col-span-2", children: [
        /* @__PURE__ */ jsx(Label, { htmlFor: "full_name", children: "Full name *" }),
        /* @__PURE__ */ jsx(Input, { id: "full_name", name: "full_name", required: true, maxLength: 120 })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(Label, { htmlFor: "company", children: "Company" }),
        /* @__PURE__ */ jsx(Input, { id: "company", name: "company", maxLength: 200 })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(Label, { htmlFor: "country", children: "Country" }),
        /* @__PURE__ */ jsx(Input, { id: "country", name: "country", maxLength: 100 })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(Label, { htmlFor: "email", children: "Email *" }),
        /* @__PURE__ */ jsx(Input, { id: "email", type: "email", name: "email", required: true, maxLength: 200 })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(Label, { htmlFor: "phone", children: "Phone" }),
        /* @__PURE__ */ jsx(Input, { id: "phone", name: "phone", maxLength: 50 })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "sm:col-span-2", children: [
        /* @__PURE__ */ jsx(Label, { htmlFor: "product_interest", children: "Product of interest" }),
        /* @__PURE__ */ jsx(Input, { id: "product_interest", name: "product_interest", maxLength: 200 })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "sm:col-span-2", children: [
        /* @__PURE__ */ jsx(Label, { htmlFor: "message", children: "Message *" }),
        /* @__PURE__ */ jsx(Textarea, { id: "message", name: "message", required: true, rows: 5, maxLength: 2e3 })
      ] }),
      error ? /* @__PURE__ */ jsx("p", { className: "sm:col-span-2 text-sm text-destructive", children: error }) : null,
      /* @__PURE__ */ jsx("div", { className: "sm:col-span-2", children: /* @__PURE__ */ jsx(Button, { type: "submit", disabled: submitting, size: "lg", children: submitting ? "Submitting…" : "Submit inquiry" }) })
    ] })
  ] });
}
export {
  DistributorPage as component
};
