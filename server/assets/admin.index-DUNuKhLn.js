import { jsx, jsxs } from "react/jsx-runtime";
import { useQuery } from "@tanstack/react-query";
import { u as useServerFn } from "./useServerFn-DL2oePlL.js";
import { a as adminStats } from "./admin.functions-DCUBBjpO.js";
import { g as getAdminToken } from "./admin-session-CrdnosSJ.js";
import * as React from "react";
import { c as cn } from "./utils-H80jjgLf.js";
import "@tanstack/react-router";
import "./router-Cgia5wh0.js";
import "lucide-react";
import "./client.server-U_pH-Evd.js";
import "@supabase/supabase-js";
import "./server-Bb_yri05.js";
import "node:async_hooks";
import "h3-v2";
import "@tanstack/router-core";
import "seroval";
import "@tanstack/history";
import "@tanstack/router-core/ssr/client";
import "@tanstack/router-core/ssr/server";
import "@tanstack/react-router/ssr/server";
import "zod";
import "clsx";
import "tailwind-merge";
const Card = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      className: cn("rounded-xl border bg-card text-card-foreground shadow", className),
      ...props
    }
  )
);
Card.displayName = "Card";
const CardHeader = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { ref, className: cn("flex flex-col space-y-1.5 p-6", className), ...props })
);
CardHeader.displayName = "CardHeader";
const CardTitle = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      className: cn("font-semibold leading-none tracking-tight", className),
      ...props
    }
  )
);
CardTitle.displayName = "CardTitle";
const CardDescription = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { ref, className: cn("text-sm text-muted-foreground", className), ...props })
);
CardDescription.displayName = "CardDescription";
const CardContent = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { ref, className: cn("p-6 pt-0", className), ...props })
);
CardContent.displayName = "CardContent";
const CardFooter = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { ref, className: cn("flex items-center p-6 pt-0", className), ...props })
);
CardFooter.displayName = "CardFooter";
function AdminOverview() {
  const stats = useServerFn(adminStats);
  const {
    data,
    isLoading
  } = useQuery({
    queryKey: ["admin", "stats"],
    queryFn: () => stats({
      data: {
        token: getAdminToken() || ""
      }
    })
  });
  const items = [{
    label: "Products",
    value: data?.products ?? 0
  }, {
    label: "Blog posts",
    value: data?.posts ?? 0
  }, {
    label: "Inquiries",
    value: data?.inquiries ?? 0
  }];
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("h1", { className: "font-display text-3xl", children: "Overview" }),
    /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Welcome back. Here's a snapshot of your content." }),
    /* @__PURE__ */ jsx("div", { className: "mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3", children: items.map((it) => /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsx(CardHeader, { className: "pb-2", children: /* @__PURE__ */ jsx(CardTitle, { className: "text-sm font-medium text-muted-foreground", children: it.label }) }),
      /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "text-3xl font-semibold", children: isLoading ? "—" : it.value }) })
    ] }, it.label)) })
  ] });
}
export {
  AdminOverview as component
};
