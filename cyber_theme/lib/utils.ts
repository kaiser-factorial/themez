import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Merge Tailwind class names, resolving conflicts.
 * Mirrors the shadcn/ui `cn` helper the components were written against.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
