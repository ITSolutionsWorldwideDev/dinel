// apps/web/components/ClientProviders.tsx
"use client";

import { SessionProvider } from "next-auth/react";
import React from "react";

interface ClientProvidersProps {
  children: React.ReactNode;
}

const ClientProviders: React.FC<ClientProvidersProps> = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default ClientProviders;
