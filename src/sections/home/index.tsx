import CaseStudies from "@/components/caseStudies";
import Intro from "@/components/intro";
import Investor from "@/components/investor";
import World from "@/components/world";

function Home() {
  return (
    <>
      <Intro id="home" />
      <Investor />
      <World />
      <CaseStudies />
    </>
  );
}

export default Home;
