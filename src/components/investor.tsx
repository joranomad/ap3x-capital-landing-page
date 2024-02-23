import React from "react";
import { Slant } from "./svgs/slant";
import { Button } from "./ui/button";
import { paths } from "@/router";


export default function InvestorView() {
  return (
    <div className="flex flex-col gap-5 items-center py-4 relative bg-white">
      <Slant className="absolute top-0 w-full translate-y-[-49%] " />
      <p className="text-4xl sm:text-5xl font-bold mb-4 sm:mb-6">Our Thesis</p>
      <div className="mx-auto lg:max-w-[70%] sm:max-w-[90%] flex flex-wrap mb-6">
        <div className="flex flex-col items-center mx-3 lg:mx-6 mb-6">
          <img src={"./assets/thesis/secondAI.png"} className="h-10 lg:h-20 mb-3"></img>
          <div className="text-base lg:text-xl font-bold">d/AI</div>
        </div>
        <div className="flex flex-col items-center mx-3 lg:mx-6 mb-6">
          <img src={"./assets/thesis/console.png"} className="h-10 lg:h-20 mb-3"></img>
          <div className="text-base lg:text-xl font-bold">Gaming</div>
        </div>
        <div className="flex flex-col items-center mx-3 lg:mx-6 mb-6">
          <img src={"./assets/thesis/chain.png"} className="h-10 lg:h-20 mb-3"></img>
          <div className="text-base lg:text-xl font-bold">On-Chain</div>
        </div>
        <div className="flex flex-col items-center mx-3 lg:mx-6 mb-6">
          <img src={"./assets/thesis/worldwide.png"} className="h-10 lg:h-20 mb-3"></img>
          <div className="text-base lg:text-xl font-bold">Ecosystems</div>
        </div>
      </div>
    </div>
  );
}
