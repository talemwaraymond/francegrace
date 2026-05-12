import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight, Leaf, ShieldCheck, FlaskConical, Sparkles, Heart, Award,
  Brain, Moon, Dumbbell, Bone, Smile, MessageCircle, Send,
} from "lucide-react";
import { products, categories, type Category } from "@/data/products";
import { ProductCard } from "@/components/site/ProductCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Franceshgrace — Premium Wellness, Crafted with Intention" },
      { name: "description", content: "Premium wellness supplements with carefully selected ingredients and modern formulations. Wellness backed by nature and science." },
      { property: "og:title", content: "Franceshgrace — Premium Wellness, Crafted with Intention" },
      { property: "og:description", content: "Carefully selected ingredients, modern formulations, and a commitment to quality." },
    ],
  }),
  component: HomePage,
});

const stats = [
  { value: "10+", label: "Product Formulas" },
  { value: "6", label: "Wellness Categories" },
  { value: "100%", label: "Quality Assured" },
  { value: "Pan-Africa", label: "Distribution Vision" },
];

const whyCards = [
  { icon: Leaf, title: "Premium Ingredients", text: "Carefully sourced botanicals, vitamins, and minerals selected for purity and potency." },
  { icon: FlaskConical, title: "Science-Inspired", text: "Modern formulations grounded in nutritional research and clinical wisdom." },
  { icon: ShieldCheck, title: "Quality Assured", text: "Manufactured under strict GMP standards for consistent quality every batch." },
  { icon: Sparkles, title: "Daily Wellness", text: "Practical formats designed to fit seamlessly into your everyday routine." },
  { icon: Award, title: "Trusted Brand", text: "Built on transparency, integrity, and a genuine commitment to your wellbeing." },
];

const ingredients = [
  { icon: Heart, name: "Omega-3", desc: "EPA & DHA for heart, brain & joint wellness." },
  { icon: Leaf, name: "Elderberry", desc: "Antioxidant flavonoids for immune support." },
  { icon: Brain, name: "Ashwagandha", desc: "Adaptogen for stress, mood & vitality." },
  { icon: Moon, name: "Magnesium", desc: "Relaxation, sleep & muscle wellness." },
  { icon: Sparkles, name: "Glutathione", desc: "Master antioxidant for skin radiance." },
  { icon: Dumbbell, name: "Maca Root", desc: "Andean superfood for stamina & vitality." },
  { icon: Smile, name: "Turmeric", desc: "Botanical for joint comfort & balance." },
  { icon: ShieldCheck, name: "Zinc", desc: "Trace mineral for immune cell function." },
];

const wellnessCats: { name: Category; from: string; to: string; icon: typeof Leaf }[] = [
  { name: "Immune Support", from: "from-orange-100", to: "to-emerald-100", icon: ShieldCheck },
  { name: "Heart & Brain", from: "from-blue-100", to: "to-sky-200", icon: Heart },
  { name: "Beauty & Skin", from: "from-amber-100", to: "to-rose-100", icon: Sparkles },
  { name: "Stress & Sleep", from: "from-violet-100", to: "to-emerald-100", icon: Moon },
  { name: "Fitness & Performance", from: "from-rose-100", to: "to-amber-100", icon: Dumbbell },
  { name: "Joint & Mobility", from: "from-emerald-100", to: "to-teal-100", icon: Bone },
];

