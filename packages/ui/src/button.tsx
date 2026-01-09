// packages/ui/src/button.tsx

import * as React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export const Button = React.forwardRef<
  HTMLButtonElement,
  ButtonProps
>(({ children, variant = "primary", ...props }, ref) => {
  return (
    <button
      ref={ref}
      {...props}
      className={`btn btn-${variant}`}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";
/* "use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  appName: string;
}

export const Button = ({ children, className, appName }: ButtonProps) => {
  return (
    <button
      className={className}
      onClick={() => alert(`Hello from your ${appName} app!`)}
    >
      {children}
    </button>
  );
}; */
