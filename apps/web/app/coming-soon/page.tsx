"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ComingSoon() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const res = await fetch("/api/unlock", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password, remember }),
    });

    setLoading(false);

    if (res.ok) {
      // Marks THIS tab as unlocked. New tabs won't have this unless "remember" was checked.
      sessionStorage.setItem("site_unlocked", "1");
      router.push("/");
      router.refresh();
    } else {
      setError("Incorrect password. Please try again.");
    }
  };

  return (
    <div className="cs-wrapper">
      <div className="cs-glow cs-glow-1" />
      <div className="cs-glow cs-glow-2" />

      <div className="cs-content">
        <span className="cs-eyebrow">Staff Outsourcing</span>

        <h1 className="cs-heading">
          Welcome to Staff Outsourcing.
          <br />
          <span className="cs-heading-accent">We're coming soon.</span>
        </h1>

        <p className="cs-subtext">
          We're putting the finishing touches on something great.
          Enter the access password below to preview the site early.
        </p>

        <form onSubmit={handleSubmit} className="cs-form">
          <div className="cs-input-group">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter access password"
              className="cs-input"
              autoFocus
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="cs-eye-btn"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17.94 17.94A10.94 10.94 0 0 1 12 20c-7 0-10-8-10-8a18.5 18.5 0 0 1 4.22-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 10 8 10 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                  <line x1="1" y1="1" x2="23" y2="23" />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s3-8 11-8 11 8 11 8-3 8-11 8-11-8-11-8Z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              )}
            </button>
          </div>

          <label className="cs-remember">
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
            />
            Remember me on this browser
          </label>

          <button type="submit" className="cs-submit" disabled={loading}>
            {loading ? "Checking..." : "Enter Site"}
          </button>
        </form>

        {error && <p className="cs-error">{error}</p>}
      </div>

      <style>{`
        .cs-wrapper {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: radial-gradient(circle at 50% 0%, #16213e 0%, #0a0e1a 60%);
          overflow: hidden;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          padding: 24px;
        }

        .cs-glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(120px);
          opacity: 0.35;
          pointer-events: none;
        }
        .cs-glow-1 {
          width: 420px;
          height: 420px;
          background: #3b82f6;
          top: -120px;
          left: -100px;
        }
        .cs-glow-2 {
          width: 380px;
          height: 380px;
          background: #6366f1;
          bottom: -140px;
          right: -100px;
        }

        .cs-content {
          position: relative;
          z-index: 1;
          max-width: 560px;
          width: 100%;
          text-align: center;
        }

        .cs-eyebrow {
          display: inline-block;
          font-size: 0.75rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #7dd3fc;
          background: rgba(59, 130, 246, 0.12);
          border: 1px solid rgba(59, 130, 246, 0.3);
          padding: 6px 14px;
          border-radius: 999px;
          margin-bottom: 24px;
          font-weight: 600;
        }

        .cs-heading {
          font-size: clamp(1.9rem, 5vw, 3rem);
          line-height: 1.2;
          font-weight: 700;
          color: #f8fafc;
          margin: 0 0 18px 0;
          letter-spacing: -0.02em;
        }

        .cs-heading-accent {
          background: linear-gradient(90deg, #60a5fa, #a78bfa);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .cs-subtext {
          color: #94a3b8;
          font-size: 1rem;
          line-height: 1.6;
          margin: 0 0 36px 0;
        }

        .cs-form {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 14px;
        }

        .cs-input-group {
          position: relative;
          width: 100%;
          max-width: 340px;
        }

        .cs-input {
          width: 100%;
          padding: 13px 44px 13px 16px;
          border-radius: 10px;
          border: 1px solid #2a3350;
          background: rgba(255, 255, 255, 0.04);
          color: #f1f5f9;
          font-size: 0.95rem;
          outline: none;
          box-sizing: border-box;
          transition: border-color 0.2s ease, background 0.2s ease;
        }
        .cs-input::placeholder {
          color: #64748b;
        }
        .cs-input:focus {
          border-color: #3b82f6;
          background: rgba(59, 130, 246, 0.06);
        }

        .cs-eye-btn {
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          color: #64748b;
          cursor: pointer;
          display: flex;
          align-items: center;
          padding: 4px;
          transition: color 0.2s ease;
        }
        .cs-eye-btn:hover {
          color: #cbd5e1;
        }

        .cs-remember {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #94a3b8;
          font-size: 0.85rem;
          cursor: pointer;
          user-select: none;
          width: 100%;
          max-width: 340px;
        }
        .cs-remember input {
          accent-color: #3b82f6;
          cursor: pointer;
          width: 15px;
          height: 15px;
        }

        .cs-submit {
          width: 100%;
          max-width: 340px;
          padding: 13px 20px;
          border-radius: 10px;
          border: none;
          background: linear-gradient(90deg, #3b82f6, #6366f1);
          color: white;
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
          transition: opacity 0.2s ease, transform 0.15s ease;
        }
        .cs-submit:hover {
          opacity: 0.92;
        }
        .cs-submit:active {
          transform: scale(0.98);
        }
        .cs-submit:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .cs-error {
          color: #f87171;
          font-size: 0.875rem;
          margin-top: 4px;
        }
      `}</style>
    </div>
  );
}