"use client";
import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

function getCookie(name: string) {
  const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  return match ? match[2] : null;
}

export default function AccessGuard() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (pathname.startsWith("/coming-soon")) return;

    const remembered = getCookie("site_remember") === "1";
    const unlockedThisTab = sessionStorage.getItem("site_unlocked") === "1";

    // If login wasn't "remembered" and this tab hasn't unlocked itself,
    // this is a fresh tab reusing an old browser-session cookie — kick it back.
    if (!remembered && !unlockedThisTab) {
      fetch("/api/unlock", { method: "DELETE" }).finally(() => {
        router.replace("/coming-soon");
      });
    }
  }, [pathname, router]);

  return null;
}