import { createFileRoute } from "@tanstack/react-router";
import { Award, HeartHandshake, Lightbulb, ShieldCheck, Sparkles, Users, Leaf, FlaskConical, Sparkles as SparklesIcon } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Franceshgrace" },
      { name: "description", content: "Franceshgrace creates premium wellness supplements with carefully selected ingredients and modern formulations. Learn our story, mission, and values." },
      { property: "og:title", content: "About Franceshgrace" },
      { property: "og:description", content: "Wellness backed by nature and science." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: Award, title: "Quality", text: "Uncompromising standards from sourcing to bottle." },
  { icon: HeartHandshake, title: "Wellness", text: "Real benefits for real people, every day." },
  { icon: Lightbulb, title: "Innovation", text: "Modern formulations grounded in research." },
  { icon: ShieldCheck, title: "Integrity", text: "Honest labels, transparent practices." },
  { icon: Users, title: "Customer Trust", text: "Your wellbeing is our highest priority." },
];

const whyCards = [
  { icon: Leaf, title: "Premium Ingredients", text: "Carefully sourced botanicals, vitamins, and minerals selected for purity and potency." },
  { icon: FlaskConical, title: "Science-Inspired", text: "Modern formulations grounded in nutritional research and clinical wisdom." },
  { icon: ShieldCheck, title: "Quality Assured", text: "Manufactured under strict GMP standards for consistent quality every batch." },
  { icon: SparklesIcon, title: "Daily Wellness", text: "Practical formats designed to fit seamlessly into your everyday routine." },
  { icon: Award, title: "Trusted Brand", text: "Built on transparency, integrity, and a genuine commitment to your wellbeing." },
];

function AboutPage() {
  return (
    <div>
      <section className="bg-cream">
        <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">About Franceshgrace</span>
          <h1 className="mt-4 font-serif text-5xl leading-tight md:text-6xl">
            Wellness backed by <span className="italic text-gold">nature</span> & science.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            We're a wellness brand for everyday people who care how they feel. Crafted with care.
            Grounded in research. Built to be trusted.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 lg:px-8">
        <div>
          <Sparkles className="h-8 w-8 text-gold" />
          <h2 className="mt-3 font-serif text-3xl md:text-4xl">Our Story</h2>
          <p className="mt-4 text-muted-foreground">
            Franceshgrace was founded on a simple belief: premium wellness should be accessible,
            honest, and genuinely effective. We bring together carefully selected ingredients and
            modern formulations, then deliver them in formats that fit real life.
          </p>
        </div>
        <div>
          <HeartHandshake className="h-8 w-8 text-gold" />
          <h2 className="mt-3 font-serif text-3xl md:text-4xl">Our Mission</h2>
          <p className="mt-4 text-muted-foreground">
            To provide high-quality wellness supplements that support healthier lifestyles
            through carefully selected ingredients and modern formulations.
          </p>
        </div>
      </section>

      <section className="bg-emerald-deep py-16 text-cream">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Our Vision</span>
          <p className="mt-4 font-serif text-3xl leading-snug md:text-4xl">
            "To become a trusted wellness brand across Africa and global markets."
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Our Values</span>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl">What we stand for</h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {values.map((v) => (
            <div key={v.title} className="rounded-2xl border border-border bg-card p-6 text-center transition-shadow hover:shadow-md">
              <v.icon className="mx-auto h-8 w-8 text-primary" />
              <h3 className="mt-4 font-serif text-xl">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY FRANCESHGRACE — moved from homepage */}
      <section className="bg-emerald-deep text-cream">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Why Franceshgrace</span>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl">A standard you can feel.</h2>
            <p className="mt-4 text-cream/80">
              Five principles guide every formula we make — so the product in your cabinet is one
              you can trust, every single day.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {whyCards.map((c) => (
              <div key={c.title} className="rounded-2xl border border-cream/10 bg-cream/5 p-6 backdrop-blur transition-colors hover:bg-cream/10">
                <c.icon className="h-7 w-7 text-gold" />
                <h3 className="mt-4 font-serif text-xl text-cream">{c.title}</h3>
                <p className="mt-2 text-sm text-cream/75">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
