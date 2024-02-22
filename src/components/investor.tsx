import React from "react";
import { Slant } from "./svgs/slant";
import { Button } from "./ui/button";
import { paths } from "@/router";


export default function InvestorView() {
  return (
    <div className="flex flex-col gap-5 items-center py-4 relative bg-white">
      <Slant className="absolute top-0 w-full translate-y-[-49%] " />
      <p className="text-4xl sm:text-5xl font-bold mb-4 sm:mb-6">Our Thesis</p>
      <div className="grid gap-2 gap-y-8 grid-cols-4 w-[90vw] max-w-2xl">
      </div>
      <a className="my-5" href={paths.investments}>
        <Button className="inline-flex items-center text-lg m-4 p-4 h-5">
          View More
        </Button>
      </a>
    </div>
  );
}
