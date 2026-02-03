// packages/auth/web-auth/next-auth.d.ts

import "next-auth";
import "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      public_id?: string;
      role?: string;
    };
    expired?: boolean;
  }

  interface User {
    id: string;
    name?: string | null;
    email?: string | null;
    public_id?: string;
    role?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id?: string;
    public_id?: string;
    role?: string;
    lastActiveAt?: number;
  }
}
