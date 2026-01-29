"use client";

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
import Link from "next/link";
import { useState } from "react";

export default function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="p-10">
      <div>
        <div className="mb-6 flex justify-center">
          <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-[#FF6B35] text-white text-xl">
            <UserPlus />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-semibold text-center">Welcome Back</h2>
        <p className="text-gray-500 text-center mt-1">
          Sign in to access your portal
        </p>
      </div>

      <div className=" flex items-center justify-center  px-4">
        <div className="w-full max-w-md  p-6 rounded-xl">
          {/* Full Name */}
          <label className="text-sm text-gray-600">Full Name</label>
          <div className="flex items-center gap-3 border border-gray-400 rounded-lg px-4 py-3 mt-1">
            <User className="text-gray-400" size={18} />
            <input
              type="text"
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
              placeholder="+1 (555) 123-4567"
              className="w-full  text-sm border-none outline-none focus:outline-none focus:ring-0"
            />
          </div>

          {/* Location */}
          <label className="text-sm text-gray-600 mt-4 block">Location</label>
          <div className="flex items-center gap-3 border rounded-lg px-4 py-3 mt-1">
            <MapPin className="text-gray-400" size={18} />
            <input
              type="text"
              placeholder="San Francisco, CA"
              className="w-full outline-none text-sm border-none focus:outline-none focus:ring-0"
            />
          </div>

          {/* Password */}
          <label className="text-sm text-gray-600 mt-4 block">Password</label>
          <div className="flex items-center gap-3 border rounded-lg px-4 py-3 mt-1">
            <Lock className="text-gray-400" size={18} />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Min. 6 characters"
              className="w-full outline-none text-sm border-none  focus:outline-none focus:ring-0"
            />
            <button onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? (
                <EyeOff size={18} className="text-gray-400" />
              ) : (
                <Eye size={18} className="text-gray-400" />
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
              placeholder="Confirm your password"
              className="w-full outline-none text-sm border-none  focus:outline-none focus:ring-0"
            />
            <button
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? (
                <EyeOff size={18} className="text-gray-400" />
              ) : (
                <Eye size={18} className="text-gray-400" />
              )}
            </button>
          </div>

          {/* Terms */}
          <p className="text-xs text-gray-500 text-center mt-6">
            I agree to the{" "}
            <span className="text-[#0A7CD8] cursor-pointer">
              Terms of Service
            </span>{" "}
            and{" "}
            <span className="text-[#0A7CD8] cursor-pointer">
              Privacy Policy
            </span>
          </p>

          {/* Button */}
          <button className="w-full bg-[#FF6B35] hover:bg-orange-600 text-white py-3 rounded-lg mt-4 font-medium">
            Create Account
          </button>

          {/* Sign in */}
          <p className="text-sm text-gray-500 text-center mt-4">
            Already have an account?{" "}
            <Link href={"/sigin"}>
              {" "}
              <span className="text-[#0A7CD8] cursor-pointer">Sign in</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
