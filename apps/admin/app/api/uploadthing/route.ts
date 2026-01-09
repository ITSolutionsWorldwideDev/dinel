// apps/admin/app/api/uploadthing/route.ts

import { createRouteHandler } from "uploadthing/next";
import { mediaRouter } from "./core";

const handler = createRouteHandler({
  router: mediaRouter,
});

export const GET = handler.GET;
export const POST = handler.POST;


export const runtime = "nodejs";



/* import { createRouteHandler } from "uploadthing/next";
import { mediaRouter } from "./core";

export const { GET, POST } = createRouteHandler({
  router: mediaRouter,
}); */