// packages/auth/web-auth/index.ts


import { getServerSession } from "next-auth/next";
import type { NextApiRequest, NextApiResponse } from "next";
import type { NextAuthOptions } from "next-auth";
import type { JWT } from "next-auth/jwt";
import type { Session } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { runQuery } from "@acme/db";
import * as bcrypt from "bcryptjs";

export const candidateAuthOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Candidate Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "you@example.com" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          throw new Error("Missing email or password");
        }

        // Fetch candidate by email
        const query = `
          SELECT id, email, full_name, password_hash 
          FROM candidates 
          WHERE email = $1 
          LIMIT 1
        `;
        const result = await runQuery(query, [credentials.email]);

        if (result.rowCount === 0) {
          throw new Error("Candidate not found");
        }

        const candidate = result.rows[0];

        // Compare password hash
        const isValid = await bcrypt.compare(
          credentials.password,
          candidate.password_hash,
        );

        if (!isValid) {
          throw new Error("Invalid password");
        }

        return {
          id: candidate.id,
          name: candidate.full_name,
          email: candidate.email,
        };
      },
    }),
  ],

  session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60, // 7 days
    updateAge: 60 * 60, // refresh every 1 hour
  },

  callbacks: {
    async jwt({ token, user }: { token: JWT; user?: any }) {
      if (user) {
        token.id = user.id;
        token.lastActiveAt = Date.now();
      }
      return token;
    },

    async session({ session, token }: { session: Session; token: JWT }) {
      const MAX_IDLE_TIME = 24 * 60 * 60 * 1000; // 7 days

      const isExpired =
        typeof token.lastActiveAt === "number" &&
        Date.now() - token.lastActiveAt > MAX_IDLE_TIME;

      // session.user = {
      //   id: token.id!,
      //   name: session.user?.name ?? undefined,
      //   email: session.user?.email ?? undefined,
      //   public_id: token.public_id,
      //   role: token.role,
      // };

      session.user = {
        ...session.user,
        id: token.id!,
        name: session.user?.name ?? undefined,
        email: session.user?.email ?? undefined,
      };

      // (session as any).expired = Boolean(isExpired);
      session.expired = Boolean(isExpired);

      return session;
    },
  },

  pages: {
    signIn: "/login",
  },
};

export const candidateAuth = () => getServerSession(candidateAuthOptions);
// export const candidateAuth = (req: NextApiRequest, res: NextApiResponse) =>
//   getServerSession(req, res, candidateAuthOptions);
