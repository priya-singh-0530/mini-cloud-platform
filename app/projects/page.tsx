"use client";

import Link from "next/link";
import { FolderGit2, Rocket } from "lucide-react";

export default function ProjectsPage() {
  const history =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("deploymentHistory") || "[]")
      : [];

  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-center justify-between">
          <div>
            <Link href="/dashboard" className="text-indigo-600">
              ← Dashboard
            </Link>
            <h1 className="mt-4 text-2xl font-bold">Projects</h1>
            <p className="text-sm text-gray-500">
              Manage your deployed projects.
            </p>
          </div>

          <Link
            href="/deploy"
            className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white"
          >
            + New Project
          </Link>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {history.length === 0 ? (
            <div className="col-span-full rounded-xl bg-white p-10 text-center shadow-sm">
              <FolderGit2 className="mx-auto text-gray-400" />
              <p className="mt-3 font-medium">No projects yet</p>
              <p className="text-sm text-gray-500">
                Deploy your first project.
              </p>
            </div>
          ) : (
            history.map((project: any) => (
              <div
                key={project.id}
                className="rounded-xl border bg-white p-5 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <h2 className="font-semibold">{project.name}</h2>

                  <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs text-yellow-700">
                    {project.status}
                  </span>
                </div>

                <p className="mt-3 text-sm text-gray-500">
                  {project.repository}
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  Branch: {project.branch}
                </p>

                <p className="mt-3 text-xs text-gray-400">
                  {project.createdAt}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </main>
  );
}
