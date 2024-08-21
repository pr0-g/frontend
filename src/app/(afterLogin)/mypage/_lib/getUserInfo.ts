import api from "@/app/_lib/api";

export async function getUserInfo() {
  const res = await fetch(`${api}/api/users/me`, {
    method: "GET",
    credentials: "include",
    cache: "no-store",
  });

  const data = await res.json();

  return data;
}
