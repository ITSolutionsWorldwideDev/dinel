// apps/web/app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth";
import { candidateAuthOptions } from "@repo/auth-web";

const handler = NextAuth(candidateAuthOptions);
export { handler as GET, handler as POST };