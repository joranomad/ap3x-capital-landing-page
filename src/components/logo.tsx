import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import React from "react";

function Logo({
  className,
  logoClassName,
}: {
  className?: ClassValue;
  logoClassName?: ClassValue;
}) {
  return (
    <div className={cn("w-40 ", className)}>
      <a href="/">
        <img
          src="./assets/logo_blue_v2.png"
          alt="Logo"
          className="w-full h-auto"
          draggable={false}
        />
      </a>
    </div>
  );
}

export default Logo;
