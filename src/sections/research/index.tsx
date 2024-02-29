import Banner from "@/components/banner";
import ResearchView, { ResearchData } from "@/components/research";
import SearchBar from "@/components/searchBar";
import Container from "@/components/ui/container";
import { cardItems } from "@/constants";

function Research() {
  return (
    <Container className="px-4">
      <>
        <Banner text="Research" />
        <SearchBar />
        <ResearchView data={cardItems} />
      </>
    </Container>
  );
}

export default Research;
