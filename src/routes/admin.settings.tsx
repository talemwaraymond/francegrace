import { createFileRoute } from "@tanstack/react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { adminUpdateSettings } from "@/lib/admin.functions";
import { getSiteSettings } from "@/lib/site.functions";
import { getAdminToken } from "@/lib/admin-session";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/admin/settings")({
  component: AdminSettings,
});

function AdminSettings() {
  const token = getAdminToken() || "";
  const get = useServerFn(getSiteSettings);
  const update = useServerFn(adminUpdateSettings);
  const qc = useQueryClient();
  const { data } = useQuery({
    queryKey: ["site-settings"],
    queryFn: () => get(),
  });
  const [form, setForm] = useState({
    contact_email: "",
    footer_disclaimer: "",
    instagram_url: "",
    facebook_url: "",
    linkedin_url: "",
  });
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (data) setForm(data);
  }, [data]);

  async function save(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setSaved(false);
    await update({ data: { token, settings: form } });
    setSaving(false);
    setSaved(true);
    qc.invalidateQueries({ queryKey: ["site-settings"] });
  }

  return (
    <div>
      <h1 className="font-display text-3xl">Settings</h1>
      <p className="mt-1 text-sm text-muted-foreground">Site-wide settings.</p>
      <form onSubmit={save} className="mt-8 max-w-xl space-y-4">
        <div>
          <Label>Contact email</Label>
          <Input
            value={form.contact_email}
            onChange={(e) => setForm({ ...form, contact_email: e.target.value })}
          />
        </div>
        <div>
          <Label>Footer disclaimer</Label>
          <Textarea
            rows={3}
            value={form.footer_disclaimer}
            onChange={(e) => setForm({ ...form, footer_disclaimer: e.target.value })}
          />
        </div>
        <div>
          <Label>Instagram URL</Label>
          <Input
            value={form.instagram_url}
            onChange={(e) => setForm({ ...form, instagram_url: e.target.value })}
          />
        </div>
        <div>
          <Label>Facebook URL</Label>
          <Input
            value={form.facebook_url}
            onChange={(e) => setForm({ ...form, facebook_url: e.target.value })}
          />
        </div>
        <div>
          <Label>LinkedIn URL</Label>
          <Input
            value={form.linkedin_url}
            onChange={(e) => setForm({ ...form, linkedin_url: e.target.value })}
          />
        </div>
        <div className="flex items-center gap-3 pt-2">
          <Button type="submit" disabled={saving}>
            {saving ? "Saving…" : "Save"}
          </Button>
          {saved ? <span className="text-sm text-muted-foreground">Saved.</span> : null}
        </div>
      </form>
    </div>
  );
}
