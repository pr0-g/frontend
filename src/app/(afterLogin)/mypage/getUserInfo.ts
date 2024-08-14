export async function getUserInfo() {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/users/me`,
        { method: "GET", credentials: "include", cache: "no-store" }
    );

    const userInfo = await res.json();

    const interestsRes = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/users/interests`,
        { method: "GET", credentials: "include", cache: "no-store" }
    );

    const interests = await interestsRes.json();

    return {
        ...userInfo,
        result: {
            ...userInfo.result,
            interests: interests.result
        }
    };
}