import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";

export function LogoHolderBox({
  className,
  fill,
  fillOpacity,
}: {
  className?: ClassValue;
  fill?: string;
  fillOpacity?: string;
}) {
  return (
    <svg
      width="461"
      height="118"
      viewBox="0 0 461 118"
      fill="none"
      className={cn(className)}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_b_54_6)">
        <path
          d="M75.0511 100.16L2 0H458L377.155 101.538C369.376 111.308 357.569 117 345.08 117H108.177C95.0788 117 82.7692 110.742 75.0511 100.16Z"
          // fill="#E3EAEF"
          // fill-opacity="0.31"
          fill={fill ?? "#fff"}
          fillOpacity={fillOpacity ?? "0.31"}
        />
        <path
          d="M75.0511 100.16L2 0H458L377.155 101.538C369.376 111.308 357.569 117 345.08 117H108.177C95.0788 117 82.7692 110.742 75.0511 100.16Z"
          stroke="#5EAFF1"
          strokeWidth="1.5"
        />
      </g>
      <defs>
        <filter
          id="filter0_b_54_6"
          x="-3.96707"
          y="-5"
          width="468.042"
          height="127"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_54_6"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_54_6"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
