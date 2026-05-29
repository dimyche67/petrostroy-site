"use client";

import { useModal } from "./ModalProvider";
import { cn } from "@/lib/utils";

interface Props {
  label?: string;
  title?: string;
  source?: string;
  variant?: "green" | "outline-white" | "outline-dark" | "white";
  size?: "sm" | "md" | "lg";
  className?: string;
  icon?: React.ReactNode;
}

export default function CtaButton({
  label = "Оставить заявку",
  title,
  source,
  variant = "green",
  size = "md",
  className,
  icon,
}: Props) {
  const { openModal } = useModal();

  return (
    <button
      onClick={() => openModal(title || label, source)}
      className={cn(
        "inline-flex items-center justify-center gap-2 font-bold cursor-pointer transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#109e4c] focus-visible:ring-offset-2",
        {
          "bg-[#109e4c] hover:bg-[#097a3a] text-white shadow-sm hover:shadow-md": variant === "green",
          "border-2 border-white/40 text-white hover:bg-white hover:text-[#36494f]": variant === "outline-white",
          "border-2 border-[#36494f] text-[#36494f] hover:bg-[#36494f] hover:text-white": variant === "outline-dark",
          "bg-white text-[#36494f] hover:bg-[#f7f8f7]": variant === "white",
        },
        {
          "text-sm px-5 py-2.5 rounded-xl": size === "sm",
          "text-sm px-6 py-3.5 rounded-xl": size === "md",
          "text-base px-8 py-4 rounded-xl": size === "lg",
        },
        className
      )}
    >
      {label}
      {icon}
    </button>
  );
}
