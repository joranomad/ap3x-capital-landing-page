import Team from "@/components/team";
import Container from "@/components/ui/container";
import { TEAM_MEMBERS } from "./constants";
import Banner from "@/components/banner";

function Teams() {
  const render = TEAM_MEMBERS.map((member, i) => {
    return (
      <Team
        className="bg-white/35 border-white"
        key={member.name}
        name={member.name}
        role={member.role}
        text={member.description}
        imageUrl={member.image}
        index={i}
      />
    );
  });
  return (
    <Container className="pb-32">
      <>
        <Banner text="Teams" />
        {render}
      </>
    </Container>
  );
}

export default Teams;
