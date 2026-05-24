import { jsxs, jsx } from "react/jsx-runtime";
import { useQueryClient, useQuery } from "@tanstack/react-query";
import { u as useServerFn } from "./useServerFn-DL2oePlL.js";
import { useState } from "react";
import { i as adminListPosts, j as adminUpsertPost, k as adminDeletePost } from "./admin.functions-DCUBBjpO.js";
import { g as getAdminToken } from "./admin-session-CrdnosSJ.js";
import { B as Button } from "./button-TjZkfKyC.js";
import { L as Label, I as Input } from "./label-4pBKAOFV.js";
import { T as Textarea } from "./textarea-DSyJ1nlY.js";
import { T as Table, a as TableHeader, b as TableRow, c as TableHead, d as TableBody, e as TableCell, D as Dialog, f as DialogContent, g as DialogHeader, h as DialogTitle, i as DialogFooter } from "./dialog-DICzzOI3.js";
import { Plus, Pencil, Trash2 } from "lucide-react";
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
import "@radix-ui/react-label";
import "@radix-ui/react-dialog";
function lines(v) {
  return v.split("\n").map((s) => s.trim()).filter(Boolean);
}
function AdminBlog() {
  const token = getAdminToken() || "";
  const list = useServerFn(adminListPosts);
  const upsert = useServerFn(adminUpsertPost);
  const del = useServerFn(adminDeletePost);
  const qc = useQueryClient();
  const {
    data,
    isLoading
  } = useQuery({
    queryKey: ["admin", "posts"],
    queryFn: () => list({
      data: {
        token
      }
    })
  });
  const [editing, setEditing] = useState(null);
  const [open, setOpen] = useState(false);
  function startNew() {
    setEditing({
      id: "",
      slug: "",
      title: "",
      category: "",
      excerpt: "",
      body: [],
      takeaways: [],
      author: "Franceshgrace",
      image_key: "",
      read_minutes: 4,
      status: "published",
      published_at: (/* @__PURE__ */ new Date()).toISOString()
    });
    setOpen(true);
  }
  async function save(e) {
    e.preventDefault();
    if (!editing) return;
    const fd = new FormData(e.currentTarget);
    const payload = {
      slug: String(fd.get("slug") || ""),
      title: String(fd.get("title") || ""),
      category: String(fd.get("category") || ""),
      excerpt: String(fd.get("excerpt") || ""),
      body: lines(String(fd.get("body") || "")),
      takeaways: lines(String(fd.get("takeaways") || "")),
      author: String(fd.get("author") || "Franceshgrace"),
      image_key: String(fd.get("image_key") || ""),
      read_minutes: Number(fd.get("read_minutes") || 4),
      status: String(fd.get("status") || "published")
    };
    await upsert({
      data: {
        token,
        id: editing.id || void 0,
        post: payload
      }
    });
    setOpen(false);
    setEditing(null);
    qc.invalidateQueries({
      queryKey: ["admin", "posts"]
    });
  }
  async function remove(id) {
    if (!confirm("Delete this post?")) return;
    await del({
      data: {
        token,
        id
      }
    });
    qc.invalidateQueries({
      queryKey: ["admin", "posts"]
    });
  }
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h1", { className: "font-display text-3xl", children: "Blog" }),
        /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Manage journal posts." })
      ] }),
      /* @__PURE__ */ jsxs(Button, { onClick: startNew, children: [
        /* @__PURE__ */ jsx(Plus, { className: "mr-1 h-4 w-4" }),
        "New post"
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-8 rounded-lg border bg-background", children: /* @__PURE__ */ jsxs(Table, { children: [
      /* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, { children: [
        /* @__PURE__ */ jsx(TableHead, { children: "Title" }),
        /* @__PURE__ */ jsx(TableHead, { children: "Category" }),
        /* @__PURE__ */ jsx(TableHead, { children: "Status" }),
        /* @__PURE__ */ jsx(TableHead, { children: "Published" }),
        /* @__PURE__ */ jsx(TableHead, { className: "w-32 text-right", children: "Actions" })
      ] }) }),
      /* @__PURE__ */ jsx(TableBody, { children: isLoading ? /* @__PURE__ */ jsx(TableRow, { children: /* @__PURE__ */ jsx(TableCell, { colSpan: 5, children: "Loading…" }) }) : (data ?? []).map((p) => /* @__PURE__ */ jsxs(TableRow, { children: [
        /* @__PURE__ */ jsx(TableCell, { className: "font-medium", children: p.title }),
        /* @__PURE__ */ jsx(TableCell, { children: p.category }),
        /* @__PURE__ */ jsx(TableCell, { children: p.status }),
        /* @__PURE__ */ jsx(TableCell, { children: new Date(p.published_at).toLocaleDateString() }),
        /* @__PURE__ */ jsxs(TableCell, { className: "text-right", children: [
          /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "icon", onClick: () => {
            setEditing(p);
            setOpen(true);
          }, children: /* @__PURE__ */ jsx(Pencil, { className: "h-4 w-4" }) }),
          /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "icon", onClick: () => remove(p.id), children: /* @__PURE__ */ jsx(Trash2, { className: "h-4 w-4" }) })
        ] })
      ] }, p.id)) })
    ] }) }),
    /* @__PURE__ */ jsx(Dialog, { open, onOpenChange: setOpen, children: /* @__PURE__ */ jsxs(DialogContent, { className: "max-h-[90vh] max-w-2xl overflow-y-auto", children: [
      /* @__PURE__ */ jsx(DialogHeader, { children: /* @__PURE__ */ jsx(DialogTitle, { children: editing?.id ? "Edit post" : "New post" }) }),
      editing ? /* @__PURE__ */ jsxs("form", { onSubmit: save, className: "grid grid-cols-1 gap-4 sm:grid-cols-2", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { children: "Slug" }),
          /* @__PURE__ */ jsx(Input, { name: "slug", defaultValue: editing.slug, required: true })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { children: "Category" }),
          /* @__PURE__ */ jsx(Input, { name: "category", defaultValue: editing.category, required: true })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "sm:col-span-2", children: [
          /* @__PURE__ */ jsx(Label, { children: "Title" }),
          /* @__PURE__ */ jsx(Input, { name: "title", defaultValue: editing.title, required: true })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "sm:col-span-2", children: [
          /* @__PURE__ */ jsx(Label, { children: "Excerpt" }),
          /* @__PURE__ */ jsx(Textarea, { name: "excerpt", rows: 2, defaultValue: editing.excerpt })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "sm:col-span-2", children: [
          /* @__PURE__ */ jsx(Label, { children: "Body (one paragraph per line)" }),
          /* @__PURE__ */ jsx(Textarea, { name: "body", rows: 8, defaultValue: editing.body.join("\n") })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "sm:col-span-2", children: [
          /* @__PURE__ */ jsx(Label, { children: "Takeaways (one per line)" }),
          /* @__PURE__ */ jsx(Textarea, { name: "takeaways", rows: 3, defaultValue: editing.takeaways.join("\n") })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { children: "Author" }),
          /* @__PURE__ */ jsx(Input, { name: "author", defaultValue: editing.author })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { children: "Image key" }),
          /* @__PURE__ */ jsx(Input, { name: "image_key", defaultValue: editing.image_key })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { children: "Read minutes" }),
          /* @__PURE__ */ jsx(Input, { type: "number", name: "read_minutes", defaultValue: editing.read_minutes })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { children: "Status" }),
          /* @__PURE__ */ jsxs("select", { name: "status", defaultValue: editing.status, className: "flex h-9 w-full rounded-md border border-input bg-transparent px-3 text-sm", children: [
            /* @__PURE__ */ jsx("option", { value: "published", children: "published" }),
            /* @__PURE__ */ jsx("option", { value: "draft", children: "draft" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs(DialogFooter, { className: "sm:col-span-2", children: [
          /* @__PURE__ */ jsx(Button, { type: "button", variant: "ghost", onClick: () => setOpen(false), children: "Cancel" }),
          /* @__PURE__ */ jsx(Button, { type: "submit", children: "Save" })
        ] })
      ] }) : null
    ] }) })
  ] });
}
export {
  AdminBlog as component
};
