import api from "@/app/_lib/api";

export async function getInterests() {
  const res = await fetch(`${api}/api/interests/list`, {
    method: "GET",
    credentials: "include",
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  return res.json();
}
