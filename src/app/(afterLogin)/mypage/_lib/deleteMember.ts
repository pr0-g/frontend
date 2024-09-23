import api from "@/app/_lib/api";

interface ApiResponse {
  code: string;
  message: string;
  result: null;
}

export async function deleteMember() {
  try {
    const response = await fetch(`${api}/api/users/withdraw`, {
      method: "DELETE",
      credentials: "include",
    });

    const data: ApiResponse = await response.json();

    if (data.code === "SUCCESS") {
      localStorage.clear();
    }

    return data;
  } catch (error) {
    console.error("회원탈퇴 중 오류 발생:", error);
    throw error;
  }
}