function HomePage() {
  const [activeCat, setActiveCat] = useState<Category | "All">("All");
  const filtered = activeCat === "All" ? products : products.filter((p) => p.category === activeCat);

  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden bg-cream">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div className="fade-in-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
              <Leaf className="h-4 w-4" /> Wellness Backed by Nature & Science
            </span>
            <h1 className="mt-6 font-serif text-5xl leading-[1.05] text-balance sm:text-6xl md:text-7xl">
              Premium wellness, <span className="italic text-gold">crafted</span> with intention.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Carefully selected ingredients, modern formulations, and a commitment to quality —
              for everyday people who care how they feel.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/products" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:bg-emerald-deep hover:shadow-md">
                Explore Products <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/distributors" className="inline-flex items-center rounded-full bg-gold px-6 py-3 text-sm font-medium text-gold-foreground shadow-sm transition-all hover:opacity-90">
                Become a Distributor
              </Link>
              <Link to="/about" className="inline-flex items-center rounded-full border border-foreground/15 bg-transparent px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5">
                Our Story
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative mx-auto aspect-[4/5] max-w-md overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-50 via-cream to-amber-50 shadow-2xl">
              <img src={products[1].image} alt={products[1].name} width={1024} height={1280} className="h-full w-full object-cover" />
            </div>
            <div className="absolute -left-2 top-10 rounded-2xl bg-card px-4 py-3 shadow-lg ring-1 ring-border md:-left-8">
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Total Omega-3</p>
              <p className="font-serif text-2xl text-foreground">2000mg</p>
            </div>
            <div className="absolute -right-2 bottom-10 rounded-2xl bg-card px-4 py-3 shadow-lg ring-1 ring-border md:-right-8">
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Quality Assured</p>
              <p className="font-serif text-base text-foreground">GMP · Vegan friendly</p>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-8 px-4 py-10 sm:px-6 md:grid-cols-4 lg:px-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-serif text-3xl text-gold md:text-4xl">{s.value}</p>
              <p className="mt-1 text-sm text-cream/80">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Our Catalogue</span>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl">Formulas for daily wellness</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Nine premium supplements, each formulated with care for a specific area of wellness.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {(["All", ...categories] as const).map((c) => (
            <button
              key={c}
              onClick={() => setActiveCat(c)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                activeCat === c
                  ? "bg-primary text-primary-foreground"
                  : "bg-accent text-accent-foreground hover:bg-primary/10"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => <ProductCard key={p.slug} product={p} />)}
        </div>
      </section>

      {/* WHY */}
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

      {/* INGREDIENTS */}
      <section id="ingredients" className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Key Ingredients</span>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl">The building blocks of wellness.</h2>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {ingredients.map((i) => (
              <div key={i.name} className="rounded-2xl border border-border bg-card p-5 transition-shadow hover:shadow-md">
                <i.icon className="h-6 w-6 text-primary" />
                <p className="mt-3 font-serif text-lg text-foreground">{i.name}</p>
                <p className="mt-1 text-xs text-muted-foreground">{i.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WELLNESS CATEGORIES */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Browse by Goal</span>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl">Wellness Categories</h2>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {wellnessCats.map((c) => (
            <Link
              key={c.name}
              to="/products"
              className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${c.from} ${c.to} p-8 transition-transform hover:-translate-y-1`}
            >
              <c.icon className="h-8 w-8 text-emerald-deep" />
              <h3 className="mt-4 font-serif text-2xl text-foreground">{c.name}</h3>
              <p className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-emerald-deep">
                Explore <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* DISTRIBUTOR CTA */}
      <section className="bg-foreground text-cream">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Partnership</span>
            <h2 className="mt-3 font-serif text-4xl text-cream md:text-5xl">Become a Franceshgrace Distributor.</h2>
            <p className="mt-5 max-w-lg text-cream/75">
              We're building a trusted wellness brand across Africa and global markets. Join us as
              a distributor and bring premium supplements to your community.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="https://wa.me/10000000000"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-medium text-white hover:opacity-90"
              >
                <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
              </a>
              <Link to="/distributors" className="inline-flex items-center rounded-full border border-cream/30 px-6 py-3 text-sm font-medium text-cream hover:bg-cream/10">
                Full Inquiry Form
              </Link>
            </div>
          </div>
          <form
            className="rounded-2xl bg-cream p-6 text-foreground shadow-lg"
            onSubmit={(e) => { e.preventDefault(); console.log("Quick inquiry submitted"); alert("Thank you — we will be in touch soon."); }}
          >
            <h3 className="font-serif text-2xl">Quick Inquiry</h3>
            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <input required placeholder="Full name" className="rounded-lg border border-border bg-background px-3 py-2.5 text-sm focus:border-primary focus:outline-none" />
              <input required placeholder="Country" className="rounded-lg border border-border bg-background px-3 py-2.5 text-sm focus:border-primary focus:outline-none" />
              <input required type="email" placeholder="Email" className="rounded-lg border border-border bg-background px-3 py-2.5 text-sm focus:border-primary focus:outline-none sm:col-span-2" />
              <textarea placeholder="Tell us a little about your interest" rows={3} className="rounded-lg border border-border bg-background px-3 py-2.5 text-sm focus:border-primary focus:outline-none sm:col-span-2" />
            </div>
            <button type="submit" className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-emerald-deep">
              Send Inquiry <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </section>

      {/* BLOG PREVIEW */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Journal</span>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl">Wellness, explained.</h2>
          </div>
          <Link to="/blog" className="hidden text-sm font-medium text-primary hover:underline md:inline-flex">
            View all →
          </Link>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            { slug: "omega-3-and-cardiovascular-wellness", t: "The Science Behind Omega-3 and Cardiovascular Wellness", c: "Heart & Brain", img: products[1].image },
            { slug: "ashwagandha-modern-stress", t: "Ashwagandha: Nature's Answer to Modern Stress", c: "Stress & Sleep", img: products[5].image },
            { slug: "magnesium-deep-sleep", t: "Magnesium and the Science of Deep, Restorative Sleep", c: "Stress & Sleep", img: products[3].image },
          ].map((b) => (
            <Link key={b.slug} to="/blog/$slug" params={{ slug: b.slug }} className="group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-lg">
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img src={b.img} alt={b.t} loading="lazy" className="h-full w-full object-cover transition-transform group-hover:scale-105" />
              </div>
              <div className="p-5">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">{b.c}</span>
                <h3 className="mt-2 font-serif text-xl leading-snug">{b.t}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
