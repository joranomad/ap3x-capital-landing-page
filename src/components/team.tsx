import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import React from "react";
import { Card, CardContent } from "./ui/card";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

interface Props {
  imageUrl: string;
  name: string;
  role: string;
  text: string;
  className?: ClassValue;
  index: number;
}

const Team: React.FC<Props> = (props) => {
  const { imageUrl, name, role, text, className, index } = props;
  const containerRef = React.useRef<HTMLDivElement>(null);
  const cardRef = React.useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(cardRef.current, {
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 90%",
          toggleActions: "play reverse play reverse",
          // markers: true,
        },
        y: 300,
        ease: "power3.out",
        opacity: 0.3,
        duration: 1,
      });
    },
    { scope: containerRef }
  );
  return (
    <div ref={containerRef}>
      <Card ref={cardRef} className={cn("m-4 my-10 py-10", className)}>
        <div
          className={cn(
            "flex flex-col items-center md:flex-row gap-4 p-4  md:p-8",
            index % 2 ? "md:flex-row-reverse" : "md:flex-row"
          )}
        >
          <img src={imageUrl} alt={name} className="w-32 h-32 rounded-full" />
          <div className="md:hidden h-1 bg-white/35 w-full my-4" />
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-semibold leading-none tracking-tight">
              {name}
            </h3>
            <p className="text-lg text-muted-foreground">{role}</p>
            <p className="text-sm text-muted-foreground">{text}</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Team;
