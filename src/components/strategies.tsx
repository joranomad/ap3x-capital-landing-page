import React from "react";
import { Slant } from "./svgs/slant";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Card, CardContent, CardHeader } from "./ui/card";

gsap.registerPlugin(ScrollTrigger);

export default function Strategies() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const IconRef = React.useRef<HTMLDivElement[]>([]);

  return (
    <div
      ref={containerRef}
      className="flex flex-col gap-5 items-center py-8 pt-16 pb-32 relative bg-white"
    >
      <Slant className="absolute top-0 w-full translate-y-[-49%]" />
      <p className="text-4xl sm:text-4xl font-bold mb-4 sm:mb-6">Our Strategies</p>

      {/* Updated grid layout for equal distribution */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-screen-lg mx-auto">
        {data.map((d, i) => (
          <CardSet
            key={i}
            icon={d.icon}
            title={d.title}
            description={d.description}
            index={i}
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
      "AI investing has limited proxies in traditional financial markets (MSFT & NVDA). AI x Crypto presents undervalued opportunities. Valuation of Crypto AI is still 33x away from Web2 counterparts.",
  },
  {
    icon: "fa6-solid:gamepad",
    title: "Gaming",
    description:
      "The GameFi sector has steady growth and strong support, with tremendous profiles, and fastest retail adoption. A groundbreaking shift is underway as titans of the gaming world embrace blockchain technology.",
  },
  {
    icon: "system-uicons:chain",
    title: "On-Chain",
    description:
      "On-Chain tokens provide the highest upside potential, with clear catalysts and numerous trackable liquidity inflow events.",
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
  ({ icon, title, index, description, className, ...props }, ref) => (
    <Card
      className={cn(
        "flex-1 p-10 border border-foreground rounded-lg flex flex-col items-center justify-center aspect-square transition-all duration-300",
        "hover:from-primary/10 hover:to-background/10 hover:bg-gradient-to-r hover:via-primary/10",
        index % 2 === 0 && "hover:bg-gradient-to-l",
        className
      )}
      ref={ref}
    >
      <CardHeader className="text-center">
        <Icon icon={icon} className="text-5xl h-10 mb-4 w-full text-primary" />
        <p className="text-2xl font-semibold">{title}</p>
      </CardHeader>
      <CardContent>
        <p className="text-center text-md">{description}</p>
      </CardContent>
    </Card>
  )
);
