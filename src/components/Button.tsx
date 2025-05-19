import type React from "react";
import { cn } from "../utils/cn";
import { useState } from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant: "button" | "link" | "nav" | "ghost";
  onClick?: () => void;
  activated?: boolean;
}

export default function Button({
  children,
  variant,
  onClick,
  activated,
}: ButtonProps) {
  switch (variant) {
    case "button":
      return (
        <button
          onClick={onClick}
          className="bg-blue-dark px-4 py-2 rounded-md cursor-pointer"
        >
          {children}
        </button>
      );
    case "nav":
      const [hover, setHover] = useState<boolean>(false);

      return (
        <div>
          <button
            onClick={onClick}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className={cn(
              " text-center w-full px-2 py-1 rounded-md cursor-pointer",
              activated && "text-blue-dark"
            )}
          >
            {children}
          </button>
          <div
            className={cn(
              "w-0 h-1 bg-blue-dark transition-[width]",
              hover && "w-full"
            )}
          />
        </div>
      );
    case "ghost":
      return (
        <button
          onClick={onClick}
          className="dark:hover:bg-gray-light/40 cursor-pointer transition-colors px-4 rounded-md hover:bg-gray/30 font-medium"
        >
          {children}
        </button>
      );
  }
}
