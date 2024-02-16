import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";

export function Slant({
  className,
  fill,
  bottom,
}: {
  className?: ClassValue;
  fill?: string;
  bottom?: boolean;
}) {
  return (
    <svg
      //   height="auto"
      className={cn(className)}
      viewBox="0 0 1279 158"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {!bottom && (
        <path d="M1278.5 79H0V0L1278.5 75V79Z" fill={fill ?? "white"} />
      )}
      {bottom && <path d="M0 79H1278.5V158L0 83V79Z" fill={fill ?? "white"} />}
    </svg>
  );
}
