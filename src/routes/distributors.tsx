import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MessageCircle, Send, Mail, Phone, Globe } from "lucide-react";
import { products } from "@/data/products";

export const Route = createFileRoute("/distributors")({
  head: () => ({
    meta: [
      { title: "Become a Distributor — Franceshgrace" },
      { name: "description", content: "Partner with Franceshgrace and bring premium wellness supplements to your community. Submit a distributor inquiry today." },
      { property: "og:title", content: "Become a Franceshgrace Distributor" },
      { property: "og:description", content: "Partnership inquiries for the Franceshgrace wellness range." },
    ],
  }),
  component: DistributorsPage,
});

function DistributorsPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div>
      <section className="bg-cream">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 md:py-20 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Partnership</span>
          <h1 className="mt-3 font-serif text-5xl leading-tight md:text-6xl">Become a Distributor</h1>
          <p className="mt-5 text-lg text-muted-foreground">
            We're growing across Africa and global markets. Tell us about your business and we'll
            be in touch with partnership details.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 pb-20 sm:px-6 lg:grid-cols-5 lg:px-8">
        <aside className="lg:col-span-2">
          <h2 className="font-serif text-2xl">Talk to us directly</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Prefer a faster response? Reach out via WhatsApp or email.
          </p>
          <div className="mt-6 space-y-4">
            <a href="https://wa.me/10000000000" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-2xl bg-[#25D366] px-5 py-4 text-white shadow-sm hover:opacity-90">
              <MessageCircle className="h-5 w-5" />
              <div>
                <p className="text-sm font-semibold">WhatsApp</p>
                <p className="text-xs opacity-90">Tap to start a chat</p>
              </div>
            </a>
            <div className="flex items-center gap-3 rounded-2xl border border-border bg-card p-5">
              <Mail className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm font-semibold">Email</p>
                <p className="text-xs text-muted-foreground">distributors@franceshgrace.com</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-2xl border border-border bg-card p-5">
              <Phone className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm font-semibold">Phone</p>
                <p className="text-xs text-muted-foreground">+1 (000) 000-0000</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-2xl border border-border bg-card p-5">
              <Globe className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm font-semibold">Pan-Africa Distribution</p>
                <p className="text-xs text-muted-foreground">Inquiries welcome worldwide</p>
              </div>
            </div>
          </div>
        </aside>

        <form
          className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8 lg:col-span-3"
          onSubmit={(e) => {
            e.preventDefault();
            const data = new FormData(e.currentTarget);
            console.log("Distributor inquiry:", Object.fromEntries(data.entries()));
            setSubmitted(true);
          }}
        >
          <h2 className="font-serif text-2xl">Distributor Inquiry</h2>
          <p className="mt-1 text-sm text-muted-foreground">All fields marked with * are required.</p>

          {submitted ? (
            <div className="mt-8 rounded-2xl bg-primary/10 p-6 text-center">
              <p className="font-serif text-2xl text-primary">Thank you!</p>
              <p className="mt-2 text-sm text-muted-foreground">Your inquiry has been received. We will be in touch shortly.</p>
            </div>
          ) : (
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field label="Full Name *" name="fullName" required />
              <Field label="Company Name" name="company" />
              <Field label="Country *" name="country" required />
              <Field label="Email *" name="email" type="email" required />
              <Field label="Phone Number *" name="phone" type="tel" required />
              <div>
                <label className="mb-1.5 block text-sm font-medium">Product Interest</label>
                <select name="product" className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm focus:border-primary focus:outline-none">
                  <option value="all">All Products</option>
                  {products.map((p) => <option key={p.slug} value={p.slug}>{p.name}</option>)}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1.5 block text-sm font-medium">Message</label>
                <textarea name="message" rows={4} className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm focus:border-primary focus:outline-none" />
              </div>
              <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-emerald-deep sm:col-span-2">
                Submit Inquiry <Send className="h-4 w-4" />
              </button>
            </div>
          )}
        </form>
      </section>
    </div>
  );
}

function Field({ label, name, type = "text", required = false }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm focus:border-primary focus:outline-none"
      />
    </div>
  );
}
