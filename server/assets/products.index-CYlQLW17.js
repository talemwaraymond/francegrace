import { jsxs, jsx } from "react/jsx-runtime";
const SplitErrorComponent = ({
  error
}) => /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-3xl px-4 py-24 text-center", children: [
  /* @__PURE__ */ jsx("h1", { className: "font-serif text-3xl", children: "Couldn't load products" }),
  /* @__PURE__ */ jsx("p", { className: "mt-3 text-muted-foreground", children: error.message })
] });
export {
  SplitErrorComponent as errorComponent
};
