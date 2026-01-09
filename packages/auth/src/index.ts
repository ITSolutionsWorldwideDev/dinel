// packages/auth/src/index.ts
import { getServerSession } from "next-auth";
import { authOptions } from "./auth-options";

export { authOptions };

export const auth = () => getServerSession(authOptions);
