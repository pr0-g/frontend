import api from "@/app/_lib/api";

export async function getPosts(pageParam: number = 0) {
  const tabValues = ["trending", "recent", "subscribed", "liked"];

  const res = await fetch(
    `${api}/api/posts/recent?page=${pageParam}&size=${4}`,
    {
      next: {
        tags: ["posts", "recent"],
      },
      method: "GET",
      credentials: "include",
      cache: "no-store",
    }
  );

  const data = await res.json();

  return data;
}
