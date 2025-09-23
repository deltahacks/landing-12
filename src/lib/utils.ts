import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { CSSProperties } from "react";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type CSSVar = `--${string}`;
export type StyleWithVars<V extends CSSVar> = CSSProperties & Record<V, string>;
