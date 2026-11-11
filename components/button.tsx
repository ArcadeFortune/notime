import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

const variantClasses = {
  primary: "bg-white",
  secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",
} as const;

export function Button({ children, variant, ...props }: ButtonProps) {
  return <button type="button" {...props} className={`${variantClasses[variant ?? "primary"]} px-2 py-1 text-start font-medium cursor-pointer select-none rounded border not-hover:border-transparent hover:border-gray-300 hover:shadow-sm text-ellipsis overflow-hidden whitespace-nowrap ${props.className ?? ""}`}>{children}</button>;
}
