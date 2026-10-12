export type ProjectStatus = "Running" | "Stopped" | "Building";

export type DeploymentStatus =
  | "Success"
  | "Failed"
  | "In Progress";

export interface Project {
  id: string;
  name: string;
  framework: string;
  status: ProjectStatus;
  updatedAt: string;
}

export interface Deployment {
  id: string;
  projectId: string;
  projectName: string;
  environment: "Production" | "Preview" | "Development";
  status: DeploymentStatus;
  createdAt: string;
}

export interface ActivityLog {
  id: string;
  projectName: string;
  message: string;
  level: "Info" | "Warning" | "Error";
  createdAt: string;
}
