import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { password, remember } = await req.json();

  // Yahan password direct code me rakh dein
  const SITE_PASSWORD = "AdMiN@It-WW-2026";

  if (password === SITE_PASSWORD) {
    const res = NextResponse.json({ success: true });

    res.cookies.set("site_access", "granted", {
      httpOnly: true,
      path: "/",
      ...(remember ? { maxAge: 60 * 60 * 24 * 30 } : {}),
    });

    if (remember) {
      res.cookies.set("site_remember", "1", {
        httpOnly: false,
        path: "/",
        maxAge: 60 * 60 * 24 * 30,
      });
    } else {
      res.cookies.set("site_remember", "", { path: "/", maxAge: 0 });
    }

    return res;
  }

  return NextResponse.json({ success: false }, { status: 401 });
}