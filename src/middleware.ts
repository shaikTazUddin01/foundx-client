import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const AuthRouters = ["/login", "/register"];


const roleBaseRoutes = {
  USER: [/^\/profile/],
  ADMIN: [/^\/admin/],
};
type TRole = keyof typeof roleBaseRoutes;

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  console.log(pathname);

  // const user = {
  //   name: "taz",
  //   role: "ADMIN",
  //   token: "gjhkg kjsdfgkj",
  // };
  const user= undefined

  if (!user) {
    if (AuthRouters.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  if (user?.role && roleBaseRoutes[user?.role as TRole]) {
    const routes = roleBaseRoutes[user?.role as TRole];

    if (routes.some((route) => pathname.match(route))) {
      console.log("object");
      return NextResponse.next();
    }
  }
  
  return NextResponse.redirect(new URL("/", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/profile", "/admin", "/login", "/register"],
};
