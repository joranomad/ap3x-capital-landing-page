import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import { useGLTF } from "@react-three/drei";
import {
  Canvas,
  useThree
} from "@react-three/fiber";
import { ClassValue } from "clsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef } from "react";
import { Separator } from "./ui/separator";

gsap.registerPlugin(ScrollTrigger);

export default function World() {
  const containerRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className=" world-container relative bg-background  w-full overflow-hidden"
    >
      <IntroDuctionSection ref={introRef} />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-background to-transparent">
        <Canvas
          className={cn("absolute top-0 h-full w-screen ")}
          camera={{ position: [0, 0, 30], fov: 15 }}
        >
          <Model
            containerRef={containerRef}
            introRef={introRef}
            // benifitsRef={benifitsRef}
            url={"mesh/globe.glb"}
          />
        </Canvas>
      </div>
    </div>
  );
}

const Model = ({
  url,
  containerRef,
}: {
  url: string;
  containerRef: React.RefObject<HTMLDivElement>;
  introRef: React.RefObject<HTMLDivElement>;
}) => {
  const { scene } = useGLTF(url);

  const three = useThree();
  const { camera } = three;

  useGSAP(
    () => {
      gsap.fromTo(
        camera.position,
        { y: -1.5, z: 5 },
        {
          y: 0,
          z: 15,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top center",
            end: "bottom top",
            scrub: true,
          },
        }
      );
      gsap.fromTo(
        scene.rotation,
        { y: 10 },
        {
          y: 12,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top center",
            end: "bottom top",
            scrub: true,
            // markers: true,
          },
        }
      );
    },
    { scope: containerRef, dependencies: [containerRef.current] }
  );
  return (
    <>
      <ambientLight intensity={0.1} />
      <directionalLight position={[5, 0, 5]} color={"#E3E8EF"} intensity={2} />
      <directionalLight position={[-5, 0, 5]} color={"#E3E8EF"} intensity={2} />
      <directionalLight position={[5, 0, -5]} color={"#E3E8EF"} intensity={2} />
      <directionalLight
        position={[-5, 0, -5]}
        color={"#E3E8EF"}
        intensity={2}
      />
      <group position={[0.1, -1.1, 0]}>
        <primitive object={scene} />
      </group>
    </>
  );
};

const Card = (props: {
  title: string;
  children: React.ReactNode;
  className?: ClassValue;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const seperatorRef = useRef<HTMLDivElement>(null);
  const childrenHolder = useRef<HTMLDivElement>(null);
  // show a animation when the card is in view port the element will enter from down the card length will be 0 and then it will grow to its original size
  // then the title will appear and then the children will appear

  useGSAP(
    () => {
      const trigger = ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
        invalidateOnRefresh: true,
      });
      gsap.from(containerRef.current, {
        y: 100,
        opacity: 0,
        scrollTrigger: trigger,
      });
      gsap.from(childrenHolder.current, {
        opacity: 0,
        y: 20,
        delay: 0.5,
        scrollTrigger: trigger,
      });
      gsap.from(seperatorRef.current, {
        scaleX: 0,
        scrollTrigger: trigger,
      });
    },
    { scope: containerRef, dependencies: [containerRef.current] }
  );

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative z-10 flex border border-white  md:min-w-[400px] flex-col max-w-[80vw] gap-2 md:max-w-[45vw] rounded-lg items-center justify-center bg-white/30 p-10",
        props.className
      )}
    >
      <h2 className="text-2xl font-bold mb-4">{props.title}</h2>
      <Separator ref={seperatorRef} className="mb-4 bg-foreground" />
      <div
        ref={childrenHolder}
        className="w-full flex flex-col gap-3 items-start"
      >
        {props.children}
      </div>
    </div>
  );
};
const IntroData = [
  {
    title: "A New Financial Infrastructure is Emerging",
    description: [
      " Blockchain is not just about speculation—it’s about fundamentally rebuilding financial systems that are faster, more transparent, and globally accessible.",
    ],
  },
  {
    title: "Institutional Adoption",
    description: [
      "The emergence of spot ETFs, stablecoin regulations, and blockchain-based RWAs signals that institutions are embracing digital assets as a legitimate asset class.",
    ],
  },
  {
    title: "On-Chain Growth",
    description: [
      "The next wave of blockchain adoption will be on-chain, leveraging modular chains, liquid staking, and new DeFi primitives that unlock capital efficiency."
    ],
  },
  {
    title: "Regulatory Clarity",
    description: [
      "As jurisdictions define clearer rules, institutional capital is flowing in, legitimizing the space and accelerating adoption.",
    ],
  },
];

const IntroDuctionSection = React.forwardRef<HTMLDivElement, {}>(
  (props, ref) => {
    return (
      <div
        ref={ref}
        className="flex px-10 md:px-32 flex-col gap-10 justify-center pt-10 pb-10 min-h-screen w-full "
      >
        {IntroData.map((data, index) => (
          <Card
            className={cn(
              "w-full max-w-[90%] sm:max-w-[70%] md:max-w-[60%] lg:max-w-[45%]",
              index % 2 === 0 ? "mr-auto" : "ml-auto"
            )}
          
            key={index}
            title={data.title}
          >
            {data.description.map((desc, index) => (
              <p key={index} className="text-left">
                {desc}
              </p>
            ))}
          </Card>
        ))}
      </div>
    );
  }
);