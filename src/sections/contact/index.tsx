import Banner from "@/components/banner";
import ContactForm from "@/components/contactForm";
import Container from "@/components/ui/container";

function Contact() {
  return (
    <Container className="px-4">
      <>
        <Banner text="Contact" />
        <ContactForm />
      </>
    </Container>
  );
}

export default Contact;
