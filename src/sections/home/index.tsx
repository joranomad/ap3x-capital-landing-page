import CaseStudies from "@/components/caseStudies";
import Intro from "@/components/intro";
import Thesis from "@/components/thesis";
import World from "@/components/world";

function Home() {
  return (
    <>
      <Intro id="home" />
      <Thesis />
      <World />
      <CaseStudies />
    </>
  );
}

export default Home;
