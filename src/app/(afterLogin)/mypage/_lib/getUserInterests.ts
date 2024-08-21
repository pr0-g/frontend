import api from "@/app/_lib/api";

export async function getUserInterests() {
  const userInterests = await fetch(`${api}/api/users/interests`, {
    method: "GET",
    credentials: "include",
    cache: "no-store",
  });

  const data = await userInterests.json();
  return data;
}
