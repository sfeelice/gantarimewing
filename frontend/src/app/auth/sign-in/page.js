"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Proses autentikasi (validasi, cek database, dll.)
    // Jika berhasil, arahkan ke dashboard admin
    router.push("/admin/dashboard");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded shadow-lg">
        <h2 className="text-2xl font-bold text-center">Sign In</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 mt-1 border rounded focus:outline-none focus:ring-primary focus:border-primary"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 mt-1 border rounded focus:outline-none focus:ring-primary focus:border-primary"
              required
            />
          </div>
          <button type="submit" className="w-full px-4 py-2 font-bold text-white bg-primary rounded hover:bg-primary-dark">
            Sign In
          </button>
        </form>
        <p className="text-center">
          Don't have an account?{" "}
          <a href="/auth/sign-up" className="text-primary hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}
