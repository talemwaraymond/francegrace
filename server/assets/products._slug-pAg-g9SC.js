import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
const SplitNotFoundComponent = () => /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-3xl px-4 py-24 text-center", children: [
  /* @__PURE__ */ jsx("h1", { className: "font-serif text-4xl", children: "Product not found" }),
  /* @__PURE__ */ jsxs(Link, { to: "/products", className: "mt-6 inline-flex items-center gap-2 text-primary hover:underline", children: [
    /* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4" }),
    " Back to all products"
  ] })
] });
export {
  SplitNotFoundComponent as notFoundComponent
};
