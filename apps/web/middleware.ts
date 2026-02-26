// apps/web/middleware.ts

import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ token, req }) {
      const pathname = req.nextUrl.pathname;

      // 🔓 Public pages — always allowed
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

      // console.log('pathname === ',pathname);

      // 🔒 Protect only /account routes
      if (pathname.startsWith("/account")) {
        return !!token;
      }
      
      return true;
    },
  },
});

export const config = {
  matcher: [
    "/((?!api/auth|_next|favicon.ico|assets|images).*)",
  ],
};


