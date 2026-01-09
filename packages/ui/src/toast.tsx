// packages/ui/src/toast.tsx
"use client";

import type { ToastPayload, ToastType } from "@repo/types";
import { Toast } from "react-bootstrap";


export function ToastContainer({ toasts }: { toasts: ToastPayload[] }) {
  return (
    <div className="fixed top-4 right-4 z-9999 space-y-3">
      {toasts.map((toast) => (
        <Toast
          className={`colored-toast bg-${toast.type}-transparent`}
          delay={3000}
          key={toast.id}
          autohide
        >
          <Toast.Header
            closeButton
            className={`rounded-md bg-${toast.type}  text-white py-2 pl-5 pr-10 shadow-lg`}
          >
            <strong className="me-auto capitalize">{toast.type}</strong>
          </Toast.Header>
          <Toast.Body className="py-2 pl-5 pr-10 capitalize">
            {toast.message}
          </Toast.Body>
        </Toast>
      ))}
    </div>
  );
}
