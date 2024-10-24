import api from "@/app/_lib/api";
import { IWrite } from "@/model/write";

export async function putPost(postData: IWrite) {
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
