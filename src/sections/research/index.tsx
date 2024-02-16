import Banner from "@/components/banner";
import ResearchView, { ResearchData } from "@/components/research";
import SearchBar from "@/components/searchBar";
import Container from "@/components/ui/container";
import { cardItems } from "@/constants";

const research: ResearchData[] = [
  {
    title: "Lorem Ipsum title ",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    date: "12th June 2021",
    link: "https://medium.com/",
  },
  {
    title: "Lorem Ipsum title ",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    date: "12th June 2021",
    link: "https://medium.com/",
  },
  {
    title: "Lorem Ipsum title ",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    date: "12th June 2021",
    link: "https://medium.com/",
  },
  {
    title: "Lorem Ipsum title ",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    date: "12th June 2021",
    link: "https://medium.com/",
  },
  {
    title: "Lorem Ipsum title ",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    date: "12th June 2021",
    link: "https://medium.com/",
  },
  {
    title: "Lorem Ipsum title ",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    date: "12th June 2021",
    link: "https://medium.com/",
  },
  {
    title: "Lorem Ipsum title ",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    date: "12th June 2021",
    link: "https://medium.com/",
  },
];

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
