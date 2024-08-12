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
      // JSESSIONID의 존재 여부만 확인합니다.
      const jsessionid = document.cookie
        .split("; ")
        .find((row) => row.startsWith("JSESSIONID="))
        ?.split("=")[1];
      if (jsessionid) {
        session.isAuthenticated = true;
        session.jsessionid = jsessionid;
      } else {
        session.isAuthenticated = false;
      }
      return session;
    },
  },
  // JWT 전략을 사용하지만, 실제 토큰 생성은 하지 않습니다.
  session: {
    strategy: "jwt",
  },
});
