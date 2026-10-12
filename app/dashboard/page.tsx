"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import {
  Cloud,
  LayoutDashboard,
  FolderGit2,
  Rocket,
  ScrollText,
  Settings,
  Plus,
  CheckCircle2,
  XCircle,
  Activity,
  Clock,
  LogOut,
  Menu,
  X,
} from "lucide-react";

type Deployment = {
  id: number;
  name: string;
  repository: string;
  branch: string;
  status: string;
  createdAt: string;
};

export default function DashboardPage() {
  const [deployments, setDeployments] = useState<Deployment[]>([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Load deployment history
  useEffect(() => {
    const savedHistory = localStorage.getItem("deploymentHistory");

    if (savedHistory) {
      try {
        const history = JSON.parse(savedHistory);
        setDeployments(history);
      } catch (error) {
        console.error("Failed to load deployment history:", error);
      }
    }
  }, []);

  // Count deployment statuses
  const activeDeployments = deployments.filter(
    (item) =>
      item.status === "Running" ||
      item.status === "Building"
  ).length;

  const failedDeployments = deployments.filter(
    (item) => item.status === "Failed"
  ).length;

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* ================= SIDEBAR ================= */}
      <aside
        className={`fixed left-0 top-0 z-50 flex h-screen w-64 flex-col border-r border-gray-200 bg-white transition-transform duration-300
        ${
          sidebarOpen
            ? "translate-x-0"
            : "-translate-x-full"
        }
        lg:translate-x-0`}
      >

        {/* Logo */}
        <div className="flex h-16 items-center justify-between border-b border-gray-200 px-5">

          <Link
            href="/"
            className="flex items-center gap-2"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 text-white">
              <Cloud size={20} />
            </div>

            <span className="text-lg font-bold">
              CloudDeploy
            </span>
          </Link>

          <button
            onClick={() => setSidebarOpen(false)}
            className="rounded-lg p-1 hover:bg-gray-100 lg:hidden"
          >
            <X size={20} />
          </button>

        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1 px-3 py-5">

          <Link
            href="/dashboard"
            className="flex items-center gap-3 rounded-lg bg-indigo-50 px-3 py-2.5 text-sm font-medium text-indigo-700"
          >
            <LayoutDashboard size={19} />
            Dashboard
          </Link>

          <Link
            href="/projects"
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-600 hover:bg-gray-100"
          >
            <FolderGit2 size={19} />
            Projects
          </Link>

          <Link
            href="/deploy"
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-600 hover:bg-gray-100"
          >
            <Rocket size={19} />
            Deployments
          </Link>

          <Link
            href="/logs"
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-600 hover:bg-gray-100"
          >
            <ScrollText size={19} />
            Logs
          </Link>

          <Link
            href="/settings"
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-600 hover:bg-gray-100"
          >
            <Settings size={19} />
            Settings
          </Link>

        </nav>

        {/* User */}
        <div className="border-t border-gray-200 p-4">

          <div className="mb-3 flex items-center gap-3">

            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100 font-semibold text-indigo-700">
              P
            </div>

            <div className="min-w-0">

              <p className="truncate text-sm font-medium">
                Priya Singh
              </p>

              <p className="truncate text-xs text-gray-500">
                developer@example.com
              </p>

            </div>

          </div>

          <Link
            href="/"
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-gray-500 hover:bg-gray-100"
          >
            <LogOut size={17} />
            Logout
          </Link>

        </div>

      </aside>

      {/* ================= MAIN CONTENT ================= */}
      <div className="lg:pl-64">

        {/* Header */}
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-gray-200 bg-white/95 px-4 backdrop-blur sm:px-6">

          <div className="flex items-center gap-3">

            <button
              onClick={() => setSidebarOpen(true)}
              className="rounded-lg p-2 hover:bg-gray-100 lg:hidden"
            >
              <Menu size={21} />
            </button>

            <div>

              <h1 className="text-lg font-semibold">
                Dashboard
              </h1>

              <p className="hidden text-xs text-gray-500 sm:block">
                Monitor your projects and deployments
              </p>

            </div>

          </div>

          <Link
            href="/deploy"
            className="flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
          >
            <Plus size={18} />

            <span className="hidden sm:inline">
              Deploy New Project
            </span>

            <span className="sm:hidden">
              Deploy
            </span>

          </Link>

        </header>

        {/* Dashboard */}
        <main className="p-4 sm:p-6 lg:p-8">

          {/* Welcome */}
          <div className="mb-7">

            <h2 className="text-2xl font-bold">
              Good afternoon, Priya 👋
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Here's what's happening with your applications.
            </p>

          </div>

          {/* ================= STATISTICS ================= */}
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

            {/* Total Projects */}
            <div className="rounded-xl border border-gray-200 bg-white p-5">

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-sm text-gray-500">
                    Total Projects
                  </p>

                  <p className="mt-2 text-3xl font-bold">
                    {deployments.length}
                  </p>

                </div>

                <div className="rounded-lg bg-indigo-50 p-3 text-indigo-600">
                  <FolderGit2 size={22} />
                </div>

              </div>

              <p className="mt-4 text-xs text-green-600">
                Your deployed projects
              </p>

            </div>

            {/* Active Deployments */}
            <div className="rounded-xl border border-gray-200 bg-white p-5">

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-sm text-gray-500">
                    Active Deployments
                  </p>

                  <p className="mt-2 text-3xl font-bold">
                    {activeDeployments}
                  </p>

                </div>

                <div className="rounded-lg bg-green-50 p-3 text-green-600">
                  <CheckCircle2 size={22} />
                </div>

              </div>

              <p className="mt-4 text-xs text-green-600">
                Running / Building
              </p>

            </div>

            {/* Failed Deployments */}
            <div className="rounded-xl border border-gray-200 bg-white p-5">

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-sm text-gray-500">
                    Failed Deployments
                  </p>

                  <p className="mt-2 text-3xl font-bold">
                    {failedDeployments}
                  </p>

                </div>

                <div className="rounded-lg bg-red-50 p-3 text-red-600">
                  <XCircle size={22} />
                </div>

              </div>

              <p className="mt-4 text-xs text-red-600">
                Needs attention
              </p>

            </div>

            {/* Uptime */}
            <div className="rounded-xl border border-gray-200 bg-white p-5">

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-sm text-gray-500">
                    Uptime
                  </p>

                  <p className="mt-2 text-3xl font-bold">
                    99.9%
                  </p>

                </div>

                <div className="rounded-lg bg-blue-50 p-3 text-blue-600">
                  <Activity size={22} />
                </div>

              </div>

              <p className="mt-4 text-xs text-green-600">
                Last 30 days
              </p>

            </div>

          </div>

          {/* ================= RECENT DEPLOYMENTS ================= */}
          <div className="mt-8 rounded-xl border border-gray-200 bg-white">

            <div className="flex items-center justify-between border-b border-gray-200 p-5">

              <div>

                <h3 className="font-semibold">
                  Recent Deployments
                </h3>

                <p className="mt-1 text-xs text-gray-500">
                  Latest deployment activity
                </p>

              </div>

              <Link
                href="/deploy"
                className="text-sm font-medium text-indigo-600 hover:text-indigo-700"
              >
                View all
              </Link>

            </div>

            {/* If no deployments */}
            {deployments.length === 0 ? (

              <div className="p-10 text-center">

                <Rocket
                  size={35}
                  className="mx-auto text-gray-300"
                />

                <h4 className="mt-3 font-medium text-gray-700">
                  No deployments yet
                </h4>

                <p className="mt-1 text-sm text-gray-500">
                  Deploy your first project to see it here.
                </p>

                <Link
                  href="/deploy"
                  className="mt-5 inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
                >
                  <Plus size={17} />
                  Deploy Project
                </Link>

              </div>

            ) : (

              <>
                {/* Desktop Table */}
                <div className="hidden overflow-x-auto md:block">

                  <table className="w-full">

                    <thead>

                      <tr className="border-b border-gray-100 text-left text-xs text-gray-500">

                        <th className="px-5 py-3 font-medium">
                          Project
                        </th>

                        <th className="px-5 py-3 font-medium">
                          Repository
                        </th>

                        <th className="px-5 py-3 font-medium">
                          Branch
                        </th>

                        <th className="px-5 py-3 font-medium">
                          Status
                        </th>

                        <th className="px-5 py-3 font-medium">
                          Time
                        </th>

                      </tr>

                    </thead>

                    <tbody>

                      {deployments.map((item) => (

                        <tr
                          key={item.id}
                          className="border-b border-gray-100 last:border-0 hover:bg-gray-50"
                        >

                          <td className="px-5 py-4 text-sm font-medium">
                            {item.name}
                          </td>

                          <td className="px-5 py-4 font-mono text-xs text-gray-500">
                            {item.repository}
                          </td>

                          <td className="px-5 py-4 text-sm text-gray-500">
                            {item.branch}
                          </td>

                          <td className="px-5 py-4">

                            {item.status === "Running" && (
                              <span className="inline-flex items-center gap-1.5 rounded-full bg-green-50 px-2.5 py-1 text-xs font-medium text-green-700">
                                <CheckCircle2 size={13} />
                                Running
                              </span>
                            )}

                            {item.status === "Failed" && (
                              <span className="inline-flex items-center gap-1.5 rounded-full bg-red-50 px-2.5 py-1 text-xs font-medium text-red-700">
                                <XCircle size={13} />
                                Failed
                              </span>
                            )}

                            {item.status === "Building" && (
                              <span className="inline-flex items-center gap-1.5 rounded-full bg-yellow-50 px-2.5 py-1 text-xs font-medium text-yellow-700">
                                <Clock size={13} />
                                Building
                              </span>
                            )}

                          </td>

                          <td className="px-5 py-4 text-sm text-gray-500">
                            {item.createdAt}
                          </td>

                        </tr>

                      ))}

                    </tbody>

                  </table>

                </div>

                {/* Mobile Cards */}
                <div className="space-y-3 p-4 md:hidden">

                  {deployments.map((item) => (

                    <div
                      key={item.id}
                      className="rounded-lg border border-gray-200 p-4"
                    >

                      <div className="flex items-center justify-between">

                        <p className="font-medium">
                          {item.name}
                        </p>

                        {item.status === "Running" && (
                          <span className="rounded-full bg-green-50 px-2 py-1 text-xs text-green-700">
                            Running
                          </span>
                        )}

                        {item.status === "Failed" && (
                          <span className="rounded-full bg-red-50 px-2 py-1 text-xs text-red-700">
                            Failed
                          </span>
                        )}

                        {item.status === "Building" && (
                          <span className="rounded-full bg-yellow-50 px-2 py-1 text-xs text-yellow-700">
                            Building
                          </span>
                        )}

                      </div>

                      <p className="mt-2 text-xs text-gray-500">
                        {item.repository}
                      </p>

                      <div className="mt-2 flex justify-between text-xs text-gray-500">

                        <span>
                          Branch: {item.branch}
                        </span>

                        <span>
                          {item.createdAt}
                        </span>

                      </div>

                    </div>

                  ))}

                </div>

              </>

            )}

          </div>

          {/* ================= QUICK ACTION ================= */}
          <div className="mt-6 rounded-xl bg-indigo-600 p-6 text-white">

            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">

              <div>

                <h3 className="text-lg font-semibold">
                  Ready to deploy something new?
                </h3>

                <p className="mt-1 text-sm text-indigo-100">
                  Connect a GitHub repository and deploy your application.
                </p>

              </div>

              <Link
                href="/deploy"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-indigo-600 hover:bg-indigo-50"
              >
                <Rocket size={18} />
                Deploy Project
              </Link>

            </div>

          </div>

        </main>

      </div>

    </div>
  );
}
