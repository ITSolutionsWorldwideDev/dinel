// apps/web/middleware.ts

import { NextRequest, NextResponse } from "next/server";
import { withAuth } from "next-auth/middleware";

// Tumhara existing NextAuth middleware
const authMiddleware = withAuth({
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ token, req }) {
      const pathname = req.nextUrl.pathname;

      const publicPages = [
        "/about-us",
        "/professionals",
        "/clients",
        "/our-approach",
        "/mission-vision",
        "/become-a-dineler",
        "/vacancies",
        "/blogs",
        "/login",
        "/signup",
      ];

      if (publicPages.some((page) => pathname.startsWith(page))) {
        return true;
      }

      if (pathname.startsWith("/account")) {
        return !!token;
      }

      return true;
    },
  },
});

export default async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // 🔓 In paths ko password gate se bypass karo
  const bypass =
    pathname.startsWith("/coming-soon") ||
    pathname.startsWith("/api/") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon.ico");

  if (bypass) {
    return NextResponse.next();
  }

// 🔒 Sabse pehle site-wide password check
   const siteAccess = req.cookies.get("site_access");
   if (siteAccess?.value !== "granted") {
     return NextResponse.redirect(new URL("/coming-soon", req.url));
   }

  // ✅ Password sahi hai — ab tumhara normal NextAuth logic chalega
  // @ts-expect-error - withAuth expects NextRequestWithAuth
  return authMiddleware(req, {});
}

export const config = {
  matcher: [
    "/((?!api/auth|_next|favicon.ico|assets|images).*)",
  ],
};