import { createFileRoute } from "@tanstack/react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import type { FormEvent } from "react";
import {
  adminListProducts,
  adminUpsertProduct,
  adminDeleteProduct,
} from "@/lib/admin.functions";
import { getAdminToken } from "@/lib/admin-session";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import type { ProductDTO } from "@/lib/types";
import { Pencil, Trash2, Plus } from "lucide-react";

export const Route = createFileRoute("/admin/products")({
  component: AdminProducts,
});

function lines(v: string) {
  return v.split("\n").map((s) => s.trim()).filter(Boolean);
}

function AdminProducts() {
  const token = getAdminToken() || "";
  const list = useServerFn(adminListProducts);
  const upsert = useServerFn(adminUpsertProduct);
  const del = useServerFn(adminDeleteProduct);
  const qc = useQueryClient();
  const { data, isLoading } = useQuery({
    queryKey: ["admin", "products"],
    queryFn: () => list({ data: { token } }),
  });
  const [editing, setEditing] = useState<ProductDTO | null>(null);
  const [open, setOpen] = useState(false);

  function startNew() {
    setEditing({
      id: "",
      slug: "",
      name: "",
      category: "",
      short: "",
      tagline: "",
      size: "",
      description: [],
      benefits: [],
      facts: [],
      ingredients: [],
      support: [],
      use: "",
      image_key: "",
      status: "active",
      featured_in_hero: false,
      display_order: 0,
    });
    setOpen(true);
  }

  async function save(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!editing) return;
    const fd = new FormData(e.currentTarget);
    const payload = {
      slug: String(fd.get("slug") || ""),
      name: String(fd.get("name") || ""),
      category: String(fd.get("category") || ""),
      short: String(fd.get("short") || ""),
      tagline: String(fd.get("tagline") || ""),
      size: String(fd.get("size") || ""),
      use: String(fd.get("use") || ""),
      image_key: String(fd.get("image_key") || ""),
      status: (String(fd.get("status") || "active") as "active" | "hidden"),
      featured_in_hero: fd.get("featured_in_hero") === "on",
      display_order: Number(fd.get("display_order") || 0),
      description: lines(String(fd.get("description") || "")),
      benefits: lines(String(fd.get("benefits") || "")),
      facts: lines(String(fd.get("facts") || ""))
        .map((l) => {
          const [label, ...rest] = l.split("|");
          return { label: label.trim(), value: rest.join("|").trim() };
        }),
      ingredients: lines(String(fd.get("ingredients") || ""))
        .map((l) => {
          const [name, ...rest] = l.split("|");
          return { name: name.trim(), description: rest.join("|").trim() };
        }),
      support: editing.support,
    };
    await upsert({
      data: { token, id: editing.id || undefined, product: payload },
    });
    setOpen(false);
    setEditing(null);
    qc.invalidateQueries({ queryKey: ["admin", "products"] });
  }

  async function remove(id: string) {
    if (!confirm("Delete this product?")) return;
    await del({ data: { token, id } });
    qc.invalidateQueries({ queryKey: ["admin", "products"] });
  }

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-3xl">Products</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Manage your product catalog.
          </p>
        </div>
        <Button onClick={startNew}><Plus className="mr-1 h-4 w-4" />New product</Button>
      </div>

      <div className="mt-8 rounded-lg border bg-background">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Order</TableHead>
              <TableHead className="w-32 text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <TableRow><TableCell colSpan={5}>Loading…</TableCell></TableRow>
            ) : (data ?? []).map((p) => (
              <TableRow key={p.id}>
                <TableCell className="font-medium">{p.name}</TableCell>
                <TableCell>{p.category}</TableCell>
                <TableCell>{p.status}</TableCell>
                <TableCell>{p.display_order}</TableCell>
                <TableCell className="text-right">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => { setEditing(p); setOpen(true); }}
                  >
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" onClick={() => remove(p.id)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-h-[90vh] max-w-2xl overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{editing?.id ? "Edit product" : "New product"}</DialogTitle>
          </DialogHeader>
          {editing ? (
            <form onSubmit={save} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <Label>Slug</Label>
                <Input name="slug" defaultValue={editing.slug} required />
              </div>
              <div>
                <Label>Name</Label>
                <Input name="name" defaultValue={editing.name} required />
              </div>
              <div>
                <Label>Category</Label>
                <Input name="category" defaultValue={editing.category} required />
              </div>
              <div>
                <Label>Size</Label>
                <Input name="size" defaultValue={editing.size} />
              </div>
              <div className="sm:col-span-2">
                <Label>Short</Label>
                <Input name="short" defaultValue={editing.short} />
              </div>
              <div className="sm:col-span-2">
                <Label>Tagline</Label>
                <Input name="tagline" defaultValue={editing.tagline} />
              </div>
              <div className="sm:col-span-2">
                <Label>Description (one paragraph per line)</Label>
                <Textarea
                  name="description"
                  rows={4}
                  defaultValue={editing.description.join("\n")}
                />
              </div>
              <div className="sm:col-span-2">
                <Label>Benefits (one per line)</Label>
                <Textarea
                  name="benefits"
                  rows={4}
                  defaultValue={editing.benefits.join("\n")}
                />
              </div>
              <div className="sm:col-span-2">
                <Label>Facts (label | value per line)</Label>
                <Textarea
                  name="facts"
                  rows={4}
                  defaultValue={editing.facts
                    .map((f) => `${f.label} | ${f.value}`)
                    .join("\n")}
                />
              </div>
              <div className="sm:col-span-2">
                <Label>Ingredients (name | description per line)</Label>
                <Textarea
                  name="ingredients"
                  rows={4}
                  defaultValue={editing.ingredients
                    .map((i) => `${i.name} | ${i.description}`)
                    .join("\n")}
                />
              </div>
              <div className="sm:col-span-2">
                <Label>Use</Label>
                <Textarea name="use" rows={2} defaultValue={editing.use} />
              </div>
              <div>
                <Label>Image key</Label>
                <Input name="image_key" defaultValue={editing.image_key} />
              </div>
              <div>
                <Label>Display order</Label>
                <Input
                  type="number"
                  name="display_order"
                  defaultValue={editing.display_order}
                />
              </div>
              <div>
                <Label>Status</Label>
                <select
                  name="status"
                  defaultValue={editing.status}
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 text-sm"
                >
                  <option value="active">active</option>
                  <option value="hidden">hidden</option>
                </select>
              </div>
              <div className="flex items-center gap-2 pt-6">
                <input
                  type="checkbox"
                  id="featured_in_hero"
                  name="featured_in_hero"
                  defaultChecked={editing.featured_in_hero}
                />
                <Label htmlFor="featured_in_hero">Featured in hero</Label>
              </div>
              <DialogFooter className="sm:col-span-2">
                <Button type="button" variant="ghost" onClick={() => setOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit">Save</Button>
              </DialogFooter>
            </form>
          ) : null}
        </DialogContent>
      </Dialog>
    </div>
  );
}
