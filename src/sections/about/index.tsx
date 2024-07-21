import Banner from "@/components/banner";
import ContactForm from "@/components/contactForm";
import Container from "@/components/ui/container";
import AboutUs from "@/components/aboutUs";

function About() {
  return (
    <Container className="px-4">
      <>
        <Banner text="About Us" />
        <AboutUs></AboutUs>
      </>
    </Container>
  );
}

export default About;
