import React from "react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export type ResearchData = {
  title: string;
  description: string;
  date: string;
  link: string;
};
function ResearchView({ data }: { data: ResearchData[] }) {
  const cardRef = React.useRef<HTMLDivElement[]>([]);
  const containerRef = React.useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      cardRef.current.forEach((el, index) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            toggleActions: "play reverse play reverse",
            // markers: true,
          },
          y: 100,
          opacity: 0,
          duration: 1,
        });
      });
    },
    { scope: containerRef }
  );
  return (
    <div className="justify-center items-center w-full mb-10">
      <div
        className="grid grid-cols-1 md:grid-cols-2  gap-4"
        ref={containerRef}
      >
        {data.map((item, index) => (
          <div
            key={item.title}
            className={cn(
              " flex items-center justify-center ",
              index === 0 && "md:col-span-2 "
            )}
            ref={(el) => {
              if (!el) return;
              cardRef.current.push(el);
            }}
          >
            <Card
              key={item.title}
              className=" bg-white/35 m-2 flex  p-10 flex-col justify-center "
            >
              <CardHeader>
                <CardTitle
                  className={cn(
                    " text-4xl lg:text-8xl max-w-[60vw] ",
                    index !== 0 && "text-4xl lg:text-6xl"
                  )}
                >
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-xl line-clamp-3">
                  {item.description}
                </CardDescription>
                {/* <p className="text-lg my-4 ">Date: {item.date}</p> */}
                <a href={item.link} className="text-lg underline">
                  <Button className=" rounded-none px-4  my-5 hover:bg-white/65 transition-all duration-300 ease-in-out text-white">
                    Read more
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ResearchView;
