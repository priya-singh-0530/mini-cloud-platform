"use client";

import Link from "next/link";
import { ScrollText, CheckCircle2 } from "lucide-react";

export default function LogsPage() {
  const logs = [
    "Deployment started",
    "Repository connected",
    "Build process initialized",
    "Application deployed successfully",
  ];

  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <div className="mx-auto max-w-4xl">
        <Link href="/dashboard" className="text-indigo-600">
          ← Dashboard
        </Link>

        <h1 className="mt-4 text-2xl font-bold">Deployment Logs</h1>

        <p className="text-sm text-gray-500">
          View recent deployment activity.
        </p>

        <div className="mt-6 rounded-xl bg-gray-900 p-6 text-sm text-green-400 shadow">
          {logs.map((log, index) => (
            <div key={index} className="mb-4 flex gap-3">
              <CheckCircle2 size={17} />
              <span>
                [{new Date().toLocaleTimeString()}] {log}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-xl bg-white p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <ScrollText className="text-indigo-600" />
            <div>
              <h2 className="font-semibold">System Logs</h2>
              <p className="text-sm text-gray-500">
                All systems operational.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
