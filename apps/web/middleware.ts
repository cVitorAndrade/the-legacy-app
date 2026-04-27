import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const GUEST_ONLY = ["/login", "/signup"];

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const hasSession = req.cookies.has("refresh_token");

  const isProtected = pathname.startsWith("/app");
  const isGuestOnly = GUEST_ONLY.some((p) => pathname.startsWith(p));

  if (isProtected && !hasSession) {
    const url = req.nextUrl.clone();
    url.pathname = "/login";
    url.searchParams.set("redirect", pathname);
    return NextResponse.redirect(url);
  }

  if (isGuestOnly && hasSession) {
    const url = req.nextUrl.clone();
    url.pathname = "/app";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|api).*)"],
};
