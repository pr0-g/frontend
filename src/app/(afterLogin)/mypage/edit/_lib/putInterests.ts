export async function putInterests(selectedInterests: number[]) {
    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/interests/user/edit`,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ interestIdList: selectedInterests }),
                credentials: 'include' // 이 옵션으로 쿠키가 자동으로 포함됩니다
            }
        );

        if (!response.ok) {
            // 응답 본문을 텍스트로 읽어 에러 메시지에 포함시킵니다
            const errorText = await response.text();
            throw new Error(`관심사 업데이트에 실패했습니다. 서버 응답: ${errorText}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error updating interests:', error);
        throw error;
    }
}