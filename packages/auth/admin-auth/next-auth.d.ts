// packages/auth/admin-auth/next-auth.d.ts

import "next-auth";
import "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      email?: string;
      role?: string;
      public_id?: string;
      expired?: boolean;
    };
    expired?: boolean;
  }

  interface User {
    role?: string;
    public_id?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id?: string;
    email?: string;
    role?: string;
    public_id?: string;
    lastActiveAt?: number;
  }
}

/* import NextAuth, { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role?: string;
      public_id?: string;
      expired?: boolean;
    } & DefaultSession["user"];
  }

  interface User extends DefaultUser {
    role?: string;
    public_id?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id?: string;
    role?: string;
    public_id?: string;
    lastActiveAt?: number;
  }
} */
