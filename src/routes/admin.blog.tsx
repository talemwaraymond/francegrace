import { createFileRoute } from "@tanstack/react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import type { FormEvent } from "react";
import {
  adminListPosts,
  adminUpsertPost,
  adminDeletePost,
} from "@/lib/admin.functions";
import { getAdminToken } from "@/lib/admin-session";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter,
} from "@/components/ui/dialog";
import type { BlogPostDTO } from "@/lib/types";
import { Pencil, Trash2, Plus } from "lucide-react";

export const Route = createFileRoute("/admin/blog")({
  component: AdminBlog,
});

function lines(v: string) {
  return v.split("\n").map((s) => s.trim()).filter(Boolean);
}

function AdminBlog() {
  const token = getAdminToken() || "";
  const list = useServerFn(adminListPosts);
  const upsert = useServerFn(adminUpsertPost);
  const del = useServerFn(adminDeletePost);
  const qc = useQueryClient();
  const { data, isLoading } = useQuery({
    queryKey: ["admin", "posts"],
    queryFn: () => list({ data: { token } }),
  });
  const [editing, setEditing] = useState<BlogPostDTO | null>(null);
  const [open, setOpen] = useState(false);

  function startNew() {
    setEditing({
      id: "",
      slug: "",
      title: "",
      category: "",
      excerpt: "",
      body: [],
      takeaways: [],
      author: "Franceshgrace",
      image_key: "",
      read_minutes: 4,
      status: "published",
      published_at: new Date().toISOString(),
    });
    setOpen(true);
  }

  async function save(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!editing) return;
    const fd = new FormData(e.currentTarget);
    const payload = {
      slug: String(fd.get("slug") || ""),
      title: String(fd.get("title") || ""),
      category: String(fd.get("category") || ""),
      excerpt: String(fd.get("excerpt") || ""),
      body: lines(String(fd.get("body") || "")),
      takeaways: lines(String(fd.get("takeaways") || "")),
      author: String(fd.get("author") || "Franceshgrace"),
      image_key: String(fd.get("image_key") || ""),
      read_minutes: Number(fd.get("read_minutes") || 4),
      status: (String(fd.get("status") || "published") as "draft" | "published"),
    };
    await upsert({ data: { token, id: editing.id || undefined, post: payload } });
    setOpen(false);
    setEditing(null);
    qc.invalidateQueries({ queryKey: ["admin", "posts"] });
  }

  async function remove(id: string) {
    if (!confirm("Delete this post?")) return;
    await del({ data: { token, id } });
    qc.invalidateQueries({ queryKey: ["admin", "posts"] });
  }

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-3xl">Blog</h1>
          <p className="mt-1 text-sm text-muted-foreground">Manage journal posts.</p>
        </div>
        <Button onClick={startNew}><Plus className="mr-1 h-4 w-4" />New post</Button>
      </div>

      <div className="mt-8 rounded-lg border bg-background">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Published</TableHead>
              <TableHead className="w-32 text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <TableRow><TableCell colSpan={5}>Loading…</TableCell></TableRow>
            ) : (data ?? []).map((p) => (
              <TableRow key={p.id}>
                <TableCell className="font-medium">{p.title}</TableCell>
                <TableCell>{p.category}</TableCell>
                <TableCell>{p.status}</TableCell>
                <TableCell>{new Date(p.published_at).toLocaleDateString()}</TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="icon" onClick={() => { setEditing(p); setOpen(true); }}>
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
            <DialogTitle>{editing?.id ? "Edit post" : "New post"}</DialogTitle>
          </DialogHeader>
          {editing ? (
            <form onSubmit={save} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div><Label>Slug</Label><Input name="slug" defaultValue={editing.slug} required /></div>
              <div><Label>Category</Label><Input name="category" defaultValue={editing.category} required /></div>
              <div className="sm:col-span-2"><Label>Title</Label><Input name="title" defaultValue={editing.title} required /></div>
              <div className="sm:col-span-2"><Label>Excerpt</Label><Textarea name="excerpt" rows={2} defaultValue={editing.excerpt} /></div>
              <div className="sm:col-span-2">
                <Label>Body (one paragraph per line)</Label>
                <Textarea name="body" rows={8} defaultValue={editing.body.join("\n")} />
              </div>
              <div className="sm:col-span-2">
                <Label>Takeaways (one per line)</Label>
                <Textarea name="takeaways" rows={3} defaultValue={editing.takeaways.join("\n")} />
              </div>
              <div><Label>Author</Label><Input name="author" defaultValue={editing.author} /></div>
              <div><Label>Image key</Label><Input name="image_key" defaultValue={editing.image_key} /></div>
              <div><Label>Read minutes</Label><Input type="number" name="read_minutes" defaultValue={editing.read_minutes} /></div>
              <div>
                <Label>Status</Label>
                <select name="status" defaultValue={editing.status} className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 text-sm">
                  <option value="published">published</option>
                  <option value="draft">draft</option>
                </select>
              </div>
              <DialogFooter className="sm:col-span-2">
                <Button type="button" variant="ghost" onClick={() => setOpen(false)}>Cancel</Button>
                <Button type="submit">Save</Button>
              </DialogFooter>
            </form>
          ) : null}
        </DialogContent>
      </Dialog>
    </div>
  );
}
