import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import { supabase } from "@/integrations/supabase/client";
import { adminBootstrap } from "@/lib/admin.functions";
import { setAdminToken, getAdminToken } from "@/lib/admin-session";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/admin/login")({
  component: AdminLogin,
});

function AdminLogin() {
  const navigate = useNavigate();
  const bootstrap = useServerFn(adminBootstrap);
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);

  useEffect(() => {
    if (getAdminToken()) navigate({ to: "/admin" });
  }, [navigate]);

  async function finalizeAdmin() {
    const { token } = await bootstrap();
    setAdminToken(token);
    navigate({ to: "/admin" });
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setInfo(null);
    setLoading(true);
    try {
      if (mode === "signup") {
        const { error: err } = await supabase.auth.signUp({
          email,
          password,
          options: { emailRedirectTo: `${window.location.origin}/admin` },
        });
        if (err) throw err;
        // auto-confirm is on, but session may not be returned — sign in.
        const { error: signInErr } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (signInErr) throw signInErr;
      } else {
        const { error: err } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (err) throw err;
      }
      await finalizeAdmin();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Sign in failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/30 px-4">
      <form
        onSubmit={onSubmit}
        className="w-full max-w-sm rounded-xl border bg-background p-8 shadow-sm"
      >
        <h1 className="font-display text-2xl">Admin {mode === "signup" ? "sign up" : "sign in"}</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Franceshgrace admin dashboard
        </p>

        <div className="mt-6 space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
          />
        </div>
        <div className="mt-4 space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={6}
            autoComplete={mode === "signup" ? "new-password" : "current-password"}
          />
        </div>

        {error ? <p className="mt-3 text-sm text-destructive">{error}</p> : null}
        {info ? <p className="mt-3 text-sm text-muted-foreground">{info}</p> : null}

        <Button type="submit" className="mt-6 w-full" disabled={loading}>
          {loading
            ? "Please wait…"
            : mode === "signup"
              ? "Create account"
              : "Sign in"}
        </Button>

        <button
          type="button"
          onClick={() => {
            setError(null);
            setInfo(null);
            setMode(mode === "signin" ? "signup" : "signin");
          }}
          className="mt-4 w-full text-center text-sm text-muted-foreground underline-offset-4 hover:underline"
        >
          {mode === "signin"
            ? "First time? Create an admin account"
            : "Already have an account? Sign in"}
        </button>
      </form>
    </div>
  );
}
