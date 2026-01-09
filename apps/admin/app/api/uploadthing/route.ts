// apps/admin/app/api/uploadthing/route.ts

import { NextRequest } from "next/server";
import { createRouteHandler } from "uploadthing/next";
import { mediaRouter } from "./core";

const handler = createRouteHandler({
  router: mediaRouter,
});

/* export async function GET(req: Request) {
  return handler.GET(req);
}

export async function POST(req: Request) {
  return handler.POST(req);
} */

export async function GET(
  req: NextRequest,
  ctx: { params: Promise<Record<string, never>> }
) {
  return handler.GET(req);
}

export async function POST(
  req: NextRequest,
  ctx: { params: Promise<Record<string, never>> }
) {
  return handler.POST(req);
}

export const runtime = "nodejs";


/* import { createRouteHandler } from "uploadthing/next";
import { mediaRouter } from "./core";

export const { GET, POST } = createRouteHandler({
  router: mediaRouter,
}); */


/* import { createRouteHandler } from "uploadthing/next";
import { mediaRouter } from "./core";

const handler = createRouteHandler({
  router: mediaRouter,
});

export const GET = handler.GET;
export const POST = handler.POST;


export const runtime = "nodejs"; */
