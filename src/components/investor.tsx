import React from "react";
import { Slant } from "./svgs/slant";
import { Button } from "./ui/button";
import { paths } from "@/router";

export interface Investor {
  id: number;
  logoLink: string;
  href?: string;
}

interface InvestorsProps {
  investors: Investor[];
}

export default function InvestorView({ investors }: { investors: Investor[] }) {
  return (
    <div className="flex flex-col gap-5 items-center py-4 relative bg-white">
      <Slant className="absolute top-0 w-full translate-y-[-49%] " />
      <p className="text-4xl sm:text-5xl font-bold mb-4 sm:mb-6">Portfolio</p>
      <div className="grid gap-2 gap-y-16 grid-cols-4 w-[90vw] max-w-2xl">
        {investors.map((investor, index) => (
          <div key={investor.id + index} className="flex justify-center">
            <a className="" href={investor.href ? investor.href : "#"}>
              <img
                draggable={false}
                className="max-w-16 w-full h-auto hover:scale-[1.1] sm:hover:scale-[1.25] transition-all duration-300 ease-in-out"
                src={investor.logoLink}
                alt={`${index}`}
              />
            </a>
          </div>
        ))}
      </div>
      <a className="my-5" href={paths.investments}>
        <Button className="inline-flex items-center text-lg m-4 p-4 h-5">
          View More
        </Button>
      </a>
    </div>
  );
}
