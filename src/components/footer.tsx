import React from "react";
import { Icon } from "@iconify/react";
import Container from "./ui/container";

function Footer() {
  return (
    <footer className="flex bg-white gap-10 p-8 md:p-16 lg:p-4 ">
      <a href="/" target="_blank" rel="noreferrer">
        X
      </a>
      <a href="/" target="_blank">
        LINKEDIN
      </a>
      <a href="/" target="_blank">
        MEDIUM
      </a>
    </footer>
  );
}

export default Footer;
