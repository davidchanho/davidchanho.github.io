import Hero from "components/about/About";
import BlogList from "components/blog-list/BlogList";
import ContactForm from "components/contacts-form/ContactForm";
import Footer from "components/footer/Footer";
import Projects from "components/projects/Projects";
import Template from "components/template/Template";
import React from "react";
import Work from 'components/work'

function Home() {
  return (
    <Template>
      <Hero />
      <Projects />
      <Work/>
      <BlogList/>
      <ContactForm />
      <Footer />
    </Template>
  );
}

export default Home;
