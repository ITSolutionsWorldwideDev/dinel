// apps/web/components/account/signup.tsx
"use client";

import { signIn, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import {
  Eye,
  EyeOff,
  Mail,
  Phone,
  Lock,
  MapPin,
  User,
  LogIn,
  UserPlus,
} from "lucide-react";

import FormSideImage from "@/components/ui/FormSideImage";

export default function SignUpComponent() {
  const { status } = useSession();
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Redirect if logged in
  useEffect(() => {
    if (status === "authenticated") {
      router.replace("/");
    }
  }, [status, router]);

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    const formData = new FormData(e.currentTarget);
    const full_name = formData.get("full_name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const location = formData.get("location") as string;
    const password = formData.get("password") as string;
    const confirmPassword = formData.get("confirm_password") as string;

    if (!full_name || !email || !password || !confirmPassword) {
      setErrorMsg("Please fill all required fields");
      setLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      setErrorMsg("Passwords do not match");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ full_name, email, phone, location, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || "Something went wrong");
        setLoading(false);
        return;
      }

      // Signup success → redirect to login
      router.push("/login");
    } catch (err) {
      console.error(err);
      setErrorMsg("Server error. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  if (status === "authenticated") return null;

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="p-10 flex flex-1 items-center justify-center">
          <div className=" flex items-center justify-center  px-4">
            <div className="w-full max-w-md  p-6 rounded-xl">
              <div>
                <div className="mb-6 flex justify-center">
                  <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-[#FF6B35] text-white text-xl">
                    <UserPlus />
                  </div>
                </div>

                {/* Title */}
                <h2 className="text-2xl font-semibold text-center">
                  Create Account
                </h2>
                <p className="text-gray-500 text-center mt-1">
                  Join our platform and discover new opportunities
                </p>
              </div>

              <form className="mt-8 space-y-4" onSubmit={handleSignup}>
                {/* Full Name */}
                <label className="text-sm text-gray-600">Full Name</label>
                <div className="flex items-center gap-3 border border-gray-400 rounded-lg px-4 py-3 mt-1">
                  <User className="text-gray-400" size={18} />
                  <input
                    type="text"
                    id="full_name"
                    name="full_name"
                    placeholder="John Doe"
                    className="w-full text-sm border-none outline-none focus:outline-none focus:ring-0"
                  />
                </div>

                {/* Email */}
                <label className="text-sm text-gray-600 mt-4 block">
                  Email Address
                </label>
                <div className="flex items-center gap-3 border rounded-lg px-4 py-3 mt-1">
                  <Mail className="text-gray-400" size={18} />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="john@example.com"
                    className="w-full  text-sm border-none outline-none focus:outline-none focus:ring-0"
                  />
                </div>

                {/* Phone */}
                <label className="text-sm text-gray-600 mt-4 block">
                  Phone Number
                </label>
                <div className="flex items-center gap-3 border rounded-lg px-4 py-3 mt-1">
                  <Phone className="text-gray-400" size={18} />
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    placeholder="+1 (555) 123-4567"
                    className="w-full  text-sm border-none outline-none focus:outline-none focus:ring-0"
                  />
                </div>

                {/* Location */}
                <label className="text-sm text-gray-600 mt-4 block">
                  Location
                </label>
                <div className="flex items-center gap-3 border rounded-lg px-4 py-3 mt-1">
                  <MapPin className="text-gray-400" size={18} />
                  <input
                    type="text"
                    name="location"
                    placeholder="San Francisco, CA"
                    className="w-full outline-none text-sm border-none focus:outline-none focus:ring-0"
                  />
                </div>

                {/* Password */}
                <label className="text-sm text-gray-600 mt-4 block">
                  Password
                </label>
                <div className="flex items-center gap-3 border rounded-lg px-4 py-3 mt-1">
                  <Lock className="text-gray-400" size={18} />
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    placeholder="Min. 6 characters"
                    className="w-full outline-none text-sm border-none  focus:outline-none focus:ring-0"
                  />
                  <button onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? (
                      <EyeOff size={18} className="text-gray-400 cursor-pointer" />
                    ) : (
                      <Eye size={18} className="text-gray-400 cursor-pointer" />
                    )}
                  </button>
                </div>

                {/* Confirm Password */}
                <label className="text-sm text-gray-600 mt-4 block">
                  Confirm Password
                </label>
                <div className="flex items-center gap-3 border rounded-lg px-4 py-3 mt-1">
                  <Lock className="text-gray-400" size={18} />
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirm_password"
                    name="confirm_password"
                    placeholder="Confirm your password"
                    className="w-full outline-none text-sm border-none  focus:outline-none focus:ring-0"
                  />
                  <button
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={18} className="text-gray-400 cursor-pointer" />
                    ) : (
                      <Eye size={18} className="text-gray-400 cursor-pointer" />
                    )}
                  </button>
                </div>

                {errorMsg && (
                  <p className="text-red-500 text-sm mt-2">{errorMsg}</p>
                )}

                {/* Terms */}
                {/* <p className="text-xs text-gray-500 text-center mt-6">
                I agree to the{" "}
                <span className="text-[#0A7CD8] cursor-pointer">
                  Terms of Service
                </span>{" "}
                and{" "}
                <span className="text-[#0A7CD8] cursor-pointer">
                  Privacy Policy
                </span>
              </p> */}

                {/* Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full bg-[#FF6B35] hover:bg-orange-600 text-white py-3 cursor-pointer rounded-lg mt-4 font-medium ${
                    loading ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {loading ? "Creating..." : "Create Account"}
                </button>
              </form>
              {/* Sign in */}
              <p className="text-sm text-gray-500 text-center mt-4">
                Already have an account?{" "}
                <Link href={"/login"}>
                  {" "}
                  <span className="text-[#0A7CD8] cursor-pointer">Sign in</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
        <FormSideImage
          image="/d28660e78278ab38b2bf73fd7d7c3d6703e2b540.jpg"
          heading="Join Dinel Today"
          desc="Create your account and discover amazing career opportunities"
        />
      </div>
    </>
  );
}
