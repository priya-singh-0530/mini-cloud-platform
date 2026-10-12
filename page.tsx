"use client";

import { useState } from "react";
import Link from "next/link";
import { Settings } from "lucide-react";

export default function SettingsPage() {
  const [name, setName] = useState("Priya Singh");
  const [email, setEmail] = useState("developer@example.com");
  const [message, setMessage] = useState("");

  function saveSettings(e: React.FormEvent) {
    e.preventDefault();

    localStorage.setItem(
      "userSettings",
      JSON.stringify({ name, email })
    );

    setMessage("Settings saved successfully! ✓");
  }

  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <div className="mx-auto max-w-2xl">
        <Link href="/dashboard" className="text-indigo-600">
          ← Dashboard
        </Link>

        <div className="mt-6 rounded-xl bg-white p-8 shadow-sm">
          <div className="flex items-center gap-3">
            <Settings className="text-indigo-600" />
            <h1 className="text-2xl font-bold">Settings</h1>
          </div>

          <form onSubmit={saveSettings} className="mt-8 space-y-5">
            <div>
              <label className="text-sm font-medium">
                Name
              </label>

              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-2 w-full rounded-lg border p-3"
              />
            </div>

            <div>
              <label className="text-sm font-medium">
                Email
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-2 w-full rounded-lg border p-3"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-indigo-600 p-3 font-semibold text-white hover:bg-indigo-700"
            >
              Save Settings
            </button>
          </form>

          {message && (
            <p className="mt-4 rounded-lg bg-green-50 p-3 text-sm text-green-700">
              {message}
            </p>
          )}
        </div>
      </div>
    </main>
  );
}