import { jsxs, jsx } from "react/jsx-runtime";
import { useQueryClient, useQuery } from "@tanstack/react-query";
import { u as useServerFn } from "./useServerFn-DL2oePlL.js";
import { f as adminListInquiries, g as adminMarkInquiry, h as adminDeleteInquiry } from "./admin.functions-DCUBBjpO.js";
import { g as getAdminToken } from "./admin-session-CrdnosSJ.js";
import { B as Button } from "./button-TjZkfKyC.js";
import { Mail, MailOpen, Trash2 } from "lucide-react";
import "react";
import "@tanstack/react-router";
import "./router-Cgia5wh0.js";
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
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./utils-H80jjgLf.js";
import "clsx";
import "tailwind-merge";
function AdminInquiries() {
  const token = getAdminToken() || "";
  const list = useServerFn(adminListInquiries);
  const mark = useServerFn(adminMarkInquiry);
  const del = useServerFn(adminDeleteInquiry);
  const qc = useQueryClient();
  const {
    data,
    isLoading
  } = useQuery({
    queryKey: ["admin", "inquiries"],
    queryFn: () => list({
      data: {
        token
      }
    })
  });
  async function toggle(id, is_read) {
    await mark({
      data: {
        token,
        id,
        is_read
      }
    });
    qc.invalidateQueries({
      queryKey: ["admin", "inquiries"]
    });
  }
  async function remove(id) {
    if (!confirm("Delete this inquiry?")) return;
    await del({
      data: {
        token,
        id
      }
    });
    qc.invalidateQueries({
      queryKey: ["admin", "inquiries"]
    });
  }
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("h1", { className: "font-display text-3xl", children: "Inquiries" }),
    /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Distributor and contact form submissions." }),
    /* @__PURE__ */ jsx("div", { className: "mt-8 space-y-3", children: isLoading ? /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Loading…" }) : (data ?? []).length === 0 ? /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "No inquiries yet." }) : (data ?? []).map((i) => /* @__PURE__ */ jsx("div", { className: `rounded-lg border bg-background p-4 ${i.is_read ? "opacity-70" : ""}`, children: /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-4", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "font-semibold", children: [
          i.full_name,
          " ",
          /* @__PURE__ */ jsxs("span", { className: "font-normal text-muted-foreground", children: [
            "<",
            i.email,
            ">"
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-1 text-xs text-muted-foreground", children: [
          [i.company, i.country, i.phone].filter(Boolean).join(" · "),
          " · ",
          new Date(i.created_at).toLocaleString()
        ] }),
        i.product_interest ? /* @__PURE__ */ jsxs("div", { className: "mt-2 text-sm", children: [
          /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Interest:" }),
          " ",
          i.product_interest
        ] }) : null,
        /* @__PURE__ */ jsx("p", { className: "mt-2 whitespace-pre-wrap text-sm", children: i.message })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-1", children: [
        /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "icon", onClick: () => toggle(i.id, !i.is_read), title: i.is_read ? "Mark unread" : "Mark read", children: i.is_read ? /* @__PURE__ */ jsx(Mail, { className: "h-4 w-4" }) : /* @__PURE__ */ jsx(MailOpen, { className: "h-4 w-4" }) }),
        /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "icon", onClick: () => remove(i.id), children: /* @__PURE__ */ jsx(Trash2, { className: "h-4 w-4" }) })
      ] })
    ] }) }, i.id)) })
  ] });
}
export {
  AdminInquiries as component
};
