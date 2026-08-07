// apps/web/components/account/signin.tsx
"use client";

import { signIn, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { Mail, LogIn } from "lucide-react";
import PasswordField from "@/components/layout/login/PasswordField";
// import LoginImage from "@/components/ui/FormSideImage";
import FormSideImage from "@/components/ui/FormSideImage";

export default function SigninComponent() {
  const { status } = useSession();
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // Redirect if logged in
  useEffect(() => {
    if (status === "authenticated") {
      router.replace("/");
    }
  }, [status, router]);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const rememberMe = formData.get("remember") === "on";

    if (!email || !password) {
      setErrorMsg("Please fill in both fields");
      setLoading(false);
      return;
    }

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
      remember: rememberMe,
    });

    if (res?.error) {
      setErrorMsg(
        res.error.includes("Missing")
          ? "Please fill all fields"
          : "Invalid email or password",
      );
      setLoading(false);
      return;
    }

    router.refresh();
    router.replace(res?.url || "/");
  };

  if (status === "authenticated") return null;

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex items-center justify-center px-6">
          <div className="w-full max-w-md">
            <div className="mb-6 flex justify-center">
              <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-orange-500 text-white text-xl">
                <LogIn />
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-center">Welcome Back</h2>
            <p className="text-gray-500 text-center mt-1">
              Sign in to access your portal
            </p>

            <form onSubmit={handleLogin} className="mt-8 space-y-4">
              {/* Email */}
              <div>
                <label className=" text-gray-600">Email Address</label>

                <div className="flex items-center justify-center gap-2 sm:gap-3 border border-gray-300 rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 w-full mt-1">
                  <Mail className="text-gray-400 shrink-0" size={18} />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    className="w-full mt-1 px-4 py-2  rounded-lg outline-none focus:outline-none focus:ring-0"
                  />
                </div>
              </div>

              {/* Password */}
              <PasswordField name="password" />

              {/* Remember + Forgot */}
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-gray-600">
                  <input
                    type="checkbox"
                    name="remember"
                    className="accent-orange-500"
                  />
                  Remember me
                </label>
                <a href="#" className="text-[#0A7CD8] hover:underline">
                  Forgot password?
                </a>
              </div>

              {/* Button */}
              <button
                type="submit"
                disabled={loading}
                className={`w-full bg-[#FF6B35] hover:bg-orange-600 text-white py-2 cursor-pointer rounded-lg transition ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                {loading ? "Signing in..." : "Sign In"}
              </button>

              {errorMsg && (
                <p className="text-red-500 text-sm mt-2">{errorMsg}</p>
              )}
            </form>

            {/* Signup */}
            <p className="text-center text-sm text-gray-600 mt-6">
              Don’t have an account?{" "}
              <Link href="/sign-up" className="text-[#0A7CD8] hover:underline">
                Sign up now
              </Link>
            </p>
          </div>
        </div>
        {/* <LoginImage /> */}
        <FormSideImage
          heading="Your Career Journey Starts Here"
          desc="Access your personalized portal to track applications and manage your profile"
          image=""
        />
      </div>
    </>
  );
}
