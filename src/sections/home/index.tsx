import CaseStudies from "@/components/caseStudies";
import Intro from "@/components/intro";
import Strategies from "@/components/strategies";
import Thesis from "@/components/thesis";
import World from "@/components/world";

function Home() {
  return (
    <>
      <Intro id="home" />
      <Strategies />
      {/* <Thesis /> */}
      <World />
      <CaseStudies />
    </>
  );
}

export default Home;
