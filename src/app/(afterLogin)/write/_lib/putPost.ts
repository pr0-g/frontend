import api from "@/app/_lib/api";

interface PostData {
  id: number | null;
  title: string;
  content: string;
  interestId: number;
  thumbnailUrl: string;
}

export async function putPost(postData: PostData) {
  const res = await fetch(`${api}/api/posts/edit`, {
    method: "PUT",
    credentials: "include",
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  });

  const data = await res.json();
  return data;
}
