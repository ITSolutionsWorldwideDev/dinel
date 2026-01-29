import { Mail, LogIn } from "lucide-react";

import Link from "next/link";
import PasswordField from "./PasswordField";
export default function LoginForm() {
  //

  return (
    <>
      {/* LEFT SECTION */}
      <div className="flex items-center justify-center px-6">
        <div className="w-full max-w-md">
          {/* Icon */}
          <div className="mb-6 flex justify-center">
            <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-orange-500 text-white text-xl">
              <LogIn />
            </div>
          </div>

          {/* Title */}
          <h2 className="text-2xl font-semibold text-center">Welcome Back</h2>
          <p className="text-gray-500 text-center mt-1">
            Sign in to access your portal
          </p>

          {/* Form */}
          <form className="mt-8 space-y-4">
            {/* Email */}
            <div>
              <label className=" text-gray-600">Email Address</label>

              <div className="flex items-center justify-center gap-2 sm:gap-3 border border-gray-300 rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 w-full mt-1">
                <Mail className="text-gray-400 shrink-0" size={18} />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full mt-1 px-4 py-2  rounded-lg outline-none focus:outline-none focus:ring-0"
                />
              </div>
            </div>

            {/* Password */}
            <PasswordField />

            {/* Remember + Forgot */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-gray-600">
                <input type="checkbox" className="accent-orange-500" />
                Remember me
              </label>
              <a href="#" className="text-[#0A7CD8] hover:underline">
                Forgot password?
              </a>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-[#FF6B35] hover:bg-orange-600 text-white py-2 rounded-lg transition"
            >
              Sign In
            </button>
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

      {/* RIGHT SECTION */}
    </>
  );
}
