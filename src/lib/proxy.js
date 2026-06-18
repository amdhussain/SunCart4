import { NextResponse } from "next/server";

const protectedRoutes = ["/profile"];
const authRoutes = ["/signin", "/signup"];

export function proxy(request) {
  const { pathname } = request.nextUrl;
  const sessionCookie = request.cookies.get("better-auth.session_token");

  const isProtected = protectedRoutes.some((r) => pathname.startsWith(r));
  const isAuth = authRoutes.some((r) => pathname.startsWith(r));

  if (isProtected && !sessionCookie) {
    return NextResponse.redirect(new URL("/signin", request.url));
  }

  if (isAuth && sessionCookie) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/profile/:path*", "/signin", "/signup"],
};
