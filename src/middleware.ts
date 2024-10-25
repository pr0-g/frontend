import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const sessionId = request.cookies.get("JSESSIONID");
  const { pathname } = request.nextUrl;

  if (pathname !== "/" && !sessionId) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (pathname === "/" && sessionId) {
    return NextResponse.redirect(new URL("/posts", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/",
    "/posts",
    "/mypage",
    "/mypage/edit/interests",
    "/mypage/edit/nickname",
    "/save",
    "/subscription",
    "/subscription/premium",
    "/subscription/standard",
    "/write",
    "/[username]/posts",
    "/[username]/[filename]",
  ],
};
