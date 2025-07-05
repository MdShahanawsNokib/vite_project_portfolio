import clsx from "clsx"
import { twMerge } from "tailwind-merge"

export const ClassN = (...inputs) => {
    return twMerge(clsx(inputs));
}