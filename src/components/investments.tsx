import React from "react";
import { Button } from "./ui/button";
import { Icon } from "@iconify/react";

export interface Investment {
  id: number;
  name: string;
  logoLink?: string;
  href: string;
  category: string;
}

interface InvestmentsProps {
  investments: Investment[];
}

const InvestmentsCard: React.FC<InvestmentsProps> = ({ investments }) => {
  const uniqueCat = Array.from(new Set(investments.map((obj) => obj.category)));

  return (
    <>
      {uniqueCat.map((ele) => (
        <div className="my-10 px-4">
          <div className="flex items-center">
            <h2 className="text-xl font-bold text-secondary-foreground">
              {ele}
            </h2>
            <div className="h-0.5 bg-secondary-foreground flex-grow ml-4"></div>
          </div>
          <div className="mt-4 grid grid-cols-2 md:grid-cols-5 gap-4 py-5">
            {investments.map(
              (investment, index) =>
                investment.category === ele && (
                  <RenderInvestments
                    key={investment.name + index}
                    investment={investment}
                  />
                )
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default InvestmentsCard;

const RenderInvestments = ({ investment }: { investment: Investment }) => {
  const containerRef = React.useRef<HTMLDivElement>(null);

  return (
    <div className="flex flex-col items-center gap-2 mb-4 " key={investment.id}>
      <div className="w-16 h-16 rounded-full bg-white">
        {investment.logoLink ? (
          <img
            src={investment.logoLink}
            alt={investment.name}
            className="w-full h-full rounded-full object-cover"
          />
        ) : (
          <span className="text-xl text-bold text-secondary-foreground flex justify-center items-center mt-4">
            {investment.name.charAt(0)}
          </span>
        )}
      </div>
      <p className="text-secondary-foreground">{investment.name}</p>
      <a href={investment.href} target="_blank" rel="noreferrer">
        <Button className="inline-flex items-center m-0 p-0 h-5">
          <span className="p-1">View</span>
          <Icon icon="lets-icons:size-right-up" className="text-black mr-2" />
        </Button>
      </a>
    </div>
  );
};
