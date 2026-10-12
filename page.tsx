import Link from "next/link";
import {
  Rocket,
  Activity,
  FileText,
  Settings,
  Cloud,
} from "lucide-react";

const features = [
  {
    title: "Easy Deployment",
    description:
      "Deploy your applications with a simple and intuitive workflow.",
    icon: Rocket,
  },
  {
    title: "Deployment Monitoring",
    description:
      "Track deployments and application status from one dashboard.",
    icon: Activity,
  },
  {
    title: "Application Logs",
    description:
      "View deployment logs in a clean terminal-style interface.",
    icon: FileText,
  },
  {
    title: "Project Configuration",
    description:
      "Manage repositories, environment variables and deployment settings.",
    icon: Settings,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* Navbar */}
      <nav className="border-b border-gray-200">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 text-white">
              <Cloud size={20} />
            </div>

            <span className="text-xl font-bold">
              CloudDeploy
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
            >
              Login
            </Link>

            <Link
              href="/register"
              className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
            >
              Register
            </Link>
          </div>

        </div>
      </nav>

      {/* Hero */}
      <section className="px-6 py-24 md:py-32">

        <div className="mx-auto max-w-4xl text-center">

          <div className="inline-flex rounded-full bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600">
            Mini Cloud Platform
          </div>

          <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">
            Deploy.
            <span className="text-indigo-600">
              {" "}Monitor.
            </span>
            <br />
            Scale your applications.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Manage projects, deployments and application logs
            from a single developer-friendly dashboard.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

            <Link
              href="/register"
              className="rounded-lg bg-indigo-600 px-6 py-3 font-medium text-white hover:bg-indigo-700"
            >
              Get Started
            </Link>

            <Link
              href="/login"
              className="rounded-lg border border-gray-300 px-6 py-3 font-medium text-gray-700 hover:bg-gray-50"
            >
              Login
            </Link>

          </div>

        </div>

      </section>

      {/* Features */}
      <section className="bg-gray-50 px-6 py-20">

        <div className="mx-auto max-w-6xl">

          <div className="text-center">

            <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
              Platform Features
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              Everything you need
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-gray-600">
              A simple interface for managing the complete
              application deployment lifecycle.
            </p>

          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >

                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                    <Icon size={23} />
                  </div>

                  <h3 className="mt-5 font-semibold">
                    {feature.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    {feature.description}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="px-6 py-20">

        <div className="mx-auto max-w-4xl rounded-2xl bg-gray-900 px-6 py-14 text-center text-white">

          <h2 className="text-3xl font-bold">
            Ready to deploy?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-gray-300">
            Create your first project and experience
            a simple cloud deployment workflow.
          </p>

          <Link
            href="/register"
            className="mt-7 inline-block rounded-lg bg-white px-6 py-3 font-medium text-gray-900 hover:bg-gray-100"
          >
            Create Your Account
          </Link>

        </div>

      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 px-6 py-8 text-center text-sm text-gray-500">
        © 2026 CloudDeploy. Mini Cloud Platform.
      </footer>

    </main>
  );
}