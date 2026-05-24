import { createFileRoute, useRouter } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { submitInquiry } from "@/lib/inquiry.functions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/distributor")({
  head: () => ({
    meta: [
      { title: "Become a Distributor — Franceshgrace" },
      {
        name: "description",
        content:
          "Partner with Franceshgrace to distribute premium wellness supplements. Submit your inquiry to join our distributor network.",
      },
      { property: "og:title", content: "Become a Distributor — Franceshgrace" },
      {
        property: "og:description",
        content:
          "Partner with Franceshgrace to distribute premium wellness supplements worldwide.",
      },
    ],
  }),
  component: DistributorPage,
});

function DistributorPage() {
  const router = useRouter();
  const submit = useServerFn(submitInquiry);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    const fd = new FormData(e.currentTarget);
    try {
      await submit({
        data: {
          full_name: String(fd.get("full_name") || ""),
          company: String(fd.get("company") || ""),
          country: String(fd.get("country") || ""),
          email: String(fd.get("email") || ""),
          phone: String(fd.get("phone") || ""),
          product_interest: String(fd.get("product_interest") || ""),
          message: String(fd.get("message") || ""),
        },
      });
      setDone(true);
      router.invalidate();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not submit");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
      <h1 className="font-display text-4xl sm:text-5xl tracking-tight">
        Become a Distributor
      </h1>
      <p className="mt-4 text-muted-foreground">
        Tell us about your business and we'll be in touch within 48 hours.
      </p>

      {done ? (
        <div className="mt-10 rounded-lg border border-border bg-card p-8 text-center">
          <h2 className="text-xl font-semibold">Thank you</h2>
          <p className="mt-2 text-muted-foreground">
            Your inquiry has been received. We'll reach out soon.
          </p>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <Label htmlFor="full_name">Full name *</Label>
            <Input id="full_name" name="full_name" required maxLength={120} />
          </div>
          <div>
            <Label htmlFor="company">Company</Label>
            <Input id="company" name="company" maxLength={200} />
          </div>
          <div>
            <Label htmlFor="country">Country</Label>
            <Input id="country" name="country" maxLength={100} />
          </div>
          <div>
            <Label htmlFor="email">Email *</Label>
            <Input id="email" type="email" name="email" required maxLength={200} />
          </div>
          <div>
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" name="phone" maxLength={50} />
          </div>
          <div className="sm:col-span-2">
            <Label htmlFor="product_interest">Product of interest</Label>
            <Input id="product_interest" name="product_interest" maxLength={200} />
          </div>
          <div className="sm:col-span-2">
            <Label htmlFor="message">Message *</Label>
            <Textarea id="message" name="message" required rows={5} maxLength={2000} />
          </div>
          {error ? (
            <p className="sm:col-span-2 text-sm text-destructive">{error}</p>
          ) : null}
          <div className="sm:col-span-2">
            <Button type="submit" disabled={submitting} size="lg">
              {submitting ? "Submitting…" : "Submit inquiry"}
            </Button>
          </div>
        </form>
      )}
    </section>
  );
}
