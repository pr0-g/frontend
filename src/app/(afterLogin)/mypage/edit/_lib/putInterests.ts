export async function putInterests(selectedInterests: number[]) {
  console.log("Attempting to update interests:", selectedInterests);
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/interests/user/edit`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ interests: selectedInterests }),
        credentials: "include",
      }
    );

    console.log("Response status:", res.status);

    if (!res.ok) {
      const errorData = await res.json().catch(() => null);
      console.error("Error data:", errorData);
      throw new Error(errorData?.message || "Failed to update interests");
    }

    const responseData = await res.json();
    console.log("Response data:", responseData);
    return responseData;
  } catch (error) {
    console.error("Error in putInterests:", error);
    throw error;
  }
}
