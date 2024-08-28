import api from "@/app/_lib/api";

interface HeartInterface {
  targetPostId: number;
}

export async function putHeart({ targetPostId }: HeartInterface) {
  const res = await fetch(`${api}/api/posts/like`, {
    method: "PUT",
    credentials: "include",
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ postId: targetPostId }),
  });

  const data = await res.json();

  return data;
}
