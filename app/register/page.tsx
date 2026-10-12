"use client";

import Link from "next/link";
import { Cloud, Mail, Lock, User, ArrowRight } from "lucide-react";
import { FormEvent, useState } from "react";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (!name || !email || !password || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }

    if (!email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    if (password.length < 6) {
      setError("Password must contain at least 6 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Dummy registration
    setSuccess("Account created successfully!");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-6 py-12">

      <div className="w-full max-w-md">

        {/* Logo */}
        <div className="mb-8 text-center">

          <Link
            href="/"
            className="inline-flex items-center gap-2"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 text-white">
              <Cloud size={22} />
            </div>

            <span className="text-xl font-bold text-gray-900">
              CloudDeploy
            </span>
          </Link>

          <h1 className="mt-8 text-2xl font-bold text-gray-900">
            Create your account
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Start managing your cloud deployments
          </p>

        </div>

        {/* Registration Card */}
        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Name */}
            <div>

              <label className="mb-2 block text-sm font-medium text-gray-700">
                Full Name
              </label>

              <div className="relative">

                <User
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="w-full rounded-lg border border-gray-300 py-3 pl-10 pr-4 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                />

              </div>

            </div>

            {/* Email */}
            <div>

              <label className="mb-2 block text-sm font-medium text-gray-700">
                Email
              </label>

              <div className="relative">

                <Mail
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full rounded-lg border border-gray-300 py-3 pl-10 pr-4 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                />

              </div>

            </div>

            {/* Password */}
            <div>

              <label className="mb-2 block text-sm font-medium text-gray-700">
                Password
              </label>

              <div className="relative">

                <Lock
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Minimum 6 characters"
                  className="w-full rounded-lg border border-gray-300 py-3 pl-10 pr-4 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                />

              </div>

            </div>

            {/* Confirm Password */}
            <div>

              <label className="mb-2 block text-sm font-medium text-gray-700">
                Confirm Password
              </label>

              <div className="relative">

                <Lock
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Repeat your password"
                  className="w-full rounded-lg border border-gray-300 py-3 pl-10 pr-4 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                />

              </div>

            </div>

            {/* Error */}
            {error && (
              <div className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
                {error}
              </div>
            )}

            {/* Success */}
            {success && (
              <div className="rounded-lg bg-green-50 px-4 py-3 text-sm text-green-700">
                {success}
              </div>
            )}

            {/* Register Button */}
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-indigo-600 py-3 font-medium text-white transition hover:bg-indigo-700"
            >
              Create Account
              <ArrowRight size={18} />
            </button>

          </form>

          {/* Login */}
          <div className="mt-6 text-center text-sm text-gray-500">

            Already have an account?{" "}

            <Link
              href="/login"
              className="font-medium text-indigo-600 hover:text-indigo-700"
            >
              Sign in
            </Link>

          </div>

        </div>

        {/* Back */}
        <div className="mt-6 text-center">

          <Link
            href="/"
            className="text-sm text-gray-500 hover:text-gray-700"
          >
            ← Back to home
          </Link>

        </div>

      </div>

    </main>
  );
}
