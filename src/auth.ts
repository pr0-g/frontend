import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import kakao from "next-auth/providers/kakao";
import naver from "next-auth/providers/naver";
import CredentialsProvider from "next-auth/providers/credentials";
import "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    accessToken?: string;
    provider?: string;
  }

  interface User {
    accessToken?: string;
    provider?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken?: string;
    provider?: string;
  }
}

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [
    Google,
    kakao,
    naver,
    CredentialsProvider({
      name: "Custom",
      credentials: {
        provider: { type: "text" },
      },
      async authorize(credentials, req) {
        const { provider } = credentials as { provider: string };

        try {
          const response = await fetch(
            `http://localhost:8080/oauth2/authorization/${provider}`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
              credentials: "include",
            }
          );

          if (response.ok) {
            const data = await response.json();
            return {
              id: data.id,
              accessToken: data.accessToken,
              provider: provider,
            };
          } else {
            return null;
          }
        } catch (error) {
          console.error("Authentication error:", error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      if (user) {
        token.accessToken = user.accessToken;
        token.provider = account?.provider || user.provider;
      }
      return token;
    },
    async session({ session, token }) {
      session.provider = token.provider;
      return session;
    },
  },
  secret: process.env.AUTH_SECRET,
});

export { handlers as GET, handlers as POST };
