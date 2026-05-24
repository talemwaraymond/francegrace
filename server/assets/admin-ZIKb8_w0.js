import { jsx, jsxs } from "react/jsx-runtime";
import { useNavigate, useRouterState, Outlet, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { g as getAdminToken, c as clearAdminToken } from "./admin-session-CrdnosSJ.js";
import { B as Button } from "./button-TjZkfKyC.js";
import { LayoutDashboard, Package, FileText, Inbox, Settings, LogOut } from "lucide-react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./utils-H80jjgLf.js";
import "clsx";
import "tailwind-merge";
function AdminLayout() {
  const navigate = useNavigate();
  const {
    location
  } = useRouterState();
  const [ready, setReady] = useState(false);
  const isLogin = location.pathname === "/admin/login";
  useEffect(() => {
    if (!isLogin && !getAdminToken()) {
      navigate({
        to: "/admin/login"
      });
    } else {
      setReady(true);
    }
  }, [isLogin, navigate, location.pathname]);
  if (isLogin) return /* @__PURE__ */ jsx(Outlet, {});
  if (!ready) return null;
  const nav = [{
    to: "/admin",
    label: "Overview",
    icon: LayoutDashboard,
    exact: true
  }, {
    to: "/admin/products",
    label: "Products",
    icon: Package
  }, {
    to: "/admin/blog",
    label: "Blog",
    icon: FileText
  }, {
    to: "/admin/inquiries",
    label: "Inquiries",
    icon: Inbox
  }, {
    to: "/admin/settings",
    label: "Settings",
    icon: Settings
  }];
  return /* @__PURE__ */ jsxs("div", { className: "flex min-h-screen bg-muted/30", children: [
    /* @__PURE__ */ jsxs("aside", { className: "hidden w-60 shrink-0 border-r bg-background md:flex md:flex-col", children: [
      /* @__PURE__ */ jsxs("div", { className: "border-b px-6 py-5", children: [
        /* @__PURE__ */ jsx("div", { className: "font-display text-lg", children: "Franceshgrace" }),
        /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground", children: "Admin" })
      ] }),
      /* @__PURE__ */ jsx("nav", { className: "flex-1 space-y-1 p-3", children: nav.map((item) => {
        const Icon = item.icon;
        const active = item.exact ? location.pathname === item.to : location.pathname.startsWith(item.to);
        return /* @__PURE__ */ jsxs(Link, { to: item.to, className: `flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors ${active ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-accent"}`, children: [
          /* @__PURE__ */ jsx(Icon, { className: "h-4 w-4" }),
          item.label
        ] }, item.to);
      }) }),
      /* @__PURE__ */ jsx("div", { className: "border-t p-3", children: /* @__PURE__ */ jsxs(Button, { variant: "ghost", className: "w-full justify-start", onClick: () => {
        clearAdminToken();
        navigate({
          to: "/admin/login"
        });
      }, children: [
        /* @__PURE__ */ jsx(LogOut, { className: "mr-2 h-4 w-4" }),
        " Sign out"
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("main", { className: "flex-1 p-6 md:p-10", children: /* @__PURE__ */ jsx(Outlet, {}) })
  ] });
}
export {
  AdminLayout as component
};
