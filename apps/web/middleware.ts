import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const hostname = request.headers.get("host")?.split(":")[0];

  // Redirect non-www → www
  if (hostname === "staffoutsourcing.nl") {
    const url = request.nextUrl.clone();

    url.hostname = "www.staffoutsourcing.nl";
    url.protocol = "https";

    return NextResponse.redirect(url, 308);
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|assets|.*\\..*).*)"],
};