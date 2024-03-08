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
import { Card, CardContent, CardHeader } from "./ui/card";
gsap.registerPlugin(ScrollTrigger);

export default function Thesis() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const IconRef = React.useRef<HTMLDivElement[]>([]);
  // useGSAP(
  //   () => {
  //     gsap.fromTo(
  //       IconRef.current,
  //       { opacity: 0, y: 100 },
  //       {
  //         opacity: 1,
  //         y: 0,
  //         duration: 2,
  //         scrollTrigger: {
  //           trigger: containerRef.current,
  //           start: "top 80%",
  //           end: "bottom 20%",
  //           scrub: 1,
  //           // markers: true,
  //         },
  //       }
  //     );
  //   },
  //   { scope: containerRef }
  // );
  return (
    <div
      ref={containerRef}
      className="flex flex-col gap-5 items-center py-8 pt-16  pb-32 relative bg-white"
    >
      <Slant className="absolute top-0 w-full translate-y-[-49%] " />
      <p className="text-4xl sm:text-4xl font-bold mb-4 sm:mb-6">Our Thesis</p>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {data.map((d, i) => (
          <CardSet
            // ref={(el) => el && IconRef.current.push(el)}
            key={i}
            icon={d.icon}
            title={d.title}
            description={d.description}
            index={i}
            className=""
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
    description:
      "Web2 AI has limited investable proxies in traditional financial markets, trading at trillion-dollar valuations. <br/> d/AI presents numerous opportunities, trading at <strong> <5% </strong> of privately held web2 AI companies.",
  },
  {
    icon: "fa6-solid:gamepad",
    title: "Gaming",
    description:
      "GameFi is poised to capture significant retail attention and flows. A groundbreaking shift is underway as titans of the traditional gaming world — Ubisoft, Blizzard, Sony, Nexon, and Square Enix — embrace blockchain technology.",
  },
  {
    icon: "system-uicons:chain",
    title: "On-Chain",
    description:
      "On-Chain tokens provide the highest upside potential, with clear catalysts, and numerous trackable liquidity inflow events.",
  },
  {
    icon: "solar:earth-bold",
    title: "Ecosystems",
    description:
      "Ecosystems are strong sources of alpha, with enhanced beta returns on top of underlying native currencies.",
  },
];

interface IconSetProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  icon: string;
  title: string;
  index: number;
  description: string;
}
const CardSet = React.forwardRef<HTMLDivElement, IconSetProps>(
  ({ icon, title, className, index, description, ...props }, ref) => (
    <Card
      className={cn(
        "max-w-lg p-10 border border-foreground rounded-none flex flex-col items-center justify-center aspect-square transition-all duration-300",
        "md:border-t-0 border-primary",
        index % 2 === 0 ? "border-l-0" : "border-r-0",
        index < 2 ? "md:border-t-0" : "md:border-b-0",
        "hover:from-primary/10 hover:to-background/10 hover:bg-gradient-to-r hover:via-primary/10 ",
        index % 2 === 0 && "hover:bg-gradient-to-l",
        className
      )}
      ref={ref}
    >
      <CardHeader>
        <Icon icon={icon} className="text-5xl h-10 mb-4 w-full  text-primary" />
        <p className="text-2xl w-full font-semibold">{title}</p>
      </CardHeader>
      <CardContent>
        <p
          className=" text-center text-md"
          dangerouslySetInnerHTML={{ __html: description }}
        ></p>
      </CardContent>
    </Card>
  )
);
