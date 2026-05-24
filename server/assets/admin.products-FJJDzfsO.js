import { jsxs, jsx } from "react/jsx-runtime";
import { useQueryClient, useQuery } from "@tanstack/react-query";
import { u as useServerFn } from "./useServerFn-DL2oePlL.js";
import { useState } from "react";
import { c as adminListProducts, d as adminUpsertProduct, e as adminDeleteProduct } from "./admin.functions-DCUBBjpO.js";
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
function AdminProducts() {
  const token = getAdminToken() || "";
  const list = useServerFn(adminListProducts);
  const upsert = useServerFn(adminUpsertProduct);
  const del = useServerFn(adminDeleteProduct);
  const qc = useQueryClient();
  const {
    data,
    isLoading
  } = useQuery({
    queryKey: ["admin", "products"],
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
      name: "",
      category: "",
      short: "",
      tagline: "",
      size: "",
      description: [],
      benefits: [],
      facts: [],
      ingredients: [],
      support: [],
      use: "",
      image_key: "",
      status: "active",
      featured_in_hero: false,
      display_order: 0
    });
    setOpen(true);
  }
  async function save(e) {
    e.preventDefault();
    if (!editing) return;
    const fd = new FormData(e.currentTarget);
    const payload = {
      slug: String(fd.get("slug") || ""),
      name: String(fd.get("name") || ""),
      category: String(fd.get("category") || ""),
      short: String(fd.get("short") || ""),
      tagline: String(fd.get("tagline") || ""),
      size: String(fd.get("size") || ""),
      use: String(fd.get("use") || ""),
      image_key: String(fd.get("image_key") || ""),
      status: String(fd.get("status") || "active"),
      featured_in_hero: fd.get("featured_in_hero") === "on",
      display_order: Number(fd.get("display_order") || 0),
      description: lines(String(fd.get("description") || "")),
      benefits: lines(String(fd.get("benefits") || "")),
      facts: lines(String(fd.get("facts") || "")).map((l) => {
        const [label, ...rest] = l.split("|");
        return {
          label: label.trim(),
          value: rest.join("|").trim()
        };
      }),
      ingredients: lines(String(fd.get("ingredients") || "")).map((l) => {
        const [name, ...rest] = l.split("|");
        return {
          name: name.trim(),
          description: rest.join("|").trim()
        };
      }),
      support: editing.support
    };
    await upsert({
      data: {
        token,
        id: editing.id || void 0,
        product: payload
      }
    });
    setOpen(false);
    setEditing(null);
    qc.invalidateQueries({
      queryKey: ["admin", "products"]
    });
  }
  async function remove(id) {
    if (!confirm("Delete this product?")) return;
    await del({
      data: {
        token,
        id
      }
    });
    qc.invalidateQueries({
      queryKey: ["admin", "products"]
    });
  }
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h1", { className: "font-display text-3xl", children: "Products" }),
        /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Manage your product catalog." })
      ] }),
      /* @__PURE__ */ jsxs(Button, { onClick: startNew, children: [
        /* @__PURE__ */ jsx(Plus, { className: "mr-1 h-4 w-4" }),
        "New product"
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-8 rounded-lg border bg-background", children: /* @__PURE__ */ jsxs(Table, { children: [
      /* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, { children: [
        /* @__PURE__ */ jsx(TableHead, { children: "Name" }),
        /* @__PURE__ */ jsx(TableHead, { children: "Category" }),
        /* @__PURE__ */ jsx(TableHead, { children: "Status" }),
        /* @__PURE__ */ jsx(TableHead, { children: "Order" }),
        /* @__PURE__ */ jsx(TableHead, { className: "w-32 text-right", children: "Actions" })
      ] }) }),
      /* @__PURE__ */ jsx(TableBody, { children: isLoading ? /* @__PURE__ */ jsx(TableRow, { children: /* @__PURE__ */ jsx(TableCell, { colSpan: 5, children: "Loading…" }) }) : (data ?? []).map((p) => /* @__PURE__ */ jsxs(TableRow, { children: [
        /* @__PURE__ */ jsx(TableCell, { className: "font-medium", children: p.name }),
        /* @__PURE__ */ jsx(TableCell, { children: p.category }),
        /* @__PURE__ */ jsx(TableCell, { children: p.status }),
        /* @__PURE__ */ jsx(TableCell, { children: p.display_order }),
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
      /* @__PURE__ */ jsx(DialogHeader, { children: /* @__PURE__ */ jsx(DialogTitle, { children: editing?.id ? "Edit product" : "New product" }) }),
      editing ? /* @__PURE__ */ jsxs("form", { onSubmit: save, className: "grid grid-cols-1 gap-4 sm:grid-cols-2", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { children: "Slug" }),
          /* @__PURE__ */ jsx(Input, { name: "slug", defaultValue: editing.slug, required: true })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { children: "Name" }),
          /* @__PURE__ */ jsx(Input, { name: "name", defaultValue: editing.name, required: true })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { children: "Category" }),
          /* @__PURE__ */ jsx(Input, { name: "category", defaultValue: editing.category, required: true })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { children: "Size" }),
          /* @__PURE__ */ jsx(Input, { name: "size", defaultValue: editing.size })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "sm:col-span-2", children: [
          /* @__PURE__ */ jsx(Label, { children: "Short" }),
          /* @__PURE__ */ jsx(Input, { name: "short", defaultValue: editing.short })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "sm:col-span-2", children: [
          /* @__PURE__ */ jsx(Label, { children: "Tagline" }),
          /* @__PURE__ */ jsx(Input, { name: "tagline", defaultValue: editing.tagline })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "sm:col-span-2", children: [
          /* @__PURE__ */ jsx(Label, { children: "Description (one paragraph per line)" }),
          /* @__PURE__ */ jsx(Textarea, { name: "description", rows: 4, defaultValue: editing.description.join("\n") })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "sm:col-span-2", children: [
          /* @__PURE__ */ jsx(Label, { children: "Benefits (one per line)" }),
          /* @__PURE__ */ jsx(Textarea, { name: "benefits", rows: 4, defaultValue: editing.benefits.join("\n") })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "sm:col-span-2", children: [
          /* @__PURE__ */ jsx(Label, { children: "Facts (label | value per line)" }),
          /* @__PURE__ */ jsx(Textarea, { name: "facts", rows: 4, defaultValue: editing.facts.map((f) => `${f.label} | ${f.value}`).join("\n") })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "sm:col-span-2", children: [
          /* @__PURE__ */ jsx(Label, { children: "Ingredients (name | description per line)" }),
          /* @__PURE__ */ jsx(Textarea, { name: "ingredients", rows: 4, defaultValue: editing.ingredients.map((i) => `${i.name} | ${i.description}`).join("\n") })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "sm:col-span-2", children: [
          /* @__PURE__ */ jsx(Label, { children: "Use" }),
          /* @__PURE__ */ jsx(Textarea, { name: "use", rows: 2, defaultValue: editing.use })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { children: "Image key" }),
          /* @__PURE__ */ jsx(Input, { name: "image_key", defaultValue: editing.image_key })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { children: "Display order" }),
          /* @__PURE__ */ jsx(Input, { type: "number", name: "display_order", defaultValue: editing.display_order })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { children: "Status" }),
          /* @__PURE__ */ jsxs("select", { name: "status", defaultValue: editing.status, className: "flex h-9 w-full rounded-md border border-input bg-transparent px-3 text-sm", children: [
            /* @__PURE__ */ jsx("option", { value: "active", children: "active" }),
            /* @__PURE__ */ jsx("option", { value: "hidden", children: "hidden" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 pt-6", children: [
          /* @__PURE__ */ jsx("input", { type: "checkbox", id: "featured_in_hero", name: "featured_in_hero", defaultChecked: editing.featured_in_hero }),
          /* @__PURE__ */ jsx(Label, { htmlFor: "featured_in_hero", children: "Featured in hero" })
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
  AdminProducts as component
};
