import React from "react";
import Hero from "../components/about";
import BlogList from "../components/blog-list";
import ContactForm from "../components/contacts-form";
import Footer from "../components/footer";
import Projects from "../components/projects";
import Template from "../components/template";
import Work from "../components/work";

function Home() {
  return (
    <Template>
      <Hero />
      <Projects />
      <Work />
      <BlogList />
      <ContactForm />
      <Footer />
    </Template>
  );
}

export default Home;
