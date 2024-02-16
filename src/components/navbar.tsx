import { LogoHolderBox } from "./svgs/logo-holder";
import { useRef, useState } from "react";
import Menu from "./menu";
import Logo from "./logo";
import { useActiveLink } from "@/hooks/useRouter";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";
gsap.registerPlugin(ScrollTrigger);

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isHome = useActiveLink("/", false);
  const navRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(navRef.current, {
        y: -100,
        ease: "power3.out",
        opacity: 0.3,
        duration: 1,
      });
    },
    { scope: navRef }
  );

  return (
    <>
      <nav
        ref={navRef}
        className="fixed w-screen p-0 m-0 top-0 z-20 flex justify-center items-center"
      >
        <LogoHolderBox
          fillOpacity={isHome ? "0.31" : "0.8"}
          className="absolute z-20  -top-8"
        />
        <Logo className="relative z-20 p-3" />
      </nav>
      <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <div
        className={cn(
          "fixed h-[200vh] w-screen transition-all duration-300 ease-in-out z-10",
          isMenuOpen ? "bg-black/45" : "hidden"
        )}
      />
    </>
  );
}

export default Navbar;
