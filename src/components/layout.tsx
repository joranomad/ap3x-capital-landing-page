import React from "react";
import { ThemeProvider } from "./theme-provider";
import Navbar from "./navbar";
import Footer from "./footer";
import { ReactLenis } from "@studio-freight/react-lenis";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root>
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem
        disableTransitionOnChange
      >
        <Navbar />
        {children}
        <Footer />
      </ThemeProvider>
    </ReactLenis>
  );
}

export default Layout;
