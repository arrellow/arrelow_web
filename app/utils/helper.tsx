import { clsx, ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const beautify = (n: number) =>
  ((Math.log10(n) / 3) | 0) == 0
    ? n
    : Number((n / Math.pow(10, ((Math.log10(n) / 3) | 0) * 3)).toFixed(1)) +
      ["", " thousand", " million", " billion", " tillion"][
        (Math.log10(n) / 3) | 0
      ];
