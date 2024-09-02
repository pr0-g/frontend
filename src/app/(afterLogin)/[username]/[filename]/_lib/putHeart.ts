import api from "@/app/_lib/api";

interface HeartInterface {
  activePostId: number;
}

export async function putHeart({ activePostId }: HeartInterface) {
  const res = await fetch(`${api}/api/posts/like`, {
    method: "PUT",
    credentials: "include",
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ postId: activePostId }),
  });

  const data = await res.json();

  return data;
}
