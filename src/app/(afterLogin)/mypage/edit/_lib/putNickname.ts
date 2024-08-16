import api from "@/app/_lib/api";

export async function putNickname(newNickname: string) {
  const res = await fetch(`${api}/api/users/edit`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nickname: newNickname }),
    credentials: "include",
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => null);
    throw new Error(errorData?.message || "Failed to update nickname");
  }

  return res.json();
}
