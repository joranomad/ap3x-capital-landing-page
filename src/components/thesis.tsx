import React from "react";
import { Slant } from "./svgs/slant";
import { Button } from "./ui/button";
import { paths } from "@/router";
import { Icon } from "@iconify/react";
import { ClassValue } from "clsx";
import { cn } from "@/lib/utils";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

export default function Thesis() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const IconRef = React.useRef<HTMLDivElement[]>([]);
  useGSAP(
    () => {
      gsap.fromTo(
        IconRef.current,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 2,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            end: "bottom 20%",
            scrub: 1,
            // markers: true,
          },
        }
      );
    },
    { scope: containerRef }
  );
  return (
    <div
      ref={containerRef}
      className="flex flex-col gap-5 items-center py-4 pb-32 relative bg-white"
    >
      <Slant className="absolute top-0 w-full translate-y-[-49%] " />
      <p className="text-4xl sm:text-5xl font-bold mb-4 sm:mb-6">Our Thesis</p>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16">
        {data.map((d, i) => (
          <IconSet
            ref={(el) => el && IconRef.current.push(el)}
            key={i}
            icon={d.icon}
            title={d.title}
            className="gap-3"
          />
        ))}
      </div>
    </div>
  );
}

const data = [
  {
    icon: "streamline:ai-chip-spark-solid",
    title: "d/AI",
  },
  {
    icon: "fa6-solid:gamepad",
    title: "Gaming",
  },
  {
    icon: "system-uicons:chain",
    title: "On-Chain",
  },
  {
    icon: "solar:earth-bold",
    title: "Ecosystems",
  },
];

interface IconSetProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  icon: string;
  title: string;
}
const IconSet = React.forwardRef<HTMLDivElement, IconSetProps>(
  ({ icon, title, className, ...props }, ref) => (
    <div
      {...props}
      ref={ref}
      className={cn(
        "flex group flex-col items-center  text-foreground/60 hover:text-foreground/100 transition-all ease-in-out ",
        className
      )}
    >
      <Icon
        icon={icon}
        width="3rem"
        height="3rem"
        className="group-hover:scale-125 cursor-pointer transition-all ease-in-out duration-100   "
      />
      <div className="text-base lg:text-md  group-hover:scale-125 cursor-pointer transition-all ease-in-out duration-100">
        {title}
      </div>
    </div>
  )
);
