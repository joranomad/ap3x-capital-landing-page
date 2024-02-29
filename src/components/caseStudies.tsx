import React, { useRef } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import { Slant } from "./svgs/slant";
import { Button } from "./ui/button";
import { renderWithLineBreaks } from "@/lib/lineBreak";
import { cardItems } from "@/constants";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

function CaseStudies() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  useGSAP(
    () => {
      const sections = gsap.utils.toArray(sectionsRef.current);
      gsap.to(sections, {
        xPercent: -80 * sections.length, // Decrease the sensitivity by changing the value here
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          start: "top 12%",
          // markers: true,
          // snap: 1 / sections.length,
          end: () => "+=" + (Number(containerRef.current?.offsetWidth) - 1000),
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <div className="py-10 relative bg-[#E3E8EF]">
      <Slant
        fill="#E3E8EF"
        className="absolute top-0 w-full translate-y-[-50%] "
      />
      <h1 className="text-4xl sm:text-5xl mb-4 font-bold w-full py-5 text-center">
        Case studies
      </h1>
      <div
        ref={containerRef}
        className={cn(
          "flex flex-nowrap justify-start overflow-x-hidden ",
          `w-[${100 * cardItems.length}vw]`
        )}
      >
        {cardItems.map((item) => (
          <div
            key={item.title}
            className=" min-w-[100vw] max-w-[100vw] flex items-center justify-center "
            ref={(el) => {
              if (!el) return;
              sectionsRef.current.push(el);
            }}
          >
            <Card
              key={item.title}
              className=" bg-white/35 m-2 flex  max-w-[90vw] p-5 md:p-10 flex-col justify-center min-h-[80vh] max-h-[85vh]"
            >
              <CardHeader>
                <CardTitle className=" text-4xl lg:text-6xl max-w-[60vw] ">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-xl line-clamp-3">
                  {renderWithLineBreaks(item.description)}
                </CardDescription>
                {/* <p className="text-lg my-4 ">Date: {item.date}</p> */}
                <a href={item.link} className="text-lg underline ">
                  <Button className=" rounded-none px-4 my-4">Read more</Button>
                </a>
              </CardContent>
            </Card>
          </div>
        ))}
        <div
          className=" min-w-[100vw] max-w-[100vw] flex items-center justify-center "
          ref={(el) => {
            if (!el) return;
            sectionsRef.current.push(el);
          }}
        >
          <Card className=" bg-white/35 m-2 flex  max-w-[90vw] p-10 flex-col items-center justify-center min-h-[80vh] ">
            <CardHeader>
              <CardTitle className=" text-4xl text-center lg:text-8xl max-w-[60vw] ">
                Read More at Medium
              </CardTitle>
            </CardHeader>
            <CardContent>
              <a href={"/"} className="text-lg mx-auto underline">
                <Button className=" rounded-none px-4">Click Here</Button>
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default CaseStudies;
