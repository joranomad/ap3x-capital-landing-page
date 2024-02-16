import Banner from "@/components/banner"
import InvestmentsCard from "@/components/investments"
import Container from "@/components/ui/container"
import { investment } from "./constants"

function Investments() {
  return (
    <Container>
    <>  
        <Banner text="Investments"/>
        <InvestmentsCard investments={investment} />
    </>
    </ Container>
  )
}

export default Investments
