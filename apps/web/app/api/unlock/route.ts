import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { password, remember } = await req.json();

  if (password === process.env.SITE_ACCESS_PASSWORD) {
    const res = NextResponse.json({ success: true });

    // Main gate cookie — checked by middleware. httpOnly so JS can't read/tamper it.
    res.cookies.set("site_access", "granted", {
      httpOnly: true,
      path: "/",
      ...(remember ? { maxAge: 60 * 60 * 24 * 30 } : {}),
    });

    // Readable marker so the client knows whether this was a "remembered" login.
    if (remember) {
      res.cookies.set("site_remember", "1", {
        httpOnly: false,
        path: "/",
        maxAge: 60 * 60 * 24 * 30,
      });
    } else {
      // make sure a stale remember flag from a previous login is cleared
      res.cookies.set("site_remember", "", { path: "/", maxAge: 0 });
    }

    return res;
  }

  return NextResponse.json({ success: false }, { status: 401 });
}

export async function DELETE() {
  // used by AccessGuard to fully log out a non-remembered session in a fresh tab
  const res = NextResponse.json({ success: true });
  res.cookies.set("site_access", "", { path: "/", maxAge: 0 });
  res.cookies.set("site_remember", "", { path: "/", maxAge: 0 });
  return res;
}