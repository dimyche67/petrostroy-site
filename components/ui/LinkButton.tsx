import { cn } from "@/lib/utils";
import { AnchorHTMLAttributes } from "react";

interface LinkButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export default function LinkButton({
  className,
  variant = "primary",
  size = "md",
  children,
  ...props
}: LinkButtonProps) {
  return (
    <a
      className={cn(
        "inline-flex items-center justify-center font-sans font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 cursor-pointer no-underline",
        {
          "bg-[#D4890A] text-white hover:bg-[#B8760A] focus-visible:ring-[#D4890A] shadow-sm hover:shadow-md":
            variant === "primary",
          "bg-[#1C3A2D] text-white hover:bg-[#142B21] focus-visible:ring-[#1C3A2D] shadow-sm":
            variant === "secondary",
          "border-2 border-[#1C3A2D] text-[#1C3A2D] hover:bg-[#1C3A2D] hover:text-white focus-visible:ring-[#1C3A2D]":
            variant === "outline",
          "text-[#1C3A2D] hover:text-[#D4890A] underline-offset-4 hover:underline":
            variant === "ghost",
        },
        {
          "text-sm px-4 py-2 rounded-lg gap-1.5": size === "sm",
          "text-base px-6 py-3 rounded-xl gap-2": size === "md",
          "text-lg px-8 py-4 rounded-xl gap-2": size === "lg",
        },
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}
