import CaseStudies from "@/components/caseStudies";
import Intro from "@/components/intro";
import Investor from "@/components/investor";
import World from "@/components/world";
import { investor } from "./constants";

function Home() {
  return (
    <>
      <Intro id="home" />
      <Investor investors={investor} />
      <World />
      <CaseStudies />
    </>
  );
}

export default Home;
