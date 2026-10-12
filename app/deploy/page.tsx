"use client";

import { useState } from "react";
import Link from "next/link";

export default function DeployPage() {
  const [projectName, setProjectName] = useState("");
  const [repository, setRepository] = useState("");
  const [branch, setBranch] = useState("main");
  const [status, setStatus] = useState("");

function handleDeploy(e: React.FormEvent) {
  e.preventDefault();

  if (!projectName || !repository) {
    setStatus("Please fill in all required fields.");
    return;
  }

  const newDeployment = {
    id: Date.now(),
    name: projectName,
    repository: repository,
    branch: branch,
    status: "Building",
    createdAt: new Date().toLocaleString(),
  };

  // Save latest deployment
  localStorage.setItem(
    "latestDeployment",
    JSON.stringify(newDeployment)
  );

  // Get previous deployment history
  const savedHistory = localStorage.getItem("deploymentHistory");

  const history = savedHistory
    ? JSON.parse(savedHistory)
    : [];

  // Add new deployment to history
  history.unshift(newDeployment);

  // Save complete history
  localStorage.setItem(
    "deploymentHistory",
    JSON.stringify(history)
  );

  setStatus("Deployment started successfully! 🚀");

  // Clear form
  setProjectName("");
  setRepository("");
  setBranch("main");
}

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <header className="border-b bg-white px-6 py-4">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Link href="/dashboard" className="font-semibold">
            ← Back to Dashboard
          </Link>

          <h1 className="text-xl font-bold">Deploy Project</h1>

          <div className="w-32" />
        </div>
      </header>

      <section className="mx-auto max-w-2xl px-6 py-10">
        <div className="rounded-2xl bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold">
            Create a new deployment
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Connect your GitHub repository and deploy your application.
          </p>

          <form onSubmit={handleDeploy} className="mt-8 space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium">
                Project Name
              </label>

              <input
                type="text"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                placeholder="my-awesome-project"
                className="w-full rounded-lg border px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                GitHub Repository
              </label>

              <input
                type="text"
                value={repository}
                onChange={(e) => setRepository(e.target.value)}
                placeholder="username/repository"
                className="w-full rounded-lg border px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Branch
              </label>

              <select
                value={branch}
                onChange={(e) => setBranch(e.target.value)}
                className="w-full rounded-lg border px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="main">main</option>
                <option value="master">master</option>
                <option value="development">development</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-indigo-600 px-5 py-3 font-semibold text-white hover:bg-indigo-700"
            >
              🚀 Deploy Project
            </button>
          </form>

          {status && (
            <div className="mt-5 rounded-lg bg-green-50 p-4 text-sm text-green-700">
              {status}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
