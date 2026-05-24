import { jsx, jsxs } from "react/jsx-runtime";
import { useNavigate } from "@tanstack/react-router";
import { u as useServerFn } from "./useServerFn-DL2oePlL.js";
import { useState, useEffect } from "react";
import { v as verifyAdmin } from "./admin.functions-DCUBBjpO.js";
import { g as getAdminToken, s as setAdminToken } from "./admin-session-CrdnosSJ.js";
import { B as Button } from "./button-TjZkfKyC.js";
import { L as Label, I as Input } from "./label-4pBKAOFV.js";
import "./router-Cgia5wh0.js";
import "@tanstack/react-query";
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
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./utils-H80jjgLf.js";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-label";
function AdminLogin() {
  const navigate = useNavigate();
  const verify = useServerFn(verifyAdmin);
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    if (getAdminToken()) navigate({
      to: "/admin"
    });
  }, [navigate]);
  async function onSubmit(e) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      await verify({
        data: {
          password
        }
      });
      setAdminToken(password);
      navigate({
        to: "/admin"
      });
    } catch {
      setError("Invalid password");
    } finally {
      setLoading(false);
    }
  }
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-muted/30 px-4", children: /* @__PURE__ */ jsxs("form", { onSubmit, className: "w-full max-w-sm rounded-xl border bg-background p-8 shadow-sm", children: [
    /* @__PURE__ */ jsx("h1", { className: "font-display text-2xl", children: "Admin sign in" }),
    /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Franceshgrace admin dashboard" }),
    /* @__PURE__ */ jsxs("div", { className: "mt-6 space-y-2", children: [
      /* @__PURE__ */ jsx(Label, { htmlFor: "password", children: "Password" }),
      /* @__PURE__ */ jsx(Input, { id: "password", type: "password", value: password, onChange: (e) => setPassword(e.target.value), required: true })
    ] }),
    error ? /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm text-destructive", children: error }) : null,
    /* @__PURE__ */ jsx(Button, { type: "submit", className: "mt-6 w-full", disabled: loading, children: loading ? "Signing in…" : "Sign in" })
  ] }) });
}
export {
  AdminLogin as component
};
