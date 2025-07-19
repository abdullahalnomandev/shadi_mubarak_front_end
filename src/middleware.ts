// /* eslint-disable @typescript-eslint/no-unused-vars */
// import { jwtDecode } from 'jwt-decode';
// import { cookies } from 'next/headers';
// import { NextResponse } from 'next/server'
// import type { NextRequest } from 'next/server'

// export async function middleware(request: NextRequest) {

//  const {pathname} = request.nextUrl;
//  const accessToken = (await cookies()).get('accessToken')?.value;

//   let decodeData = null;
//   if(accessToken) decodeData = jwtDecode(accessToken) as any;
//   const {role} = decodeData;

//   if(!accessToken) {
//     if(pathname.startsWith("/login") || pathname.startsWith("/register")) NextResponse.next();
//   }

//   if(role === 'user' && pathname.startsWith("/user") ) NextResponse.next();
//   if(role === 'admin' && pathname.startsWith("/admin")) NextResponse.next();
//   if(role === 'super_admin' && pathname.startsWith("/super_admin")) NextResponse.next();

//   return NextResponse.redirect(new URL('/', request.url))
// }

// export const config = {
//   matcher:["/login","/register", '/:path*'],
// }

import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL("/", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/about/:path*"],
};
