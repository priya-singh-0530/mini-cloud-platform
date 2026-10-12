import Link from "next/link";

const steps = [
  { name: "Source checkout", status: "Completed", time: "10:02 AM" },
  { name: "Install dependencies", status: "Completed", time: "10:03 AM" },
  { name: "Build application", status: "Completed", time: "10:04 AM" },
  { name: "Deploy application", status: "In progress", time: "10:05 AM" },
];

export default function DeploymentDetailsPage() {
  return (
    <main className="min-h-screen bg-slate-50 p-4 text-slate-900 sm:p-8">
      <div className="mx-auto max-w-5xl space-y-6">
        <Link
          href="/deploy"
          className="text-sm font-medium text-blue-600 hover:underline"
        >
          ← Back to Deploy
        </Link>

        <header>
          <p className="text-sm text-slate-500">Deployments / Details</p>
          <h1 className="mt-2 text-3xl font-bold">
            Deployment Details
          </h1>
          <p className="mt-2 text-slate-600">
            Monitor your application's deployment pipeline.
          </p>
        </header>

        <section className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Deployment ID</p>
            <p className="mt-2 break-all font-semibold">dep-2026-001</p>
          </div>

          <div className="rounded-xl border bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Environment</p>
            <p className="mt-2 font-semibold">Production</p>
          </div>

          <div className="rounded-xl border bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Status</p>
            <span className="mt-2 inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
              In Progress
            </span>
          </div>
        </section>

        <section className="rounded-xl border bg-white p-5 shadow-sm sm:p-6">
          <h2 className="text-xl font-semibold">Deployment Pipeline</h2>
          <p className="mt-1 text-sm text-slate-500">
            Sample pipeline status for demonstration purposes.
          </p>

          <div className="mt-6 space-y-5">
            {steps.map((step, index) => (
              <div key={step.name} className="flex gap-4">
                <div
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                    step.status === "Completed"
                      ? "bg-green-100 text-green-700"
                      : "bg-blue-100 text-blue-700"
                  }`}
                >
                  {step.status === "Completed" ? "✓" : index + 1}
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap justify-between gap-2">
                    <h3 className="font-medium">{step.name}</h3>
                    <span className="text-sm text-slate-500">
                      {step.status}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-slate-500">
                    {step.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border bg-white p-5 shadow-sm">
          <h2 className="text-lg font-semibold">Deployment Information</h2>
          <dl className="mt-4 grid gap-4 sm:grid-cols-2">
            <div>
              <dt className="text-sm text-slate-500">Branch</dt>
              <dd className="mt-1 font-medium">main</dd>
            </div>
            <div>
              <dt className="text-sm text-slate-500">Trigger</dt>
              <dd className="mt-1 font-medium">Manual deployment</dd>
            </div>
            <div>
              <dt className="text-sm text-slate-500">Build command</dt>
              <dd className="mt-1 break-all font-mono text-sm">
                npm run build
              </dd>
            </div>
            <div>
              <dt className="text-sm text-slate-500">Deployment mode</dt>
              <dd className="mt-1 font-medium">Demo / Mock</dd>
            </div>
          </dl>
        </section>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/logs"
            className="rounded-lg bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-700"
          >
            View Logs
          </Link>
          <Link
            href="/projects"
            className="rounded-lg border border-slate-300 bg-white px-5 py-3 font-medium hover:bg-slate-100"
          >
            View Projects
          </Link>
        </div>
      </div>
    </main>
  );
}
