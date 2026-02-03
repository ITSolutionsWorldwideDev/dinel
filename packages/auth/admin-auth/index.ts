// packages/auth/admin-auth/index.ts

import { getServerSession } from "next-auth/next";
import type { NextAuthOptions } from "next-auth";
import type { JWT } from "next-auth/jwt";
import type { Session } from "next-auth";
import type { NextApiRequest, NextApiResponse } from "next";
import CredentialsProvider from "next-auth/providers/credentials";
import { runQuery } from "@acme/db";
import * as bcrypt from "bcryptjs";


export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "you@example.com" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          throw new Error("Missing email or password");
        }

        // console.log('credentials ==== ',credentials);

        // Fetch user from PostgreSQL
        const query = `SELECT id, email, password_hash, role, public_id FROM users WHERE email = $1 LIMIT 1`;
        const result = await runQuery(query, [credentials.email]);

        if (result.rowCount === 0) {
          throw new Error("User not found");
        }

        const user = result.rows[0];

        // Compare hash
        const isValid = await bcrypt.compare(
          credentials.password,
          user.password_hash,
        );

        if (!isValid) {
          throw new Error("Invalid password");
        }

        return {
          id: user.id,
          email: user.email,
          public_id: user.public_id,
          role: user.role,
        };
      },
    }),
  ],

  session: {
    strategy: "jwt",
    // ⏱ admin session lifetime (example: 30 minutes)
    maxAge: 30 * 60, // seconds

    // 🔄 how often JWT is refreshed (optional)
    updateAge: 5 * 60, // seconds
  },

  callbacks: {
    async jwt({ token, user }: { token: JWT; user?: any }) {
      if (user) {
        token.id = user.id;
        token.public_id = user.public_id; // public_id

        // track last activity
        token.lastActiveAt = Date.now();

        if ("role" in user && user.role) {
          token.role = user.role;
        }
      }
      return token;
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      const isAdminApp = process.env.NEXT_PUBLIC_APP_NAME === "admin";

      // const MAX_IDLE_TIME = 30 * 60 * 1000; // 30 min
      const MAX_IDLE_TIME = isAdminApp
        ? 30 * 60 * 1000
        : 7 * 24 * 60 * 60 * 1000;
      // 7 days

      const isExpired =
        token.lastActiveAt && Date.now() - token.lastActiveAt > MAX_IDLE_TIME;

      session.user = {
        ...session.user,
        id: token.id!,
        role: token.role,
        public_id: token.public_id,
      };
      (session as any).expired = Boolean(isExpired);
      return session;
    },
  },
  jwt: {
    // optional but recommended
    maxAge: 1 * 60,
  },

  pages: {
    signIn: "/login",
  },
};



export const getAdminSession = () => getServerSession(authOptions)
// export const candidateAuth = (req: NextApiRequest, res: NextApiResponse) =>
//   getServerSession(req, res, authOptions);

// import { getServerSession } from "next-auth";

// export const auth = () => getServerSession(authOptions);

/* if (token) {

        const MAX_IDLE_TIME = 30 * 60 * 1000; // 30 min

        // ⏱ idle timeout check
        if (
          token.lastActiveAt &&
          Date.now() - token.lastActiveAt > MAX_IDLE_TIME
        ) {
          return null;
        }


        session.user = session.user ?? ({} as any);
        const user = session.user as {
          id: string;
          role?: string;
          name?: string | null;
          email?: string | null;
          image?: string | null;
          public_id?: string;
        };

        user.id = token.id!;
        user.role = token.role;
        // user.public_id = token.public_id;

        user.public_id = token.public_id ?? undefined;
        session.user = user;
        // session.user.public_id = token.public_id;
      } */
