export function camelCaseToSnakeCase(input: string) {
  return input
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/([A-Z])([A-Z][a-z])/g, "$1-$2")
    .toLowerCase();
}

export function commandNameToSignature(input: string): string {
  return input
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/([A-Z]+)([A-Z][a-z])/g, "$1-$2")
    .replace(/^([a-zA-Z]+)/, (match) => match.toLowerCase())
    .replace(/-/, ":")
    .toLowerCase();
}
