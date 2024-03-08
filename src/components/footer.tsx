import React from "react";
import { Icon } from "@iconify/react";
import Container from "./ui/container";
import Logo from "./logo";

const RenderSocial = ({
  icon,
  link,
  text,
}: {
  icon: string;
  link: string;
  text: string;
}) => (
  <div className=" group flex gap-4 items-center ">
    <div className="w-8 h-8 bg-background flex items-center justify-center rounded-full">
      <Icon
        icon={icon}
        className="text-foreground group-hover:scale-150 transition-all duration-300 ease-in-out "
      />
    </div>
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="group-hover:underline"
    >
      {text}
    </a>
  </div>
);

function Footer() {
  return (
    <footer className="flex flex-wrap items-center bg-card gap-8 md:gap-10 p-4  ">
      <a href="/" target="_blank" rel="noreferrer" className="md:block hidden">
        X
      </a>
      <Logo className="w-32 pt-1" />
      <div className="flex-1" />
      <div className="flex flex-wrap gap-8 items-center">
        <RenderSocial
          icon="akar-icons:linkedin-fill"
          link="/"
          text="LINKEDIN"
        />
        <RenderSocial icon="mingcute:medium-fill" link="/" text="MEDIUM" />
      </div>

      <p className="md:block hidden">:</p>
    </footer>
  );
}

export default Footer;
