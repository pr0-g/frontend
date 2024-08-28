import api from "@/app/_lib/api";

interface GetPostDetailInterface {
  activePostId: number;
}

export async function getDetail({ activePostId }: GetPostDetailInterface) {
  const res = await fetch(`${api}/api/posts/detail?postId=${activePostId}`, {
    method: "GET",
    credentials: "include",
    cache: "no-store",
  });

  const data = await res.json();

  return data;
}
