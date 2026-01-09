// apps/admin/middleware.ts
import { withAuth } from "next-auth/middleware";

export default withAuth({
  callbacks: {
    authorized: ({ token }) => {
      return !!token && token.role === "SUPER_ADMIN";
    },
  },
});

export const config = {
  matcher: [
    /**
     * Exclude:
     * - login page
     * - next-auth routes
     * - Next.js internals
     * - static assets (public)
     */
    "/((?!login|api/auth|_next|assets|favicon.ico).*)",
  ],
};