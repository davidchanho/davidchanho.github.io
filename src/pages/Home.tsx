import Hero from "components/about/About";
import ContactForm from "components/contacts-form/ContactForm";
import Footer from "components/footer/Footer";
import Projects from "components/projects/Projects";
import Template from "components/template/Template";
import React from "react";

function Home() {
  return (
    <Template>
      <Hero />
      <Projects />
      <ContactForm />
      <Footer />
    </Template>
  );
}

export default Home;
