import { jwtDecode } from "jwt-decode";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { USER_ROLE } from "./constants/role";
import { authKey } from "./constants/storageKey";

const ROLE_ROUTES = {
  [USER_ROLE.USER]: "/user",
  [USER_ROLE.ADMIN]: "/admin",
  [USER_ROLE.SUPER_ADMIN]: "/super_admin",
} as const;

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get(authKey)?.value;

  const isAuthPage = pathname === "/login" || pathname === "/register";

  console.log('token', token);
  if (!token) {
    if (isAuthPage) return NextResponse.next();
    return NextResponse.redirect(new URL("/login", request.url));
  }

  let role: string;

  try {
    const decoded = jwtDecode<{ role: string }>(token);
    role = decoded.role;
  } catch {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  const baseRoute = ROLE_ROUTES[role as keyof typeof ROLE_ROUTES];

  if (!baseRoute) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (isAuthPage) {
    return NextResponse.redirect(new URL(`${baseRoute}/dashboard`, request.url));
  }

  if (!pathname.startsWith(baseRoute)) {
    return NextResponse.redirect(new URL(`${baseRoute}/dashboard`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/user/:path*",
    "/admin/:path*",
    "/super_admin/:path*",
    "/login",
    "/register",
  ],
};