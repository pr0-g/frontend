import NextAuth, { DefaultSession, Session, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session extends DefaultSession {
    jsessionid?: string;
    isAuthenticated?: boolean;
  }
}

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [],
  callbacks: {
    async session({ session }) {
      // JSESSIONID 확인
      const jsessionid = document.cookie
          .split("; ")
          .find((row) => row.startsWith("JSESSIONID="))
          ?.split("=")[1];

      if (jsessionid) {
        session.isAuthenticated = true;
        session.jsessionid = jsessionid;

        // 사용자 정보 가져오기
        try {
          const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users/me`, {
            method: 'GET',
            credentials: 'include',
            headers: {
              'Cookie': `JSESSIONID=${jsessionid}`
            }
          });
          if (response.ok) {
            const userData = await response.json();
            session.user = userData.result; // CommonResponse의 구조에 맞춰 수정
          }
        } catch (error) {
          console.error('Failed to fetch user data', error);
        }
      } else {
        session.isAuthenticated = false;
      }
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
});