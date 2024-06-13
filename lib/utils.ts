import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isNotNull<T>(value: T) {
  return value !== null;
}

export function ensureIsArray(array: string[] | null): string[] {
  return isNotNull(array) && Array.isArray(array) && array.length > 0
    ? array
    : [""];
}
