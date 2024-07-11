import React from "react";
import { Icon } from "@iconify/react";
import Container from "./ui/container";

const RenderSocial = ({
  icon,
  link,
  text,
}: {
  icon: string;
  link: string;
  text: string;
}) => (
  <div className="flex gap-4 items-center ">
    <div className="w-8 h-8 bg-background flex items-center justify-center rounded-full">
      <Icon icon={icon} className="text-foreground " />
    </div>
    <a href={link} target="_blank" rel="noreferrer">
      {text}
    </a>
  </div>
);

function Footer() {
  return (
    <footer className="flex flex-wrap items-center bg-foreground gap-10 p-8 md:p-16 lg:p-4 text-background">
      {/* <a href="/" target="_blank" rel="noreferrer" className="md:block hidden">
        X
      </a> */}
      <RenderSocial icon="akar-icons:x-fill" link="https://x.com/ap3xcapital" text="TWITTER" />
      <RenderSocial icon="akar-icons:linkedin-fill" link="https://linkedin.com/company/ap3x-capital" text="LINKEDIN" />
      <RenderSocial icon="akar-icons:medium-fill" link="/" text="MEDIUM" />
      <div className="flex-1" />
      <a href="/" className="md:block hidden" target="_blank" rel="noreferrer">
        :
      </a>
    </footer>
  );
}

export default Footer;
