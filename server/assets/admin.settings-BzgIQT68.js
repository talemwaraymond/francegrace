import { jsxs, jsx } from "react/jsx-runtime";
import { useQueryClient, useQuery } from "@tanstack/react-query";
import { u as useServerFn } from "./useServerFn-DL2oePlL.js";
import { b as adminUpdateSettings } from "./admin.functions-DCUBBjpO.js";
import { g as getSiteSettings } from "./router-Cgia5wh0.js";
import { g as getAdminToken } from "./admin-session-CrdnosSJ.js";
import { useState, useEffect } from "react";
import { B as Button } from "./button-TjZkfKyC.js";
import { L as Label, I as Input } from "./label-4pBKAOFV.js";
import { T as Textarea } from "./textarea-DSyJ1nlY.js";
import "@tanstack/react-router";
import "zod";
import "./server-Bb_yri05.js";
import "node:async_hooks";
import "h3-v2";
import "@tanstack/router-core";
import "seroval";
import "@tanstack/history";
import "@tanstack/router-core/ssr/client";
import "@tanstack/router-core/ssr/server";
import "@tanstack/react-router/ssr/server";
import "lucide-react";
import "./client.server-U_pH-Evd.js";
import "@supabase/supabase-js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./utils-H80jjgLf.js";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-label";
function AdminSettings() {
  const token = getAdminToken() || "";
  const get = useServerFn(getSiteSettings);
  const update = useServerFn(adminUpdateSettings);
  const qc = useQueryClient();
  const {
    data
  } = useQuery({
    queryKey: ["site-settings"],
    queryFn: () => get()
  });
  const [form, setForm] = useState({
    contact_email: "",
    footer_disclaimer: "",
    instagram_url: "",
    facebook_url: "",
    linkedin_url: ""
  });
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  useEffect(() => {
    if (data) setForm(data);
  }, [data]);
  async function save(e) {
    e.preventDefault();
    setSaving(true);
    setSaved(false);
    await update({
      data: {
        token,
        settings: form
      }
    });
    setSaving(false);
    setSaved(true);
    qc.invalidateQueries({
      queryKey: ["site-settings"]
    });
  }
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("h1", { className: "font-display text-3xl", children: "Settings" }),
    /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Site-wide settings." }),
    /* @__PURE__ */ jsxs("form", { onSubmit: save, className: "mt-8 max-w-xl space-y-4", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(Label, { children: "Contact email" }),
        /* @__PURE__ */ jsx(Input, { value: form.contact_email, onChange: (e) => setForm({
          ...form,
          contact_email: e.target.value
        }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(Label, { children: "Footer disclaimer" }),
        /* @__PURE__ */ jsx(Textarea, { rows: 3, value: form.footer_disclaimer, onChange: (e) => setForm({
          ...form,
          footer_disclaimer: e.target.value
        }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(Label, { children: "Instagram URL" }),
        /* @__PURE__ */ jsx(Input, { value: form.instagram_url, onChange: (e) => setForm({
          ...form,
          instagram_url: e.target.value
        }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(Label, { children: "Facebook URL" }),
        /* @__PURE__ */ jsx(Input, { value: form.facebook_url, onChange: (e) => setForm({
          ...form,
          facebook_url: e.target.value
        }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(Label, { children: "LinkedIn URL" }),
        /* @__PURE__ */ jsx(Input, { value: form.linkedin_url, onChange: (e) => setForm({
          ...form,
          linkedin_url: e.target.value
        }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 pt-2", children: [
        /* @__PURE__ */ jsx(Button, { type: "submit", disabled: saving, children: saving ? "Saving…" : "Save" }),
        saved ? /* @__PURE__ */ jsx("span", { className: "text-sm text-muted-foreground", children: "Saved." }) : null
      ] })
    ] })
  ] });
}
export {
  AdminSettings as component
};
