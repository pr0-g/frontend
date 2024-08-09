export async function getPosts(activeTab: number) {
  const tabValues = ["trending", "recent", "subscribed", "liked"];
  console.log(activeTab);

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/posts/recent?page=${0}&size=${10}`,
    { method: "GET", credentials: "include", cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  const data = await res.json();

  return data;
}
