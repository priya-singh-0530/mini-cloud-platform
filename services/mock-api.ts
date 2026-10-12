import type {
  ActivityLog,
  Deployment,
  Project,
} from "../types/cloud";

const projects: Project[] = [
  {
    id: "proj-001",
    name: "Portfolio Website",
    framework: "Next.js",
    status: "Running",
    updatedAt: "Today",
  },
  {
    id: "proj-002",
    name: "API Service",
    framework: "Node.js",
    status: "Building",
    updatedAt: "Today",
  },
  {
    id: "proj-003",
    name: "Documentation",
    framework: "React",
    status: "Stopped",
    updatedAt: "Yesterday",
  },
];

const deployments: Deployment[] = [
  {
    id: "dep-001",
    projectId: "proj-001",
    projectName: "Portfolio Website",
    environment: "Production",
    status: "Success",
    createdAt: "Today",
  },
  {
    id: "dep-002",
    projectId: "proj-002",
    projectName: "API Service",
    environment: "Preview",
    status: "In Progress",
    createdAt: "Today",
  },
];

const logs: ActivityLog[] = [
  {
    id: "log-001",
    projectName: "Portfolio Website",
    message: "Deployment completed successfully",
    level: "Info",
    createdAt: "Today",
  },
  {
    id: "log-002",
    projectName: "API Service",
    message: "Build is in progress",
    level: "Warning",
    createdAt: "Today",
  },
];

function simulateDelay(): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, 200));
}

export async function getProjects(): Promise<Project[]> {
  await simulateDelay();
  return projects.map((project) => ({ ...project }));
}

export async function getDeployments(): Promise<Deployment[]> {
  await simulateDelay();
  return deployments.map((deployment) => ({ ...deployment }));
}

export async function getLogs(): Promise<ActivityLog[]> {
  await simulateDelay();
  return logs.map((log) => ({ ...log }));
}

export async function createDeployment(
  projectId: string,
  projectName: string,
  environment: Deployment["environment"]
): Promise<Deployment> {
  await simulateDelay();

  if (!projectId.trim() || !projectName.trim()) {
    throw new Error("Project information is required.");
  }

  return {
    id: `dep-${Date.now()}`,
    projectId,
    projectName: projectName.trim(),
    environment,
    status: "In Progress",
    createdAt: new Date().toLocaleString(),
  };
}
