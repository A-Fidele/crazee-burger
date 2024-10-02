export function convertStringToBoolean<T>(input: T | boolean): boolean {
  if (typeof input === "boolean") return input
  return input === "true"
}