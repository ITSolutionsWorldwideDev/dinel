/* // packages/db/prisma/seed.ts
import { prisma } from "../src/client";
import { hash } from "bcryptjs";

async function main() {
  await prisma.user.create({
    data: {
      email: "admin@xyz.com",
      password: await hash("admin123", 10),
      role: "ADMIN",
    },
  });
}

main();
 */