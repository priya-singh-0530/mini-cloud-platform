export type ValidationErrors = Record<string, string>;

export function validateEmail(email: string): string {
  if (!email.trim()) {
    return "Email is required.";
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email.trim())) {
    return "Enter a valid email address.";
  }

  return "";
}

export function validatePassword(password: string): string {
  if (!password) {
    return "Password is required.";
  }

  if (password.length < 8) {
    return "Password must contain at least 8 characters.";
  }

  return "";
}

export function validateRequired(
  value: string,
  fieldName: string
): string {
  if (!value.trim()) {
    return `${fieldName} is required.`;
  }

  return "";
}

export function validateProjectName(name: string): string {
  const requiredError = validateRequired(name, "Project name");

  if (requiredError) {
    return requiredError;
  }

  if (name.trim().length < 3) {
    return "Project name must contain at least 3 characters.";
  }

  return "";
}