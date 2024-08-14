export async function getUserInfo() {

  const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/users/me`,
      {
        credentials: "include",
      }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  const data = await res.json();

  return data;
}
