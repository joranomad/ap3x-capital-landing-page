import React from "react";
import { Slant } from "./svgs/slant";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutUs() {
  const containerRef = React.useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="flex flex-col gap-5 items-center py-8 pt-16  pb-32 relative bg-white"
    >
      <Slant className="absolute top-0 w-full translate-y-[-49%] " />
      <p className="text-4xl sm:text-4xl font-bold mb-4 sm:mb-6">The Fund</p>
      <div className="max-w-3xl px-6 sm:px-8 text-center">
        <p className="text-xl mb-6 font-semibold">
          AP3X Capital is a thesis-driven multi-strategy crypto fund that focuses on asymmetric risk-reward profiles.
        </p>
        <div className="text-left">
          <p className="mb-6">
            We employ a mixed liquid-venture strategy that provides us the flexibility to capture market dislocations. Our investment strategy is chain and sector agnostic and we invest in companies across multiple chains and verticals across the web3 space.
          </p>
          <p className="mb-6">
            We also incubate projects from seed, to listings, and activate post-listing catalysts. Our hands-on approach to incubation allows us to guide portfolio projects from technical to operational aspects.
          </p>
        </div>
      </div>
    </div>
  );
}