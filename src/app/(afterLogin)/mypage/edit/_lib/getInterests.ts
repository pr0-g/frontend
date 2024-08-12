export async function getInterests() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/interests/list`,
    { method: "GET", credentials: "include", cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  return res.json();
}
