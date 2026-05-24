import { queryOptions } from "@tanstack/react-query";
import { listProducts, listAllPosts, getSiteSettings } from "./site.functions";

export const productsQueryOptions = queryOptions({
  queryKey: ["products"],
  queryFn: () => listProducts(),
  staleTime: 60_000,
});

export const postsQueryOptions = queryOptions({
  queryKey: ["posts"],
  queryFn: () => listAllPosts(),
  staleTime: 60_000,
});

export const settingsQueryOptions = queryOptions({
  queryKey: ["settings"],
  queryFn: () => getSiteSettings(),
  staleTime: 5 * 60_000,
});
