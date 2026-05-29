import Image from "next/image";

interface LogoProps {
  variant?: "dark" | "light";
  size?: "sm" | "md" | "lg";
}

export default function Logo({ variant = "dark", size = "md" }: LogoProps) {
  const h = size === "sm" ? 28 : size === "lg" ? 44 : 36;
  // logo-color.png (2048×313 original) — color version for light backgrounds
  // logo-white.svg — white version for dark backgrounds
  const src = variant === "light" ? "/images/logo-white.svg" : "/images/logo-color.png";

  return (
    <Image
      src={src}
      alt="Петрострой"
      width={Math.round(h * (263 / 40))}
      height={h}
      priority
      style={{ height: h, width: "auto" }}
    />
  );
}
