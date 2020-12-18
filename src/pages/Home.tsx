import Contacts from "components/Contacts";
import Education from "components/Education";
import FavoriteTechnology from "components/FavoriteTechnology";
import Hero from "components/Hero";
import Template from "components/layout/Template";
import Projects from "components/Projects";
import ScrollToTop from "components/ScrollToTop";
import Work from "components/Work";
import React from "react";

function Home() {
  return (
    <Template>
      <div id='about' />
      <Hero />
      <div id='education' />
      <Education />
      <div id='projects' />
      <Work />
      <Projects />
      <div id='tech' />
      <FavoriteTechnology />
      <div id='contacts' />
      <Contacts />
      <ScrollToTop />
    </Template>
  );
}

export default Home;
