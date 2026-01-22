// apps/admin/middleware.ts

import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ token }) {
      // block if no token
      if (!token) return false;

      // allow only admin
      return token.role === "SUPER_ADMIN";
    },
  },
});

export const config = {
  matcher: [
    "/((?!login|api/auth|api/uploadthing|_next|assets|favicon.ico).*)",
  ],
};

