import { createFileRoute } from "@tanstack/react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import {
  adminListInquiries,
  adminMarkInquiry,
  adminDeleteInquiry,
} from "@/lib/admin.functions";
import { getAdminToken } from "@/lib/admin-session";
import { Button } from "@/components/ui/button";
import { Trash2, MailOpen, Mail } from "lucide-react";

export const Route = createFileRoute("/admin/inquiries")({
  component: AdminInquiries,
});

function AdminInquiries() {
  const token = getAdminToken() || "";
  const list = useServerFn(adminListInquiries);
  const mark = useServerFn(adminMarkInquiry);
  const del = useServerFn(adminDeleteInquiry);
  const qc = useQueryClient();
  const { data, isLoading } = useQuery({
    queryKey: ["admin", "inquiries"],
    queryFn: () => list({ data: { token } }),
  });

  async function toggle(id: string, is_read: boolean) {
    await mark({ data: { token, id, is_read } });
    qc.invalidateQueries({ queryKey: ["admin", "inquiries"] });
  }
  async function remove(id: string) {
    if (!confirm("Delete this inquiry?")) return;
    await del({ data: { token, id } });
    qc.invalidateQueries({ queryKey: ["admin", "inquiries"] });
  }

  return (
    <div>
      <h1 className="font-display text-3xl">Inquiries</h1>
      <p className="mt-1 text-sm text-muted-foreground">
        Distributor and contact form submissions.
      </p>
      <div className="mt-8 space-y-3">
        {isLoading ? (
          <p className="text-sm text-muted-foreground">Loading…</p>
        ) : (data ?? []).length === 0 ? (
          <p className="text-sm text-muted-foreground">No inquiries yet.</p>
        ) : (
          (data ?? []).map((i) => (
            <div
              key={i.id}
              className={`rounded-lg border bg-background p-4 ${
                i.is_read ? "opacity-70" : ""
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="font-semibold">
                    {i.full_name}{" "}
                    <span className="font-normal text-muted-foreground">
                      &lt;{i.email}&gt;
                    </span>
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">
                    {[i.company, i.country, i.phone].filter(Boolean).join(" · ")}
                    {" · "}
                    {new Date(i.created_at).toLocaleString()}
                  </div>
                  {i.product_interest ? (
                    <div className="mt-2 text-sm">
                      <span className="font-medium">Interest:</span>{" "}
                      {i.product_interest}
                    </div>
                  ) : null}
                  <p className="mt-2 whitespace-pre-wrap text-sm">{i.message}</p>
                </div>
                <div className="flex gap-1">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => toggle(i.id, !i.is_read)}
                    title={i.is_read ? "Mark unread" : "Mark read"}
                  >
                    {i.is_read ? (
                      <Mail className="h-4 w-4" />
                    ) : (
                      <MailOpen className="h-4 w-4" />
                    )}
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => remove(i.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
