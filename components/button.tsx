import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "sidebar";
}

const variantClasses = {
  sidebar: "bg-white",
  primary: "bg-blue-300 hover:bg-blue-400",
} as const;

export function Button({ children, variant, ...props }: ButtonProps) {
  return (
    <button
      type="button"
      {...props}
      className={`${variantClasses[variant ?? "primary"]}  px-2 py-1 text-start font-medium cursor-pointer select-none rounded border not-hover:border-transparent hover:border-gray-300 hover:shadow-sm text-ellipsis overflow-hidden whitespace-nowrap ${props.className ?? ""}`}
    >
      {children}
    </button>
  );
}
