"use client";

import { Lock, EyeOff, Eye } from "lucide-react";
import { useState, InputHTMLAttributes } from "react";
interface PasswordFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
}

const PasswordField: React.FC<PasswordFieldProps> = ({ name, label = "Password", ...props }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <label htmlFor={name} className="text-gray-600">
        {label}
      </label>

      <div className="flex items-center gap-2 sm:gap-3 border border-gray-300 rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 w-full mt-1">
        <Lock className="text-gray-400 shrink-0" size={18} />

        <input
          id={name}
          name={name} // <-- important for FormData
          type={showPassword ? "text" : "password"}
          placeholder={`Enter your ${label.toLowerCase()}`}
          className="px-4 py-2 flex-1 w-full bg-transparent text-sm sm:text-base text-gray-700 placeholder-gray-400 outline-none focus:outline-none focus:ring-0"
          {...props} // allow additional props
        />

        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="text-gray-400 shrink-0"
          aria-label="Toggle password visibility"
        >
          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>
    </div>
  );
};

export default PasswordField;

/* "use client";

import { Lock, EyeOff, Eye } from "lucide-react";
import React from "react";
import { useState } from "react";
const PasswordField = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div>
      <label htmlFor="" className="text-gray-600">
        Password
      </label>

      <div className="flex items-center gap-2 sm:gap-3 border border-gray-300 rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 w-full mt-1">
        // lock Icon 

        <Lock className="text-gray-400 shrink-0" size={18} />

        //  Input
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Enter your password"
          className=" px-4 py-2 flex-1 w-full bg-transparent text-sm sm:text-base text-gray-700 placeholder-gray-400 outline-none focus:outline-none focus:ring-0"
        />

   
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="text-gray-400 shrink-0"
          aria-label="Toggle password visibility"
        >
          {showPassword ? (
            <EyeOff size={18} className="sm:w-5 sm:h-5" />
          ) : (
            <Eye size={18} className="sm:w-5 sm:h-5" />
          )}
        </button>
      </div>
    </div>
  );
};

export default PasswordField;
 */