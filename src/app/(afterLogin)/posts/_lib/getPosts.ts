import api from "@/app/_lib/api";

export async function getPosts(
  pageParam: number = 0,
  tabValue: string = "trending"
) {
  const res = await fetch(
    `${api}/api/posts/${tabValue}?page=${pageParam}&size=${4}`,
    {
      next: {
        tags: ["posts", tabValue],
      },
      method: "GET",
      credentials: "include",
      cache: "no-store",
    }
  );

  const data = await res.json();

  return data;
}
