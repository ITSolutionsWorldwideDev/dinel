// apps/admin/app/providers/session-activity.tsx
"use client";

import { useEffect } from "react";
import { getSession } from "next-auth/react";

const EVENTS = ["mousemove", "keydown", "click", "scroll"];

export function SessionActivity() {
  useEffect(() => {
    let timeout: NodeJS.Timeout | null = null;

    const ping = () => {
      if (timeout) return;

      timeout = setTimeout(async () => {
        await getSession(); // refresh JWT if updateAge passed
        timeout = null;
      }, 60_000); // ping max once per minute
    };

    EVENTS.forEach((e) => window.addEventListener(e, ping));

    return () => {
      EVENTS.forEach((e) => window.removeEventListener(e, ping));
      if (timeout) clearTimeout(timeout);
    };
  }, []);

  return null;
}
