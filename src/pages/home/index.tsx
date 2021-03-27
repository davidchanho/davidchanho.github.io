import React from "react";
import Hero from "../../components/about";
import ContactForm from "../../components/contacts-form";
import Footer from "../../components/footer";
import Projects from "../../components/projects";
import Template from "../../components/template";
import Work from "../../components/work";

function Home() {
  return (
    <Template>
      <Hero />
      <Projects />
      <Work />
      <ContactForm />
      <Footer />
    </Template>
  );
}

export default Home;
