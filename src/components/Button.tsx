import type React from "react";
import { cn } from "../utils/cn";
import { useState } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant: "button" | "link" | "nav" | "ghost";
  activated?: boolean;
}

export default function Button({
  children,
  variant,
  activated,
  className,
  ...props
}: ButtonProps) {
  const baseClasses = "cursor-pointer focus:outline-none";

  const variantClasses = {
    button: "bg-blue-dark px-4 py-2 rounded-md",
    nav: "text-center w-full px-2 pt-1 rounded-md",
    ghost: "dark:hover:bg-gray p-2 rounded-md hover:bg-gray/30 font-medium",
    link: "text-blue-600 underline hover:text-blue-800",
  };

  if (variant === "nav") {
    const [hover, setHover] = useState(false);

    return (
      <div role="group">
        <button
          {...props}
          className={cn(
            baseClasses,
            variantClasses.nav,
            activated && "text-blue-dark",
            className
          )}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          {children}
        </button>
        <div
          aria-hidden="true"
          className={cn(
            "w-0 h-1 bg-blue-dark transition-all duration-300",
            hover && "w-full"
          )}
        />
      </div>
    );
  }
  return (
    <button
      {...props}
      className={cn(baseClasses, variantClasses[variant], className)}
    >
      {children}
    </button>
  );
}
