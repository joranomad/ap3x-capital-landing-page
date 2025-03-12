import React from "react";
import { Slant } from "./svgs/slant";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Color } from "three";

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

      {/* Grid Layout Ensuring Equal Height */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-screen-lg mx-auto auto-rows-fr">
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
    title: "Venture",
    description:[
      "Allocating in transformative projects: Focusing on core ideas that will change the world",
      "Leveraging deep research: Thesis-driven investments with deep knowledge in the space",
      "Backing the market leaders of new verticals: Partnering with high caliber teams to assist and accelerate their progress"
    ]
  },
  {
    icon: "fa6-solid:gamepad",
    title: "Liquid",
    description: [
      "Agility with a purpose: Capitalising on market dislocations during peak volatility",
      "Asymmetric returns profile backed by fundamental research",
      "Conviction holds and tactical allocation ensuring versatility in all market environments"
    ]
  },
  {
    icon: "system-uicons:chain",
    title: "Absolute Return",
    description:[
      "Consistent returns through:  selective market neutral yield and arbitrage strategies",
      "Arbitrage strategies through scanning for opportunistic mis-pricing",
      "Optimising yield by ensuring capital is never idle and always generating returns"
    ]  },
];

interface IconSetProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  icon: string;
  title: string;
  index: number;
  description: string[];
}

const CardSet = React.forwardRef<HTMLDivElement, IconSetProps>(
  ({ icon, title, index, description, className, ...props }, ref) => (
    <Card
      className={cn(
        "flex flex-col items-center justify-between h-full p-10 border border-foreground rounded-lg transition-all duration-300",
        "hover:from-primary/10 hover:to-background/10 hover:bg-gradient-to-r hover:via-primary/10",
        index % 2 === 0 && "hover:bg-gradient-to-l",
        className
      )}
      ref={ref}
    >
      <CardHeader className="text-center">
        {/* <Icon icon={icon} className="text-5xl h-10 mb-4 w-full text-primary" /> */}
        <p className="text-2xl font-semibold" style={{color: '#1533C8'}}>{title}</p>
      </CardHeader>
      <CardContent className="flex-grow flex items-center">
        {/* Render the description as bullet points */}
        <ul className=" text-md space-y-2">
          {description.map((point, idx) => (
            <li key={idx} className="list-disc">{point}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
);
