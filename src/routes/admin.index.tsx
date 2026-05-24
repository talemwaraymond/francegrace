import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { adminStats } from "@/lib/admin.functions";
import { getAdminToken } from "@/lib/admin-session";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Route = createFileRoute("/admin/")({
  component: AdminOverview,
});

function AdminOverview() {
  const stats = useServerFn(adminStats);
  const { data, isLoading } = useQuery({
    queryKey: ["admin", "stats"],
    queryFn: () => stats({ data: { token: getAdminToken() || "" } }),
  });

  const items = [
    { label: "Products", value: data?.products ?? 0 },
    { label: "Blog posts", value: data?.posts ?? 0 },
    { label: "Inquiries", value: data?.inquiries ?? 0 },
  ];

  return (
    <div>
      <h1 className="font-display text-3xl">Overview</h1>
      <p className="mt-1 text-sm text-muted-foreground">
        Welcome back. Here's a snapshot of your content.
      </p>
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {items.map((it) => (
          <Card key={it.label}>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {it.label}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-semibold">
                {isLoading ? "—" : it.value}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
