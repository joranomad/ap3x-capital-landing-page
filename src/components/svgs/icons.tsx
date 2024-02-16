import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import React from "react";

export function HamburgerIcon({
  className,
  variant,
}: {
  className: string;
  variant: "light" | "dark";
}) {
  const [isHovered, setIsHovered] = React.useState(false);
  const [isLight, setIsLight] = React.useState(variant === "light");

  return (
    <svg
      //   width="56"
      onMouseEnter={() => setIsLight(false)}
      onMouseLeave={() => setIsLight(variant === "light")}
      height="58px"
      viewBox="0 0 56 58"
      fill="none"
      className={cn(className)}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        y="1"
        width="56"
        height="56"
        rx="28"
        fill={isLight ? "white" : "#121F37"}
      />
      <path
        d="M15.0448 29.4179C15.0448 28.9563 15.419 28.5821 15.8806 28.5821H39.2836C39.7452 28.5821 40.1194 28.9563 40.1194 29.4179C40.1194 29.8795 39.7452 30.2537 39.2836 30.2537H15.8806C15.419 30.2537 15.0448 29.8795 15.0448 29.4179Z"
        fill={isLight ? "#121F37" : "white"}
      />
      <path
        d="M3.34326 1.83582L17.0802 19.9966C18.7814 22.2455 21.4382 23.5672 24.2581 23.5672H30.8204C33.5413 23.5672 36.1162 22.3362 37.8248 20.2186L52.6567 1.83582"
        stroke={isLight ? "#121F37" : "white"}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M3.34326 57L17.0802 38.8393C18.7814 36.5903 21.4382 35.2687 24.2581 35.2687H30.8204C33.5413 35.2687 36.1162 36.4996 37.8248 38.6172L52.6567 57"
        stroke={isLight ? "#121F37" : "white"}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
