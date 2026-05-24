import { jsxs, jsx } from "react/jsx-runtime";
import { Sparkles, HeartHandshake, Award, Lightbulb, ShieldCheck, Users, Leaf, FlaskConical } from "lucide-react";
const values = [{
  icon: Award,
  title: "Quality",
  text: "Uncompromising standards from sourcing to bottle."
}, {
  icon: HeartHandshake,
  title: "Wellness",
  text: "Real benefits for real people, every day."
}, {
  icon: Lightbulb,
  title: "Innovation",
  text: "Modern formulations grounded in research."
}, {
  icon: ShieldCheck,
  title: "Integrity",
  text: "Honest labels, transparent practices."
}, {
  icon: Users,
  title: "Customer Trust",
  text: "Your wellbeing is our highest priority."
}];
const whyCards = [{
  icon: Leaf,
  title: "Premium Ingredients",
  text: "Carefully sourced botanicals, vitamins, and minerals selected for purity and potency."
}, {
  icon: FlaskConical,
  title: "Science-Inspired",
  text: "Modern formulations grounded in nutritional research and clinical wisdom."
}, {
  icon: ShieldCheck,
  title: "Quality Assured",
  text: "Manufactured under strict GMP standards for consistent quality every batch."
}, {
  icon: Sparkles,
  title: "Daily Wellness",
  text: "Practical formats designed to fit seamlessly into your everyday routine."
}, {
  icon: Award,
  title: "Trusted Brand",
  text: "Built on transparency, integrity, and a genuine commitment to your wellbeing."
}];
function AboutPage() {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("section", { className: "bg-cream", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsx("span", { className: "text-xs font-semibold uppercase tracking-[0.2em] text-primary", children: "About Franceshgrace" }),
      /* @__PURE__ */ jsxs("h1", { className: "mt-4 font-serif text-5xl leading-tight md:text-6xl", children: [
        "Wellness backed by ",
        /* @__PURE__ */ jsx("span", { className: "italic text-gold", children: "nature" }),
        " & science."
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-6 text-lg text-muted-foreground", children: "We're a wellness brand for everyday people who care how they feel. Crafted with care. Grounded in research. Built to be trusted." })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "mx-auto grid max-w-6xl grid-cols-1 gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 lg:px-8", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(Sparkles, { className: "h-8 w-8 text-gold" }),
        /* @__PURE__ */ jsx("h2", { className: "mt-3 font-serif text-3xl md:text-4xl", children: "Our Story" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-muted-foreground", children: "Franceshgrace was founded on a simple belief: premium wellness should be accessible, honest, and genuinely effective. We bring together carefully selected ingredients and modern formulations, then deliver them in formats that fit real life." })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(HeartHandshake, { className: "h-8 w-8 text-gold" }),
        /* @__PURE__ */ jsx("h2", { className: "mt-3 font-serif text-3xl md:text-4xl", children: "Our Mission" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-muted-foreground", children: "To provide high-quality wellness supplements that support healthier lifestyles through carefully selected ingredients and modern formulations." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "bg-emerald-deep py-16 text-cream", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsx("span", { className: "text-xs font-semibold uppercase tracking-[0.2em] text-gold", children: "Our Vision" }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 font-serif text-3xl leading-snug md:text-4xl", children: '"To become a trusted wellness brand across Africa and global markets."' })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsx("span", { className: "text-xs font-semibold uppercase tracking-[0.2em] text-primary", children: "Our Values" }),
        /* @__PURE__ */ jsx("h2", { className: "mt-3 font-serif text-4xl md:text-5xl", children: "What we stand for" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5", children: values.map((v) => /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-border bg-card p-6 text-center transition-shadow hover:shadow-md", children: [
        /* @__PURE__ */ jsx(v.icon, { className: "mx-auto h-8 w-8 text-primary" }),
        /* @__PURE__ */ jsx("h3", { className: "mt-4 font-serif text-xl", children: v.title }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: v.text })
      ] }, v.title)) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "bg-emerald-deep text-cream", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "max-w-2xl", children: [
        /* @__PURE__ */ jsx("span", { className: "text-xs font-semibold uppercase tracking-[0.2em] text-gold", children: "Why Franceshgrace" }),
        /* @__PURE__ */ jsx("h2", { className: "mt-3 font-serif text-4xl md:text-5xl", children: "A standard you can feel." }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-cream/80", children: "Five principles guide every formula we make — so the product in your cabinet is one you can trust, every single day." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5", children: whyCards.map((c) => /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-cream/10 bg-cream/5 p-6 backdrop-blur transition-colors hover:bg-cream/10", children: [
        /* @__PURE__ */ jsx(c.icon, { className: "h-7 w-7 text-gold" }),
        /* @__PURE__ */ jsx("h3", { className: "mt-4 font-serif text-xl text-cream", children: c.title }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-cream/75", children: c.text })
      ] }, c.title)) })
    ] }) })
  ] });
}
export {
  AboutPage as component
};
