import React, { Children, useRef } from "react";
import {
  Canvas,
  GroupProps,
  ThreeElements,
  useThree,
} from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { ClassValue } from "clsx";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Separator } from "./ui/separator";

gsap.registerPlugin(ScrollTrigger);

export default function World() {
  const modelPosition = [0, 0, 0];
  const containerRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const benifitsRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className=" world-container relative bg-background  w-full overflow-hidden"
    >
      <IntroDuctionSection ref={introRef} />
      <Benifits ref={benifitsRef} />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-background to-transparent">
        <Canvas
          className={cn("absolute top-0 h-full w-screen ")}
          camera={{ position: [0, 0, 30], fov: 15 }}
        >
          <Model
            containerRef={containerRef}
            introRef={introRef}
            benifitsRef={benifitsRef}
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
  introRef,
  benifitsRef,
}: {
  url: string;
  containerRef: React.RefObject<HTMLDivElement>;
  introRef: React.RefObject<HTMLDivElement>;
  benifitsRef: React.RefObject<HTMLDivElement>;
}) => {
  const { scene } = useGLTF(url);

  const three = useThree();
  const { camera } = three;
  const threeScene = three.scene;

  const containerScrollTrigger = ScrollTrigger.create({
    trigger: containerRef.current,
    start: "top center",
    end: "bottom top",
    scrub: true,
    // markers: true,
  });

  useGSAP(
    () => {
      // gsap.set(camera.position, { y: -1, z: 20 });
      // gsap.set(scene.rotation, { y: 10 });
      // gsap.set(camera.position, { y: 2, z: 15 });
      // gsap.set(scene.rotation, { y: 20 });
      // console.log(camera.position);
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
            // markers: true,
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
        // markers: true,
        // immediateRender: false,
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
    title: "Discover AP3X Capital",
    description: [
      "We are a multi-strategy crypto fund focused on liquid market strategic allocation to Private investements",
    ],
  },
  {
    title: "Our Unique Value Proposition",
    description: [
      "Strong team with robust & agile investment processes",
      "Research & thesis driven tapped into the pulse of the markets",
      "Multi-channel information sources & close collaborators",
    ],
  },
];

const IntroDuctionSection = React.forwardRef<HTMLDivElement, {}>(
  (props, ref) => {
    return (
      <div
        ref={ref}
        className="flex px-10 md:px-32 flex-col gap-10 justify-center min-h-screen w-full "
      >
        {IntroData.map((data, index) => (
          <Card
            className={index % 2 ? "ml-auto" : "mr-auto"}
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
const BenifitsData = [
  {
    title: "Why Invest in Ap3x?",
    description: ["Multi-strategy ", "Asymmetric returns ", "Risk control"],
  },
  {
    title: "Collaborate with AP3X",
    description: [
      "Incubation & development",
      "Multi-stage investing & growth ",
      "Partnerships & distribution",
    ],
  },
];

const Benifits = React.forwardRef<HTMLDivElement, {}>((props, ref) => {
  return (
    <div
      ref={ref}
      className="flex flex-col gap-10 px-10 md:px-32  min-h-screen w-full "
    >
      {BenifitsData.map((data, index) => (
        <Card
          className={index % 2 ? "ml-auto" : "mr-auto"}
          key={index}
          title={data.title}
        >
          {data.description.map((desc, index) => (
            <p key={index} className="text-center">
              {desc}
            </p>
          ))}
        </Card>
      ))}
    </div>
  );
});
