"use client";
import { useState } from "react";

export default function InLoop() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email) {
      setMessage("Please enter your email");
      return;
    }

    if (!email.includes("@")) {
      setMessage("Please enter a valid email");
      return;
    }

    setMessage("Thanks for subscribing!");
    setEmail("");

    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <div className=" bg-[#FF8026]  flex items-center justify-center p-15 relative">
      <img
        src="/assets/home/2ab3e25bb92dd58e32fa83e505bc6ebef6f6ed58(1).jpg"
        className="absolute inset-0 w-full h-full object-cover mix-blend-multiply"
        alt=""
      />
      <div className="w-full max-w-2xl text-center relative">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Stay in the Loop
        </h1>

        <p className="text-white text-lg mb-8 px-4">
          Subscribe to our newsletter and get the latest insights, career tips,
          and industry trends delivered to your inbox.
        </p>

        <form
          onSubmit={handleSubscribe}
          className="flex flex-col sm:flex-row gap-3 justify-center items-center px-4"
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full sm:w-80 px-6 py-3  text-gray-700 focus:outline-none focus:ring-2 focus:ring-white bg-white"
          />

          <button
            type="submit"
            className="w-full sm:w-auto px-8 py-3 bg-white text-[#0A7CD8] font-semibold  hover:bg-gray-100 transition-colors cursor-pointer"
          >
            Subscribe
          </button>
        </form>

        {message && <p className="mt-4 text-white font-medium">{message}</p>}

        <p className="text-white text-sm mt-6">No spam. Unsubscribe anytime.</p>
      </div>
    </div>
  );
}
